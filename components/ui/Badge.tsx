import type { ReactNode } from "react";
import { cn, shadows } from "@/lib/design-system";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  tone?: "default" | "accent" | "soft";
}

export function Badge({ children, className = "", tone = "default" }: BadgeProps) {
  const tones = {
    default: cn("border-slate-200 bg-white/85 text-slate-900", shadows.soft),
    accent: cn("border-[#AFC4CE]/50 bg-[#DCE7EA] text-[#2A211D]", shadows.glow),
    soft: cn("border-white/70 bg-white/70 text-slate-600", shadows.soft),
  };

  return (
    <span className={cn("inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium", tones[tone], className)}>
      {children}
    </span>
  );
}

export default Badge;
