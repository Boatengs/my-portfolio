import type { Project } from "./projects";

const coverCodes: Record<string, [string, string]> = {
  "gridpulse-energy-grid-analytics": ["GRID", "PULSE"],
  "water-quality": ["WATER", "SIGNALS"],
  "healthcare-modeling": ["RESOURCE", "MODEL"],
  "sentiment-analyzer": ["TEXT", "SIGNAL"],
  "sports-chatbot": ["RAG", "SPORTS"],
  "medical-qa": ["MEDICAL", "Q+A"],
  "skin-classifier": ["VISION", "EXPLAIN"],
  "object-detector": ["OPEN", "VOCAB"],
  "skin-lesion-segmentation": ["LESION", "SEGMENT"],
  "llm-evaluation": ["LLM", "EVAL"],
  "pfas-water-decision-intelligence": ["PFAS", "DECISION"],
  "wastewater-infrastructure-analytics": ["ASSET", "RISK"],
  "financial-crime-risk-intelligence": ["GRAPH", "RISK"],
  "world-happiness-analysis": ["WHR", "LIVE"],
};

function primaryCategory(category: string) {
  return category.split("·")[0]?.trim() || category;
}

function defaultSurfaceLabel(project: Project) {
  if (project.slug === "world-happiness-analysis") return "OPEN LIVE DASHBOARD";
  if (project.slug === "gridpulse-energy-grid-analytics") return "LIVE CONTROL ROOM + CASE STUDY";
  return "VIEW CASE STUDY";
}

export function ProjectCover({
  project,
  variant = "card",
  label,
}: {
  project: Project;
  variant?: "card" | "detail";
  label?: string;
}) {
  const code = coverCodes[project.slug] ?? ["CASE", "STUDY"];
  const proof = project.evidence?.[0];
  const surfaceLabel = label || defaultSurfaceLabel(project);

  return (
    <div
      className={`project-cover cover-${project.accent}${variant === "detail" ? " project-cover--detail" : ""}`}
      aria-hidden="true"
    >
      <div className="project-cover-grid" />
      <div className="project-cover-topline">
        <span>{project.index}</span>
        <span>{primaryCategory(project.category)}</span>
      </div>
      <div className="project-cover-code">
        <strong>{code[0]}</strong>
        <strong>{code[1]}</strong>
      </div>
      <div className="project-cover-footer">
        <span className="project-cover-proof">
          {proof ? (
            <>
              <strong>{proof.value}</strong>
              <small>{proof.label}</small>
            </>
          ) : (
            <>
              <strong>CASE</strong>
              <small>Project evidence</small>
            </>
          )}
        </span>
        <span className="project-cover-action">{surfaceLabel}</span>
      </div>
    </div>
  );
}
