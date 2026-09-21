"use client";

import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/HeroSection";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6EA9C7]">
      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#6EA9C7]/40 text-[10px]">
        {number}
      </span>
      {children}
    </p>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F6F3ED] text-[#2A2522]">
      <Header />
      <main className="overflow-x-clip">
        {/* ============ HERO ============ */}
        <section className="relative mx-auto max-w-[1440px] px-6 pb-[clamp(3rem,7vw,5rem)] pt-[clamp(7rem,12vw,9.5rem)] md:px-12">
          <div className="grid gap-14 md:grid-cols-[1fr_0.85fr] md:items-center md:gap-10">
            <motion.div {...reveal} className="max-w-[560px]">
              <p className="mb-6 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6EA9C7]">
                <span className="h-px w-8 bg-[#6EA9C7]/50" />
                About us
                <Image src="/icon-star.png" alt="" width={120} height={195} aria-hidden="true" className="h-3 w-auto opacity-70" />
              </p>
              <h1 className="font-serif text-[clamp(2.4rem,4.8vw,4.75rem)] font-normal leading-[1.05] tracking-[-0.03em]">
                <span className="block text-[#2A2522]">You build the business.</span>
                <span className="block text-[#6EA9C7]">We help the world see it.</span>
              </h1>
              <p className="mt-8 max-w-[460px] text-[15px] leading-[1.75] text-[#6F6963] md:text-[17px]">
                Every business starts with an idea. Then comes the hard part: turning
                that idea into something people can understand, trust, and remember.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="flex w-full items-end justify-center gap-1 sm:gap-2 md:justify-end"
            >
              <div className="relative w-full max-w-[300px] shrink-0 sm:max-w-[380px]">
                <Image
                  src="/line-doodle.png"
                  alt=""
                  width={193}
                  height={203}
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-8 top-0 hidden h-[85%] w-auto sm:block md:-right-10"
                />
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[999px] rounded-b-[28px] border-[6px] border-white bg-[#DCEAF3] shadow-[0_28px_50px_rgba(42,33,29,0.14)]">
                  <Image
                    src="/about-hero.png"
                    alt="A warm, sunlit workspace with a laptop and coffee"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <Image
                src="/handwritten-ideas.png"
                alt="Ideas into impact"
                width={145}
                height={146}
                className="hidden w-[86px] shrink-0 pb-10 sm:block md:w-[104px] md:pb-14"
              />
            </motion.div>
          </div>
        </section>

        {/* ============ THE REALIZATION ============ */}
        <section className="relative bg-[#F0EAE0] px-6 py-[clamp(5rem,9vw,8.25rem)] md:px-12">
          <div className="mx-auto max-w-[1440px]">
            <motion.div {...reveal}>
              <SectionLabel number="01">The Realization</SectionLabel>
            </motion.div>

            <div className="relative mt-12 grid gap-12 md:grid-cols-[1fr_1px_1fr] md:gap-0">
              <motion.div {...reveal} className="md:pr-12">
                <h2 className="font-serif text-[clamp(1.9rem,3.2vw,2.75rem)] font-normal leading-[1.15] tracking-[-0.025em] text-[#2A2522]">
                  Before Lumora,
                  <br />I was building too.
                </h2>
                <p className="mt-6 max-w-md text-[15px] leading-[1.75] text-[#6F6963]">
                  I know what it feels like to put your time, energy, and belief into
                  something that&apos;s yours.
                </p>
                <p className="mt-5 max-w-md text-[15px] leading-[1.75] text-[#6F6963]">
                  Building my own business taught me something important:
                </p>
                <p className="mt-5 max-w-md text-[15px] font-semibold leading-[1.75] text-[#2A2522]">
                  A good business can be overlooked when its story isn&apos;t being
                  communicated well.
                </p>
              </motion.div>

              <div className="hidden bg-[#2A2522]/10 md:block" />

              <motion.div {...reveal} className="relative md:pl-12">
                <h2 className="font-serif text-[clamp(1.9rem,3.2vw,2.75rem)] font-normal leading-[1.15] tracking-[-0.025em] text-[#5A4030]">
                  Make it clear.
                  <br />
                  Make it distinct.
                  <br />
                  Make it work.
                </h2>
                <p className="mt-6 max-w-sm text-[15px] leading-[1.75] text-[#6F6963]">
                  We bring together strategy, design, development and technology to
                  turn good businesses into digital experiences that work.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto mt-14 flex h-[230px] w-[230px] flex-col items-center justify-center gap-3 md:mx-0 md:ml-auto md:mt-[-9rem] md:h-[260px] md:w-[260px]"
            >
              <Image
                src="/shape-blob-blue.png"
                alt=""
                fill
                aria-hidden="true"
                className="pointer-events-none object-contain"
              />
              <div className="relative flex flex-col items-center gap-3">
                {["STRATEGY", "DESIGN", "DEVELOPMENT", "AUTOMATION", "MARKETING"].map((item) => (
                  <span
                    key={item}
                    className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2A2522]/75"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============ MEET THE FOUNDER ============ */}
        <section className="relative bg-[#F6F3ED] px-6 py-[clamp(5rem,9vw,8.25rem)] md:px-12">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-14 md:grid-cols-[0.85fr_1fr] md:items-center md:gap-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="order-1 flex w-full items-start justify-center gap-2 md:justify-start"
              >
                <Image
                  src="/handwritten-great-work.png"
                  alt="Great work, finally seen."
                  width={145}
                  height={133}
                  className="hidden w-[90px] shrink-0 pt-10 md:block md:w-[104px] md:pt-16"
                />

                <div className="relative w-full max-w-[380px] shrink-0">
                  <div className="absolute -left-6 -top-6 h-[80%] w-[80%] rounded-[55%_45%_60%_40%] bg-[#DCEAF3]" />
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[999px] rounded-b-[28px] border-[6px] border-white bg-[#D8C3A8]/40 shadow-[0_28px_50px_rgba(42,33,29,0.14)]">
                    <Image
                      src="/founder-photo.png"
                      alt="Namrata, founder of Lumora, working at her desk"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div {...reveal} className="order-2 max-w-[540px]">
                <SectionLabel number="02">Meet the Founder</SectionLabel>
                <h2 className="mt-6 font-serif text-[clamp(2.1rem,3.6vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.03em] text-[#2A2522]">
                  Hi, I&apos;m Namrata.
                </h2>
                <p className="mt-6 max-w-md text-[15px] leading-[1.75] text-[#6F6963]">
                  You can have a great product. A thoughtful service. Years of
                  experience. A business you&apos;re genuinely proud of.
                </p>
                <p className="mt-5 max-w-md text-[15px] leading-[1.75] text-[#6F6963]">
                  But none of that matters if people can&apos;t understand its value
                  when they encounter you online.
                </p>
                <p className="mt-5 max-w-md text-[15px] font-semibold leading-[1.75] text-[#2A2522]">
                  That&apos;s where I saw the gap.
                </p>

                <div className="mt-10 flex items-end gap-4">
                  <div>
                    <p className={`text-[28px] leading-none text-[#2A2522] ${caveat.className}`}>
                      Namrata Chawla
                    </p>
                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6F6963]">
                      Founder, Lumora
                    </p>
                  </div>
                  <Image
                    src="/decor-flower.png"
                    alt=""
                    width={220}
                    height={204}
                    aria-hidden="true"
                    className="hidden h-14 w-auto opacity-80 sm:block"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============ BY THE NUMBERS ============ */}
        <section className="relative bg-[#F0EAE0] px-6 py-[clamp(4rem,7vw,6.25rem)] md:px-12">
          <div className="mx-auto max-w-[1440px]">
            <motion.div {...reveal}>
              <SectionLabel number="03">By the Numbers</SectionLabel>
            </motion.div>

            <div className="mt-10 grid gap-12 md:grid-cols-[0.85fr_1.4fr_0.75fr] md:items-center md:gap-10">
              <motion.h2
                {...reveal}
                className="font-serif text-[clamp(1.9rem,3.2vw,2.6rem)] font-normal leading-[1.15] tracking-[-0.025em] text-[#2A2522]"
              >
                Built through experience.
                <br />
                Growing with purpose.
              </motion.h2>

              <motion.div
                {...reveal}
                className="flex flex-wrap gap-x-10 gap-y-8 border-y border-[#2A2522]/10 py-8 sm:flex-nowrap sm:justify-between md:border-none md:py-0"
              >
                {[
                  { value: "5+", label: "Years of\nbuilding" },
                  { value: "50+", label: "Projects\ndelivered" },
                  { value: "30+", label: "Happy\nclients" },
                  { value: "1", label: "Big vision" },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`pl-6 first:pl-0 ${
                      index !== 0 ? "border-l border-[#2A2522]/15" : ""
                    }`}
                  >
                    <p className="font-serif text-[clamp(2rem,3.2vw,2.75rem)] leading-none text-[#2A2522]">
                      {stat.value}
                    </p>
                    <p className="mt-2 whitespace-pre-line text-[12px] leading-[1.4] text-[#6F6963]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto w-full max-w-[200px] md:mx-0 md:ml-auto"
              >
                <Image
                  src="/handwritten-bigger-reach.png"
                  alt="Same story, bigger reach."
                  width={145}
                  height={172}
                  className="ml-auto mb-2 w-[76px]"
                />
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] border-[5px] border-white shadow-[0_18px_35px_rgba(42,33,29,0.12)]">
                  <Image src="/numbers.png" alt="A notebook on a desk" fill className="object-cover" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============ OUR WHY / FINAL CTA ============ */}
        <section className="relative mx-auto max-w-[1440px] px-6 py-[clamp(3rem,6vw,4.5rem)] md:px-12">
          <motion.div
            {...reveal}
            className="relative overflow-hidden rounded-[28px] bg-[#5A4030] px-7 py-12 text-[#F6F3ED] md:px-14 md:py-16"
          >
            {/* decorative circular emblem */}
            <div className="absolute right-8 top-8 hidden h-24 w-24 overflow-hidden rounded-full sm:block">
              <Image src="/footer-stamp.png" alt="" fill aria-hidden="true" className="object-cover" />
            </div>
            {/* decorative sand wave along the bottom */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full opacity-40" aria-hidden="true">
              <Image src="/footer-waves.png" alt="" fill className="object-cover object-bottom" />
            </div>

            <div className="relative grid gap-12 md:grid-cols-[1.1fr_1px_0.9fr] md:gap-0">
              <div className="md:pr-12">
                <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D8C3A8]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#D8C3A8]/50 text-[10px]">
                    04
                  </span>
                  Our Why
                </p>
                <h2 className="mt-6 font-serif text-[clamp(2rem,3.4vw,2.9rem)] font-normal leading-[1.1] tracking-[-0.025em] text-[#F6F3ED]">
                  So I built Lumora.
                </h2>
                <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-[#F6F3ED]/75">
                  A digital agency for businesses that have something worth saying,
                  but need the right way to say it. We bring together strategy,
                  brand, design, development, and technology to turn ideas into
                  digital experiences that feel considered, useful, and unmistakably
                  yours.
                </p>
                <p className="mt-5 max-w-xl text-[15px] font-semibold leading-[1.75] text-[#F6F3ED]">
                  We don&apos;t make businesses look like everyone else.
                </p>
              </div>

              <div className="hidden bg-[#F6F3ED]/15 md:block" />

              <div className="flex flex-col justify-between md:pl-12">
                <div>
                  <p className="text-[16px] leading-[1.6] text-[#F6F3ED]/85">
                    You&apos;ve already built something worth believing in.
                  </p>
                  <p className="mt-4 text-[16px] leading-[1.6] text-[#F6F3ED]/85">
                    Let&apos;s make sure your digital presence says the same.
                  </p>
                </div>

                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-[#BFD8E8] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2A2522] transition-transform"
                >
                  Let&apos;s work together <ArrowRight size={14} />
                </motion.a>
              </div>
            </div>

            <div className="relative mt-14 text-right md:mt-16">
              <p className="font-serif text-lg tracking-[0.14em] text-[#F6F3ED]/70">LUMORA</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#D8C3A8]/70">
                A brighter online presence
              </p>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
