import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "../../site-nav";
import { notFound } from "next/navigation";
import { projects } from "../../projects";
import { pfasProject } from "../../pfas-project";
import { wastewaterProject } from "../../wastewater-project";

const allProjects = [...projects, pfasProject, wastewaterProject];

export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params,
    project = allProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Sampson Boateng`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Sampson Boateng`,
      description: project.summary,
      type: "article",
    },
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params,
    project = allProjects.find((p) => p.slug === slug);
  if (!project) notFound();
  const next = allProjects[(allProjects.indexOf(project) + 1) % allProjects.length];
  return (
    <main className="detail-page">
      <SiteNav label="Project page navigation" />
      <section className="detail-hero shell">
        <Link className="back-link" href="/work">
          ← Back to all projects
        </Link>
        <p className="eyebrow">
          PROJECT {project.index} / {project.category}
        </p>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
      </section>
      {project.image ? (
        <section className="detail-capture">
          <img
            src={project.image}
            width="1200"
            height="675"
            decoding="async"
            alt={`${project.title} application interface`}
          />
          <span>LIVE APPLICATION CAPTURE</span>
        </section>
      ) : (
        <section className={`detail-stage ${project.accent}`}>
          <div className="detail-orbit one" />
          <div className="detail-orbit two" />
          <div className="detail-bars">
            {[24, 68, 43, 82, 56, 91, 73].map((h, i) => (
              <i key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
          <span>EXPLORE · MODEL · VALIDATE · COMMUNICATE</span>
        </section>
      )}
      <section className="dataset-strip shell">
        <div>
          <span>DATASET</span>
          <strong>{project.dataset}</strong>
        </div>
        <div>
          <span>SIZE</span>
          <strong>{project.datasetSize}</strong>
        </div>
        <div>
          <span>SOURCE</span>
          {project.datasetUrl ? (
            <a href={project.datasetUrl} target="_blank" rel="noreferrer">
              {project.datasetSource} ↗
            </a>
          ) : (
            <strong>{project.datasetSource}</strong>
          )}
        </div>
      </section>
      {project.evidence && (
        <section className="evidence-panel shell">
          <div className="evidence-heading">
            <div>
              <p className="eyebrow">MEASURED EVIDENCE</p>
              <h2>What can be verified.</h2>
            </div>
            <p>
              Metrics and outputs drawn from the project artifacts—not estimates
              added for presentation.
            </p>
          </div>
          <div className="evidence-grid">
            {project.evidence.map((item) => (
              <article key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
          {project.validation && (
            <div className="validation-note">
              <span>VALIDATION</span>
              <p>{project.validation}</p>
            </div>
          )}
          {project.metricContext && (
            <div className="metric-context">
              <span>PLAIN-LANGUAGE INTERPRETATION</span>
              <p>{project.metricContext}</p>
            </div>
          )}
        </section>
      )}
      <section className="case-grid shell">
        <article>
          <span>01</span>
          <h2>Why this project matters</h2>
          <p>{project.challenge}</p>
        </article>
        <article>
          <span>02</span>
          <h2>What was developed</h2>
          <p>{project.approach}</p>
        </article>
        <article>
          <span>03</span>
          <h2>What it means</h2>
          <p>{project.outcome}</p>
        </article>
      </section>
      <section className="application-story shell">
        <p className="eyebrow">04 / WHERE THIS WORK APPLIES</p>
        <div>
          <h2>From project to practical use.</h2>
          <p>{project.applications}</p>
        </div>
      </section>
      <section className="reflection shell">
        <div>
          <span>05 / LIMITATION</span>
          <h2>What the project does not solve yet.</h2>
          <p>{project.limitations}</p>
        </div>
        <div>
          <span>06 / NEXT ITERATION</span>
          <h2>Future advancement</h2>
          <p>{project.future}</p>
        </div>
      </section>
      <section className="toolkit shell">
        <p className="eyebrow">TECHNICAL TOOLKIT</p>
        <div>
          {project.tools.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        {project.confidential ? (
          <p className="repo-note">
            Project code, data, analysis, results, and sponsor materials are not
            publicly available under the nondisclosure agreement.
          </p>
        ) : <div className="project-links">
          <a
            href={project.repoUrl || "https://github.com/Boatengs"}
            target="_blank"
            rel="noreferrer"
          >
            {project.repoUrl === "https://github.com/Boatengs"
              ? "Browse GitHub profile ↗"
              : "Explore project code ↗"}
          </a>
          {project.hfUrl && (
            <a href={project.hfUrl} target="_blank" rel="noreferrer">
              Launch on Hugging Face ↗
            </a>
          )}
        </div>}
        {project.repoNote && <p className="repo-note">{project.repoNote}</p>}
      </section>
      <Link className="next-project" href={`/projects/${next.slug}`}>
        <span>NEXT PROJECT</span>
        <strong>{next.title}</strong>
        <i>→</i>
      </Link>
    </main>
  );
}
