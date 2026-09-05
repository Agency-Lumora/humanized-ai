"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { faqs } from "@/lib/content";
import { useState } from "react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="border-b border-[#806C5D]/20 bg-[#F4EFE7] py-[clamp(3rem,5vw,4.5rem)]">
      <Container>
        <div className="mb-[clamp(1.5rem,2.5vw,2rem)]">
          <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#806C5D]">Common questions</p>
          <h2 className="mt-3 font-serif text-[clamp(2rem,3.5vw,3.25rem)] leading-[1.05] tracking-[-0.03em]">
            Everything you need to know.
          </h2>
        </div>

        <div className="mx-auto max-w-3xl space-y-2">
          {faqs.map((faq, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-[#806C5D]/20 bg-[#F8F4EE]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-start justify-between gap-4 p-[clamp(1rem,2vw,1.25rem)] text-left transition-colors hover:bg-[#DCE7EA]/30"
              >
                <span className="font-serif text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.3]">
                  {faq.question}
                </span>
                <span className="shrink-0 pt-0.5">
                  {openIndex === index ? (
                    <Minus className="h-4 w-4 text-[#806C5D]" />
                  ) : (
                    <Plus className="h-4 w-4 text-[#806C5D]" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-[#806C5D]/20 px-[clamp(1rem,2vw,1.25rem)] pb-[clamp(1rem,2vw,1.25rem)] pt-4">
                    <p className="text-[11px] leading-[1.6] text-[#2A211D]/70">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FAQSection;
