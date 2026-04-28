import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { AbstractFlow } from "@/components/site/AbstractFlow";
import { FeatureMatrix } from "@/components/site/FeatureMatrix";
import { WaitlistForm } from "@/components/site/WaitlistForm";
import { Logo } from "@/components/Logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumintora — Learning that adapts to you" },
      {
        name: "description",
        content:
          "Lumintora is an AI-native learning system that builds and evolves your path around your goals. Join the waitlist for early access.",
      },
      { property: "og:title", content: "Lumintora — Learning that adapts to you" },
      {
        property: "og:description",
        content:
          "An AI-native learning system that adapts to how you actually learn. Early access opening soon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="relative min-h-screen bg-background text-foreground">
      <Nav />

      <main className="pt-16">
        {/* HERO */}
        <section className="relative mx-auto max-w-6xl px-6 pt-20 pb-28 sm:pt-28 lg:pt-36 lg:pb-40">
          <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <p className="fade-up fade-up-1 mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-subtle px-3 py-1 text-xs font-medium text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot" />
                Pre-launch · Early access
              </p>
              <h1 className="fade-up fade-up-2 text-balance font-display text-5xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-[4.25rem]">
                Learning that adapts to you.
              </h1>
              <p className="fade-up fade-up-3 mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
                Lumintora builds and evolves a learning path around your goals — quietly, in
                the background, as you go.
              </p>
              <div className="fade-up fade-up-4 mt-10 flex flex-col items-start gap-3">
                <a
                  href="#waitlist"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-soft transition-all duration-300 hover:-translate-y-px hover:shadow-elevated"
                >
                  Join the waitlist
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </a>
                <p className="text-xs text-muted-foreground">
                  No spam. Early access only.
                </p>
              </div>
            </div>

            <div className="fade-up fade-up-3 lg:col-span-6">
              <AbstractFlow />
            </div>
          </div>
        </section>

        {/* QUIET DIFFERENTIATION */}
        <section className="border-y border-hairline bg-subtle/60">
          <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
            <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              <div className="bg-background p-8 sm:p-10">
                <p className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Most learning today
                </p>
                <ul className="space-y-4 text-base text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-2.5 h-px w-4 bg-muted-foreground/40" />
                    Static, pre-built courses
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2.5 h-px w-4 bg-muted-foreground/40" />
                    One path for everyone
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2.5 h-px w-4 bg-muted-foreground/40" />
                    Passive watching, easy to drift
                  </li>
                </ul>
              </div>
              <div className="bg-background p-8 sm:p-10">
                <p className="mb-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  With Lumintora
                </p>
                <ul className="space-y-4 text-base text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-2.5 h-px w-4 bg-primary" />
                    Paths that adapt as you learn
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2.5 h-px w-4 bg-primary" />
                    Shaped around your goals
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2.5 h-px w-4 bg-primary" />
                    Continuous, quiet feedback
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CORE EXPERIENCE — the loop */}
        <section className="mx-auto max-w-5xl px-6 py-28 sm:py-36">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              How it works
            </p>
            <h2 className="text-balance font-display text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl">
              A small loop, repeating quietly.
            </h2>
          </div>

          <div className="relative mt-16">
            {/* connecting line */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-12 top-12 hidden h-px md:block"
              style={{
                background:
                  "linear-gradient(to right, transparent, oklch(0.55 0.24 280 / 0.4), oklch(0.55 0.24 280 / 0.4), transparent)",
              }}
            />

            <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
              {[
                {
                  step: "01",
                  title: "Start with a goal",
                  body: "Tell Lumintora what you want to achieve — a topic, a role, a project.",
                },
                {
                  step: "02",
                  title: "It builds a path",
                  body: "An adaptive sequence forms in real time, shaped to your level and pace.",
                },
                {
                  step: "03",
                  title: "It keeps adjusting",
                  body: "As you progress, the path quietly reshapes — clearer, faster, on track.",
                },
              ].map((item) => (
                <li key={item.step} className="relative">
                  <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-border bg-background" />
                    <div className="absolute inset-2 rounded-full border border-primary/20 bg-card" />
                    <span className="relative font-display text-sm font-medium tracking-wider text-primary">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-center text-lg font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-xs text-center text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FEATURE MATRIX — V1 and V1 Premium */}
        <FeatureMatrix />

        {/* CONTEXTUAL USE */}
        <section className="border-t border-hairline bg-subtle/60">
          <div className="mx-auto max-w-4xl px-6 py-24 sm:py-28">
            <div className="mx-auto max-w-xl text-center">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                For people, not personas
              </p>
              <h2 className="text-balance font-display text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl">
                Built for the moments learning gets stuck.
              </h2>
            </div>

            <div className="mt-14 space-y-px overflow-hidden rounded-2xl border border-border bg-border">
              {[
                "A student preparing for exams without knowing where to start.",
                "A developer trying to go beyond tutorials and into real depth.",
                "A working professional needing structured upskilling around a busy week.",
              ].map((line, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 bg-background px-6 py-6 sm:px-8"
                >
                  <span className="mt-1 font-display text-xs font-medium tabular-nums text-muted-foreground">
                    0{i + 1}
                  </span>
                  <p className="text-base leading-relaxed text-foreground sm:text-lg">
                    {line}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-28">
          <p className="mx-auto max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
            Currently in early development. Built by a small team of engineers and designers
            focused on how learning systems actually work.
          </p>
        </section>

        {/* WAITLIST */}
        <section
          id="waitlist"
          className="relative border-t border-hairline bg-subtle/60"
        >
          <div className="mx-auto max-w-2xl px-6 py-28 sm:py-36">
            <div className="text-center">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot" />
                Limited early access
              </p>
              <h2 className="text-balance font-display text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl">
                Early access is opening soon.
              </h2>
              <p className="mx-auto mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                Join a small group of early users helping shape how Lumintora learns with you.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-md">
              <WaitlistForm />
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-hairline">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
            <Logo className="h-7 w-auto opacity-90" />
            <nav className="flex items-center gap-7 text-sm text-muted-foreground">
              <a href="mailto:hello@lumintora.com" className="transition-colors hover:text-foreground">
                Contact
              </a>
              <a href="#waitlist" className="transition-colors hover:text-foreground">
                Waitlist
              </a>
              <a href="#top" className="transition-colors hover:text-foreground">
                Privacy
              </a>
            </nav>
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Lumintora</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
