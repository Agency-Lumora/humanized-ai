export const colors = {
  primary: "#2A211D",
  secondary: "#806C5D",
  accent: "#AFC4CE",
  background: "#F4EFE7",
  surface: "#DCE7EA",
  text: "#2A211D",
  muted: "#806C5D",
  border: "rgba(128,108,93,0.25)",
  white: "#F4EFE7",
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
  aurora: "bg-[#F4EFE7]",
  brand: "bg-[linear-gradient(135deg,#AFC4CE_0%,#DCE7EA_50%,#806C5D_100%)]",
  text: "bg-[linear-gradient(135deg,#AFC4CE_0%,#DCE7EA_52%,#806C5D_100%)]",
  highlight: "bg-[radial-gradient(circle,rgba(175,196,206,0.32),transparent_65%)]",
} as const;

export const glass = {
  panel: "border border-white/70 bg-white/70 backdrop-blur-xl",
  button: "border border-white/20 bg-white/15 backdrop-blur-xl",
} as const;

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
