"use client";

import { motion } from "framer-motion";
import { GlassPanel, Section, SectionHeading } from "@/components/ui";
import { testimonials } from "@/lib/content";
import { FiStar } from "react-icons/fi";

export function TestimonialsSection() {
  return (
    <Section id="testimonials">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col gap-12"
      >
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by Businesses That Wanted More Than Just a Website."
          description="Every project is built with one goal—creating a website that earns trust, reflects your brand, and helps your business grow."
          align="center"
        />
        <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              whileHover={{ y: -4 }}
              className="w-[82vw] shrink-0 snap-center md:w-auto"
            >
              <GlassPanel className="group flex h-full flex-col gap-6 rounded-[30px] p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_70px_rgba(124,92,255,0.18)]">
                <>
                  <div className="text-5xl font-black leading-none text-[#7C5CFF]/15">
                    "
                  </div>

                  <div className="mb-2 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className="h-4 w-4 fill-[#7C5CFF] text-[#7C5CFF]"
                      />
                    ))}
                  </div>
                </>

                <p className="flex-1 text-lg leading-8 text-slate-600 italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3 border-t border-slate-200/50 pt-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#7C5CFF] to-[#A78BFA] text-sm font-bold text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-base font-bold text-slate-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-500">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

export default TestimonialsSection;
