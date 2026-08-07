"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui";
import { faqs } from "@/lib/content";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col gap-12"
      >
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know before starting your project with Lumora."
          align="center"
        />

        <div className="mx-auto w-full max-w-4xl space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: index * 0.05,
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full rounded-[28px] border px-7 py-6 text-left backdrop-blur-xl transition-all duration-300 ${
                  openIndex === index
                    ? "border-[#7C5CFF]/40 bg-white shadow-[0_20px_60px_rgba(124,92,255,0.12)]"
                    : "border-white/70 bg-white/70 hover:-translate-y-1 hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold text-slate-900">
                    {faq.question}
                  </p>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <FiChevronDown className="h-5 w-5 text-[#7C5CFF]" />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: openIndex === index ? 1 : 0,
                    height: openIndex === index ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="mt-5 leading-8 text-slate-600">{faq.answer}</p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

export default FAQSection;
