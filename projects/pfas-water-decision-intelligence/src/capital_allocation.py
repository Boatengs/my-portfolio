from __future__ import annotations

import argparse
from pathlib import Path

import numpy as np
import pandas as pd
import yaml
from scipy.optimize import Bounds, LinearConstraint, milp


def build(project: Path) -> tuple[pd.DataFrame, pd.DataFrame, pd.DataFrame]:
    cfg = yaml.safe_load((project / "config" / "capital_allocation.yaml").read_text())
    df = pd.read_csv(project / "results" / "pws_engineering_priority.csv", dtype={"PWSID": str})
    award_schedules = cfg["award_schedules_millions"]
    budgets = [float(x) for x in cfg["program_budget_millions"]]

    def award_for(row, schedule="BASE"):
        a = award_schedules[schedule][row.UCMR_Size]
        extra = max(0, int(row.flagged_sampling_points) - 1)
        return min(float(a["cap_m"]), float(a["base_m"]) + float(a["additional_point_m"]) * extra)

    def solve(budget, mode, schedule="BASE"):
        costs = np.array([award_for(r, schedule) for r in df.itertuples()], dtype=float)
        score = df["priority_score_100"].to_numpy(float)
        large = (df["UCMR_Size"] == "L").to_numpy(float)
        small = 1.0 - large
        benefit = score if mode == "PRIORITY_REACH" else score * (1.0 + large)
        constraints = [LinearConstraint(costs, -np.inf, budget)]

        if mode == "BALANCED":
            min_small = float(cfg["balanced_portfolio_constraints"]["minimum_small_system_share_by_count"])
            min_large = float(cfg["balanced_portfolio_constraints"]["minimum_large_system_share_by_count"])
            constraints.append(LinearConstraint((1-min_small)*small - min_small*large, 0, np.inf))
            constraints.append(LinearConstraint((1-min_large)*large - min_large*small, 0, np.inf))
            max_state = float(cfg["balanced_portfolio_constraints"]["maximum_single_state_share_of_program_budget"])
            for st in sorted(df["State"].unique()):
                coeff = np.where(df["State"].eq(st).to_numpy(), costs, 0.0)
                constraints.append(LinearConstraint(coeff, -np.inf, max_state * budget))

        res = milp(
            c=-benefit,
            integrality=np.ones(len(df)),
            bounds=Bounds(np.zeros(len(df)), np.ones(len(df))),
            constraints=constraints,
            options={"time_limit": 30.0},
        )
        if not res.success:
            raise RuntimeError(res.message)
        idx = np.where(np.rint(res.x).astype(int) == 1)[0]
        return idx, costs, benefit

    summaries, selections, sensitivities = [], [], []
    for mode in ["PRIORITY_REACH", "EXPOSURE_EMPHASIS", "BALANCED"]:
        for budget in budgets:
            idx, costs, benefit = solve(budget, mode, "BASE")
            chosen = df.iloc[idx]
            used = float(costs[idx].sum())
            small_n = int(chosen["UCMR_Size"].eq("S").sum())
            large_n = len(chosen) - small_n
            state_spend = {}
            for i in idx:
                state_spend[df.iloc[i]["State"]] = state_spend.get(df.iloc[i]["State"], 0.0) + float(costs[i])
            total_points = float(chosen["priority_score_100"].sum())
            summaries.append({
                "Model": mode, "Award_Schedule": "BASE", "Budget_M": budget,
                "Budget_Used_M": used, "Budget_Utilization_Pct": 100*used/budget,
                "Systems_Selected": len(chosen),
                "Tier1_Selected": int(chosen["priority_tier"].eq("Tier 1 — highest").sum()),
                "Small_Systems_Selected": small_n, "Large_Systems_Selected": large_n,
                "Small_System_Share_Pct": 100*small_n/len(chosen),
                "Large_System_Share_Pct": 100*large_n/len(chosen),
                "States_Represented": int(chosen["State"].nunique()),
                "EPA_Regions_Represented": int(chosen["Region"].nunique()),
                "Total_Priority_Points": total_points,
                "Average_Priority_Score": total_points/len(chosen),
                "Priority_Points_per_$M": total_points/used,
                "Max_State_Budget_Share_Pct": 100*max(state_spend.values())/budget,
            })
            for i in idx:
                r = df.iloc[i]
                selections.append({
                    "Model": mode, "Award_Schedule": "BASE", "Budget_M": budget,
                    "PWSID": r.PWSID, "PWSName": r.PWSName, "State": r.State, "Region": r.Region,
                    "UCMR_Size": r.UCMR_Size, "Priority_Rank": int(r.priority_rank),
                    "Priority_Score": float(r.priority_score_100), "Priority_Tier": r.priority_tier,
                    "Flagged_Sampling_Points": int(r.flagged_sampling_points),
                    "Affected_Point_Fraction": float(r.affected_point_fraction),
                    "Max_Core_PFAS_Avg_ng_L": float(r.max_avg_ng_l),
                    "Standardized_Award_M": float(costs[i]),
                    "Objective_Benefit_Units": float(benefit[i]),
                })

    for schedule in ["LOW", "BASE", "HIGH"]:
        for budget in budgets:
            idx, costs, _ = solve(budget, "BALANCED", schedule)
            chosen = df.iloc[idx]
            small_n = int(chosen["UCMR_Size"].eq("S").sum())
            sensitivities.append({
                "Award_Schedule": schedule, "Budget_M": budget,
                "Systems_Selected": len(chosen),
                "Tier1_Selected": int(chosen["priority_tier"].eq("Tier 1 — highest").sum()),
                "Small_System_Share_Pct": 100*small_n/len(chosen),
                "Large_System_Share_Pct": 100*(len(chosen)-small_n)/len(chosen),
                "Budget_Used_M": float(costs[idx].sum()),
                "Total_Priority_Points": float(chosen["priority_score_100"].sum()),
            })

    summary_df = pd.DataFrame(summaries)
    selected_df = pd.DataFrame(selections)
    sensitivity_df = pd.DataFrame(sensitivities)
    summary_df.to_csv(project / "results" / "capital_allocation_summary_rebuilt.csv", index=False)
    selected_df.to_csv(project / "results" / "capital_allocation_selected_systems_rebuilt.csv", index=False)
    sensitivity_df.to_csv(project / "results" / "capital_allocation_sensitivity_rebuilt.csv", index=False)
    return summary_df, selected_df, sensitivity_df


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("--project", type=Path, default=Path("."))
    args = p.parse_args()
    build(args.project.resolve())


if __name__ == "__main__":
    main()
