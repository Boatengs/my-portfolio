import fs from "node:fs/promises";
import path from "node:path";

const roots=["site-static","docs"];
const groups=[
  ["Data & Analysis","SQL · Excel · Python · Pandas"],
  ["Statistical & Modeling","Regression · Ridge · Logistic Regression · Random Forest"],
  ["Visualization & Apps","Tableau · Power BI · Matplotlib · Seaborn"],
  ["ML, NLP & Generative AI","Scikit-learn · Transformers · DistilBERT · LangChain"],
  ["Computer Vision","TensorFlow · PyTorch · EfficientNetB0 · Transfer Learning"],
  ["Tools & Platforms","Git · Jira · Dataiku · Bloomerang CRM"],
];
const preview=`<div class="capability-console"><div class="capability-console-head"><p>TECHNICAL SKILLS AND TOOLS</p><span>Six disciplines · one connected workflow</span></div><div class="capability-preview-grid">${groups.map((g,i)=>`<article><span>0${i+1}</span><h3>${g[0]}</h3><p>${g[1]}</p></article>`).join("")}</div><div class="capability-preview-foot"><p>Explore the complete matrix, project evidence, and tools used across my work.</p><a href="/my-portfolio/skills">View technical skills &amp; tools <span>↗</span></a></div></div>`;
const css=`
/* Compact homepage skills preview and dedicated technical page */
.capability-preview-grid{display:grid;grid-template-columns:repeat(3,1fr);border-bottom:1px solid var(--line)}.capability-preview-grid article{min-height:150px;padding:24px 26px 24px 0;border-bottom:1px solid var(--line)}.capability-preview-grid article:nth-child(3n+2),.capability-preview-grid article:nth-child(3n+3){border-left:1px solid var(--line);padding-left:26px}.capability-preview-grid article>span{color:#d4492f;font:700 10px monospace}.capability-preview-grid h3{margin:28px 0 12px;font-size:23px;letter-spacing:-.035em}.capability-preview-grid p{margin:0;color:var(--muted);font-size:12px;line-height:1.55}.capability-preview-foot{display:flex;justify-content:space-between;align-items:center;gap:36px;padding-top:28px}.capability-preview-foot p{max-width:500px;margin:0;color:var(--muted);font-size:13px;line-height:1.6}.capability-preview-foot a{display:inline-flex;gap:34px;border-bottom:1px solid;padding-bottom:7px;font-size:13px;font-weight:800;white-space:nowrap}.skills-page-hero{padding:92px 0 72px;border-bottom:1px solid var(--line)}.skills-page-hero h1{margin:0;max-width:1000px;font-size:clamp(58px,8vw,110px);line-height:.9;letter-spacing:-.065em}.skills-page-hero h1 em{font-family:Georgia,serif;font-weight:400}.skills-page-hero>p:last-child{max-width:680px;margin:32px 0 0;color:var(--muted);font-size:18px;line-height:1.65}.skills-index{padding-top:70px;padding-bottom:140px}.skills-index .capability-card h2{margin:0;font-size:clamp(26px,2.25vw,34px);line-height:1;letter-spacing:-.045em}@media(max-width:760px){.capability-preview-grid{grid-template-columns:1fr}.capability-preview-grid article,.capability-preview-grid article:nth-child(3n+2),.capability-preview-grid article:nth-child(3n+3){min-height:auto;padding:24px 0;border-left:0}.capability-preview-grid h3{margin-top:18px}.capability-preview-foot{display:block}.capability-preview-foot a{margin-top:22px;white-space:normal}.skills-page-hero{padding:62px 0 50px}.skills-page-hero h1{font-size:52px}.skills-index{padding-top:45px;padding-bottom:100px}}
`;

for(const root of roots){
  const indexPath=path.join(root,"index.html");
  let html=await fs.readFile(indexPath,"utf8");
  const start=html.indexOf('<div class="capability-console">');
  const marker='</div></div></section><section class="section shell exploration"';
  const end=html.indexOf(marker,start);
  if(start<0||end<0) throw new Error(`Capability section not found in ${root}`);
  const fullConsole=html.slice(start,end+6);
  html=html.slice(0,start)+preview+html.slice(end+6);
  html=html.replaceAll("portfolio-20260809-v4.css?v=14","portfolio-20260809-v4.css?v=15");
  await fs.writeFile(indexPath,html);

  const head=html.slice(0,html.indexOf("<body>" )+6);
  const footer=html.match(/<footer class="footer">[\s\S]*?<\/footer>/)?.[0]||"";
  const nav=`<nav class="nav shell subpage-nav" aria-label="Technical skills page navigation"><a class="wordmark" href="/my-portfolio/">SB<span>.</span></a><div class="nav-links"><a href="/my-portfolio/work">Work</a><a href="/my-portfolio/#experience">Experience</a><a href="/my-portfolio/leadership">Leadership</a><a href="/my-portfolio/person">Beyond Work</a><a class="nav-cta" href="/my-portfolio/resume">Résumé <span>↗</span></a></div></nav>`;
  const skills=`${head}<a class="skip-link" href="#main-content">Skip to main content</a><main id="main-content" tabindex="-1" class="skills-page">${nav}<header class="skills-page-hero shell"><p class="eyebrow">TECHNICAL SKILLS &amp; TOOLS</p><h1>Technical depth,<br/><em>connected to evidence.</em></h1><p>A complete view of the analytical methods, machine-learning systems, visualization tools, and platforms I use—with project links showing where they appear in practice.</p></header><section class="skills-index shell">${fullConsole}</section>${footer}</main></body></html>`;
  await fs.mkdir(path.join(root,"skills"),{recursive:true});
  await fs.writeFile(path.join(root,"skills","index.html"),skills);

  const cssPath=path.join(root,"assets/portfolio-20260809-v4.css");
  let current=await fs.readFile(cssPath,"utf8");
  if(!current.includes("Compact homepage skills preview")) await fs.writeFile(cssPath,current+css);
}
console.log("Created compact homepage preview and dedicated skills page.");
