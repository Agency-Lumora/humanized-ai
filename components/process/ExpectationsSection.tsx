"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "./Eyebrow";

const expectations = [
  {
    number: "01",
    title: "Clear communication.",
    description: "No disappearing acts. You'll know where things stand.",
  },
  {
    number: "02",
    title: "Thoughtful decisions.",
    description: "Every design and development decision has a reason behind it.",
  },
  {
    number: "03",
    title: "Real collaboration.",
    description: "Your feedback isn't an afterthought. It's part of the process.",
  },
  {
    number: "04",
    title: "Built for what's next.",
    description: "We don't just think about launch. We think about where your business is going.",
  },
];

export function ExpectationsSection() {
  return (
    <section className="border-b border-[#806C5D]/20 bg-[#F4EFE7] py-[clamp(4rem,8vw,6.5rem)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          data-motion-reveal
        >
          <Eyebrow>What you can expect</Eyebrow>
          <h2 className="mt-5 max-w-lg font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] font-normal leading-[1.2] tracking-[-0.02em] text-[#2A211D]">
            A process designed
            <br />
            to keep things clear.
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-[#806C5D]/20 pt-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-0">
          {expectations.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              data-motion-reveal
              className={`lg:border-l lg:border-[#806C5D]/20 lg:pl-8 ${index === 0 ? "lg:border-l-0 lg:pl-0" : ""}`}
            >
              <span className="font-serif text-2xl text-[#6EA9C7]">{item.number}</span>
              <p className="mt-3 text-[14px] font-semibold text-[#2A211D]">{item.title}</p>
              <p className="mt-2 max-w-[220px] text-[12.5px] leading-[1.6] text-[#6B584B]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ExpectationsSection;
