"use client";

import Link from "next/link";
import { useState } from "react";
import { allProjects } from "./project-registry";

type PortfolioProject = (typeof allProjects)[number];

const filterOptions = [
  { key: "All", label: "All work" },
  { key: "Data Analytics", label: "Analytics" },
  { key: "Machine Learning", label: "Machine learning" },
  { key: "Generative AI", label: "Generative AI" },
  { key: "Computer Vision", label: "Computer vision" },
  { key: "Healthcare", label: "Healthcare" },
  { key: "Deployed Apps", label: "Live apps" },
];

const coverCodes: Record<string, [string, string]> = {
  "gridpulse-energy-grid-analytics": ["GRID", "PULSE"],
  "water-quality": ["WATER", "SIGNALS"],
  "healthcare-modeling": ["RESOURCE", "MODEL"],
  "sentiment-analyzer": ["TEXT", "SIGNAL"],
  "sports-chatbot": ["RAG", "SPORTS"],
  "medical-qa": ["MEDICAL", "Q+A"],
  "skin-classifier": ["VISION", "EXPLAIN"],
  "object-detector": ["OPEN", "VOCAB"],
  "skin-lesion-segmentation": ["LESION", "SEGMENT"],
  "llm-evaluation": ["LLM", "EVAL"],
  "pfas-water-decision-intelligence": ["PFAS", "DECISION"],
  "wastewater-infrastructure-analytics": ["ASSET", "RISK"],
  "financial-crime-risk-intelligence": ["GRAPH", "RISK"],
  "world-happiness-analysis": ["WHR", "LIVE"],
};

function primaryCategory(category: string) {
  return category.split("·")[0]?.trim() || category;
}

function surfaceLabel(project: PortfolioProject) {
  if (project.slug === "world-happiness-analysis") return "OPEN LIVE DASHBOARD";
  if (project.slug === "gridpulse-energy-grid-analytics") return "LIVE CONTROL ROOM + CASE STUDY";
  return "VIEW CASE STUDY";
}

function ProjectCover({ project }: { project: PortfolioProject }) {
  const code = coverCodes[project.slug] ?? ["CASE", "STUDY"];
  const proof = project.evidence?.[0];

  return (
    <div className={`project-cover cover-${project.accent}`} aria-hidden="true">
      <div className="project-cover-grid" />
      <div className="project-cover-topline">
        <span>{project.index}</span>
        <span>{primaryCategory(project.category)}</span>
      </div>
      <div className="project-cover-code">
        <strong>{code[0]}</strong>
        <strong>{code[1]}</strong>
      </div>
      <div className="project-cover-footer">
        <span className="project-cover-proof">
          {proof ? (
            <>
              <strong>{proof.value}</strong>
              <small>{proof.label}</small>
            </>
          ) : (
            <>
              <strong>CASE</strong>
              <small>Project evidence</small>
            </>
          )}
        </span>
        <span className="project-cover-action">{surfaceLabel(project)}</span>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  lead = false,
}: {
  project: PortfolioProject;
  lead?: boolean;
}) {
  const proof = project.evidence?.[0];

  return (
    <Link
      href={`/projects/${project.slug}`}
      aria-label={`View case study: ${project.title}`}
      className={`project-card project-card--editorial${lead ? " project-card--lead" : ""}`}
    >
      <ProjectCover project={project} />
      <div className="project-editorial-copy">
        <div className="project-editorial-meta">
          <span>{lead ? "Latest project" : project.index}</span>
          <span>{project.category}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        {proof && (
          <div className="project-editorial-proof">
            <strong>{proof.value}</strong>
            <span>{proof.label}</span>
          </div>
        )}
        <span className="project-editorial-link">
          {project.slug === "world-happiness-analysis" ? "Open dashboard" : "View case study"}
          <span aria-hidden="true">↗</span>
        </span>
      </div>
    </Link>
  );
}

export function ProjectGrid({ featured = false }: { featured?: boolean }) {
  const source = featured
    ? ["pfas-water-decision-intelligence", "wastewater-infrastructure-analytics"]
        .map((slug) => allProjects.find((project) => project.slug === slug))
        .filter((project): project is PortfolioProject => Boolean(project))
    : allProjects;

  const [active, setActive] = useState("All");
  const visible =
    active === "All"
      ? source
      : source.filter((project) => project.filters.includes(active));

  const leadProject = !featured && active === "All" ? visible[0] : undefined;
  const indexProjects = leadProject ? visible.slice(1) : visible;

  return (
    <>
      {!featured && (
        <div className="project-index-controls">
          <div className="project-index-heading">
            <span>Project index</span>
            <div>
              <h2>Browse by expertise</h2>
              <p>
                A focused index of analytics, machine learning, AI, and decision-support work.
              </p>
            </div>
          </div>
          <div className="project-filter-row" role="group" aria-label="Filter projects by expertise">
            {filterOptions.map((option) => {
              const count =
                option.key === "All"
                  ? allProjects.length
                  : allProjects.filter((project) => project.filters.includes(option.key)).length;
              return (
                <button
                  key={option.key}
                  type="button"
                  className={active === option.key ? "active" : ""}
                  aria-pressed={active === option.key}
                  onClick={() => setActive(option.key)}
                >
                  <span>{option.label}</span>
                  <small aria-hidden="true">{count}</small>
                </button>
              );
            })}
          </div>
          <p className="project-index-status" role="status" aria-live="polite">
            Showing {visible.length} of {allProjects.length} public projects
          </p>
        </div>
      )}

      <div className={`project-grid project-grid--editorial${featured ? " project-grid--featured" : ""}`}>
        {leadProject && <ProjectCard project={leadProject} lead />}
        {indexProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
