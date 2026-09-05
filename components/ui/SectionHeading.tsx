import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  action?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-4 ${align === "center" ? "items-center text-center" : "items-start"}`}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">{eyebrow}</p>
      <div className={`flex w-full flex-col gap-4 ${align === "center" ? "items-center" : "items-start"}`}>
        <h2 className="max-w-2xl text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
          {title}
        </h2>
        <p className="max-w-2xl text-sm leading-6 text-slate-600">{description}</p>
      </div>
      {action ? <div className="mt-2">{action}</div> : null}
    </div>
  );
}

export default SectionHeading;
