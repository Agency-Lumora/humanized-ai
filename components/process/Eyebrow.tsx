export function Eyebrow({
  children,
  tone = "dark",
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <p
      className={`flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.22em] ${
        tone === "light" ? "text-[#2A211D]/70" : "text-[#6EA9C7]"
      }`}
    >
      <span
        className={`h-px w-8 ${
          tone === "light" ? "bg-[#2A211D]/40" : "bg-[#6EA9C7]/50"
        }`}
      />
      {children}
    </p>
  );
}

export default Eyebrow;
