import Link from "next/link";
import { ProjectGrid } from "./project-grid";
import { SiteNav } from "./site-nav";
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
    label: "Visualization & Apps",
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
              DATA ANALYTICS · APPLIED MACHINE LEARNING · DATA GOVERNANCE ·
              INTELLIGENT SYSTEMS
            </p>
            <h1>
              Transforming data into <em>insight, strategy, and impact.</em>
            </h1>
          </div>
          <div className="hero-aside">
            <p>
              Sam translates complex information into actionable intelligence,
              decision ready reporting, and practical machine learning
              solutions that support finance, development, and mission driven
              organizations with rigorous analytical and technical expertise.
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
        <section className="profile-overview" aria-label="Professional profile">
          <div className="profile-overview-heading">
            <span>01 / PROFILE</span>
            <h2>
              SAMPSON
              <br />
              BOATENG
            </h2>
            <p>DATA ANALYTICS · APPLIED MACHINE LEARNING</p>
          </div>
          <div className="profile-overview-copy">
            <p>
              Sam is a data analytics and applied machine learning professional
              with graduate training in Applied Machine Intelligence and
              practical experience across financial operations, donor data
              analysis, reporting, data governance, systems improvement, and
              mission driven healthcare initiatives.
            </p>
            <p>
              He combines Python, SQL, Excel, Power BI, Tableau, statistical
              modeling, natural language processing, computer vision, and
              generative AI with clear stakeholder communication, transforming
              complex information into reliable insights, informed decisions,
              and measurable organizational impact.
            </p>
            <div className="profile-overview-credentials">
              <span>M.S. Applied Machine Intelligence</span>
              <span>B.S. Computer Science</span>
            </div>
          </div>
        </section>
      </section>
      <section className="section about-system shell" id="about">
        <div className="about-system-head">
          <div>
            <p className="eyebrow">02 / ABOUT</p>
            <h2>
              Where analytical rigor meets <em>practical execution.</em>
            </h2>
          </div>
          <p>
            Sam connects complex organizational challenges with informed,
            defensible decisions through analytical rigor, statistical
            modeling, effective visualization, and reliable systems.
          </p>
        </div>
        <div className="about-system-grid">
          <div className="about-identity">
            <div className="portrait-stage">
              <div className="profile-photo">
                <span className="photo-orbit" aria-hidden="true" />
                <img
                  src="/sam-profile.webp"
                  width="900"
                  height="900"
                  loading="lazy"
                  decoding="async"
                  alt="Professional portrait of Sampson Boateng"
                />
                <span className="photo-sheen" aria-hidden="true" />
              </div>
            </div>
            <div className="about-narrative">
              <p>
                Sam currently works across finance and development, applying
                analytical and technical expertise to financial and donor data,
                reconciliation, management reporting, data quality,
                organizational systems, and AI enabled healthcare grant
                initiatives.
              </p>
              <p>
                Sam recently completed his master&apos;s in Analytics and Applied
                Machine Intelligence at Northeastern University. His approach
                emphasizes accuracy and accountability across the full
                analytical lifecycle, from data validation and modeling to
                visualization and executive ready communication.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section shell experience" id="experience">
        <div className="section-head compact">
          <div>
            <p className="eyebrow">03 / EXPERIENCE</p>
            <h2>
              Expertise shaped by
              <br />
              <em>real world practice.</em>
            </h2>
          </div>
        </div>
        <div className="timeline">
          <article>
            <div className="timeline-meta">
              <b>2025 to PRESENT</b>
              <span>New York</span>
            </div>
            <div>
              <h3>Finance, Development & IT Administration Support Analyst</h3>
              <h4>Village Health Works</h4>
              <p>
                Analyze financial and donor data, investigate discrepancies,
                prepare forecasts and management reporting, and establish
                data-quality standards that improve trust in organizational
                records.
              </p>
            </div>
          </article>
          <article>
            <div className="timeline-meta">
              <b>2024 to 2025</b>
              <span>Portland, Maine</span>
            </div>
            <div>
              <h3>Student Ambassador</h3>
              <h4>Northeastern University · The Roux Institute</h4>
              <p>
                Represented the student experience through campus programs and
                community events, welcomed prospective and incoming students,
                provided peer guidance, and helped strengthen engagement and
                connections across the Roux community.
              </p>
            </div>
          </article>
          <article>
            <div className="timeline-meta">
              <b>2022</b>
              <span>Saratov, Russia</span>
            </div>
            <div>
              <h3>Programmer Intern</h3>
              <h4>Bosch Techno-Engineering Ltd</h4>
              <p>
                Supported development and QA cycles, diagnosed defects, helped
                improve system stability by 20%, and built an internal
                encryption and decryption testing utility.
              </p>
            </div>
          </article>
          <article>
            <div className="timeline-meta">
              <b>2019 to 2023</b>
              <span>Saratov, Russia</span>
            </div>
            <div>
              <h3>Peer Tutor, English Language</h3>
              <h4>Independent Academic &amp; Language Support</h4>
              <p>
                Provided personalized English-language instruction to Russian
                learners, strengthening conversational fluency, reading
                comprehension, and practical communication for academic study,
                international travel, tourism, and everyday situations.
                Adapted lessons to individual goals and confidence levels,
                helping students use English effectively in real-world
                settings.
              </p>
            </div>
          </article>
        </div>
      </section>
      <section className="section shell" id="work">
        <div className="section-head">
          <div>
            <p className="eyebrow">04 / PROJECTS</p>
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
            Ten case studies across analytics, machine learning, generative AI,
            computer vision, and healthcare.
          </p>
        </div>
      </section>
      <section className="section shell skills-preview" id="skills">
        <div className="section-head">
          <div>
            <p className="eyebrow">05 / SKILLS</p>
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
        <div className="capability-console">
          <div className="capability-console-head">
            <p>TECHNICAL SKILLS AND TOOLS</p>
            <span>Six disciplines · one connected workflow</span>
          </div>
          <div className="capability-preview-grid">
            {skillGroups.map((s, i) => (
              <article key={s.label}>
                <span>0{i + 1}</span>
                <h3>{s.label}</h3>
                <p>{s.skills.slice(0, 4).map((item) => item.name).join(" · ")}</p>
              </article>
            ))}
          </div>
          <div className="capability-preview-foot">
            <p>Explore the complete matrix, project evidence, and tools used across Sam’s work.</p>
            <Link href="/skills">View technical skills &amp; tools <span>↗</span></Link>
          </div>
        </div>
      </section>
      <section className="leadership-preview shell" id="leadership">
        <div className="leadership-preview-head">
          <div>
            <p className="eyebrow">06 / LEADERSHIP & RECOGNITION</p>
            <h2>
              Leadership grounded
              <br />
              in <em>service and inclusion.</em>
            </h2>
          </div>
          <p>
            Sam’s leadership reflects a sustained commitment to inclusive
            communities, meaningful engagement, and initiatives that create
            lasting institutional and social impact.
          </p>
        </div>
        <div className="leadership-highlights">
          <article>
            <span>100</span>
            <div>
              <p>LAUREL & SCROLL</p>
              <h3>
                Recognized for achievement, leadership, and student engagement.
              </h3>
            </div>
          </article>
          <article>
            <span>YALI</span>
            <div>
              <p>LEADERSHIP FELLOW</p>
              <h3>
                Part of a network of emerging African leaders creating community
                impact.
              </h3>
            </div>
          </article>
          <article>
            <span>1ST</span>
            <div>
              <p>CLIMATE HACKATHON</p>
              <h3>First-place team behind the SeeLevelRise app concept.</h3>
            </div>
          </article>
        </div>
        <div className="leadership-preview-foot">
          <Link className="impact-link dark" href="/leadership">
            Explore leadership and recognition <span>↗</span>
          </Link>
          <p>
            Community roles, awards, fellowships, professional badges, and the
            stories behind them.
          </p>
        </div>
      </section>
      <section className="section shell beyond-preview" id="beyond-work">
        <div className="section-head">
          <div>
            <p className="eyebrow">07 / BEYOND WORK</p>
            <h2>
              The person behind
              <br />
              <em>the work.</em>
            </h2>
          </div>
          <p>
            Volunteering, cooking, travel, fitness, music, reading, and sports
            reflect the curiosity, discipline, and community spirit Sam brings
            to every part of life.
          </p>
        </div>
        <div className="beyond-preview-inner">
          <div className="beyond-preview-interests">
            <span>Volunteering</span>
            <span>Cooking</span>
            <span>Travel</span>
            <span>Fitness</span>
            <span>Music</span>
            <span>Reading</span>
            <span>Sports</span>
          </div>
          <Link className="impact-link dark" href="/person">
            Meet the person behind the work <span>↗</span>
          </Link>
        </div>
      </section>
      <section className="impact-preview" id="impact">
        <div className="shell impact-preview-grid">
          <div>
            <p className="eyebrow">IMPACT / SAM’S APPROACH</p>
            <h2>
              Service that drives
              <br />
              <em>stronger systems.</em>
            </h2>
          </div>
          <div className="impact-preview-copy">
            <p>
              Sam’s work integrates service, community engagement, and
              operational improvement, strengthening inclusion, communication,
              and the systems organizations rely on to deliver their missions.
            </p>
            <div className="impact-preview-points">
              <span>Community</span>
              <span>Engagement</span>
              <span>Clearer systems</span>
            </div>
            <Link className="impact-link" href="/impact">
              Read the full story <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section shell exploration" id="exploring">
        <div className="section-head">
          <div>
            <p className="eyebrow">08 / CURRENTLY EXPLORING</p>
            <h2>
              Research advancing
              <br />
              <em>responsible innovation.</em>
            </h2>
          </div>
          <p>
            Applied research priorities focused on trustworthy intelligent
            systems, responsible detection, and equitable access.
          </p>
        </div>
        <div className="exploration-grid">
          <article>
            <span>01</span>
            <h3>LLM Evaluation &amp; NLP</h3>
            <p>
              Designing stronger evaluation systems for factuality, safety,
              reasoning quality, and real-world usefulness beyond a single
              benchmark score.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Fraud Detection</h3>
            <p>
              Exploring anomaly detection, behavioral signals, and interpretable
              machine learning for identifying suspicious financial activity
              responsibly.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>AI-Enabled Patient Navigation</h3>
            <p>
              Investigating secure, human-centered platforms that help
              authorized healthcare teams find and navigate relevant
              patient-record information more efficiently.
            </p>
          </article>
        </div>
        <div className="research-areas">
          <p className="eyebrow">RESEARCH AREAS</p>
          <div>
            <span>Healthcare</span>
            <span>Artificial Intelligence</span>
            <span>Applied Machine Learning</span>
            <span>Environment</span>
            <span>Water</span>
            <span>Climate Resiliency</span>
            <span>Agriculture</span>
          </div>
        </div>
      </section>
      <section className="availability">
        <div className="shell availability-grid">
          <div>
            <p className="eyebrow">OPEN TO OPPORTUNITIES</p>
            <h2>
              Advancing organizations
              <br />
              through <em>data and intelligence.</em>
            </h2>
          </div>
          <div>
            <p>
              Sam welcomes opportunities that integrate rigorous analytics,
              applied machine learning, strategic communication, and
              measurable organizational impact.
            </p>
            <div className="role-pills">
              <span>Data Analysis</span>
              <span>Machine Learning</span>
              <span>Healthcare Analysis</span>
              <span>Fraud Detection Analysis</span>
              <span>Environment and Water Analysis</span>
            </div>
            <a href="mailto:samboateng190@gmail.com">Start a conversation ↗</a>
          </div>
        </div>
      </section>
      <section className="education shell">
        <p className="eyebrow">09 / EDUCATION</p>
        <div className="education-grid">
          <article>
            <span>2025</span>
            <h3>Master of Science</h3>
            <p>Applied Machine Intelligence</p>
            <b>
              Northeastern University
              <br />
              The Roux Institute
            </b>
          </article>
          <article>
            <span>2023</span>
            <h3>Bachelor of Science</h3>
            <p>Computer Science</p>
            <b>Saratov State University</b>
          </article>
          <article>
            <span>2023</span>
            <h3>Diploma</h3>
            <p>Data Analysis and Machine Learning</p>
            <b>
              Innopolis University
              <br />
              Russia
            </b>
          </article>
        </div>
      </section>
      <footer className="footer">
        <div className="shell">
          <p className="eyebrow">LET&apos;S WORK TOGETHER</p>
          <h2>
            Have a strategic challenge
            <br />
            worth <em>solving together?</em>
          </h2>
          <a className="email" href="mailto:samboateng190@gmail.com">
            samboateng190@gmail.com ↗
          </a>
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
