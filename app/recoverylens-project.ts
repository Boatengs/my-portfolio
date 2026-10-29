import type { Project } from "./projects";

type RecoveryLensProject = Project & {
  imageLabel?: string;
  liveUrl?: string;
};

export const recoveryLensProject: RecoveryLensProject = {
  slug: "recoverylens",
  index: "15",
  title: "RecoveryLens Disaster Recovery Funding",
  category: "Public Policy Analytics · Reproducible Data · Live Explorer",
  accent: "teal",
  summary:
    "A reproducible public data pipeline that asks whether disaster prone and socially vulnerable U.S. counties receive timely, proportionate federal recovery support. Pilot release 1.0 covers three North Carolina disasters from 2018 to 2020 and ships with a live Streamlit explorer.",
  challenge:
    "FEMA funding records, NOAA storm damage and CDC vulnerability indexes come from different agencies, measure different things and change after publication. A quick join of the three produces confident county comparisons that do not hold up, so the project had to establish which numbers can be trusted before comparing anything.",
  approach:
    "The pipeline pulls OpenFEMA Public Assistance award activities and reconciles every project to the cent, keeping deobligations. Funding is counted within a fixed 730 day window after each declaration and priced in 2022 dollars by obligation year. NOAA storm events become loss evidence only after a documentary review of each episode narrative, with every decision bound to a hash of the source text and replayed on each build. County context comes from the CDC/ATSDR 2016 Social Vulnerability Index. A ridge regression trained on 2018 and 2019 counties is tested on 2020 counties against a median baseline, with sensitivity runs for a 365 day window and for counties with Census border changes.",
  outcome:
    "All 3,257 Public Assistance projects reconcile to their funded totals. Of 290 candidate storm links, 240 were supported, 49 rejected and 1 left unresolved. On the 2020 holdout the model missed county funding per resident by $10.06 on average, while guessing the earlier median missed by $8.21, and the release reports that result as it is. The clearest finding is about how aid is recorded: 89% of the 2020 declaration's funding in the window went to projects not coded to a single county, which limits any county level comparison built from OpenFEMA.",
  applications:
    "The same approach supports disaster recovery audits, state emergency management reviews, policy research on aid equity, journalism that compares recovery funding across places, and any analysis that has to join federal datasets with different scopes and revision histories.",
  tools: [
    "Python",
    "Pandas",
    "NumPy",
    "Streamlit",
    "Plotly",
    "GitHub Actions",
    "Pytest",
    "Ruff",
    "OpenFEMA API",
    "NOAA Storm Events",
    "CDC/ATSDR SVI",
    "BLS CPI-U",
    "Ridge Regression",
    "K-Means Clustering",
    "Median Absolute Deviation Outlier Flags",
    "Chronological Holdout Validation",
    "Sensitivity Analysis",
    "Inflation Adjustment",
    "Data Provenance Hashing",
  ],
  limitations:
    "The pilot covers three North Carolina declarations, and only 46 of 98 county rows pass every review gate. Public Assistance pays eligible public costs while NOAA reports property and crop damage, so funding per dollar of loss compares unlike quantities. The SVI 2016 release date could not be verified, so context is used retrospectively and no forecasting claim is made. Link decisions are a documentary review that has not yet been independently checked.",
  future:
    "Complete an independent review of the pilot's interpretation, extend the reviewed panel to more states and declarations, and add a national county map once link review can run at that scale.",
  filters: ["Data Analytics", "Machine Learning", "Deployed Apps"],
  dataset: "OpenFEMA, NOAA Storm Events, CDC/ATSDR SVI 2016 and BLS CPI-U",
  datasetSize: "3,257 FEMA projects · 290 reviewed storm links · 98 county rows",
  datasetSource: "FEMA · NOAA NCEI · CDC/ATSDR · BLS · U.S. Census Bureau",
  image: "/project-captures/recoverylens-pilot.svg",
  imageLabel: "PILOT RELEASE 1.0 · NORTH CAROLINA",
  repoUrl: "https://github.com/Boatengs/recoverylens",
  liveUrl: "https://recoverylens.streamlit.app",
  evidence: [
    {
      value: "3,257",
      label: "Projects reconciled",
      detail:
        "Every Public Assistance project in the three declarations matches its funded total to the cent, with deobligations kept.",
    },
    {
      value: "240 / 290",
      label: "Storm links supported",
      detail:
        "Each candidate link was decided from the NOAA episode narrative; 49 were rejected and 1 is still unresolved.",
    },
    {
      value: "$10.06",
      label: "Model error vs $8.21",
      detail:
        "Mean absolute error per resident on 2020 counties. The median baseline was more accurate, and the release says so.",
    },
    {
      value: "89%",
      label: "2020 funding not county coded",
      detail:
        "Of $14.4M obligated within two years for the February 2020 storms, $12.8M went to projects not coded to a single county.",
    },
  ],
  validation:
    "The model is trained on 2018 and 2019 counties and scored on 2020 counties against a training median baseline, then rerun with a 365 day funding window and without counties that have Census border notes. Link decisions replay on every build only when current NOAA and FEMA files reproduce the reviewed narrative text and decision counts; otherwise the build stops.",
  metricContext:
    "RecoveryLens describes past disasters. It does not rank counties, estimate funding gaps or claim that any county was under or over funded.",
};
