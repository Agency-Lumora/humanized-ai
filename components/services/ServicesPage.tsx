"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Search,
  Lightbulb,
  Code,
  TrendingUp,
  Globe,
  BarChart3,
  Check,
  Laptop,
  Layout,
  Menu,
  X
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Service data with detailed content
const servicesData = [
  {
    id: "01",
    title: "Web Design & Development",
    heading: "Fast, responsive, conversion-focused websites.",
    description: "We design and develop fast, responsive, and conversion-focused websites that combine thoughtful UI/UX design with reliable technology. From business websites and landing pages to custom web applications and e-commerce platforms, Lumora creates digital experiences tailored to your goals, audience, and brand. Our web development services help businesses in India and globally build a professional online presence that is scalable, accessible, and designed for long-term growth.",
    features: [
      "Custom UI/UX design",
      "Responsive development",
      "E-commerce solutions",
      "Performance optimization",
      "SEO-friendly structure",
      "Ongoing maintenance"
    ],
    icon: Layout
  },
  {
    id: "02",
    title: "Branding & Identity",
    heading: "Build a distinctive brand identity.",
    description: "Build a distinctive brand identity that communicates your values, positioning, and personality with clarity. Lumora provides branding and identity services including logo design, color palettes, typography, visual systems, and brand guidelines to create a consistent brand experience across digital and physical touchpoints. Whether you're launching a new business or refreshing an existing brand, we help businesses worldwide establish a recognizable and memorable identity.",
    features: [
      "Logo design systems",
      "Color & typography",
      "Brand guidelines",
      "Visual identity systems",
      "Print & digital assets",
      "Brand strategy"
    ],
    icon: Globe
  },
  {
    id: "03",
    title: "AI Automation",
    heading: "Streamline repetitive business tasks.",
    description: "Streamline repetitive business tasks with practical AI automation and intelligent workflow integrations. Lumora helps businesses automate processes such as customer communication, lead management, data handling, internal operations, and tool-to-tool workflows using solutions tailored to their needs. Our AI automation services support businesses in India and globally in reducing manual effort, improving operational efficiency, and creating more scalable systems.",
    features: [
      "Workflow automation",
      "AI-powered chatbots",
      "Data processing",
      "Tool integrations",
      "Process optimization",
      "Custom AI solutions"
    ],
    icon: Lightbulb
  },
  {
    id: "04",
    title: "CRM Solutions",
    heading: "Stronger relationships. Smarter business.",
    description: "Organize customer relationships and improve your sales process with customized CRM solutions designed around your business operations. Lumora helps businesses set up and optimize CRM systems, including lead pipelines, customer data management, workflow automation, follow-up processes, and reporting integrations. Whether you're a growing startup or an established business serving customers globally, our CRM solutions help create more structured operations, better visibility, and a smoother customer journey.",
    features: [
      "Lead & customer management",
      "Workflow automation",
      "Reporting & analytics",
      "Sales pipeline setup",
      "Tool integrations",
      "Ongoing support & training"
    ],
    icon: BarChart3
  },
  {
    id: "05",
    title: "Social Media Marketing",
    heading: "Build a stronger digital presence.",
    description: "Build a stronger digital presence with strategic social media marketing focused on meaningful communication, brand visibility, and audience engagement. Lumora supports businesses with content strategy, creative direction, social media design, campaign planning, and performance-oriented marketing solutions tailored to their goals. We help brands in India and across global markets communicate consistently, connect with their audience, and build a stronger presence across relevant social platforms.",
    features: [
      "Content strategy",
      "Creative direction",
      "Social media design",
      "Campaign planning",
      "Performance analytics",
      "Community management"
    ],
    icon: TrendingUp
  },
  {
    id: "06",
    title: "Digital Consulting",
    heading: "Make better digital decisions.",
    description: "Make better digital decisions with practical consulting tailored to your business goals, challenges, and growth stage. Lumora provides digital consulting across website strategy, technology selection, process improvement, AI opportunities, CRM planning, and digital transformation. We work with businesses globally to identify opportunities, build actionable roadmaps, and connect their digital investments with sustainable business objectives.",
    features: [
      "Digital strategy",
      "Technology selection",
      "Process improvement",
      "AI opportunity assessment",
      "CRM planning",
      "Transformation roadmaps"
    ],
    icon: Search
  }
];

// Navigation component
function ServicesHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/portfolio" },
    { label: "Process", href: "/process" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 mx-auto flex max-w-[1440px] items-center justify-between bg-[#F8F9FA]/80 backdrop-blur-xl border border-white/20 shadow-lg px-6 py-3 md:px-12 md:py-4">
      <Link
        href="/"
        className="font-sans text-[25px] font-bold tracking-[0.05em] text-[#111827] md:text-[27px]"
      >
        LUMORA
      </Link>

      <nav
        className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex"
        aria-label="Primary navigation"
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            aria-current={pathname === link.href ? "page" : undefined}
            className={`font-sans text-[11px] uppercase tracking-[0.1em] transition-opacity hover:opacity-60 ${
              pathname === link.href 
                ? "text-[#3B82F6] font-semibold" 
                : "text-[#111827]/80"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Link
        href="/contact"
        className="hidden items-center gap-3 rounded-full bg-[#3B82F6] px-5 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition-transform hover:-translate-y-0.5 md:flex"
      >
        LET'S CREATE <ArrowRight size={13} strokeWidth={1.4} />
      </Link>

      <button
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        className="flex h-9 w-9 items-center justify-center md:hidden"
      >
        {menuOpen ? (
          <X size={20} strokeWidth={1.25} />
        ) : (
          <Menu size={20} strokeWidth={1.25} />
        )}
      </button>

      {menuOpen && (
        <nav
          className="fixed left-0 right-0 top-[44px] flex flex-col border-b border-[#111827]/10 bg-[#F8F9FA]/95 p-5 shadow-lg backdrop-blur-md md:hidden"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#111827]/10 py-3 font-sans text-[12px] uppercase tracking-[0.13em] last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative mx-auto max-w-[1440px] overflow-hidden bg-[#F8F9FA] px-6 md:px-12">
      <div className="grid min-h-screen items-center gap-8 pt-[44px] md:grid-cols-[1fr_1fr] md:gap-12 md:pt-[80px]">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-[600px]"
        >
          <p className="mb-4 font-sans text-[10px] font-semibold tracking-[0.2em] text-[#3B82F6] uppercase">
            Our Services
          </p>
          
          <h1 className="text-[40px] font-normal leading-[1.1] tracking-[-0.02em] text-[#111827] sm:text-[50px] md:text-[56px] lg:text-[64px]">
            Strategy. Design. Technology.{" "}
            <span className="text-[#3B82F6]">Growth.</span>
          </h1>
          
          <p className="mt-6 max-w-[480px] text-[14px] leading-[1.6] text-[#111827]/70 md:text-[15px]">
            End-to-end digital solutions that transform your business. From strategy to execution, we deliver results that matter.
          </p>
        </motion.div>

        {/* Right Visual - Floating Glassmorphic Elements */}
        <div className="relative h-[500px] w-full md:h-[600px]">
          {/* Background abstract glow */}
          <div className="absolute right-[10%] top-[20%] h-64 w-64 rounded-full bg-[#3B82F6]/10 blur-3xl" />
          <div className="absolute right-[20%] top-[30%] h-48 w-48 rounded-full bg-[#60A5FA]/10 blur-2xl" />
          
          {/* Laptop mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute left-[10%] top-[15%] z-20 rounded-2xl bg-white p-3 shadow-xl md:left-[5%]"
          >
            <div className="h-[200px] w-[280px] rounded-xl bg-gradient-to-br from-[#F8F9FA] to-[#E5E7EB] md:h-[250px] md:w-[350px]">
              <div className="flex h-full flex-col p-4">
                <div className="mb-3 h-2 w-1/3 rounded-full bg-[#3B82F6]/20" />
                <div className="space-y-2">
                  <div className="h-2 w-full rounded-full bg-[#3B82F6]/10" />
                  <div className="h-2 w-2/3 rounded-full bg-[#3B82F6]/10" />
                  <div className="h-2 w-1/2 rounded-full bg-[#3B82F6]/10" />
                </div>
                <div className="mt-auto flex gap-2">
                  <div className="h-8 flex-1 rounded-lg bg-[#3B82F6]/20" />
                  <div className="h-8 flex-1 rounded-lg bg-[#3B82F6]/10" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating card 1 - Growth chart */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute right-[15%] top-[25%] z-30 rounded-2xl bg-white p-4 shadow-lg backdrop-blur-sm md:right-[10%]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3B82F6]/10">
                <BarChart3 size={18} className="text-[#3B82F6]" />
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-wider text-[#3B82F6] uppercase">
                  More visibility
                </p>
                <p className="text-[12px] font-medium text-[#111827]">More growth.</p>
              </div>
            </div>
          </motion.div>

          {/* Floating card 2 - Global reach */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute right-[25%] bottom-[25%] z-30 rounded-2xl bg-white p-4 shadow-lg backdrop-blur-sm md:right-[20%]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3B82F6]/10">
                <Globe size={18} className="text-[#3B82F6]" />
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-wider text-[#3B82F6] uppercase">
                  Global Reach
                </p>
                <p className="text-[11px] text-[#111827]/70">India, US, UK & beyond</p>
              </div>
            </div>
          </motion.div>

          {/* Abstract line art */}
          <svg
            className="absolute right-[5%] top-[40%] h-32 w-32 text-[#3B82F6]/20"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path d="M10,50 Q30,30 50,50 T90,50" stroke="currentColor" strokeWidth="2" />
            <path d="M10,60 Q30,40 50,60 T90,60" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </section>
  );
}

// Services Showcase Section
function ServicesShowcase() {
  const [activeService, setActiveService] = useState(0); // Default to Web Design & Development (index 0)

  const activeServiceData = servicesData[activeService];

  return (
    <section className="mx-auto max-w-[1440px] bg-[#F8F9FA] px-6 py-16 md:px-12 md:py-24">
      <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
        {/* Left Column - Tab Navigation */}
        <div className="space-y-4">
          {servicesData.map((service, index) => (
            <motion.button
              key={service.id}
              onClick={() => setActiveService(index)}
              className={`w-full rounded-2xl p-4 text-left transition-all duration-300 ${
                activeService === index
                  ? "bg-[#3B82F6]/10"
                  : "hover:bg-white/50"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-4">
                <span
                  className={`font-sans text-[14px] font-semibold ${
                    activeService === index
                      ? "text-[#3B82F6]"
                      : "text-[#111827]/50"
                  }`}
                >
                  {service.id}
                </span>
                <span
                  className={`font-sans text-[14px] font-medium ${
                    activeService === index
                      ? "text-[#111827]"
                      : "text-[#111827]/70"
                  }`}
                >
                  {service.title}
                </span>
              </div>
            </motion.button>
          ))}

          {/* Bottom CTA note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 pt-4"
          >
            <p className="font-sans text-[13px] text-[#111827]/70">
              Let's turn your ideas into digital success.{" "}
              <ArrowRight size={14} className="inline text-[#3B82F6]" />
            </p>
          </motion.div>
        </div>

        {/* Right Column - Dynamic Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-white p-8 shadow-sm md:p-10"
          >
            {/* Section label */}
            <p className="mb-4 font-sans text-[10px] font-semibold tracking-[0.2em] text-[#3B82F6] uppercase">
              {activeServiceData.id} — {activeServiceData.title.toUpperCase()}
            </p>

            {/* Heading */}
            <h2 className="mb-4 text-[28px] font-normal leading-[1.2] tracking-[-0.02em] text-[#111827] md:text-[32px]">
              {activeServiceData.heading}
            </h2>

            {/* Description */}
            <p className="mb-8 text-[14px] leading-[1.7] text-[#111827]/70 md:text-[15px]">
              {activeServiceData.description}
            </p>

            {/* Features Checklist */}
            <div className="mb-8 grid gap-3 sm:grid-cols-2">
              {activeServiceData.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#3B82F6]/10">
                    <Check size={12} className="text-[#3B82F6]" />
                  </div>
                  <span className="text-[13px] text-[#111827]/80">{feature}</span>
                </div>
              ))}
            </div>

            {/* Visual Graphic Area */}
            <div className="relative rounded-2xl bg-gradient-to-br from-[#F8F9FA] to-[#E5E7EB] p-6">
              {/* Kanban-style dashboard preview */}
              <div className="mb-4 flex gap-3">
                <div className="flex-1 rounded-lg bg-white p-3 shadow-sm">
                  <p className="mb-2 text-[10px] font-semibold text-[#111827]/50 uppercase">
                    New
                  </p>
                  <div className="h-2 w-3/4 rounded-full bg-[#3B82F6]/20" />
                </div>
                <div className="flex-1 rounded-lg bg-white p-3 shadow-sm">
                  <p className="mb-2 text-[10px] font-semibold text-[#111827]/50 uppercase">
                    Contacted
                  </p>
                  <div className="h-2 w-1/2 rounded-full bg-[#3B82F6]/20" />
                </div>
                <div className="flex-1 rounded-lg bg-white p-3 shadow-sm">
                  <p className="mb-2 text-[10px] font-semibold text-[#111827]/50 uppercase">
                    Qualified
                  </p>
                  <div className="h-2 w-1/3 rounded-full bg-[#3B82F6]/20" />
                </div>
              </div>

              {/* Sales Pipeline chart card */}
              <div className="absolute bottom-4 right-4 rounded-xl bg-white p-3 shadow-lg">
                <p className="mb-2 text-[9px] font-semibold text-[#111827]/50 uppercase">
                  Sales Pipeline
                </p>
                <div className="flex items-end gap-1">
                  <div className="h-8 w-4 rounded bg-[#3B82F6]/30" />
                  <div className="h-12 w-4 rounded bg-[#3B82F6]/50" />
                  <div className="h-16 w-4 rounded bg-[#3B82F6]/70" />
                  <div className="h-10 w-4 rounded bg-[#3B82F6]/40" />
                </div>
              </div>

              {/* Floating pill tag */}
              <div className="absolute top-4 right-4 rounded-full bg-[#3B82F6] px-3 py-1.5 shadow-lg">
                <p className="text-[10px] font-semibold text-white">
                  Better Customer Journeys ↗
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

// Process Section
function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Understand",
      icon: Search,
      description: "Deep dive into your business"
    },
    {
      number: "02",
      title: "Plan",
      icon: Lightbulb,
      description: "Strategic roadmap creation"
    },
    {
      number: "03",
      title: "Build & Integrate",
      icon: Code,
      description: "Development & implementation"
    },
    {
      number: "04",
      title: "Support & Grow",
      icon: TrendingUp,
      description: "Ongoing optimization"
    }
  ];

  return (
    <section className="mx-auto max-w-[1440px] bg-[#F8F9FA] px-6 py-16 md:px-12 md:py-24">
      <div className="rounded-3xl bg-[#3B82F6]/5 p-8 md:p-12">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          {/* Left Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 font-sans text-[10px] font-semibold tracking-[0.2em] text-[#3B82F6] uppercase">
              — Our Process
            </p>
            <h2 className="mb-4 text-[28px] font-normal leading-[1.2] tracking-[-0.02em] text-[#111827] md:text-[32px]">
              From strategy to steady growth.
            </h2>
            <p className="text-[14px] leading-[1.6] text-[#111827]/70 md:text-[15px]">
              A proven methodology that transforms ideas into measurable results, 
              ensuring every step aligns with your business objectives.
            </p>
          </motion.div>

          {/* Right Process Flow */}
          <div className="grid gap-6 sm:grid-cols-2">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                  <step.icon size={20} className="text-[#3B82F6]" />
                </div>
                <div className="flex-1">
                  <p className="font-sans text-[12px] font-semibold text-[#3B82F6]">
                    {step.number}
                  </p>
                  <h3 className="text-[16px] font-semibold text-[#111827]">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-[13px] text-[#111827]/60">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight 
                    size={16} 
                    className="hidden text-[#3B82F6]/30 sm:block" 
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Bottom CTA Banner
function CTABanner() {
  return (
    <section className="mx-auto max-w-[1440px] bg-[#F8F9FA] px-6 py-16 md:px-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl bg-[#3B82F6]/10 p-8 md:p-12"
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Left Content */}
          <div className="max-w-[600px]">
            <p className="mb-3 font-sans text-[10px] font-semibold tracking-[0.2em] text-[#3B82F6] uppercase">
              Ready to get started?
            </p>
            <h2 className="text-[24px] font-normal leading-[1.2] tracking-[-0.02em] text-[#111827] md:text-[28px]">
              Let's build a smarter system for{" "}
              <span className="text-[#3B82F6]">your business.</span>
            </h2>
          </div>

          {/* Right Action */}
          <div className="flex flex-col items-start gap-3 md:items-end">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#3B82F6] px-6 py-3 font-sans text-[12px] font-semibold uppercase tracking-[0.1em] text-white transition-transform hover:-translate-y-0.5"
            >
              Get in touch <ArrowRight size={14} />
            </Link>
            <p className="text-[13px] text-[#111827]/60">
              Have a question? We're here to help.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// Main Services Page Component
export default function ServicesPageComponent() {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <ServicesHeader />
      <main className="pt-[50px]">
        <HeroSection />
        <ServicesShowcase />
        <ProcessSection />
        <CTABanner />
      </main>
    </div>
  );
}