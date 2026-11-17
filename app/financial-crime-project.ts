import type { Project } from "./projects";

export const financialCrimeProject: Project = {
  slug: "financial-crime-risk-intelligence",
  index: "13",
  title: "Financial Crime Risk Intelligence",
  category: "Financial Crime Analytics · Graph ML",
  accent: "violet",
  summary:
    "A model that ranks connected groups of cryptocurrency wallets and payments in the Elliptic2 dataset by how likely they are to involve money laundering, so investigators with limited time review the riskiest first. Of the cases it placed in its top 0.5%, 94.3% were labelled suspicious, 41.53 times the rate in the data overall.",
  challenge:
    "Financial-crime monitoring is not only a classification problem. Review teams operate under severe workload constraints, suspicious cases are rare, and network behavior can be distributed across connected transactions.",
  approach:
    "I computed network features for tens of millions of wallet clusters and hundreds of millions of payments between them with DuckDB, working from disk because the graph is too large for memory. I compared statistical models with a graph neural network (GraphSAGE) and scored each by how many truly suspicious cases an investigation team would find at fixed review budgets.",
  outcome:
    "A random forest using features of each wallet cluster and its neighbours ranked cases best, and held a precision recall score of 0.528 across five different data splits. Adding more link features, or switching to the graph neural network, did not find more suspicious cases for the same review effort.",
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
      label: "Ranking score (PR-AUC)",
      detail: "How well the model ranks suspicious cases above normal ones, averaged over five different 80/20 data splits; 1.0 would be perfect.",
    },
    {
      value: "94.3%",
      label: "Suspicious in top 0.5%",
      detail: "Of the cases the model ranked in its top 0.5%, the share labelled suspicious.",
    },
    {
      value: "41.53×",
      label: "Better than chance, top 0.5%",
      detail: "Reviewing the top 0.5% finds suspicious cases 41.53 times as often as reviewing cases at random.",
    },
  ],
  validation:
    "Repeated-split stability, shuffled-label sanity, schema-leakage checks, feature-dominance review, edge-match integrity, held-out calibration, and a matched graph-native comparison were evaluated before the preferred model was finalized.",
  metricContext:
    "The model orders connected transaction patterns for human review when investigation capacity is limited. The score is a ranking signal, not proof of criminal activity.",
};
