// Hero diagram — "Adaptive Intelligence System"
//
// A premium, architect-grade visualization of how Lumintora works.
// Composed as a calm instrument panel — three reading zones, a live
// adaptive path, telemetry, and quiet measurement marks.
//
//   ┌─ INPUT ────────┐    ┌─ ADAPTIVE CORE ─┐    ┌─ OUTCOMES ──────┐
//   │  goal vector   │ →  │  path · level · │ →  │  skill signals  │
//   │  context       │    │  pace (live)    │    │  resolving      │
//   └────────────────┘    └─────────────────┘    └─────────────────┘
//
// Pure SVG. No deps. Designed to feel intentional, not loud.
export function AbstractFlow() {
  return (
    <div className="relative aspect-[5/4] w-full">
      {/* Bright ambient wash sitting behind the diagram */}
      <div className="ambient-orb absolute inset-x-6 top-4 bottom-4" aria-hidden />

      {/* Glass instrument frame */}
      <div
        className="relative h-full w-full overflow-hidden rounded-2xl border border-border/70 bg-background/40 shadow-soft backdrop-blur-[2px]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, oklch(1 0 0 / 0.55), oklch(1 0 0 / 0.15))",
        }}
      >
        {/* Top instrument bar */}
        <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between border-b border-border/60 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot" />
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Adaptive System
            </span>
          </div>
          <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground/80">
            <span className="tabular-nums">v0.4 · live</span>
            <span className="hidden h-1 w-1 rounded-full bg-muted-foreground/40 sm:block" />
            <span className="hidden tabular-nums sm:block">epoch 218</span>
          </div>
        </div>

        {/* Bottom telemetry strip */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between border-t border-border/60 px-4 py-2 text-[9.5px] font-medium uppercase tracking-[0.2em] text-muted-foreground/80">
          <span>path · recomputing</span>
          <div className="flex items-center gap-3 tabular-nums">
            <span>Δ +0.12</span>
            <span className="h-1 w-1 rounded-full bg-primary/70" />
            <span>fit 0.94</span>
          </div>
        </div>

        <svg
          viewBox="0 0 600 480"
          className="relative h-full w-full drift"
          fill="none"
          aria-hidden
          role="img"
        >
          <defs>
            {/* Node + core fills */}
            <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="oklch(0.96 0.05 280)" />
              <stop offset="45%" stopColor="oklch(0.7 0.22 280)" />
              <stop offset="100%" stopColor="oklch(0.48 0.24 280)" />
            </radialGradient>
            <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="oklch(0.9 0.12 280)" />
              <stop offset="100%" stopColor="oklch(0.58 0.22 280)" />
            </radialGradient>
            <radialGradient id="signalGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="oklch(0.97 0.06 200)" />
              <stop offset="100%" stopColor="oklch(0.68 0.16 220)" />
            </radialGradient>

            {/* Path gradient — input violet → core bright → outcome teal */}
            <linearGradient id="pathGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="oklch(0.65 0.22 280)" stopOpacity="0.1" />
              <stop offset="18%" stopColor="oklch(0.65 0.22 280)" stopOpacity="0.95" />
              <stop offset="50%" stopColor="oklch(0.8 0.2 290)" stopOpacity="1" />
              <stop offset="82%" stopColor="oklch(0.7 0.16 220)" stopOpacity="0.95" />
              <stop offset="100%" stopColor="oklch(0.7 0.16 220)" stopOpacity="0.1" />
            </linearGradient>

            {/* Soft connective lattice */}
            <linearGradient id="latticeGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.65 0.18 280)" stopOpacity="0.32" />
              <stop offset="100%" stopColor="oklch(0.65 0.18 280)" stopOpacity="0.06" />
            </linearGradient>

            {/* Bright dotted field */}
            <pattern id="dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.9" fill="oklch(0.6 0.18 280 / 0.18)" />
            </pattern>

            {/* Fine grid overlay */}
            <pattern id="grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="oklch(0.6 0.05 280 / 0.07)"
                strokeWidth="0.6"
              />
            </pattern>

            {/* Soft mask so the field fades elegantly at the edges */}
            <radialGradient id="fieldMask" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="65%" stopColor="white" stopOpacity="0.55" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="fieldFade">
              <rect width="600" height="480" fill="url(#fieldMask)" />
            </mask>

            {/* Glow for the core */}
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Halo around each zone */}
            <radialGradient id="zoneGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="oklch(0.96 0.06 280 / 0.55)" />
              <stop offset="100%" stopColor="oklch(0.96 0.06 280 / 0)" />
            </radialGradient>

            {/* Amplitude (sparkline) gradient */}
            <linearGradient id="sparkGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="oklch(0.7 0.22 280)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="oklch(0.7 0.16 220)" stopOpacity="0.95" />
            </linearGradient>

            {/* Arrowhead for the live path */}
            <marker
              id="arrowEnd"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M0 0 L8 5 L0 10 z" fill="oklch(0.7 0.16 220)" />
            </marker>
          </defs>

          {/* ── 1 · BRIGHT FIELD + GRID ──────────────────────────────────── */}
          <g mask="url(#fieldFade)">
            <rect width="600" height="480" fill="url(#dots)" />
            <rect width="600" height="480" fill="url(#grid)" />
          </g>

          {/* Three quiet zone halos */}
          <g aria-hidden>
            <ellipse cx="105" cy="245" rx="85" ry="125" fill="url(#zoneGlow)" />
            <ellipse cx="310" cy="245" rx="150" ry="170" fill="url(#zoneGlow)" />
            <ellipse cx="515" cy="245" rx="90" ry="150" fill="url(#zoneGlow)" />
          </g>

          {/* Vertical zone separators — barely there */}
          <g
            stroke="oklch(0.6 0.05 280 / 0.16)"
            strokeWidth="0.75"
            strokeDasharray="2 6"
          >
            <line x1="200" y1="120" x2="200" y2="395" />
            <line x1="420" y1="120" x2="420" y2="395" />
          </g>

          {/* Horizon */}
          <g stroke="oklch(0.6 0.18 280 / 0.14)" strokeWidth="1">
            <line x1="40" y1="395" x2="560" y2="395" />
          </g>

          {/* ── 2 · ORBITS around the adaptive core ──────────────────────── */}
          <g
            transform="translate(310 245)"
            stroke="oklch(0.6 0.18 280 / 0.28)"
            strokeWidth="1"
            fill="none"
          >
            <circle r="50" />
            <circle r="95" strokeDasharray="2 5" opacity="0.85" />
            <circle r="142" strokeDasharray="1 6" opacity="0.6" />
          </g>

          {/* Slowly rotating ring with marker */}
          <g transform="translate(310 245)" className="orbit-rotate">
            <circle
              r="118"
              fill="none"
              stroke="oklch(0.6 0.22 280 / 0.45)"
              strokeWidth="1"
              strokeDasharray="3 9"
            />
            <circle cx="118" cy="0" r="3" fill="oklch(0.65 0.22 280)" />
            <circle cx="-118" cy="0" r="2" fill="oklch(0.65 0.22 280 / 0.6)" />
          </g>

          {/* ── 3 · CONNECTIVE LATTICE ───────────────────────────────────── */}
          <g stroke="url(#latticeGrad)" strokeWidth="1" fill="none">
            <path className="draw-line" d="M120 200 C 200 200, 240 220, 280 245" />
            <path
              className="draw-line"
              style={{ animationDelay: "0.2s" }}
              d="M120 290 C 200 290, 240 270, 280 245"
            />
            <path
              className="draw-line"
              style={{ animationDelay: "0.5s" }}
              d="M340 245 C 380 220, 430 180, 500 165"
            />
            <path
              className="draw-line"
              style={{ animationDelay: "0.7s" }}
              d="M340 245 C 380 245, 430 245, 500 245"
            />
            <path
              className="draw-line"
              style={{ animationDelay: "0.9s" }}
              d="M340 245 C 380 270, 430 305, 500 320"
            />
          </g>

          {/* ── 4 · ADAPTIVE PATH — the "live" route ─────────────────────── */}
          <g fill="none" strokeLinecap="round">
            {/* Ghost (previous) route */}
            <path
              d="M105 245 C 200 245, 240 185, 310 245 S 470 285, 515 245"
              stroke="oklch(0.65 0.18 280 / 0.22)"
              strokeWidth="1.25"
              strokeDasharray="2 5"
            />
            {/* Live adaptive route */}
            <path
              className="draw-path"
              d="M105 245 C 200 245, 240 245, 310 245 S 470 225, 515 245"
              stroke="url(#pathGrad)"
              strokeWidth="2.5"
              markerEnd="url(#arrowEnd)"
            />
          </g>

          {/* Signal particles travelling along the live route */}
          <g>
            <circle r="3.5" fill="oklch(0.78 0.18 290)">
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                path="M105 245 C 200 245, 240 245, 310 245 S 470 225, 515 245"
              />
            </circle>
            <circle r="2.5" fill="oklch(0.78 0.18 290)" opacity="0.75">
              <animateMotion
                dur="6s"
                begin="2s"
                repeatCount="indefinite"
                path="M105 245 C 200 245, 240 245, 310 245 S 470 225, 515 245"
              />
            </circle>
            <circle r="1.8" fill="oklch(0.78 0.18 290)" opacity="0.5">
              <animateMotion
                dur="6s"
                begin="4s"
                repeatCount="indefinite"
                path="M105 245 C 200 245, 240 245, 310 245 S 470 225, 515 245"
              />
            </circle>
          </g>

          {/* ── 5 · ZONE 1 · INPUT ──────────────────────────────────────── */}
          <g>
            {/* Goal node */}
            <g transform="translate(105 245)">
              <circle r="28" fill="oklch(0.99 0 0)" stroke="oklch(0.6 0.2 280 / 0.4)" strokeWidth="1" />
              <circle r="20" fill="oklch(0.65 0.22 280 / 0.1)" />
              <circle r="9" fill="url(#nodeGrad)" />
              {/* Inbound vector arrow */}
              <line
                x1="-52"
                y1="0"
                x2="-30"
                y2="0"
                stroke="oklch(0.6 0.2 280 / 0.55)"
                strokeWidth="1"
                strokeDasharray="2 3"
              />
              <polygon points="-30,-3.5 -24,0 -30,3.5" fill="oklch(0.6 0.2 280 / 0.7)" />
            </g>

            {/* Context satellites with labels */}
            <g fill="oklch(0.65 0.22 280 / 0.75)">
              <circle cx="55" cy="170" r="2.8" />
              <circle cx="55" cy="320" r="2.8" />
            </g>
            <g stroke="oklch(0.65 0.22 280 / 0.35)" strokeWidth="0.9" strokeDasharray="2 3" fill="none">
              <path d="M55 170 C 75 200, 88 222, 95 235" />
              <path d="M55 320 C 75 290, 88 268, 95 255" />
            </g>
            <g
              fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
              fontSize="7.5"
              letterSpacing="0.18em"
              fill="oklch(0.5 0.04 270 / 0.85)"
              fontWeight="500"
            >
              <text x="50" y="162" textAnchor="end">PRIOR</text>
              <text x="50" y="324" textAnchor="end">PACE</text>
            </g>
          </g>

          {/* ── 6 · ZONE 2 · ADAPTIVE CORE ──────────────────────────────── */}
          <g transform="translate(310 245)" filter="url(#softGlow)">
            <circle r="36" fill="oklch(0.99 0 0)" stroke="oklch(0.65 0.22 280 / 0.45)" strokeWidth="1" />
            <circle r="24" fill="oklch(0.65 0.22 280 / 0.13)" />
            <circle r="14" fill="url(#coreGrad)" />
            {/* Crosshair */}
            <g stroke="oklch(0.99 0 0 / 0.9)" strokeWidth="0.9">
              <line x1="-5" y1="0" x2="5" y2="0" />
              <line x1="0" y1="-5" x2="0" y2="5" />
            </g>
          </g>

          {/* Branching candidate paths */}
          <g
            stroke="oklch(0.65 0.22 280 / 0.5)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          >
            <path d="M340 245 C 380 220, 430 188, 478 170" strokeDasharray="2 4" />
            <path d="M340 245 C 380 270, 430 300, 478 318" strokeDasharray="2 4" />
          </g>

          {/* ── 7 · ZONE 3 · OUTCOMES ───────────────────────────────────── */}
          <g>
            <g transform="translate(515 165)">
              <circle r="15" fill="oklch(0.99 0 0)" stroke="oklch(0.7 0.16 220 / 0.45)" strokeWidth="1" />
              <circle r="5.5" fill="url(#signalGrad)" className="pulse-dot" />
            </g>
            <g transform="translate(515 245)">
              <circle r="17" fill="oklch(0.99 0 0)" stroke="oklch(0.7 0.16 220 / 0.5)" strokeWidth="1" />
              <circle
                r="6.5"
                fill="url(#signalGrad)"
                className="pulse-dot"
                style={{ animationDelay: "0.6s" }}
              />
            </g>
            <g transform="translate(515 320)">
              <circle r="14" fill="oklch(0.99 0 0)" stroke="oklch(0.7 0.16 220 / 0.45)" strokeWidth="1" />
              <circle
                r="5"
                fill="url(#signalGrad)"
                className="pulse-dot"
                style={{ animationDelay: "1.2s" }}
              />
            </g>
          </g>

          {/* ── 8 · TELEMETRY · sparkline + amplitude bars ──────────────── */}
          <g transform="translate(40 350)">
            <text
              x="0"
              y="-6"
              fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
              fontSize="7"
              letterSpacing="0.22em"
              fill="oklch(0.5 0.02 270 / 0.7)"
              fontWeight="500"
            >
              FIT · LIVE
            </text>
            <path
              d="M0 22 L 14 18 L 28 24 L 42 14 L 56 19 L 70 8 L 84 12 L 98 4"
              fill="none"
              stroke="url(#sparkGrad)"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="98" cy="4" r="2" fill="oklch(0.7 0.16 220)" className="pulse-dot" />
          </g>

          {/* Amplitude bars on the right */}
          <g transform="translate(560 348)">
            <text
              x="0"
              y="-6"
              textAnchor="end"
              fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
              fontSize="7"
              letterSpacing="0.22em"
              fill="oklch(0.5 0.02 270 / 0.7)"
              fontWeight="500"
            >
              SIGNAL
            </text>
            {[10, 18, 8, 22, 14, 26, 12, 20].map((h, i) => (
              <rect
                key={i}
                x={-i * 7 - 4}
                y={-h}
                width="3.5"
                height={h}
                rx="1"
                fill="oklch(0.65 0.18 280 / 0.55)"
              />
            ))}
          </g>

          {/* ── 9 · ANNOTATIONS ─────────────────────────────────────────── */}
          <g
            fill="oklch(0.4 0.02 270)"
            fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
          >
            {/* Zone titles */}
            <g fontSize="9" letterSpacing="0.24em" fontWeight="500">
              <text x="105" y="100" textAnchor="middle">INPUT</text>
              <text x="310" y="100" textAnchor="middle">ADAPTIVE CORE</text>
              <text x="515" y="100" textAnchor="middle">OUTCOMES</text>
            </g>

            {/* Subtitles */}
            <g
              fontSize="7.5"
              letterSpacing="0.08em"
              fill="oklch(0.55 0.015 270 / 0.85)"
            >
              <text x="105" y="114" textAnchor="middle">goal · context</text>
              <text x="310" y="114" textAnchor="middle">path · level · pace</text>
              <text x="515" y="114" textAnchor="middle">skill signals</text>
            </g>

            {/* Tiny zone index numbers */}
            <g
              fontSize="7"
              letterSpacing="0.2em"
              fill="oklch(0.55 0.02 270 / 0.55)"
              fontWeight="500"
            >
              <text x="105" y="128" textAnchor="middle">01</text>
              <text x="310" y="128" textAnchor="middle">02</text>
              <text x="515" y="128" textAnchor="middle">03</text>
            </g>

            {/* Node labels */}
            <g fontSize="8.5" letterSpacing="0.2em" fontWeight="500">
              <text x="105" y="295" textAnchor="middle">GOAL</text>
              <text x="310" y="305" textAnchor="middle">CORE</text>
            </g>

            {/* Outcome row labels */}
            <g
              fontSize="8"
              letterSpacing="0.18em"
              fill="oklch(0.45 0.04 220)"
              fontWeight="500"
            >
              <text x="540" y="168" textAnchor="start">SIGNAL · 01</text>
              <text x="540" y="248" textAnchor="start">SIGNAL · 02</text>
              <text x="540" y="323" textAnchor="start">SIGNAL · 03</text>
            </g>

            {/* Tiny confidence readouts under each signal */}
            <g
              fontSize="6.5"
              letterSpacing="0.14em"
              fill="oklch(0.55 0.02 270 / 0.7)"
              fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
            >
              <text x="540" y="178" textAnchor="start">0.82</text>
              <text x="540" y="258" textAnchor="start">0.94</text>
              <text x="540" y="333" textAnchor="start">0.71</text>
            </g>
          </g>

          {/* Tiny corner crosshairs — drafting feel */}
          <g stroke="oklch(0.55 0.05 270 / 0.4)" strokeWidth="0.75">
            <g transform="translate(20 100)">
              <line x1="-4" y1="0" x2="4" y2="0" />
              <line x1="0" y1="-4" x2="0" y2="4" />
            </g>
            <g transform="translate(580 100)">
              <line x1="-4" y1="0" x2="4" y2="0" />
              <line x1="0" y1="-4" x2="0" y2="4" />
            </g>
            <g transform="translate(20 395)">
              <line x1="-4" y1="0" x2="4" y2="0" />
              <line x1="0" y1="-4" x2="0" y2="4" />
            </g>
            <g transform="translate(580 395)">
              <line x1="-4" y1="0" x2="4" y2="0" />
              <line x1="0" y1="-4" x2="0" y2="4" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
