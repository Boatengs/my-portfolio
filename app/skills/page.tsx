import Link from "next/link";
import { skillGroups } from "../page";
import { SiteNav } from "../site-nav";

export default function SkillsPage() {
  return <main className="skills-page">
    <SiteNav label="Technical skills page navigation" />
    <header className="skills-page-hero shell"><p className="eyebrow">TECHNICAL SKILLS &amp; TOOLS</p><h1>Technical depth,<br/><em>connected to evidence.</em></h1><p>A complete view of the analytical methods, machine-learning systems, visualization tools, and platforms applied in practice—with project links showing where they appear in practice.</p></header>
    <section className="skills-index shell"><div className="capability-grid">
      {skillGroups.map((s,i)=><article className="capability-card" key={s.label}><div className="capability-title"><span>0{i+1}</span><div className="capability-title-main"><h2>{s.label}</h2><Link className="capability-evidence" href={s.href}>{s.proof} <b>↗</b></Link></div></div><div className="capability-tags">{s.skills.map(item=>item.href?<Link href={item.href} key={item.name} title={`View project using ${item.name}`}><img className="skill-mark" src={item.icon} alt="" aria-hidden="true" loading="lazy"/>{item.name}<b>↗</b></Link>:<span key={item.name}><img className="skill-mark" src={item.icon} alt="" aria-hidden="true" loading="lazy"/>{item.name}</span>)}</div></article>)}
    </div></section>
    <footer className="footer"><div className="shell"><p className="eyebrow">SEE THE SKILLS IN PRACTICE</p><h2>Methods become meaningful<br/>through <em>the work.</em></h2><Link className="email" href="/work">Explore project case studies ↗</Link><div className="footer-row"><p>© 2026 Sampson Boateng</p><div><Link href="/">Home</Link><Link href="/impact">Professional Approach</Link></div></div></div></footer>
  </main>;
}
