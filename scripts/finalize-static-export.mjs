import fs from "node:fs";
import path from "node:path";

const outRoot = "out";
const basePath = "/my-portfolio";
const commonResponsiveHref = `${basePath}/assets/portfolio-responsive.css?v=3`;
const pfasResponsiveHref = `${basePath}/assets/pfas-responsive.css?v=3`;

const mobileNav = `<details class="mobile-nav"><summary aria-label="Open navigation menu">Menu</summary><div class="mobile-nav-panel"><a href="/my-portfolio/#about">About <span aria-hidden="true">→</span></a><a href="/my-portfolio/#experience">Experience <span aria-hidden="true">→</span></a><a href="/my-portfolio/work">Projects <span aria-hidden="true">→</span></a><a href="/my-portfolio/skills">Skills <span aria-hidden="true">→</span></a><a href="/my-portfolio/leadership">Leadership <span aria-hidden="true">→</span></a><a href="/my-portfolio/person">Beyond Work <span aria-hidden="true">→</span></a><a class="mobile-resume" href="/my-portfolio/resume">Résumé <span aria-hidden="true">↗</span></a></div></details>`;

function ensureDirectory(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function copyFile(source, target) {
  if (!fs.existsSync(source)) throw new Error(`Missing canonical source: ${source}`);
  ensureDirectory(target);
  fs.copyFileSync(source, target);
}

function ensureViewport(html) {
  if (/name=["']viewport["']/i.test(html)) return html;
  return html.replace(
    /<head>/i,
    '<head><meta name="viewport" content="width=device-width, initial-scale=1"/>',
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

function addStylesheet(html, href, matcher) {
  html = html.replace(matcher, "\n");
  return html.replace(/<\/head>/i, `  <link rel="stylesheet" href="${href}"/>\n</head>`);
}

function preparePortfolioStaticPage(source, target, { pfas = false } = {}) {
  let html = fs.readFileSync(source, "utf8");
  html = ensureViewport(html);
  html = ensureMobileNavigation(html);
  html = addStylesheet(
    html,
    commonResponsiveHref,
    /\s*<link rel="stylesheet" href="\/my-portfolio\/assets\/portfolio-responsive\.css\?v=\d+"\s*\/>\s*/g,
  );
  if (pfas) {
    html = addStylesheet(
      html,
      pfasResponsiveHref,
      /\s*<link rel="stylesheet" href="\/my-portfolio\/assets\/pfas-responsive\.css\?v=\d+"\s*\/>\s*/g,
    );
  }
  ensureDirectory(target);
  fs.writeFileSync(target, html);
}

function htmlFiles(directory) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...htmlFiles(full));
    else if (entry.isFile() && entry.name.endsWith(".html")) files.push(full);
  }
  return files;
}

function applyGitHubPagesBasePath(html) {
  return html.replace(
    /(\b(?:src|href)=["'])\/(?!\/|my-portfolio(?:\/|["']))/g,
    `$1${basePath}/`,
  );
}

if (!fs.existsSync(outRoot)) {
  throw new Error("Next.js export directory `out/` is missing.");
}

// Canonical presentation assets used by preserved special pages.
copyFile("app/static-assets/portfolio-20260809.css", "out/assets/portfolio-20260809.css");
copyFile("app/static-assets/portfolio-20260809-v6.css", "out/assets/portfolio-20260809-v6.css");
copyFile("app/static-assets/modern-white-20260822.css", "out/assets/modern-white-20260822.css");
copyFile("app/responsive.css", "out/assets/portfolio-responsive.css");
copyFile("app/pfas-responsive.css", "out/assets/pfas-responsive.css");
copyFile("app/world-happiness-dashboard.css", "out/assets/world-happiness-dashboard.css");
copyFile("app/world-happiness-dashboard.js", "out/assets/world-happiness-dashboard.js");

// Preserve special editorial experiences while keeping their only editable
// source under app/static-pages/.
preparePortfolioStaticPage(
  "app/static-pages/person.html",
  "out/person/index.html",
);
preparePortfolioStaticPage(
  "app/static-pages/pfas-water-decision-intelligence.html",
  "out/projects/pfas-water-decision-intelligence/index.html",
  { pfas: true },
);
preparePortfolioStaticPage(
  "app/static-pages/financial-crime-risk-intelligence.html",
  "out/projects/financial-crime-risk-intelligence/index.html",
);
copyFile(
  "app/static-pages/world-happiness-analysis.html",
  "out/projects/world-happiness-analysis/index.html",
);

// Next.js respects basePath for framework links and chunks, but raw public
// asset references such as /sam-profile.webp are not rewritten automatically.
// Normalize every exported HTML page once so the whole site works under
// https://boatengs.github.io/my-portfolio/.
for (const file of htmlFiles(outRoot)) {
  const html = fs.readFileSync(file, "utf8");
  fs.writeFileSync(file, applyGitHubPagesBasePath(html));
}

fs.writeFileSync("out/.nojekyll", "");

console.log(
  "Finalized canonical export with preserved Beyond Work, PFAS, Financial Crime, and World Happiness presentations plus GitHub Pages asset paths.",
);
