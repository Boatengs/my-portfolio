import fs from "node:fs";
import path from "node:path";

const outRoot = "out";
const basePath = "/my-portfolio";
const rawAssets = [
  "/sam-profile.webp",
  "/skill-logos/",
  "/sampson-boateng-resume.pdf",
];

function filesUnder(directory) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...filesUnder(full));
    else if (entry.isFile() && /\.(?:html|txt|js)$/i.test(entry.name)) files.push(full);
  }
  return files;
}

if (!fs.existsSync(outRoot)) throw new Error("Static export is missing.");
const files = filesUnder(outRoot);

for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  const normalized = text.replaceAll(`${basePath}/`, "/__BASE__/ ");
  for (const asset of rawAssets) {
    if (normalized.includes(asset)) {
      throw new Error(`First-load regression: ${file} contains unprefixed public asset ${asset}`);
    }
  }
}

const homePayload = fs.readFileSync("out/__next.__PAGE__.txt", "utf8");
if (!homePayload.includes(`${basePath}/sam-profile.webp`)) {
  throw new Error("Homepage payload must contain the base-prefixed professional portrait.");
}

const skillsPayload = files
  .filter((file) => file.startsWith(path.join(outRoot, "skills")) && file.endsWith(".txt"))
  .map((file) => fs.readFileSync(file, "utf8"))
  .join("\n");
if (!skillsPayload.includes(`${basePath}/skill-logos/python.svg`)) {
  throw new Error("Skills payload must contain base-prefixed local skill logos.");
}

const resumePayload = files
  .filter((file) => file.startsWith(path.join(outRoot, "resume")) && file.endsWith(".txt"))
  .map((file) => fs.readFileSync(file, "utf8"))
  .join("\n");
if (!resumePayload.includes(`${basePath}/sampson-boateng-resume.pdf?v=20260908-2`)) {
  throw new Error("Resume payload must contain the base-prefixed PDF URL.");
}

for (const source of [
  "app/page.tsx",
  "app/site-nav.tsx",
  "app/project-grid.tsx",
  "app/skills/page.tsx",
  "app/projects/[slug]/page.tsx",
]) {
  if (fs.readFileSync(source, "utf8").includes('from "next/link"')) {
    throw new Error(`Static navigation regression: ${source} still imports next/link.`);
  }
}

console.log("Validated first-load static navigation plus base-prefixed portrait, skills, and resume assets.");
