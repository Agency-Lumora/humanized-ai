import { createElement } from "react";
import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn, typography } from "@/lib/design-system";

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children: ReactNode;
  size?: "display" | "h1" | "h2" | "h3" | "body" | "caption";
  tone?: "default" | "muted" | "accent";
  className?: string;
}

export function Typography({
  as = "p",
  children,
  size = "body",
  tone = "default",
  className = "",
  ...props
}: TypographyProps) {
  const Component = as as ElementType;
  const sizeClasses = {
    display: typography.display,
    h1: typography.h1,
    h2: typography.h2,
    h3: typography.h3,
    body: typography.body,
    caption: typography.caption,
  };

  const toneClasses = {
    default: "text-slate-950",
    muted: "text-slate-500",
    accent: "text-[#6D5EF9]",
  };

  return createElement(Component, { className: cn(sizeClasses[size], toneClasses[tone], className), ...props }, children);
}

export default Typography;
