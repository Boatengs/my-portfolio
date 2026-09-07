import Link from "next/link";
import { SiteNav } from "../site-nav";

const resumeUrl = "/sampson-boateng-resume.pdf?v=20260907-1";

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
          <iframe
            className="resume-pdf-frame"
            src={`${resumeUrl}#view=FitH`}
            title="Sampson Boateng résumé"
            loading="eager"
          />
        </div>
        <div className="pdf-actions">
          <a href={resumeUrl} target="_blank" rel="noreferrer">
            Open the original PDF ↗
          </a>
          <a href={resumeUrl} download="Sampson-Boateng-Resume.pdf">
            Download a copy ↓
          </a>
        </div>
      </section>
    </main>
  );
}
