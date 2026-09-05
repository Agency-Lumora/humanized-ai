"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function ConsultationSection() {
  return (
    <section id="consultation" className="bg-[#2A211D] py-[clamp(4rem,8vw,6.5rem)] text-[#F4EFE7]">
      <Container>
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid gap-[clamp(2rem,5vw,4rem)] min-[960px]:grid-cols-[1.15fr_0.85fr] min-[960px]:items-end">
          <div><p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#AFC4CE]">Ready to grow?</p><h2 className="mt-6 max-w-4xl font-serif text-[clamp(2.65rem,5.2vw,5.25rem)] leading-[0.88] tracking-[-0.05em]">Let&apos;s build a digital experience that works for <em className="font-normal text-[#AFC4CE]">your business.</em></h2></div>
          <div className="lg:pb-3"><p className="max-w-md text-sm leading-7 text-[#F4EFE7]/65">Tell us where your business is now and where you want it to go. We&apos;ll help define the digital solution that can move it forward.</p><a href="https://wa.me/917383172979?text=Hi%20Lumora,%20I'd%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 bg-[#AFC4CE] px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#2A211D] transition hover:bg-[#DCE7EA]">Start a conversation <ArrowUpRight className="h-4 w-4" /></a></div>
        </motion.div>
      </Container>
    </section>
  );
}
