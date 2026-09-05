"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Database,
  Megaphone,
  Monitor,
  PenTool,
  RefreshCw,
  Users,
  Zap,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

const services = [
  ["Website Design & Development", "High-performing digital experiences designed to build trust and convert visitors into customers.", Monitor],
  ["UI/UX Design", "Intuitive and beautiful interfaces that put your users first.", PenTool],
  ["Website Redesign", "Give your website a fresh look and stronger performance.", RefreshCw],
  ["Integrations & Setup", "Seamless integrations with the tools your business relies on.", Database],
  ["Automations", "Save time and scale with smart automations tailored to your business.", Zap],
  ["Social Media Marketing", "Build your brand and engage the right audience across platforms.", BarChart3],
  ["Paid Ads", "Reach, attract and convert with strategic ad campaigns.", Megaphone],
  ["Partner With Us", "We work with marketing and service agencies to deliver end-to-end digital solutions for their clients.", Users],
] as const;

export function ServicesSection() {
  return (
    <section id="services" className="border-b border-[#806C5D]/20 bg-[#F4EFE7] py-[clamp(3rem,5vw,4.5rem)]">
      <Container>
        <div className="mb-[clamp(1.5rem,2.5vw,2rem)] flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#806C5D]">Our services</p>
            <h2 className="mt-3 max-w-3xl font-serif text-[clamp(2rem,3.5vw,3.25rem)] leading-[1.05] tracking-[-0.03em]">
              Complete digital solutions for <em className="font-normal text-[#806C5D]">modern businesses.</em>
            </h2>
          </div>
          <a href="#consultation" className="group inline-flex shrink-0 items-center gap-2 border-b border-[#2A211D] pb-0.5 text-[9px] font-semibold uppercase tracking-[0.14em]">
            Explore all services <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="grid gap-[2px] sm:grid-cols-2 lg:grid-cols-4">
          {services.map(([title, description, Icon], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
              className="group flex min-h-[13.5rem] flex-col border border-[#806C5D]/10 bg-[#DCE7EA]/55 p-[clamp(1rem,1.4vw,1.25rem)] transition-colors duration-300 hover:bg-[#AFC4CE]/50 sm:min-h-[14rem] lg:min-h-[14.5rem]"
            >
              <Icon className="h-[1.15rem] w-[1.15rem] text-[#806C5D] transition-transform duration-300 group-hover:-translate-y-0.5" strokeWidth={1.3} />
              <p className="mt-4 text-[8px] font-semibold tracking-[0.14em] text-[#806C5D]">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-1.5 font-serif text-[clamp(1.05rem,1.35vw,1.25rem)] leading-[1.12] tracking-[-0.01em]">{title}</h3>
              <p className="mt-2 text-[11px] leading-[1.5] text-[#2A211D]/65">{description}</p>
              <a href="#consultation" className="mt-auto inline-flex w-fit items-center gap-1 border-b border-[#806C5D]/50 pb-0.5 pt-4 text-[8px] font-semibold uppercase tracking-[0.15em] transition-colors hover:border-[#2A211D]">
                Learn more <ArrowRight className="h-2.5 w-2.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ServicesSection;
