"use client";

import { useState } from "react";
import { StaticLink as Link } from "./static-link";

type Discipline = {
  name: string;
  count: number;
  blurb: string;
  tools: string[];
  proofLabel: string;
  proofHref: string;
};

// Counts match the full Skills page (111 in total).
const disciplines: Discipline[] = [
  {
    name: "Data & Analysis",
    count: 12,
    blurb: "Querying, wrangling and numerical work that turns messy source data into reliable inputs.",
    tools: ["Python", "SQL", "Pandas", "NumPy", "R", "DuckDB"],
    proofLabel: "GridPulse",
    proofHref: "/projects/gridpulse-energy-grid-analytics",
  },
  {
    name: "Statistics & Modeling",
    count: 16,
    blurb: "Inference, validation and forecasting methods that make results defensible.",
    tools: ["Regression", "Random Forest", "XGBoost", "Forecasting", "Hypothesis Testing", "PCA"],
    proofLabel: "GridPulse forecasting",
    proofHref: "/projects/gridpulse-energy-grid-analytics",
  },
  {
    name: "Data Engineering",
    count: 10,
    blurb: "Extraction, transformation and validation that keeps data consistent before anyone reports on it.",
    tools: ["ETL Pipelines", "Data Modeling", "PostgreSQL", "MySQL", "Snowflake", "SQL Server"],
    proofLabel: "PFAS Decision Intelligence",
    proofHref: "/projects/pfas-water-decision-intelligence",
  },
  {
    name: "Business Intelligence",
    count: 10,
    blurb: "Dashboards and apps that move analysis out of notebooks and into decisions.",
    tools: ["Tableau", "Power BI", "Plotly", "Streamlit", "Matplotlib", "Seaborn"],
    proofLabel: "World Happiness Dashboard",
    proofHref: "/projects/world-happiness-analysis",
  },
  {
    name: "ML, NLP & LLM",
    count: 12,
    blurb: "Evaluation, retrieval and fine tuning for language systems with measurable behavior.",
    tools: ["scikit-learn", "Transformers", "LangChain", "RAG", "LoRA", "ChromaDB"],
    proofLabel: "LLM Evaluation Framework",
    proofHref: "/projects/llm-evaluation",
  },
  {
    name: "Computer Vision",
    count: 9,
    blurb: "Detection, segmentation and interpretability for images and medical imaging.",
    tools: ["PyTorch", "TensorFlow", "U Net", "Grad CAM", "Grounding DINO", "Transfer Learning"],
    proofLabel: "Skin Lesion Segmentation",
    proofHref: "/projects/skin-lesion-segmentation",
  },
  {
    name: "Cloud & DevOps",
    count: 13,
    blurb: "Where data is stored, models are trained and services are tested.",
    tools: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Jupyter", "Colab"],
    proofLabel: "Full toolkit",
    proofHref: "/skills",
  },
  {
    name: "Tools & Platforms",
    count: 16,
    blurb: "Collaboration and administration tools that support delivery beyond the model.",
    tools: ["GitHub", "Hugging Face", "Jira", "Dataiku", "Zapier", "Confluence"],
    proofLabel: "All public projects",
    proofHref: "/work",
  },
  {
    name: "Business & Quality",
    count: 13,
    blurb: "Process improvement, audit support and the working habits that keep analysis useful.",
    tools: ["KPI Tracking", "Process Optimization", "Process Mapping", "Audit Support", "Technical Writing", "Quality Metrics"],
    proofLabel: "Leadership & service",
    proofHref: "/leadership",
  },
];

const total = disciplines.reduce((sum, d) => sum + d.count, 0);

function polar(index: number, count: number, radius: number, offset = -90) {
  const angle = ((offset + (360 / count) * index) * Math.PI) / 180;
  return {
    left: `${50 + radius * Math.cos(angle)}%`,
    top: `${50 + radius * Math.sin(angle)}%`,
  };
}

export function SkillsConstellation() {
  const [active, setActive] = useState(4);
  const current = disciplines[active];

  return (
    <div className="constellation">
      <div className="constellation-panel" aria-live="polite">
        <p className="constellation-kicker">
          {String(active + 1).padStart(2, "0")} / {String(disciplines.length).padStart(2, "0")} · DISCIPLINE
        </p>
        <h3>{current.name}</h3>
        <p className="constellation-blurb">{current.blurb}</p>
        <ul className="constellation-tools" aria-label={`Core tools in ${current.name}`}>
          {current.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
        <div className="constellation-meta">
          <span>
            <strong>{current.count}</strong> skills
          </span>
          <Link href={current.proofHref}>
            {current.proofLabel} <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <Link className="constellation-all" href="/skills">
          View all {total} skills <span aria-hidden="true">↗</span>
        </Link>
      </div>

      <div className="constellation-stage">
        <span className="constellation-ring ring-outer" aria-hidden="true" />
        <span className="constellation-ring ring-mid" aria-hidden="true" />
        <span className="constellation-ring ring-inner" aria-hidden="true" />
        <div className="constellation-core" aria-hidden="true">
          <strong>{total}</strong>
          <span>CAPABILITIES</span>
        </div>

        {current.tools.map((tool, i) => (
          <span
            key={`${current.name}-${tool}`}
            className="constellation-tool"
            style={polar(i, current.tools.length, 27, -60)}
            aria-hidden="true"
          >
            {tool}
          </span>
        ))}

        <div className="constellation-disciplines" role="group" aria-label="Choose a discipline">
          {disciplines.map((d, i) => (
            <button
              key={d.name}
              type="button"
              className={`constellation-node${i === active ? " is-active" : ""}`}
              style={polar(i, disciplines.length, 44)}
              aria-pressed={i === active}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              {d.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
