"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { featuredWork } from "@/lib/content";
import { ProjectPreview } from "@/components/portfolio/ProjectPreview";

export default function PortfolioSection() {
  return (
    <Section id="portfolio">
      <SectionHeading
        eyebrow="Selected Work"
        title="Websites that help businesses stand out."
        description="Every project is crafted with performance, trust, and conversion in mind."
        align="center"
      />

      <div className="mt-14 -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-2 md:overflow-x-hidden md:overflow-y-visible md:px-0 xl:grid-cols-3">
        {featuredWork.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="w-[82vw] shrink-0 snap-center md:w-auto"
          >
            <Link
              href={`/portfolio/${project.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-[24px] text-left transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#7C5CFF]/25"
            >
              <GlassPanel className="overflow-hidden p-0">
                <div className="h-[220px] overflow-hidden">
                  <ProjectPreview project={project} />
                </div>

                <div className="space-y-4 p-7">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {project.title}
                  </h3>
                  <p className="leading-7 text-slate-600">{project.summary}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-[#6D5EF9]">
                    View case study <span aria-hidden="true">→</span>
                  </span>
                </div>
              </GlassPanel>
            </Link>
          </motion.div>
        ))}
      </div>

    </Section>
  );
}
