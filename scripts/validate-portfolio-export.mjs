import fs from "node:fs";
import path from "node:path";

const outRoot = "out";
const basePath = "/my-portfolio";
const expectedRoutes = JSON.parse(
  fs.readFileSync("tests/portfolio-routes.json", "utf8"),
);
const expectedProjectSlugs = [
  "price-elasticity",
  "water-quality",
  "healthcare-modeling",
  "sentiment-analyzer",
  "sports-chatbot",
  "medical-qa",
  "skin-classifier",
  "object-detector",
  "skin-lesion-segmentation",
  "llm-evaluation",
  "pfas-water-decision-intelligence",
  "wastewater-infrastructure-analytics",
  "financial-crime-risk-intelligence",
  "world-happiness-analysis",
];

function allFiles(directory, predicate = () => true) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...allFiles(full, predicate));
    else if (entry.isFile() && predicate(full)) files.push(full);
  }
  return files;
}

function indexRoutes(root) {
  return allFiles(root, (file) => path.basename(file) === "index.html")
    .map((file) => {
      const relative = path.relative(root, path.dirname(file));
      return relative === "" ? "/" : `/${relative.replaceAll(path.sep, "/")}/`;
    })
    .sort();
}

function requireText(file, marker) {
  const text = fs.readFileSync(file, "utf8");
  if (!text.includes(marker)) {
    throw new Error(`${file} is missing required marker: ${marker}`);
  }
  return text;
}

if (!fs.existsSync(outRoot)) {
  throw new Error("Portfolio export `out/` does not exist. Run the canonical build first.");
}

const generatedRoutes = new Set(indexRoutes(outRoot));
const missingRoutes = expectedRoutes.filter((route) => !generatedRoutes.has(route));
if (missingRoutes.length) {
  throw new Error(`Missing required portfolio routes: ${missingRoutes.join(", ")}`);
}

const workHtml = fs.readFileSync("out/work/index.html", "utf8");
const projectCardCount = (workHtml.match(/class="project-card\b/g) || []).length;
const displayedProjectSlugs = new Set(
  [...workHtml.matchAll(/href=["']\/my-portfolio\/projects\/([^/"'?#]+)\/?["']/g)].map(
    (match) => match[1],
  ),
);
const missingProjectCards = expectedProjectSlugs.filter(
  (slug) => !displayedProjectSlugs.has(slug),
);
const unexpectedProjectCards = [...displayedProjectSlugs].filter(
  (slug) => !expectedProjectSlugs.includes(slug),
);
if (missingProjectCards.length || unexpectedProjectCards.length) {
  throw new Error(
    [
      missingProjectCards.length
        ? `Missing public project cards: ${missingProjectCards.join(", ")}`
        : null,
      unexpectedProjectCards.length
        ? `Unexpected public project cards: ${unexpectedProjectCards.join(", ")}`
        : null,
    ]
      .filter(Boolean)
      .join("\n"),
  );
}
if (displayedProjectSlugs.size !== expectedProjectSlugs.length) {
  throw new Error(
    `Public Projects index must contain ${expectedProjectSlugs.length} unique project links; found ${displayedProjectSlugs.size}.`,
  );
}
if (projectCardCount !== expectedProjectSlugs.length) {
  throw new Error(
    `Public Projects index must render exactly ${expectedProjectSlugs.length} project cards with no duplicates; found ${projectCardCount}.`,
  );
}

for (const marker of [
  "Price Elasticity Modeling",
  "Water Quality Analysis",
  "Healthcare Resource Modeling",
  "Sentiment Analyzer",
  "Sports Q&amp;A Chatbot",
  "Medical Q&amp;A Model",
  "Skin Disease Classifier",
  "Open Vocabulary Object Detector",
  "Skin Lesion Segmentation",
  "LLM Evaluation Framework",
  "PFAS Drinking Water Decision Intelligence",
  "Wastewater Infrastructure Analytics",
  "Financial Crime Risk Intelligence",
  "World Happiness Dashboard",
]) {
  if (!workHtml.includes(marker)) {
    throw new Error(`Public Projects index is missing: ${marker}`);
  }
}
requireText("out/work/index.html", "/my-portfolio/project-captures/water-quality-analysis.svg");
requireText("out/work/index.html", "/my-portfolio/project-captures/world-happiness-2019.svg");
requireText("out/work/index.html", "OPEN LIVE DASHBOARD");

requireText(
  "out/projects/pfas-water-decision-intelligence/index.html",
  "PFAS Drinking Water Decision Intelligence",
);
requireText(
  "out/projects/pfas-water-decision-intelligence/index.html",
  "pfas-responsive.css?v=3",
);
requireText(
  "out/projects/pfas-water-decision-intelligence/index.html",
  'class="mobile-nav"',
);

requireText(
  "out/projects/financial-crime-risk-intelligence/index.html",
  "Financial Crime Risk Intelligence",
);
requireText(
  "out/projects/financial-crime-risk-intelligence/index.html",
  "41.53×",
);
requireText(
  "out/projects/financial-crime-risk-intelligence/index.html",
  'class="mobile-nav"',
);

requireText("out/person/index.html", "THE PERSON BEHIND THE WORK");
requireText("out/person/index.html", "sam-beyond-work.webp");
requireText("out/person/index.html", "portfolio-responsive.css?v=3");
requireText("out/person/index.html", 'class="mobile-nav"');

const whrHtml = requireText(
  "out/projects/world-happiness-analysis/index.html",
  "World Happiness",
);
for (const marker of [
  'id="dashboard"',
  'id="mapChart"',
  'id="rankChart"',
  'id="regionChart"',
  'id="scatterChart"',
  'id="trendChart"',
  'id="corrChart"',
  'id="predictionChart"',
  'id="coefChart"',
  "/my-portfolio/assets/world-happiness-dashboard.css",
  "/my-portfolio/assets/world-happiness-dashboard.js",
  "cdn.plot.ly/plotly-2.35.2.min.js",
]) {
  if (!whrHtml.includes(marker)) {
    throw new Error(`World Happiness dashboard export is missing: ${marker}`);
  }
}
for (const marker of ["DATA_URL", "Plotly.react", "renderAll", "startPlayback"]) {
  requireText("out/assets/world-happiness-dashboard.js", marker);
}

const htmlFiles = allFiles(outRoot, (file) => file.endsWith(".html"));
const badRootUrls = [];
const missingAssets = [];
const assetExt = /\.(?:css|js|mjs|png|webp|jpe?g|svg|pdf|ico|woff2?)(?:$|[?#])/i;

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  for (const match of html.matchAll(/(?:src|href)=["'](\/[^"']*)["']/g)) {
    const url = match[1];
    if (!(url === basePath || url.startsWith(`${basePath}/`))) {
      badRootUrls.push(`${file}: ${url}`);
      continue;
    }

    const pathname = url.split(/[?#]/, 1)[0];
    if (assetExt.test(pathname)) {
      const relative = pathname.replace(/^\/my-portfolio\/?/, "");
      if (!fs.existsSync(path.join(outRoot, relative))) {
        missingAssets.push(`${file}: ${url}`);
      }
    }
  }
}

if (badRootUrls.length) {
  throw new Error(
    `Root-relative URLs bypass GitHub Pages base path:\n${badRootUrls.join("\n")}`,
  );
}
if (missingAssets.length) {
  throw new Error(
    `Referenced static assets are missing from export:\n${missingAssets.join("\n")}`,
  );
}

console.log(
  `Validated ${expectedRoutes.length} required routes, ${expectedProjectSlugs.length} unique public project cards, WHR dashboard runtime assets, protected special pages, and asset paths across ${htmlFiles.length} HTML files.`,
);
