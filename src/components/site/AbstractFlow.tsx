// A calm, abstract node-flow visual. No dashboards, no glyphs.
// Represents intelligence as a quietly evolving network.
export function AbstractFlow() {
  return (
    <div className="relative aspect-[5/4] w-full">
      {/* ambient glow */}
      <div className="ambient-orb absolute inset-x-12 top-10 h-56" aria-hidden />

      <svg
        viewBox="0 0 500 400"
        className="relative h-full w-full drift"
        fill="none"
        aria-hidden
      >
        <defs>
          <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.65 0.24 280)" stopOpacity="1" />
            <stop offset="100%" stopColor="oklch(0.55 0.24 280)" stopOpacity="0.7" />
          </radialGradient>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.55 0.24 280)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="oklch(0.55 0.24 280)" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* connecting lines — drawn slowly */}
        <g stroke="url(#lineGrad)" strokeWidth="1" fill="none">
          <path className="draw-line" d="M80 300 C 160 240, 200 200, 250 200" />
          <path
            className="draw-line"
            style={{ animationDelay: "0.4s" }}
            d="M250 200 C 300 200, 340 160, 410 110"
          />
          <path
            className="draw-line"
            style={{ animationDelay: "0.8s" }}
            d="M250 200 C 300 200, 340 240, 420 280"
          />
          <path
            className="draw-line"
            style={{ animationDelay: "1.2s" }}
            d="M80 300 C 140 320, 200 330, 260 320"
          />
          <path
            className="draw-line"
            style={{ animationDelay: "1.6s" }}
            d="M260 320 C 320 320, 360 300, 420 280"
          />
        </g>

        {/* faint background lattice */}
        <g stroke="oklch(0.55 0.24 280 / 0.08)" strokeWidth="1">
          <line x1="0" y1="350" x2="500" y2="350" />
          <line x1="0" y1="300" x2="500" y2="300" />
          <line x1="0" y1="250" x2="500" y2="250" />
        </g>

        {/* nodes */}
        <g>
          <circle cx="80" cy="300" r="6" fill="url(#nodeGrad)" />
          <circle cx="80" cy="300" r="14" fill="oklch(0.55 0.24 280 / 0.15)" />

          <circle cx="250" cy="200" r="9" fill="url(#nodeGrad)" />
          <circle cx="250" cy="200" r="22" fill="oklch(0.55 0.24 280 / 0.12)" />
          <circle cx="250" cy="200" r="34" fill="none" stroke="oklch(0.55 0.24 280 / 0.25)" strokeWidth="1" />

          <circle cx="410" cy="110" r="5" fill="url(#nodeGrad)" className="pulse-dot" />
          <circle cx="420" cy="280" r="5" fill="url(#nodeGrad)" className="pulse-dot" style={{ animationDelay: "0.8s" }} />
          <circle cx="260" cy="320" r="4" fill="url(#nodeGrad)" className="pulse-dot" style={{ animationDelay: "1.4s" }} />
        </g>

        {/* whisper labels — minimal, no UI */}
        <g fill="oklch(0.5 0.02 270)" fontSize="10" fontFamily="Inter, sans-serif" letterSpacing="0.08em">
          <text x="58" y="328" textAnchor="start">GOAL</text>
          <text x="250" y="168" textAnchor="middle">PATH</text>
          <text x="430" y="108" textAnchor="start">SIGNAL</text>
        </g>
      </svg>
    </div>
  );
}
