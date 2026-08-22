import Link from "next/link";
import { ProjectGrid } from "../project-grid";
import { SiteNav } from "../site-nav";

export default function Work() {
  return (
    <main className="work-page">
      <SiteNav label="Work page navigation" />
      <header className="work-page-hero shell">
        <p className="eyebrow">SELECTED WORK / COMPLETE INDEX</p>
        <h1>
          Projects built around
          <br />
          <em>real questions.</em>
        </h1>
        <p>
          Explore the complete collection. Each case study explains why the
          problem matters, what I built, what the result means, and where the
          approach can be applied.
        </p>
      </header>
      <section className="work-index shell">
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
              <Link href="/impact">How I Work</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
