import logoLight from "@/assets/logo-light.png";
import logoDark from "@/assets/logo-dark.png";

interface LogoProps {
  className?: string;
  variant?: "auto" | "light" | "dark";
}

export function Logo({ className = "h-10 w-auto", variant = "auto" }: LogoProps) {
  if (variant === "light") {
    return <img src={logoLight} alt="Lumintora" className={className} />;
  }
  if (variant === "dark") {
    return <img src={logoDark} alt="Lumintora" className={className} />;
  }
  return (
    <>
      <img
        src={logoLight}
        alt="Lumintora"
        className={`${className} block dark:hidden`}
      />
      <img
        src={logoDark}
        alt="Lumintora"
        className={`${className} hidden dark:block`}
      />
    </>
  );
}
