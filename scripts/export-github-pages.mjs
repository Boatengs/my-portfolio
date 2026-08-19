import fs from "node:fs/promises";
import path from "node:path";
import worker from "../dist/server/index.js";

const out = path.resolve("site-static");
const base = "/my-portfolio";
const routes = [
  "/", "/resume", "/work", "/impact", "/leadership", "/person", "/skills",
  "/projects/price-elasticity", "/projects/water-quality",
  "/projects/healthcare-modeling", "/projects/sentiment-analyzer",
  "/projects/sports-chatbot", "/projects/medical-qa",
  "/projects/skin-classifier", "/projects/object-detector",
  "/projects/skin-lesion-segmentation", "/projects/llm-evaluation",
];

await fs.rm(out, { recursive: true, force: true });
await fs.cp("dist/client", out, { recursive: true });
for (const file of await fs.readdir(path.join(out, "assets"))) {
  if (file.endsWith(".js")) await fs.rm(path.join(out, "assets", file));
}

function staticHtml(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]+href="[^"]+\.js"[^>]*>/gi, "")
    .replace(/\s+data-rsc-css-href="[^"]*"/g, "")
    .replace(/\s+data-precedence="[^"]*"/g, "")
    .replace(/(href|src)="\//g, `$1="${base}/`)
    .replace(/url\(\//g, `url(${base}/`);
}

for (const route of routes) {
  const response = await worker.fetch(new Request(`https://portfolio.local${route}`));
  if (!response.ok) throw new Error(`${route}: ${response.status}`);
  const html = staticHtml(await response.text());
  const target = route === "/" ? path.join(out, "index.html") : path.join(out, route.slice(1), "index.html");
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, html);
}

await fs.writeFile(path.join(out, ".nojekyll"), "");
await fs.copyFile(path.join(out, "index.html"), path.join(out, "404.html"));
console.log(`Exported ${routes.length} routes to ${out}`);
