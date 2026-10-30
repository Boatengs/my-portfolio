import type { Project } from "./projects";

type CounterSignalProject = Project & {
  imageLabel?: string;
  liveUrl?: string;
};

export const counterSignalProject: CounterSignalProject = {
  slug: "countersignal",
  index: "16",
  title: "CounterSignal Clinical AI Monitoring",
  category: "Healthcare AI · Model Monitoring · Causal Inference",
  accent: "violet",
  summary:
    "An open source monitor for clinical risk models after deployment. When a model's alerts lead clinicians to intervene, the outcomes it predicted are partly prevented, so standard monitoring mistakes a working model for a failing one and can miss real decline. CounterSignal measures the model against the outcome it was built to predict and says plainly when the data cannot answer the question.",
  challenge:
    "A readmission or mortality model flags a patient, the care team steps in, and the event never happens. Comparing predictions with recorded outcomes then makes the model look miscalibrated, and the better the intervention, the worse the model appears. Checking only untreated patients misses changes among the high risk patients who are usually treated, and small hospitals have too few cases for monthly metrics to mean anything.",
  approach:
    "CounterSignal keeps untreated patients and weights each one by the inverse probability of remaining untreated, estimated from the model's score, the logged alert flag and the clinical factors that drove treatment. Each month it reports observed over expected events, AUC, calibration and Brier score with bootstrap intervals that refit the treatment model, and gives a verdict of stable, drift or not enough evidence yet against an acceptable range. A two sided CUSUM accumulates evidence across months, with each month standardized against a simulated null distribution rather than a normal approximation so the alarm stays valid in small hospitals, and population stability signals cover months still awaiting outcomes. The benchmark simulates alerts and treatment on real patient records, compares four monitors including an independent implementation of the Feng et al. score based CUSUM, and was checked by two independent reviews whose confirmed findings were fixed before publication.",
  outcome:
    "On 180,177 real records from two public datasets, with logistic regression and gradient boosting models and 200 simulated deployments per scenario, CounterSignal caught drift among treated patients in at least 99.5% of deployments in every configuration, most often in the second month of the change. Standard, untreated only and Feng et al. monitors caught it in 16.0% to 88.0% of deployments, typically in months 3 to 5 of the change. With the model unchanged, standard monitoring raised a false alarm in 95.0% to 100.0% of deployments, while CounterSignal alarmed in 4.5% to 9.0%, similar to the other corrected monitors but above the planned 5% in three of four configurations.",
  applications:
    "Post deployment surveillance of readmission, deterioration and sepsis models; local validation in hospitals with small patient volumes; evidence for model governance committees deciding whether to retrain; and audits of vendor models whose alerts change care.",
  tools: [
    "Python",
    "NumPy",
    "Pandas",
    "SciPy",
    "Scikit-learn",
    "Streamlit",
    "Plotly",
    "GitHub Actions",
    "Pytest",
    "Ruff",
    "Logistic Regression",
    "Gradient Boosting",
    "Inverse Probability Weighting",
    "Doubly Robust Estimation",
    "Bootstrap Confidence Intervals",
    "CUSUM Sequential Monitoring",
    "Monte Carlo Null Simulation",
    "Population Stability Index",
    "Calibration Analysis",
    "Semi Synthetic Benchmarking",
  ],
  limitations:
    "Alerts, treatment and its effect are simulated on real records, so this is evidence that the method works largely as designed, not a validation in a live deployment. Its false alarm rate ran above the planned 5% in three of four configurations, up to 9.0%. The correction relies on every driver of treatment being logged: when treatment also depended on a factor the monitor was not given, false alarms rose to 12.0% on the sepsis data. Reweighting costs precision, so single months are often undecided and the cumulative alarm carries the evidence. It is research software, not a certified clinical product.",
  future:
    "Test on a real deployment log with recorded alerts and treatments, add a variance correction for models that are calibrated overall but not within every covariate level, and extend the alarm to discrimination as well as calibration.",
  filters: ["Machine Learning", "Healthcare"],
  dataset: "UCI Diabetes 130-US Hospitals and UCI Sepsis Survival Minimal Clinical Records",
  datasetSize: "69,973 diabetic inpatients · 110,204 sepsis admissions · 200 deployments per scenario",
  datasetSource: "UCI Machine Learning Repository · CC BY 4.0",
  image: "/project-captures/countersignal.svg",
  imageLabel: "TWO DATASETS · FOUR MONITORS · INDEPENDENTLY REVIEWED",
  repoUrl: "https://github.com/Boatengs/countersignal",
  evidence: [
    {
      value: "99.5%",
      label: "Minimum drift detection rate",
      detail:
        "Drift among treated patients was caught in at least 99.5% of deployments in every dataset and model, most often in the second month of the change.",
    },
    {
      value: "95.0%+",
      label: "Standard monitor false alarms",
      detail:
        "With the model unchanged, monitoring recorded outcomes raised a false alarm in 95.0% to 100.0% of deployments; CounterSignal in 4.5% to 9.0%.",
    },
    {
      value: "180,177",
      label: "Real patient records",
      detail:
        "Two UCI datasets, logistic regression and gradient boosting models, five scenarios and 200 simulated deployments each.",
    },
    {
      value: "12.0%",
      label: "False alarms if a driver is hidden",
      detail:
        "When treatment also depended on a factor the monitor was not given, its false alarm rate rose to 12.0% on the sepsis data.",
    },
  ],
  validation:
    "Every month is drawn from a known population, so each monitor is scored against the model's true calibration rather than its own sample. All monitors run on the same simulated deployments; the standard, untreated only and CounterSignal monitors share one alarm rule and limit. Results tables are generated from the committed results and checked in CI, and 24 tests cover the estimators, alarm calibration, edge cases and the benchmark truth.",
  metricContext:
    "CounterSignal reports whether a model still predicts what it was validated to predict. It does not measure whether the intervention works or decide whether to retrain.",
};
