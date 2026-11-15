// Shared pieces of the Skills page: types, method icons and the skill mark.
export type Skill = {
  name: string;
  type: string;
  logo?: string;
  icon?: string;
  proof?: string;
};

export type SkillGroup = {
  num: string;
  title: string;
  kicker: string;
  description: string;
  proofHref: string;
  proofLabel: string;
  tone: string;
  skills: Skill[];
};

export function MethodIcon({ name }: { name?: string }) {
  const common = {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  } as const;

  switch (name) {
    case "database":
    case "vectors":
      return <svg {...common}><ellipse cx="24" cy="11" rx="13" ry="5"/><path d="M11 11v12c0 2.8 5.8 5 13 5s13-2.2 13-5V11M11 23v12c0 2.8 5.8 5 13 5s13-2.2 13-5V23"/></svg>;
    case "sheet":
      return <svg {...common}><rect x="9" y="7" width="30" height="34" rx="4"/><path d="M18 7v34M9 18h30M9 29h30"/></svg>;
    case "science":
    case "experiment":
      return <svg {...common}><path d="M18 7h12M21 7v10L11 35a4 4 0 0 0 3.5 6h19a4 4 0 0 0 3.5-6L27 17V7"/><path d="M16 31h16"/></svg>;
    case "spark":
    case "boost":
      return <svg {...common}><path d="m27 5-15 23h11l-2 15 15-24H25l2-14Z"/></svg>;
    case "cluster":
      return <svg {...common}><circle cx="14" cy="14" r="5"/><circle cx="34" cy="13" r="5"/><circle cx="24" cy="34" r="5"/><path d="m18 17 4 12m8-12-4 12M19 14h10"/></svg>;
    case "warehouse":
      return <svg {...common}><path d="M7 18 24 7l17 11v23H7V18Z"/><path d="M14 23h20M14 30h20M14 37h20"/></svg>;
    case "trend":
    case "forecast":
      return <svg {...common}><path d="M7 36 17 25l8 7 16-20"/><path d="M31 12h10v10"/></svg>;
    case "curve":
      return <svg {...common}><path d="M7 31c6-18 12 18 18 0s10-8 16-18"/></svg>;
    case "tree":
    case "forest":
      return <svg {...common}><path d="M24 40V23M15 40h18"/><circle cx="24" cy="12" r="7"/><circle cx="14" cy="22" r="6"/><circle cx="34" cy="22" r="6"/></svg>;
    case "boundary":
      return <svg {...common}><path d="M8 37 40 11M8 29 32 9M16 40 40 20"/><circle cx="13" cy="14" r="3"/><circle cx="35" cy="35" r="3"/></svg>;
    case "split":
      return <svg {...common}><path d="M9 12h9c8 0 8 24 16 24h5M9 36h9c8 0 8-24 16-24h5"/></svg>;
    case "dimensions":
      return <svg {...common}><rect x="8" y="8" width="12" height="12" rx="2"/><rect x="28" y="28" width="12" height="12" rx="2"/><path d="M20 14h10M34 18v10"/></svg>;
    case "anomaly":
      return <svg {...common}><path d="M24 7 42 39H6L24 7Z"/><path d="M24 18v10M24 34h.01"/></svg>;
    case "dashboard":
    case "bars":
    case "analytics":
      return <svg {...common}><rect x="7" y="7" width="34" height="34" rx="5"/><path d="M14 31V21M24 31V15M34 31V24"/></svg>;
    case "chart":
    case "scatter":
      return <svg {...common}><path d="M8 39V9M8 39h32"/><circle cx="16" cy="29" r="2"/><circle cx="23" cy="23" r="2"/><circle cx="30" cy="27" r="2"/><circle cx="36" cy="15" r="2"/></svg>;
    case "model":
    case "brain":
      return <svg {...common}><path d="M19 9a7 7 0 0 0-7 7v2a7 7 0 0 0 0 12v2a7 7 0 0 0 12 5 7 7 0 0 0 12-5v-2a7 7 0 0 0 0-12v-2a7 7 0 0 0-12-5 7 7 0 0 0-5-2Z"/><path d="M24 11v26M14 20h5M29 17h5M14 31h5M29 29h5"/></svg>;
    case "transform":
    case "transfer":
      return <svg {...common}><path d="M8 16h26M28 10l6 6-6 6M40 32H14M20 26l-6 6 6 6"/></svg>;
    case "language":
      return <svg {...common}><path d="M8 10h20v16H17l-7 6v-6H8V10Z"/><path d="M31 19h9v13h-3v6l-6-6h-4"/></svg>;
    case "chain":
      return <svg {...common}><path d="m19 29-4 4a7 7 0 0 1-10-10l7-7a7 7 0 0 1 10 0M29 19l4-4a7 7 0 1 1 10 10l-7 7a7 7 0 0 1-10 0"/><path d="m17 31 14-14"/></svg>;
    case "retrieval":
      return <svg {...common}><path d="M8 9h25v30H8z"/><path d="M14 16h13M14 22h13M14 28h8"/><circle cx="34" cy="32" r="7"/></svg>;
    case "wind":
      return <svg {...common}><path d="M7 15h25c6 0 6-8 0-8-3 0-5 2-5 4M7 24h33M7 33h22c6 0 6 8 0 8-3 0-5-2-5-4"/></svg>;
    case "tune":
      return <svg {...common}><path d="M9 13h30M9 24h30M9 35h30"/><circle cx="18" cy="13" r="4"/><circle cx="31" cy="24" r="4"/><circle cx="22" cy="35" r="4"/></svg>;
    case "route":
      return <svg {...common}><circle cx="12" cy="12" r="4"/><circle cx="36" cy="36" r="4"/><path d="M16 12h6c8 0 8 12 0 12h-2c-8 0-8 12 0 12h12"/></svg>;
    case "evaluate":
      return <svg {...common}><rect x="9" y="7" width="30" height="34" rx="4"/><path d="m16 24 5 5 11-12M16 35h16"/></svg>;
    case "layers":
      return <svg {...common}><path d="m24 7 17 9-17 9L7 16l17-9Z"/><path d="m9 24 15 8 15-8M9 32l15 8 15-8"/></svg>;
    case "heatmap":
      return <svg {...common}><rect x="8" y="8" width="12" height="12" rx="2"/><rect x="28" y="8" width="12" height="12" rx="2"/><rect x="8" y="28" width="12" height="12" rx="2"/><rect x="28" y="28" width="12" height="12" rx="2"/></svg>;
    case "scan":
      return <svg {...common}><path d="M17 8H8v9M31 8h9v9M17 40H8v-9M31 40h9v-9"/><rect x="15" y="15" width="18" height="18" rx="4"/></svg>;
    case "sparkle":
      return <svg {...common}><path d="m24 6 3 9 9 3-9 3-3 9-3-9-9-3 9-3 3-9Z"/></svg>;
    case "network":
    case "segment":
      return <svg {...common}><circle cx="12" cy="12" r="4"/><circle cx="36" cy="12" r="4"/><circle cx="12" cy="36" r="4"/><circle cx="36" cy="36" r="4"/><circle cx="24" cy="24" r="4"/><path d="m15 15 6 6m6 6 6 6m0-18-6 6m-6 6-6 6"/></svg>;
    case "platform":
    case "workspace":
    case "admin":
    case "office":
      return <svg {...common}><rect x="8" y="8" width="14" height="14" rx="3"/><rect x="26" y="8" width="14" height="14" rx="3"/><rect x="8" y="26" width="14" height="14" rx="3"/><rect x="26" y="26" width="14" height="14" rx="3"/></svg>;
    case "crm":
      return <svg {...common}><circle cx="17" cy="18" r="6"/><circle cx="32" cy="19" r="5"/><path d="M7 39c1-8 6-12 12-12s11 4 12 12M29 28c6 0 10 4 11 11"/></svg>;
    case "cloud":
      return <svg {...common}><path d="M14 36h21a8 8 0 0 0 1-15.9A11 11 0 0 0 15 18a9 9 0 0 0-1 18Z"/></svg>;
    case "terminal":
      return <svg {...common}><rect x="7" y="9" width="34" height="30" rx="4"/><path d="m14 19 6 5-6 5M24 31h10"/></svg>;
    case "code":
      return <svg {...common}><path d="m17 14-10 10 10 10M31 14l10 10-10 10M27 9l-6 30"/></svg>;
    case "pipeline":
      return <svg {...common}><rect x="6" y="18" width="10" height="12" rx="2"/><rect x="32" y="18" width="10" height="12" rx="2"/><path d="M16 24h16M26 19l5 5-5 5"/><path d="M11 18V10h26v8"/></svg>;
    case "chat":
      return <svg {...common}><path d="M8 10h32v20H22l-9 8v-8H8V10Z"/><path d="M15 18h18M15 24h11"/></svg>;
    case "folder":
      return <svg {...common}><path d="M7 14a3 3 0 0 1 3-3h9l4 5h15a3 3 0 0 1 3 3v17a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3V14Z"/></svg>;
    case "ticket":
      return <svg {...common}><path d="M7 14h34v6a4 4 0 0 0 0 8v6H7v-6a4 4 0 0 0 0-8v-6Z"/><path d="M30 14v20"/></svg>;
    case "gauge":
      return <svg {...common}><path d="M8 32a16 16 0 1 1 32 0"/><path d="m24 32 8-10"/><circle cx="24" cy="32" r="2"/></svg>;
    case "cycle":
      return <svg {...common}><path d="M38 20a15 15 0 0 0-27-5M10 28a15 15 0 0 0 27 5"/><path d="M11 7v8h8M37 41v-8h-8"/></svg>;
    case "shield":
      return <svg {...common}><path d="M24 6 39 12v11c0 9-6.5 16-15 19C15.5 39 9 32 9 23V12l15-6Z"/><path d="m17 24 5 5 9-10"/></svg>;
    case "doc":
      return <svg {...common}><path d="M12 6h17l9 9v27H12V6Z"/><path d="M29 6v9h9M18 24h14M18 30h14M18 36h9"/></svg>;
    case "people":
      return <svg {...common}><circle cx="17" cy="17" r="6"/><circle cx="32" cy="18" r="5"/><path d="M6 39c1-8 6-12 11-12s10 4 11 12M27 28c6 0 10 4 11 11"/></svg>;
    case "handshake":
      return <svg {...common}><path d="M6 22 14 14l8 4 6-4 14 8-8 10-6-4-4 4-6-4-4 2-8-8Z"/><path d="m22 18 6 6"/></svg>;
    default:
      return <svg {...common}><circle cx="24" cy="24" r="16"/><path d="M16 24h16M24 16v16"/></svg>;
  }
}

export function SkillMark({ skill }: { skill: Skill }) {
  return (
    <span className={skill.logo ? "atlas-skill-mark atlas-skill-mark--brand" : "atlas-skill-mark atlas-skill-mark--method"} aria-hidden="true">
      {skill.logo ? (
        <img src={skill.logo} alt="" width="44" height="44" loading="eager" decoding="sync" />
      ) : (
        <MethodIcon name={skill.icon} />
      )}
    </span>
  );
}

