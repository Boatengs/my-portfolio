import Link from "next/link";
import { skillGroups } from "../page";
import { SiteNav } from "../site-nav";

export default function SkillsPage() {
  const capabilityCount = skillGroups.reduce((total, group) => total + group.skills.length, 0);

  return <main className="skills-page">
    <SiteNav label="Technical skills page navigation" />
    <header className="skills-page-hero shell">
      <p className="eyebrow">TECHNICAL SKILLS &amp; TOOLS</p>
      <h1>Technical depth,<br/><em>connected to evidence.</em></h1>
      <p>An integrated view of analytical methods, business intelligence, machine learning, and the platforms behind practical project outcomes.</p>
      <div className="skills-hero-meta" aria-label="Skills overview">
        <span>{skillGroups.length} capability areas</span>
        <span>{capabilityCount} tools &amp; methods</span>
        <span>Project-linked evidence</span>
      </div>
    </header>
    <section className="skills-index shell" aria-label="Technical capability index">
      <div className="capability-index-head" aria-hidden="true">
        <span>Capability domain</span>
        <span>Tools, methods &amp; platforms</span>
      </div>
      <div className="capability-grid">
        {skillGroups.map((s,i)=><article className="capability-card" key={s.label}>
          <div className="capability-title">
            <span>0{i+1}</span>
            <div className="capability-title-main">
              <h2>{s.label}</h2>
              <Link className="capability-evidence" href={s.href}>{s.proof} <b>↗</b></Link>
              <p className="capability-count">{s.skills.length} capabilities</p>
            </div>
          </div>
          <div className="capability-tags">
            {s.skills.map(item=>item.href?
              <Link href={item.href} key={item.name} title={`View project using ${item.name}`}>
                <img className="skill-mark" src={item.icon} alt="" aria-hidden="true" loading="lazy"/>{item.name}<b>↗</b>
              </Link>:
              <span key={item.name}>
                <img className="skill-mark" src={item.icon} alt="" aria-hidden="true" loading="lazy"/>{item.name}
              </span>)}
          </div>
        </article>)}
      </div>
    </section>
    <footer className="footer"><div className="shell"><p className="eyebrow">SEE THE SKILLS IN PRACTICE</p><h2>Methods become meaningful<br/>through <em>the work.</em></h2><Link className="email" href="/work">Explore project case studies ↗</Link><div className="footer-row"><p>© 2026 Sampson Boateng</p><div><Link href="/">Home</Link><Link href="/impact">Professional Approach</Link></div></div></div></footer>
  </main>;
}
