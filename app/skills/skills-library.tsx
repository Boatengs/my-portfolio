"use client";

import { useEffect, useRef, useState } from "react";
import { StaticLink as Link } from "../static-link";
import { SkillMark, type SkillGroup } from "./skill-parts";

const shortTitles: Record<string, string> = {
  "01": "Data & Analysis",
  "02": "Statistics",
  "03": "Data Engineering",
  "04": "BI",
  "05": "ML & LLM",
  "06": "Vision",
  "07": "Cloud",
  "08": "Tools",
  "09": "Business",
};
const shortTitle = (num: string, title: string) => shortTitles[num] ?? title;

export function SkillsLibrary({ groups }: { groups: SkillGroup[] }) {
  const listRef = useRef<HTMLDivElement>(null);
  const jumpRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(groups[0]?.num ?? "");

  // Keep the active pill visible when the bar scrolls sideways on small screens.
  useEffect(() => {
    const bar = jumpRef.current;
    const pill = bar?.querySelector<HTMLElement>(".is-active");
    if (!bar || !pill) return;
    bar.scrollTo({ left: pill.offsetLeft - (bar.clientWidth - pill.offsetWidth) / 2, behavior: "smooth" });
  }, [active]);

  // Panels slide in as they scroll into view, and the jump bar follows the panel in view.
  useEffect(() => {
    const root = listRef.current;
    if (!root || !("IntersectionObserver" in window)) return;
    root.classList.add("library-animate");
    const panels = root.querySelectorAll<HTMLElement>(".toolkit-discipline");
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            reveal.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    const track = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive((e.target as HTMLElement).dataset.num ?? "");
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    panels.forEach((el) => {
      reveal.observe(el);
      track.observe(el);
    });
    return () => {
      reveal.disconnect();
      track.disconnect();
    };
  }, []);

  return (
    <>
      <nav className="discipline-jump" aria-label="Jump to a discipline" ref={jumpRef}>
        {groups.map((group) => (
          <a
            key={group.num}
            href={`#discipline-${group.num}`}
            className={active === group.num ? "is-active" : undefined}
            aria-current={active === group.num ? "true" : undefined}
          >
            <span>{group.num}</span>
            {shortTitle(group.num, group.title)}
            <em>{group.skills.length}</em>
          </a>
        ))}
      </nav>

      <div className="toolkit-discipline-list" ref={listRef}>
        {groups.map((group) => (
          <article
            className={`toolkit-discipline tone-${group.tone}`}
            key={group.num}
            id={`discipline-${group.num}`}
            data-num={group.num}
          >
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
                      <strong>{skill.name}</strong>
                      <span>{skill.type}</span>
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
