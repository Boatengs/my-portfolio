import fs from "node:fs";

const workFile = "out/work/index.html";
const newestProjectSlug = "gridpulse-energy-grid-analytics";

if (!fs.existsSync(workFile)) {
  throw new Error(`${workFile} does not exist. Build the canonical portfolio first.`);
}

const workHtml = fs.readFileSync(workFile, "utf8");
const projectSlugs = [
  ...workHtml.matchAll(/href=["']\/my-portfolio\/projects\/([^/"'?#]+)\/?["']/g),
].map((match) => match[1]);

if (!projectSlugs.length) {
  throw new Error("No public project links were found on the Projects page.");
}

if (projectSlugs[0] !== newestProjectSlug) {
  throw new Error(
    `Newest public project must appear first. Expected ${newestProjectSlug}; found ${projectSlugs[0]}.`,
  );
}

console.log(`Validated newest-first project ordering: ${newestProjectSlug} is first.`);
