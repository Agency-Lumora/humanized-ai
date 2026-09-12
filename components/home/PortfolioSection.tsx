"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { featuredWork } from "@/lib/content";

// Layout recipe per project: how it sits in the 12-column editorial grid.
// NOTE: `gradient` is a temporary stand-in for real project photography.
// Swap the gradient placeholder below for an <Image> once real project
// photos are available (see project.gradient in lib/content.ts).
const layout = [
  {
    // Large landscape image, upper-left
    colSpan: "col-span-12 md:col-span-7",
    offset: "",
    aspect: "aspect-[16/10]",
  },
  {
    // Smaller portrait image, offset lower on the right
    colSpan: "col-span-12 md:col-span-5",
    offset: "md:mt-24",
    aspect: "aspect-[4/5]",
  },
  {
    // Large landscape image, offset toward center/right
    colSpan: "col-span-12 md:col-start-4 md:col-span-9",
    offset: "mt-12 md:mt-20",
    aspect: "aspect-[16/9]",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof featuredWork)[0];
  index: number;
}) {
  const { colSpan, offset, aspect } = layout[index] ?? layout[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`${colSpan} ${offset}`}
    >
      <Link
        href={`/portfolio/${project.slug}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        {/* Project image */}
        <div
          className={`relative ${aspect} overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient}`}
        >
          <div className="absolute inset-0 flex items-center justify-center p-8 transition-transform duration-500 ease-out group-hover:scale-[1.02]">
            <p className="text-center font-serif text-[clamp(1.1rem,2vw,1.75rem)] leading-tight text-white/90">
              {project.previewHeadline}
            </p>
          </div>
        </div>

        {/* Project info */}
        <div className="mt-5 flex items-start justify-between gap-4">
          <h3 className="text-[15px] font-semibold leading-snug text-[#35251B] sm:text-[16px]">
            {project.title}
          </h3>
          <span className="shrink-0 pt-0.5 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#88C5E8] sm:text-[9px]">
            {project.category}
          </span>
        </div>
        <p className="mt-1.5 max-w-md text-[13px] leading-6 text-[#6B584B]">
          {project.tagline}
        </p>
      </Link>
    </motion.div>
  );
}

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#F4EFE7] py-[clamp(4rem,8vw,6rem)]"
    >
      <div className="mx-auto max-w-[80rem] px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-[clamp(2.5rem,5vw,3.5rem)] flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#6B584B]">
              <span className="text-[#88C5E8]">02</span>
              <span className="mx-2 text-[#806C5D]/30">·</span>
              Selected Works
            </p>
            <h2 className="mt-3 text-[clamp(1.5rem,2.5vw,2rem)] font-normal leading-[1.2] tracking-[-0.02em] text-[#35251B]">
              Projects with character
            </h2>
          </div>

          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#35251B] transition-colors hover:text-[#88C5E8]"
          >
            View all case studies
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>

        {/* Projects */}
        <div className="grid grid-cols-12 gap-x-8 gap-y-14 sm:gap-x-10">
          {featuredWork.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
