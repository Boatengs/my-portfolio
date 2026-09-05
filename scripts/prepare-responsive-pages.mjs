import fs from "node:fs";
import path from "node:path";

const siteRoot = "site-static";
const sourceCss = "app/responsive.css";
const pfasResponsiveCss = "app/pfas-responsive.css";
const targetCss = "site-static/assets/portfolio-responsive.css";
const stylesheetHref = "/my-portfolio/assets/portfolio-responsive.css?v=2";
const worldHappinessPage = path.normalize(
  "site-static/projects/world-happiness-analysis/index.html",
);

const mobileNav = `<details class="mobile-nav"><summary aria-label="Open navigation menu">Menu</summary><div class="mobile-nav-panel"><a href="/my-portfolio/#about">About <span aria-hidden="true">→</span></a><a href="/my-portfolio/#experience">Experience <span aria-hidden="true">→</span></a><a href="/my-portfolio/work">Projects <span aria-hidden="true">→</span></a><a href="/my-portfolio/skills">Skills <span aria-hidden="true">→</span></a><a href="/my-portfolio/leadership">Leadership <span aria-hidden="true">→</span></a><a href="/my-portfolio/person">Beyond Work <span aria-hidden="true">→</span></a><a class="mobile-resume" href="/my-portfolio/resume">Résumé <span aria-hidden="true">↗</span></a></div></details>`;

function listHtmlFiles(directory) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...listHtmlFiles(fullPath));
    else if (entry.isFile() && entry.name.endsWith(".html")) files.push(fullPath);
  }
  return files;
}

function ensureViewport(html) {
  if (/name=["']viewport["']/i.test(html)) return html;
  return html.replace(
    /<head>/i,
    '<head><meta name="viewport" content="width=device-width, initial-scale=1"/>',
  );
}

function ensureResponsiveStylesheet(html) {
  html = html.replace(
    /\s*<link rel="stylesheet" href="\/my-portfolio\/assets\/portfolio-responsive\.css\?v=\d+"\s*\/>\s*/g,
    "\n",
  );
  return html.replace(
    /<\/head>/i,
    `  <link rel="stylesheet" href="${stylesheetHref}"/>\n</head>`,
  );
}

function ensureMobileNavigation(html) {
  if (html.includes('class="mobile-nav"')) return html;
  const navPattern = /<nav\b[^>]*class="nav shell"[^>]*>[\s\S]*?<\/nav>/i;
  const match = html.match(navPattern);
  if (!match) return html;
  const enhanced = match[0].replace(/<\/nav>$/i, `${mobileNav}</nav>`);
  return html.replace(match[0], enhanced);
}

for (const cssPath of [sourceCss, pfasResponsiveCss]) {
  if (!fs.existsSync(cssPath)) {
    throw new Error(`Responsive source stylesheet is missing: ${cssPath}`);
  }
}

fs.mkdirSync(path.dirname(targetCss), { recursive: true });
const responsiveBundle = [sourceCss, pfasResponsiveCss]
  .map((cssPath) => fs.readFileSync(cssPath, "utf8").trim())
  .join("\n\n");
fs.writeFileSync(targetCss, `${responsiveBundle}\n`);

let updated = 0;
for (const htmlPath of listHtmlFiles(siteRoot)) {
  // The native World Happiness experience already owns its dashboard-specific
  // responsive presentation and should remain isolated from portfolio shell rules.
  if (path.normalize(htmlPath) === worldHappinessPage) continue;

  let html = fs.readFileSync(htmlPath, "utf8");
  html = ensureViewport(html);
  html = ensureMobileNavigation(html);
  html = ensureResponsiveStylesheet(html);
  fs.writeFileSync(htmlPath, html);
  updated += 1;
}

console.log(
  `Prepared ${updated} portfolio HTML pages with the shared mobile responsive layer.`,
);
