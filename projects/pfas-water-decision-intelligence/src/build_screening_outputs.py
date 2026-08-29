from __future__ import annotations

import argparse
import sqlite3
import zipfile
from pathlib import Path

import pandas as pd


def run_sql_file(con: sqlite3.Connection, path: Path) -> None:
    con.executescript(path.read_text(encoding="utf-8"))


def join_unique(series: pd.Series) -> str:
    return ",".join(sorted({str(x).strip() for x in series if str(x).strip()}))


def build(project: Path) -> pd.DataFrame:
    db = project / "data" / "derived" / "pfas.sqlite"
    raw_zip = project / "data" / "raw" / "ucmr5-occurrence-data.zip"
    if not db.exists():
        raise FileNotFoundError(f"{db} not found. Run src/ingest_ucmr5.py first.")
    if not raw_zip.exists():
        raise FileNotFoundError(f"{raw_zip} not found.")

    out = project / "results"
    out.mkdir(parents=True, exist_ok=True)
    con = sqlite3.connect(db)
    run_sql_file(con, project / "sql" / "02_build_screening_views.sql")

    core = pd.read_sql_query("""
        SELECT
          r.pws_id AS PWSID, r.pws_name AS PWSName, r.pws_size AS Size,
          r.facility_id AS FacilityID, r.facility_name AS FacilityName,
          r.facility_water_type AS FacilityWaterType,
          r.sample_point_id AS SamplePointID, r.sample_point_name AS SamplePointName,
          r.sample_point_key, r.state AS State, r.epa_region AS Region,
          r.contaminant AS Contaminant, s.observed_events, s.detected_events,
          s.avg_epa_zero_ng_l, s.avg_half_mrl_ng_l, s.avg_mrl_ng_l,
          s.max_detected_ng_l, MIN(r.collection_date) AS first_collection_date,
          MAX(r.collection_date) AS last_collection_date,
          CASE WHEN r.facility_water_type='GW' THEN 2
               WHEN r.facility_water_type IN ('SW','GU','MX') THEN 4 END AS expected_events,
          s.is_complete_monitoring_set AS full_set,
          s.epa_average_above_mcl_comparison, s.sensitivity_class
        FROM pfas_core r
        JOIN sample_point_screening s
          ON r.pws_id=s.pws_id AND r.facility_id=s.facility_id
         AND r.sample_point_id=s.sample_point_id AND r.contaminant=s.contaminant
        GROUP BY
          r.pws_id,r.pws_name,r.pws_size,r.facility_id,r.facility_name,r.facility_water_type,
          r.sample_point_id,r.sample_point_name,r.sample_point_key,r.state,r.epa_region,r.contaminant,
          s.observed_events,s.detected_events,s.avg_epa_zero_ng_l,s.avg_half_mrl_ng_l,s.avg_mrl_ng_l,
          s.max_detected_ng_l,s.is_complete_monitoring_set,s.epa_average_above_mcl_comparison,
          s.sensitivity_class
        ORDER BY r.pws_id,r.facility_id,r.sample_point_id,r.contaminant
    """, con)

    with zipfile.ZipFile(raw_zip) as zf:
        with zf.open("UCMR5_AddtlDataElem.txt") as fh:
            addtl = pd.read_csv(fh, sep="\t", encoding="cp1252", dtype=str, keep_default_na=False, low_memory=False)
    addtl["sample_point_key"] = addtl["PWSID"] + "|" + addtl["FacilityID"] + "|" + addtl["SamplePointID"]
    ctx = addtl.groupby(["sample_point_key", "AdditionalDataElement"])["Response"].agg(join_unique).unstack(fill_value="").reset_index()
    desired = ["DisinfectantType","LithiumOccurrence","LithiumTreatment","PFASOccurrence","PFASTreatment","PotentialPFASSources","PotentialPFASSourcesDetail","TreatmentInformation"]
    for c in desired:
        if c not in ctx.columns:
            ctx[c] = ""
    core = core.merge(ctx[["sample_point_key", *desired]], on="sample_point_key", how="left")
    core.to_csv(out / "pfoa_pfos_sampling_point_screening.csv", index=False)

    pws = pd.read_sql_query("""
        SELECT pws_id AS PWSID, pws_name AS PWSName, pws_size AS Size,
               core_pfas_sample_points, flagged_point_analytes,
               max_detected_pfoa_or_pfos_ng_l, review_queue
        FROM pws_screening ORDER BY pws_id
    """, con)
    pws.to_csv(out / "pws_screening_rebuilt.csv", index=False)

    detect = pd.read_sql_query("""
        SELECT contaminant, COUNT(*) AS result_rows,
               COUNT(DISTINCT pws_id) AS systems,
               COUNT(DISTINCT sample_point_key) AS sample_points,
               SUM(is_detect) AS detections_at_or_above_mrl
        FROM silver_ucmr5 GROUP BY contaminant ORDER BY contaminant
    """, con)
    detect.to_csv(out / "contaminant_detection_summary_rebuilt.csv", index=False)

    qa = pd.read_sql_query("""
        SELECT COUNT(*) AS analytical_result_rows,
               COUNT(DISTINCT pws_id) AS public_water_systems,
               COUNT(DISTINCT pws_id || '|' || facility_id) AS facilities,
               COUNT(DISTINCT sample_point_key) AS sampling_points,
               MIN(collection_date) AS min_collection_date,
               MAX(collection_date) AS max_collection_date
        FROM silver_ucmr5
    """, con)
    qa.to_csv(out / "data_quality_summary_rebuilt.csv", index=False)
    con.close()
    print(f"Rebuilt {len(core):,} PFOA/PFOS sampling-point-analyte records.")
    return core


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("--project", type=Path, default=Path("."))
    args = p.parse_args()
    build(args.project.resolve())


if __name__ == "__main__":
    main()
