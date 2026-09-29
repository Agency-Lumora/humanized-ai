"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "./Eyebrow";

const relationship = [
  { label: "You", items: ["Your idea", "Your expertise", "Your goals"] },
  { label: "Lumora", items: ["Strategy", "Design", "Technology"], connector: "+" },
  { label: "Together", items: ["A digital experience", "built to grow."], connector: "=" },
];

export function CollaborationSection() {
  return (
    <section className="border-b border-[#806C5D]/20 bg-[#F4EFE7] py-[clamp(4rem,8vw,6.5rem)]">
      <Container>
        <div className="grid gap-14 md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            data-motion-reveal
            className="max-w-[440px]"
          >
            <Eyebrow>Built together</Eyebrow>
            <h2 className="mt-5 font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] font-normal leading-[1.2] tracking-[-0.02em] text-[#2A211D]">
              The best work doesn&apos;t happen
              <br />
              in isolation.
            </h2>
            <p className="mt-6 max-w-[420px] text-sm leading-7 text-[#6B584B]">
              You&apos;ll never be left wondering what&apos;s happening with
              your project.
            </p>
            <p className="mt-4 max-w-[420px] text-sm leading-7 text-[#6B584B]">
              We collaborate closely, share progress, ask questions, and make
              decisions together, because the final result should feel like
              something we built with you, not simply something we delivered
              to you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            data-motion-reveal
            className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4"
          >
            {relationship.map((node) => (
              <div key={node.label} className="contents">
                {node.connector && (
                  <span className="text-lg font-medium text-[#806C5D]">{node.connector}</span>
                )}
                <div className="flex h-40 w-40 shrink-0 flex-col items-center justify-center rounded-full bg-[#DCE7EA] p-5 text-center shadow-[0_16px_32px_rgba(42,33,29,0.08)] sm:h-44 sm:w-44">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2A211D]">
                    {node.label}
                  </span>
                  <div className="mt-2 space-y-0.5">
                    {node.items.map((item) => (
                      <p key={item} className="text-[10.5px] leading-[1.4] text-[#6B584B]">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default CollaborationSection;
