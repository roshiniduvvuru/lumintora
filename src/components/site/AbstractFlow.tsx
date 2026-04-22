// A senior-architect take on the hero visual:
// A living "learning manifold" — concentric orbits of knowledge,
// a goal vector entering from the left, an adaptive path being
// recomputed in real time, and quiet signal nodes resolving on the right.
//
// Pure SVG. No deps. Carefully layered:
//   1. Field      — faint dotted grid + radial vignette (depth)
//   2. Orbits     — concentric rings (the knowledge space)
//   3. Lattice    — soft connective tissue between orbits
//   4. Path       — the adaptive route, drawn + re-drawn
//   5. Particles  — signal flow along the path
//   6. Nodes      — goal, core intelligence, resolved signals
//   7. Annotations — whisper-quiet typographic markers
export function AbstractFlow() {
  return (
    <div className="relative aspect-[5/4] w-full">
      {/* ambient glow behind the composition */}
      <div className="ambient-orb absolute inset-x-16 top-12 h-64" aria-hidden />

      <svg
        viewBox="0 0 600 480"
        className="relative h-full w-full drift"
        fill="none"
        aria-hidden
        role="img"
      >
        <defs>
          {/* node fills */}
          <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.78 0.18 280)" stopOpacity="1" />
            <stop offset="60%" stopColor="oklch(0.55 0.24 280)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="oklch(0.45 0.22 280)" stopOpacity="0.6" />
          </radialGradient>

          <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.7 0.22 280)" stopOpacity="1" />
            <stop offset="100%" stopColor="oklch(0.5 0.24 280)" stopOpacity="0.7" />
          </radialGradient>

          {/* line gradients */}
          <linearGradient id="pathGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.55 0.24 280)" stopOpacity="0.1" />
            <stop offset="35%" stopColor="oklch(0.55 0.24 280)" stopOpacity="0.85" />
            <stop offset="70%" stopColor="oklch(0.55 0.24 280)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="oklch(0.55 0.24 280)" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="latticeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.55 0.24 280)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="oklch(0.55 0.24 280)" stopOpacity="0.04" />
          </linearGradient>

          {/* dotted field pattern */}
          <pattern id="dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="oklch(0.55 0.24 280 / 0.08)" />
          </pattern>

          {/* radial mask to fade the field at the edges */}
          <radialGradient id="fieldMask" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="70%" stopColor="white" stopOpacity="0.5" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="fieldFade">
            <rect width="600" height="480" fill="url(#fieldMask)" />
          </mask>

          {/* soft glow filter for the core */}
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1 — FIELD: dotted grid, masked to fade at edges */}
        <g mask="url(#fieldFade)">
          <rect width="600" height="480" fill="url(#dots)" />
        </g>

        {/* faint horizon lines for depth */}
        <g stroke="oklch(0.55 0.24 280 / 0.06)" strokeWidth="1">
          <line x1="0" y1="380" x2="600" y2="380" />
          <line x1="0" y1="420" x2="600" y2="420" />
        </g>

        {/* 2 — ORBITS: the knowledge manifold */}
        <g
          transform="translate(330 230)"
          stroke="oklch(0.55 0.24 280 / 0.18)"
          strokeWidth="1"
          fill="none"
        >
          <circle r="60" />
          <circle r="110" strokeDasharray="2 4" opacity="0.85" />
          <circle r="165" strokeDasharray="1 6" opacity="0.7" />
          <circle r="215" strokeDasharray="1 8" opacity="0.5" />
        </g>

        {/* slow rotating ring — barely perceptible */}
        <g transform="translate(330 230)" className="orbit-rotate">
          <circle
            r="140"
            fill="none"
            stroke="oklch(0.55 0.24 280 / 0.35)"
            strokeWidth="1"
            strokeDasharray="3 10"
          />
          {/* a marker riding the ring */}
          <circle cx="140" cy="0" r="2.5" fill="oklch(0.55 0.24 280 / 0.7)" />
        </g>

        {/* 3 — LATTICE: connective tissue between orbits */}
        <g stroke="url(#latticeGrad)" strokeWidth="1" fill="none">
          <path className="draw-line" d="M120 350 C 200 300, 240 270, 270 230" />
          <path
            className="draw-line"
            style={{ animationDelay: "0.2s" }}
            d="M120 350 C 180 360, 240 360, 300 350"
          />
          <path
            className="draw-line"
            style={{ animationDelay: "0.4s" }}
            d="M270 230 C 300 200, 340 160, 410 130"
          />
          <path
            className="draw-line"
            style={{ animationDelay: "0.6s" }}
            d="M270 230 C 320 230, 380 230, 470 220"
          />
          <path
            className="draw-line"
            style={{ animationDelay: "0.8s" }}
            d="M300 350 C 360 340, 420 320, 470 290"
          />
          <path
            className="draw-line"
            style={{ animationDelay: "1.0s" }}
            d="M410 130 C 460 150, 490 200, 500 250"
          />
        </g>

        {/* 4 — PATH: the adaptive route from goal → core → outcomes */}
        <g fill="none" strokeLinecap="round">
          {/* ghost (previous) path — what the system had before */}
          <path
            d="M105 355 C 200 320, 250 280, 330 230 S 470 180, 540 145"
            stroke="oklch(0.55 0.24 280 / 0.18)"
            strokeWidth="1.25"
            strokeDasharray="2 5"
          />
          {/* live adaptive path */}
          <path
            className="draw-path"
            d="M105 355 C 200 340, 260 300, 330 230 S 470 210, 540 235"
            stroke="url(#pathGrad)"
            strokeWidth="2"
          />
        </g>

        {/* 5 — PARTICLES: signal flowing along the live path */}
        <g fill="oklch(0.55 0.24 280)">
          <circle r="3" className="path-particle">
            <animateMotion
              dur="6s"
              repeatCount="indefinite"
              rotate="auto"
              path="M105 355 C 200 340, 260 300, 330 230 S 470 210, 540 235"
            />
          </circle>
          <circle r="2" opacity="0.7">
            <animateMotion
              dur="6s"
              begin="2s"
              repeatCount="indefinite"
              path="M105 355 C 200 340, 260 300, 330 230 S 470 210, 540 235"
            />
          </circle>
          <circle r="1.5" opacity="0.5">
            <animateMotion
              dur="6s"
              begin="4s"
              repeatCount="indefinite"
              path="M105 355 C 200 340, 260 300, 330 230 S 470 210, 540 235"
            />
          </circle>
        </g>

        {/* 6 — NODES */}
        {/* GOAL — entry point on the left */}
        <g transform="translate(105 355)">
          <circle r="22" fill="oklch(0.55 0.24 280 / 0.08)" />
          <circle r="14" fill="oklch(0.55 0.24 280 / 0.14)" />
          <circle r="6" fill="url(#nodeGrad)" />
          {/* small inbound vector */}
          <line
            x1="-40"
            y1="0"
            x2="-14"
            y2="0"
            stroke="oklch(0.55 0.24 280 / 0.5)"
            strokeWidth="1"
            strokeDasharray="2 3"
          />
          <polygon
            points="-14,-3 -8,0 -14,3"
            fill="oklch(0.55 0.24 280 / 0.7)"
          />
        </g>

        {/* CORE — the intelligence */}
        <g transform="translate(330 230)" filter="url(#softGlow)">
          <circle
            r="34"
            fill="none"
            stroke="oklch(0.55 0.24 280 / 0.35)"
            strokeWidth="1"
          />
          <circle r="22" fill="oklch(0.55 0.24 280 / 0.1)" />
          <circle r="12" fill="url(#coreGrad)" />
          {/* tiny crosshair to suggest precision */}
          <g stroke="oklch(0.99 0 0 / 0.7)" strokeWidth="0.75">
            <line x1="-4" y1="0" x2="4" y2="0" />
            <line x1="0" y1="-4" x2="0" y2="4" />
          </g>
        </g>

        {/* SIGNAL nodes — outcomes resolving on the right */}
        <g>
          <g transform="translate(540 145)">
            <circle r="12" fill="oklch(0.55 0.24 280 / 0.12)" />
            <circle r="4" fill="url(#nodeGrad)" className="pulse-dot" />
          </g>
          <g transform="translate(540 235)">
            <circle r="14" fill="oklch(0.55 0.24 280 / 0.14)" />
            <circle
              r="5"
              fill="url(#nodeGrad)"
              className="pulse-dot"
              style={{ animationDelay: "0.6s" }}
            />
          </g>
          <g transform="translate(500 320)">
            <circle r="10" fill="oklch(0.55 0.24 280 / 0.1)" />
            <circle
              r="3.5"
              fill="url(#nodeGrad)"
              className="pulse-dot"
              style={{ animationDelay: "1.2s" }}
            />
          </g>
        </g>

        {/* small "candidate" dots scattered along orbits — possible next steps */}
        <g fill="oklch(0.55 0.24 280 / 0.55)">
          <circle cx="220" cy="180" r="1.8" />
          <circle cx="265" cy="115" r="1.4" />
          <circle cx="395" cy="95" r="1.6" />
          <circle cx="455" cy="350" r="1.5" />
          <circle cx="195" cy="280" r="1.4" />
          <circle cx="160" cy="205" r="1.2" />
        </g>

        {/* 7 — ANNOTATIONS: whisper-quiet labels and measurement marks */}
        <g
          fill="oklch(0.5 0.02 270)"
          fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
          fontSize="9"
          letterSpacing="0.18em"
        >
          {/* GOAL */}
          <text x="105" y="395" textAnchor="middle">GOAL</text>
          <text
            x="105"
            y="408"
            textAnchor="middle"
            fontSize="7.5"
            letterSpacing="0.06em"
            fill="oklch(0.55 0.015 270 / 0.7)"
          >
            input vector
          </text>

          {/* CORE */}
          <text x="330" y="186" textAnchor="middle">ADAPTIVE CORE</text>
          <text
            x="330"
            y="199"
            textAnchor="middle"
            fontSize="7.5"
            letterSpacing="0.06em"
            fill="oklch(0.55 0.015 270 / 0.7)"
          >
            path / level / pace
          </text>

          {/* SIGNALS */}
          <text x="555" y="148" textAnchor="start">SIGNAL · 01</text>
          <text x="555" y="238" textAnchor="start">SIGNAL · 02</text>
          <text x="515" y="323" textAnchor="start">SIGNAL · 03</text>

          {/* tiny measurement marks at the bottom — like a system readout */}
          <g
            fill="oklch(0.55 0.015 270 / 0.55)"
            fontSize="7"
            letterSpacing="0.22em"
          >
            <text x="40" y="455">L · 01</text>
            <text x="180" y="455">L · 02</text>
            <text x="320" y="455">L · 03</text>
            <text x="460" y="455">L · 04</text>
          </g>
          <g stroke="oklch(0.55 0.015 270 / 0.25)" strokeWidth="0.75">
            <line x1="40" y1="442" x2="55" y2="442" />
            <line x1="180" y1="442" x2="195" y2="442" />
            <line x1="320" y1="442" x2="335" y2="442" />
            <line x1="460" y1="442" x2="475" y2="442" />
          </g>
        </g>
      </svg>
    </div>
  );
}
