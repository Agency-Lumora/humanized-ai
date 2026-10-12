"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Settings2, ShieldCheck, Users } from "lucide-react";

const benefits = [
  {
    number: "01",
    icon: Users,
    heading: "You lead the relationship",
    body: "Stay focused on what you do best — strategy, creative and client management. We'll handle the technical side.",
  },
  {
    number: "02",
    icon: Settings2,
    heading: "We handle the build",
    body: "From design to development, we create high-quality, custom websites that match your client's goals and your standards.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    heading: "Your brand stays in front",
    body: "All communication, deliverables and support are under your brand. Your client always sees you — not us.",
  },
] as const;

export function PartnershipBenefits() {
  const shouldReduceMotion = useReducedMotion();
  const reducedMotion = shouldReduceMotion ?? false;

  return (
    <section className="bg-[#F4EFE7] py-[clamp(3.5rem,7vw,5.5rem)]">
      <div className="mx-auto max-w-[80rem] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 border-t border-[#806C5D]/15 pt-12 sm:grid-cols-3 sm:gap-10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.number}
                initial={reducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col gap-4 ${
                  index > 0 ? "sm:border-l sm:border-[#806C5D]/15 sm:pl-8" : ""
                }`}
              >
                <span className="font-mono text-[11px] text-[#88C5E8]">{benefit.number}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#806C5D]/25 text-[#35251B]">
                  <Icon size={18} strokeWidth={1.4} />
                </span>
                <h3 className="font-serif text-xl text-[#35251B]">{benefit.heading}</h3>
                <p className="text-sm leading-7 text-[#6B584B]">{benefit.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PartnershipBenefits;
