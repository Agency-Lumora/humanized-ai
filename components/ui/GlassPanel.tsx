import { GlassCard } from "./GlassCard";
import type { ComponentProps } from "react";

export type GlassPanelProps = ComponentProps<typeof GlassCard>;

export function GlassPanel(props: GlassPanelProps) {
  return <GlassCard {...props} />;
}

export default GlassPanel;
