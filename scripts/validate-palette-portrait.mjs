import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

for (const file of [
  "app/palette-alignment.css",
  "app/layout.tsx",
  "out/index.html",
  "out/resume/index.html",
  "out/sam-profile.png",
  "out/sam-profile.webp",
  "out/sampson-boateng-resume.pdf",
]) {
  if (!fs.existsSync(file)) throw new Error(`Palette/portrait/resume validation is missing: ${file}`);
}

const palette = fs.readFileSync("app/palette-alignment.css", "utf8");
for (const marker of [
  ".work-page",
  ".skills-premium",
  ".detail-editorial-visual",
  "var(--surface)",
  "var(--ink)",
  "var(--muted)",
  "var(--accent)",
  "/my-portfolio/sam-profile.png",
  "/sam-profile.png",
  "#main-content > main:not([class]) .availability-grid",
  "#main-content > main:not([class]) .availability h2",
  "word-break: keep-all",
  ".project-grid--featured .project-cover-proof strong",
  ".project-grid--featured .project-editorial-proof strong",
  ".resume-pdf-frame",
]) {
  if (!palette.includes(marker)) {
    throw new Error(`Shared palette/portrait/resume layer is missing: ${marker}`);
  }
}

const layout = fs.readFileSync("app/layout.tsx", "utf8");
if (!layout.includes('import "./palette-alignment.css";')) {
  throw new Error("Shared palette alignment CSS must load after the page-specific design layers.");
}

const home = fs.readFileSync("out/index.html", "utf8");
if (!home.includes("Professional portrait of Sampson Boateng")) {
  throw new Error("Homepage professional portrait markup is missing.");
}
if (!home.includes("/my-portfolio/sam-profile.webp")) {
  throw new Error("Homepage portrait does not resolve through the GitHub Pages base path.");
}
for (const marker of [
  "Advancing organizations",
  "1.99M",
  "Analytical-result records",
  ">6<",
  "Decision stages",
]) {
  if (!home.includes(marker)) {
    throw new Error(`Homepage brand polish is missing expected content: ${marker}`);
  }
}

const resume = fs.readFileSync("out/resume/index.html", "utf8");
for (const marker of [
  "<iframe",
  'class="resume-pdf-frame"',
  "/my-portfolio/sampson-boateng-resume.pdf?v=20260908-2",
  'download="Sampson-Boateng-Resume.pdf"',
]) {
  if (!resume.includes(marker)) {
    throw new Error(`Latest resume export is missing: ${marker}`);
  }
}
for (const forbidden of [
  "<object",
  "Your browser cannot display the PDF inline",
  "v=20260818-2",
  "v=20260826-1",
  "v=20260907-1",
  "v=20260908-1",
]) {
  if (resume.includes(forbidden)) {
    throw new Error(`Stale or browser-fragile resume rendering detected: ${forbidden}`);
  }
}
const resumePath = "out/sampson-boateng-resume.pdf";
const resumeBytes = fs.statSync(resumePath).size;
if (resumeBytes !== 111830) {
  throw new Error(`Expected the September 8 resume PDF (111830 bytes); found ${resumeBytes} bytes.`);
}
const resumeSha256 = crypto.createHash("sha256").update(fs.readFileSync(resumePath)).digest("hex");
const expectedResumeSha256 = "79c59994d36b8fac11037835dd9cc75e3775c591cb88d8514f57f66aec51ae57";
if (resumeSha256 !== expectedResumeSha256) {
  throw new Error(`Expected exact September 8 resume SHA-256 ${expectedResumeSha256}; found ${resumeSha256}.`);
}

const cssFiles = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.isFile() && full.endsWith(".css")) cssFiles.push(full);
  }
}
walk("out");
const css = cssFiles.map((file) => fs.readFileSync(file, "utf8")).join("\n");
if (!css.includes("/my-portfolio/sam-profile.png")) {
  throw new Error("Compiled portfolio CSS is missing the deployed portrait fallback.");
}
if (!css.includes("word-break:keep-all") && !css.includes("word-break: keep-all")) {
  throw new Error("Compiled homepage CSS is missing the protected opportunity-headline word wrapping rule.");
}
if (!css.includes("resume-pdf-frame")) {
  throw new Error("Compiled portfolio CSS is missing the live resume PDF frame styling.");
}

console.log("Validated shared palette alignment, homepage brand polish, resilient portrait assets, and the exact September 8 resume rendered through the browser compatible iframe viewer.");
