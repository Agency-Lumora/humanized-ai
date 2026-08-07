import type { ReactNode } from "react";
import { cn, gradients } from "@/lib/design-system";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span className={cn(gradients.text, "bg-clip-text text-transparent", className)}>{children}</span>
  );
}

export default GradientText;
