import Link from "next/link";
import { SiteNav } from "../site-nav";

export default function Resume() {
  return (
    <main className="resume-page">
      <SiteNav label="Résumé page navigation" />
      <section className="resume-head shell">
        <p className="eyebrow">CURRICULUM VITAE</p>
        <h1>Résumé</h1>
        <p>
          The résumé is rendered directly below and remains available as a
          downloadable PDF.
        </p>
      </section>
      <section className="pdf-shell shell">
        <div className="resume-document">
        <img
          src="/sampson-boateng-resume-page.png?v=20260818-2"
          width="1275"
          height="1650"
          decoding="async"
          alt="Sampson Boateng résumé, showing professional summary, skills, experience, projects, and education"
        />
        </div>
        <div className="pdf-actions">
          <a
            href="/sampson-boateng-resume.pdf?v=20260818-2"
            target="_blank"
            rel="noreferrer"
          >
            Open the original PDF ↗
          </a>
          <a href="/sampson-boateng-resume.pdf?v=20260818-2" download>
            Download a copy ↓
          </a>
        </div>
      </section>
    </main>
  );
}
