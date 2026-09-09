from pathlib import Path
import json
import os


def write(path: str, content: str) -> None:
    Path(path).write_text(content, encoding="utf-8")


def replace_once(path: str, old: str, new: str) -> None:
    p = Path(path)
    text = p.read_text(encoding="utf-8")
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"Expected exactly one match in {path}: {old!r}; found {count}")
    p.write_text(text.replace(old, new, 1), encoding="utf-8")


def ensure_import(path: str, statement: str) -> None:
    p = Path(path)
    text = p.read_text(encoding="utf-8")
    if statement in text:
        return
    lines = text.splitlines()
    imports = [i for i, line in enumerate(lines) if line.startswith("import ")]
    if not imports:
        raise SystemExit(f"No import block found in {path}")
    lines.insert(max(imports) + 1, statement)
    p.write_text("\n".join(lines) + ("\n" if text.endswith("\n") else ""), encoding="utf-8")


write(
    "app/site-path.ts",
    '''const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function sitePath(path: string) {
  if (!path.startsWith("/") || !basePath) return path;
  if (path === basePath || path.startsWith(`${basePath}/`)) return path;
  return `${basePath}${path}`;
}
''',
)

write(
    "app/static-link.tsx",
    '''import type { AnchorHTMLAttributes } from "react";
import { sitePath } from "./site-path";

type StaticLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
};

export function StaticLink({ href, ...props }: StaticLinkProps) {
  const resolvedHref = href.startsWith("/") ? sitePath(href) : href;
  return <a href={resolvedHref} {...props} />;
}
''',
)

replaced = 0
for p in Path("app").rglob("*.tsx"):
    text = p.read_text(encoding="utf-8")
    marker = 'import Link from "next/link";'
    if marker not in text:
        continue
    rel = os.path.relpath(Path("app/static-link"), p.parent).replace(os.sep, "/")
    if not rel.startswith("."):
        rel = "./" + rel
    p.write_text(text.replace(marker, f'import {{ StaticLink as Link }} from "{rel}";', 1), encoding="utf-8")
    replaced += 1
if replaced < 5:
    raise SystemExit(f"Expected at least 5 next/link imports; found {replaced}")

ensure_import("app/page.tsx", 'import { sitePath } from "./site-path";')
replace_once("app/page.tsx", 'src="/sam-profile.webp"', 'src={sitePath("/sam-profile.webp")}')
replace_once(
    "app/page.tsx",
    'loading="lazy"\n                  decoding="async"\n                  alt="Professional portrait of Sampson Boateng"',
    'loading="eager"\n                  fetchPriority="high"\n                  decoding="async"\n                  alt="Professional portrait of Sampson Boateng"',
)

ensure_import("app/skills/page.tsx", 'import { sitePath } from "../site-path";')
replace_once(
    "app/skills/page.tsx",
    'const logo = (name: string) => `/skill-logos/${name}.svg`;',
    'const logo = (name: string) => sitePath(`/skill-logos/${name}.svg`);',
)

ensure_import("app/resume/page.tsx", 'import { sitePath } from "../site-path";')
replace_once(
    "app/resume/page.tsx",
    'const resumeUrl = "/sampson-boateng-resume.pdf?v=20260908-2";',
    'const resumeUrl = sitePath("/sampson-boateng-resume.pdf?v=20260908-2");',
)

ensure_import("app/layout.tsx", 'import { sitePath } from "./site-path";')
replace_once("app/layout.tsx", 'icons: { icon: "/favicon.svg" },', 'icons: { icon: sitePath("/favicon.svg") },')

ensure_import("app/project-registry.ts", 'import { sitePath } from "./site-path";')
replace_once(
    "app/project-registry.ts",
    '  ...project,\n  index: String(index + 1).padStart(2, "0"),',
    '  ...project,\n  image: project.image ? sitePath(project.image) : undefined,\n  index: String(index + 1).padStart(2, "0"),',
)

replace_once(
    "next.config.ts",
    'const basePath = process.env.GITHUB_PAGES === "true" ? "/my-portfolio" : "";',
    'const basePath =\n  process.env.NEXT_PUBLIC_BASE_PATH ||\n  (process.env.GITHUB_PAGES === "true" ? "/my-portfolio" : "");',
)

for wf in [".github/workflows/deploy-pages.yml", ".github/workflows/portfolio-ci.yml"]:
    replace_once(
        wf,
        '      GITHUB_PAGES: "true"',
        '      GITHUB_PAGES: "true"\n      NEXT_PUBLIC_BASE_PATH: "/my-portfolio"',
    )

write(
    "scripts/validate-first-load-assets.mjs",
    '''import fs from "node:fs";
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
    else if (entry.isFile() && /\\.(?:html|txt|js)$/i.test(entry.name)) files.push(full);
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
  .join("\\n");
if (!skillsPayload.includes(`${basePath}/skill-logos/python.svg`)) {
  throw new Error("Skills payload must contain base-prefixed local skill logos.");
}

const resumePayload = files
  .filter((file) => file.startsWith(path.join(outRoot, "resume")) && file.endsWith(".txt"))
  .map((file) => fs.readFileSync(file, "utf8"))
  .join("\\n");
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
''',
)

package_path = Path("package.json")
package = json.loads(package_path.read_text(encoding="utf-8"))
marker = "node scripts/validate-first-load-assets.mjs"
if marker not in package["scripts"]["postbuild"]:
    package["scripts"]["postbuild"] += f" && {marker}"
package_path.write_text(json.dumps(package, indent=2) + "\n", encoding="utf-8")

Path(".github/workflows/apply-static-first-load-fix.yml").unlink()
Path("scripts/apply-static-first-load-fix.py").unlink()
