import { projects } from "./projects";
import { pfasProject } from "./pfas-project";
import { wastewaterProject } from "./wastewater-project";
import { worldHappinessProject } from "./world-happiness-project";

export const allProjects = [
  ...projects,
  pfasProject,
  wastewaterProject,
  worldHappinessProject,
];

export const specialStaticProjectSlugs = new Set([
  "pfas-water-decision-intelligence",
  "world-happiness-analysis",
]);

export const generatedProjectPages = allProjects.filter(
  (project) => !specialStaticProjectSlugs.has(project.slug),
);
