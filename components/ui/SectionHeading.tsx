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
      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">{eyebrow}</p>
      <div className={`flex w-full flex-col gap-4 ${align === "center" ? "items-center" : "items-start"}`}>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-2xl text-lg leading-8 text-slate-600">{description}</p>
      </div>
      {action ? <div className="mt-2">{action}</div> : null}
    </div>
  );
}

export default SectionHeading;
