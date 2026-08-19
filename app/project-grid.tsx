"use client";
import Link from "next/link";
import { useState } from "react";
import { projects } from "./projects";

function ProjectArt({ slug }: { slug: string }) {
  if (slug === "price-elasticity")
    return (
      <div className="art elasticity-art">
        <span className="axis-label demand">DEMAND</span>
        <span className="axis-label price">PRICE</span>
        <svg viewBox="0 0 600 300" aria-hidden="true">
          <path
            className="ghost-curve"
            d="M28 258 C120 242 202 218 278 168 S450 64 572 42"
          />
          <path
            className="main-curve"
            d="M28 258 C120 242 202 218 278 168 S450 64 572 42"
          />
          <circle cx="278" cy="168" r="8" />
        </svg>
        <b>−1.42</b>
        <small>ELASTICITY INDEX</small>
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
  const source = featured ? projects.slice(0, 4) : projects;
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
                    ? projects.length
                    : projects.filter((p) => p.filters.includes(f)).length}
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
        {visible.map((p, i) => (
          <Link
            href={`/projects/${p.slug}`}
            key={p.slug}
            aria-label={`View case study: ${p.title}`}
            className={`project-card card-${projects.indexOf(p) + 1} ${i === 0 ? "wide" : ""}`}
            onMouseMove={tilt}
            onMouseLeave={reset}
          >
            <div className={`project-visual ${p.accent}`}>
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
                VIEW CASE STUDY
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
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
