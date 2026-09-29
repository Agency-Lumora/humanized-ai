"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "./Eyebrow";

const steps = [
  {
    number: "01",
    title: "Discover",
    image: "/numbers.png",
    alt: "A notebook open on a desk, used for early research",
    lede: "First, we understand.",
    description:
      "Before we begin anything, we get to know your business, your audience, your goals, and what's working right now.",
    heading: "We look at:",
    bullets: ["Business", "Audience", "Competition", "Goals", "Existing digital presence"],
  },
  {
    number: "02",
    title: "Strategize",
    image: "/texture-fabric.png",
    alt: "Considered materials laid out during the planning stage",
    lede: "Then, we find the direction.",
    description:
      "Good design needs a reason behind it. We turn everything we've learned into a clear direction for your brand, website, systems, or digital growth.",
    heading: "You'll get clarity on:",
    bullets: ["Positioning", "Structure", "User journey", "Content direction", "Technology"],
  },
  {
    number: "03",
    title: "Create",
    image: "/founder-photo.png",
    alt: "Designing at a desk with creative direction pinned nearby",
    lede: "Now, we make it tangible.",
    description:
      "This is where ideas start becoming real. We bring together strategy, visual identity, UX, content, and technology to create something that actually works.",
    heading: "This can include:",
    bullets: ["Brand identity", "UX/UI", "Website design", "Creative direction", "Digital experiences"],
  },
  {
    number: "04",
    title: "Build",
    image: "/about-hero.png",
    alt: "A laptop mid-build on a sunlit desk",
    lede: "Beautiful is good. Functional is better.",
    description:
      "We develop the experience, connect the systems, integrate the tools, and make sure everything works the way it should.",
    heading: "Behind the scenes:",
    bullets: ["Development", "CMS", "CRM", "Automation", "Integrations", "Testing"],
  },
  {
    number: "05",
    title: "Launch & Grow",
    image: "/decor-flower.png",
    alt: "A plant marking the growth stage after launch",
    lede: "Going live isn't the finish line.",
    description:
      "We launch with intention, hand over the tools, and make sure you know how to use what we've built.",
    heading: "After launch:",
    bullets: ["Launch support", "Training", "Optimization", "Analytics", "Growth strategy"],
  },
];

export function ProcessSteps() {
  return (
    <section id="process" className="border-b border-[#806C5D]/20 bg-[#F4EFE7] py-[clamp(2.75rem,5vw,4.5rem)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          data-motion-reveal
        >
          <Eyebrow>The Lumora process</Eyebrow>
          <h2 className="mt-5 max-w-xl font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] font-normal leading-[1.2] tracking-[-0.02em] text-[#2A211D]">
            We don&apos;t just follow a process.
            <br />
            <span className="text-[#6EA9C7]">We build one around you.</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 border-t border-[#806C5D]/20 sm:grid-cols-2 lg:grid-cols-5 lg:border-t-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              data-motion-reveal
              className={`border-b border-[#806C5D]/20 px-0 py-8 sm:px-6 sm:py-10 lg:border-b-0 lg:border-l lg:py-0 lg:pr-6 ${
                index === 0 ? "lg:border-l-0" : ""
              }`}
            >
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-lg text-[#6EA9C7]">{step.number}</span>
                <h3 className="text-[15px] font-semibold text-[#2A211D]">{step.title}</h3>
              </div>

              <div className="relative mt-4 aspect-[4/3] w-full overflow-hidden rounded-[10px]">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <p className="mt-4 text-[13px] font-semibold leading-5 text-[#2A211D]">{step.lede}</p>
              <p className="mt-2 text-[12.5px] leading-[1.6] text-[#6B584B]">{step.description}</p>

              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#806C5D]">
                {step.heading}
              </p>
              <ul className="mt-2 space-y-1">
                {step.bullets.map((bullet) => (
                  <li key={bullet} className="text-[12px] leading-[1.5] text-[#6B584B]">
                    &middot; {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProcessSteps;
