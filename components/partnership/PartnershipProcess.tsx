"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

const stages = [
  {
    label: "Agency",
    sublabel: "(You)",
    description: "You bring the client, handle the strategy and relationship.",
    image: "/partnership/agency-shape.svg",
  },
  {
    label: "Lumora",
    sublabel: "(Build Partner)",
    description: "We design, develop and deliver the website — white label.",
    image: "/partnership/lumora-shape.svg",
  },
  {
    label: "Client",
    sublabel: "(Your Client)",
    description: "They get a seamless experience and a high-performing website.",
    image: "/partnership/client-preview.svg",
  },
] as const;

function Connector({ vertical = false }: { vertical?: boolean }) {
  if (vertical) {
    return (
      <div className="flex flex-col items-center gap-1.5 py-1" aria-hidden="true">
        <span className="h-8 w-px bg-[#806C5D]/25" />
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#806C5D]/30 bg-[#FBF5EC] text-[#806C5D]">
          <ArrowDown size={12} strokeWidth={1.5} />
        </span>
        <span className="h-8 w-px bg-[#806C5D]/25" />
      </div>
    );
  }

  return (
    <div className="relative flex items-center justify-center pt-[52px]" aria-hidden="true">
      <span className="absolute left-0 right-0 h-px bg-[#806C5D]/25" />
      <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#806C5D]/30 bg-[#FBF5EC] text-[#806C5D]">
        <ArrowRight size={12} strokeWidth={1.5} />
      </span>
    </div>
  );
}

function StageCard({ stage, index }: { stage: (typeof stages)[number]; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center"
    >
      <img src={stage.image} alt="" aria-hidden="true" className="h-28 w-28 sm:h-32 sm:w-32" />
      <p className="mt-6 font-serif text-lg text-[#35251B]">
        {stage.label}{" "}
        <span className="font-sans text-xs font-normal text-[#806C5D]">{stage.sublabel}</span>
      </p>
      <p className="mt-2 max-w-[220px] text-[13px] leading-6 text-[#6B584B]">{stage.description}</p>
    </motion.div>
  );
}

export function PartnershipProcess() {
  const shouldReduceMotion = useReducedMotion();
  const reducedMotion = shouldReduceMotion ?? false;

  return (
    <section
      id="partnership-process"
      className="relative overflow-hidden border-y border-[#806C5D]/15 bg-white py-[clamp(3.5rem,7vw,5.5rem)]"
    >
      <img
        src="/partnership/decorative-curves.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-10 w-40 opacity-50 sm:left-10"
      />
      <img
        src="/partnership/decorative-dots.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-6 w-24 opacity-60 sm:right-14"
      />

      <div className="relative mx-auto max-w-[80rem] px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-xl text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#6B584B]">
            The Partnership
          </p>
          <h2 className="mt-3 font-serif text-[clamp(1.9rem,3.2vw,2.6rem)] leading-[1.15] tracking-[-0.025em] text-[#35251B]">
            A simple process.
            <br />
            A powerful outcome.
          </h2>
        </motion.div>

        {/* Desktop/tablet — horizontal flow */}
        <div className="mt-16 hidden grid-cols-[1fr_56px_1fr_56px_1fr] items-start sm:grid">
          <StageCard stage={stages[0]} index={0} />
          <Connector />
          <StageCard stage={stages[1]} index={1} />
          <Connector />
          <StageCard stage={stages[2]} index={2} />
        </div>

        {/* Mobile — vertical flow */}
        <div className="mt-16 flex flex-col items-center gap-2 sm:hidden">
          <StageCard stage={stages[0]} index={0} />
          <Connector vertical />
          <StageCard stage={stages[1]} index={1} />
          <Connector vertical />
          <StageCard stage={stages[2]} index={2} />
        </div>
      </div>
    </section>
  );
}

export default PartnershipProcess;
