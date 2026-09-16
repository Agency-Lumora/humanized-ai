"use client";

import { motion } from "framer-motion";
import { Badge, Button, GlassPanel, Section, SectionHeading, Typography } from "@/components/ui";
import { pricingTiers } from "@/lib/content";
import { FiCheck } from "react-icons/fi";

export function PricingSection() {
  return (
    <Section id="pricing">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col gap-12"
      >
        <SectionHeading
  eyebrow="Pricing"
  title="Simple Pricing. Premium Results."
  description="Choose a plan that fits your business today, with the flexibility to grow tomorrow."
  align="center"
/>

        <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-4">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
              whileHover={tier.highlighted ? { y: -8 } : { y: -4 }}
              className="group w-[82vw] shrink-0 snap-center md:w-auto"
            >
              <GlassPanel
                className={`group relative flex h-full flex-col rounded-[32px] p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_80px_rgba(124,92,255,0.18)] ${
                  tier.highlighted
  ? "ring-2 ring-[#7C5CFF]/50 bg-white/90 shadow-[0_25px_80px_rgba(124,92,255,0.25)] scale-[1.03]"
  : "hover:bg-white/70"
                }`}
              >
                {tier.highlighted && (
                  <Badge tone="accent" className="w-fit">
                    {tier.description}
                  </Badge>
                )}

                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-slate-950">{tier.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-slate-950">{tier.price}</span>
                    {tier.price !== "Custom" && (
                      <span className="text-sm text-slate-600">one-time</span>
                    )}
                  </div>
                  {tier.description && tier.price === "Custom" && (
                    <p className="text-sm text-slate-600">{tier.description}</p>
                  )}
                </div>

                <div className="space-y-3 flex-1">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <FiCheck className="mt-1 h-5 w-5 shrink-0 text-[#7C5CFF]" />
                      <p className="text-sm leading-6 text-slate-700">{feature}</p>
                    </div>
                  ))}
                </div>

                <Button
                  href="#contact"
                  variant={tier.highlighted ? "primary" : "ghost"}
                  className="w-full py-3 text-base font-semibold"
                >
                  {tier.ctaText || "Get in Touch"}
                </Button>
              </GlassPanel>
            </motion.div>
          ))}
        </div>

        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.95 }}
  className="rounded-[36px] border border-violet-200/60 bg-gradient-to-br from-white to-violet-50 p-12 text-center shadow-[0_25px_80px_rgba(124,92,255,0.12)]"
>
  <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-[#7C5CFF]">
    Need Something Unique?
  </p>

  <h3 className="mb-5 text-4xl font-black text-slate-950">
    Let's Build Your Dream Website.
  </h3>

  <Typography
    size="body"
    className="mx-auto mb-8 max-w-2xl text-slate-600"
  >
    Every business is different. If none of these plans perfectly match your
    vision, we'll create a completely custom solution tailored to your goals.
  </Typography>

  <Button href="#contact" variant="primary">
    Book a Free Consultation
  </Button>
</motion.div>
      </motion.div>
    </Section>
  );
}

export default PricingSection;
