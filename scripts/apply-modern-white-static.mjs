import fs from "node:fs/promises";
import path from "node:path";

const roots = ["docs", "site-static"];
const assetName = "modern-white-20260822.css";
const assetHref = `/my-portfolio/assets/${assetName}?v=1`;
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

    if (!html.includes(assetName)) {
      html = html.replace("</head>", `${newLink}</head>`);
      await fs.writeFile(file, html);
    }
  }
}

console.log("Applied the modern white design system to every static portfolio page.");
