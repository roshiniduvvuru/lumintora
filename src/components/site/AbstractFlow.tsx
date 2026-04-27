// Hero diagram — "Adaptive Learning Manifold"
//
// A senior-architect take on representing what Lumintora does.
// Three clear zones, read left → right:
//
//   ┌─ INPUT ──────────┐   ┌─ ADAPTIVE CORE ─┐   ┌─ OUTCOMES ──────┐
//   │  Goal vector     │ → │  Path · Level · │ → │  Skill signals   │
//   │  Context signals │   │  Pace (live)    │   │  resolving       │
//   └──────────────────┘   └─────────────────┘   └──────────────────┘
//
// Layered, light-touch, calm. Pure SVG, no deps.
export function AbstractFlow() {
  return (
    <div className="relative aspect-[5/4] w-full">
      {/* Bright ambient wash sitting behind the diagram */}
      <div className="ambient-orb absolute inset-x-8 top-6 bottom-6" aria-hidden />

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
            <stop offset="0%" stopColor="oklch(0.92 0.08 280)" />
            <stop offset="55%" stopColor="oklch(0.65 0.22 280)" />
            <stop offset="100%" stopColor="oklch(0.5 0.24 280)" />
          </radialGradient>
          <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.85 0.14 280)" />
            <stop offset="100%" stopColor="oklch(0.58 0.22 280)" />
          </radialGradient>
          <radialGradient id="signalGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.95 0.08 200)" />
            <stop offset="100%" stopColor="oklch(0.7 0.16 230)" />
          </radialGradient>

          {/* Path gradient — input violet → core bright → outcome teal */}
          <linearGradient id="pathGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.65 0.22 280)" stopOpacity="0.15" />
            <stop offset="20%" stopColor="oklch(0.65 0.22 280)" stopOpacity="0.95" />
            <stop offset="50%" stopColor="oklch(0.78 0.18 290)" stopOpacity="1" />
            <stop offset="80%" stopColor="oklch(0.7 0.16 230)" stopOpacity="0.95" />
            <stop offset="100%" stopColor="oklch(0.7 0.16 230)" stopOpacity="0.15" />
          </linearGradient>

          {/* Soft connective lattice */}
          <linearGradient id="latticeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.65 0.18 280)" stopOpacity="0.32" />
            <stop offset="100%" stopColor="oklch(0.65 0.18 280)" stopOpacity="0.06" />
          </linearGradient>

          {/* Bright dotted field — slightly stronger so it reads */}
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="oklch(0.6 0.18 280 / 0.16)" />
          </pattern>

          {/* Soft mask so the field fades elegantly at the edges */}
          <radialGradient id="fieldMask" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="65%" stopColor="white" stopOpacity="0.6" />
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

          {/* Soft halo around the three big zones */}
          <radialGradient id="zoneGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.95 0.06 280 / 0.55)" />
            <stop offset="100%" stopColor="oklch(0.95 0.06 280 / 0)" />
          </radialGradient>
        </defs>

        {/* ── 1 · BRIGHT FIELD ───────────────────────────────────────────── */}
        <g mask="url(#fieldFade)">
          <rect width="600" height="480" fill="url(#dots)" />
        </g>

        {/* Three quiet zone halos — give the eye a structure to land in */}
        <g aria-hidden>
          <ellipse cx="100" cy="240" rx="90" ry="130" fill="url(#zoneGlow)" />
          <ellipse cx="310" cy="240" rx="150" ry="170" fill="url(#zoneGlow)" />
          <ellipse cx="520" cy="240" rx="90" ry="150" fill="url(#zoneGlow)" />
        </g>

        {/* Horizon — anchors composition without feeling heavy */}
        <g stroke="oklch(0.65 0.18 280 / 0.14)" strokeWidth="1">
          <line x1="40" y1="395" x2="560" y2="395" />
        </g>

        {/* ── 2 · ORBITS around the adaptive core ────────────────────────── */}
        <g
          transform="translate(310 240)"
          stroke="oklch(0.6 0.18 280 / 0.28)"
          strokeWidth="1"
          fill="none"
        >
          <circle r="48" />
          <circle r="92" strokeDasharray="2 5" opacity="0.85" />
          <circle r="138" strokeDasharray="1 6" opacity="0.65" />
        </g>

        {/* Slowly rotating ring with a marker — quiet sense of computation */}
        <g transform="translate(310 240)" className="orbit-rotate">
          <circle
            r="115"
            fill="none"
            stroke="oklch(0.6 0.22 280 / 0.45)"
            strokeWidth="1"
            strokeDasharray="3 9"
          />
          <circle cx="115" cy="0" r="3" fill="oklch(0.65 0.22 280)" />
        </g>

        {/* ── 3 · CONNECTIVE LATTICE (subtle background paths) ───────────── */}
        <g stroke="url(#latticeGrad)" strokeWidth="1" fill="none">
          <path className="draw-line" d="M120 200 C 200 200, 240 220, 280 240" />
          <path
            className="draw-line"
            style={{ animationDelay: "0.2s" }}
            d="M120 280 C 200 280, 240 260, 280 240"
          />
          <path
            className="draw-line"
            style={{ animationDelay: "0.5s" }}
            d="M340 240 C 380 220, 430 180, 500 165"
          />
          <path
            className="draw-line"
            style={{ animationDelay: "0.7s" }}
            d="M340 240 C 380 240, 430 240, 500 240"
          />
          <path
            className="draw-line"
            style={{ animationDelay: "0.9s" }}
            d="M340 240 C 380 260, 430 300, 500 315"
          />
        </g>

        {/* ── 4 · ADAPTIVE PATH — the "live" route ───────────────────────── */}
        <g fill="none" strokeLinecap="round">
          {/* Ghost (previous) route — what the system had before adapting */}
          <path
            d="M100 240 C 200 240, 240 180, 310 240 S 470 280, 520 240"
            stroke="oklch(0.65 0.18 280 / 0.22)"
            strokeWidth="1.25"
            strokeDasharray="2 5"
          />
          {/* Live adaptive route */}
          <path
            className="draw-path"
            d="M100 240 C 200 240, 240 240, 310 240 S 470 220, 520 240"
            stroke="url(#pathGrad)"
            strokeWidth="2.25"
          />
        </g>

        {/* Signal particles travelling along the live route */}
        <g>
          <circle r="3.5" fill="oklch(0.78 0.18 290)">
            <animateMotion
              dur="6s"
              repeatCount="indefinite"
              path="M100 240 C 200 240, 240 240, 310 240 S 470 220, 520 240"
            />
          </circle>
          <circle r="2.5" fill="oklch(0.78 0.18 290)" opacity="0.75">
            <animateMotion
              dur="6s"
              begin="2s"
              repeatCount="indefinite"
              path="M100 240 C 200 240, 240 240, 310 240 S 470 220, 520 240"
            />
          </circle>
          <circle r="1.8" fill="oklch(0.78 0.18 290)" opacity="0.5">
            <animateMotion
              dur="6s"
              begin="4s"
              repeatCount="indefinite"
              path="M100 240 C 200 240, 240 240, 310 240 S 470 220, 520 240"
            />
          </circle>
        </g>

        {/* ── 5 · ZONE 1 · INPUT (Goal + Context) ────────────────────────── */}
        <g>
          {/* Goal node */}
          <g transform="translate(100 240)">
            <circle r="26" fill="oklch(0.99 0 0)" stroke="oklch(0.6 0.2 280 / 0.35)" strokeWidth="1" />
            <circle r="18" fill="oklch(0.65 0.22 280 / 0.1)" />
            <circle r="8" fill="url(#nodeGrad)" />
            {/* Tiny inbound vector arrow */}
            <line
              x1="-50"
              y1="0"
              x2="-28"
              y2="0"
              stroke="oklch(0.6 0.2 280 / 0.55)"
              strokeWidth="1"
              strokeDasharray="2 3"
            />
            <polygon points="-28,-3.5 -22,0 -28,3.5" fill="oklch(0.6 0.2 280 / 0.7)" />
          </g>

          {/* Two small "context" satellites feeding into Goal */}
          <g fill="oklch(0.65 0.22 280 / 0.7)">
            <circle cx="60" cy="170" r="2.5" />
            <circle cx="60" cy="310" r="2.5" />
          </g>
          <g stroke="oklch(0.65 0.22 280 / 0.35)" strokeWidth="0.9" strokeDasharray="2 3" fill="none">
            <path d="M60 170 C 80 200, 90 220, 95 232" />
            <path d="M60 310 C 80 280, 90 260, 95 248" />
          </g>
        </g>

        {/* ── 6 · ZONE 2 · ADAPTIVE CORE ─────────────────────────────────── */}
        <g transform="translate(310 240)" filter="url(#softGlow)">
          <circle r="34" fill="oklch(0.99 0 0)" stroke="oklch(0.65 0.22 280 / 0.4)" strokeWidth="1" />
          <circle r="22" fill="oklch(0.65 0.22 280 / 0.12)" />
          <circle r="13" fill="url(#coreGrad)" />
          {/* Crosshair = precision */}
          <g stroke="oklch(0.99 0 0 / 0.85)" strokeWidth="0.9">
            <line x1="-4.5" y1="0" x2="4.5" y2="0" />
            <line x1="0" y1="-4.5" x2="0" y2="4.5" />
          </g>
        </g>

        {/* Three tiny "candidate paths" branching from the core (the adaptation) */}
        <g
          stroke="oklch(0.65 0.22 280 / 0.5)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        >
          <path d="M340 240 C 380 215, 430 185, 480 168" strokeDasharray="2 4" />
          <path d="M340 240 C 380 265, 430 295, 480 312" strokeDasharray="2 4" />
        </g>

        {/* ── 7 · ZONE 3 · OUTCOMES (signals resolving) ──────────────────── */}
        <g>
          <g transform="translate(520 165)">
            <circle r="14" fill="oklch(0.99 0 0)" stroke="oklch(0.7 0.16 230 / 0.4)" strokeWidth="1" />
            <circle r="5" fill="url(#signalGrad)" className="pulse-dot" />
          </g>
          <g transform="translate(520 240)">
            <circle r="16" fill="oklch(0.99 0 0)" stroke="oklch(0.7 0.16 230 / 0.45)" strokeWidth="1" />
            <circle
              r="6"
              fill="url(#signalGrad)"
              className="pulse-dot"
              style={{ animationDelay: "0.6s" }}
            />
          </g>
          <g transform="translate(520 315)">
            <circle r="13" fill="oklch(0.99 0 0)" stroke="oklch(0.7 0.16 230 / 0.4)" strokeWidth="1" />
            <circle
              r="4.5"
              fill="url(#signalGrad)"
              className="pulse-dot"
              style={{ animationDelay: "1.2s" }}
            />
          </g>
        </g>

        {/* ── 8 · ANNOTATIONS — quiet, architectural ─────────────────────── */}
        <g
          fill="oklch(0.4 0.02 270)"
          fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
        >
          {/* Zone titles */}
          <g fontSize="9" letterSpacing="0.22em" fontWeight="500">
            <text x="100" y="92" textAnchor="middle">INPUT</text>
            <text x="310" y="92" textAnchor="middle">ADAPTIVE CORE</text>
            <text x="520" y="92" textAnchor="middle">OUTCOMES</text>
          </g>

          {/* Subtitles under each zone title */}
          <g
            fontSize="8"
            letterSpacing="0.06em"
            fill="oklch(0.55 0.015 270 / 0.85)"
          >
            <text x="100" y="106" textAnchor="middle">goal · context</text>
            <text x="310" y="106" textAnchor="middle">path · level · pace</text>
            <text x="520" y="106" textAnchor="middle">skill signals</text>
          </g>

          {/* Node labels */}
          <g fontSize="8.5" letterSpacing="0.18em" fontWeight="500">
            <text x="100" y="285" textAnchor="middle">GOAL</text>
            <text x="310" y="295" textAnchor="middle">CORE</text>
          </g>

          {/* Outcome row labels */}
          <g
            fontSize="8"
            letterSpacing="0.16em"
            fill="oklch(0.45 0.04 230)"
            fontWeight="500"
          >
            <text x="545" y="168" textAnchor="start">SIGNAL · 01</text>
            <text x="545" y="243" textAnchor="start">SIGNAL · 02</text>
            <text x="545" y="318" textAnchor="start">SIGNAL · 03</text>
          </g>

          {/* Bottom system readout — measurement marks */}
          <g
            fontSize="7"
            letterSpacing="0.24em"
            fill="oklch(0.5 0.02 270 / 0.65)"
          >
            <text x="60" y="438">L · 01</text>
            <text x="200" y="438">L · 02</text>
            <text x="340" y="438">L · 03</text>
            <text x="480" y="438">L · 04</text>
          </g>
          <g stroke="oklch(0.55 0.02 270 / 0.3)" strokeWidth="0.75">
            <line x1="60" y1="425" x2="78" y2="425" />
            <line x1="200" y1="425" x2="218" y2="425" />
            <line x1="340" y1="425" x2="358" y2="425" />
            <line x1="480" y1="425" x2="498" y2="425" />
          </g>
        </g>
      </svg>
    </div>
  );
}
