import fs from "node:fs";

const homepagePath = "site-static/index.html";
const workPagePath = "site-static/work/index.html";
const stylesheetHref = "/my-portfolio/assets/structured-project-visuals-v2.css?v=2";

const beyondWorkSourcePath = "docs/person/index.html";
const beyondWorkTargetPath = "site-static/person/index.html";
const beyondWorkPortraitSourcePath = "docs/sam-beyond-work.webp";
const beyondWorkPortraitTargetPath = "site-static/sam-beyond-work.webp";

const worldHappinessSourcePath = "app/static-pages/world-happiness-analysis.html";
const worldHappinessTargetPath = "site-static/projects/world-happiness-analysis/index.html";
const worldHappinessCssSourcePath = "app/world-happiness-dashboard.css";
const worldHappinessCssTargetPath = "site-static/assets/world-happiness-dashboard.css";
const worldHappinessJsSourcePath = "app/world-happiness-dashboard.js";
const worldHappinessJsTargetPath = "site-static/assets/world-happiness-dashboard.js";
const worldHappinessCaptureSourcePath = "public/project-captures/world-happiness-2019.svg";
const worldHappinessCaptureTargetPath = "site-static/project-captures/world-happiness-2019.svg";

const wastewaterHref = "/my-portfolio/projects/wastewater-infrastructure-analytics/";
const crimeHref = "/my-portfolio/projects/financial-crime-risk-intelligence/";
const worldHappinessHref = "/my-portfolio/projects/world-happiness-analysis/";

const wastewaterVisual = `<div class="project-visual aqua wastewater-structured"><div class="cursor-glow"></div><span class="project-number">12</span><div class="visual-grid"></div><div class="structured-project-art"><div><span class="structured-project-kicker">ASSET MANAGEMENT · CAPITAL PLANNING</span><strong class="structured-project-word">WASTEWATER</strong><small class="structured-project-flow">INGEST · QA · RISK · COST · PRIORITIZE · PLAN</small></div><div class="structured-project-metrics"><span><strong>6</strong><em>Decision stages</em></span><span><strong>LoF × CoF</strong><em>Risk foundation</em></span><span><strong>4</strong><em>Capital scenarios</em></span></div></div><span class="visual-label">VIEW CASE STUDY</span><span class="open-mark">↗</span></div>`;

const crimeVisual = `<div class="project-visual violet crime-structured"><div class="cursor-glow"></div><span class="project-number">13</span><div class="visual-grid"></div><div class="structured-project-art"><div><span class="structured-project-kicker">GRAPH ANALYTICS · REVIEW PRIORITIZATION</span><strong class="structured-project-word">AML RISK</strong><small class="structured-project-flow">GRAPH · MODEL · CALIBRATE · PRIORITIZE · REVIEW</small></div><div class="structured-project-metrics"><span><strong>0.528</strong><em>Repeated PR-AUC</em></span><span><strong>94.3%</strong><em>Precision @ 0.5%</em></span><span><strong>41.53×</strong><em>Review lift</em></span></div></div><span class="visual-label">VIEW CASE STUDY</span><span class="open-mark">↗</span></div>`;

const worldHappinessCard = `<a href="${worldHappinessHref}" class="project-card card-14" data-filters="Data Analytics|Deployed Apps"><div class="project-visual blue"><div class="cursor-glow"></div><span class="project-number">14</span><img class="demo-capture" src="/my-portfolio/project-captures/world-happiness-2019.svg" alt="World Happiness Report 2019 top-country ranking generated from the project dataset"/><span class="visual-label">OPEN LIVE DASHBOARD</span><span class="open-mark">↗</span></div><div class="project-info"><p>Global Analytics · Interactive Dashboard</p><h3>World Happiness Dashboard<i class="project-arrow">↗</i></h3><span>An animated 2015–2019 global dashboard for country rankings, regional patterns, factor relationships, and an out-of-time 2019 regression evaluation—running natively inside the portfolio.</span><div class="project-proof"><strong>5 years</strong><span>Animated global analysis</span></div></div></a>`;

function preserveBeyondWork() {
  if (!fs.existsSync(beyondWorkSourcePath)) throw new Error("Updated Beyond Work source page is missing.");
  fs.mkdirSync("site-static/person", { recursive: true });
  fs.copyFileSync(beyondWorkSourcePath, beyondWorkTargetPath);
  if (fs.existsSync(beyondWorkPortraitSourcePath)) fs.copyFileSync(beyondWorkPortraitSourcePath, beyondWorkPortraitTargetPath);
}

function preserveWorldHappiness() {
  for (const path of [worldHappinessSourcePath, worldHappinessCssSourcePath, worldHappinessJsSourcePath, worldHappinessCaptureSourcePath]) {
    if (!fs.existsSync(path)) throw new Error(`World Happiness deployment source is missing: ${path}`);
  }
  fs.mkdirSync("site-static/projects/world-happiness-analysis", { recursive: true });
  fs.mkdirSync("site-static/assets", { recursive: true });
  fs.mkdirSync("site-static/project-captures", { recursive: true });
  fs.copyFileSync(worldHappinessSourcePath, worldHappinessTargetPath);
  fs.copyFileSync(worldHappinessCssSourcePath, worldHappinessCssTargetPath);
  fs.copyFileSync(worldHappinessJsSourcePath, worldHappinessJsTargetPath);
  fs.copyFileSync(worldHappinessCaptureSourcePath, worldHappinessCaptureTargetPath);
}

function ensureStylesheet(html) {
  const structuredStylesheet = /\s*<link rel="stylesheet" href="\/my-portfolio\/assets\/structured-project-visuals(?:-v2)?\.css\?v=\d+"\/>\s*/g;
  html = html.replace(structuredStylesheet, "\n");
  return html.replace("</head>", `  <link rel="stylesheet" href="${stylesheetHref}"/>\n</head>`);
}

function replaceCardVisual(html, href, newVisual) {
  const hrefIndex = html.indexOf(href);
  if (hrefIndex === -1) return html;
  const cardStart = html.lastIndexOf("<a", hrefIndex);
  const infoIndex = html.indexOf('<div class="project-info">', hrefIndex);
  const visualStart = html.indexOf('<div class="project-visual', cardStart);
  const visualEnd = html.lastIndexOf("</div>", infoIndex);
  if (cardStart === -1 || infoIndex === -1 || visualStart === -1 || visualEnd === -1) throw new Error(`Could not locate visual panel for ${href}`);
  return html.slice(0, visualStart) + newVisual + html.slice(visualEnd + 6);
}

function ensureWastewaterFeatured(html) {
  const workStart = html.indexOf('<section class="section shell" id="work">');
  const workEnd = html.indexOf('<div class="section-cta">', workStart);
  if (workStart === -1 || workEnd === -1) throw new Error("Could not locate the homepage project section.");
  let workSection = html.slice(workStart, workEnd);
  if (!workSection.includes(wastewaterHref)) {
    const sentimentCard = /<a\b[^>]*href="\/my-portfolio\/projects\/sentiment-analyzer\/?"[^>]*>[\s\S]*?<\/a>/;
    const wastewaterCard = `<a href="${wastewaterHref}" aria-label="Open Wastewater Infrastructure Analytics case study" class="project-card card-12" data-filters="Data Analytics">${wastewaterVisual}<div class="project-info"><p>Infrastructure Analytics · Asset Management</p><h3>Wastewater Infrastructure Analytics<i class="project-arrow">↗</i></h3><span>A reproducible wastewater asset-management and capital-planning framework that connects utility data ingestion, SQL quality assurance, transparent risk scoring, lifecycle cost analysis, and constrained investment prioritization.</span><div class="project-proof"><strong>6</strong><span>Decision stages</span></div></div></a>`;
    if (!sentimentCard.test(workSection)) throw new Error("Sentiment Analyzer card was not found in the homepage project section.");
    workSection = workSection.replace(sentimentCard, wastewaterCard);
  }
  return html.slice(0, workStart) + workSection + html.slice(workEnd);
}

function ensureWorldHappinessCard(html) {
  html = html
    .replace(/data-filter="All">All<span>\d+<\/span>/, 'data-filter="All">All<span>13</span>')
    .replace(/data-filter="Data Analytics">Data Analytics<span>\d+<\/span>/, 'data-filter="Data Analytics">Data Analytics<span>5</span>')
    .replace(/data-filter="Deployed Apps">Deployed Apps<span>\d+<\/span>/, 'data-filter="Deployed Apps">Deployed Apps<span>4</span>');
  if (html.includes(worldHappinessHref)) return html;
  const crimeCard = /<a\b[^>]*href="\/my-portfolio\/projects\/financial-crime-risk-intelligence\/?"[^>]*>[\s\S]*?<\/a>/;
  if (!crimeCard.test(html)) throw new Error("Financial Crime project card was not found before World Happiness insertion.");
  return html.replace(crimeCard, match => `${match}\n\n      ${worldHappinessCard}`);
}

preserveBeyondWork();
preserveWorldHappiness();

let homepage = fs.readFileSync(homepagePath, "utf8");
homepage = ensureWastewaterFeatured(homepage);
homepage = replaceCardVisual(homepage, wastewaterHref, wastewaterVisual);
homepage = ensureStylesheet(homepage);
fs.writeFileSync(homepagePath, homepage);

let workPage = fs.readFileSync(workPagePath, "utf8");
workPage = ensureWorldHappinessCard(workPage);
workPage = replaceCardVisual(workPage, wastewaterHref, wastewaterVisual);
workPage = replaceCardVisual(workPage, crimeHref, crimeVisual);
workPage = ensureStylesheet(workPage);
fs.writeFileSync(workPagePath, workPage);

console.log("Portfolio prepared with structured project visuals, the live World Happiness dashboard, and the latest Beyond Work page preserved for Pages deployment.");
