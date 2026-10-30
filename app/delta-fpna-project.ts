import type { Project } from "./projects";

type DeltaProject = Project & {
  imageLabel?: string;
  liveUrl?: string;
};

export const deltaFpnaProject: DeltaProject = {
  slug: "delta-fpna",
  index: "15",
  title: "Delta Air Lines FP&A and Network Analytics",
  category: "Financial Planning · Forecasting · Network Analytics",
  accent: "red",
  summary:
    "A reproducible FP&A model of Delta Air Lines built only from public filings. It joins SEC financial statements, DOT Form 41 airline accounts and BTS T-100 flight data, rebuilds operating income from seven operating drivers, and serves the results in a live Streamlit dashboard with a route network map and a Tableau Public extract.",
  challenge:
    "Airline results are reported in different places at different scopes: consolidated SEC statements, carrier accounts filed with DOT, and flight level traffic data. The question was how well Delta turns capacity into revenue and margin, which routes and airports drive its traffic since 2019, and what the next year looks like under different capacity, fuel and cost assumptions.",
  approach:
    "A standard library Python pipeline loads the three sources into one SQLite database and one validator. Quarterly operating income is rebuilt exactly from seven drivers: seat miles, load factor, yield, other revenue, cost per seat mile excluding fuel, fuel efficiency and fuel price. A year over year bridge splits income changes by driver through sequential substitution. Eight forecasting methods were compared in a rolling origin backtest, and the simplest, carrying each driver forward from the same quarter a year earlier, became the base case. Scenarios and driver sensitivities run on top of that base.",
  outcome:
    "Mainline revenue per seat mile rose 16% from 2019 to 2025 while cost per seat mile excluding fuel rose 36%, and mainline operating margin fell from 15.1% to 4.7%. The domestic network carries most of that squeeze. In the backtest the same quarter last year method had the lowest error, 3.96% on revenue across 34 forecasts, beating every trend method. One point of load factor is worth $0.64B a year while 1% more capacity adds only $0.02B, because at current margins an extra seat mile earns barely more than it costs.",
  applications:
    "The driver model, bridge and scenario lab fit airline and transport FP&A, budget versus actual reviews, investor and credit analysis, network planning discussions, and any business where revenue and cost can be expressed as volume, rate and unit cost drivers.",
  tools: [
    "Python",
    "SQLite",
    "Pandas",
    "Streamlit",
    "Plotly",
    "Tableau",
    "GitHub Actions",
    "SEC CompanyFacts",
    "DOT Form 41",
    "BTS T-100",
    "Driver Based Planning",
    "Sequential Substitution Bridge",
    "Seasonal Naive Forecasting",
    "Rolling Origin Backtesting",
    "Scenario Analysis",
    "Sensitivity Analysis",
  ],
  limitations:
    "Mainline measures exclude Delta Connection partner flights, which report under their own carrier codes, so some short route growth may be flying moved onto Delta's own aircraft rather than new demand. Unit measures are public figures matched to one scope, not Delta's investor relations TRASM and CASM. Budget, forecast and scenario values are models built on public actuals, not Delta guidance, and the fuel scenario holds price flat with no fare response.",
  future:
    "Replace the flat fuel scenario with a jet fuel futures curve, add partner carriers to test how much route growth is shifted flying, and publish the Tableau Public workbook built from the committed extract.",
  filters: ["Data Analytics", "Dashboards", "Deployed Apps"],
  dataset: "SEC CompanyFacts, DOT Form 41 and BTS T-100 segments",
  datasetSize: "2019 to 2026 · 3,338 city pairs in the latest 12 months",
  datasetSource: "SEC EDGAR · U.S. DOT Bureau of Transportation Statistics",
  image: "/project-captures/delta-fpna.svg",
  imageLabel: "PUBLIC FILINGS · SEVEN DRIVER MODEL",
  repoUrl: "https://github.com/Boatengs/financial-planning-performance-dashboard",
  liveUrl: "https://delta-fpna.streamlit.app",
  evidence: [
    {
      value: "4.7%",
      label: "2025 mainline margin, from 15.1%",
      detail:
        "From 2019 to 2025, as cost per seat mile excluding fuel grew 36% against 16% for revenue per seat mile.",
    },
    {
      value: "3.96%",
      label: "Backtest revenue error",
      detail:
        "Same quarter last year forecasting won a rolling origin backtest of 34 forecasts, one to four quarters ahead.",
    },
    {
      value: "$0.64B",
      label: "Value of one load factor point",
      detail:
        "Effect on the next four quarters of mainline operating income, against $0.02B for 1% more capacity.",
    },
    {
      value: "100.0%",
      label: "Form 41 matches SEC revenue",
      detail:
        "DL's Form 41 operating revenue equals 100.0% to 100.4% of SEC consolidated revenue in every quarter.",
    },
  ],
  validation:
    "One validator checks the single SQLite build: Form 41 revenue within 2% of SEC revenue each quarter, profit bridges that close, driver model actuals that match unit economics, a true trailing twelve month route window, and map coverage of at least 99% of passengers. Forecast methods are compared in a rolling origin backtest from Q4 2023, with earlier origins excluded because their trends come from the pandemic recovery.",
  metricContext:
    "The model's value is in the decomposition, scenarios and bridge, not in beating a naive baseline on point accuracy. Forward values are modeled from public data and are not Delta guidance.",
};
