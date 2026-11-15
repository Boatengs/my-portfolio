"use client";

import { useEffect, useRef, useState } from "react";
import { StaticLink as Link } from "../static-link";
import { SkillMark, type SkillGroup } from "./skill-parts";

export function SkillsLibrary({ groups }: { groups: SkillGroup[] }) {
  const [query, setQuery] = useState("");
  const listRef = useRef<HTMLDivElement>(null);
  const total = groups.reduce((sum, g) => sum + g.skills.length, 0);
  const q = query.trim().toLowerCase();

  const visible = groups
    .map((group) => ({
      ...group,
      skills: q
        ? group.skills.filter(
            (s) =>
              s.name.toLowerCase().includes(q) ||
              s.type.toLowerCase().includes(q) ||
              group.title.toLowerCase().includes(q),
          )
        : group.skills,
    }))
    .filter((group) => group.skills.length > 0);

  const shown = visible.reduce((sum, g) => sum + g.skills.length, 0);

  // Panels slide in as they scroll into view. Without JavaScript they simply show.
  useEffect(() => {
    const root = listRef.current;
    if (!root || !("IntersectionObserver" in window)) return;
    root.classList.add("library-animate");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    root.querySelectorAll(".toolkit-discipline").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div className="library-search">
        <label htmlFor="skill-search" className="library-search-label">
          Search skills
        </label>
        <div className="library-search-field">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            id="skill-search"
            type="search"
            placeholder="Try Python, Tableau, RAG, Snowflake…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
          {query && (
            <button type="button" onClick={() => setQuery("")} aria-label="Clear search">
              ×
            </button>
          )}
        </div>
        <p className="library-search-status" role="status" aria-live="polite">
          {q ? `${shown} of ${total} skills match “${query.trim()}”` : `${total} skills across ${groups.length} disciplines`}
        </p>
      </div>

      <div className="toolkit-discipline-list" ref={listRef}>
        {visible.map((group) => (
          <article className={`toolkit-discipline tone-${group.tone}`} key={group.num}>
            <header className="toolkit-discipline-head">
              <div className="discipline-meta">
                <span className="discipline-number">{group.num}</span>
                <span className="discipline-kicker">{group.kicker}</span>
              </div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <Link href={group.proofHref} className="discipline-proof">
                {group.proofLabel} <span aria-hidden="true">↗</span>
              </Link>
            </header>

            <div className="atlas-skill-grid">
              {group.skills.map((skill) => {
                const content = (
                  <>
                    <SkillMark skill={skill} />
                    <div className="atlas-skill-copy">
                      <span>{skill.type}</span>
                      <strong>{skill.name}</strong>
                    </div>
                    {skill.proof && <i aria-hidden="true">↗</i>}
                  </>
                );

                return skill.proof ? (
                  <Link
                    className="premium-skill-card atlas-skill-card atlas-skill-card--proof"
                    href={skill.proof}
                    aria-label={`${skill.name}, view portfolio evidence`}
                    key={skill.name}
                  >
                    {content}
                  </Link>
                ) : (
                  <div className="premium-skill-card atlas-skill-card" key={skill.name}>
                    {content}
                  </div>
                );
              })}
            </div>
          </article>
        ))}
        {visible.length === 0 && (
          <p className="library-empty">No skill matches that search yet. Try a broader word, such as “data” or “model”.</p>
        )}
      </div>
    </>
  );
}
