# Codebase Guide

If you are reviewing this project for a data/engineering role, start here.

## Core analytical pipeline

```text
EPA UCMR 5 ZIP
    |
    v
src/ingest_ucmr5.py
    |  typed SQLite model + unit normalization + censor flags
    v
sql/01_quality_checks.sql
sql/02_build_screening_views.sql
    |
    v
src/build_screening_outputs.py
    |  PFOA/PFOS complete-location screening + UCMR context
    v
src/build_engineering_priority.py
    |  transparent 100-point engineering-review priority
    v
src/build_case_studies.py
    |  three verified utility case studies
    +-------------------+
    |                   |
    v                   v
src/lifecycle_cost_model.py     src/capital_allocation.py
20-year lifecycle PV            mixed-integer funding optimization
    |                   |
    +---------+---------+
              v
       src/generate_figures.py
```

## Run it

```bash
pip install -r requirements.txt
python run_pipeline.py --project .
```

The full raw EPA ZIP is intentionally excluded from GitHub. Download it into `data/raw/` first.

## Where the methods live

- Regulatory/scenario assumptions: `config/regulatory_scenarios.yaml`
- Priority weights: `config/priority_score.yaml`
- Verified case-study facts: `config/case_study_facts.yaml`
- Lifecycle assumptions: `config/lifecycle_cost_model.yaml`
- Capital-allocation assumptions: `config/capital_allocation.yaml`

## Reviewer-friendly outputs

- Top 100 national priorities: `results/top_100_priority_systems.csv`
- State summary: `results/state_priority_summary.csv`
- Capital allocation summary: `results/capital_allocation_summary.csv`
- Case studies: `results/utility_case_studies.csv`
- Consolidated findings: `reports/CURRENT_FINDINGS.md`

The local master package also contains the full Excel workbook, PDF consulting report, complete priority tables, and raw EPA source archive; those larger files are intentionally kept out of this portfolio subfolder.
