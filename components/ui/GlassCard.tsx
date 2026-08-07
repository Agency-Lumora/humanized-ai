import { createElement } from "react";
import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn, radius, shadows } from "@/lib/design-system";

interface GlassCardProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

export function GlassCard({
  as: Component = "div",
  children,
  className = "",
  ...props
}: GlassCardProps) {
  const Tag = Component as ElementType;
  return createElement(
    Tag,
    {
      className: cn(
        "overflow-hidden border bg-white/75 backdrop-blur-xl",
        "border-white/60",
        radius.xl,
        shadows.soft,
        "p-6",
        className,
      ),
      ...props,
    },
    children
  );
}

export default GlassCard;
