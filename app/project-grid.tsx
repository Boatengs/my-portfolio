"use client";
import Link from "next/link";
import { useState } from "react";
import { allProjects } from "./project-registry";

function ProjectArt({ slug }: { slug: string }) {
  if (slug === "wastewater-infrastructure-analytics")
    return (
      <div className="structured-project-art">
        <div>
          <span className="structured-project-kicker">Asset management · Capital planning</span>
          <strong className="structured-project-word">WASTEWATER</strong>
          <small className="structured-project-flow">INGEST · QA · RISK · COST · PRIORITIZE · PLAN</small>
        </div>
        <div className="structured-project-metrics">
          <span><strong>6</strong><em>Decision stages</em></span>
          <span><strong>LoF × CoF</strong><em>Risk foundation</em></span>
          <span><strong>4</strong><em>Capital scenarios</em></span>
        </div>
      </div>
    );
  if (slug === "financial-crime-risk-intelligence")
    return (
      <div className="structured-project-art">
        <div>
          <span className="structured-project-kicker">Graph analytics · Review prioritization</span>
          <strong className="structured-project-word">AML RISK</strong>
          <small className="structured-project-flow">GRAPH · MODEL · CALIBRATE · PRIORITIZE · REVIEW</small>
        </div>
        <div className="structured-project-metrics">
          <span><strong>0.528</strong><em>Repeated PR-AUC</em></span>
          <span><strong>94.3%</strong><em>Precision @ 0.5%</em></span>
          <span><strong>41.53×</strong><em>Review lift</em></span>
        </div>
      </div>
    );
  if (slug === "pfas-water-decision-intelligence")
    return (
      <div className="art water-art">
        <div className="ripple r1" />
        <div className="ripple r2" />
        <div className="ripple r3" />
        <i className="drop d1" />
        <i className="drop d2" />
        <i className="drop d3" />
        <span>
          PFAS
          <br />
          DECISION
        </span>
      </div>
    );
  if (slug === "price-elasticity")
    return (
      <div className="art elasticity-art">
        <span className="axis-label demand">CONFIDENTIAL</span>
        <span className="axis-label price">NDA PROTECTED</span>
        <b>NDA</b>
        <small>GRADUATE CAPSTONE</small>
      </div>
    );
  if (slug === "water-quality")
    return (
      <div className="art water-art">
        <div className="ripple r1" />
        <div className="ripple r2" />
        <div className="ripple r3" />
        <i className="drop d1" />
        <i className="drop d2" />
        <i className="drop d3" />
        <span>
          ANOMALY
          <br />
          FIELD
        </span>
      </div>
    );
  if (slug === "healthcare-modeling")
    return (
      <div className="art network-art">
        <div className="network-line l1" />
        <div className="network-line l2" />
        <div className="network-line l3" />
        <div className="network-line l4" />
        {["INPUT", "PCA", "SVM", "RF", "DECISION"].map((n, i) => (
          <span className={`node n${i + 1}`} key={n}>
            {n}
          </span>
        ))}
      </div>
    );
  if (slug === "sentiment-analyzer")
    return (
      <div className="art sentiment-art">
        <div className="quote">
          “A surprising,
          <br />
          <em>beautifully made</em> story.”
        </div>
        <div className="score">
          <b>91.2</b>
          <span>% ACCURACY</span>
        </div>
        <div className="signal">
          {[3, 7, 5, 9, 4, 8, 6, 10, 5, 8, 4, 7].map((h, i) => (
            <i key={i} style={{ height: `${h * 7}px` }} />
          ))}
        </div>
      </div>
    );
  if (slug === "sports-chatbot")
    return (
      <div className="art sports-art">
        <div className="court">
          <i />
          <i />
          <i />
        </div>
        <div className="trajectory">
          <span />
          <span />
          <span />
          <span />
        </div>
        <b>?</b>
        <small>RETRIEVE → RANK → ANSWER</small>
      </div>
    );
  if (slug === "medical-qa")
    return (
      <div className="art token-art">
        <div className="token-stack">
          {["Q", "L", "o", "R", "A"].map((x, i) => (
            <span key={i}>{x}</span>
          ))}
        </div>
        <div className="threads">
          {[1, 2, 3, 4, 5].map((i) => (
            <i key={i} />
          ))}
        </div>
        <small>7B PARAMETERS · ADAPTER TUNED</small>
      </div>
    );
  return (
    <div className="art heatmap-art">
      <div className="scan-frame">
        <i className="heat h1" />
        <i className="heat h2" />
        <i className="heat h3" />
        <span className="focus-box" />
      </div>
      <div className="confidence">
        <b>0.94</b>
        <span>CONFIDENCE</span>
      </div>
      <small>GRAD-CAM EXPLANATION</small>
    </div>
  );
}

export function ProjectGrid({ featured = false }: { featured?: boolean }) {
  const filters = [
    "All",
    "Data Analytics",
    "Machine Learning",
    "Generative AI",
    "Computer Vision",
    "Healthcare",
    "Deployed Apps",
  ];
  const source = featured
    ? ["pfas-water-decision-intelligence", "wastewater-infrastructure-analytics"]
        .map((slug) => allProjects.find((project) => project.slug === slug))
        .filter((project): project is (typeof allProjects)[number] => Boolean(project))
    : allProjects;
  const [active, setActive] = useState("All");
  const visible =
    active === "All"
      ? source
      : source.filter((p) => p.filters.includes(active));
  const tilt = (e: React.MouseEvent<HTMLElement>) => {
    if (
      !matchMedia("(pointer:fine) and (prefers-reduced-motion:no-preference)")
        .matches
    )
      return;
    const el = e.currentTarget,
      r = el.getBoundingClientRect(),
      px = e.clientX - r.left,
      py = e.clientY - r.top,
      x = px / r.width - 0.5,
      y = py / r.height - 0.5;
    requestAnimationFrame(() => {
      el.style.setProperty("--rx", `${-y * 7}deg`);
      el.style.setProperty("--ry", `${x * 9}deg`);
      el.style.setProperty("--mx", `${px}px`);
      el.style.setProperty("--my", `${py}px`);
    });
  };
  const reset = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty("--rx", "0deg");
    e.currentTarget.style.setProperty("--ry", "0deg");
  };
  return (
    <>
      {!featured && (
        <>
          <div className="filter-heading">
            <span>EXPLORE BY FOCUS</span>
            <p>Browse the complete body of work by discipline.</p>
          </div>
          <div
            className="project-filters"
            role="group"
            aria-label="Filter projects"
          >
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                className={active === f ? "active" : ""}
                aria-pressed={active === f}
                onClick={() => setActive(f)}
              >
                {f}
                <span aria-hidden="true">
                  {f === "All"
                    ? allProjects.length
                    : allProjects.filter((p) => p.filters.includes(f)).length}
                </span>
                <span className="sr-only"> projects</span>
              </button>
            ))}
          </div>
          <p className="sr-only" role="status" aria-live="polite">
            Showing {visible.length}{" "}
            {visible.length === 1 ? "project" : "projects"} for {active}.
          </p>
        </>
      )}
      <div className="project-grid">
        {visible.map((p, i) => {
          const structuredClass =
            p.slug === "wastewater-infrastructure-analytics"
              ? " wastewater-structured"
              : p.slug === "financial-crime-risk-intelligence"
                ? " crime-structured"
                : "";
          return (
            <Link
              href={`/projects/${p.slug}`}
              key={p.slug}
              aria-label={`View case study: ${p.title}`}
              className={`project-card card-${allProjects.indexOf(p) + 1} ${!featured && i === 0 ? "wide" : ""}`}
              onMouseMove={tilt}
              onMouseLeave={reset}
            >
              <div className={`project-visual ${p.accent}${structuredClass}`}>
                <div className="cursor-glow" aria-hidden="true" />
                <span className="project-number">{p.index}</span>
                {p.image ? (
                  <img
                    className="demo-capture"
                    src={p.image}
                    width="1200"
                    height="675"
                    loading="lazy"
                    decoding="async"
                    alt={`${p.title} application interface`}
                  />
                ) : (
                  <>
                    <div className="visual-grid" aria-hidden="true" />
                    <ProjectArt slug={p.slug} />
                  </>
                )}
                <span className="visual-label" aria-hidden="true">
                  {p.slug === "world-happiness-analysis" ? "OPEN LIVE DASHBOARD" : "VIEW CASE STUDY"}
                </span>
                <span className="open-mark" aria-hidden="true">
                  ↗
                </span>
              </div>
              <div className="project-info">
                <p>{p.category}</p>
                <h3>
                  {p.title}
                  <i className="project-arrow" aria-hidden="true">
                    ↗
                  </i>
                </h3>
                <span>{p.summary}</span>
                {p.evidence?.[0] && (
                  <div className="project-proof">
                    <strong>{p.evidence[0].value}</strong>
                    <span>{p.evidence[0].label}</span>
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
