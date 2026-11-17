import type { Project } from "./projects";

type GridPulseProject = Project & {
  imageLabel?: string;
  liveUrl?: string;
};

export const gridPulseProject: GridPulseProject = {
  slug: "gridpulse-energy-grid-analytics",
  index: "14",
  title: "GridPulse Energy Grid Analytics",
  category: "Energy Analytics · Forecasting · Live Operations",
  accent: "aqua",
  summary:
    "A model that corrects the U.S. Energy Information Administration's day-ahead electricity demand forecast for PJM, the grid operator for much of the eastern U.S. On 8,690 hours of 2025 it cut the average forecast error by 44.2%, and it beat the official forecast in all 13 month-long test periods. A live dashboard shows the grid's current demand, forecasts and stress.",
  challenge:
    "Grid operators plan around a demand forecast published a day ahead, and that forecast misses most when it matters: during peaks and fast swings in demand. The question was whether a model trained on past forecast errors could make the official forecast more accurate, especially at peak, and show clearly which hours need closer attention.",
  approach:
    "I froze four years of hourly PJM data (2022 to 2025) from eight official EIA files and checked each file against its fingerprint so results can be reproduced exactly. A gradient boosted model learns the pattern in EIA's past forecast errors and corrects the next forecast. I tested it on all of 2025, which the model never saw, and on 13 rolling month-long periods, and broke the remaining errors down by hour of day and demand level. A Streamlit dashboard shows the results with live EIA data or a frozen replay.",
  outcome:
    "On 8,690 hours of 2025, the corrected forecast's average error was 1,842.7 MW against 3,302.6 MW for EIA's own forecast, 44.2% lower. At peak demand the error fell 36.0%, from 4,330.5 MW to 2,770.4 MW. It beat EIA in every one of the 13 test periods. It is slightly worse at 8 a.m. local time, and at the very highest demand its remaining misses lean toward forecasting too low.",
  applications:
    "The workflow can support load-forecast review, utility planning, balancing-authority analytics, peak-demand preparation, forecast-error diagnostics, source-data QA, grid operations research, and control-room decision support. The same pattern can be extended to additional balancing authorities once timing, data quality, and operating-context differences are validated.",
  tools: [
    "Python",
    "Streamlit",
    "Pandas",
    "Scikit-learn",
    "EIA-930",
    "Gradient Boosting",
    "Time-series Validation",
  ],
  limitations:
    "The verified result is specific to PJM and the frozen 2022–2025 EIA-930 snapshot. The model is not better in every local-hour slice: 08:00 PJM local shows a 0.8% MAE regression. At the highest-demand decile, average peak misses are smaller but the remaining misses are more frequently underforecasts. The stress score is an analytical screen, not an official reliability rating or blackout probability.",
  future:
    "Replicate the benchmark across additional balancing authorities, tighten feature-availability checks against an explicit forecast-issuance clock, investigate the 08:00 local regression, and test peak-focused calibration or asymmetric-loss approaches for the highest-demand hours.",
  filters: ["Data Analytics", "Machine Learning", "Dashboards", "Deployed Apps"],
  dataset: "EIA-930 PJM hourly grid operations",
  datasetSize: "35,064 hourly rows · 2022–2025",
  datasetSource: "U.S. Energy Information Administration · Form EIA-930",
  image: "/project-captures/gridpulse-energy-grid.svg",
  imageLabel: "VERIFIED PJM FORECAST BENCHMARK",
  repoUrl: "https://github.com/Boatengs/gridpulse-energy-grid-analytics",
  liveUrl:
    "https://gridpulse-energy-grid-analytics-mmwt26f5tdfp6ussj87qdr.streamlit.app/",
  evidence: [
    {
      value: "44.2%",
      label: "Lower average forecast error",
      detail:
        "Average error fell from 3,302.6 MW for EIA's forecast to 1,842.7 MW on the same 8,690 hours of 2025.",
    },
    {
      value: "36.0%",
      label: "Lower error at peak demand",
      detail:
        "In the top 10% of demand hours, average error fell from 4,330.5 MW to 2,770.4 MW.",
    },
    {
      value: "13 / 13",
      label: "Month-long test periods won",
      detail:
        "The corrected forecast beat EIA's, both overall and at peak, in all 13 rolling 30 day test periods.",
    },
    {
      value: "8,690",
      label: "Hours of 2025 tested",
      detail:
        "Both forecasts were scored on exactly the same hours, none of which the model trained on.",
    },
  ],
  validation:
    "The headline comparison is an out-of-time 2025 holdout using identical scoring rows and one shared peak threshold. Expanding-window 30-day rolling-origin validation produced 13 valid future folds, with the candidate passing the same EIA promotion gate in every fold.",
  metricContext:
    "GridPulse is a residual correction to EIA's reported day-ahead forecast, not a replacement weather-and-load forecasting stack. Its live control room uses an hourly operational feed and reports freshness explicitly rather than presenting EIA-930 as sub-second telemetry.",
};
