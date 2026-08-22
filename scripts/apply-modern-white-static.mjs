import fs from "node:fs/promises";
import path from "node:path";

const roots = ["docs", "site-static"];
const assetName = "modern-white-20260822.css";
const assetHref = `/my-portfolio/assets/${assetName}?v=2`;
const stylesheet = await fs.readFile("app/modern-white.css", "utf8");

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(entryPath)));
    else if (entry.name.endsWith(".html")) files.push(entryPath);
  }

  return files;
}

for (const root of roots) {
  await fs.writeFile(path.join(root, "assets", assetName), stylesheet);

  for (const file of await walk(root)) {
    let html = await fs.readFile(file, "utf8");
    const newLink = `<link rel="stylesheet" href="${assetHref}"/>`;

    const isHome = path.dirname(file) === root;
    const nav = `<nav class="nav shell" aria-label="Primary navigation"><a class="wordmark" href="${isHome ? "#top" : "/my-portfolio/"}">SB<span>.</span></a><div class="nav-links"><a href="${isHome ? "#about" : "/my-portfolio/#about"}">About</a><a href="${isHome ? "#work" : "/my-portfolio/work"}">Work</a><a href="${isHome ? "#experience" : "/my-portfolio/#experience"}">Experience</a><a href="${isHome ? "#leadership" : "/my-portfolio/leadership"}">Leadership</a><a href="/my-portfolio/person">Beyond Work</a><a class="nav-cta" href="/my-portfolio/resume">Résumé <span>↗</span></a></div></nav>`;
    html = html.replace(/<nav\b[^>]*>[\s\S]*?<\/nav>/, nav);
    html = html.replace(new RegExp(`${assetName.replaceAll(".", "\\.")}\\?v=\\d+`, "g"), `${assetName}?v=2`);

    if (!html.includes(assetName)) {
      html = html.replace("</head>", `${newLink}</head>`);
    }

    await fs.writeFile(file, html);
  }
}

console.log("Applied the modern white design system to every static portfolio page.");
