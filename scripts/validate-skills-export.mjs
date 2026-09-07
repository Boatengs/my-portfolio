import fs from "node:fs";
import path from "node:path";

const file = "out/skills/index.html";
if (!fs.existsSync(file)) {
  throw new Error("Premium technical toolkit export is missing: out/skills/index.html");
}

const html = fs.readFileSync(file, "utf8");

for (const marker of [
  "skills-premium",
  "TECHNICAL TOOLKIT",
  "CORE STACK",
  "WORKING STACK",
  "CAPABILITY LIBRARY",
  "Data &amp; Analysis",
  "Statistical &amp; Modeling",
  "Business Intelligence",
  "ML, NLP &amp; LLM",
  "Computer Vision &amp; Deep Learning",
  "Tools &amp; Platforms",
  "THE POINT OF THE STACK",
]) {
  if (!html.includes(marker)) {
    throw new Error(`Premium technical toolkit is missing: ${marker}`);
  }
}

for (const forbidden of [
  "api.iconify.design",
  "price-elasticity",
  'loading="lazy"',
  "Price Elasticity",
  "capability-tags",
  "capability-card",
]) {
  if (html.includes(forbidden)) {
    throw new Error(`Technical toolkit regression detected: ${forbidden}`);
  }
}

const skillCardCount = (html.match(/class="premium-skill-card(?:\s|\")/g) || []).length;
if (skillCardCount !== 58) {
  throw new Error(`Technical toolkit must render exactly 58 capability cards; found ${skillCardCount}.`);
}

const disciplineCount = (html.match(/class="toolkit-discipline tone-/g) || []).length;
if (disciplineCount !== 6) {
  throw new Error(`Technical toolkit must render exactly 6 premium discipline panels; found ${disciplineCount}.`);
}

const coreNodeCount = (html.match(/class="stack-node"/g) || []).length;
if (coreNodeCount !== 9) {
  throw new Error(`Technical toolkit must render exactly 9 core-stack nodes; found ${coreNodeCount}.`);
}

const remoteImages = [...html.matchAll(/<img[^>]+src=["'](https?:\/\/[^"']+)["']/g)].map(
  (match) => match[1],
);
if (remoteImages.length) {
  throw new Error(`Technical toolkit must not depend on remote images: ${remoteImages.join(", ")}`);
}

const logoUrls = [
  ...new Set(
    [...html.matchAll(/src=["'](\/my-portfolio\/skill-logos\/[^"']+\.svg)["']/g)].map(
      (match) => match[1],
    ),
  ),
];

if (logoUrls.length < 10) {
  throw new Error(`Expected at least 10 locally stored brand marks; found ${logoUrls.length}.`);
}

for (const url of logoUrls) {
  const relative = url.replace(/^\/my-portfolio\//, "");
  const asset = path.join("out", relative);
  if (!fs.existsSync(asset)) {
    throw new Error(`Technical toolkit references a missing local brand mark: ${url}`);
  }
}

console.log(
  `Validated premium technical toolkit: 58 capability cards, 6 discipline panels, 9 core-stack nodes, ${logoUrls.length} local brand marks, no NDA links, and no remote image dependencies.`,
);
