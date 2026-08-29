from __future__ import annotations

import argparse
import zipfile
from pathlib import Path

import numpy as np
import pandas as pd
import yaml


def bool_col(s: pd.Series) -> pd.Series:
    if s.dtype == bool:
        return s
    return s.astype(str).str.lower().map({"true": True, "false": False}).fillna(False)


def code_present(series: pd.Series, codes: set[str]) -> bool:
    for x in series.fillna("").astype(str):
        tokens = {t.strip() for t in x.split(",") if t.strip()}
        if tokens.intersection(codes):
            return True
    return False


def build(project: Path) -> pd.DataFrame:
    cfg = yaml.safe_load((project / "config" / "priority_score.yaml").read_text())
    out = project / "results"
    out.mkdir(parents=True, exist_ok=True)

    sp = pd.read_csv(out / "pfoa_pfos_sampling_point_screening.csv")
    sp["PWSID"] = sp["PWSID"].astype(str).str.zfill(9)
    sp["full_set"] = bool_col(sp["full_set"])
    sp["epa_average_above_mcl_comparison"] = bool_col(sp["epa_average_above_mcl_comparison"])
    for c in ["observed_events","detected_events","avg_epa_zero_ng_l","max_detected_ng_l"]:
        sp[c] = pd.to_numeric(sp[c], errors="coerce")

    idx = ["PWSID","PWSName","Size","State","Region","FacilityID","FacilityName",
           "FacilityWaterType","SamplePointID","SamplePointName","sample_point_key"]
    pt = sp.pivot_table(
        index=idx, columns="Contaminant",
        values=["full_set","epa_average_above_mcl_comparison","avg_epa_zero_ng_l",
                "detected_events","observed_events","max_detected_ng_l"],
        aggfunc="first"
    ).reset_index()
    pt.columns = ["_".join([str(x) for x in c if str(x) != ""]) if isinstance(c, tuple) else c for c in pt.columns]

    for analyte in ["PFOA","PFOS"]:
        for base in ["full_set","epa_average_above_mcl_comparison","avg_epa_zero_ng_l","detected_events","observed_events","max_detected_ng_l"]:
            c = f"{base}_{analyte}"
            if c not in pt:
                pt[c] = np.nan

    for c in ["full_set_PFOA","full_set_PFOS","epa_average_above_mcl_comparison_PFOA","epa_average_above_mcl_comparison_PFOS"]:
        pt[c] = bool_col(pt[c])

    pt["eligible_point"] = pt["full_set_PFOA"] | pt["full_set_PFOS"]
    pt["pfoa_trigger"] = pt["epa_average_above_mcl_comparison_PFOA"]
    pt["pfos_trigger"] = pt["epa_average_above_mcl_comparison_PFOS"]
    pt["either_trigger"] = pt["pfoa_trigger"] | pt["pfos_trigger"]
    pt["max_avg_ng_l"] = pt[["avg_epa_zero_ng_l_PFOA","avg_epa_zero_ng_l_PFOS"]].max(axis=1)

    ctx_cols = ["PWSID","sample_point_key","PFASOccurrence","PFASTreatment","PotentialPFASSources","PotentialPFASSourcesDetail","TreatmentInformation"]
    pt = pt.merge(sp[ctx_cols].drop_duplicates(["PWSID","sample_point_key"]), on=["PWSID","sample_point_key"], how="left")

    eligible = pt[pt["eligible_point"]].copy()
    rows = []
    for pwsid, g in eligible.groupby("PWSID"):
        gf = g[g["either_trigger"]]
        if gf.empty:
            continue
        first = g.iloc[0]
        det = obs = 0.0
        for a in ["PFOA","PFOS"]:
            mask = gf[f"full_set_{a}"]
            det += gf.loc[mask, f"detected_events_{a}"].fillna(0).sum()
            obs += gf.loc[mask, f"observed_events_{a}"].fillna(0).sum()
        occ = gf["PFASOccurrence"].fillna("").astype(str).str.upper()
        rows.append({
            "PWSID": pwsid,
            "PWSName": first["PWSName"],
            "State": first["State"],
            "Region": first["Region"],
            "UCMR_Size": first["Size"],
            "eligible_sampling_points": int(g["sample_point_key"].nunique()),
            "flagged_sampling_points": int(gf["sample_point_key"].nunique()),
            "affected_point_fraction": gf["sample_point_key"].nunique() / g["sample_point_key"].nunique(),
            "max_pfoa_avg_ng_l": gf["avg_epa_zero_ng_l_PFOA"].max(skipna=True),
            "max_pfos_avg_ng_l": gf["avg_epa_zero_ng_l_PFOS"].max(skipna=True),
            "max_avg_ng_l": gf["max_avg_ng_l"].max(skipna=True),
            "detection_persistence": det / obs if obs else np.nan,
            "pfoa_trigger_any": bool(gf["pfoa_trigger"].any()),
            "pfos_trigger_any": bool(gf["pfos_trigger"].any()),
            "prior_pfas_testing_yes": bool(occ.eq("YES").any()),
            "prior_pfas_testing_no_all_flagged": bool(occ.eq("NO").all()) if len(occ) else False,
            "reported_targeted_pfas_modification": code_present(gf["PFASTreatment"], {"GAC","IEX","NRO"}),
            "reported_not_modified_after_testing": code_present(gf["PFASTreatment"], {"NMT"}),
            "reported_potential_pfas_source": bool(gf["PotentialPFASSources"].fillna("").astype(str).str.upper().eq("YES").any()),
            "potential_source_details": ",".join(sorted({t.strip() for x in gf["PotentialPFASSourcesDetail"].fillna("").astype(str) for t in x.split(",") if t.strip()})),
        })

    df = pd.DataFrame(rows)
    with zipfile.ZipFile(project / "data" / "raw" / "ucmr5-occurrence-data.zip") as z:
        with z.open("UCMR5_ZIPCodes.txt") as fh:
            zips = pd.read_csv(fh, sep="\t", encoding="cp1252", dtype=str, keep_default_na=False)
    zips["PWSID"] = zips["PWSID"].astype(str).str.zfill(9)
    zipagg = zips.groupby("PWSID").agg(zip_codes_served_count=("ZIPCODE","nunique"), zip_codes_served=("ZIPCODE", lambda s: ",".join(sorted(set(s))))).reset_index()
    df = df.merge(zipagg, on="PWSID", how="left")

    cutoff = float(cfg["epa_comparison_cutoff_ng_l"])
    ratio = df["max_avg_ng_l"] / cutoff
    df["severity_score_35"] = np.where(ratio >= 1, 15 + 20*np.minimum((ratio-1)/4, 1), 0)
    df["breadth_score_20"] = 20 * df["affected_point_fraction"].clip(0,1)
    df["persistence_score_15"] = 15 * df["detection_persistence"].fillna(0).clip(0,1)
    df["exposure_proxy_score_10"] = df["UCMR_Size"].map({k: float(v["points"]) for k,v in cfg["exposure_proxy"].items()})

    gap = cfg["treatment_response_gap"]
    def response_gap(r):
        if r["reported_targeted_pfas_modification"]:
            return float(gap["targeted_modification_reported"])
        if r["reported_not_modified_after_testing"]:
            return float(gap["prior_testing_and_not_modified"])
        if r["prior_pfas_testing_no_all_flagged"]:
            return float(gap["no_prior_testing_reported"])
        if r["prior_pfas_testing_yes"]:
            return float(gap["prior_testing_other_response"])
        return float(gap["unknown_or_unclassified"])

    df["response_gap_score_10"] = df.apply(response_gap, axis=1)
    df["cooccurrence_score_5"] = np.where(df["pfoa_trigger_any"] & df["pfos_trigger_any"], 5.0, 0.0)
    df["source_context_score_5"] = np.where(df["reported_potential_pfas_source"], 5.0, 0.0)
    score_cols = ["severity_score_35","breadth_score_20","persistence_score_15","exposure_proxy_score_10","response_gap_score_10","cooccurrence_score_5","source_context_score_5"]
    df["priority_score_100"] = df[score_cols].sum(axis=1).round(1)
    df["priority_tier"] = pd.cut(df["priority_score_100"], [-.01,39.999,54.999,69.999,100], labels=["Tier 4 — watch","Tier 3 — review","Tier 2 — high","Tier 1 — highest"]).astype(str)
    df = df.sort_values(["priority_score_100","max_avg_ng_l","affected_point_fraction","PWSID"], ascending=[False,False,False,True]).reset_index(drop=True)
    df.insert(0, "priority_rank", np.arange(1,len(df)+1))
    df.to_csv(out / "pws_engineering_priority.csv", index=False)
    return df


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--project", type=Path, default=Path("."))
    args = p.parse_args()
    df = build(args.project)
    print(f"Ranked {len(df):,} systems.")


if __name__ == "__main__":
    main()
