import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn, gradients, glass, radius, shadows } from "@/lib/design-system";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type GlassButtonProps = ButtonProps | AnchorProps;

export function GlassButton(props: GlassButtonProps) {
  const variant = props.variant ?? "primary";
  const size = props.size ?? "md";
  const className = props.className ?? "";

  const base = cn(
    "inline-flex items-center justify-center border font-medium transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#6D5EF9]/30",
    radius.pill,
    shadows.soft,
    size === "sm" ? "px-4 py-2 text-sm" : size === "lg" ? "px-6 py-3.5 text-base" : "px-5 py-3 text-base",
  );

  const variants: Record<Variant, string> = {
    primary: cn(
      "text-white border border-white/20",
      "bg-[linear-gradient(135deg,rgba(109,94,249,0.95)_0%,rgba(167,139,250,0.92)_55%,rgba(100,230,217,0.90)_100%)]",
      "backdrop-blur-2xl",
      "shadow-[0_12px_35px_rgba(109,94,249,0.35)]",
      "hover:-translate-y-1",
      "hover:scale-[1.02]",
      "hover:shadow-[0_20px_50px_rgba(109,94,249,0.45)]",
    ),

    secondary: cn(
      "border border-white/60",
      "bg-white/75",
      "backdrop-blur-2xl",
      "text-slate-900",
      "hover:bg-white/90",
      "hover:-translate-y-1",
    ),

    ghost: cn(
      "border border-slate-200",
      "bg-white/40",
      "backdrop-blur-xl",
      "text-slate-900",
      "hover:bg-white/70",
      "hover:-translate-y-1",
    ),
  };

  if ("href" in props) {
    const { variant: _v, size: _s, className: _c, children, ...rest } = props as AnchorProps;
    return (
      <a {...rest} className={cn(base, variants[variant], className)}>
        {children}
      </a>
    );
  }

  const { variant: _v, size: _s, className: _c, children, ...rest } = props as ButtonProps;
  return (
    <button {...rest} className={cn(base, variants[variant], className)}>
      {children}
    </button>
  );
}

export default GlassButton;
