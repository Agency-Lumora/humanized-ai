"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

function DigitalMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[34rem] pb-[clamp(2.5rem,6vw,4rem)] pt-[clamp(1rem,3vw,2.5rem)]">
      <div className="absolute left-[4%] top-0 h-[82%] w-[92%] rounded-full bg-[#AFC4CE]" />
      <div className="relative mx-auto w-[88%] rounded-xl border-[5px] border-[#2A211D] bg-[#2A211D] p-1 shadow-[0_25px_60px_rgba(42,33,29,0.22)] sm:border-[7px]">
        <div className="overflow-hidden rounded-md bg-[#F4EFE7]">
          <div className="flex items-center justify-between border-b border-[#806C5D]/20 px-4 py-3 text-[7px] font-semibold uppercase tracking-[0.18em] text-[#2A211D] sm:text-[9px]">
            <span>Lumora / Digital studio</span>
            <span>Strategy &nbsp; Design &nbsp; Systems</span>
          </div>
          <div className="grid min-h-48 grid-cols-[1.12fr_0.88fr] sm:min-h-60">
            <div className="flex flex-col justify-center p-5 sm:p-8">
              <p className="text-[7px] uppercase tracking-[0.2em] text-[#806C5D] sm:text-[9px]">Built around outcomes</p>
              <p className="mt-3 font-serif text-[clamp(1.1rem,3vw,2rem)] leading-[0.98]">A digital presence your business can grow into.</p>
              <div className="mt-5 h-1.5 w-20 bg-[#AFC4CE]" />
            </div>
            <div className="m-3 overflow-hidden bg-[#DCE7EA] sm:m-5">
              <div className="grid h-full grid-cols-4 items-end gap-2 p-4 sm:p-6">
                {[38, 58, 73, 94].map((height, index) => (
                  <div key={height} className="flex flex-col items-center gap-2">
                    <span className="text-[7px] text-[#806C5D]">0{index + 1}</span>
                    <span style={{ height: `clamp(1.75rem, ${height / 12}vw, ${height}px)` }} className="w-full bg-[#2A211D]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto h-3 w-[96%] rounded-b-xl bg-[#806C5D] shadow-lg" />
      <div className="absolute bottom-0 right-[2%] w-[27%] rounded-[1.2rem] border-[5px] border-[#2A211D] bg-[#2A211D] p-1 shadow-[0_20px_40px_rgba(42,33,29,0.25)] sm:border-[6px]">
        <div className="aspect-[0.53] overflow-hidden rounded-[0.8rem] bg-[#F4EFE7] p-3">
          <div className="mx-auto h-1 w-7 rounded-full bg-[#806C5D]/40" />
          <p className="mt-8 font-serif text-[10px] leading-tight text-[#2A211D] sm:text-sm">Clear journeys.<br />Confident decisions.</p>
          <div className="mt-4 h-16 bg-[#AFC4CE]" />
          <div className="mt-3 h-1.5 w-8 bg-[#2A211D]" />
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[#806C5D]/20 pb-[clamp(3rem,6vw,5rem)] pt-[clamp(7rem,10vw,9rem)]">
      <div className="absolute right-0 top-0 h-full w-[16%] bg-[#DCE7EA]/55" />
      <Container className="relative grid gap-[clamp(2rem,5vw,4rem)] min-[960px]:grid-cols-[0.95fr_1.05fr] min-[960px]:items-center">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: "easeOut" }}>
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#806C5D]">Strategy · Design · Development · Growth</p>
          <h1 className="mt-6 max-w-2xl font-serif text-[clamp(2.75rem,5.1vw,5rem)] leading-[0.88] tracking-[-0.055em] text-[#2A211D]">
            Digital experiences that turn visitors into <em className="font-normal text-[#806C5D]">customers.</em>
          </h1>
          <p className="mt-[clamp(1.25rem,2.5vw,1.75rem)] max-w-xl text-sm leading-6 text-[#2A211D]/70 sm:text-[15px] sm:leading-7">
            We combine strategy, design, technology and marketing to create digital experiences that build trust, connect with customers and move businesses forward.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#consultation" className="inline-flex items-center justify-center gap-3 bg-[#2A211D] px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#F4EFE7] transition hover:bg-[#806C5D]">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#portfolio" className="inline-flex items-center justify-center gap-3 border border-[#806C5D]/45 px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] transition hover:bg-[#DCE7EA]">
              View our work <ArrowDownRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}>
          <DigitalMockup />
        </motion.div>
      </Container>
    </section>
  );
}

export default HeroSection;
