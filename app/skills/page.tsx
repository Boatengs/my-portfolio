import Link from "next/link";
import { SiteNav } from "../site-nav";

type Skill = {
  name: string;
  type: string;
  logo?: string;
  icon?: string;
  proof?: string;
};

type SkillGroup = {
  num: string;
  title: string;
  kicker: string;
  description: string;
  proofHref: string;
  proofLabel: string;
  tone: string;
  skills: Skill[];
};

const logo = (name: string) => `/skill-logos/${name}.svg`;

const groups: SkillGroup[] = [
  {
    num: "01",
    title: "Data & Analysis",
    kicker: "FROM RAW RECORDS TO RELIABLE SIGNAL",
    description:
      "Querying, wrangling, numerical computing, and distributed workflows for turning messy source data into trustworthy analytical inputs.",
    proofHref: "/projects/gridpulse-energy-grid-analytics",
    proofLabel: "See GridPulse evidence",
    tone: "blue",
    skills: [
      { name: "SQL", type: "Query language", icon: "database" },
      { name: "SQLite", type: "Embedded database", logo: logo("sqlite") },
      { name: "Excel", type: "Spreadsheet analysis", icon: "sheet" },
      { name: "Python", type: "Programming language", logo: logo("python"), proof: "/projects/gridpulse-energy-grid-analytics" },
      { name: "Pandas", type: "Data library", logo: logo("pandas"), proof: "/projects/water-quality" },
      { name: "NumPy", type: "Numerical library", logo: logo("numpy") },
      { name: "SciPy", type: "Scientific computing", icon: "science", proof: "/projects/water-quality" },
      { name: "Apache Spark", type: "Distributed computing", icon: "spark" },
      { name: "Hadoop", type: "Distributed data", icon: "cluster" },
      { name: "Apache Hive", type: "Data warehouse", icon: "warehouse" },
    ],
  },
  {
    num: "02",
    title: "Statistical & Modeling",
    kicker: "MODELS THAT CAN SURVIVE SCRUTINY",
    description:
      "Inference, validation, segmentation, and forecasting methods used to make analytical results defensible, measurable, and decision ready.",
    proofHref: "/projects/gridpulse-energy-grid-analytics",
    proofLabel: "See forecasting evidence",
    tone: "amber",
    skills: [
      { name: "Regression", type: "Statistical method", icon: "trend" },
      { name: "Ridge", type: "Regularized model", icon: "curve" },
      { name: "Random Forest", type: "Ensemble model", icon: "tree" },
      { name: "XGBoost", type: "Gradient boosting", icon: "boost" },
      { name: "SVM", type: "Classification model", icon: "boundary", proof: "/projects/healthcare-modeling" },
      { name: "Train Test Split", type: "Validation method", icon: "split" },
      { name: "PCA", type: "Dimensionality reduction", icon: "dimensions" },
      { name: "K Means", type: "Clustering", icon: "cluster", proof: "/projects/water-quality" },
      { name: "Anomaly Detection", type: "Detection method", icon: "anomaly" },
      { name: "Isolation Forest", type: "Anomaly detection model", icon: "forest", proof: "/projects/water-quality" },
      { name: "Forecasting", type: "Time series modeling", icon: "forecast", proof: "/projects/gridpulse-energy-grid-analytics" },
      { name: "A/B Testing", type: "Experiment design", icon: "experiment" },
      { name: "Hypothesis Testing", type: "Statistical inference", icon: "science" },
    ],
  },
  {
    num: "03",
    title: "Business Intelligence",
    kicker: "ANALYSIS PEOPLE CAN ACTUALLY USE",
    description:
      "Visualization, dashboarding, and application frameworks for moving analysis out of notebooks and into interfaces built for decisions.",
    proofHref: "/projects/world-happiness-analysis",
    proofLabel: "See dashboard evidence",
    tone: "mint",
    skills: [
      { name: "Tableau", type: "BI platform", icon: "dashboard" },
      { name: "Power BI", type: "BI platform", icon: "bars" },
      { name: "Matplotlib", type: "Visualization library", icon: "chart" },
      { name: "Seaborn", type: "Visualization library", icon: "scatter" },
      { name: "Plotly", type: "Interactive visualization", logo: logo("plotly"), proof: "/projects/world-happiness-analysis" },
      { name: "Streamlit", type: "App framework", logo: logo("streamlit"), proof: "/projects/gridpulse-energy-grid-analytics" },
      { name: "Gradio", type: "ML interface", logo: logo("gradio") },
      { name: "FastAPI", type: "API framework", logo: logo("fastapi") },
    ],
  },
  {
    num: "04",
    title: "ML, NLP & LLM",
    kicker: "PRACTICAL INTELLIGENT SYSTEMS",
    description:
      "Evaluation, retrieval, embeddings, language models, and fine tuning workflows for building useful generative AI systems with measurable behavior.",
    proofHref: "/projects/llm-evaluation",
    proofLabel: "See LLM evaluation evidence",
    tone: "violet",
    skills: [
      { name: "Scikit learn", type: "ML framework", icon: "model", proof: "/projects/healthcare-modeling" },
      { name: "Transformers", type: "Model framework", icon: "transform" },
      { name: "DistilBERT", type: "Language model", icon: "language" },
      { name: "LangChain", type: "LLM framework", icon: "chain" },
      { name: "ChromaDB", type: "Vector database", icon: "vectors" },
      { name: "RAG", type: "Retrieval method", icon: "retrieval" },
      { name: "Llama 3.2", type: "Language model", icon: "brain" },
      { name: "Mistral 7B", type: "Language model", icon: "wind" },
      { name: "LoRA / QLoRA", type: "Fine tuning method", icon: "tune" },
      { name: "PEFT", type: "Fine tuning framework", icon: "tune" },
      { name: "TRL", type: "Training framework", icon: "route" },
      { name: "ROUGE", type: "Evaluation metric", icon: "evaluate", proof: "/projects/llm-evaluation" },
    ],
  },
  {
    num: "05",
    title: "Computer Vision & Deep Learning",
    kicker: "STRUCTURE FROM VISUAL DATA",
    description:
      "Deep learning, interpretability, detection, and segmentation techniques for extracting useful structure from images and visual data.",
    proofHref: "/projects/skin-lesion-segmentation",
    proofLabel: "See vision evidence",
    tone: "rose",
    skills: [
      { name: "TensorFlow", type: "Deep learning framework", logo: logo("tensorflow") },
      { name: "PyTorch", type: "Deep learning framework", logo: logo("pytorch"), proof: "/projects/skin-lesion-segmentation" },
      { name: "EfficientNetB0", type: "Vision architecture", icon: "layers" },
      { name: "Transfer Learning", type: "Training method", icon: "transfer" },
      { name: "Grad CAM", type: "Interpretability", icon: "heatmap" },
      { name: "Grounding DINO", type: "Object detection", icon: "scan" },
      { name: "Zero Shot Learning", type: "Generalization method", icon: "sparkle" },
      { name: "U Net", type: "Segmentation architecture", icon: "network" },
      { name: "Image Segmentation", type: "Vision task", icon: "segment" },
    ],
  },
  {
    num: "06",
    title: "Tools & Platforms",
    kicker: "THE DELIVERY LAYER",
    description:
      "Collaboration, automation, analytics, and enterprise administration tools that support delivery beyond the model itself.",
    proofHref: "/work",
    proofLabel: "See portfolio evidence",
    tone: "slate",
    skills: [
      { name: "GitHub", type: "Version control and collaboration", logo: logo("github"), proof: "/work" },
      { name: "Jira", type: "Project management", logo: logo("jira") },
      { name: "Dataiku", type: "Data science platform", icon: "platform" },
      { name: "Bloomerang CRM", type: "CRM platform", icon: "crm" },
      { name: "Adobe Analytics", type: "Digital analytics", icon: "analytics" },
      { name: "Zapier", type: "Automation platform", logo: logo("zapier") },
      { name: "Google Workspace Admin", type: "Cloud administration", icon: "workspace" },
      { name: "Microsoft 365 Admin", type: "Enterprise administration", icon: "admin" },
      { name: "Microsoft Office", type: "Productivity suite", icon: "office" },
    ],
  },
];

const featured = [
  { name: "Python", role: "ANALYSIS", logo: logo("python") },
  { name: "Pandas", role: "DATA", logo: logo("pandas") },
  { name: "NumPy", role: "NUMERICAL", logo: logo("numpy") },
  { name: "Plotly", role: "VISUAL", logo: logo("plotly") },
  { name: "Streamlit", role: "PRODUCT", logo: logo("streamlit") },
  { name: "FastAPI", role: "API", logo: logo("fastapi") },
  { name: "TensorFlow", role: "DEEP LEARNING", logo: logo("tensorflow") },
  { name: "PyTorch", role: "DEEP LEARNING", logo: logo("pytorch") },
  { name: "GitHub", role: "DELIVERY", logo: logo("github") },
];

const stages = [
  { num: "01", title: "Explore", copy: "Query, clean, profile, and understand the shape of the problem before choosing a model." },
  { num: "02", title: "Model", copy: "Select methods that fit the decision context, then measure them against transparent baselines." },
  { num: "03", title: "Validate", copy: "Use holdouts, diagnostics, sensitivity checks, and evaluation evidence before calling a result reliable." },
  { num: "04", title: "Ship", copy: "Turn the analysis into a dashboard, API, report, or workflow that a stakeholder can actually use." },
];

const capabilityCount = groups.reduce((total, group) => total + group.skills.length, 0);

function MethodIcon({ name }: { name?: string }) {
  const common = {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  } as const;

  switch (name) {
    case "database":
    case "vectors":
      return <svg {...common}><ellipse cx="24" cy="11" rx="13" ry="5"/><path d="M11 11v12c0 2.8 5.8 5 13 5s13-2.2 13-5V11M11 23v12c0 2.8 5.8 5 13 5s13-2.2 13-5V23"/></svg>;
    case "sheet":
      return <svg {...common}><rect x="9" y="7" width="30" height="34" rx="4"/><path d="M18 7v34M9 18h30M9 29h30"/></svg>;
    case "science":
    case "experiment":
      return <svg {...common}><path d="M18 7h12M21 7v10L11 35a4 4 0 0 0 3.5 6h19a4 4 0 0 0 3.5-6L27 17V7"/><path d="M16 31h16"/></svg>;
    case "spark":
    case "boost":
      return <svg {...common}><path d="m27 5-15 23h11l-2 15 15-24H25l2-14Z"/></svg>;
    case "cluster":
      return <svg {...common}><circle cx="14" cy="14" r="5"/><circle cx="34" cy="13" r="5"/><circle cx="24" cy="34" r="5"/><path d="m18 17 4 12m8-12-4 12M19 14h10"/></svg>;
    case "warehouse":
      return <svg {...common}><path d="M7 18 24 7l17 11v23H7V18Z"/><path d="M14 23h20M14 30h20M14 37h20"/></svg>;
    case "trend":
    case "forecast":
      return <svg {...common}><path d="M7 36 17 25l8 7 16-20"/><path d="M31 12h10v10"/></svg>;
    case "curve":
      return <svg {...common}><path d="M7 31c6-18 12 18 18 0s10-8 16-18"/></svg>;
    case "tree":
    case "forest":
      return <svg {...common}><path d="M24 40V23M15 40h18"/><circle cx="24" cy="12" r="7"/><circle cx="14" cy="22" r="6"/><circle cx="34" cy="22" r="6"/></svg>;
    case "boundary":
      return <svg {...common}><path d="M8 37 40 11M8 29 32 9M16 40 40 20"/><circle cx="13" cy="14" r="3"/><circle cx="35" cy="35" r="3"/></svg>;
    case "split":
      return <svg {...common}><path d="M9 12h9c8 0 8 24 16 24h5M9 36h9c8 0 8-24 16-24h5"/></svg>;
    case "dimensions":
      return <svg {...common}><rect x="8" y="8" width="12" height="12" rx="2"/><rect x="28" y="28" width="12" height="12" rx="2"/><path d="M20 14h10M34 18v10"/></svg>;
    case "anomaly":
      return <svg {...common}><path d="M24 7 42 39H6L24 7Z"/><path d="M24 18v10M24 34h.01"/></svg>;
    case "dashboard":
    case "bars":
    case "analytics":
      return <svg {...common}><rect x="7" y="7" width="34" height="34" rx="5"/><path d="M14 31V21M24 31V15M34 31V24"/></svg>;
    case "chart":
    case "scatter":
      return <svg {...common}><path d="M8 39V9M8 39h32"/><circle cx="16" cy="29" r="2"/><circle cx="23" cy="23" r="2"/><circle cx="30" cy="27" r="2"/><circle cx="36" cy="15" r="2"/></svg>;
    case "model":
    case "brain":
      return <svg {...common}><path d="M19 9a7 7 0 0 0-7 7v2a7 7 0 0 0 0 12v2a7 7 0 0 0 12 5 7 7 0 0 0 12-5v-2a7 7 0 0 0 0-12v-2a7 7 0 0 0-12-5 7 7 0 0 0-5-2Z"/><path d="M24 11v26M14 20h5M29 17h5M14 31h5M29 29h5"/></svg>;
    case "transform":
    case "transfer":
      return <svg {...common}><path d="M8 16h26M28 10l6 6-6 6M40 32H14M20 26l-6 6 6 6"/></svg>;
    case "language":
      return <svg {...common}><path d="M8 10h20v16H17l-7 6v-6H8V10Z"/><path d="M31 19h9v13h-3v6l-6-6h-4"/></svg>;
    case "chain":
      return <svg {...common}><path d="m19 29-4 4a7 7 0 0 1-10-10l7-7a7 7 0 0 1 10 0M29 19l4-4a7 7 0 1 1 10 10l-7 7a7 7 0 0 1-10 0"/><path d="m17 31 14-14"/></svg>;
    case "retrieval":
      return <svg {...common}><path d="M8 9h25v30H8z"/><path d="M14 16h13M14 22h13M14 28h8"/><circle cx="34" cy="32" r="7"/></svg>;
    case "wind":
      return <svg {...common}><path d="M7 15h25c6 0 6-8 0-8-3 0-5 2-5 4M7 24h33M7 33h22c6 0 6 8 0 8-3 0-5-2-5-4"/></svg>;
    case "tune":
      return <svg {...common}><path d="M9 13h30M9 24h30M9 35h30"/><circle cx="18" cy="13" r="4"/><circle cx="31" cy="24" r="4"/><circle cx="22" cy="35" r="4"/></svg>;
    case "route":
      return <svg {...common}><circle cx="12" cy="12" r="4"/><circle cx="36" cy="36" r="4"/><path d="M16 12h6c8 0 8 12 0 12h-2c-8 0-8 12 0 12h12"/></svg>;
    case "evaluate":
      return <svg {...common}><rect x="9" y="7" width="30" height="34" rx="4"/><path d="m16 24 5 5 11-12M16 35h16"/></svg>;
    case "layers":
      return <svg {...common}><path d="m24 7 17 9-17 9L7 16l17-9Z"/><path d="m9 24 15 8 15-8M9 32l15 8 15-8"/></svg>;
    case "heatmap":
      return <svg {...common}><rect x="8" y="8" width="12" height="12" rx="2"/><rect x="28" y="8" width="12" height="12" rx="2"/><rect x="8" y="28" width="12" height="12" rx="2"/><rect x="28" y="28" width="12" height="12" rx="2"/></svg>;
    case "scan":
      return <svg {...common}><path d="M17 8H8v9M31 8h9v9M17 40H8v-9M31 40h9v-9"/><rect x="15" y="15" width="18" height="18" rx="4"/></svg>;
    case "sparkle":
      return <svg {...common}><path d="m24 6 3 9 9 3-9 3-3 9-3-9-9-3 9-3 3-9Z"/></svg>;
    case "network":
    case "segment":
      return <svg {...common}><circle cx="12" cy="12" r="4"/><circle cx="36" cy="12" r="4"/><circle cx="12" cy="36" r="4"/><circle cx="36" cy="36" r="4"/><circle cx="24" cy="24" r="4"/><path d="m15 15 6 6m6 6 6 6m0-18-6 6m-6 6-6 6"/></svg>;
    case "platform":
    case "workspace":
    case "admin":
    case "office":
      return <svg {...common}><rect x="8" y="8" width="14" height="14" rx="3"/><rect x="26" y="8" width="14" height="14" rx="3"/><rect x="8" y="26" width="14" height="14" rx="3"/><rect x="26" y="26" width="14" height="14" rx="3"/></svg>;
    case "crm":
      return <svg {...common}><circle cx="17" cy="18" r="6"/><circle cx="32" cy="19" r="5"/><path d="M7 39c1-8 6-12 12-12s11 4 12 12M29 28c6 0 10 4 11 11"/></svg>;
    default:
      return <svg {...common}><circle cx="24" cy="24" r="16"/><path d="M16 24h16M24 16v16"/></svg>;
  }
}

function SkillMark({ skill }: { skill: Skill }) {
  return (
    <span className={skill.logo ? "atlas-skill-mark atlas-skill-mark--brand" : "atlas-skill-mark atlas-skill-mark--method"} aria-hidden="true">
      {skill.logo ? (
        <img src={skill.logo} alt="" width="44" height="44" loading="eager" decoding="sync" />
      ) : (
        <MethodIcon name={skill.icon} />
      )}
    </span>
  );
}

export default function SkillsPage() {
  return (
    <main className="skills-premium">
      <SiteNav label="Technical skills page navigation" />

      <header className="toolkit-hero shell">
        <div className="toolkit-hero-surface">
          <div className="toolkit-hero-copy">
            <p className="eyebrow">TECHNICAL TOOLKIT</p>
            <h1>Technical depth,<br /><em>built for decisions.</em></h1>
            <p>
              A working stack spanning analysis, statistical modeling, machine learning, visualization, and deployment, organized around how the work moves from raw data to something people can trust and use.
            </p>
            <div className="toolkit-hero-stats" aria-label="Toolkit summary">
              <div><strong>{capabilityCount}</strong><span>capabilities</span></div>
              <div><strong>{groups.length}</strong><span>disciplines</span></div>
              <div><strong>100%</strong><span>local visuals</span></div>
            </div>
          </div>

          <div className="stack-constellation" aria-label="Core technology stack">
            <div className="stack-constellation-head">
              <span>CORE STACK</span>
              <p>Languages, frameworks, and delivery tools that recur across the portfolio.</p>
            </div>
            <div className="stack-node-grid">
              {featured.map((item) => (
                <article className="stack-node" key={item.name}>
                  <span>{item.role}</span>
                  <div><img src={item.logo} alt="" width="52" height="52" loading="eager" decoding="sync" /></div>
                  <strong>{item.name}</strong>
                </article>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="toolkit-flow shell" aria-labelledby="toolkit-flow-title">
        <div className="toolkit-section-intro">
          <span>WORKING STACK</span>
          <div>
            <h2 id="toolkit-flow-title">The tools matter because of <em>how they connect.</em></h2>
            <p>The portfolio uses technology as a sequence: understand the data, choose the right method, validate the result, then ship the decision surface.</p>
          </div>
        </div>
        <div className="toolkit-flow-grid">
          {stages.map((stage) => (
            <article className="flow-card" key={stage.num}>
              <span>{stage.num}</span>
              <h3>{stage.title}</h3>
              <p>{stage.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="toolkit-atlas shell" aria-labelledby="capability-library-title">
        <div className="toolkit-section-intro toolkit-atlas-intro">
          <span>CAPABILITY LIBRARY</span>
          <div>
            <h2 id="capability-library-title">Six disciplines. One <em>coherent toolkit.</em></h2>
            <p>Real product marks are stored locally where a branded technology has an official identity. Statistical methods and technical concepts use purpose built visual symbols rather than invented logos.</p>
          </div>
        </div>

        <div className="toolkit-discipline-list">
          {groups.map((group) => (
            <article className={`toolkit-discipline tone-${group.tone}`} key={group.num}>
              <header className="toolkit-discipline-head">
                <div className="discipline-meta">
                  <span className="discipline-number">{group.num}</span>
                  <span className="discipline-kicker">{group.kicker}</span>
                </div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <Link href={group.proofHref} className="discipline-proof">
                  {group.proofLabel} <span aria-hidden="true">↗</span>
                </Link>
              </header>

              <div className="atlas-skill-grid">
                {group.skills.map((skill) => {
                  const content = (
                    <>
                      <SkillMark skill={skill} />
                      <div className="atlas-skill-copy">
                        <span>{skill.type}</span>
                        <strong>{skill.name}</strong>
                      </div>
                      {skill.proof && <i aria-hidden="true">↗</i>}
                    </>
                  );

                  return skill.proof ? (
                    <Link
                      className="premium-skill-card atlas-skill-card atlas-skill-card--proof"
                      href={skill.proof}
                      aria-label={`${skill.name}, view portfolio evidence`}
                      key={skill.name}
                    >
                      {content}
                    </Link>
                  ) : (
                    <div className="premium-skill-card atlas-skill-card" key={skill.name}>
                      {content}
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="toolkit-close shell">
        <div>
          <span>THE POINT OF THE STACK</span>
          <h2>Tools are useful when they make the work <em>clearer, faster, and more defensible.</em></h2>
        </div>
        <Link href="/work">Explore project case studies <span>↗</span></Link>
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
