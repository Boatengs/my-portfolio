import fs from "node:fs/promises";
import path from "node:path";

const roots = ["site-static", "docs"];
const criticalSkipStyle = `<style id="a11y-critical">.skip-link{position:fixed;z-index:10000;top:12px;left:12px;padding:12px 16px;background:#111;color:#fff;border:2px solid #fff;border-radius:4px;font:800 14px/1 Arial,sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.22);transform:translateY(calc(-100% - 28px));transition:transform .18s ease}.skip-link:focus,.skip-link:focus-visible{transform:translateY(0);outline:3px solid #d4492f;outline-offset:3px}</style>`;
const cssPatch = `
/* Performance and accessibility foundation */
.skip-link{position:fixed;z-index:1000;top:10px;left:10px;padding:12px 16px;background:#111;color:#fff;border:2px solid #fff;transform:translateY(-160%);transition:transform .18s ease;font-size:14px;font-weight:800}.skip-link:focus{transform:translateY(0)}.sr-only{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}:focus-visible{outline:3px solid #d4492f;outline-offset:4px}#main-content:focus{outline:none}img{max-width:100%;height:auto}.section,.impact-preview,.leadership-preview,.education,.availability,.footer{content-visibility:auto;contain-intrinsic-size:1px 850px}.project-filters button{min-height:44px}.project-number,.visual-label,.stage-copy span,.stage-note,.eyebrow{font-size:max(11px,.6875rem)}@media(max-width:760px){a,button{touch-action:manipulation}.nav-cta{min-height:44px;display:inline-flex;align-items:center}.footer-row a{display:inline-flex;min-height:44px;align-items:center}}@media(prefers-reduced-motion:reduce){*,*::before,*::after{scroll-behavior:auto!important;animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}.cursor-glow{display:none!important}.project-visual,.project-card,.art{transform:none!important}}
`;

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else files.push(full);
  }
  return files;
}

for (const root of roots) {
  await fs.copyFile("public/sam-profile.webp", path.join(root, "sam-profile.webp"));
  const cssPath = path.join(root, "assets/portfolio-20260809-v4.css");
  let css = await fs.readFile(cssPath, "utf8");
  if (!css.includes("Performance and accessibility foundation")) {
    await fs.writeFile(cssPath, css + cssPatch);
  }
  for (const file of (await walk(root)).filter(file => file.endsWith(".html"))) {
    let html = await fs.readFile(file, "utf8");
    if (!html.includes('id="a11y-critical"')) {
      html = html.replace("</head>", `${criticalSkipStyle}</head>`);
    }
    if (!html.includes('class="skip-link"')) {
      html = html.replace(/<body([^>]*)>/, '<body$1><a class="skip-link" href="#main-content">Skip to main content</a>');
    }
    html = html.replace(/<main(?![^>]*id=)/, '<main id="main-content" tabindex="-1"');
    html = html.replaceAll("sam-profile.png", "sam-profile.webp");
    html = html.replaceAll("portfolio-20260809-v4.css?v=13", "portfolio-20260809-v4.css?v=14");
    html = html.replace(/<img src="([^\"]+)"(?![^>]*decoding=)/g, '<img src="$1" decoding="async"');
    if (file.endsWith(`${path.sep}index.html`) && path.dirname(file) === root) {
      html = html.replace('src="/my-portfolio/sam-profile.webp" decoding="async"', 'src="/my-portfolio/sam-profile.webp" decoding="async" loading="lazy" width="900" height="900"');
    }
    if (file.includes(`${path.sep}person${path.sep}`)) {
      html = html.replace('src="/my-portfolio/sam-profile.webp" decoding="async"', 'src="/my-portfolio/sam-profile.webp" decoding="async" width="900" height="900"');
    }
    html = html.replace("const fine=matchMedia('(pointer:fine)').matches", "const fine=matchMedia('(pointer:fine) and (prefers-reduced-motion:no-preference)').matches");
    await fs.writeFile(file, html);
  }
}

console.log("Applied accessibility and performance enhancements to static output.");
