import Link from "next/link";
import { skillGroups } from "../page";
import { SiteNav } from "../site-nav";

const matrixStyles = `
.skills-page .capability-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0}
.skills-page .capability-card,.skills-page .capability-card:nth-child(even),.skills-page .capability-card:nth-child(5),.skills-page .capability-card:nth-child(6){display:grid;grid-template-columns:minmax(205px,255px) minmax(0,1fr);gap:28px;align-items:start;min-height:0;padding:25px 0;border:0;border-bottom:1px solid #e3e6ea;border-radius:0;background:#fff;box-shadow:none;transform:none}
.skills-page .capability-card:nth-child(5),.skills-page .capability-card:nth-child(6){grid-column:1/-1}
.skills-page .capability-card:hover{background:#fcfcfd;box-shadow:none;transform:none}
.skills-page .capability-title{display:flex;align-items:flex-start;gap:14px;margin:0}
.skills-page .capability-title>span{display:block;min-width:21px;height:auto;padding-top:5px;border:0;border-radius:0;background:transparent;color:#c84636;font:700 10px/1 monospace}
.skills-page .capability-title-main{display:flex;flex-direction:column;align-items:flex-start;gap:12px}
.skills-page .skills-index .capability-card h2{margin:0;color:#171a1f;font-size:clamp(26px,2.25vw,34px);font-weight:500;line-height:1.05;letter-spacing:-.045em}
.skills-page .capability-evidence{display:inline-block;width:fit-content;padding-bottom:5px;border-bottom:1px solid #b8b8b2;color:#616875;font-size:12px;font-weight:650;line-height:1.2}
.skills-page .capability-evidence b{color:#df513f}
.skills-page .capability-tags{display:grid;grid-template-columns:repeat(auto-fit,minmax(145px,1fr));gap:0;border-top:1px solid #e8eaee;border-left:1px solid #e8eaee}
.skills-page .skills-index .capability-tags a,.skills-page .skills-index .capability-tags span{position:relative;display:flex;min-width:0;min-height:55px;padding:10px 12px;flex-direction:row;align-items:center;justify-content:flex-start;gap:9px;border:0;border-right:1px solid #e8eaee;border-bottom:1px solid #e8eaee;border-radius:0;background:#fff;box-shadow:none;color:#252a32;font-size:12.5px;font-weight:650;line-height:1.35}
.skills-page .skills-index .capability-tags a:hover,.skills-page .skills-index .capability-tags span:hover{background:#f6f7f9;box-shadow:none;transform:none}
.skills-page .capability-tags .skill-mark{width:22px;height:22px;flex:0 0 22px;object-fit:contain}
.skills-page .capability-tags a>b{position:absolute;top:6px;right:7px;color:#df513f;font-size:9px;line-height:1}
@media(max-width:1100px){.skills-page .capability-grid{grid-template-columns:1fr}.skills-page .capability-card,.skills-page .capability-card:nth-child(even),.skills-page .capability-card:nth-child(5),.skills-page .capability-card:nth-child(6){grid-column:auto}}
@media(max-width:900px){.skills-page .capability-card,.skills-page .capability-card:nth-child(even),.skills-page .capability-card:nth-child(5),.skills-page .capability-card:nth-child(6){grid-template-columns:170px minmax(0,1fr);gap:24px}.skills-page .capability-tags{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media(max-width:680px){.skills-page .capability-card,.skills-page .capability-card:nth-child(even),.skills-page .capability-card:nth-child(5),.skills-page .capability-card:nth-child(6){display:block;padding:27px 0}.skills-page .capability-title{margin-bottom:20px}.skills-page .capability-tags{grid-template-columns:repeat(2,minmax(0,1fr))}.skills-page .skills-index .capability-tags a,.skills-page .skills-index .capability-tags span{min-height:52px;padding:10px 8px;font-size:11px}}
`;

export default function SkillsPage() {
  return <main className="skills-page">
    <style>{matrixStyles}</style>
    <SiteNav label="Technical skills page navigation" />
    <header className="skills-page-hero shell"><p className="eyebrow">TECHNICAL SKILLS &amp; TOOLS</p><h1>Technical depth,<br/><em>connected to evidence.</em></h1><p>A complete view of the analytical methods, machine-learning systems, visualization tools, and platforms applied in practice—with project links showing where they appear in practice.</p></header>
    <section className="skills-index shell"><div className="capability-grid">
      {skillGroups.map((s,i)=><article className="capability-card" key={s.label}><div className="capability-title"><span>0{i+1}</span><div className="capability-title-main"><h2>{s.label}</h2><Link className="capability-evidence" href={s.href}>{s.proof} <b>↗</b></Link></div></div><div className="capability-tags">{s.skills.map(item=>item.href?<Link href={item.href} key={item.name} title={`View project using ${item.name}`}><img className="skill-mark" src={item.icon} alt="" aria-hidden="true" loading="lazy"/>{item.name}<b>↗</b></Link>:<span key={item.name}><img className="skill-mark" src={item.icon} alt="" aria-hidden="true" loading="lazy"/>{item.name}</span>)}</div></article>)}
    </div></section>
    <footer className="footer"><div className="shell"><p className="eyebrow">SEE THE SKILLS IN PRACTICE</p><h2>Methods become meaningful<br/>through <em>the work.</em></h2><Link className="email" href="/work">Explore project case studies ↗</Link><div className="footer-row"><p>© 2026 Sampson Boateng</p><div><Link href="/">Home</Link><Link href="/impact">Professional Approach</Link></div></div></div></footer>
  </main>;
}
