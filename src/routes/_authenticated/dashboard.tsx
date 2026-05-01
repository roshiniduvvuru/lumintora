import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { useAuth } from "@/hooks/useAuth";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — Lumintora" }] }),
  component: Dashboard,
});

function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const name =
    (user?.user_metadata?.display_name as string | undefined) ??
    (user?.user_metadata?.full_name as string | undefined) ??
    user?.email?.split("@")[0] ??
    "there";

  const handleSignOut = async () => {
    await signOut();
    navigate({ to: "/" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link to="/" className="flex items-center" aria-label="Lumintora home">
            <Logo className="h-8 w-auto md:h-9" />
          </Link>
          <button
            onClick={handleSignOut}
            className="rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm font-medium transition-colors hover:bg-card"
          >
            Sign out
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Signed in
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Welcome, {name}.
        </h1>
        <p className="mt-4 max-w-xl text-base text-muted-foreground">
          Your adaptive learning path will live here. We're preparing your first session.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Card title="Account">
            <Row label="Email" value={user?.email ?? "—"} />
            <Row label="User ID" value={user?.id?.slice(0, 8) + "…"} mono />
          </Card>
          <Card title="Next steps">
            <p className="text-sm text-muted-foreground">
              Your personalised path is being prepared. Check back soon.
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function Row({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className={mono ? "font-mono text-xs" : "font-medium"}>{value}</span>
    </div>
  );
}
