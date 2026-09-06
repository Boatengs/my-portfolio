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
    "An operational energy analytics system built on EIA-930 PJM hourly grid data, combining forecast benchmarking, source-data QA, stress screening, error intelligence, and a live/replay Streamlit control room.",
  challenge:
    "Electricity demand can become difficult to forecast and serve when high load, rapid ramps, forecast misses, generation conditions, and interchange pressure coincide. Grid operators and analysts need a way to separate routine variation from periods that deserve closer operational attention without overstating what the data can prove.",
  approach:
    "GridPulse ingests a frozen 2022–2025 PJM snapshot from eight official EIA-930 balance files, verifies source hashes, normalizes the hourly operating data, preserves QA anomalies, engineers lagged forecasting features, benchmarks EIA against a weekly baseline and a gradient-boosted residual correction model, runs rolling-origin validation, decomposes errors by operating slice, and exposes the results through a multipage Streamlit dashboard with frozen replay and live EIA API modes.",
  outcome:
    "On 8,690 common 2025 holdout hours, the GridPulse ML-corrected EIA forecast reduced overall MAE by 44.2% and peak-demand MAE by 36.0% versus EIA's reported day-ahead forecast. The candidate also beat EIA on both overall and peak MAE in all 13 valid rolling-origin folds, while the project still documents where the model regresses or remains biased.",
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
  filters: ["Data Analytics", "Machine Learning", "Deployed Apps"],
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
      label: "Lower overall MAE",
      detail:
        "GridPulse reduced 2025 holdout MAE from 3,302.6 MW for EIA to 1,842.7 MW on the same 8,690 valid hours.",
    },
    {
      value: "36.0%",
      label: "Lower peak-demand MAE",
      detail:
        "Peak MAE fell from 4,330.5 MW for EIA to 2,770.4 MW using one shared top-decile demand threshold.",
    },
    {
      value: "13 / 13",
      label: "Rolling-origin folds won",
      detail:
        "The GridPulse candidate beat EIA on both overall and peak-demand MAE in every valid 30-day future fold.",
    },
    {
      value: "8,690",
      label: "Common holdout hours",
      detail:
        "All headline 2025 forecasts were scored on identical valid rows rather than different convenience subsets.",
    },
  ],
  validation:
    "The headline comparison is an out-of-time 2025 holdout using identical scoring rows and one shared peak threshold. Expanding-window 30-day rolling-origin validation produced 13 valid future folds, with the candidate passing the same EIA promotion gate in every fold.",
  metricContext:
    "GridPulse is a residual correction to EIA's reported day-ahead forecast, not a replacement weather-and-load forecasting stack. Its live control room uses an hourly operational feed and reports freshness explicitly rather than presenting EIA-930 as sub-second telemetry.",
};
