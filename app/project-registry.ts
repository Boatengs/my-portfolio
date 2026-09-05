import { projects } from "./projects";
import { pfasProject } from "./pfas-project";
import { wastewaterProject } from "./wastewater-project";
import { financialCrimeProject } from "./financial-crime-project";
import { worldHappinessProject } from "./world-happiness-project";

const publicBaseProjects = projects
  .filter((project) => project.slug !== "price-elasticity")
  .map((project) =>
    project.slug === "water-quality"
      ? { ...project, image: "/project-captures/water-quality-analysis.svg" }
      : project,
  );

// This order mirrors the public Projects page visitors see today.
export const allProjects = [
  pfasProject,
  wastewaterProject,
  financialCrimeProject,
  ...publicBaseProjects,
];

// World Happiness remains a public standalone interactive case study, but it
// is intentionally not part of the 12-card Projects index.
export const standaloneProjects = [worldHappinessProject];
export const registeredProjects = [...allProjects, ...standaloneProjects];

export const specialStaticProjectSlugs = new Set([
  "pfas-water-decision-intelligence",
  "financial-crime-risk-intelligence",
  "world-happiness-analysis",
]);

export const generatedProjectPages = allProjects.filter(
  (project) => !specialStaticProjectSlugs.has(project.slug),
);
