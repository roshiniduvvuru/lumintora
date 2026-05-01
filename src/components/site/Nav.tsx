import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { useAuth } from "@/hooks/useAuth";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { user, loading } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center" aria-label="Lumintora home">
          <Logo className="h-8 w-auto md:h-9" />
        </a>

        <div className="flex items-center gap-2">
          {!loading && user ? (
            <Link
              to="/dashboard"
              className="group inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/60 px-4 py-1.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-soft"
            >
              Dashboard
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          ) : (
            <>
              <Link
                to="/auth"
                search={{ mode: "login", redirect: "/dashboard" }}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Sign in
              </Link>
              <Link
                to="/auth"
                search={{ mode: "signup", redirect: "/dashboard" }}
                className="group inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/60 px-4 py-1.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-soft"
              >
                Sign up
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
