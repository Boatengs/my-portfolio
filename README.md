# Sampson Boateng Portfolio

This repository contains the single canonical source for Sampson Boateng's portfolio.

## Single source of truth

All portfolio content is authored under `app/` and `public/`.

- `app/` — pages, project registry, shared presentation logic, responsive styles, and preserved special interactive/editorial experiences
- `public/` — portfolio images, project captures, résumé assets, and favicon
- `scripts/finalize-static-export.mjs` — finalizes special presentation pages and GitHub Pages asset paths after the Next.js export
- `scripts/validate-portfolio-export.mjs` — verifies required public routes, the public project set, protected special pages, and static assets
- `tests/portfolio-routes.json` — explicit manifest of public portfolio routes that must remain available
- `.github/workflows/portfolio-ci.yml` — builds and validates the canonical source on pull requests
- `.github/workflows/deploy-pages.yml` — builds the same canonical source and deploys the generated `out/` artifact to GitHub Pages

The generated `out/` directory is a build artifact. It is not a second editable copy of the portfolio and is not committed to the repository.

## Updating the portfolio

Future portfolio changes should be made only in `app/` and `public/`. Do not create or maintain parallel `docs/`, `site-static/`, or other hand-edited deployment copies.

Project-specific repositories remain the source of truth for their analytical code, data-processing logic, tests, notebooks, and technical README documentation. The portfolio repository contains only the presentation material needed to showcase those projects.
