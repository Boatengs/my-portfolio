import { projects } from "./projects";
import { pfasProject } from "./pfas-project";
import { wastewaterProject } from "./wastewater-project";
import { financialCrimeProject } from "./financial-crime-project";
import { worldHappinessProject } from "./world-happiness-project";

// Keep the original 01–11 project sequence, but replace the older PFAS record
// with the richer canonical PFAS project definition and attach the current
// water-quality card capture.
const numberedProjects = projects.map((project) => {
  if (project.slug === "pfas-water-decision-intelligence") return pfasProject;
  if (project.slug === "water-quality") {
    return { ...project, image: "/project-captures/water-quality-analysis.svg" };
  }
  return project;
});

// The public portfolio is numbered continuously from 01 through 14.
// Do not hide valid project cards during deployment reconciliation.
export const allProjects = [
  ...numberedProjects,
  wastewaterProject,
  financialCrimeProject,
  worldHappinessProject,
];

export const standaloneProjects = [];
export const registeredProjects = allProjects;

export const specialStaticProjectSlugs = new Set([
  "pfas-water-decision-intelligence",
  "financial-crime-risk-intelligence",
  "world-happiness-analysis",
]);

export const generatedProjectPages = allProjects.filter(
  (project) => !specialStaticProjectSlugs.has(project.slug),
);
