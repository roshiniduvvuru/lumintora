import { useState, type FormEvent } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    const value = email.trim();
    if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError("Please enter a valid email.");
      return;
    }

    setState("submitting");
    // Local-only: no backend yet. Soft success.
    window.setTimeout(() => {
      setState("success");
    }, 600);
  };

  if (state === "success") {
    return (
      <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft">
        <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
          ✓
        </div>
        <p className="text-base font-medium text-foreground">You're on the list.</p>
        <p className="mt-1 text-sm text-muted-foreground">
          We'll reach out when early access opens.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="w-full">
      <div
        className={`flex flex-col gap-2 rounded-2xl border bg-card p-2 shadow-soft transition-all sm:flex-row sm:items-center sm:gap-0 ${
          error ? "border-destructive/50" : "border-border focus-within:border-primary/40 focus-within:shadow-elevated"
        }`}
      >
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="you@domain.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError(null);
          }}
          className="w-full flex-1 bg-transparent px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
        />
        <button
          type="submit"
          disabled={state === "submitting"}
          className="inline-flex shrink-0 items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-px hover:shadow-elevated active:translate-y-0 active:shadow-soft disabled:opacity-70"
        >
          {state === "submitting" ? "Sending…" : "Request access"}
        </button>
      </div>
      <p
        className={`mt-3 text-xs transition-colors ${
          error ? "text-destructive" : "text-muted-foreground"
        }`}
        aria-live="polite"
      >
        {error ?? "No spam. We'll reach out when it's ready."}
      </p>
    </form>
  );
}
