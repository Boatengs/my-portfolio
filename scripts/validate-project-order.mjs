import fs from "node:fs";

const workFile = "out/work/index.html";
const newestProjectSlug = "recoverylens";

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

const homeHtml = fs.readFileSync("out/index.html", "utf8");
const featuredStart = homeHtml.indexOf("project-grid--featured");
const featuredSlugs = [
  ...homeHtml.slice(featuredStart).matchAll(/href=["']\/my-portfolio\/projects\/([^/"'?#]+)\/?["']/g),
].map((match) => match[1]).filter((slug, i, all) => all.indexOf(slug) === i).slice(0, 2);
const newestTwo = [...new Set(projectSlugs)].slice(0, 2);
if (featuredStart < 0 || featuredSlugs.join(",") !== newestTwo.join(",")) {
  throw new Error(`Home page must feature the two newest projects (${newestTwo.join(", ")}); found ${featuredSlugs.join(", ") || "none"}.`);
}

console.log(`Validated newest-first project ordering: ${newestProjectSlug} is first, and the home page features ${newestTwo.join(" and ")}.`);
