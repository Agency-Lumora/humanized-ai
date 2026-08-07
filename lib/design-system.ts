export const colors = {
  primary: "#6D5EF9",
  secondary: "#A78BFA",
  accent: "#64E6D9",
  background: "#F8FAFC",
  surface: "rgba(255,255,255,0.75)",
  text: "#111827",
  muted: "#64748b",
  border: "rgba(15,23,42,0.08)",
  white: "#ffffff",
} as const;

export const typography = {
  display: "text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl",
  h1: "text-4xl font-semibold tracking-[-0.03em] sm:text-5xl",
  h2: "text-3xl font-semibold tracking-[-0.025em] sm:text-4xl",
  h3: "text-2xl font-semibold tracking-[-0.02em] sm:text-3xl",
  body: "text-base leading-7 tracking-normal text-slate-700",
  bodyStrong: "text-base font-semibold leading-7 tracking-normal text-slate-900",
  caption: "text-sm font-medium uppercase tracking-[0.28em] text-slate-500",
  label: "text-xs uppercase tracking-[0.32em] text-slate-500",
} as const;

export const spacing = {
  xs: "p-3",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
  xl: "p-10",
  xxl: "p-12",
  section: "py-20 sm:py-24 lg:py-32",
  container: "mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12",
  inner: "space-y-8",
  half: "space-y-6",
} as const;

export const radius = {
  none: "rounded-none",
  sm: "rounded-xl",
  md: "rounded-2xl",
  lg: "rounded-3xl",
  xl: "rounded-[2rem]",
  xxl: "rounded-[2.5rem]",
  pill: "rounded-full",
} as const;

export const shadows = {
  soft: "shadow-[0_20px_60px_rgba(15,23,42,0.08)]",
  glow: "shadow-[0_0_70px_rgba(109,94,249,0.18)]",
  premium: "shadow-[0_25px_80px_rgba(15,23,42,0.12)]",
  inset: "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]",
} as const;

export const gradients = {
  aurora: "bg-[linear-gradient(135deg,#f8fafc_0%,#fdf2f8_35%,#ede9fe_65%,#d1fae5_100%)]",
  brand: "bg-[linear-gradient(135deg,#6D5EF9_0%,#A78BFA_45%,#64E6D9_100%)]",
  text: "bg-[linear-gradient(135deg,#6D5EF9_0%,#A78BFA_50%,#64E6D9_100%)]",
  highlight: "bg-[radial-gradient(circle,rgba(109,94,249,0.22),transparent_65%)]",
} as const;

export const glass = {
  panel: "border border-white/70 bg-white/70 backdrop-blur-xl",
  button: "border border-white/20 bg-white/15 backdrop-blur-xl",
} as const;

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
