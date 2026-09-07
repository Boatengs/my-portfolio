import fs from "node:fs";
import path from "node:path";

const outRoot = "out";
const basePath = "/my-portfolio";
const expectedRoutes = JSON.parse(
  fs.readFileSync("tests/portfolio-routes.json", "utf8"),
);
const expectedProjectSlugs = [
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
  "gridpulse-energy-grid-analytics",
];
const forbiddenProjectSlugs = ["price-elasticity"];

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
for (const slug of forbiddenProjectSlugs) {
  const route = `/projects/${slug}/`;
  if (generatedRoutes.has(route)) {
    throw new Error(`Confidential/NDA portfolio route must not be generated: ${route}`);
  }
}

const projectGridSource = fs.readFileSync("app/project-grid.tsx", "utf8");
for (const marker of [
  "<img",
  "demo-capture",
  'loading="lazy"',
  "onMouseMove={tilt}",
  "onMouseLeave={reset}",
  "const tilt =",
]) {
  if (projectGridSource.includes(marker)) {
    throw new Error(`Project index stability regression detected: ${marker}`);
  }
}
for (const marker of [
  "project-cover",
  "project-card--lead",
  "Browse by expertise",
  "Latest project",
]) {
  if (!projectGridSource.includes(marker)) {
    throw new Error(`Editorial project index source is missing: ${marker}`);
  }
}

const thumbnailStabilityCss = fs.readFileSync(
  "app/project-thumbnail-stability.css",
  "utf8",
);
for (const marker of [
  ".project-card:hover",
  "perspective: none !important;",
  "transform: none !important;",
]) {
  if (!thumbnailStabilityCss.includes(marker)) {
    throw new Error(`Project thumbnail stability CSS is missing: ${marker}`);
  }
}

const workRedesignCss = fs.readFileSync("app/work-redesign.css", "utf8");
for (const marker of [
  ".project-grid--editorial",
  ".project-card--lead",
  ".project-cover",
  "transform: none !important;",
  "filter: none !important;",
  "opacity: 1 !important;",
]) {
  if (!workRedesignCss.includes(marker)) {
    throw new Error(`Modern project index CSS is missing: ${marker}`);
  }
}

const workHtml = fs.readFileSync("out/work/index.html", "utf8");
const projectCardCount = (workHtml.match(/class="project-card\b/g) || []).length;
const projectCoverCount = (workHtml.match(/class="project-cover\b/g) || []).length;
const orderedProjectSlugs = [
  ...workHtml.matchAll(/href=["']\/my-portfolio\/projects\/([^/"'?#]+)\/?["']/g),
].map((match) => match[1]);
const displayedProjectSlugs = new Set(orderedProjectSlugs);
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
if (projectCoverCount !== expectedProjectSlugs.length) {
  throw new Error(
    `Public Projects index must render exactly ${expectedProjectSlugs.length} stable editorial covers; found ${projectCoverCount}.`,
  );
}
if (orderedProjectSlugs[0] !== "gridpulse-energy-grid-analytics") {
  throw new Error(
    `Newest project must be first on the Projects index; found ${orderedProjectSlugs[0] || "none"}.`,
  );
}
if (workHtml.includes("demo-capture")) {
  throw new Error("Projects index must not render screenshot image cards; use stable editorial covers.");
}
for (const marker of ["Browse by expertise", "Latest project", "Project index"]) {
  if (!workHtml.includes(marker)) {
    throw new Error(`Modern Projects index is missing: ${marker}`);
  }
}
for (const slug of forbiddenProjectSlugs) {
  if (displayedProjectSlugs.has(slug)) {
    throw new Error(`Confidential/NDA project card must not be public: ${slug}`);
  }
}
for (const marker of ["Price Elasticity Modeling", "NDA PROTECTED"]) {
  if (workHtml.includes(marker)) {
    throw new Error(`Confidential/NDA portfolio content must not be public: ${marker}`);
  }
}

for (const marker of [
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
  "GridPulse Energy Grid Analytics",
]) {
  if (!workHtml.includes(marker)) {
    throw new Error(`Public Projects index is missing: ${marker}`);
  }
}
requireText("out/work/index.html", "OPEN LIVE DASHBOARD");
requireText("out/work/index.html", "LIVE CONTROL ROOM + CASE STUDY");

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

const gridPulseHtml = requireText(
  "out/projects/gridpulse-energy-grid-analytics/index.html",
  "GridPulse Energy Grid Analytics",
);
for (const marker of [
  "44.2%",
  "36.0%",
  "13 / 13",
  "8,690",
  "VERIFIED PJM FORECAST BENCHMARK",
  "https://github.com/Boatengs/gridpulse-energy-grid-analytics",
  "Launch live dashboard",
  "https://gridpulse-energy-grid-analytics-mmwt26f5tdfp6ussj87qdr.streamlit.app/",
]) {
  if (!gridPulseHtml.includes(marker)) {
    throw new Error(`GridPulse portfolio export is missing: ${marker}`);
  }
}

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
  `Validated ${expectedRoutes.length} required routes, ${expectedProjectSlugs.length} unique public project cards, stable editorial project covers with newest-first ordering, NDA route exclusion, GridPulse evidence and live dashboard link, WHR dashboard runtime assets, protected special pages, and asset paths across ${htmlFiles.length} HTML files.`,
);
