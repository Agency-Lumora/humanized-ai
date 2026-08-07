import { createElement } from "react";
import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/design-system";
import { Container } from "@/components/ui/Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  id?: string;
}

export function Section({ children, className = "", as: Component = "section", id }: SectionProps) {
  const Tag = Component as ElementType;
  return createElement(
    Tag,
    { id, className: cn("py-20 sm:py-24 lg:py-32", className) },
    <Container>{children}</Container>
  );
}

export default Section;
