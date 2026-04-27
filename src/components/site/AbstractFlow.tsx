// Hero diagram — "Learning Atlas"
//
// A premium, information-dense visualization of how Lumintora actually works.
// Structured as a real product surface, not decoration:
//
//   ┌── LEFT RAIL ──────────┐  ┌── ATLAS (knowledge graph) ──┐  ┌── RIGHT RAIL ─┐
//   │  Goal · Context       │  │  Concept nodes w/ mastery   │  │  Next up       │
//   │  Inputs the system    │  │  Edges weighted by          │  │  Live signals  │
//   │  is reading right now │  │  prerequisite strength      │  │  Mastery curve │
//   └───────────────────────┘  └─────────────────────────────┘  └───────────────┘
//
// Pure SVG. No images, no fake screenshots. All "data" is real, hand-tuned,
// and visually consistent with the design system tokens.

export function AbstractFlow() {
  type Tier = "core" | "applied" | "frontier" | "goal";
  type Node = {
    id: string;
    label: string;
    x: number;
    y: number;
    r: number;
    mastery: number;
    tier: Tier;
    active?: boolean;
  };
  type Edge = { from: string; to: string; w: number; hot?: boolean };

  // Concept graph — positions are deliberate (foundations on the left,
  // applied skills on the right). Mastery is 0..1.
  const nodes: Node[] = [
    { id: "fnd", label: "Foundations",   x: 110, y: 235, r: 16, mastery: 1.0,  tier: "core" },
    { id: "lin", label: "Linear Algebra", x: 205, y: 150, r: 14, mastery: 0.92, tier: "core" },
    { id: "prb", label: "Probability",    x: 205, y: 320, r: 14, mastery: 0.78, tier: "core" },
    { id: "opt", label: "Optimization",   x: 320, y: 110, r: 13, mastery: 0.64, tier: "applied" },
    { id: "stat",label: "Statistics",     x: 320, y: 240, r: 13, mastery: 0.71, tier: "applied" },
    { id: "ml",  label: "ML Models",      x: 320, y: 360, r: 13, mastery: 0.55, tier: "applied" },
    { id: "dl",  label: "Deep Learning",  x: 445, y: 175, r: 14, mastery: 0.38, tier: "frontier", active: true },
    { id: "evl", label: "Evaluation",     x: 445, y: 305, r: 12, mastery: 0.46, tier: "applied" },
    { id: "goal",label: "Goal · LLM Eng", x: 555, y: 240, r: 18, mastery: 0.0,  tier: "goal" },
  ] as const;

  const edges = [
    { from: "fnd", to: "lin", w: 0.95 },
    { from: "fnd", to: "prb", w: 0.95 },
    { from: "lin", to: "opt", w: 0.7 },
    { from: "lin", to: "stat", w: 0.55 },
    { from: "prb", to: "stat", w: 0.85 },
    { from: "prb", to: "ml", w: 0.6 },
    { from: "opt", to: "dl", w: 0.85, hot: true },
    { from: "stat", to: "dl", w: 0.4 },
    { from: "stat", to: "evl", w: 0.6 },
    { from: "ml", to: "evl", w: 0.7 },
    { from: "ml", to: "dl", w: 0.5 },
    { from: "dl", to: "goal", w: 0.95, hot: true },
    { from: "evl", to: "goal", w: 0.6 },
  ] as const;

  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

  // Mastery sparkline (last 14 sessions) — real-looking, monotonic-ish
  const spark = [0.18, 0.22, 0.21, 0.27, 0.31, 0.30, 0.36, 0.41, 0.44, 0.47, 0.52, 0.55, 0.61, 0.66];
  const sparkPath = spark
    .map((v, i) => {
      const x = 12 + (i * (152 - 12)) / (spark.length - 1);
      const y = 44 - v * 32;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <div className="relative aspect-[5/4] w-full">
      {/* Bright ambient wash */}
      <div className="ambient-orb absolute inset-x-6 top-4 bottom-4" aria-hidden />

      <svg
        viewBox="0 0 640 500"
        className="relative h-full w-full"
        fill="none"
        aria-hidden
        role="img"
      >
        <defs>
          {/* Subtle dotted backdrop */}
          <pattern id="atlas-dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" fill="oklch(0.6 0.18 280 / 0.14)" />
          </pattern>
          <radialGradient id="atlas-mask" cx="50%" cy="50%" r="65%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="70%" stopColor="white" stopOpacity="0.5" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="atlas-fade"><rect width="640" height="500" fill="url(#atlas-mask)" /></mask>

          {/* Edge gradient — cool to warm depending on activation */}
          <linearGradient id="edge-cool" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.65 0.18 280 / 0.55)" />
            <stop offset="100%" stopColor="oklch(0.7 0.16 230 / 0.55)" />
          </linearGradient>
          <linearGradient id="edge-hot" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.65 0.22 280)" />
            <stop offset="100%" stopColor="oklch(0.78 0.18 290)" />
          </linearGradient>

          {/* Node fills by tier */}
          <radialGradient id="fill-core" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="oklch(0.99 0 0)" />
            <stop offset="100%" stopColor="oklch(0.93 0.02 270)" />
          </radialGradient>
          <radialGradient id="fill-applied" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="oklch(0.99 0 0)" />
            <stop offset="100%" stopColor="oklch(0.95 0.04 280)" />
          </radialGradient>
          <radialGradient id="fill-frontier" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="oklch(0.92 0.08 280)" />
            <stop offset="100%" stopColor="oklch(0.62 0.22 280)" />
          </radialGradient>
          <radialGradient id="fill-goal" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="oklch(0.95 0.06 230)" />
            <stop offset="100%" stopColor="oklch(0.65 0.18 230)" />
          </radialGradient>

          {/* Sparkline gradient */}
          <linearGradient id="spark-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.65 0.22 280)" />
            <stop offset="100%" stopColor="oklch(0.7 0.16 230)" />
          </linearGradient>
          <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.65 0.22 280 / 0.25)" />
            <stop offset="100%" stopColor="oklch(0.65 0.22 280 / 0)" />
          </linearGradient>

          <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Backdrop field */}
        <g mask="url(#atlas-fade)">
          <rect width="640" height="500" fill="url(#atlas-dots)" />
        </g>

        {/* ── FRAME / CHROME ──────────────────────────────────────────── */}
        <g>
          {/* Outer card */}
          <rect
            x="16" y="16" width="608" height="468" rx="18"
            fill="oklch(1 0 0 / 0.55)"
            stroke="oklch(0.6 0.04 270 / 0.18)"
            strokeWidth="1"
          />
          {/* Top status bar */}
          <line x1="16" y1="56" x2="624" y2="56" stroke="oklch(0.6 0.04 270 / 0.14)" />
          <g fontFamily="Inter, ui-sans-serif, system-ui, sans-serif" fontSize="9.5" letterSpacing="0.18em" fontWeight="500">
            <text x="34" y="40" fill="oklch(0.3 0.02 270)">LEARNING ATLAS</text>
            <text x="160" y="40" fill="oklch(0.5 0.02 270 / 0.75)">v 0.4 · live</text>
          </g>
          {/* Live indicator */}
          <g transform="translate(596 36)">
            <circle r="3.2" fill="oklch(0.7 0.18 150)" className="pulse-dot" />
            <text x="-10" y="3" textAnchor="end" fontFamily="Inter, ui-sans-serif, sans-serif" fontSize="9" letterSpacing="0.18em" fill="oklch(0.45 0.05 150)">SYNCED</text>
          </g>
          {/* Vertical rails dividing the three regions */}
          <line x1="180" y1="56" x2="180" y2="484" stroke="oklch(0.6 0.04 270 / 0.12)" />
          <line x1="500" y1="56" x2="500" y2="484" stroke="oklch(0.6 0.04 270 / 0.12)" />
        </g>

        {/* ── LEFT RAIL · INPUTS ──────────────────────────────────────── */}
        <g fontFamily="Inter, ui-sans-serif, sans-serif">
          <text x="34" y="82" fontSize="9" letterSpacing="0.22em" fill="oklch(0.45 0.02 270)" fontWeight="500">INPUT</text>

          {/* Goal pill */}
          <g transform="translate(34 100)">
            <rect width="132" height="44" rx="10" fill="oklch(0.985 0.005 270)" stroke="oklch(0.6 0.04 270 / 0.2)" />
            <text x="10" y="17" fontSize="8" letterSpacing="0.16em" fill="oklch(0.5 0.02 270)">GOAL</text>
            <text x="10" y="33" fontSize="11.5" fontWeight="500" fill="oklch(0.2 0.02 270)">LLM Engineer</text>
          </g>

          {/* Context rows */}
          <g transform="translate(34 162)">
            <text fontSize="9" letterSpacing="0.18em" fill="oklch(0.45 0.02 270)" fontWeight="500">CONTEXT</text>
            {[
              { k: "Level",   v: "Intermediate" },
              { k: "Pace",    v: "5h / week" },
              { k: "Style",   v: "Build-first" },
              { k: "Window",  v: "12 weeks" },
            ].map((r, i) => (
              <g key={r.k} transform={`translate(0 ${18 + i * 24})`}>
                <text x="0" y="10" fontSize="9" fill="oklch(0.5 0.02 270)" letterSpacing="0.04em">{r.k}</text>
                <text x="132" y="10" textAnchor="end" fontSize="10" fill="oklch(0.22 0.02 270)" fontWeight="500">{r.v}</text>
                <line x1="0" y1="16" x2="132" y2="16" stroke="oklch(0.6 0.04 270 / 0.14)" />
              </g>
            ))}
          </g>

          {/* Signals being read */}
          <g transform="translate(34 290)">
            <text fontSize="9" letterSpacing="0.18em" fill="oklch(0.45 0.02 270)" fontWeight="500">READING</text>
            {[
              { dot: "oklch(0.7 0.18 150)", t: "Quiz · 92% retention" },
              { dot: "oklch(0.65 0.22 280)", t: "Note · 4 new concepts" },
              { dot: "oklch(0.78 0.16 70)",  t: "Stuck · Backprop intuition" },
            ].map((r, i) => (
              <g key={i} transform={`translate(0 ${20 + i * 22})`}>
                <circle cx="4" cy="6" r="3" fill={r.dot} />
                <text x="14" y="10" fontSize="10" fill="oklch(0.25 0.02 270)">{r.t}</text>
              </g>
            ))}
          </g>

          {/* Footnote */}
          <text x="34" y="468" fontSize="8" letterSpacing="0.18em" fill="oklch(0.55 0.02 270 / 0.7)">SESSION · 047</text>
        </g>

        {/* ── CENTER · KNOWLEDGE GRAPH ────────────────────────────────── */}
        <g>
          <text x="200" y="82" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="0.22em" fill="oklch(0.45 0.02 270)" fontWeight="500">KNOWLEDGE GRAPH</text>

          {/* Light tier band labels (vertical guides) */}
          <g fontFamily="Inter, sans-serif" fontSize="7.5" letterSpacing="0.22em" fill="oklch(0.55 0.02 270 / 0.6)">
            <text x="110" y="445" textAnchor="middle">CORE</text>
            <text x="320" y="445" textAnchor="middle">APPLIED</text>
            <text x="500" y="445" textAnchor="middle">FRONTIER</text>
          </g>
          <g stroke="oklch(0.55 0.02 270 / 0.18)" strokeDasharray="2 4">
            <line x1="110" y1="430" x2="110" y2="100" />
            <line x1="320" y1="430" x2="320" y2="100" />
            <line x1="500" y1="430" x2="500" y2="100" />
          </g>

          {/* Edges */}
          <g>
            {edges.map((e, i) => {
              const a = byId[e.from];
              const b = byId[e.to];
              const mx = (a.x + b.x) / 2;
              const my = (a.y + b.y) / 2 - 10;
              const d = `M${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`;
              return (
                <path
                  key={i}
                  d={d}
                  stroke={e.hot ? "url(#edge-hot)" : "url(#edge-cool)"}
                  strokeWidth={e.hot ? 1.6 : 0.9 + e.w * 0.6}
                  strokeOpacity={e.hot ? 0.95 : 0.45 + e.w * 0.3}
                  fill="none"
                  strokeLinecap="round"
                />
              );
            })}
          </g>

          {/* Animated signal travelling the hot path: fnd→lin→opt→dl→goal */}
          <g>
            <circle r="3" fill="oklch(0.78 0.18 290)" filter="url(#node-glow)">
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                path="M110 235 Q 157 182 205 150 Q 262 120 320 110 Q 382 142 445 175 Q 500 207 555 240"
              />
            </circle>
            <circle r="2" fill="oklch(0.78 0.18 290)" opacity="0.6">
              <animateMotion
                dur="6s" begin="2s"
                repeatCount="indefinite"
                path="M110 235 Q 157 182 205 150 Q 262 120 320 110 Q 382 142 445 175 Q 500 207 555 240"
              />
            </circle>
          </g>

          {/* Nodes */}
          <g fontFamily="Inter, sans-serif">
            {nodes.map((n) => {
              const fill =
                n.tier === "goal"     ? "url(#fill-goal)" :
                n.tier === "frontier" ? "url(#fill-frontier)" :
                n.tier === "applied"  ? "url(#fill-applied)" :
                                        "url(#fill-core)";
              const stroke =
                n.tier === "goal"     ? "oklch(0.6 0.16 230 / 0.6)" :
                n.tier === "frontier" ? "oklch(0.55 0.22 280 / 0.7)" :
                                        "oklch(0.6 0.04 270 / 0.35)";
              const isFrontier = n.tier === "frontier";
              const isGoal = n.tier === "goal";
              return (
                <g key={n.id}>
                  {/* Mastery ring (background) */}
                  <circle cx={n.x} cy={n.y} r={n.r + 4} fill="none" stroke="oklch(0.6 0.04 270 / 0.18)" strokeWidth="1.25" />
                  {/* Mastery ring (filled arc) */}
                  <circle
                    cx={n.x} cy={n.y} r={n.r + 4}
                    fill="none"
                    stroke={isGoal ? "oklch(0.65 0.18 230)" : "oklch(0.6 0.22 280)"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeDasharray={`${(n.mastery * 2 * Math.PI * (n.r + 4)).toFixed(2)} ${(2 * Math.PI * (n.r + 4)).toFixed(2)}`}
                    transform={`rotate(-90 ${n.x} ${n.y})`}
                    opacity={isGoal ? 0.7 : 0.85}
                  />
                  {/* Node body */}
                  <circle
                    cx={n.x} cy={n.y} r={n.r}
                    fill={fill}
                    stroke={stroke}
                    strokeWidth="1"
                    filter={isFrontier || isGoal ? "url(#node-glow)" : undefined}
                  />
                  {/* Active pulse for the focus node */}
                  {n.active && (
                    <circle cx={n.x} cy={n.y} r={n.r + 8} fill="none" stroke="oklch(0.6 0.22 280 / 0.5)" strokeWidth="1" className="pulse-dot" />
                  )}
                  {/* Inner mark for goal */}
                  {isGoal && (
                    <g stroke="oklch(0.99 0 0 / 0.95)" strokeWidth="1.1">
                      <line x1={n.x - 5} y1={n.y} x2={n.x + 5} y2={n.y} />
                      <line x1={n.x} y1={n.y - 5} x2={n.x} y2={n.y + 5} />
                    </g>
                  )}
                  {/* Label */}
                  <text
                    x={n.x}
                    y={n.y + n.r + 16}
                    textAnchor="middle"
                    fontSize={isGoal ? 10.5 : 9.5}
                    fontWeight={isGoal || isFrontier ? 600 : 500}
                    fill={isGoal ? "oklch(0.25 0.06 230)" : "oklch(0.22 0.02 270)"}
                    letterSpacing="0.02em"
                  >
                    {n.label}
                  </text>
                  {/* Mastery percentage */}
                  {!isGoal && (
                    <text
                      x={n.x}
                      y={n.y + n.r + 28}
                      textAnchor="middle"
                      fontSize="8"
                      fill="oklch(0.5 0.02 270 / 0.8)"
                      letterSpacing="0.08em"
                      fontVariantNumeric="tabular-nums"
                    >
                      {Math.round(n.mastery * 100)}%
                    </text>
                  )}
                </g>
              );
            })}
          </g>
        </g>

        {/* ── RIGHT RAIL · ADAPTIVE OUTPUT ────────────────────────────── */}
        <g fontFamily="Inter, sans-serif">
          <text x="518" y="82" fontSize="9" letterSpacing="0.22em" fill="oklch(0.45 0.02 270)" fontWeight="500">NEXT UP</text>

          {/* Recommended next step card */}
          <g transform="translate(518 100)">
            <rect width="92" height="58" rx="10" fill="oklch(0.985 0.005 270)" stroke="oklch(0.55 0.22 280 / 0.35)" />
            <text x="10" y="16" fontSize="7.5" letterSpacing="0.18em" fill="oklch(0.45 0.18 280)">RECOMMENDED</text>
            <text x="10" y="32" fontSize="10.5" fontWeight="600" fill="oklch(0.2 0.02 270)">Backprop</text>
            <text x="10" y="46" fontSize="8.5" fill="oklch(0.5 0.02 270)">22 min · build</text>
          </g>

          {/* Queue */}
          <g transform="translate(518 174)">
            <text fontSize="9" letterSpacing="0.18em" fill="oklch(0.45 0.02 270)" fontWeight="500">QUEUE</text>
            {[
              { t: "Optimizers", m: "18m" },
              { t: "Eval Loops", m: "26m" },
              { t: "Tokenizers", m: "14m" },
            ].map((r, i) => (
              <g key={i} transform={`translate(0 ${18 + i * 22})`}>
                <text x="0" y="10" fontSize="10" fill="oklch(0.25 0.02 270)" fontWeight="500">{r.t}</text>
                <text x="92" y="10" textAnchor="end" fontSize="9" fill="oklch(0.5 0.02 270)" fontVariantNumeric="tabular-nums">{r.m}</text>
                <line x1="0" y1="16" x2="92" y2="16" stroke="oklch(0.6 0.04 270 / 0.14)" />
              </g>
            ))}
          </g>

          {/* Mastery trend sparkline */}
          <g transform="translate(518 282)">
            <text fontSize="9" letterSpacing="0.18em" fill="oklch(0.45 0.02 270)" fontWeight="500">MASTERY · 14d</text>
            <g transform="translate(-6 22)">
              {/* axis */}
              <line x1="12" y1="44" x2="152" y2="44" stroke="oklch(0.6 0.04 270 / 0.2)" />
              {/* fill */}
              <path d={`${sparkPath} L 152 44 L 12 44 Z`} fill="url(#spark-fill)" />
              {/* line */}
              <path d={sparkPath} stroke="url(#spark-grad)" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              {/* end dot */}
              <circle cx="152" cy={(44 - spark[spark.length - 1] * 32).toFixed(1)} r="2.5" fill="oklch(0.7 0.16 230)" />
              {/* numeric */}
              <text x="12" y="60" fontSize="14" fontWeight="600" fill="oklch(0.2 0.02 270)" fontVariantNumeric="tabular-nums">66%</text>
              <text x="44" y="60" fontSize="9" fill="oklch(0.5 0.05 150)" letterSpacing="0.04em">▲ 5pt</text>
            </g>
          </g>

          {/* Recompute pill */}
          <g transform="translate(518 412)">
            <rect width="92" height="26" rx="13" fill="oklch(0.18 0.02 270)" />
            <circle cx="14" cy="13" r="3" fill="oklch(0.78 0.18 290)" className="pulse-dot" />
            <text x="24" y="16.5" fontSize="9" letterSpacing="0.14em" fill="oklch(0.97 0.005 270)" fontWeight="500">RECOMPUTING</text>
          </g>
          <text x="518" y="452" fontSize="8" letterSpacing="0.18em" fill="oklch(0.55 0.02 270 / 0.7)">PATH · v 14</text>
        </g>

        {/* Bottom system readout */}
        <g fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="0.22em" fill="oklch(0.5 0.02 270 / 0.7)">
          <text x="200" y="468">9 CONCEPTS</text>
          <text x="290" y="468">13 EDGES</text>
          <text x="370" y="468">3 GAPS</text>
          <text x="430" y="468">1 FOCUS</text>
        </g>
      </svg>
    </div>
  );
}
