import { cn } from "@/lib/design-system";

interface GlowEffectProps {
  className?: string;
  intensity?: "sm" | "md" | "lg";
}

export function GlowEffect({ className = "", intensity = "md" }: GlowEffectProps) {
  const sizes = {
    sm: "h-20 w-20",
    md: "h-40 w-40",
    lg: "h-64 w-64",
  };

  return (
    <div
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        sizes[intensity],
        "bg-[radial-gradient(circle,rgba(100,230,217,0.24),transparent_70%)]",
        className,
      )}
    />
  );
}

export default GlowEffect;
