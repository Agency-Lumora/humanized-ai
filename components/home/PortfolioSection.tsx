"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  { number: "01", name: "LET'S TALK NAILS × NAILS BY NI", category: "Branding · Social Media", headline: "From nail work → to a recognizable brand.", image: "/nails.png" },
  { number: "02", name: "NARRATIV.", category: "Website Design · Development", headline: "A marketing agency's website should market itself.", image: "/narrativ.png" },
  { number: "03", name: "AUREL DIAMOND", category: "Logo Design · Brand Identity", headline: "When the brief keeps changing, clarity becomes part of the craft.", image: "/aurel.jpeg" },
] as const;

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative overflow-hidden bg-[#F4EFE7] py-[clamp(4rem,8vw,6rem)]">
      <div className="mx-auto max-w-[80rem] px-6 sm:px-8 lg:px-12">
        <motion.header initial={{ opacity: 0, y: 30, x: -20 }} whileInView={{ opacity: 1, y: 0, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }} className="mb-[clamp(2.5rem,5vw,4rem)] flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#6B584B]"><span className="text-[#88C5E8]">02</span><span className="mx-2 text-[#806C5D]/30">·</span>Selected Work</p><h2 className="mt-3 font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] leading-[1.2] tracking-[-0.02em] text-[#35251B]">Projects with character</h2><p className="mt-4 max-w-lg text-sm leading-7 text-[#6B584B]">A preview of the brands, identities, and digital experiences we have shaped.</p></div>
          <Link href="/portfolio" className="group inline-flex w-fit items-center gap-2 border-b border-[#2A211D]/30 pb-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2A211D] transition-colors hover:border-[#88C5E8] hover:text-[#806C5D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#806C5D]">View all case studies <span className="transition-transform duration-500 group-hover:translate-x-1">→</span></Link>
        </motion.header>

        <div className="grid gap-10 border-t border-[#806C5D]/25 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, index) => (
            <motion.article key={project.number} initial={{ opacity: 0, y: 40, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1.0, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }} className="border-b border-[#806C5D]/25 pt-6 lg:border-b-0 lg:border-r lg:pr-8 lg:last:border-r-0">
              <Link href="/portfolio" className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#806C5D] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F4EFE7]">
                <div className="flex items-start justify-between gap-3"><span className="font-serif text-4xl leading-none tracking-[-0.04em] text-[#AFC4CE]">{project.number}</span><span className="max-w-[11rem] text-right text-[9px] font-semibold uppercase tracking-[0.16em] text-[#806C5D]">{project.category}</span></div>
                <div className="relative mt-6 aspect-[4/3] overflow-hidden border border-[#806C5D]/20 bg-[#DCE7EA] transition-transform duration-500 ease-out group-hover:-translate-y-1"><Image src={project.image} alt={`${project.name} project preview`} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" /></div>
                <h3 className="mt-6 font-serif text-[clamp(1.25rem,2vw,1.6rem)] leading-[1.1] tracking-[-0.025em] text-[#35251B]">{project.name}</h3>
                <p className="mt-3 max-w-sm font-serif text-lg leading-[1.25] text-[#35251B]/80">“{project.headline}”</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#806C5D]">Read case study <span className="transition-transform duration-500 group-hover:translate-x-1">→</span></span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
