"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { featuredWork } from "@/lib/content";
import { ProjectPreview } from "@/components/portfolio/ProjectPreview";
import { useState } from "react";

export default function PortfolioSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const totalPages = Math.ceil(featuredWork.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const displayedProjects = featuredWork.slice(startIndex, startIndex + projectsPerPage);

  return (
    <section id="portfolio" className="border-b border-[#806C5D]/20 bg-[#F4EFE7] py-[clamp(3rem,5vw,4.5rem)]">
      <Container>
        {/* Header */}
        <div className="mb-[clamp(1.5rem,2.5vw,2rem)]">
          <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#806C5D]">Featured work</p>
          <div className="mt-3 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <h2 className="max-w-2xl font-serif text-[clamp(2rem,3.5vw,3.25rem)] leading-[1.05] tracking-[-0.03em]">
                Websites that make an <em className="font-normal text-[#806C5D]">impact.</em>
              </h2>
              <p className="mt-3 max-w-lg text-[11px] leading-[1.5] text-[#2A211D]/65">
                A selection of digital experiences shaped around clearer stories, stronger trust and easier customer journeys.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p className="hidden text-[11px] text-[#2A211D]/65 lg:block">From strategy to design to development, each project is built to help our clients connect, convert and grow.</p>
              <a 
                href="#consultation" 
                className="group inline-flex shrink-0 items-center gap-2 border-b border-[#2A211D] pb-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] transition-colors hover:border-[#806C5D]"
              >
                Want to hire us? <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-[clamp(1rem,2vw,1.25rem)] sm:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project, index) => (
            <motion.article 
              key={project.slug} 
              initial={{ opacity: 0, y: 15 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: index * 0.08 }}
            >
              <Link href={`/portfolio/${project.slug}`} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="overflow-hidden bg-[#DCE7EA] p-2.5 transition duration-500 group-hover:-translate-y-1 sm:p-3.5">
                  <ProjectPreview project={project} />
                </div>
                <div className="mt-3 border-t border-[#806C5D]/20 pt-3">
                  <p className="text-[8px] uppercase tracking-[0.15em] text-[#806C5D]">{project.category}</p>
                  <h3 className="mt-1.5 font-serif text-[clamp(1.05rem,1.35vw,1.25rem)] leading-[1.12]">{project.title}</h3>
                  <p className="mt-2 text-[11px] leading-[1.5] text-[#2A211D]/65">{project.summary}</p>
                  <div className="mt-3 inline-flex items-center gap-1 border-b border-[#806C5D]/50 pb-0.5 text-[8px] font-semibold uppercase tracking-[0.15em] transition-colors group-hover:border-[#2A211D]">
                    View project <ArrowRight className="h-2.5 w-2.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-[clamp(1.5rem,2.5vw,2rem)] flex items-center justify-end gap-4">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="flex h-8 w-8 items-center justify-center border border-[#806C5D]/20 transition-colors hover:bg-[#DCE7EA] disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-[10px] font-semibold tracking-[0.1em]">
              {String(currentPage).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="flex h-8 w-8 items-center justify-center border border-[#806C5D]/20 transition-colors hover:bg-[#DCE7EA] disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
