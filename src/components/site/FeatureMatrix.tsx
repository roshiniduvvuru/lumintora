// Feature Matrix — enterprise-grade presentation of Lumintora's
// two tiers (V1 and V1 Premium).
//
// Design intent: restrained, editorial, confident. Two columns that
// feel like a product architecture diagram, not a pricing table.
// Typography, alignment, and quiet iconography do the work.

import type { ReactNode } from "react";

/* ────────────────────────────────────────────────────────────
   Minimal, hand-drawn style icons — pure SVG, stroke-only.
   Each is 18×18, inherits currentColor.
   ──────────────────────────────────────────────────────────── */
const icon = {
  path: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 18c3-6 7-6 8-10" /><circle cx="4" cy="18" r="1.5" /><circle cx="12" cy="8" r="1.5" /><path d="M14 8h6" /><path d="M16 5l3 3-3 3" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8" /><path d="M4 12h16M12 4c2.5 3 2.5 13 0 16M12 4c-2.5 3-2.5 13 0 16" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 8l-4 4 4 4M15 8l4 4-4 4" />
    </svg>
  ),
  trophy: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 4h8v4a4 4 0 01-8 0V4z" /><path d="M8 6H5v2a3 3 0 003 3M16 6h3v2a3 3 0 01-3 3" /><path d="M10 14h4v3h-4zM9 20h6" />
    </svg>
  ),
  notes: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4h9l3 3v13H6z" /><path d="M9 10h6M9 14h6M9 18h4" />
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
    </svg>
  ),
  offline: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8a12 12 0 0118 0" /><path d="M6 12a8 8 0 0112 0" /><path d="M9 16a4 4 0 016 0" /><circle cx="12" cy="20" r="0.6" fill="currentColor" /><path d="M4 4l16 16" />
    </svg>
  ),
  signal: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 18v-2M9 18v-5M14 18v-8M19 18V6" />
    </svg>
  ),
  gift: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10h16v10H4zM2 7h20v3H2z" /><path d="M12 7v13M12 7a3 3 0 10-3-3 6 6 0 003 3zM12 7a3 3 0 103-3 6 6 0 00-3 3z" />
    </svg>
  ),
  ticket: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8a2 2 0 012-2h14a2 2 0 012 2v2a2 2 0 000 4v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 000-4z" /><path d="M12 6v12" strokeDasharray="2 2" />
    </svg>
  ),
  /* Premium */
  box: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7l8-4 8 4-8 4z" /><path d="M4 7v10l8 4 8-4V7" /><path d="M12 11v10" />
    </svg>
  ),
  plug: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3v5M15 3v5" /><path d="M6 8h12v4a6 6 0 01-12 0z" /><path d="M12 18v3" />
    </svg>
  ),
  mic: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 12a7 7 0 0014 0M12 19v2" />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20V6l8-3 8 3v14" /><path d="M4 20h16M9 10h0M9 14h0M15 10h0M15 14h0M10 20v-4h4v4" />
    </svg>
  ),
  languages: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h10M8 4v2M5 6c0 4 3 7 6 7M11 6c0 3-4 6-8 6" /><path d="M14 20l4-10 4 10M15.5 17h5" />
    </svg>
  ),
  flow: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="6" height="4" rx="1" /><rect x="15" y="4" width="6" height="4" rx="1" /><rect x="9" y="16" width="6" height="4" rx="1" /><path d="M6 8v4h12V8M12 12v4" />
    </svg>
  ),
  lab: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 3v6l-5 9a2 2 0 001.8 3h10.4A2 2 0 0019 18l-5-9V3" /><path d="M9 3h6M7.5 14h9" />
    </svg>
  ),
  tutor: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="3.5" /><path d="M5 20c1-4 4-6 7-6s6 2 7 6" /><path d="M18 4l1 1 1-1-1-1z" />
    </svg>
  ),
  socratic: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5h12a2 2 0 012 2v6a2 2 0 01-2 2H9l-5 4V7a2 2 0 012-2z" /><path d="M9 9c.5-1.5 3-1.5 3 0 0 1-1.5 1-1.5 2M10.5 13.5v.1" />
    </svg>
  ),
  coins: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="8" cy="7" rx="5" ry="2.2" /><path d="M3 7v4c0 1.2 2.2 2.2 5 2.2s5-1 5-2.2V7" /><ellipse cx="16" cy="14" rx="5" ry="2.2" /><path d="M11 14v4c0 1.2 2.2 2.2 5 2.2s5-1 5-2.2v-4" />
    </svg>
  ),
};

type Feature = { icon: ReactNode; title: string; body: string };

const freeFeatures: Feature[] = [
  { icon: icon.path, title: "Optimized learning path", body: "An adaptive path tuned to your goal, pace, and level — not a generic syllabus." },
  { icon: icon.globe, title: "English language support", body: "Fluent, clear explanations calibrated for global English learners." },
  { icon: icon.code, title: "Hands-on code practice", body: "Run, iterate, and learn by doing — practice embedded inside every concept." },
  { icon: icon.trophy, title: "Gamified monthly contests", body: "Leaderboards, streaks, and monthly challenges that reward consistent progress." },
  { icon: icon.notes, title: "PDF → notes generator", body: "Turn any PDF into structured, revision-ready notes in seconds." },
  { icon: icon.spark, title: "Test yourself · earn XP", body: "Adaptive quizzes that pinpoint weak spots and convert effort into XP." },
  { icon: icon.offline, title: "Offline mode", body: "Download your optimized path once, then learn without a connection." },
  { icon: icon.signal, title: "Low-bandwidth ready", body: "Built to stay fast and usable on patchy, low-internet networks." },
  { icon: icon.gift, title: "Top-3 monthly rewards", body: "Real merch for top performers — bag, tee, and bottle every month." },
  { icon: icon.ticket, title: "Free software coupons", body: "Curated coupons and credits for tools learners actually use." },
];

const premiumFeatures: Feature[] = [
  { icon: icon.box, title: "Full application environments", body: "Spin up real, isolated environments to build projects end-to-end — not toy sandboxes." },
  { icon: icon.plug, title: "Plugin ecosystem", body: "Extend Lumintora with plugins for the stacks, editors, and workflows you already use." },
  { icon: icon.mic, title: "AI-based mock interviews", body: "Realistic interview simulations with voice, follow-ups, and structured feedback." },
  { icon: icon.building, title: "Company-wise preparation", body: "Targeted tracks aligned to hiring bars at specific companies and roles." },
  { icon: icon.languages, title: "Multi-language support", body: "Learn in your native language — explanations, notes, and practice localized." },
  { icon: icon.flow, title: "Smart revision", body: "Notes + auto-generated flow diagrams that surface exactly when you need them." },
  { icon: icon.lab, title: "Real-time lab", body: "Live logic playgrounds and real datasets — practice on problems that actually exist." },
  { icon: icon.tutor, title: "AI Tutor", body: "A patient, always-on tutor that teaches your gaps in your words, not a script." },
  { icon: icon.socratic, title: "Socratic AI", body: "Learn by being asked the right questions — deep understanding, not memorization." },
  { icon: icon.coins, title: "Learn & earn", body: "Convert mastery into real rewards — earn as you grow, verifiably." },
];

function FeatureRow({ f }: { f: Feature }) {
  return (
    <li className="group flex items-start gap-4 border-t border-hairline py-4 first:border-t-0">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-foreground/80 transition-colors group-hover:text-primary">
        {f.icon}
      </span>
      <div className="min-w-0">
        <p className="text-sm font-medium leading-snug text-foreground">{f.title}</p>
        <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{f.body}</p>
      </div>
    </li>
  );
}

export function FeatureMatrix() {
  return (
    <section id="features" className="relative border-t border-hairline">
      {/* Section header */}
      <div className="mx-auto max-w-6xl px-6 pt-28 sm:pt-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-6 bg-border" />
            What's inside
            <span className="h-px w-6 bg-border" />
          </p>
          <h2 className="text-balance font-display text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Two tiers. One adaptive core.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Everything you need to start learning well — and a premium tier for those
            preparing for what's next.
          </p>
        </div>
      </div>

      {/* Tier columns */}
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* ───── V1 · Free ───── */}
          <article className="relative rounded-2xl border border-border bg-background p-8 shadow-soft sm:p-10">
            <header className="mb-8 flex items-start justify-between gap-6 border-b border-hairline pb-6">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Version v1
                </p>
                <h3 className="mt-2 font-display text-2xl font-medium tracking-tight text-foreground">
                  Lumintora Core
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  The full adaptive learning experience — free, forever.
                </p>
              </div>
              <span className="shrink-0 rounded-full border border-border bg-subtle px-3 py-1 text-[11px] font-medium tabular-nums text-foreground">
                Free
              </span>
            </header>

            <ul>
              {freeFeatures.map((f) => (
                <FeatureRow key={f.title} f={f} />
              ))}
            </ul>
          </article>

          {/* ───── V1 Premium ───── */}
          <article
            className="relative overflow-hidden rounded-2xl border p-8 shadow-elevated sm:p-10"
            style={{
              borderColor: "oklch(0.55 0.24 280 / 0.35)",
              background:
                "linear-gradient(180deg, oklch(0.99 0.01 280) 0%, oklch(0.985 0.003 270) 100%)",
            }}
          >
            {/* Ambient premium wash */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full"
              style={{
                background:
                  "radial-gradient(closest-side, oklch(0.7 0.22 280 / 0.25), transparent 70%)",
                filter: "blur(20px)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full"
              style={{
                background:
                  "radial-gradient(closest-side, oklch(0.8 0.14 220 / 0.2), transparent 70%)",
                filter: "blur(24px)",
              }}
            />

            <header className="relative mb-8 flex items-start justify-between gap-6 border-b border-hairline pb-6">
              <div>
                <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot" />
                  Version v1 · Premium
                </p>
                <h3 className="mt-2 font-display text-2xl font-medium tracking-tight text-foreground">
                  Lumintora Premium
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Everything in Core, plus interview-grade depth, real environments, and
                  a personal AI tutor.
                </p>
              </div>
              <span
                className="shrink-0 rounded-full px-3 py-1 text-[11px] font-medium text-primary-foreground"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.6 0.24 280), oklch(0.55 0.22 260))",
                }}
              >
                Premium
              </span>
            </header>

            {/* "Includes everything in Core" chip */}
            <div className="relative mb-2 flex items-center gap-2 text-[12px] text-muted-foreground">
              <span className="inline-flex h-5 items-center rounded-full border border-border bg-background px-2 font-medium text-foreground">
                Core
              </span>
              <span>+ everything above, and —</span>
            </div>

            <ul className="relative">
              {premiumFeatures.map((f) => (
                <FeatureRow key={f.title} f={f} />
              ))}
            </ul>
          </article>
        </div>

        {/* Quiet footnote */}
        <p className="mx-auto mt-10 max-w-xl text-center text-xs leading-relaxed text-muted-foreground">
          Early access opens in waves. Core features ship first; Premium modules roll
          out progressively to waitlist members.
        </p>
      </div>
    </section>
  );
}
