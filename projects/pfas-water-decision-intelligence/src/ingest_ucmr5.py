from __future__ import annotations

import argparse
import csv
import sqlite3
import zipfile
from pathlib import Path

import pandas as pd


REQUIRED_COLUMNS = {
    "PWSID", "PWSName", "Size", "FacilityID", "FacilityName",
    "FacilityWaterType", "SamplePointID", "SamplePointName",
    "SamplePointType", "CollectionDate", "SampleID", "Contaminant",
    "MRL", "Units", "MethodID", "AnalyticalResultsSign",
    "AnalyticalResultValue", "SampleEventCode", "Region", "State"
}


def find_primary_member(zf: zipfile.ZipFile) -> str:
    names = zf.namelist()
    exact = [n for n in names if Path(n).name.lower() == "ucmr5_all.txt"]
    if exact:
        return exact[0]
    candidates = [
        n for n in names
        if Path(n).suffix.lower() == ".txt"
        and "ucmr5_all" in Path(n).name.lower()
        and "zipcode" not in n.lower()
        and "addtldataelem" not in n.lower()
    ]
    if not candidates:
        raise FileNotFoundError("Could not find UCMR5_All.txt in the EPA ZIP.")
    return sorted(candidates, key=lambda x: len(Path(x).name))[0]


def detect_encoding(zf: zipfile.ZipFile, member: str) -> str:
    with zf.open(member) as fh:
        sample = fh.read(200_000)
    if b"\xc2\xb5" in sample or sample.startswith(b"\xef\xbb\xbf"):
        return "utf-8-sig"
    return "cp1252"


def read_header(zf: zipfile.ZipFile, member: str, encoding: str) -> list[str]:
    with zf.open(member) as fh:
        first = fh.readline().decode(encoding).rstrip("\r\n")
    return next(csv.reader([first], delimiter="\t"))


def ingest(zip_path: Path, db_path: Path, chunk_size: int = 100_000) -> None:
    db_path.parent.mkdir(parents=True, exist_ok=True)
    if db_path.exists():
        db_path.unlink()

    con = sqlite3.connect(db_path)
    con.execute("PRAGMA journal_mode=WAL")
    con.execute("PRAGMA synchronous=NORMAL")
    con.execute("PRAGMA temp_store=MEMORY")

    with zipfile.ZipFile(zip_path) as zf:
        member = find_primary_member(zf)
        encoding = detect_encoding(zf, member)
        cols = read_header(zf, member, encoding)
        missing = REQUIRED_COLUMNS.difference(cols)
        if missing:
            raise ValueError(f"Missing required EPA columns: {sorted(missing)}")

        dtype = {c: "string" for c in cols}
        first_chunk = True

        with zf.open(member) as fh:
            reader = pd.read_csv(
                fh, sep="\t", dtype=dtype, chunksize=chunk_size,
                keep_default_na=False, low_memory=False, encoding=encoding
            )
            for i, chunk in enumerate(reader, 1):
                chunk.to_sql(
                    "bronze_ucmr5", con,
                    if_exists="replace" if first_chunk else "append",
                    index=False, method="multi", chunksize=2_000
                )
                first_chunk = False
                print(f"Loaded chunk {i}: {len(chunk):,} rows")

    if first_chunk:
        raise ValueError("EPA analytical-result file had no rows.")

    units = con.execute("""
        SELECT Units, COUNT(*) FROM bronze_ucmr5
        GROUP BY Units ORDER BY COUNT(*) DESC
    """).fetchall()
    bad_units = [u for u, _ in units if u not in ("µg/L", "ug/L", "μg/L")]
    if bad_units:
        raise ValueError(f"Unexpected result units: {bad_units}")

    con.execute("DROP TABLE IF EXISTS silver_ucmr5")
    con.execute("""
        CREATE TABLE silver_ucmr5 (
            pws_id TEXT, pws_name TEXT, pws_size TEXT,
            facility_id TEXT, facility_name TEXT, facility_water_type TEXT,
            sample_point_id TEXT, sample_point_name TEXT, sample_point_type TEXT,
            collection_date TEXT, sample_id TEXT, contaminant TEXT,
            mrl_ug_l REAL, mrl_ng_l REAL, source_units TEXT, method_id TEXT,
            result_sign TEXT, result_ug_l REAL, result_ng_l REAL,
            is_detect INTEGER, is_censored INTEGER, sample_event_code TEXT,
            monitoring_requirement TEXT, epa_region TEXT, state TEXT,
            sample_point_key TEXT, sample_event_key TEXT, collection_year INTEGER
        )
    """)

    con.execute("""
        INSERT INTO silver_ucmr5
        SELECT
            PWSID, PWSName, Size, FacilityID, FacilityName, FacilityWaterType,
            SamplePointID, SamplePointName, SamplePointType,
            CASE WHEN length(CollectionDate) = 10
                 THEN substr(CollectionDate, 7, 4) || '-' || substr(CollectionDate, 1, 2) || '-' || substr(CollectionDate, 4, 2)
                 ELSE NULL END,
            SampleID, trim(Contaminant),
            CASE WHEN trim(MRL) = '' THEN NULL ELSE CAST(MRL AS REAL) END,
            CASE WHEN trim(MRL) = '' THEN NULL ELSE CAST(MRL AS REAL) * 1000.0 END,
            Units, MethodID, AnalyticalResultsSign,
            CASE WHEN trim(AnalyticalResultValue) = '' THEN NULL ELSE CAST(AnalyticalResultValue AS REAL) END,
            CASE WHEN trim(AnalyticalResultValue) = '' THEN NULL ELSE CAST(AnalyticalResultValue AS REAL) * 1000.0 END,
            CASE WHEN AnalyticalResultsSign = '=' THEN 1 ELSE 0 END,
            CASE WHEN AnalyticalResultsSign = '<' THEN 1 ELSE 0 END,
            SampleEventCode, MonitoringRequirement, Region, State,
            PWSID || '|' || FacilityID || '|' || SamplePointID,
            PWSID || '|' || FacilityID || '|' || SamplePointID || '|' || SampleEventCode,
            CASE WHEN length(CollectionDate) = 10 THEN CAST(substr(CollectionDate, 7, 4) AS INTEGER) END
        FROM bronze_ucmr5
    """)

    con.executescript("""
        CREATE INDEX idx_silver_pws ON silver_ucmr5(pws_id);
        CREATE INDEX idx_silver_contaminant ON silver_ucmr5(contaminant);
        CREATE INDEX idx_silver_sample_point ON silver_ucmr5(sample_point_key);
        CREATE INDEX idx_silver_event ON silver_ucmr5(sample_event_key);
        CREATE INDEX idx_silver_state ON silver_ucmr5(state);
    """)
    con.commit()

    rows = con.execute("SELECT COUNT(*) FROM silver_ucmr5").fetchone()[0]
    systems = con.execute("SELECT COUNT(DISTINCT pws_id) FROM silver_ucmr5").fetchone()[0]
    points = con.execute("SELECT COUNT(DISTINCT sample_point_key) FROM silver_ucmr5").fetchone()[0]
    print("\nIngestion complete")
    print(f"Rows: {rows:,}")
    print(f"Distinct PWS: {systems:,}")
    print(f"Distinct sample points: {points:,}")
    print(f"SQLite database: {db_path}")
    con.close()


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("--zip", required=True, type=Path)
    p.add_argument("--db", default=Path("data/derived/pfas.sqlite"), type=Path)
    p.add_argument("--chunk-size", default=100_000, type=int)
    args = p.parse_args()
    ingest(args.zip, args.db, args.chunk_size)


if __name__ == "__main__":
    main()
