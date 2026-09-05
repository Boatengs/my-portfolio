import type { Project } from "./projects";

export const financialCrimeProject: Project = {
  slug: "financial-crime-risk-intelligence",
  index: "13",
  title: "Financial Crime Risk Intelligence",
  category: "Financial Crime Analytics · Graph ML",
  accent: "violet",
  summary:
    "A large-scale Elliptic2 AML decision-support project combining out-of-core graph feature engineering, validated model selection, constrained-review prioritization, calibration, and case-specific statistical evidence.",
  challenge:
    "Financial-crime monitoring is not only a classification problem. Review teams operate under severe workload constraints, suspicious cases are rare, and network behavior can be distributed across connected transactions.",
  approach:
    "The project builds an out-of-core DuckDB and Parquet feature pipeline across tens of millions of nodes and hundreds of millions of edges, compares statistical and graph models, and evaluates investigator-value under explicit review-capacity limits.",
  outcome:
    "The node-enriched random forest produced the strongest operational ranking result, while larger edge enrichment and a matched GraphSAGE benchmark provided useful evidence that greater model complexity did not automatically improve investigator value.",
  applications:
    "The workflow demonstrates review prioritization, workload-aware model evaluation, calibration, and evidence presentation for financial-crime analytics and other rare-event investigation settings.",
  tools: [
    "Python",
    "DuckDB",
    "Parquet",
    "Pandas",
    "scikit-learn",
    "PyTorch",
    "PyTorch Geometric",
    "Plotly",
  ],
  limitations:
    "Elliptic2 features are anonymized. Scores and evidence cues do not identify real people, establish criminal conduct, make legal determinations, or automate regulatory reporting.",
  future:
    "A full-background-graph GLASS reproduction remains an optional research extension after the completed matched GraphSAGE benchmark.",
  filters: ["Data Analytics", "Machine Learning"],
  dataset: "Elliptic2 blockchain transaction graph",
  datasetSize: "49.3M background nodes · 196.2M edges · 121,810 labeled components",
  datasetSource: "Elliptic2 public dataset",
  datasetUrl: "https://www.kaggle.com/datasets/ellipticco/elliptic2-data-set",
  repoUrl: "https://github.com/Boatengs/financial-crime-risk-intelligence",
  evidence: [
    {
      value: "0.528",
      label: "Repeated PR-AUC",
      detail: "The preferred node-enriched random forest remained stable across five stratified 80/20 splits.",
    },
    {
      value: "94.3%",
      label: "Precision @ 0.5%",
      detail: "Precision at the tightest tested investigator review budget.",
    },
    {
      value: "41.53×",
      label: "Top-0.5% review lift",
      detail: "Lift over prevalence at the tightest tested review budget.",
    },
  ],
  validation:
    "Repeated-split stability, shuffled-label sanity, schema-leakage checks, feature-dominance review, edge-match integrity, held-out calibration, and a matched graph-native comparison were evaluated before the preferred model was finalized.",
  metricContext:
    "The model orders connected transaction patterns for human review when investigation capacity is limited. The score is a ranking signal, not proof of criminal activity.",
};
