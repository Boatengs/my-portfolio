import { StaticLink as Link } from "./static-link";
import { ProjectGrid } from "./project-grid";
import { allProjects } from "./project-registry";
import { publications } from "./publications";
import { SiteNav } from "./site-nav";
import { ExperienceTimeline } from "./experience-timeline";
import { SkillsConstellation } from "./skills-constellation";
import { sitePath } from "./site-path";
export const skillGroups = [
  {
    label: "Data & Analysis",
    proof: "4 project examples",
    href: "/projects/price-elasticity",
    skills: [
      {
        name: "SQL",
        icon: "https://api.iconify.design/tabler/database.svg",
        href: "",
      },
      {
        name: "Excel",
        icon: "https://api.iconify.design/logos/microsoft-excel.svg",
        href: "",
      },
      {
        name: "Python",
        icon: "https://api.iconify.design/logos/python.svg",
        href: "/projects/price-elasticity",
      },
      {
        name: "Pandas",
        icon: "https://api.iconify.design/logos/pandas-icon.svg",
        href: "/projects/water-quality",
      },
      {
        name: "NumPy",
        icon: "https://api.iconify.design/logos/numpy.svg",
        href: "",
      },
      {
        name: "SciPy",
        icon: "https://api.iconify.design/logos/scipy.svg",
        href: "/projects/water-quality",
      },
      {
        name: "Spark",
        icon: "https://api.iconify.design/logos/apache-spark.svg",
        href: "",
      },
      {
        name: "Hadoop",
        icon: "https://api.iconify.design/logos/hadoop.svg",
        href: "",
      },
      {
        name: "Hive",
        icon: "https://api.iconify.design/simple-icons/apachehive.svg?color=%23FDEE21",
        href: "",
      },
    ],
  },
  {
    label: "Statistical & Modeling",
    proof: "3 project examples",
    href: "/projects/price-elasticity",
    skills: [
      {
        name: "Regression",
        icon: "https://api.iconify.design/tabler/chart-line.svg",
        href: "/projects/price-elasticity",
      },
      {
        name: "Ridge",
        icon: "https://api.iconify.design/tabler/wave-sine.svg",
        href: "/projects/price-elasticity",
      },
      {
        name: "Logistic Regression",
        icon: "https://api.iconify.design/tabler/binary-tree.svg",
        href: "/projects/healthcare-modeling",
      },
      {
        name: "Random Forest",
        icon: "https://api.iconify.design/tabler/trees.svg",
        href: "/projects/price-elasticity",
      },
      {
        name: "XGBoost",
        icon: "https://api.iconify.design/tabler/bolt.svg",
        href: "/projects/price-elasticity",
      },
      {
        name: "SVM",
        icon: "https://api.iconify.design/tabler/separator.svg",
        href: "/projects/healthcare-modeling",
      },
      {
        name: "PCA",
        icon: "https://api.iconify.design/tabler/dimensions.svg",
        href: "/projects/healthcare-modeling",
      },
      {
        name: "K-Means",
        icon: "https://api.iconify.design/tabler/affiliate.svg",
        href: "/projects/water-quality",
      },
      {
        name: "Isolation Forest",
        icon: "https://api.iconify.design/tabler/alert-triangle.svg",
        href: "/projects/water-quality",
      },
      {
        name: "Forecasting",
        icon: "https://api.iconify.design/tabler/trending-up.svg",
        href: "/projects/price-elasticity",
      },
      {
        name: "Hypothesis Testing",
        icon: "https://api.iconify.design/tabler/test-pipe.svg",
        href: "",
      },
    ],
  },
  {
    label: "Data Engineering & Databases",
    proof: "Data pipelines and storage",
    href: "/skills",
    skills: [
      {
        name: "ETL Pipelines",
        icon: "",
        href: "",
      },
      {
        name: "Data Cleaning & Validation",
        icon: "",
        href: "",
      },
      {
        name: "Data Modeling",
        icon: "",
        href: "",
      },
      {
        name: "PostgreSQL",
        icon: "",
        href: "",
      },
    ],
  },
  {
    label: "Business Intelligence",
    proof: "6 project examples",
    href: "/projects/sentiment-analyzer",
    skills: [
      {
        name: "Tableau",
        icon: "https://api.iconify.design/logos/tableau-icon.svg",
        href: "",
      },
      {
        name: "Power BI",
        icon: "https://api.iconify.design/logos/microsoft-power-bi.svg",
        href: "",
      },
      {
        name: "Matplotlib",
        icon: "https://api.iconify.design/logos/matplotlib-icon.svg",
        href: "",
      },
      {
        name: "Seaborn",
        icon: "https://api.iconify.design/tabler/chart-dots-3.svg",
        href: "",
      },
      {
        name: "Plotly",
        icon: "https://api.iconify.design/logos/plotly-icon.svg",
        href: "/projects/price-elasticity",
      },
      {
        name: "Streamlit",
        icon: "https://api.iconify.design/logos/streamlit.svg",
        href: "/projects/price-elasticity",
      },
      {
        name: "Gradio",
        icon: "https://api.iconify.design/tabler/apps.svg",
        href: "/projects/sentiment-analyzer",
      },
      {
        name: "FastAPI",
        icon: "https://api.iconify.design/logos/fastapi-icon.svg",
        href: "/projects/sports-chatbot",
      },
    ],
  },
  {
    label: "ML, NLP & Generative AI",
    proof: "6 project examples",
    href: "/projects/medical-qa",
    skills: [
      {
        name: "Scikit-learn",
        icon: "https://api.iconify.design/logos/scikit-learn.svg",
        href: "/projects/healthcare-modeling",
      },
      {
        name: "Transformers",
        icon: "https://api.iconify.design/tabler/transform.svg",
        href: "/projects/sentiment-analyzer",
      },
      {
        name: "DistilBERT",
        icon: "https://api.iconify.design/tabler/language.svg",
        href: "/projects/sentiment-analyzer",
      },
      {
        name: "LangChain",
        icon: "https://api.iconify.design/tabler/link.svg",
        href: "/projects/sports-chatbot",
      },
      {
        name: "ChromaDB",
        icon: "https://api.iconify.design/tabler/database-search.svg",
        href: "/projects/sports-chatbot",
      },
      {
        name: "RAG",
        icon: "https://api.iconify.design/tabler/book-2.svg",
        href: "/projects/sports-chatbot",
      },
      {
        name: "Llama 3.2",
        icon: "https://api.iconify.design/tabler/brain.svg",
        href: "/projects/sports-chatbot",
      },
      {
        name: "Mistral 7B",
        icon: "https://api.iconify.design/tabler/wind.svg",
        href: "/projects/medical-qa",
      },
      {
        name: "LoRA / QLoRA",
        icon: "https://api.iconify.design/tabler/adjustments-cog.svg",
        href: "/projects/medical-qa",
      },
      {
        name: "PEFT",
        icon: "https://api.iconify.design/tabler/feather.svg",
        href: "/projects/medical-qa",
      },
      {
        name: "TRL",
        icon: "https://api.iconify.design/tabler/route.svg",
        href: "/projects/medical-qa",
      },
      {
        name: "ROUGE Evaluation",
        icon: "https://api.iconify.design/tabler/clipboard-check.svg",
        href: "/projects/llm-evaluation",
      },
    ],
  },
  {
    label: "Computer Vision",
    proof: "3 project examples",
    href: "/projects/skin-classifier",
    skills: [
      {
        name: "TensorFlow",
        icon: "https://api.iconify.design/logos/tensorflow.svg",
        href: "/projects/skin-classifier",
      },
      {
        name: "PyTorch",
        icon: "https://api.iconify.design/logos/pytorch-icon.svg",
        href: "/projects/skin-lesion-segmentation",
      },
      {
        name: "EfficientNetB0",
        icon: "https://api.iconify.design/tabler/stack-2.svg",
        href: "/projects/skin-classifier",
      },
      {
        name: "Transfer Learning",
        icon: "https://api.iconify.design/tabler/arrows-transfer-up.svg",
        href: "/projects/skin-classifier",
      },
      {
        name: "Grad-CAM",
        icon: "https://api.iconify.design/tabler/heatmap.svg",
        href: "/projects/skin-classifier",
      },
      {
        name: "Grounding DINO",
        icon: "https://api.iconify.design/tabler/scan.svg",
        href: "/projects/object-detector",
      },
      {
        name: "Zero-Shot Learning",
        icon: "https://api.iconify.design/tabler/sparkles.svg",
        href: "/projects/object-detector",
      },
      {
        name: "U-Net",
        icon: "https://api.iconify.design/tabler/hierarchy-3.svg",
        href: "/projects/skin-lesion-segmentation",
      },
      {
        name: "Image Segmentation",
        icon: "https://api.iconify.design/tabler/crop.svg",
        href: "/projects/skin-lesion-segmentation",
      },
    ],
  },
  {
    label: "Cloud, DevOps & Development",
    proof: "Cloud and developer tools",
    href: "/skills",
    skills: [
      {
        name: "AWS",
        icon: "",
        href: "",
      },
      {
        name: "Microsoft Azure",
        icon: "",
        href: "",
      },
      {
        name: "Google Cloud Platform",
        icon: "",
        href: "",
      },
      {
        name: "Kubernetes",
        icon: "",
        href: "",
      },
    ],
  },
  {
    label: "Tools & Platforms",
    proof: "Professional toolkit",
    href: "/work",
    skills: [
      {
        name: "Git",
        icon: "https://api.iconify.design/logos/git-icon.svg",
        href: "",
      },
      {
        name: "Hugging Face",
        icon: sitePath("/skill-logos/huggingface.svg"),
        href: "https://huggingface.co/samurvivor-07",
      },
      {
        name: "Jira",
        icon: "https://api.iconify.design/logos/jira.svg",
        href: "",
      },
      {
        name: "Dataiku",
        icon: "https://api.iconify.design/tabler/chart-treemap.svg",
        href: "",
      },
      {
        name: "Bloomerang CRM",
        icon: "https://api.iconify.design/tabler/flower.svg",
        href: "",
      },
      {
        name: "Adobe Analytics",
        icon: "https://api.iconify.design/logos/adobe-icon.svg",
        href: "",
      },
      {
        name: "Zapier",
        icon: "https://api.iconify.design/logos/zapier-icon.svg",
        href: "",
      },
      {
        name: "Google Workspace Admin",
        icon: "https://api.iconify.design/logos/google-icon.svg",
        href: "",
      },
      {
        name: "Microsoft 365 Admin",
        icon: "https://api.iconify.design/logos/microsoft-icon.svg",
        href: "",
      },
      {
        name: "Microsoft Office",
        icon: "https://api.iconify.design/simple-icons/microsoftoffice.svg",
        href: "",
      },
    ],
  },
  {
    label: "Business, Quality & Professional",
    proof: "Process and people skills",
    href: "/skills",
    skills: [
      {
        name: "Process Optimization",
        icon: "",
        href: "",
      },
      {
        name: "Audit Support (SOX / SSAE)",
        icon: "",
        href: "",
      },
      {
        name: "Technical Writing",
        icon: "",
        href: "",
      },
      {
        name: "Problem Solving",
        icon: "",
        href: "",
      },
    ],
  },
];
const skillMark = (name: string) =>
  name
    .split(/[\\s/.-]+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
export default function Home() {
  return (
    <main>
      <SiteNav home />
      <section className="hero shell" id="top">
        <div className="hero-kicker">
          <i /> Open to opportunities
        </div>
        <div className="hero-grid">
          <div>
            <p className="eyebrow">
              HEALTHCARE AI · DATA ANALYTICS · APPLIED MACHINE LEARNING ·
              DATA GOVERNANCE · DATA ENGINEERING
            </p>
            <h1>
              Careful data work for <em>decisions that matter.</em>
            </h1>
          </div>
          <div className="hero-aside">
            <p>
              I build analysis and machine learning tools that people can check
              and use. Most of my work sits in healthcare and nonprofit finance,
              where a wrong number has real consequences.
            </p>
            <div className="hero-actions">
              <a className="text-link" href="#work">
                Explore selected work <span>↓</span>
              </a>
              <Link className="hero-resume-link" href="/resume">
                View résumé <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section about-system shell" id="about">
        <div className="about-system-head">
          <div>
            <p className="eyebrow">01 / ABOUT</p>
            <h2>
              Accuracy first, <em>then everything else.</em>
            </h2>
          </div>
          <p>
            I would rather report a result that holds up than one that looks
            impressive. I say plainly what a model can&apos;t do, and I keep my
            steps visible so they can be checked.
          </p>
        </div>
        <div className="about-system-grid">
          <div className="about-identity">
            <div className="portrait-stage">
              <div className="profile-photo">
                <span className="photo-orbit" aria-hidden="true" />
                <img
                  src={sitePath("/sam-profile.webp")}
                  width="900"
                  height="900"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  alt="Professional portrait of Sampson Boateng"
                />
                <span className="photo-sheen" aria-hidden="true" />
              </div>
            </div>
            <div className="about-narrative">
              <p>
                I am a data analyst, data engineer and machine learning
                practitioner who builds dependable analytical systems for
                healthcare, finance and public sector data. I hold an MPS in
                Applied Machine Intelligence from Northeastern University and
                bring hands on experience in healthcare analysis, financial
                analysis, donor data analysis, reconciliation, reporting and
                data governance.
              </p>
              <p>
                My work covers every stage of an analytical project: designing
                data pipelines and validation checks, building and evaluating
                predictive models, and delivering dashboards and reports that
                leaders can trust. I work with tools such as Python, SQL and
                Tableau, applied within analytical frameworks for statistical
                modeling, natural language processing, computer vision and
                generative AI.
              </p>
              <p className="about-core-areas">
                Core areas: data reconciliation, variance analysis, forecasting,
                data quality assurance, access management, workflow automation
                and process documentation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section shell experience background" id="experience">
        <div className="section-head compact">
          <div>
            <p className="eyebrow">02 / BACKGROUND</p>
            <h2>
              Expertise shaped by
              <br />
              <em>real world practice.</em>
            </h2>
          </div>
        </div>
        <div className="background-experience">
          <p className="background-label">EXPERIENCE</p>
          <ExperienceTimeline />
        </div>
        <div className="background-education" id="education">
          <p className="background-label" id="education-title">EDUCATION</p>
          <ol className="edu-cards" aria-labelledby="education-title">
            <li className="edu-card">
              <div className="edu-top">
                <span className="edu-level">Master&apos;s</span>
                <span className="edu-year">2025</span>
              </div>
              <h3>Applied Machine Intelligence</h3>
              <p className="edu-degree">Master of Professional Studies (MPS)</p>
              <p className="edu-school">
                Northeastern University · The Roux Institute
              </p>
            </li>
            <li className="edu-card">
              <div className="edu-top">
                <span className="edu-level">Bachelor&apos;s</span>
                <span className="edu-year">2023</span>
              </div>
              <h3>Computer Science</h3>
              <p className="edu-degree">Bachelor of Science</p>
              <p className="edu-school">Saratov State University</p>
            </li>
            <li className="edu-card">
              <div className="edu-top">
                <span className="edu-level">Diploma</span>
                <span className="edu-year">2023</span>
              </div>
              <h3>Data Analysis and Machine Learning</h3>
              <p className="edu-degree">Diploma</p>
              <p className="edu-school">Innopolis University, Russia</p>
            </li>
          </ol>
        </div>
      </section>
      <section className="section shell" id="work">
        <div className="section-head">
          <div>
            <p className="eyebrow">03 / PROJECTS</p>
            <h2>
              Applied solutions to
              <br />
              <em>real world challenges.</em>
            </h2>
          </div>
          <p>
            Each case study outlines why the challenge matters, the analytical
            approach, measurable outcomes, and broader real world applications.
          </p>
        </div>
        <ProjectGrid featured />
        <div className="section-cta">
          <Link href="/work">
            Explore all projects <span>↗</span>
          </Link>
          <p>
            {allProjects.length} case studies across analytics, machine learning, generative AI,
            computer vision, and healthcare.
          </p>
        </div>
      </section>
      <section className="section shell skills-preview" id="skills">
        <div className="section-head">
          <div>
            <p className="eyebrow">04 / SKILLS</p>
            <h2>
              Technical capabilities
              <br />
              with <em>practical impact.</em>
            </h2>
          </div>
          <p>
            Analytical methods, intelligent systems, visualization tools, and
            platforms connected to documented project outcomes.
          </p>
        </div>
        <SkillsConstellation />
      </section>
      <section className="section shell more-about" id="more">
        <div className="section-head compact">
          <div>
            <p className="eyebrow">05 / MORE ABOUT ME</p>
            <h2>
              Beyond the
              <br />
              <em>résumé.</em>
            </h2>
          </div>
        </div>
        <div className="more-grid">
          <Link className="more-card more-card--dark" href="/leadership" id="leadership">
            <span className="more-kicker">LEADERSHIP &amp; IMPACT</span>
            <h3>Service that builds stronger systems.</h3>
            <p>
              Four leadership roles, the Laurel and Scroll 100 Society of
              Distinction, a first place hackathon win and a YALI fellowship.
            </p>
            <span className="more-link">
              Explore leadership <span aria-hidden="true">↗</span>
            </span>
          </Link>
          <Link className="more-card" href="/publications" id="research">
            <span className="more-kicker">RESEARCH &amp; PUBLICATIONS</span>
            <h3>{publications.length} published research reviews.</h3>
            <p>
              Coauthored reviews on machine learning in oncology and on
              sentiment analysis for customer retention, plus the questions I
              am exploring now.
            </p>
            <span className="more-link">
              View research <span aria-hidden="true">↗</span>
            </span>
          </Link>
          <Link className="more-card" href="/person" id="beyond-work">
            <span className="more-kicker">BEYOND WORK</span>
            <h3>The person behind the work.</h3>
            <p>
              Volunteering, cooking, travel, fitness, reading, and soccer and
              basketball on whichever court will have me.
            </p>
            <span className="more-link">
              Meet the person <span aria-hidden="true">↗</span>
            </span>
          </Link>
        </div>
      </section>
      <footer className="footer footer--contact" id="contact">
        <div className="shell">
          <p className="eyebrow">
            <span className="footer-status" aria-hidden="true" /> OPEN TO
            OPPORTUNITIES · LET&apos;S WORK TOGETHER
          </p>
          <div className="footer-contact-grid">
            <h2>
              Have a strategic challenge
              <br />
              worth <em>solving together?</em>
            </h2>
            <div className="footer-contact-copy">
              <p>
                I&apos;m looking for analyst and applied machine learning roles
                where the data matters, especially in healthcare and data
                engineering. If that sounds like your team, I&apos;d like to
                hear from you.
              </p>
              <div className="footer-roles">
                <span>Data Analysis</span>
                <span>Machine Learning</span>
                <span>Healthcare Analysis</span>
                <span>Fraud Detection Analysis</span>
                <span>Environment and Water Analysis</span>
              </div>
              <a className="email" href="mailto:samboateng190@gmail.com">
                samboateng190@gmail.com ↗
              </a>
            </div>
          </div>
          <div className="footer-row">
            <p>© 2026 Sampson Boateng</p>
            <div>
              <a
                href="https://github.com/Boatengs"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/sam-boateng"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://huggingface.co/samurvivor-07"
                target="_blank"
                rel="noreferrer"
              >
                Hugging Face
              </a>
              <a href="tel:+12073325395">(207) 332-5395</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
