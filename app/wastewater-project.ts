import type { Project } from "./projects";

export const wastewaterProject: Project = {
  slug: "wastewater-infrastructure-analytics",
  index: "12",
  title: "Wastewater Infrastructure Analytics",
  category: "Infrastructure Analytics · Asset Management",
  accent: "aqua",
  summary:
    "A reproducible wastewater asset-management and capital-planning framework that connects utility data ingestion, SQL quality assurance, transparent risk scoring, lifecycle cost analysis, and constrained investment prioritization.",
  challenge:
    "Wastewater utilities often manage condition, inspection, work-order, GIS, cost, and criticality information across separate systems. The analytical challenge is to turn those disconnected records into a defensible view of which assets deserve engineering attention first and how limited capital can be allocated without hiding assumptions inside a black-box score.",
  approach:
    "The project builds a configuration-driven Python and SQL pipeline that ingests asset records, preserves identifiers, validates structural quality, calculates likelihood-of-failure and consequence-of-failure risk with an explicit criticality multiplier, develops lifecycle cost scenarios, tests capital portfolios across multiple budget levels, and produces reviewer-ready outputs. Assumptions live in YAML configuration files so scoring and funding logic remain visible and adjustable.",
  outcome:
    "The current repository delivers a tested end-to-end decision-support architecture rather than claiming utility-specific findings before real operational data are connected. It demonstrates how wastewater asset information can move from raw records to quality-controlled risk rankings, planning-level lifecycle economics, and transparent capital scenarios while keeping engineering judgment and data limitations explicit.",
  applications:
    "The framework can support wastewater utilities, public works departments, consulting engineers, asset-management teams, capital-program offices, and infrastructure funding programs working with gravity sewers, force mains, manholes, pump stations, treatment assets, CCTV inspections, CMMS histories, and rehabilitation or replacement planning.",
  tools: ["Python", "SQL", "Pandas", "SQLite", "YAML", "Matplotlib"],
  limitations:
    "The public project currently uses a synthetic fixture to validate the workflow. Utility-specific condition, failure probability, service consequence, project readiness, and cost conclusions require verified GIS, CMMS, CCTV, inspection, hydraulic, and financial data before they should guide real capital decisions.",
  future:
    "Connect verified utility GIS, CMMS, CCTV/PACP, work-order, hydraulic, overflow, and cost data; calibrate likelihood and consequence models with local history; add geospatial and network context; improve project bundling and dependency logic; and validate capital recommendations with engineering and operations stakeholders.",
  filters: ["Data Analytics"],
  dataset: "Wastewater asset-management schema and synthetic CI fixture",
  datasetSize: "Synthetic validation fixture · utility-ready asset schema",
  datasetSource: "Project-authored test fixture and documented utility data model",
  datasetUrl: "https://github.com/Boatengs/wastewater-infrastructure-analytics",
  repoUrl: "https://github.com/Boatengs/wastewater-infrastructure-analytics",
  evidence: [
    {
      value: "6",
      label: "Decision stages",
      detail:
        "Ingestion, SQL QA, risk scoring, lifecycle cost analysis, capital allocation, and figure generation are connected through one pipeline.",
    },
    {
      value: "4",
      label: "Capital scenarios",
      detail:
        "$1M, $5M, $10M, and $25M planning budgets are configured for transparent portfolio testing.",
    },
    {
      value: "LoF × CoF",
      label: "Risk foundation",
      detail:
        "Likelihood and consequence scores are combined with an explicit criticality multiplier rather than a hidden model score.",
    },
    {
      value: "PASS",
      label: "End-to-end CI",
      detail:
        "GitHub Actions runs unit tests and the complete wastewater pipeline against a synthetic asset fixture.",
    },
  ],
  validation:
    "The public repository includes unit tests, SQL quality checks, a synthetic smoke-test dataset, and GitHub Actions that execute the complete pipeline. The evidence validates reproducibility and workflow behavior; no utility-specific performance or capital outcome is claimed without verified source data.",
  metricContext:
    "Risk scores and funding scenarios are planning-support outputs. They are not regulatory determinations, certified condition assessments, failure probabilities, or final engineering cost estimates.",
};
