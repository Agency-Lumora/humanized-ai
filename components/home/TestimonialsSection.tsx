"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { testimonials } from "@/lib/content";
import { useState } from "react";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="border-b border-[#806C5D]/20 bg-[#F4EFE7] py-[clamp(3rem,5vw,4.5rem)]">
      <Container>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }} className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#806C5D]">Kind words</p>
            <h2 className="mt-3 font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] leading-[1.2] tracking-[-0.02em]">
              What our clients say.
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="flex h-8 w-8 items-center justify-center border border-[#806C5D]/20 transition-colors hover:bg-[#DCE7EA]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              className="flex h-8 w-8 items-center justify-center bg-[#2A211D] text-[#F4EFE7] transition-colors hover:bg-[#806C5D]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

        <div className="mt-[clamp(1.5rem,2.5vw,2rem)] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -40, scale: 0.95 }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-start gap-6 border border-[#806C5D]/20 bg-[#F8F4EE] p-[clamp(1.5rem,3vw,2.5rem)] lg:flex-row lg:items-center lg:justify-between"
            >
              <div className="flex max-w-3xl items-start gap-4">
                <span className="font-serif text-5xl leading-none text-[#AFC4CE]">"</span>
                <div>
                  <p className="font-serif text-[clamp(1.05rem,1.5vw,1.35rem)] leading-[1.5] text-[#2A211D]">
                    {currentTestimonial.content}
                  </p>
                  <div className="mt-5 border-t border-[#806C5D]/20 pt-4">
                    <p className="text-sm font-bold text-[#2A211D]">{currentTestimonial.name}</p>
                    <p className="mt-1 text-[11px] text-[#806C5D]">
                      {currentTestimonial.role}, {currentTestimonial.company}
                    </p>
                  </div>
                </div>
              </div>
              <div className="shrink-0">
                <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-[#DCE7EA] lg:h-28 lg:w-28">
                  {currentTestimonial.avatar && (
                    <span className="text-2xl font-bold text-[#806C5D] lg:text-3xl">
                      {currentTestimonial.avatar}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}

export default TestimonialsSection;
