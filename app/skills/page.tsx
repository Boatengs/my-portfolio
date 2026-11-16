import { StaticLink as Link } from "../static-link";
import { SiteNav } from "../site-nav";
import { sitePath } from "../site-path";
import { SkillsLibrary } from "./skills-library";
import type { SkillGroup } from "./skill-parts";

const logo = (name: string) => sitePath(`/skill-logos/${name}.svg`);

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
      { name: "Excel", type: "Spreadsheet analysis", logo: logo("excel") },
      { name: "Python", type: "Programming language", logo: logo("python"), proof: "/projects/gridpulse-energy-grid-analytics" },
      { name: "Pandas", type: "Data library", logo: logo("pandas"), proof: "/projects/water-quality" },
      { name: "NumPy", type: "Numerical library", logo: logo("numpy") },
      { name: "SciPy", type: "Scientific computing", logo: logo("scipy"), proof: "/projects/water-quality" },
      { name: "Apache Spark", type: "Distributed computing", logo: logo("apache-spark") },
      { name: "Hadoop", type: "Distributed data", logo: logo("hadoop") },
      { name: "Apache Hive", type: "Data warehouse", logo: logo("hive") },
      { name: "R", type: "Programming language", logo: logo("r") },
      { name: "DuckDB", type: "Analytical database", logo: logo("duckdb") },
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
      { name: "XGBoost", type: "Gradient boosting library", logo: logo("xgboost") },
      { name: "SVM", type: "Classification model", icon: "boundary", proof: "/projects/healthcare-modeling" },
      { name: "Train Test Split", type: "Validation method", icon: "split" },
      { name: "PCA", type: "Dimensionality reduction", icon: "dimensions" },
      { name: "K Means", type: "Clustering", icon: "cluster", proof: "/projects/water-quality" },
      { name: "Anomaly Detection", type: "Detection method", icon: "anomaly" },
      { name: "Isolation Forest", type: "Anomaly detection model", icon: "forest", proof: "/projects/water-quality" },
      { name: "Forecasting", type: "Time series modeling", icon: "forecast", proof: "/projects/gridpulse-energy-grid-analytics" },
      { name: "A/B Testing", type: "Experiment design", icon: "experiment" },
      { name: "Hypothesis Testing", type: "Statistical inference", icon: "science" },
      { name: "Statistical Analysis", type: "Quantitative method", icon: "chart" },
      { name: "Exploratory Data Analysis", type: "Analysis method", icon: "scatter" },
      { name: "Predictive Modeling", type: "Modeling method", icon: "forecast" },
    ],
  },
  {
    num: "03",
    title: "Data Engineering & Databases",
    kicker: "GETTING THE DATA READY TO TRUST",
    description:
      "Extraction, transformation, validation and storage work that moves data between systems and keeps it consistent before anyone reports on it.",
    proofHref: "/work",
    proofLabel: "See portfolio evidence",
    tone: "teal",
    skills: [
      { name: "ETL Pipelines", type: "Extract, transform, load", icon: "pipeline" },
      { name: "Data Cleaning & Validation", type: "Data quality", icon: "evaluate" },
      { name: "Data Modeling", type: "Data design", icon: "warehouse" },
      { name: "Data Integration", type: "Systems integration", icon: "chain" },
      { name: "Data Migration", type: "Data movement", icon: "transfer" },
      { name: "Workflow Automation", type: "Process automation", icon: "route" },
      { name: "MySQL", type: "Relational database", logo: logo("mysql") },
      { name: "PostgreSQL", type: "Relational database", logo: logo("postgresql") },
      { name: "SQL Server", type: "Relational database", icon: "database" },
      { name: "Snowflake", type: "Cloud data warehouse", logo: logo("snowflake") },
    ],
  },
  {
    num: "04",
    title: "Business Intelligence",
    kicker: "ANALYSIS PEOPLE CAN ACTUALLY USE",
    description:
      "Visualization, dashboarding, and application frameworks for moving analysis out of notebooks and into interfaces built for decisions.",
    proofHref: "/projects/world-happiness-analysis",
    proofLabel: "See dashboard evidence",
    tone: "mint",
    skills: [
      { name: "Tableau", type: "BI platform", logo: logo("tableau") },
      { name: "Power BI", type: "BI platform", logo: logo("powerbi") },
      { name: "Matplotlib", type: "Visualization library", logo: logo("matplotlib") },
      { name: "Seaborn", type: "Visualization library", logo: logo("seaborn") },
      { name: "Plotly", type: "Interactive visualization", logo: logo("plotly"), proof: "/projects/world-happiness-analysis" },
      { name: "Streamlit", type: "App framework", logo: logo("streamlit"), proof: "/projects/gridpulse-energy-grid-analytics" },
      { name: "Gradio", type: "ML interface", logo: logo("gradio") },
      { name: "FastAPI", type: "API framework", logo: logo("fastapi") },
      { name: "Qlik Sense", type: "BI platform", logo: logo("qlik") },
      { name: "Excel PivotTables & Macros", type: "Spreadsheet reporting", logo: logo("excel") },
    ],
  },
  {
    num: "05",
    title: "ML, NLP & LLM",
    kicker: "PRACTICAL INTELLIGENT SYSTEMS",
    description:
      "Evaluation, retrieval, embeddings, language models, and fine tuning workflows for building useful generative AI systems with measurable behavior.",
    proofHref: "/projects/llm-evaluation",
    proofLabel: "See LLM evaluation evidence",
    tone: "violet",
    skills: [
      { name: "Scikit learn", type: "ML framework", logo: logo("scikit-learn"), proof: "/projects/healthcare-modeling" },
      { name: "Transformers", type: "Model framework", logo: logo("huggingface") },
      { name: "DistilBERT", type: "Language model", icon: "language" },
      { name: "LangChain", type: "LLM framework", logo: logo("langchain") },
      { name: "ChromaDB", type: "Vector database", logo: logo("chromadb") },
      { name: "RAG", type: "Retrieval method", icon: "retrieval" },
      { name: "Llama 3.2", type: "Language model", logo: logo("meta") },
      { name: "Mistral 7B", type: "Language model", logo: logo("mistral") },
      { name: "LoRA / QLoRA", type: "Fine tuning method", icon: "tune" },
      { name: "PEFT", type: "Fine tuning framework", icon: "tune" },
      { name: "TRL", type: "Training framework", icon: "route" },
      { name: "ROUGE", type: "Evaluation metric", icon: "evaluate", proof: "/projects/llm-evaluation" },
    ],
  },
  {
    num: "06",
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
    num: "07",
    title: "Cloud, DevOps & Development",
    kicker: "WHERE THE WORK RUNS",
    description:
      "Cloud storage, managed databases, containers and developer tools used to host data, train models and test the services around them.",
    proofHref: "/work",
    proofLabel: "See portfolio evidence",
    tone: "indigo",
    skills: [
      { name: "AWS S3", type: "Cloud storage", icon: "cloud" },
      { name: "AWS SageMaker", type: "Cloud ML platform", icon: "cloud" },
      { name: "AWS RDS", type: "Managed database", icon: "database" },
      { name: "Microsoft Azure", type: "Cloud platform", icon: "cloud" },
      { name: "Google Cloud Platform", type: "Cloud platform", logo: logo("google-cloud") },
      { name: "Kubernetes", type: "Container orchestration", logo: logo("kubernetes") },
      { name: "PowerShell", type: "Scripting", icon: "terminal" },
      { name: "HTML", type: "Markup language", logo: logo("html5") },
      { name: "VS Code", type: "Code editor", icon: "code" },
      { name: "Anaconda", type: "Python distribution", logo: logo("anaconda") },
      { name: "Jupyter Notebook", type: "Interactive notebook", logo: logo("jupyter") },
      { name: "Google Colab", type: "Cloud notebook", logo: logo("google-colab") },
      { name: "Postman", type: "API testing", logo: logo("postman") },
    ],
  },
  {
    num: "08",
    title: "Tools & Platforms",
    kicker: "THE DELIVERY LAYER",
    description:
      "Collaboration, automation, analytics, and enterprise administration tools that support delivery beyond the model itself.",
    proofHref: "/work",
    proofLabel: "See portfolio evidence",
    tone: "slate",
    skills: [
      { name: "GitHub", type: "Version control and collaboration", logo: logo("github"), proof: "/work" },
      { name: "Hugging Face", type: "Model hub and ML collaboration", logo: logo("huggingface") },
      { name: "Jira", type: "Project management", logo: logo("jira") },
      { name: "Dataiku", type: "Data science platform", logo: logo("dataiku") },
      { name: "Bloomerang CRM", type: "CRM platform", icon: "crm" },
      { name: "Adobe Analytics", type: "Digital analytics", logo: logo("adobe-analytics") },
      { name: "Zapier", type: "Automation platform", logo: logo("zapier") },
      { name: "Google Workspace Admin", type: "Cloud administration", logo: logo("google-workspace") },
      { name: "Microsoft 365 Admin", type: "Enterprise administration", logo: logo("microsoft-365") },
      { name: "Microsoft Office", type: "Productivity suite", logo: logo("microsoft-office") },
      { name: "Microsoft Teams", type: "Team communication", icon: "chat" },
      { name: "SharePoint", type: "Document management", icon: "folder" },
      { name: "Confluence", type: "Team documentation", logo: logo("confluence") },
      { name: "ServiceNow", type: "IT service management", icon: "ticket" },
      { name: "Slack", type: "Team communication", icon: "chat" },
      { name: "Box", type: "Cloud content management", logo: logo("box") },
    ],
  },
  {
    num: "09",
    title: "Business, Quality & Professional Skills",
    kicker: "HOW THE WORK GETS DONE WITH PEOPLE",
    description:
      "Performance tracking, process improvement, audit support and the working habits that keep analysis useful to the teams who depend on it.",
    proofHref: "/leadership",
    proofLabel: "See leadership and service",
    tone: "coral",
    skills: [
      { name: "Supplier Performance Analytics", type: "Business analytics", icon: "bars" },
      { name: "Quality Metrics", type: "Quality management", icon: "gauge" },
      { name: "KPI Tracking", type: "Performance reporting", icon: "dashboard" },
      { name: "Continuous Improvement", type: "Operations practice", icon: "cycle" },
      { name: "Process Optimization", type: "Operations practice", icon: "tune" },
      { name: "Process Mapping", type: "Process design", icon: "route" },
      { name: "Process Development", type: "Process design", icon: "layers" },
      { name: "Audit Support (SOX / SSAE)", type: "Controls and compliance", icon: "shield" },
      { name: "Technical Writing", type: "Documentation", icon: "doc" },
      { name: "Problem Solving", type: "Professional skill", icon: "sparkle" },
      { name: "Teamwork", type: "Professional skill", icon: "people" },
      { name: "Interpersonal Communication", type: "Professional skill", icon: "language" },
      { name: "Conflict Resolution", type: "Professional skill", icon: "handshake" },
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
  { name: "Hugging Face", role: "MODEL HUB", logo: logo("huggingface") },
];

const stages = [
  { num: "01", title: "Explore", copy: "Query, clean, profile, and understand the shape of the problem before choosing a model." },
  { num: "02", title: "Model", copy: "Select methods that fit the decision context, then measure them against transparent baselines." },
  { num: "03", title: "Validate", copy: "Use holdouts, diagnostics, sensitivity checks, and evaluation evidence before calling a result reliable." },
  { num: "04", title: "Ship", copy: "Turn the analysis into a dashboard, API, report, or workflow that a stakeholder can actually use." },
];

const capabilityCount = groups.reduce((total, group) => total + group.skills.length, 0);
const provenCount = groups.reduce((total, group) => total + group.skills.filter((skill) => skill.proof).length, 0);

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
              <div><strong>{provenCount}</strong><span>linked to projects</span></div>
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
            <h2 id="capability-library-title">Nine disciplines. One <em>coherent toolkit.</em></h2>
            <p>Use the bar below to jump straight to a discipline. Any card marked with an arrow opens a project where I used that tool.</p>
          </div>
        </div>

        <SkillsLibrary groups={groups} />
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
            <div><Link href="/">Home</Link><Link href="/leadership">Leadership &amp; Impact</Link></div>
          </div>
        </div>
      </footer>
    </main>
  );
}
