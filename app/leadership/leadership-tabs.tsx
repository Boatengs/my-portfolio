"use client";

import { useEffect, useState } from "react";

const tabs = [
  { key: "lead", label: "Lead" },
  { key: "serve", label: "Serve" },
  { key: "recognized", label: "Recognized" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

const roles = [
  {
    org: "Northeastern University · The Roux Institute",
    title: "Student Ambassador",
    points: [
      "Represented the student experience for prospective and incoming students through campus programs and community events.",
      "Welcomed new students, shared peer guidance, and helped strengthen connections across the Roux community.",
    ],
  },
  {
    org: "The Roux Institute",
    title: "Founder, Roux Pickup Sports",
    points: [
      "Founded an inclusive recreational sports community that created consistent opportunities for students to connect outside the classroom.",
      "Organized games, coordinated participation, and built a welcoming environment across programs and experience levels.",
    ],
  },
  {
    org: "Data for Social Good (DSG)",
    title: "Executive Member, Marketing and Roux Connections Coordinator",
    points: [
      "Supported one of the campus’s leading student interest groups focused on applying data skills to social challenges.",
      "Contributed to group strategy, programming, student engagement, and initiatives connecting analytics with community impact.",
    ],
  },
  {
    org: "NUGS Saratov · Saratov State University",
    title: "Event Organizer and Coordinator",
    points: [
      "Organized academic, cultural, and community programs that supported Ghanaian students living and studying in Saratov.",
      "Coordinated events, student communications, and peer support while connecting students with university and community resources.",
    ],
  },
];

const stories = [
  {
    kicker: "Community",
    title: "Creating room for people to belong.",
    copy: "Through student leadership, ambassador work, community events and pickup sports, I’ve helped build spaces where people from different programs and backgrounds actually meet and get involved.",
  },
  {
    kicker: "Engagement",
    title: "Turning an invitation into participation.",
    copy: "Announcing an event is the easy part. I focus on welcoming people, listening to what they need and communicating clearly, so they come back the next time.",
  },
  {
    kicker: "Clearer systems",
    title: "Making internal communication easier to follow.",
    copy: "At my current organization, internal updates were spread across too many places and were easy to miss. I helped centralize that communication, so updates are now easier to share, find and follow.",
    dark: true,
  },
];

const principles = [
  "Listen before changing things.",
  "Make information easier to understand.",
  "Build with the people who will use it.",
  "Leave every process stronger than before.",
];

export function LeadershipTabs() {
  const [active, setActive] = useState<TabKey>("lead");

  // Allow deep links such as /leadership#serve (the old Impact page points here).
  useEffect(() => {
    const fromHash = window.location.hash.replace("#", "");
    if (tabs.some((t) => t.key === fromHash)) setActive(fromHash as TabKey);
  }, []);

  const choose = (key: TabKey) => {
    setActive(key);
    try {
      history.replaceState(null, "", `#${key}`);
    } catch {
      /* ignore */
    }
  };

  return (
    <section className="lx-body shell">
      <div className="lx-tabs" role="tablist" aria-label="Leadership and impact sections">
        {tabs.map((t) => (
          <button
            key={t.key}
            id={`lx-tab-${t.key}`}
            type="button"
            role="tab"
            aria-selected={active === t.key}
            aria-controls={`lx-panel-${t.key}`}
            className={active === t.key ? "is-active" : ""}
            onClick={() => choose(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {active === "lead" && (
        <div id="lx-panel-lead" role="tabpanel" aria-labelledby="lx-tab-lead" className="lx-panel">
          <div className="lx-grid lx-grid--two">
            {roles.map((role, i) => (
              <article key={role.title} className={`lx-card${i === 0 ? " lx-card--dark" : ""}`}>
                <p className="lx-kicker">
                  {String(i + 1).padStart(2, "0")} · {role.org}
                </p>
                <h3>{role.title}</h3>
                <ul>
                  {role.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      )}

      {active === "serve" && (
        <div id="lx-panel-serve" role="tabpanel" aria-labelledby="lx-tab-serve" className="lx-panel">
          <div className="lx-grid lx-grid--three">
            {stories.map((s) => (
              <article key={s.kicker} className={`lx-card${s.dark ? " lx-card--dark" : ""}`}>
                <p className="lx-kicker">{s.kicker}</p>
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
              </article>
            ))}
          </div>
          <div className="lx-principles">
            <p className="lx-kicker">Working principles</p>
            <ol>
              {principles.map((p, i) => (
                <li key={p}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {p}
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}

      {active === "recognized" && (
        <div id="lx-panel-recognized" role="tabpanel" aria-labelledby="lx-tab-recognized" className="lx-panel">
          <div className="lx-grid lx-grid--three">
            <article className="lx-card lx-card--accent">
              <p className="lx-kicker">Northeastern University · 2025</p>
              <h3>Laurel and Scroll 100 Society of Distinction</h3>
              <p>Inducted among 100 students recognized for achievement across academics, leadership and student engagement.</p>
              <div className="lx-links">
                <a href="https://news.northeastern.edu/2025/04/15/laurel-scroll-induction-ceremony-2025/" target="_blank" rel="noreferrer">Official inductee list ↗</a>
                <a href="https://news.northeastern.edu/2025/06/16/northeastern-portland-commencement-2025/" target="_blank" rel="noreferrer">Commencement feature ↗</a>
                <a href="https://www.instagram.com/p/DIg2T6NOyWb/" target="_blank" rel="noreferrer">Roux Institute celebration ↗</a>
              </div>
            </article>
            <article className="lx-card">
              <p className="lx-big">1st</p>
              <p className="lx-kicker">Climate Resiliency Hackathon</p>
              <h3>SeeLevelRise</h3>
              <p>Built with Qiuhao Gu, Nicholas Toole and John Kovarik, a web and mobile app concept that helps communities see how places could be affected by sea level rise across climate projections.</p>
              <div className="lx-links">
                <a href="https://news.northeastern.edu/2024/11/25/climate-resiliency-hackathon/" target="_blank" rel="noreferrer">Northeastern feature ↗</a>
                <a href="https://www.linkedin.com/posts/terradunham_from-october-28thto-30th-50-roux-students-activity-7258186513094426624-qp7z" target="_blank" rel="noreferrer">First place announcement ↗</a>
              </div>
            </article>
            <article className="lx-card">
              <p className="lx-big">YALI</p>
              <p className="lx-kicker">Leadership fellowship · 2018</p>
              <h3>Young African Leadership Initiative Fellow</h3>
              <p>Selected for a network of emerging African leaders committed to leadership, civic engagement, entrepreneurship and community impact.</p>
            </article>
          </div>
          <div className="lx-badges">
            <p className="lx-kicker">Professional badges</p>
            <span>★ AI in the Workplace · Northeastern University</span>
            <span>★ Interview Communication · Northeastern University</span>
          </div>
        </div>
      )}
    </section>
  );
}
