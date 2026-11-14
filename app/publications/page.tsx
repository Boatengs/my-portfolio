import { StaticLink as Link } from "../static-link";
import { SiteNav } from "../site-nav";
import { orcidId, orcidUrl, ownName, publications } from "../publications";

export default function Publications() {
  return (
    <main className="impact-page publications-page">
      <SiteNav label="Publications page navigation" />
      <header className="impact-page-hero shell">
        <p className="eyebrow">RESEARCH / PUBLICATIONS</p>
        <h1>
          Published
          <br />
          <em>research.</em>
        </h1>
        <p>
          Co-authored reviews on machine learning in oncology and on sentiment
          analysis for customer retention. Author order is as published, and
          each title links to the article through its DOI.
        </p>
      </header>
      <section className="shell publications">
        <ol className="publication-list">
          {publications.map((paper) => (
            <li key={paper.doi}>
              <div className="publication-meta">
                <span>{paper.year}</span>
                <p>{paper.type}</p>
              </div>
              <div className="publication-body">
                <h2>
                  <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noreferrer">
                    {paper.title}
                  </a>
                </h2>
                <p className="publication-authors">
                  {paper.authors.map((author, i) => (
                    <span key={author}>
                      {author === ownName ? <b>{author}</b> : author}
                      {i < paper.authors.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
                <p className="publication-source">
                  <em>{paper.journal}</em>, Vol. {paper.volume}, Issue {paper.issue} ·
                  Published {paper.published}
                </p>
                <div className="publication-foot">
                  <div className="publication-tags">
                    {paper.keywords.map((k) => (
                      <span key={k}>{k}</span>
                    ))}
                  </div>
                  <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noreferrer">
                    DOI {paper.doi} <span>↗</span>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="orcid-card">
          <div>
            <p className="eyebrow">ORCID</p>
            <h2>{orcidId}</h2>
            <p>
              The full ORCID record, with these works alongside education,
              employment and distinctions.
            </p>
          </div>
          <a className="impact-link dark" href={orcidUrl} target="_blank" rel="noreferrer">
            Open the ORCID record <span>↗</span>
          </a>
        </div>
        <div className="exploring-block" id="exploring">
          <p className="eyebrow">CURRENTLY EXPLORING</p>
          <h2>
            Research advancing <em>responsible innovation.</em>
          </h2>
          <div className="exploring-grid">
            <article>
              <span>01</span>
              <h3>LLM Evaluation &amp; NLP</h3>
              <p>
                Designing stronger evaluation systems for factuality, safety,
                reasoning quality, and real world usefulness beyond a single
                benchmark score.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Fraud Detection</h3>
              <p>
                Exploring anomaly detection, behavioral signals, and
                interpretable machine learning for identifying suspicious
                financial activity responsibly.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>AI Enabled Patient Navigation</h3>
              <p>
                Investigating secure, human centered platforms that help
                authorized healthcare teams find and navigate relevant patient
                record information more efficiently.
              </p>
            </article>
          </div>
          <div className="exploring-areas">
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
        </div>
        <Link className="back-link" href="/">
          ← Back to home
        </Link>
      </section>
    </main>
  );
}
