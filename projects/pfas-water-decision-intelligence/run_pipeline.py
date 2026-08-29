from __future__ import annotations

import argparse
import subprocess
import sys
from pathlib import Path


def run(cmd: list[str], cwd: Path) -> None:
    print("\n$", " ".join(cmd))
    subprocess.run(cmd, cwd=cwd, check=True)


def main() -> None:
    p = argparse.ArgumentParser(description="Rebuild the PFAS analysis pipeline from the EPA UCMR 5 ZIP.")
    p.add_argument("--project", type=Path, default=Path("."))
    p.add_argument("--skip-ingest", action="store_true", help="Use existing data/derived/pfas.sqlite")
    args = p.parse_args()
    project = args.project.resolve()
    py = sys.executable

    if not args.skip_ingest:
        run([py, "src/ingest_ucmr5.py", "--zip", "data/raw/ucmr5-occurrence-data.zip", "--db", "data/derived/pfas.sqlite"], project)

    run([py, "src/run_sql.py", "--db", "data/derived/pfas.sqlite", "--sql", "sql/01_quality_checks.sql"], project)
    run([py, "src/build_screening_outputs.py", "--project", str(project)], project)
    run([py, "src/build_engineering_priority.py", "--project", str(project)], project)
    run([py, "src/build_case_studies.py", "--project", str(project)], project)
    run([py, "src/lifecycle_cost_model.py", "--project", str(project)], project)
    run([py, "src/capital_allocation.py", "--project", str(project)], project)
    run([py, "src/generate_figures.py", "--project", str(project)], project)

    print("\nPipeline complete.")


if __name__ == "__main__":
    main()
