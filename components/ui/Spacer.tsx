import { cn } from "@/lib/design-system";

interface SpacerProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  axis?: "x" | "y";
  className?: string;
}

const verticalSizes: Record<NonNullable<SpacerProps["size"]>, string> = {
  xs: "h-3 w-full",
  sm: "h-4 w-full",
  md: "h-6 w-full",
  lg: "h-8 w-full",
  xl: "h-10 w-full",
  xxl: "h-12 w-full",
};

const horizontalSizes: Record<NonNullable<SpacerProps["size"]>, string> = {
  xs: "w-3 h-0.5",
  sm: "w-4 h-0.5",
  md: "w-6 h-0.5",
  lg: "w-8 h-0.5",
  xl: "w-10 h-0.5",
  xxl: "w-12 h-0.5",
};

export function Spacer({ size = "md", axis = "y", className = "" }: SpacerProps) {
  const dimension = axis === "x" ? horizontalSizes[size] : verticalSizes[size];

  return <div className={cn(dimension, className)} />;
}

export default Spacer;
