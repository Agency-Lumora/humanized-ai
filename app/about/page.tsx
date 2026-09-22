"use client";

import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/HeroSection";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F4EFE7] pt-[50px] text-[#2A211D]">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#6B584B]">
                ABOUT US
              </p>
              <h1 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] text-[#35251B]">
                A digital agency built on <span className="text-[#88C5E8]">ideas, strategy</span> and real people.
              </h1>
              <p className="mt-6 max-w-xl text-sm leading-7 text-[#6B584B]">
                Lumora is a full-service digital agency based in Surat, India. We help ambitious brands build a strong online presence with thoughtful design, smart technology and growth-driven strategy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/about-hero.jpg"
                  alt="Ideas into impact"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-serif text-lg italic text-[#35251B]">Ideas into impact.</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-[#88C5E8]/20 blur-2xl" />
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="relative mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="order-2 md:order-1"
            >
              <div className="relative">
                <div className="absolute -top-8 -left-8 h-48 w-48 rounded-full bg-[#88C5E8]/30 blur-3xl" />
                <div className="relative rounded-3xl bg-[#88C5E8]/10 p-8 backdrop-blur-sm">
                  <ul className="space-y-4">
                    {['STRATEGY', 'DESIGN', 'DEVELOPMENT', 'AUTOMATION', 'MARKETING'].map((item, index) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#35251B]"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 md:order-2"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#6B584B]">
                OUR MISSION
              </p>
              <h2 className="mt-4 font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.02em] text-[#35251B]">
                Build digital experiences that drive real growth.
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-7 text-[#6B584B]">
                We combine creativity with technology to build websites, brands and digital systems that don't just look good — they work. Our focus is on delivering functional, scalable and future-ready solutions for modern businesses.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="relative mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#6B584B]">
                THE FOUNDER
              </p>
              <h2 className="mt-4 font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.02em] text-[#35251B]">
                Hi, I'm Namrata.
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-7 text-[#6B584B]">
                I'm the founder of Lumora — a digital agency born from my love for design, tech and building things that matter. With 5+ years of experience in the creative and digital space, I've worked with brands across industries, helping them bring their ideas to life online. At Lumora, I lead a team that's passionate about creating meaningful digital experiences — ones that are beautiful, functional and built for long-term growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/founder.jpg"
                  alt="Founder working"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-[#88C5E8]/20 blur-2xl" />
              <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-[#88C5E8]/30 blur-2xl" />
            </motion.div>
          </div>
        </section>

        {/* Numbers Section */}
        <section className="relative mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#6B584B]">
                BY THE NUMBERS
              </p>
              <div className="mt-8 space-y-6">
                {[
                  { value: '5+', label: 'Years of experience' },
                  { value: '50+', label: 'Projects delivered' },
                  { value: '30+', label: 'Happy clients' },
                  { value: '1', label: 'Big vision' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-baseline gap-4"
                  >
                    <span className="font-serif text-4xl text-[#88C5E8]">{stat.value}</span>
                    <span className="text-sm text-[#6B584B]">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/numbers.jpg"
                  alt="Numbers section"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-serif text-lg italic text-[#35251B]">Same goal, bigger dreams.</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-[#88C5E8]/20 blur-2xl" />
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl bg-[#88C5E8]/10 p-8 md:p-12"
          >
            <div className="absolute -top-8 -right-8 h-48 w-48 rounded-full bg-[#88C5E8]/30 blur-3xl" />
            <div className="relative">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#6B584B]">
                OUR WHY
              </p>
              <h2 className="mt-4 font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.02em] text-[#35251B]">
                Because every brand deserves a digital home that works as hard as they do.
              </h2>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-[#6B584B]">
                We're here for the founders, dreamers and doers who are ready to grow — with a partner who understands the bigger picture, and cares about the details.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#88C5E8] px-6 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition-transform"
              >
                Let's work together <ArrowRight size={14} />
              </motion.button>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
