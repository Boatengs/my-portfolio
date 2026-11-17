import type { Project } from "./projects";

export const pfasProject: Project = {
  slug: "pfas-water-decision-intelligence",
  index: "11",
  title: "PFAS Drinking Water Decision Intelligence",
  category: "Environmental Analytics · Decision Intelligence",
  accent: "aqua",
  summary:
    "An analysis of 1.99 million EPA test results for PFAS, the long-lasting 'forever chemicals', across 10,313 U.S. drinking water systems. It flags the 1,127 systems that tripped the PFOA or PFOS screening rule, ranks them for engineering review with 388 in the top tier, and tests how $100M to $1B in funding could be spread across them.",
  challenge:
    "PFAS in drinking water is a national infrastructure concern, but occurrence data alone do not tell engineers, utilities, funders, or policy teams where deeper review should begin. The challenge is to move from millions of monitoring records to a transparent view of potential treatment need, utility context, lifecycle economics, and funding priorities.",
  approach:
    "The project builds a reproducible EPA data pipeline, applies documented PFOA/PFOS screening logic, ranks 1,127 systems with a transparent engineering-review framework, verifies three real-world utility case studies, models 20-year lifecycle cost sensitivity, and tests constrained capital-assistance portfolios with mixed-integer optimization.",
  outcome:
    "The result is a ranked review list. 1,127 systems tripped the screening rule and 388 landed in the top priority tier, and every score breaks down into its parts on a 100 point scale. Three utilities were checked against their own published records, the cost model covers 20 years of treatment costs, and the funding scenarios test how far budgets of $100M to $1B would go. Each step labels what is measured by EPA and what is an assumption.",
  applications:
    "This work can support drinking-water utilities, environmental and civil engineering teams, state revolving-fund programs, emerging-contaminant assistance programs, public-sector capital planning, treatment-alternative screening, affordability analysis, and infrastructure portfolio prioritization.",
  tools: [
    "Python",
    "SQL",
    "SQLite",
    "EPA UCMR 5",
    "Data QA",
    "Engineering Prioritization",
    "Lifecycle Cost Modeling",
    "Mixed-Integer Optimization",
    "Scenario Analysis",
  ],
  limitations:
    "The national model does not contain nationally consistent current design flow, exact current population, project readiness, site-specific treatment cost, or complete current process-train information for every screened system. UCMR size class is therefore used only as an explicit exposure proxy, and UCMR treatment and potential-source fields are treated as contextual rather than verified current engineering conditions.",
  future:
    "Add exact current population served, disadvantaged-community and affordability indicators, project readiness and permitting, secured funding and remaining funding gap, site-specific design flow and treatment cost, state priority-list rules, resilience co-benefits, and utility match capacity so the allocation model can move closer to real program decision support.",
  filters: ["Data Analytics"],
  dataset: "U.S. EPA Fifth Unregulated Contaminant Monitoring Rule (UCMR 5)",
  datasetSize: "1,992,002 analytical results · 10,313 public water systems · 26,732 sampling points",
  datasetSource: "EPA UCMR 5 project source and audit trail",
  datasetUrl: "https://github.com/Boatengs/pfas-water-decision-intelligence",
  image: "/project-captures/pfas-executive-dashboard.svg",
  repoUrl: "https://github.com/Boatengs/pfas-water-decision-intelligence",
  evidence: [
    {
      value: "1.99M",
      label: "Analytical-result records",
      detail: "National UCMR 5 records processed through the reproducible analytical pipeline.",
    },
    {
      value: "10,313",
      label: "Public water systems",
      detail: "Systems represented in the national drinking-water analysis.",
    },
    {
      value: "1,127",
      label: "Systems screened forward",
      detail: "PWSs with at least one PFOA or PFOS screening trigger under the documented method.",
    },
    {
      value: "388",
      label: "Tier 1 priorities",
      detail: "Systems placed in the highest engineering-review priority tier.",
    },
  ],
  validation:
    "The repository documents structural QA, explicit PFOA/PFOS screening assumptions, a decomposable 100-point priority model, three verified utility case studies, 20-year lifecycle cost sensitivity analysis, and $100M–$1B capital-assistance scenarios. UCMR 5 occurrence results are used for technical screening and prioritization; they do not by themselves establish regulatory compliance or noncompliance.",
  metricContext:
    "This is a technical screening and prioritization framework. It helps identify where deeper engineering review may be warranted; it is not, by itself, a regulatory compliance determination.",
};
