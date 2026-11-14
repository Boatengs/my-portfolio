// Small illustrations that hint at what each project does. Drawn on a dark
// panel: "A" is the project's accent, "M" a muted line colour.
const A = "var(--vis)";
const M = "rgba(255,255,255,0.22)";
const F = "rgba(255,255,255,0.08)";

const bars = (values: number[], x0: number, w: number, gap: number, base: number, scale: number, hot: (i: number) => boolean) =>
  values.map((v, i) => (
    <rect key={i} x={x0 + i * (w + gap)} y={base - v * scale} width={w} height={v * scale} rx={2} fill={hot(i) ? A : M} />
  ));

const line = (pts: number[], x0: number, step: number, base: number, scale: number) =>
  pts.map((v, i) => `${i ? "L" : "M"}${x0 + i * step},${base - v * scale}`).join(" ");

function Visual({ slug }: { slug: string }) {
  switch (slug) {
    case "countersignal": {
      const v = [22, 26, 24, 28, 25, 27, 52, 68, 74, 80];
      return (
        <>
          <line x1="40" y1="70" x2="370" y2="70" stroke={A} strokeDasharray="5 6" strokeWidth="1.5" />
          <text x="370" y="62" textAnchor="end" fill={A} fontSize="11" fontFamily="monospace">ALARM LIMIT</text>
          {bars(v, 40, 24, 9, 160, 1.15, (i) => i >= 6)}
          <circle cx={40 + 6 * 33 + 12} cy={160 - 52 * 1.15 - 14} r="6" fill="none" stroke={A} strokeWidth="2" />
        </>
      );
    }
    case "recoverylens": {
      const hot = new Set([3, 9, 10, 17, 22, 27, 28, 33]);
      return (
        <>
          {Array.from({ length: 40 }, (_, i) => (
            <rect key={i} x={60 + (i % 10) * 29} y={30 + Math.floor(i / 10) * 32} width="25" height="28" rx="3"
              fill={hot.has(i) ? A : i % 3 ? M : F} />
          ))}
        </>
      );
    }
    case "indonesia-earthquake-activity": {
      const pts: [number, number, number][] = [[70, 110, 4], [110, 96, 6], [150, 118, 5], [190, 104, 12], [230, 122, 5], [270, 112, 8], [310, 128, 4], [340, 120, 6]];
      return (
        <>
          <path d="M40 120 C 120 80, 220 150, 370 115" stroke={M} strokeWidth="18" strokeLinecap="round" fill="none" opacity="0.5" />
          {pts.map(([x, y, r], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r={r * 2.4} fill="none" stroke={A} strokeOpacity="0.35" />
              <circle cx={x} cy={y} r={r} fill={A} />
            </g>
          ))}
        </>
      );
    }
    case "online-retail-sales-returns": {
      const s = [30, 34, 32, 38, 36, 44, 48, 58, 72, 80, 64, 40];
      return (
        <>
          <line x1="40" y1="120" x2="370" y2="120" stroke={M} />
          {bars(s, 46, 18, 9, 120, 1.1, (i) => i === 9)}
          {s.map((v, i) => (
            <rect key={i} x={46 + i * 27} y="122" width="18" height={v * 0.18 + 3} rx="2" fill={A} opacity="0.55" />
          ))}
        </>
      );
    }
    case "delta-fpna": {
      const hub: [number, number] = [190, 120];
      const ends: [number, number][] = [[60, 70], [110, 40], [280, 45], [340, 80], [330, 140], [80, 145]];
      return (
        <>
          {ends.map(([x, y], i) => (
            <path key={i} d={`M${hub[0]} ${hub[1]} Q ${(hub[0] + x) / 2} ${Math.min(hub[1], y) - 40} ${x} ${y}`} stroke={i === 2 ? A : M} strokeWidth="1.8" fill="none" />
          ))}
          {ends.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="4" fill="#fff" opacity="0.8" />)}
          <circle cx={hub[0]} cy={hub[1]} r="9" fill={A} />
        </>
      );
    }
    case "gridpulse-energy-grid-analytics": {
      const actual = [40, 34, 32, 40, 60, 78, 86, 80, 70, 74, 90, 96, 84, 66, 52];
      const eia = [44, 40, 36, 36, 52, 70, 92, 90, 76, 68, 82, 104, 96, 74, 58];
      return (
        <>
          <path d={line(eia, 40, 23, 160, 1.2)} stroke={M} strokeWidth="2" strokeDasharray="6 5" fill="none" />
          <path d={line(actual, 40, 23, 160, 1.2)} stroke={A} strokeWidth="3" fill="none" strokeLinejoin="round" />
          <text x="40" y="30" fill={A} fontSize="11" fontFamily="monospace">DEMAND</text>
          <text x="110" y="30" fill="rgba(255,255,255,0.6)" fontSize="11" fontFamily="monospace">- - EIA FORECAST</text>
        </>
      );
    }
    case "water-quality":
      return (
        <>
          {[0, 1, 2].map((r) => (
            <path key={r} d={`M30 ${80 + r * 28} q 30 -14 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0`} stroke={r === 1 ? A : M} strokeWidth="2" fill="none" />
          ))}
          <circle cx="272" cy="108" r="9" fill={A} />
          <circle cx="272" cy="108" r="20" fill="none" stroke={A} strokeOpacity="0.4" />
        </>
      );
    case "healthcare-modeling":
      return (
        <>
          <rect x="60" y="40" width="70" height="70" rx="12" fill="none" stroke={A} strokeWidth="2.5" />
          <path d="M95 55 v40 M75 75 h40" stroke={A} strokeWidth="6" strokeLinecap="round" />
          {bars([40, 70, 55], 180, 40, 18, 150, 1.2, (i) => i === 1)}
        </>
      );
    case "sentiment-analyzer":
      return (
        <>
          <rect x="50" y="40" width="150" height="46" rx="14" fill={A} />
          <rect x="70" y="58" width="90" height="8" rx="4" fill="#0B0F14" opacity="0.55" />
          <rect x="190" y="104" width="160" height="46" rx="14" fill="none" stroke={M} strokeWidth="2" />
          <rect x="210" y="122" width="100" height="8" rx="4" fill={M} />
          <text x="212" y="78" fill={A} fontSize="22" fontWeight="700">+</text>
          <text x="66" y="138" fill="rgba(255,255,255,0.55)" fontSize="22" fontWeight="700">−</text>
        </>
      );
    case "sports-chatbot":
      return (
        <>
          <rect x="40" y="40" width="170" height="40" rx="14" fill="none" stroke={M} strokeWidth="2" />
          <rect x="150" y="96" width="200" height="54" rx="14" fill={A} />
          <rect x="168" y="114" width="120" height="7" rx="3.5" fill="#0B0F14" opacity="0.55" />
          <rect x="168" y="128" width="80" height="7" rx="3.5" fill="#0B0F14" opacity="0.55" />
          <circle cx="330" cy="58" r="20" fill="none" stroke={A} strokeWidth="2.5" />
          <path d="M310 58 h40 M330 38 c-12 12 -12 28 0 40 M330 38 c12 12 12 28 0 40" stroke={A} strokeWidth="1.6" fill="none" />
        </>
      );
    case "medical-qa":
      return (
        <>
          <rect x="40" y="36" width="190" height="44" rx="14" fill="none" stroke={M} strokeWidth="2" />
          <text x="60" y="64" fill="rgba(255,255,255,0.7)" fontSize="16" fontFamily="monospace">Q</text>
          <rect x="120" y="96" width="240" height="54" rx="14" fill={A} />
          <text x="140" y="129" fill="#0B0F14" fontSize="16" fontFamily="monospace">A</text>
          <path d="M318 112 v22 M307 123 h22" stroke="#0B0F14" strokeWidth="5" strokeLinecap="round" />
        </>
      );
    case "skin-classifier":
      return (
        <>
          <circle cx="200" cy="96" r="62" fill={A} opacity="0.12" />
          <circle cx="200" cy="96" r="42" fill={A} opacity="0.25" />
          <circle cx="210" cy="90" r="22" fill={A} opacity="0.7" />
          <circle cx="200" cy="96" r="62" fill="none" stroke={M} strokeDasharray="4 6" />
          <text x="290" y="56" fill={A} fontSize="11" fontFamily="monospace">GRAD-CAM</text>
        </>
      );
    case "object-detector":
      return (
        <>
          <circle cx="110" cy="110" r="30" fill={M} />
          <rect x="220" y="70" width="80" height="70" rx="8" fill={M} />
          <rect x="72" y="72" width="76" height="76" fill="none" stroke={A} strokeWidth="2.5" />
          <rect x="210" y="60" width="100" height="90" fill="none" stroke={A} strokeWidth="2.5" />
          <rect x="72" y="56" width="58" height="16" fill={A} />
          <rect x="210" y="44" width="70" height="16" fill={A} />
        </>
      );
    case "skin-lesion-segmentation":
      return (
        <>
          <path d="M150 60 C 200 30, 270 60, 262 105 C 255 150, 180 158, 150 130 C 120 105, 115 80, 150 60 Z" fill={M} />
          <path d="M150 60 C 200 30, 270 60, 262 105 C 255 150, 180 158, 150 130 C 120 105, 115 80, 150 60 Z" fill="none" stroke={A} strokeWidth="3" strokeDasharray="7 5" />
          <text x="290" y="160" fill={A} fontSize="11" fontFamily="monospace">DICE 0.91</text>
        </>
      );
    case "llm-evaluation": {
      const base = [46, 25, 35, 55, 37];
      const tuned = [55, 36, 45, 56, 39];
      return (
        <>
          {base.map((v, i) => (
            <g key={i}>
              <rect x={60 + i * 62} y={160 - v * 2} width="20" height={v * 2} rx="2" fill={M} />
              <rect x={84 + i * 62} y={160 - tuned[i] * 2} width="20" height={tuned[i] * 2} rx="2" fill={A} />
            </g>
          ))}
        </>
      );
    }
    case "pfas-water-decision-intelligence":
      return (
        <>
          {[[90, 3], [150, 1], [210, 2], [270, 1], [330, 3]].map(([x, tier], i) => (
            <g key={i}>
              <path d={`M${x} 50 C ${x - 22} 84, ${x - 22} 110, ${x} 112 C ${x + 22} 110, ${x + 22} 84, ${x} 50 Z`}
                fill={tier === 1 ? A : "none"} stroke={tier === 1 ? A : M} strokeWidth="2" />
              <text x={x} y="148" textAnchor="middle" fill={tier === 1 ? A : "rgba(255,255,255,0.55)"} fontSize="11" fontFamily="monospace">{`T${tier}`}</text>
            </g>
          ))}
        </>
      );
    case "wastewater-infrastructure-analytics": {
      const nodes: [number, number][] = [[50, 90], [130, 60], [130, 130], [220, 90], [300, 50], [300, 140], [360, 95]];
      const edges = [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5], [4, 6], [5, 6]];
      return (
        <>
          {edges.map(([a, b], i) => (
            <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke={i === 5 ? A : M} strokeWidth="6" strokeLinecap="round" />
          ))}
          {nodes.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="8" fill={i === 5 ? A : "#fff"} opacity={i === 5 ? 1 : 0.75} />)}
        </>
      );
    }
    case "financial-crime-risk-intelligence": {
      const n: [number, number][] = [[60, 60], [110, 120], [160, 50], [200, 110], [250, 60], [290, 130], [340, 80], [140, 160], [230, 160]];
      const e = [[0, 2], [0, 1], [1, 3], [2, 3], [2, 4], [3, 4], [3, 5], [4, 6], [5, 6], [1, 7], [3, 8], [5, 8]];
      const flagged = new Set([3, 4, 6]);
      return (
        <>
          {e.map(([a, b], i) => (
            <line key={i} x1={n[a][0]} y1={n[a][1]} x2={n[b][0]} y2={n[b][1]}
              stroke={flagged.has(a) && flagged.has(b) ? A : M} strokeWidth="1.6" />
          ))}
          {n.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={flagged.has(i) ? 9 : 6} fill={flagged.has(i) ? A : "#fff"} opacity={flagged.has(i) ? 1 : 0.6} />
          ))}
        </>
      );
    }
    case "world-happiness-analysis":
      return (
        <>
          <circle cx="110" cy="96" r="56" fill="none" stroke={M} strokeWidth="2" />
          <ellipse cx="110" cy="96" rx="24" ry="56" fill="none" stroke={M} />
          <path d="M54 96 h112 M62 66 h96 M62 126 h96" stroke={M} />
          {[96, 84, 72, 60].map((w, i) => (
            <rect key={i} x="210" y={50 + i * 26} width={w + 60} height="16" rx="3" fill={i === 0 ? A : M} />
          ))}
        </>
      );
    default:
      return (
        <>
          {bars([30, 50, 40, 70, 60], 100, 30, 14, 150, 1.4, (i) => i === 3)}
        </>
      );
  }
}

export function ProjectVisual({ slug }: { slug: string }) {
  return (
    <svg className="project-visual-art" viewBox="0 0 400 180" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
      <Visual slug={slug} />
    </svg>
  );
}
