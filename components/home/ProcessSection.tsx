"use client";

import { motion } from "framer-motion";
import { Compass, FileText, Code2, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";

const process = [
  ["Discover", "Understand the business, audience, goals and existing digital ecosystem.", Compass],
  ["Strategize", "Define the digital strategy, user journey and the right solution.", FileText],
  ["Design & Develop", "Turn the strategy into the visual experience and build the solution.", Code2],
  ["Launch & Support", "Launch the solution and provide one month of post-launch support.", Send],
] as const;

export function ProcessSection() {
  return (
    <section id="process" className="border-b border-[#806C5D]/20 bg-[#F4EFE7] py-[clamp(4rem,8vw,6.5rem)]">
      <Container>
        <div className="grid gap-[clamp(2rem,4vw,3.5rem)] min-[1000px]:grid-cols-[0.7fr_1.3fr]">
          <div><p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#806C5D]">Our process</p><h2 className="mt-5 font-serif text-[clamp(2.35rem,4.2vw,4rem)] leading-[0.94] tracking-[-0.04em]">A clear process.<br /><em className="font-normal text-[#806C5D]">A smoother journey.</em></h2><p className="mt-6 max-w-sm text-sm leading-7 text-[#2A211D]/65">Structured enough to create clarity. Collaborative enough to keep your business at the centre.</p></div>
          <div className="grid border-l border-t border-[#806C5D]/25 sm:grid-cols-2">
            {process.map(([title, description, Icon], index) => (
              <motion.article key={title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="border-b border-r border-[#806C5D]/25 p-[clamp(1.25rem,2.5vw,2rem)]">
                <div className="flex items-center justify-between"><span className="font-serif text-xl">0{index + 1}</span><Icon className="h-5 w-5 stroke-[1.4]" /></div>
                <h3 className="mt-7 text-xs font-bold uppercase tracking-[0.16em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#2A211D]/65">{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProcessSection;
