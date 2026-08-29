# PFAS Drinking Water Decision Intelligence

**National PFAS screening → engineering prioritization → utility case studies → lifecycle economics → capital-allocation optimization**

This portfolio project analyzes EPA UCMR 5 drinking-water monitoring data and asks:

> **Which public water systems show the strongest evidence of potential PFOA/PFOS treatment need, what should be evaluated next, and how should limited infrastructure funding be prioritized?**

## Headline results
- **1,992,002** analytical results processed
- **10,313** public water systems analyzed
- **26,732** sampling points represented
- **1,127** systems advanced to engineering-review screening
- **388** Tier 1 engineering priorities
- **3** verified utility case studies
- **20-year** lifecycle cost sensitivity analysis
- **$100M / $250M / $500M / $1B** capital-allocation scenarios

> **Important:** UCMR 5 occurrence data do not by themselves establish PFAS regulatory compliance or noncompliance. This project uses UCMR results for technical screening and prioritization.

## What the project demonstrates

### EPA-aligned screening
The pipeline preserves identifiers, converts µg/L to ng/L, keeps censored results explicit, and applies complete-location PFOA/PFOS screening logic with nondetect sensitivity scenarios.

### Transparent engineering priority
A decomposable 100-point score combines contamination severity, affected-point breadth, detection persistence, system-size exposure proxy, reported treatment-response gap, PFOA/PFOS co-occurrence, and reported potential-source context.

### Verified case studies
- **Emmaus Borough, PA** — groundwater; remediation, lifecycle economics and affordability
- **Fayetteville PWC, NC** — large surface-water system; GAC implementation, O&M and funding risk
- **Waite Park, MN** — small groundwater system; pilot/design and GAC-vs-IX decision support

### Capital-allocation optimization
Mixed-integer optimization tests constrained PFAS assistance portfolios under $100M–$1B budgets. Standardized awards are treated as program-assistance assumptions, **not** full construction-cost estimates.

## Code map
```text
run_pipeline.py
src/
├── ingest_ucmr5.py
├── build_screening_outputs.py
├── build_engineering_priority.py
├── build_case_studies.py
├── lifecycle_cost_model.py
├── capital_allocation.py
├── generate_figures.py
└── run_sql.py
sql/
├── 01_quality_checks.sql
└── 02_build_screening_views.sql
config/
├── priority_score.yaml
├── capital_allocation.yaml
├── regulatory_scenarios.yaml
├── lifecycle_cost_model.yaml
└── case_study_facts.yaml
```

See [`CODEBASE_GUIDE.md`](CODEBASE_GUIDE.md) for the analytical flow.

## Reviewer-friendly outputs
- [`results/top_50_priority_systems.csv`](results/top_50_priority_systems.csv)
- [`results/capital_allocation_summary.csv`](results/capital_allocation_summary.csv)
- [`results/state_priority_summary.csv`](results/state_priority_summary.csv)
- [`results/utility_case_studies.csv`](results/utility_case_studies.csv)
- [`reports/CURRENT_FINDINGS.md`](reports/CURRENT_FINDINGS.md)
- [`reports/UTILITY_CASE_STUDIES.md`](reports/UTILITY_CASE_STUDIES.md)
- [`reports/LIFECYCLE_COST_ANALYSIS.md`](reports/LIFECYCLE_COST_ANALYSIS.md)
- [`reports/CAPITAL_ALLOCATION_MODEL.md`](reports/CAPITAL_ALLOCATION_MODEL.md)

## Reproduce the analysis
```bash
python -m venv .venv
source .venv/bin/activate          # Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

Download the EPA UCMR 5 Occurrence Data Text Files ZIP and save it as `data/raw/ucmr5-occurrence-data.zip`, then run:

```bash
python run_pipeline.py --project .
```

The raw EPA archive is intentionally not committed to GitHub. See [`data/README.md`](data/README.md).

## Methods and limitations
The project keeps measured evidence, regulatory-screening assumptions, engineering-priority assumptions, verified utility facts, cost assumptions and policy-allocation assumptions separate. Major limitations include the lack of nationally consistent current design flow, exact current population, project readiness and site-specific treatment cost.

## Sources
Primary national source: **U.S. EPA Fifth Unregulated Contaminant Monitoring Rule (UCMR 5)**. Utility-specific evidence and EPA treatment/funding sources are documented in [`sources/SOURCE_REGISTER.md`](sources/SOURCE_REGISTER.md).
