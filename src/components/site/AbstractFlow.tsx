// Hero diagram — "How it works" in three quiet steps.
//
//   YOU              LUMINTORA               YOUR PATH
//   ───              ─────────               ─────────
//   Goal      →      Adapts in real time  →  Next best lesson
//
// Designed to be instantly readable by anyone — no jargon, no fake
// dashboards. Pure SVG, design-token colors only.

export function AbstractFlow() {
  return (
    <div className="relative aspect-[5/4] w-full">
      {/* Bright ambient wash behind the diagram */}
      <div className="ambient-orb absolute inset-x-6 top-4 bottom-4" aria-hidden />

      <svg
        viewBox="0 0 640 500"
        className="relative h-full w-full"
        fill="none"
        aria-hidden
        role="img"
      >
        <defs>
          {/* Soft dotted backdrop */}
          <pattern id="dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" fill="oklch(0.6 0.18 280 / 0.12)" />
          </pattern>
          <radialGradient id="fade" cx="50%" cy="50%" r="65%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="70%" stopColor="white" stopOpacity="0.4" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="fadeMask"><rect width="640" height="500" fill="url(#fade)" /></mask>

          {/* Connecting line gradient */}
          <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"  stopColor="oklch(0.65 0.22 280 / 0.9)" />
            <stop offset="50%" stopColor="oklch(0.7 0.18 260 / 0.9)" />
            <stop offset="100%" stopColor="oklch(0.7 0.16 200 / 0.9)" />
          </linearGradient>

          {/* Center "brain" gradient */}
          <radialGradient id="core" cx="50%" cy="40%" r="60%">
            <stop offset="0%"   stopColor="oklch(0.96 0.05 280)" />
            <stop offset="60%"  stopColor="oklch(0.7 0.2 280)" />
            <stop offset="100%" stopColor="oklch(0.55 0.22 280)" />
          </radialGradient>

          {/* Side circles */}
          <radialGradient id="sideL" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="oklch(0.99 0 0)" />
            <stop offset="100%" stopColor="oklch(0.94 0.03 280)" />
          </radialGradient>
          <radialGradient id="sideR" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="oklch(0.99 0 0)" />
            <stop offset="100%" stopColor="oklch(0.93 0.05 200)" />
          </radialGradient>

          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Backdrop */}
        <g mask="url(#fadeMask)">
          <rect width="640" height="500" fill="url(#dots)" />
        </g>

        {/* ── Connecting line through the three steps ─────────────── */}
        <path
          d="M 130 250 C 220 250, 260 250, 320 250 S 420 250, 510 250"
          stroke="url(#line)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />

        {/* Two travelling pulses showing flow */}
        <circle r="4" fill="oklch(0.78 0.18 290)" filter="url(#glow)">
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            path="M 130 250 C 220 250, 260 250, 320 250 S 420 250, 510 250"
          />
        </circle>
        <circle r="3" fill="oklch(0.78 0.18 290)" opacity="0.55">
          <animateMotion
            dur="4s"
            begin="1.5s"
            repeatCount="indefinite"
            path="M 130 250 C 220 250, 260 250, 320 250 S 420 250, 510 250"
          />
        </circle>

        {/* ── STEP 1 · YOU ─────────────────────────────────────────── */}
        <g>
          <circle cx="130" cy="250" r="56" fill="url(#sideL)" stroke="oklch(0.6 0.04 270 / 0.25)" />
          {/* Simple person glyph */}
          <g stroke="oklch(0.35 0.05 280)" strokeWidth="2.2" strokeLinecap="round" fill="none">
            <circle cx="130" cy="238" r="9" />
            <path d="M 112 270 C 116 258, 144 258, 148 270" />
          </g>
        </g>
        <g fontFamily="Inter, ui-sans-serif, system-ui, sans-serif" textAnchor="middle">
          <text x="130" y="340" fontSize="14" fontWeight="600" fill="oklch(0.2 0.02 270)">You</text>
          <text x="130" y="360" fontSize="11" fill="oklch(0.45 0.02 270)">Tell us your goal</text>
        </g>

        {/* ── STEP 2 · LUMINTORA (adaptive core) ───────────────────── */}
        <g>
          {/* Outer ring */}
          <circle
            cx="320" cy="250" r="78"
            fill="none"
            stroke="oklch(0.6 0.22 280 / 0.35)"
            strokeWidth="1"
            strokeDasharray="3 5"
          />
          {/* Soft glow ring */}
          <circle cx="320" cy="250" r="68" fill="none" stroke="oklch(0.65 0.22 280 / 0.25)" strokeWidth="6" filter="url(#glow)" />
          {/* Core */}
          <circle cx="320" cy="250" r="58" fill="url(#core)" filter="url(#glow)" />
          {/* Inner highlight */}
          <circle cx="306" cy="234" r="12" fill="oklch(1 0 0 / 0.35)" />
          {/* Subtle pulsing ring */}
          <circle cx="320" cy="250" r="58" fill="none" stroke="oklch(0.7 0.22 280 / 0.6)" strokeWidth="1.5" className="pulse-dot" />
        </g>
        <g fontFamily="Inter, ui-sans-serif, system-ui, sans-serif" textAnchor="middle">
          <text x="320" y="362" fontSize="14" fontWeight="600" fill="oklch(0.2 0.02 270)">Lumintora</text>
          <text x="320" y="382" fontSize="11" fill="oklch(0.45 0.02 270)">Learns how you learn</text>
        </g>

        {/* ── STEP 3 · YOUR PATH ───────────────────────────────────── */}
        <g>
          <circle cx="510" cy="250" r="56" fill="url(#sideR)" stroke="oklch(0.55 0.1 200 / 0.35)" />
          {/* Simple checklist glyph */}
          <g stroke="oklch(0.3 0.08 200)" strokeWidth="2" strokeLinecap="round" fill="none">
            <circle cx="490" cy="232" r="3.5" fill="oklch(0.65 0.18 200)" stroke="none" />
            <line x1="500" y1="232" x2="532" y2="232" />
            <circle cx="490" cy="250" r="3.5" fill="oklch(0.65 0.18 200)" stroke="none" />
            <line x1="500" y1="250" x2="532" y2="250" />
            <circle cx="490" cy="268" r="3.5" fill="oklch(0.6 0.04 270 / 0.4)" stroke="none" />
            <line x1="500" y1="268" x2="528" y2="268" opacity="0.5" />
          </g>
        </g>
        <g fontFamily="Inter, ui-sans-serif, system-ui, sans-serif" textAnchor="middle">
          <text x="510" y="340" fontSize="14" fontWeight="600" fill="oklch(0.2 0.02 270)">Your path</text>
          <text x="510" y="360" fontSize="11" fill="oklch(0.45 0.02 270)">One next step at a time</text>
        </g>

        {/* Quiet caption */}
        <text
          x="320" y="445"
          textAnchor="middle"
          fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
          fontSize="10"
          letterSpacing="0.22em"
          fill="oklch(0.5 0.02 270 / 0.7)"
        >
          GOAL  →  ADAPTS  →  GUIDES
        </text>
      </svg>
    </div>
  );
}
