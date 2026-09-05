"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const disciplines = ["Strategy", "UX/UI", "Design", "Development", "Technology", "Marketing"];

export function AboutSection() {
  return (
    <section id="about" className="border-b border-[#806C5D]/20 bg-[#F4EFE7] py-[clamp(4rem,8vw,7rem)]">
      <Container>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="grid gap-[clamp(2rem,5vw,4rem)] min-[960px]:grid-cols-[1fr_0.82fr] min-[960px]:items-stretch">
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#806C5D]">About Lumora</p>
              <h2 className="mt-6 max-w-4xl font-serif text-[clamp(2.25rem,4.3vw,4.35rem)] leading-[0.94] tracking-[-0.04em]">
                We don&apos;t just build websites. We build digital experiences that help businesses <em className="font-normal text-[#806C5D]">connect, convert and grow.</em>
              </h2>
            </div>
            <a href="#services" className="mt-10 inline-flex w-fit items-center gap-2 border-b border-[#2A211D] pb-2 text-xs font-semibold uppercase tracking-[0.14em]">
              Explore our services <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="min-w-0 bg-[#AFC4CE] p-[clamp(1.25rem,3vw,2.5rem)]">
            <div className="border border-[#2A211D]/20 bg-[#DCE7EA] p-3 shadow-[0_22px_50px_rgba(42,33,29,0.12)]">
              <div className="flex gap-1.5 border-b border-[#2A211D]/15 pb-3"><span className="h-1.5 w-1.5 rounded-full bg-[#806C5D]" /><span className="h-1.5 w-1.5 rounded-full bg-[#806C5D]/50" /><span className="h-1.5 w-1.5 rounded-full bg-[#806C5D]/25" /></div>
              <div className="grid min-h-56 grid-cols-1 gap-3 pt-3 min-[420px]:aspect-[1.35] min-[420px]:grid-cols-[0.75fr_1.25fr]">
                <div className="bg-[#2A211D] p-4 text-[#F4EFE7]"><p className="font-serif text-2xl leading-none">Built as one connected system.</p><div className="mt-8 h-px bg-[#AFC4CE]" /></div>
                <div className="grid grid-cols-2 gap-3"><div className="bg-[#F4EFE7] p-3 text-[9px] uppercase tracking-widest">Customer journey</div><div className="bg-[#806C5D] p-3 text-[9px] uppercase tracking-widest text-[#F4EFE7]">Brand trust</div><div className="col-span-2 flex items-end bg-[#F4EFE7] p-4"><div className="h-1/2 w-full border-l border-b border-[#2A211D]/50" /></div></div>
              </div>
            </div>
            <p className="mt-8 text-sm leading-7 text-[#2A211D]/75">
              Every decision connects back to the business: how customers find you, what makes them trust you, and what helps them take the next step.
            </p>
            <div className="mt-8 grid grid-cols-2 border-l border-t border-[#2A211D]/20 sm:grid-cols-3">
              {disciplines.map((item, index) => <span key={item} className="border-b border-r border-[#2A211D]/20 px-3 py-4 text-[10px] font-semibold uppercase tracking-[0.14em]">0{index + 1} {item}</span>)}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default AboutSection;
