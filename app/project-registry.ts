import { projects } from "./projects";
import { pfasProject } from "./pfas-project";
import { wastewaterProject } from "./wastewater-project";
import { financialCrimeProject } from "./financial-crime-project";
import { worldHappinessProject } from "./world-happiness-project";
import { gridPulseProject } from "./gridpulse-project";

// Confidential/NDA work stays in its standalone GitHub repository and is never
// published through the portfolio. The portfolio registry is the public gate.
const publicProjects = projects.filter(
  (project) => !project.confidential && project.slug !== "price-elasticity",
);

const numberedProjects = publicProjects.map((project) => {
  if (project.slug === "pfas-water-decision-intelligence") return pfasProject;
  if (project.slug === "water-quality") {
    return { ...project, image: "/project-captures/water-quality-analysis.svg" };
  }
  return project;
});

// New public work belongs at the top of the portfolio. Add each newly published
// project to the beginning of this list so visitors see the most recent work first.
const recentProjects = [gridPulseProject];

// Keep the visible portfolio numbered continuously after excluding confidential
// work. Projects are registered once here, then generated everywhere.
export const allProjects = [
  ...recentProjects,
  ...numberedProjects,
  wastewaterProject,
  financialCrimeProject,
  worldHappinessProject,
].map((project, index) => ({
  ...project,
  index: String(index + 1).padStart(2, "0"),
}));

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
