import Link from "next/link";
import { SiteNav } from "../site-nav";

type Skill = {
  name: string;
  type: string;
  logo?: string;
  glyph?: string;
  proof?: string;
};

type SkillGroup = {
  num: string;
  title: string;
  description: string;
  proofHref: string;
  proofLabel: string;
  skills: Skill[];
};

const logo = (name: string) => `/skill-logos/${name}.svg`;

const groups: SkillGroup[] = [
  {
    num: "01",
    title: "Data & Analysis",
    description: "Querying, wrangling, numerical computing, and distributed data workflows used to turn raw records into reliable analytical inputs.",
    proofHref: "/projects/gridpulse-energy-grid-analytics",
    proofLabel: "GridPulse evidence",
    skills: [
      { name: "SQL", type: "Query language", glyph: "SQL" },
      { name: "Excel", type: "Spreadsheet analysis", glyph: "XLS" },
      { name: "Python", type: "Programming language", logo: logo("python"), proof: "/projects/gridpulse-energy-grid-analytics" },
      { name: "Pandas", type: "Data library", logo: logo("pandas") },
      { name: "NumPy", type: "Numerical library", logo: logo("numpy") },
      { name: "SciPy", type: "Scientific computing", glyph: "Σ" },
      { name: "Apache Spark", type: "Distributed computing", glyph: "SPK" },
      { name: "Hadoop", type: "Distributed data", glyph: "HDP" },
      { name: "Apache Hive", type: "Data warehouse", glyph: "HIV" },
    ],
  },
  {
    num: "02",
    title: "Statistical & Modeling",
    description: "Model design, validation, inference, segmentation, and forecasting methods used to make analytical results defensible and decision-ready.",
    proofHref: "/projects/gridpulse-energy-grid-analytics",
    proofLabel: "Forecasting evidence",
    skills: [
      { name: "Regression", type: "Statistical method", glyph: "β" },
      { name: "Ridge", type: "Regularized model", glyph: "L2" },
      { name: "Random Forest", type: "Ensemble model", glyph: "RF" },
      { name: "XGBoost", type: "Gradient boosting", glyph: "XGB" },
      { name: "Train/Test Split", type: "Validation method", glyph: "80/20" },
      { name: "PCA", type: "Dimensionality reduction", glyph: "PCA" },
      { name: "K-Means", type: "Clustering", glyph: "K" },
      { name: "Anomaly Detection", type: "Detection method", glyph: "!" },
      { name: "Forecasting", type: "Time-series modeling", glyph: "t+1", proof: "/projects/gridpulse-energy-grid-analytics" },
      { name: "A/B Testing", type: "Experiment design", glyph: "A/B" },
      { name: "Hypothesis Testing", type: "Statistical inference", glyph: "H₀" },
    ],
  },
  {
    num: "03",
    title: "Business Intelligence",
    description: "Visualization, dashboarding, and application frameworks used to move analysis from notebooks into interfaces people can actually use.",
    proofHref: "/projects/water-quality",
    proofLabel: "Analytics evidence",
    skills: [
      { name: "Tableau", type: "BI platform", glyph: "TBL" },
      { name: "Power BI", type: "BI platform", glyph: "PBI" },
      { name: "Matplotlib", type: "Visualization library", glyph: "MPL" },
      { name: "Seaborn", type: "Visualization library", glyph: "SNS" },
      { name: "Plotly", type: "Interactive visualization", logo: logo("plotly"), proof: "/projects/world-happiness-analysis" },
      { name: "Streamlit", type: "App framework", logo: logo("streamlit"), proof: "/projects/gridpulse-energy-grid-analytics" },
      { name: "Gradio", type: "ML interface", logo: logo("gradio") },
      { name: "FastAPI", type: "API framework", logo: logo("fastapi") },
    ],
  },
  {
    num: "04",
    title: "ML, NLP & LLM",
    description: "Evaluation, retrieval, embeddings, language models, and fine-tuning workflows for building practical generative-AI systems with measurable behavior.",
    proofHref: "/projects/llm-evaluation",
    proofLabel: "LLM evaluation evidence",
    skills: [
      { name: "Scikit-learn", type: "ML framework", glyph: "SK" },
      { name: "Transformers", type: "Model framework", glyph: "HF" },
      { name: "DistilBERT", type: "Language model", glyph: "BERT" },
      { name: "LangChain", type: "LLM framework", glyph: "LC" },
      { name: "ChromaDB", type: "Vector database", glyph: "VDB" },
      { name: "RAG", type: "Retrieval method", glyph: "RAG" },
      { name: "Llama 3.2", type: "Language model", glyph: "L3" },
      { name: "Mistral 7B", type: "Language model", glyph: "M7" },
      { name: "LoRA / QLoRA", type: "Fine-tuning method", glyph: "LoRA" },
      { name: "PEFT", type: "Fine-tuning framework", glyph: "PEFT" },
      { name: "TRL", type: "Training framework", glyph: "TRL" },
      { name: "ROUGE", type: "Evaluation metric", glyph: "R" },
    ],
  },
  {
    num: "05",
    title: "Computer Vision & Deep Learning",
    description: "Deep-learning, interpretability, detection, and segmentation techniques for extracting useful structure from images and visual data.",
    proofHref: "/projects/skin-lesion-segmentation",
    proofLabel: "Vision evidence",
    skills: [
      { name: "TensorFlow", type: "Deep-learning framework", logo: logo("tensorflow") },
      { name: "PyTorch", type: "Deep-learning framework", logo: logo("pytorch") },
      { name: "EfficientNetB0", type: "Vision architecture", glyph: "EN" },
      { name: "Transfer Learning", type: "Training method", glyph: "TL" },
      { name: "Grad-CAM", type: "Interpretability", glyph: "CAM" },
      { name: "Grounding DINO", type: "Object detection", glyph: "DINO" },
      { name: "Zero-Shot Learning", type: "Generalization method", glyph: "0S" },
      { name: "U-Net", type: "Segmentation architecture", glyph: "U" },
      { name: "Image Segmentation", type: "Vision task", glyph: "SEG" },
    ],
  },
  {
    num: "06",
    title: "Tools & Platforms",
    description: "Collaboration, automation, analytics, and enterprise administration tools that support delivery beyond the model itself.",
    proofHref: "/work",
    proofLabel: "Portfolio evidence",
    skills: [
      { name: "Git", type: "Version control", logo: logo("git") },
      { name: "Jira", type: "Project management", logo: logo("jira") },
      { name: "Dataiku", type: "Data science platform", glyph: "DKU" },
      { name: "Bloomerang CRM", type: "CRM platform", glyph: "CRM" },
      { name: "Adobe Analytics", type: "Digital analytics", glyph: "AA" },
      { name: "Zapier", type: "Automation platform", logo: logo("zapier") },
      { name: "Google Workspace Admin", type: "Cloud administration", glyph: "GWS" },
      { name: "Microsoft 365 Admin", type: "Enterprise administration", glyph: "M365" },
      { name: "Microsoft Office", type: "Productivity suite", glyph: "MS" },
    ],
  },
];

const featured = [
  { name: "Python", type: "Language", logo: logo("python") },
  { name: "Pandas", type: "Data", logo: logo("pandas") },
  { name: "NumPy", type: "Numerical", logo: logo("numpy") },
  { name: "Plotly", type: "Visualization", logo: logo("plotly") },
  { name: "Streamlit", type: "Deployment", logo: logo("streamlit") },
  { name: "FastAPI", type: "API", logo: logo("fastapi") },
  { name: "TensorFlow", type: "Deep learning", logo: logo("tensorflow") },
  { name: "PyTorch", type: "Deep learning", logo: logo("pytorch") },
  { name: "Git", type: "Version control", logo: logo("git") },
];

const capabilityCount = groups.reduce((total, group) => total + group.skills.length, 0);

function SkillMark({ skill }: { skill: Skill }) {
  if (skill.logo) {
    return (
      <span className="skill-visual skill-visual--brand" aria-hidden="true">
        <img src={skill.logo} alt="" width="34" height="34" loading="eager" decoding="sync" />
      </span>
    );
  }
  return (
    <span className="skill-visual skill-visual--method" aria-hidden="true">
      <b>{skill.glyph || "•"}</b>
    </span>
  );
}

export default function SkillsPage() {
  return (
    <main className="skills-premium">
      <SiteNav label="Technical skills page navigation" />

      <header className="skills-premium-hero shell">
        <div className="skills-premium-copy">
          <p className="eyebrow">TECHNICAL TOOLKIT</p>
          <h1>A working stack for <em>analysis, modeling, and deployment.</em></h1>
          <p className="skills-premium-intro">
            A curated view of the languages, frameworks, methods, and platforms used to move from raw data to validated models, interactive products, and stakeholder decisions.
          </p>
        </div>
        <aside className="skills-premium-facts" aria-label="Technical toolkit summary">
          <div><strong>{capabilityCount}</strong><span>capabilities</span></div>
          <div><strong>{groups.length}</strong><span>disciplines</span></div>
          <div><strong>Local</strong><span>visual assets</span></div>
        </aside>
      </header>

      <section className="skills-core shell" aria-labelledby="core-stack-title">
        <div className="skills-section-kicker">
          <span>CORE STACK</span>
          <div>
            <h2 id="core-stack-title">Technologies at the center of the work.</h2>
            <p>Recognizable brand marks are stored locally in the portfolio—no third-party icon requests at page load.</p>
          </div>
        </div>
        <div className="skills-core-grid">
          {featured.map((item) => (
            <article className="core-skill-card" key={item.name}>
              <div className="core-skill-logo" aria-hidden="true">
                <img src={item.logo} alt="" width="48" height="48" loading="eager" decoding="sync" />
              </div>
              <div>
                <span>{item.type}</span>
                <h3>{item.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-library shell" aria-labelledby="capability-library-title">
        <div className="skills-section-kicker skills-library-heading">
          <span>CAPABILITY LIBRARY</span>
          <div>
            <h2 id="capability-library-title">Organized by how the work gets done.</h2>
            <p>Each discipline combines tools with methods. Evidence links point only to public portfolio work.</p>
          </div>
        </div>

        <div className="skills-discipline-list">
          {groups.map((group) => (
            <article className="skills-discipline" key={group.num}>
              <header className="skills-discipline-head">
                <span className="skills-discipline-number">{group.num}</span>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <Link href={group.proofHref} className="skills-proof-link">
                    {group.proofLabel} <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </header>

              <div className="premium-skill-grid">
                {group.skills.map((skill) => {
                  const content = (
                    <>
                      <SkillMark skill={skill} />
                      <div className="premium-skill-copy">
                        <span>{skill.type}</span>
                        <strong>{skill.name}</strong>
                      </div>
                      {skill.proof && <i aria-hidden="true">↗</i>}
                    </>
                  );

                  return skill.proof ? (
                    <Link
                      className="premium-skill-card premium-skill-card--proof"
                      href={skill.proof}
                      aria-label={`${skill.name} — view portfolio evidence`}
                      key={skill.name}
                    >
                      {content}
                    </Link>
                  ) : (
                    <div className="premium-skill-card" key={skill.name}>
                      {content}
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-visual-note shell">
        <span>VISUAL SYSTEM</span>
        <p>
          Branded technologies use recognizable product marks stored inside the portfolio. Statistical methods, architectures, and techniques without official logos use technical glyphs instead of invented brand marks. Arrows indicate public project evidence.
        </p>
      </section>

      <footer className="footer">
        <div className="shell">
          <p className="eyebrow">SEE THE STACK IN PRACTICE</p>
          <h2>Capability becomes meaningful<br />through <em>the work.</em></h2>
          <Link className="email" href="/work">Explore project case studies ↗</Link>
          <div className="footer-row">
            <p>© 2026 Sampson Boateng</p>
            <div><Link href="/">Home</Link><Link href="/impact">Professional Approach</Link></div>
          </div>
        </div>
      </footer>
    </main>
  );
}
