import { StaticLink as Link } from "../static-link";
import { ProjectGrid } from "../project-grid";
import { allProjects } from "../project-registry";
import { SiteNav } from "../site-nav";

export default function Work() {
  const focusAreas = new Set(allProjects.flatMap((project) => project.filters)).size;
  const liveApps = allProjects.filter((project) =>
    project.filters.includes("Deployed Apps"),
  ).length;

  return (
    <main className="work-page">
      <SiteNav label="Work page navigation" />
      <header className="work-page-hero shell">
        <div className="work-hero-copy">
          <p className="eyebrow">PORTFOLIO / ANALYTICS · ML · AI</p>
          <h1>
            Work that turns analysis
            <br />
            into <em>decisions.</em>
          </h1>
          <p className="work-hero-intro">
            A curated body of applied analytics, machine learning, and decision-support
            projects. Each case study is organized around the problem, evidence, outcome,
            and practical use—not just the technology used to build it.
          </p>
        </div>
        <div className="work-hero-facts" aria-label="Portfolio overview">
          <div>
            <strong>{allProjects.length}</strong>
            <span>Public projects</span>
          </div>
          <div>
            <strong>{focusAreas}</strong>
            <span>Focus areas</span>
          </div>
          <div>
            <strong>{liveApps}</strong>
            <span>Live applications</span>
          </div>
        </div>
      </header>
      <section className="work-index shell" aria-label="Project portfolio">
        <ProjectGrid />
      </section>
      <footer className="footer">
        <div className="shell">
          <p className="eyebrow">LET&apos;S WORK TOGETHER</p>
          <h2>
            Have a data problem
            <br />
            worth <em>solving?</em>
          </h2>
          <a className="email" href="mailto:samboateng190@gmail.com">
            samboateng190@gmail.com ↗
          </a>
          <div className="footer-row">
            <p>© 2026 Sampson Boateng</p>
            <div>
              <Link href="/">Home</Link>
              <Link href="/impact">Professional Approach</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
