import Link from "next/link";
import { skillGroups } from "../page";
import { SiteNav } from "../site-nav";

export default function SkillsPage() {
  const capabilityCount = skillGroups.reduce(
    (total, group) => total + group.skills.length,
    0,
  );

  return (
    <main className="skills-page">
      <SiteNav label="Technical skills page navigation" />

      <header className="skills-page-hero shell">
        <div className="skills-hero-grid">
          <div className="skills-hero-title">
            <p className="eyebrow">TECHNICAL PRACTICE / 05</p>
            <h1>
              Built to analyze.
              <br />
              <em>Designed to deliver.</em>
            </h1>
          </div>

          <div className="skills-hero-aside">
            <p>
              A working toolkit across analytics, business intelligence,
              statistical modeling, machine learning, intelligent systems, and
              the platforms that move ideas into practice.
            </p>
            <div className="skills-hero-stats" aria-label="Skills overview">
              <div>
                <strong>{skillGroups.length}</strong>
                <span>Capability domains</span>
              </div>
              <div>
                <strong>{capabilityCount}</strong>
                <span>Tools &amp; methods</span>
              </div>
              <div>
                <strong>↗</strong>
                <span>Project-linked evidence</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="skills-index shell" aria-label="Technical capability index">
        <div className="skills-index-labels" aria-hidden="true">
          <span>Index</span>
          <span>Capability domain</span>
          <span>Selected toolkit</span>
        </div>

        <div className="capability-grid">
          {skillGroups.map((group, index) => (
            <article className="capability-card" key={group.label}>
              <div className="capability-number">0{index + 1}</div>

              <div className="capability-title">
                <h2>{group.label}</h2>
                <p>{group.skills.length} tools &amp; methods</p>
                <Link className="capability-evidence" href={group.href}>
                  {group.proof} <b>↗</b>
                </Link>
              </div>

              <div className="capability-tags">
                {group.skills.map((item) =>
                  item.href ? (
                    <Link
                      href={item.href}
                      key={item.name}
                      title={`View project using ${item.name}`}
                    >
                      <img
                        className="skill-mark"
                        src={item.icon}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                      />
                      <span>{item.name}</span>
                      <b>↗</b>
                    </Link>
                  ) : (
                    <div className="skill-static" key={item.name}>
                      <img
                        className="skill-mark"
                        src={item.icon}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                      />
                      <span>{item.name}</span>
                    </div>
                  ),
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="shell">
          <p className="eyebrow">SEE THE SKILLS IN PRACTICE</p>
          <h2>
            Methods become meaningful
            <br />
            through <em>the work.</em>
          </h2>
          <Link className="email" href="/work">
            Explore project case studies ↗
          </Link>
          <div className="footer-row">
            <p>© 2026 Sampson Boateng</p>
            <div>
              <Link href="/">Home</Link>
              <Link href="/impact">Professional Approach</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
