"use client";

import { useEffect, useRef } from "react";
import { StaticLink as Link } from "../static-link";
import { SkillMark, type SkillGroup } from "./skill-parts";

export function SkillsLibrary({ groups }: { groups: SkillGroup[] }) {
  const listRef = useRef<HTMLDivElement>(null);
  const visible = groups;

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
      </div>
    </>
  );
}
