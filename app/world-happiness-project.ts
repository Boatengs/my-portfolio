import type { Project } from "./projects";

export const worldHappinessProject: Project = {
  slug: "world-happiness-analysis",
  index: "14",
  title: "World Happiness Dashboard",
  category: "Global Analytics · Interactive Dashboard",
  accent: "blue",
  summary:
    "An animated 2015–2019 global dashboard for country rankings, regional patterns, factor relationships, and an out-of-time 2019 regression evaluation—running natively inside the portfolio.",
  challenge:
    "World Happiness rankings are widely quoted as annual league tables, but a single rank hides movement over time, regional context, the closeness of neighboring scores, and the relationships among the socioeconomic factors reported alongside happiness.",
  approach:
    "A reproducible analytical pipeline normalizes changing World Happiness schemas, restores region context, computes within-year ranks, and powers animated country, regional, factor, correlation, and trend views. An interpretable linear regression then learns from 2015–2018 and is tested on 2019.",
  outcome:
    "The dashboard makes it possible to see which country and regional patterns persist, which rankings shift, and which factors move most closely with reported happiness scores. The holdout model adds a stricter question: whether relationships learned from earlier years transfer to the next year.",
  applications:
    "The workflow demonstrates how multi-year public indicators can become an accessible analytical product for international-development research, policy briefing, social-indicator monitoring, education, nonprofit reporting, comparative country analysis, and executive dashboards.",
  tools: [
    "Python",
    "Pandas",
    "Plotly",
    "Streamlit",
    "Scikit-learn",
    "JavaScript",
    "GitHub Pages",
  ],
  limitations:
    "The analysis uses country-level aggregates and a five-year historical window, so it cannot explain individual wellbeing or current conditions. Annual schema changes require normalization, and correlations or regression coefficients do not establish causality.",
  future:
    "Extend the time series only after validating later schema changes, add uncertainty views where available, introduce country-comparison bookmarking, and evaluate richer panel or nonlinear models against the current interpretable baseline.",
  filters: ["Data Analytics", "Deployed Apps"],
  dataset: "World Happiness Report · 2015–2019",
  datasetSize: "782 country-year observations · 5 annual snapshots",
  datasetSource: "Pinned public World Happiness historical dataset",
  datasetUrl:
    "https://github.com/evanfrang/world_happiness/blob/48136725441b2d5b8b7d7ee29aa41e7eb95db549/whs_years_updated.csv",
  image: "/my-portfolio/project-captures/world-happiness-2019.svg",
  repoUrl: "https://github.com/Boatengs/World-Happiness-Analysis",
  evidence: [
    {
      value: "782",
      label: "Country-year observations",
      detail: "Five annual snapshots spanning 2015 through 2019.",
    },
    {
      value: "5 years",
      label: "Animated global analysis",
      detail: "Country, regional, factor, correlation, trend, and holdout-model views.",
    },
    {
      value: "2019",
      label: "Out-of-time holdout",
      detail: "The regression trains on 2015–2018 and evaluates on unseen 2019 rows.",
    },
  ],
  validation:
    "Year-specific source columns are normalized into a common schema, ranks are recalculated within each year, and the regression is evaluated out of time rather than reported only on its training data.",
};
