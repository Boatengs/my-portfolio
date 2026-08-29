from __future__ import annotations

import argparse
from pathlib import Path

import pandas as pd
import yaml


def build(project: Path) -> pd.DataFrame:
    cfg = yaml.safe_load((project / "config" / "case_study_facts.yaml").read_text(encoding="utf-8"))
    priority = pd.read_csv(project / "results" / "pws_engineering_priority.csv", dtype={"PWSID": str})
    priority["PWSID"] = priority["PWSID"].str.zfill(9)

    rows = []
    for pwsid, facts in cfg["utilities"].items():
        hit = priority.loc[priority["PWSID"] == pwsid]
        if hit.empty:
            raise ValueError(f"PWSID {pwsid} not found in engineering-priority table")
        p = hit.iloc[0]
        row = dict(facts)
        row.update({
            "PWSID": pwsid,
            "National_Priority_Rank": int(p["priority_rank"]),
            "Priority_Score": float(p["priority_score_100"]),
            "Priority_Tier": p["priority_tier"],
            "UCMR_Size": p["UCMR_Size"],
            "UCMR_Max_PFOA_Avg_ng_L": float(p["max_pfoa_avg_ng_l"]),
            "UCMR_Max_PFOS_Avg_ng_L": float(p["max_pfos_avg_ng_l"]),
            "Affected_Sampling_Point_Fraction": float(p["affected_point_fraction"]),
        })
        rows.append(row)

    df = pd.DataFrame(rows).sort_values("National_Priority_Rank")
    df.to_csv(project / "results" / "utility_case_studies_rebuilt.csv", index=False)
    print(df[["PWSID","Utility","National_Priority_Rank","Priority_Score","project_stage"]].to_string(index=False))
    return df


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("--project", type=Path, default=Path("."))
    args = p.parse_args()
    build(args.project.resolve())


if __name__ == "__main__":
    main()
