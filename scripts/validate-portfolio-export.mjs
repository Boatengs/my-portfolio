import fs from "node:fs";
import path from "node:path";

const outRoot = "out";
const basePath = "/my-portfolio";
const expectedRoutes = JSON.parse(
  fs.readFileSync("tests/portfolio-routes.json", "utf8"),
);

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
if (generatedRoutes.has("/projects/price-elasticity/")) {
  throw new Error("NDA Price Elasticity route must not be part of the public portfolio export.");
}

const workHtml = fs.readFileSync("out/work/index.html", "utf8");
const projectCardCount = (workHtml.match(/class="project-card\b/g) || []).length;
if (projectCardCount !== 12) {
  throw new Error(`Public Projects index must render 12 cards; found ${projectCardCount}.`);
}
for (const marker of [
  "PFAS Drinking Water Decision Intelligence",
  "Wastewater Infrastructure Analytics",
  "Financial Crime Risk Intelligence",
  "Water Quality Analysis",
  "Healthcare Resource Modeling",
  "Sentiment Analyzer",
  "Sports Q&amp;A Chatbot",
  "Medical Q&amp;A Model",
  "Skin Disease Classifier",
  "Open Vocabulary Object Detector",
  "Skin Lesion Segmentation",
  "LLM Evaluation Framework",
]) {
  if (!workHtml.includes(marker)) {
    throw new Error(`Public Projects index is missing: ${marker}`);
  }
}
if (workHtml.includes("price-elasticity") || workHtml.includes("Price Elasticity Modeling")) {
  throw new Error("Public Projects index must not expose the NDA Price Elasticity project.");
}
if (workHtml.includes('href="/my-portfolio/projects/world-happiness-analysis')) {
  throw new Error("World Happiness should remain a standalone case study, not a 13th Projects-index card.");
}
requireText("out/work/index.html", "/my-portfolio/project-captures/water-quality-analysis.svg");

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

requireText(
  "out/projects/world-happiness-analysis/index.html",
  "World Happiness",
);
requireText(
  "out/projects/world-happiness-analysis/index.html",
  "world-happiness-dashboard.js",
);

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
  `Validated ${expectedRoutes.length} required routes, 12 public project cards, protected special pages, and asset paths across ${htmlFiles.length} HTML files.`,
);
