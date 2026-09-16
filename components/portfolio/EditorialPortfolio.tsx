"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type Project = {
  number: string;
  name: string;
  category: string;
  headline: string;
  challenge: string;
  solution: string;
  result: string;
  role: string;
  website?: string;
  image: string;
  visual: "nails" | "narrativ" | "diamond";
};

const projects: Project[] = [
  { number: "01", name: "LET'S TALK NAILS × NAILS BY NI", category: "Branding · Social Media", headline: "From nail work → to a recognizable brand.", challenge: "The brand had great work, but its digital presence didn't fully communicate the personality, quality, and creativity behind it. The branding and social content needed to feel more intentional and recognizable rather than simply showcasing nail designs.", solution: "Lumora worked across the brand identity and social presence — creating a more cohesive visual direction, refining how the brand presents itself, and developing social content designed to make the work more engaging and shareable.\n\nWe focused on creating a visual language that felt playful, polished, feminine, and unmistakably theirs.", result: "A stronger and more recognizable brand presence, with social media that feels like an extension of the brand rather than just a gallery of nail sets.", role: "Branding · Visual Direction · Social Media · Content Strategy", image: "/nails.png", visual: "nails" },
  { number: "02", name: "NARRATIV.", category: "Website Design · Development", headline: "A marketing agency's website should market itself.", challenge: "Narrativ is a marketing agency — which meant its own website had to do more than list services. It needed to communicate creativity, personality, and strategic thinking while giving potential clients a reason to keep exploring.", solution: "Lumora designed and developed a custom website around Narrativ's brand personality, combining editorial typography, movement, storytelling, and interactive details.\n\nThe goal was simple: make the website itself feel like a piece of Narrativ's work.", result: "A distinctive digital presence that gives Narrativ a stronger platform to communicate its work, personality, and approach to prospective clients.", role: "Web Design · Web Development · Interaction Design", website: "narrativdot.com", image: "/narrativ.png", visual: "narrativ" },
  { number: "03", name: "AUREL DIAMOND", category: "Logo Design · Brand Identity", headline: "When the brief keeps changing, clarity becomes part of the craft.", challenge: "Aurel Diamond came to us looking for a logo — but defining exactly what the logo should be wasn't straightforward.\n\nThere were multiple rounds of revisions, evolving preferences, and a tight timeline. The challenge wasn't simply designing a mark. It was finding clarity within an evolving idea — and doing it quickly.", solution: "We explored multiple visual directions, refined the concept through feedback, and continuously narrowed the design toward something that felt elegant, distinctive, and appropriate for a luxury diamond brand.\n\nThe process required patience, flexibility, and a willingness to keep refining until the direction felt right.", result: "A refined logo direction built around a more luxurious and distinctive visual identity for Aurel Diamond.", role: "Logo Design · Art Direction · Brand Identity", image: "/aurel.jpeg", visual: "diamond" },
];

const cellShapes = {
  nails: ["rounded-[42%] bg-[#d9908c]", "rounded-full border-2 border-[#806C5D]", "bg-[#AFC4CE]", "border-b-2 border-[#2A211D]", "rounded-full bg-[#F4EFE7]", "bg-[#806C5D]"],
  narrativ: ["border border-[#2A211D]", "bg-[#2A211D]", "h-3/5 border-y border-[#806C5D]", "bg-[#AFC4CE]", "border border-[#806C5D]", "bg-[#DCE7EA]"],
  diamond: ["rotate-45 border border-[#2A211D]", "rounded-full border border-[#806C5D]", "border-x border-[#2A211D]", "rotate-45 bg-[#AFC4CE]", "rounded-full border-2 border-[#2A211D]", "border-b border-[#806C5D]"],
};

function ArtifactGrid({ project }: { project: Project }) {
  const reducedMotion = useReducedMotion();
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-3" aria-label={`${project.name} visual artifacts`}>
      <motion.div initial={{ opacity: 0, y: reducedMotion ? 0 : 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: reducedMotion ? 0 : 0.65 }} className="relative col-span-2 row-span-2 aspect-square overflow-hidden border border-[#806C5D]/20 bg-[#F4EFE7]">
        <Image src={project.image} alt={`${project.name} project artwork`} fill sizes="(min-width: 1024px) 18vw, 60vw" className="object-cover" />
      </motion.div>
      {cellShapes[project.visual].slice(0, 4).map((shape, index) => (
        <motion.div key={`${project.number}-${index}`} initial={{ opacity: 0, y: reducedMotion ? 0 : 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: reducedMotion ? 0 : 0.65, delay: reducedMotion ? 0 : (index + 1) * 0.06 }} className="flex aspect-square items-center justify-center border border-[#806C5D]/20 bg-[#F4EFE7] p-3">
          <span className={`block h-1/2 w-1/2 ${shape}`} />
        </motion.div>
      ))}
    </div>
  );
}

function ProjectChapter({ project, index }: { project: Project; index: number }) {
  const reducedMotion = useReducedMotion();
  const reveal = { initial: { opacity: 0, y: reducedMotion ? 0 : 18 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.18 }, transition: { duration: reducedMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] as const } };
  return (
    <article className="border-t border-[#806C5D]/25 py-[clamp(4rem,9vw,7rem)] first:border-t-0">
      <div className={`grid gap-10 lg:grid-cols-[minmax(220px,0.65fr)_minmax(0,1.35fr)] lg:gap-[clamp(3rem,8vw,9rem)] ${index % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
        <motion.div {...reveal} className="self-start lg:sticky lg:top-28">
          <div className="mx-auto max-w-[280px] border border-[#806C5D]/25 bg-[#DCE7EA] p-3 sm:max-w-[320px] sm:p-5 lg:mx-0">
            <ArtifactGrid project={project} />
          </div>
          <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-[#806C5D]">Small artifacts / {project.number}</p>
        </motion.div>
        <div>
          <motion.div {...reveal} className="flex items-start justify-between gap-4 sm:gap-5"><span className="font-serif text-6xl leading-none tracking-[-0.05em] text-[#AFC4CE] sm:text-8xl">{project.number}</span><span className="max-w-[10rem] pt-2 text-right text-[9px] font-semibold uppercase tracking-[0.2em] text-[#806C5D]">Case study<br />{project.number}</span></motion.div>
          <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.1 }} className="mt-8"><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#806C5D]">{project.category}</p><h2 className="mt-4 max-w-3xl font-serif text-[clamp(1.8rem,3.5vw,3rem)] leading-[1.05] tracking-[-0.035em] text-[#35251B]">{project.name}</h2><p className="mt-6 max-w-2xl font-serif text-[clamp(1.25rem,2vw,1.8rem)] leading-[1.2] text-[#35251B]">“{project.headline}”</p></motion.div>
          <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.18 }} className="mt-10 grid gap-8 border-t border-[#806C5D]/25 pt-8 sm:grid-cols-2"><div><p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#806C5D]">Challenge</p><p className="mt-4 whitespace-pre-line text-[13px] leading-7 text-[#2A211D]/70">{project.challenge}</p></div><div><p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#806C5D]">What we did</p><p className="mt-4 whitespace-pre-line text-[13px] leading-7 text-[#2A211D]/70">{project.solution}</p></div></motion.div>
          <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.26 }} className="mt-9 border-l-2 border-[#AFC4CE] pl-5"><p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#806C5D]">Result</p><p className="mt-3 max-w-2xl font-serif text-lg leading-7 text-[#35251B]">{project.result}</p></motion.div>
          <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.34 }} className="mt-9 flex flex-col gap-6 border-t border-[#806C5D]/25 pt-6 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#806C5D]">Lumora&apos;s role</p><p className="mt-3 text-[13px] leading-7 text-[#2A211D]/70">{project.role}</p>{project.website && <a href="https://www.narrativdot.com/" target="_blank" rel="noreferrer" className="mt-2 inline-flex text-[11px] font-semibold uppercase tracking-[0.12em] text-[#806C5D] underline decoration-[#806C5D]/40 underline-offset-4 transition-colors hover:text-[#2A211D]">narrativ. | Coming Soon</a>}</div><Link href="/#consultation" className="group inline-flex w-fit items-center gap-3 border-b border-[#2A211D]/40 pb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2A211D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#806C5D]">Explore case study <span className="transition-transform duration-500 group-hover:translate-x-1">→</span></Link></motion.div>
        </div>
      </div>
    </article>
  );
}

export default function EditorialPortfolio() {
  return (
    <main className="bg-[#F4EFE7] text-[#2A211D]">
      <header className="border-b border-[#806C5D]/20 px-5 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-28"><div className="mx-auto max-w-[80rem]"><Link href="/#portfolio" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#806C5D]">← Back to selected work</Link><p className="mt-12 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#6B584B] sm:mt-16">Lumora / Portfolio archive</p><h1 className="mt-5 max-w-3xl font-serif text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.92] tracking-[-0.05em]">Work with a point of view.</h1><p className="mt-7 max-w-xl text-sm leading-7 text-[#6B584B]">Selected case studies in identity, digital experience, and the details that make a brand unmistakably itself.</p></div></header>
      <div className="mx-auto max-w-[80rem] px-6 sm:px-10 lg:px-16">{projects.map((project, index) => <ProjectChapter key={project.number} project={project} index={index} />)}</div>
    </main>
  );
}
