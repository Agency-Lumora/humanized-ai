"use client";

import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/HeroSection";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function PartnershipPage() {
  return (
    <div className="min-h-screen bg-[#E8F4F8] pt-[50px] text-[#2A211D]">
      <Header />
      <main>
        {/* Partnership CTA Section */}
        <section className="relative mx-auto max-w-[1600px] px-6 py-20 md:px-12 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#6B8FA6]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#6B8FA6]">
                  PARTNER WITH US
                </p>
              </div>

              <h1 className="font-sans text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.02em] text-[#3D2914]">
                More work than you
                <br />
                can handle, or clients
                <br />
                to refer?
              </h1>

              <p className="mt-8 max-w-lg text-sm leading-7 text-[#6B584B]">
                Let's build something profitable together.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#3D2914] px-8 py-4 font-sans text-[12px] font-semibold uppercase tracking-[0.1em] text-[#FDF6E3] transition-transform"
              >
                Become a partner <ArrowRight size={14} />
              </motion.button>
            </motion.div>

            {/* Right Side - Visual Collage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Decorative circular line */}
              <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full border-2 border-[#6B8FA6]/30" />

              {/* Main image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#F5E6D3] to-[#E8D5C4]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">💻☕</div>
                </div>
              </div>

              {/* Supporting images */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-[#6B8FA6]/20 backdrop-blur-sm"
              >
                <div className="flex h-full items-center justify-center text-4xl">👆</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-[#6B8FA6]/30 backdrop-blur-sm"
              >
                <div className="flex h-full items-center justify-center text-3xl">📓</div>
              </motion.div>

              {/* Handwritten annotation */}
              <div className="absolute -bottom-4 -right-4 font-serif text-lg italic text-[#6B8FA6]">
                Build
                <br />
                Grow
                <br />
                Together.
              </div>

              {/* Decorative star */}
              <div className="absolute top-8 left-8 text-2xl text-[#6B8FA6]">✦</div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}