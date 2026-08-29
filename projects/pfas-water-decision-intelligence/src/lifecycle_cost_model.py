from __future__ import annotations

import argparse
from pathlib import Path

import pandas as pd
import yaml


def annuity_factor(rate: float, years: int) -> float:
    return (1 - (1 + rate) ** (-years)) / rate


def build(project: Path) -> pd.DataFrame:
    cfg = yaml.safe_load((project / "config" / "lifecycle_cost_model.yaml").read_text())
    costs = pd.read_csv(project / "results" / "case_study_cost_benchmarks.csv", dtype={"PWSID": str})
    years = int(cfg["analysis_period_years"])
    rates = [float(x) for x in cfg["discount_rates_real"]]

    rows = []
    for _, r in costs.iterrows():
        if pd.isna(r["Capital_Low_M"]):
            rows.append({
                "PWSID": r["PWSID"], "Utility": r["Utility"], "Scenario": "PENDING PILOT",
                "Discount_Rate": None, "Analysis_Years": years,
                "Capital_M": None, "Annual_OM_M": None, "OM_PV_M": None,
                "Lifecycle_PV_M": None, "Status": "Treatment CAPEX intentionally not modeled yet"
            })
            continue

        cap_low, cap_high = float(r["Capital_Low_M"]), float(r["Capital_High_M"])
        om_low, om_high = float(r["Annual_OM_Low_M"]), float(r["Annual_OM_High_M"])
        scenarios = {
            "LOW": (cap_low, om_low),
            "BASE": ((cap_low + cap_high) / 2, (om_low + om_high) / 2),
            "HIGH": (cap_high, om_high),
        }
        for name, (cap, om) in scenarios.items():
            for rate in rates:
                om_pv = om * annuity_factor(rate, years)
                rows.append({
                    "PWSID": r["PWSID"], "Utility": r["Utility"], "Scenario": name,
                    "Discount_Rate": rate, "Analysis_Years": years,
                    "Capital_M": cap, "Annual_OM_M": om, "OM_PV_M": om_pv,
                    "Lifecycle_PV_M": cap + om_pv,
                    "Status": "Planning-level scenario from published utility cost range"
                })

    df = pd.DataFrame(rows)
    df.to_csv(project / "results" / "lifecycle_cost_scenarios_rebuilt.csv", index=False)
    print(df.to_string(index=False))
    return df


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("--project", type=Path, default=Path("."))
    args = p.parse_args()
    build(args.project.resolve())


if __name__ == "__main__":
    main()
