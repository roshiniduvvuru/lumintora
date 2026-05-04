import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  LayoutDashboard,
  BookOpen,
  Trophy,
  FileText,
  FlaskConical,
  Sparkles,
  Settings,
  LogOut,
  Search,
  Bell,
  Flame,
  Zap,
  Target,
  Route as RouteIcon,
  Languages,
  Code2,
  Gamepad2,
  FileDown,
  ClipboardCheck,
  WifiOff,
  Signal,
  Gift,
  TicketPercent,
  Boxes,
  Plug,
  Mic,
  Building2,
  Globe2,
  GitBranch,
  Database,
  GraduationCap,
  MessagesSquare,
  Coins,
  Lock,
  ChevronRight,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — Lumintora" }] }),
  component: Dashboard,
});

type NavItem = { id: string; label: string; icon: React.ComponentType<{ className?: string }> };

const NAV: NavItem[] = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "path", label: "My Path", icon: RouteIcon },
  { id: "practice", label: "Practice", icon: Code2 },
  { id: "contests", label: "Contests", icon: Trophy },
  { id: "notes", label: "Notes", icon: FileText },
  { id: "lab", label: "Real-Time Lab", icon: FlaskConical },
  { id: "tutor", label: "AI Tutor", icon: Sparkles },
];

type Feature = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  progress?: number;
};

const CORE_FEATURES: Feature[] = [
  { icon: RouteIcon, title: "Optimized learning path", desc: "Adaptive path tuned to your goal, pace, and level.", progress: 64 },
  { icon: Languages, title: "English language support", desc: "Fluent, clear explanations for global learners.", progress: 100 },
  { icon: Code2, title: "Hands-on code practice", desc: "Run, iterate, and learn by doing — inside every concept.", progress: 42 },
  { icon: Gamepad2, title: "Gamified monthly contests", desc: "Leaderboards, streaks, and challenges that reward consistency.", progress: 28 },
  { icon: FileDown, title: "PDF → notes generator", desc: "Turn any PDF into structured, revision-ready notes.", progress: 18 },
  { icon: ClipboardCheck, title: "Test yourself · earn XP", desc: "Adaptive quizzes that pinpoint weak spots.", progress: 55 },
  { icon: WifiOff, title: "Offline mode", desc: "Download your path once, then learn without a connection." },
  { icon: Signal, title: "Low-bandwidth ready", desc: "Stays fast and usable on patchy networks." },
  { icon: Gift, title: "Top-3 monthly rewards", desc: "Real merch for top performers — bag, tee, and bottle." },
  { icon: TicketPercent, title: "Free software coupons", desc: "Curated coupons and credits for tools learners use." },
];

const PREMIUM_FEATURES: Feature[] = [
  { icon: Boxes, title: "Full application environments", desc: "Spin up real, isolated environments — not toy sandboxes." },
  { icon: Plug, title: "Plugin ecosystem", desc: "Extend Lumintora for the stacks and editors you use." },
  { icon: Mic, title: "AI-based mock interviews", desc: "Realistic simulations with voice and structured feedback." },
  { icon: Building2, title: "Company-wise preparation", desc: "Targeted tracks aligned to specific hiring bars." },
  { icon: Globe2, title: "Multi-language support", desc: "Explanations, notes, and practice in your native language." },
  { icon: GitBranch, title: "Smart revision", desc: "Notes + auto-generated flow diagrams when you need them." },
  { icon: Database, title: "Real-time lab", desc: "Live logic playgrounds and real datasets." },
  { icon: GraduationCap, title: "AI Tutor", desc: "An always-on tutor that teaches your gaps in your words." },
  { icon: MessagesSquare, title: "Socratic AI", desc: "Learn by being asked the right questions." },
  { icon: Coins, title: "Learn & earn", desc: "Convert mastery into real, verifiable rewards." },
];

function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [active, setActive] = useState("overview");

  const name =
    (user?.user_metadata?.display_name as string | undefined) ??
    (user?.user_metadata?.full_name as string | undefined) ??
    user?.email?.split("@")[0] ??
    "learner";

  const handleSignOut = async () => {
    await signOut();
    navigate({ to: "/" });
  };

  // Aggregate progress across tracked Core features
  const tracked = CORE_FEATURES.filter((f) => typeof f.progress === "number");
  const overall = Math.round(
    tracked.reduce((s, f) => s + (f.progress ?? 0), 0) / tracked.length,
  );

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="hidden w-64 shrink-0 flex-col border-r border-border/60 bg-card/40 backdrop-blur-xl md:flex">
        <div className="flex h-16 items-center border-b border-border/60 px-5">
          <Link to="/" aria-label="Lumintora home">
            <Logo className="h-7 w-auto" />
          </Link>
        </div>

        <nav className="flex-1 space-y-1 p-3">
          <p className="px-3 pb-2 pt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Learn
          </p>
          {NAV.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="border-t border-border/60 p-3">
          <button
            onClick={() => setActive("settings")}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Settings className="h-4 w-4" />
            Settings
          </button>
          <button
            onClick={handleSignOut}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Topbar */}
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between gap-4 border-b border-border/60 bg-background/80 px-4 backdrop-blur-xl md:px-8">
          <div className="flex flex-1 items-center gap-3">
            <div className="relative w-full max-w-md">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search lessons, problems, notes…"
                className="h-10 w-full rounded-full border border-border bg-card/60 pl-9 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50 focus:bg-card"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-medium sm:inline-flex">
              <Flame className="h-3.5 w-3.5 text-orange-500" />
              12 day streak
            </span>
            <button className="relative rounded-full border border-border bg-card/60 p-2 transition-colors hover:bg-card">
              <Bell className="h-4 w-4" />
              <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
            </button>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
              {name.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>

        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 md:px-8">
          {active !== "overview" && (
            <SectionView id={active} name={name} onBack={() => setActive("overview")} />
          )}
          {active === "overview" && (<>
          {/* Greeting + ring */}
          <section className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
              <p className="mb-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Welcome back
              </p>
              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Hi, {name}. Let's keep the path moving.
              </h1>
              <p className="mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
                Your adaptive plan is recalibrated for today. Pick up where you left off, or dive into a fresh challenge.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button className="rounded-full" onClick={() => setActive("practice")}>
                  Resume learning
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
                <Button variant="outline" className="rounded-full" onClick={() => setActive("path")}>
                  Browse path
                </Button>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border/60 pt-6">
                <Stat icon={Zap} label="XP today" value="320" />
                <Stat icon={Target} label="Goals hit" value="4 / 6" />
                <Stat icon={Trophy} label="Rank" value="#142" />
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
              <p className="mb-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Overall progress
              </p>
              <div className="flex items-center gap-6">
                <ProgressRing value={overall} />
                <div className="space-y-2 text-sm">
                  <Legend color="bg-primary" label="Completed" value={`${overall}%`} />
                  <Legend color="bg-muted" label="Remaining" value={`${100 - overall}%`} />
                  <p className="pt-2 text-xs text-muted-foreground">
                    Across {tracked.length} active modules
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Core features */}
          <section className="mt-10">
            <SectionHeader
              eyebrow="Version v1 · Core"
              title="Lumintora Core"
              subtitle="The full adaptive learning experience — free, forever."
              badge={<Badge variant="secondary" className="rounded-full">Free</Badge>}
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {CORE_FEATURES.map((f) => (
                <FeatureCard key={f.title} feature={f} />
              ))}
            </div>
          </section>

          {/* Premium features */}
          <section className="mt-12">
            <SectionHeader
              eyebrow="Version v1 · Premium"
              title="Lumintora Premium"
              subtitle="Everything in Core, plus interview-grade depth, real environments, and a personal AI tutor."
              badge={
                <Badge className="rounded-full bg-primary/10 text-primary hover:bg-primary/20">
                  Premium
                </Badge>
              }
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {PREMIUM_FEATURES.map((f) => (
                <FeatureCard key={f.title} feature={f} premium />
              ))}
            </div>

            <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-gradient-to-br from-accent/40 to-card p-6 sm:flex-row sm:items-center md:p-8">
              <div>
                <h3 className="text-lg font-semibold tracking-tight">Unlock Lumintora Premium</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Real environments, AI mock interviews, and a personal tutor — built for offers, not just learning.
                </p>
              </div>
              <Button className="rounded-full">
                Upgrade
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </section>

          <footer className="mt-12 border-t border-border/60 pt-6 text-xs text-muted-foreground">
            Static preview · Data shown is illustrative.
          </footer>
          </>)}
        </main>
      </div>
    </div>
  );
}

/* ---------- Sub-components ---------- */

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  badge,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  badge?: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3">
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{eyebrow}</p>
        <h2 className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
        <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{subtitle}</p>
      </div>
      {badge}
    </div>
  );
}

function FeatureCard({ feature, premium }: { feature: Feature; premium?: boolean }) {
  const Icon = feature.icon;
  return (
    <div className="group relative flex flex-col rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-elevated">
      <div className="flex items-start justify-between">
        <div
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-xl",
            premium ? "bg-primary/10 text-primary" : "bg-accent text-accent-foreground",
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
        {premium && (
          <Lock className="h-3.5 w-3.5 text-muted-foreground" aria-label="Premium" />
        )}
      </div>
      <h3 className="mt-4 text-sm font-semibold tracking-tight">{feature.title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{feature.desc}</p>

      {typeof feature.progress === "number" ? (
        <div className="mt-4">
          <div className="flex items-center justify-between text-[11px] text-muted-foreground">
            <span>Progress</span>
            <span className="font-medium text-foreground">{feature.progress}%</span>
          </div>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${feature.progress}%` }}
            />
          </div>
        </div>
      ) : (
        <div className="mt-4 inline-flex items-center text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
          {premium ? "Included with Premium" : "Available"} <ChevronRight className="ml-0.5 h-3 w-3" />
        </div>
      )}
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </div>
      <p className="mt-1 text-xl font-semibold tracking-tight">{value}</p>
    </div>
  );
}

function Legend({ color, label, value }: { color: string; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-6">
      <span className="flex items-center gap-2 text-muted-foreground">
        <span className={cn("h-2 w-2 rounded-full", color)} />
        {label}
      </span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

function ProgressRing({ value, size = 128, stroke = 12 }: { value: number; size?: number; stroke?: number }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="var(--color-muted)"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="var(--color-primary)"
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-[stroke-dashoffset] duration-700"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-semibold tracking-tight">{value}%</span>
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">complete</span>
      </div>
    </div>
  );
}

/* ---------- Section Views ---------- */

type SectionData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  Icon: React.ComponentType<{ className?: string }>;
  stats: { label: string; value: string }[];
  items: { title: string; meta: string; desc: string; progress?: number; tag?: string }[];
  cta: string;
};

const SECTIONS: Record<string, SectionData> = {
  path: {
    eyebrow: "Adaptive plan",
    title: "My Path",
    subtitle: "Your personalized roadmap — recalibrated daily based on what you've mastered.",
    Icon: RouteIcon,
    stats: [
      { label: "Modules", value: "24" },
      { label: "Completed", value: "9" },
      { label: "Est. time left", value: "38h" },
    ],
    items: [
      { title: "Foundations of Algorithms", meta: "Module 01 · 6 lessons", desc: "Big-O, recursion, and the mental models that scale.", progress: 100, tag: "Done" },
      { title: "Arrays & Hashing Mastery", meta: "Module 02 · 8 lessons", desc: "Pattern recognition for the most common interview shapes.", progress: 72, tag: "In progress" },
      { title: "Two Pointers & Sliding Window", meta: "Module 03 · 5 lessons", desc: "Move from brute force to optimal in one pass.", progress: 35, tag: "In progress" },
      { title: "Trees & Graph Traversals", meta: "Module 04 · 9 lessons", desc: "DFS, BFS, and when to reach for each.", progress: 0, tag: "Locked next" },
      { title: "Dynamic Programming Intuition", meta: "Module 05 · 7 lessons", desc: "Build the recurrence, not the memorization.", progress: 0, tag: "Upcoming" },
      { title: "System Design Primer", meta: "Module 06 · 6 lessons", desc: "Trade-offs that real engineers reason about.", progress: 0, tag: "Upcoming" },
    ],
    cta: "Resume next lesson",
  },
  practice: {
    eyebrow: "Hands-on",
    title: "Practice",
    subtitle: "Run, iterate, and learn by doing — every concept is a runnable problem.",
    Icon: Code2,
    stats: [
      { label: "Solved", value: "127" },
      { label: "Streak", value: "12d" },
      { label: "Acceptance", value: "78%" },
    ],
    items: [
      { title: "Two Sum", meta: "Easy · Arrays", desc: "Classic — find indices that sum to target.", tag: "Solved" },
      { title: "Longest Substring Without Repeating", meta: "Medium · Sliding Window", desc: "Track seen characters with a moving window.", tag: "Recommended" },
      { title: "Group Anagrams", meta: "Medium · Hashing", desc: "Bucket by sorted key or character signature.", tag: "New" },
      { title: "Course Schedule", meta: "Medium · Graphs", desc: "Cycle detection on a directed graph.", tag: "Stretch" },
      { title: "Word Ladder", meta: "Hard · BFS", desc: "Shortest transformation between words.", tag: "Challenge" },
      { title: "LRU Cache", meta: "Medium · Design", desc: "HashMap + doubly linked list in O(1).", tag: "Interview" },
    ],
    cta: "Start daily problem",
  },
  contests: {
    eyebrow: "Monthly arena",
    title: "Contests",
    subtitle: "Compete monthly. Top 3 win real merch, free credits, and a public verifiable badge.",
    Icon: Trophy,
    stats: [
      { label: "Your rank", value: "#142" },
      { label: "XP this month", value: "2,340" },
      { label: "Time to next", value: "9d 04h" },
    ],
    items: [
      { title: "May Code Sprint", meta: "Live · 4 problems", desc: "60-minute weekly sprint. Climb the global board.", tag: "Live" },
      { title: "Algorithms Marathon", meta: "Monthly · 8 problems", desc: "Three hours, three difficulty tiers. Top 3 win merch.", tag: "Featured" },
      { title: "DSA Survivor", meta: "Knockout · 6 rounds", desc: "Wrong answer = eliminated. Last standing wins.", tag: "Bracket" },
      { title: "Frontend Build-off", meta: "Weekend · 24h", desc: "Ship a live UI from a brief. Community votes.", tag: "Open" },
      { title: "SQL Showdown", meta: "Friday night · 1h", desc: "Real datasets, real queries, real time.", tag: "Weekly" },
      { title: "Interview Gauntlet", meta: "Premium · 90 min", desc: "Curated by company. Practice the actual bar.", tag: "Premium" },
    ],
    cta: "Enter live contest",
  },
  notes: {
    eyebrow: "Smart revision",
    title: "Notes",
    subtitle: "Drop a PDF or pick a topic — we generate revision-ready notes and flow diagrams.",
    Icon: FileText,
    stats: [
      { label: "Notebooks", value: "14" },
      { label: "Generated this week", value: "6" },
      { label: "Pages indexed", value: "428" },
    ],
    items: [
      { title: "Operating Systems — Processes", meta: "From PDF · 24 pages", desc: "Auto-summarized with a process state flow diagram.", progress: 100, tag: "Ready" },
      { title: "DBMS — Normalization", meta: "Generated · 12 pages", desc: "1NF → BCNF with worked examples.", progress: 100, tag: "Ready" },
      { title: "Computer Networks — TCP", meta: "From PDF · 31 pages", desc: "Handshake, congestion control, and a packet-flow map.", progress: 80, tag: "Generating" },
      { title: "OOP — SOLID Principles", meta: "Generated · 8 pages", desc: "Each principle with a refactor before/after.", progress: 100, tag: "Ready" },
      { title: "Graphs — Traversals Cheatsheet", meta: "Auto · 4 pages", desc: "BFS vs DFS decision tree and complexity table.", progress: 100, tag: "Ready" },
      { title: "Upload PDF", meta: "Drop a file", desc: "Convert any textbook chapter into structured notes.", tag: "New" },
    ],
    cta: "Generate notes from PDF",
  },
  lab: {
    eyebrow: "Live environments",
    title: "Real-Time Lab",
    subtitle: "Real datasets, real services, real logic — practice on problems that actually exist.",
    Icon: FlaskConical,
    stats: [
      { label: "Active labs", value: "8" },
      { label: "Datasets", value: "22" },
      { label: "Compute", value: "On-demand" },
    ],
    items: [
      { title: "Build a URL Shortener", meta: "Lab · 90 min", desc: "Design, store, and benchmark a real service.", tag: "Hot" },
      { title: "Recommend Movies (MovieLens)", meta: "Dataset · 25M ratings", desc: "Collaborative filtering on a real-world set.", tag: "Dataset" },
      { title: "Rate-Limit a Live API", meta: "Lab · 60 min", desc: "Token bucket vs leaky bucket — measure both.", tag: "Systems" },
      { title: "SQL on NYC Taxi Data", meta: "Dataset · 1.5B rows", desc: "Window functions where they actually matter.", tag: "Big data" },
      { title: "Mini Search Engine", meta: "Lab · 2h", desc: "Inverted index, TF-IDF, and a tiny ranker.", tag: "Build" },
      { title: "Stream Processing Sandbox", meta: "Lab · 90 min", desc: "Tumbling vs sliding windows on a live feed.", tag: "Premium" },
    ],
    cta: "Spin up a lab",
  },
  tutor: {
    eyebrow: "Always-on guide",
    title: "AI Tutor",
    subtitle: "A patient tutor that teaches your gaps in your words — Socratic when you want depth.",
    Icon: GraduationCap,
    stats: [
      { label: "Sessions", value: "32" },
      { label: "Concepts unlocked", value: "47" },
      { label: "Avg session", value: "11 min" },
    ],
    items: [
      { title: "Explain dynamic programming like I'm 12", meta: "Conversation", desc: "Plain-language analogies grounded in your level.", tag: "Recent" },
      { title: "Debug my recursion", meta: "Code review", desc: "Paste code — get a step-by-step trace, not a fix.", tag: "Tool" },
      { title: "Socratic mode: graphs", meta: "Guided questions", desc: "Learn by being asked the right questions.", tag: "Socratic" },
      { title: "Mock interview: arrays", meta: "30 min", desc: "Realistic pacing, hints only when you ask.", tag: "Premium" },
      { title: "Concept of the day: invariants", meta: "Daily 5 min", desc: "One sharp idea, one tiny exercise.", tag: "Daily" },
      { title: "Roadmap review", meta: "Reflection", desc: "Tutor reviews your week and adjusts the path.", tag: "Weekly" },
    ],
    cta: "Start a session",
  },
};

function SectionView({ id, name, onBack }: { id: string; name: string; onBack: () => void }) {
  const data = SECTIONS[id];
  if (!data) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-soft">
        <p className="text-sm text-muted-foreground">Coming soon.</p>
        <Button variant="outline" className="mt-4 rounded-full" onClick={onBack}>
          Back to overview
        </Button>
      </div>
    );
  }
  const Icon = data.Icon;
  return (
    <div className="space-y-8">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
      >
        <ChevronRight className="h-3 w-3 rotate-180" />
        Overview
      </button>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{data.eyebrow}</p>
              <h1 className="mt-1 text-3xl font-semibold tracking-tight md:text-4xl">{data.title}</h1>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">{data.subtitle}</p>
            </div>
          </div>
          <Button className="rounded-full">
            {data.cta}
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border/60 pt-6">
          {data.stats.map((s) => (
            <div key={s.label}>
              <p className="text-xs text-muted-foreground">{s.label}</p>
              <p className="mt-1 text-xl font-semibold tracking-tight">{s.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">For {name}</p>
        <h2 className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">Curated for you</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-elevated"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  {item.meta}
                </p>
                {item.tag && (
                  <span className="rounded-full border border-border bg-background px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                    {item.tag}
                  </span>
                )}
              </div>
              <h3 className="mt-3 text-base font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>

              {typeof item.progress === "number" ? (
                <div className="mt-4">
                  <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                    <span>Progress</span>
                    <span className="font-medium text-foreground">{item.progress}%</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${item.progress}%` }} />
                  </div>
                </div>
              ) : (
                <div className="mt-4 inline-flex items-center text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Open <ChevronRight className="ml-0.5 h-3 w-3" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
