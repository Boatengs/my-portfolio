import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Binary,
  BookOpen,
  Bot,
  Boxes,
  BrainCircuit,
  Building2,
  Cloud,
  Code2,
  Crosshair,
  Database,
  Eye,
  FileSpreadsheet,
  FlaskConical,
  Gauge,
  GitBranch,
  GitMerge,
  Image as ImageIcon,
  Kanban,
  Languages,
  Layers,
  LayoutDashboard,
  LineChart,
  MessageSquare,
  Monitor,
  Network,
  Orbit,
  Search,
  Settings,
  Sigma,
  Sparkles,
  Split,
  Table2,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";
import { SiteNav } from "../site-nav";

type Skill = {
  name: string;
  type: string;
  logo?: string;
  icon?: LucideIcon;
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
      { name: "SQL", type: "Query language", icon: Database },
      { name: "Excel", type: "Spreadsheet analysis", icon: FileSpreadsheet },
      { name: "Python", type: "Programming language", logo: logo("python"), proof: "/projects/gridpulse-energy-grid-analytics" },
      { name: "Pandas", type: "Data library", logo: logo("pandas") },
      { name: "NumPy", type: "Numerical library", logo: logo("numpy") },
      { name: "SciPy", type: "Scientific computing", icon: Sigma },
      { name: "Apache Spark", type: "Distributed computing", icon: Sparkles },
      { name: "Hadoop", type: "Distributed data", icon: Boxes },
      { name: "Apache Hive", type: "Data warehouse", icon: Table2 },
    ],
  },
  {
    num: "02",
    title: "Statistical & Modeling",
    description: "Model design, validation, inference, segmentation, and forecasting methods used to make analytical results defensible and decision-ready.",
    proofHref: "/projects/gridpulse-energy-grid-analytics",
    proofLabel: "Forecasting evidence",
    skills: [
      { name: "Regression", type: "Statistical method", icon: TrendingUp },
      { name: "Ridge", type: "Regularized model", icon: LineChart },
      { name: "Random Forest", type: "Ensemble model", icon: GitBranch },
      { name: "XGBoost", type: "Gradient boosting", icon: Gauge },
      { name: "Train/Test Split", type: "Validation method", icon: Split },
      { name: "PCA", type: "Dimensionality reduction", icon: Orbit },
      { name: "K-Means", type: "Clustering", icon: Network },
      { name: "Anomaly Detection", type: "Detection method", icon: Search },
      { name: "Forecasting", type: "Time-series modeling", icon: LineChart, proof: "/projects/gridpulse-energy-grid-analytics" },
      { name: "A/B Testing", type: "Experiment design", icon: FlaskConical },
      { name: "Hypothesis Testing", type: "Statistical inference", icon: Binary },
    ],
  },
  {
    num: "03",
    title: "Business Intelligence",
    description: "Visualization, dashboarding, and application frameworks used to move analysis from notebooks into interfaces people can actually use.",
    proofHref: "/projects/water-quality",
    proofLabel: "Analytics evidence",
    skills: [
      { name: "Tableau", type: "BI platform", icon: BarChart3 },
      { name: "Power BI", type: "BI platform", icon: LayoutDashboard },
      { name: "Matplotlib", type: "Visualization library", icon: LineChart },
      { name: "Seaborn", type: "Visualization library", icon: BarChart3 },
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
      { name: "Scikit-learn", type: "ML framework", icon: BrainCircuit },
      { name: "Transformers", type: "Model framework", icon: Languages },
      { name: "DistilBERT", type: "Language model", icon: BookOpen },
      { name: "LangChain", type: "LLM framework", icon: Workflow },
      { name: "ChromaDB", type: "Vector database", icon: Database },
      { name: "RAG", type: "Retrieval method", icon: Network },
      { name: "Llama 3.2", type: "Language model", icon: Bot },
      { name: "Mistral 7B", type: "Language model", icon: MessageSquare },
      { name: "LoRA / QLoRA", type: "Fine-tuning method", icon: SlidersIcon },
      { name: "PEFT", type: "Fine-tuning framework", icon: Settings },
      { name: "TRL", type: "Training framework", icon: BrainCircuit },
      { name: "ROUGE", type: "Evaluation metric", icon: Gauge },
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
      { name: "EfficientNetB0", type: "Vision architecture", icon: Layers },
      { name: "Transfer Learning", type: "Training method", icon: GitMerge },
      { name: "Grad-CAM", type: "Interpretability", icon: Eye },
      { name: "Grounding DINO", type: "Object detection", icon: Crosshair },
      { name: "Zero-Shot Learning", type: "Generalization method", icon: Sparkles },
      { name: "U-Net", type: "Segmentation architecture", icon: Network },
      { name: "Image Segmentation", type: "Vision task", icon: ImageIcon },
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
      { name: "Dataiku", type: "Data science platform", icon: Workflow },
      { name: "Bloomerang CRM", type: "CRM platform", icon: Building2 },
      { name: "Adobe Analytics", type: "Digital analytics", icon: BarChart3 },
      { name: "Zapier", type: "Automation platform", logo: logo("zapier") },
      { name: "Google Workspace Admin", type: "Cloud administration", icon: Cloud },
      { name: "Microsoft 365 Admin", type: "Enterprise administration", icon: Monitor },
      { name: "Microsoft Office", type: "Productivity suite", icon: FileSpreadsheet },
    ],
  },
];

// Keep a stable, familiar icon for parameter-efficient fine-tuning without
// pretending that methods such as LoRA / QLoRA have an official brand logo.
function SlidersIcon(props: React.ComponentProps<"svg">) {
  return <Code2 {...props} />;
}

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
  const Icon = skill.icon || Code2;
  return (
    <span className="skill-visual skill-visual--method" aria-hidden="true">
      <Icon size={25} strokeWidth={1.65} />
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
