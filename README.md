# Sampson Boateng Portfolio

This repository contains the source and deployed static artifacts for Sampson Boateng's portfolio.

## Deployment

GitHub Pages deploys the `site-static/` directory through `.github/workflows/deploy-pages.yml`.

The deployment preparation step preserves hand-maintained static experiences such as the Beyond Work page and the native World Happiness dashboard while applying current project-card visuals.

## Source organization

- `app/` — durable application and static-page source
- `public/` — public assets used by the application source
- `site-static/` — GitHub Pages deployment artifact
- `scripts/` — deployment preparation and export utilities

Project-specific repositories remain the source of truth for their analytical code, data-processing logic, tests, notebooks, and README documentation.
