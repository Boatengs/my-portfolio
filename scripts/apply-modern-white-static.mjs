import fs from "node:fs/promises";
import path from "node:path";

const roots = ["docs", "site-static"];
const assetName = "modern-white-20260822.css";
const assetVersion = "3";
const assetHref = `/my-portfolio/assets/${assetName}?v=${assetVersion}`;
const stylesheet = await fs.readFile("app/modern-white.css", "utf8");
const evidenceByTitle = new Map([
  ["Price Elasticity Modeling", ["9", "Executive insight areas"]],
  ["Water Quality Analysis", ["3", "Analytical methods"]],
  ["Healthcare Resource Modeling", ["3", "Classifiers compared"]],
  ["Sentiment Analyzer", ["91.19%", "Test accuracy"]],
  ["Sports Q&A Chatbot", ["10", "Source documents"]],
  ["Medical Q&A Model", ["0.6573", "Final validation loss"]],
  ["Skin Disease Classifier", ["74.15%", "Test accuracy"]],
  ["Open-Vocabulary Object Detector", ["80 → open", "Vocabulary expanded"]],
  ["Skin Lesion Segmentation", ["0.9115", "Test Dice score"]],
  ["LLM Evaluation Framework", ["+17.8%", "Average ROUGE gain"]],
]);

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
    html = html.replace(new RegExp(`${assetName.replaceAll(".", "\\.")}\\?v=\\d+`, "g"), `${assetName}?v=${assetVersion}`);

    if (isHome && path.basename(file) === "index.html") {
      if (!html.includes('class="hero-actions"')) {
        html = html.replace(
          '<a class="text-link" href="#work">Explore selected work <span>↓</span></a>',
          '<div class="hero-actions"><a class="text-link" href="#work">Explore selected work <span>↓</span></a><a class="hero-resume-link" href="/my-portfolio/resume">View résumé <span>↗</span></a></div>',
        );
      }

      if (!html.includes('class="hero-proof-strip"')) {
        html = html.replace(
          '<div class="data-stage" aria-label="Abstract data visualization">',
          '<div class="hero-proof-strip" aria-label="Professional highlights"><article><strong>10</strong><span>Evidence-backed case studies</span></article><article><strong>M.S.</strong><span>Applied Machine Intelligence</span></article><article><strong>1ST</strong><span>Climate resiliency hackathon</span></article></div><div class="data-stage" aria-label="Abstract data visualization">',
        );
      }
    }

    html = html.replace(/<div class="project-info">([\s\S]*?)<\/div>/g, (match, contents) => {
      if (contents.includes('class="project-proof"')) return match;

      const title = (contents.match(/<h3>([\s\S]*?)<i\b/)?.[1] || "")
        .replace(/<[^>]*>/g, "")
        .replace(/&amp;/g, "&")
        .trim();
      const evidence = evidenceByTitle.get(title);
      if (!evidence) return match;

      return `<div class="project-info">${contents}<div class="project-proof"><strong>${evidence[0]}</strong><span>${evidence[1]}</span></div></div>`;
    });

    if (!html.includes(assetName)) {
      html = html.replace("</head>", `${newLink}</head>`);
    }

    await fs.writeFile(file, html);
  }
}

console.log("Applied the modern white design system to every static portfolio page.");
