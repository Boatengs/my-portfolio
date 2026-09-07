import fs from "node:fs";
import path from "node:path";

for (const file of [
  "app/palette-alignment.css",
  "app/layout.tsx",
  "out/index.html",
  "out/sam-profile.png",
  "out/sam-profile.webp",
]) {
  if (!fs.existsSync(file)) throw new Error(`Palette/portrait validation is missing: ${file}`);
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
]) {
  if (!palette.includes(marker)) {
    throw new Error(`Shared palette/portrait layer is missing: ${marker}`);
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

console.log("Validated shared homepage/project/toolkit palette alignment and resilient homepage portrait assets.");
