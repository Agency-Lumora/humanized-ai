import { createElement } from "react";
import type { ReactNode, ElementType } from "react";
import { cn } from "@/lib/design-system";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export function Container({
  children,
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return createElement(
    Tag,
    {
      className: cn(
        "mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12",
        className
      ),
    },
    children
  );
}