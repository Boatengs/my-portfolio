import fs from "node:fs";

const homepagePath = "site-static/index.html";
const html = fs.readFileSync(homepagePath, "utf8");

const workStart = html.indexOf('<section class="section shell" id="work">');
const workEnd = html.indexOf('<div class="section-cta">', workStart);

if (workStart === -1 || workEnd === -1) {
  throw new Error("Could not locate the homepage project section.");
}

let workSection = html.slice(workStart, workEnd);
const wastewaterHref = "/my-portfolio/projects/wastewater-infrastructure-analytics/";

if (!workSection.includes(wastewaterHref)) {
  const sentimentCard = /<a\b[^>]*href="\/my-portfolio\/projects\/sentiment-analyzer\/?"[^>]*>[\s\S]*?<\/a>/;
  const wastewaterCard = `<a href="${wastewaterHref}" aria-label="Open Wastewater Infrastructure Analytics case study" class="project-card card-12" data-filters="Data Analytics"><div class="project-visual aqua"><div class="cursor-glow"></div><span class="project-number">12</span><img class="demo-capture" src="/my-portfolio/project-captures/wastewater-infrastructure-analytics.svg" alt="Wastewater Infrastructure Analytics asset-risk, lifecycle-cost, and capital-screening visual"/><span class="visual-label">VIEW CASE STUDY</span><span class="open-mark">↗</span></div><div class="project-info"><p>Infrastructure Analytics · Asset Management</p><h3>Wastewater Infrastructure Analytics<i class="project-arrow">↗</i></h3><span>A reproducible wastewater asset-management and capital-planning framework that connects utility data ingestion, SQL quality assurance, transparent risk scoring, lifecycle cost analysis, and constrained investment prioritization.</span><div class="project-proof"><strong>6</strong><span>Decision stages</span></div></div></a>`;

  if (!sentimentCard.test(workSection)) {
    throw new Error("Sentiment Analyzer card was not found in the homepage project section.");
  }

  workSection = workSection.replace(sentimentCard, wastewaterCard);
}

const updated = html.slice(0, workStart) + workSection + html.slice(workEnd);
fs.writeFileSync(homepagePath, updated);
console.log("Homepage featured projects prepared: PFAS + Wastewater Infrastructure Analytics.");
