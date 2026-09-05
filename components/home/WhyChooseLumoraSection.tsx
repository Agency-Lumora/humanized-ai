"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, BarChart3, Database, Workflow } from "lucide-react";
import { Container } from "@/components/ui/Container";

const system = [["Website", null], ["Integrations", Database], ["Automations", Workflow], ["Business", BarChart3]] as const;

export function WhyChooseLumoraSection() {
  return (
    <section id="client-control" className="border-b border-[#806C5D]/20 bg-[#DCE7EA] py-[clamp(4rem,8vw,6.5rem)]">
      <Container>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="grid gap-[clamp(2.5rem,5vw,4rem)] min-[1000px]:grid-cols-[0.9fr_1.1fr] min-[1000px]:items-center">
          <div><p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#806C5D]">You&apos;re in control</p><h2 className="mt-5 font-serif text-[clamp(2.45rem,4.3vw,4.25rem)] leading-[0.94] tracking-[-0.04em]">We don&apos;t just build it. <em className="font-normal text-[#806C5D]">We make sure you can run it.</em></h2><p className="mt-6 max-w-xl text-sm leading-7 text-[#2A211D]/70">After launch, we provide one month of support to walk you through the setup, integrations, workflows and basic management. You understand what was built, how it works and how to make it work for your business.</p><p className="mt-4 max-w-xl text-sm leading-7 text-[#2A211D]/70">Continue working with Lumora, or confidently manage it yourself. The choice stays with you.</p></div>
          <div className="min-w-0">
            <div className="flex flex-col items-stretch gap-3 sm:grid sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] sm:items-center">
              {system.map(([label, Icon], index) => (
                <div key={label} className="contents">
                  <div className="flex min-h-24 flex-row items-center justify-center gap-3 border border-[#2A211D]/15 bg-[#F4EFE7] p-3 text-center shadow-[0_12px_30px_rgba(42,33,29,0.08)] sm:aspect-square sm:min-h-0 sm:flex-col">
                    {Icon ? <Icon className="h-5 w-5 shrink-0 stroke-[1.4]" /> : <div className="h-5 w-7 shrink-0 border border-[#2A211D]" />}
                    <span className="text-[9px] font-bold uppercase tracking-[0.12em] sm:mt-2">{label}</span>
                  </div>
                  {index < system.length - 1 && <><ArrowDown className="mx-auto h-4 w-4 sm:hidden" /><ArrowRight className="hidden h-4 w-4 sm:block" /></>}
                </div>
              ))}
            </div>
            <div className="mt-7 border-l-2 border-[#806C5D] pl-5"><p className="font-serif text-xl sm:text-2xl">Built for independence, supported by partnership.</p><p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-[#806C5D] sm:text-xs">One month post-launch support included</p></div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default WhyChooseLumoraSection;
