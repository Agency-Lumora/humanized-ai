"use client";

import { motion } from "framer-motion";
import { Container, GradientText } from "@/components/ui";
//import { navItems, trustedBy } from "@/lib/content";
import { FiArrowUpRight } from "react-icons/fi";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: "Services", href: "#services" },
      { label: "Pricing", href: "#consultation" },
      { label: "Process", href: "#process" },
    ],
    Company: [
      { label: "About", href: "#founder" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ],
    Legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
  };

  return (
    <footer
      id="footer"
      className="relative z-10 border-t border-slate-200/70 bg-white/40 backdrop-blur-xl"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5"
        >
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="sm:col-span-2 lg:col-span-2"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-black bg-gradient-to-r from-[#7C5CFF] via-[#9A7CFF] to-[#C7B8FF] bg-clip-text text-transparent">
                LUMORA
              </h3>
              <p className="text-sm leading-6 text-slate-600">
                Premium digital agency crafting humanized AI experiences for
                ambitious businesses.
              </p>
              <div className="pt-4">
                <a
                  href="mailto:hello@agencylumora.com"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition hover:text-[#6D5EF9]"
                >
                  hello@agencylumora.com
                  <FiArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(
            ([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + categoryIndex * 0.05,
                }}
                className="lg:col-span-1"
              >
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-950">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-600 transition hover:text-slate-950"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ),
          )}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="my-8 h-px bg-linear-to-r from-slate-200/0 via-slate-200/70 to-slate-200/0 origin-left"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col gap-6 sm:gap-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-600">
              © {currentYear} Lumora. Crafted for the brave builders of the next
              era.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span>Trusted by:</span>
              <div className="text-sm text-slate-500">
                Based in India • Working Worldwide
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-xs text-slate-600">
            <p>
              Designed & Developed by{" "}
              <a
                href="#founder"
                className="font-semibold text-slate-950 transition hover:text-[#6D5EF9]"
              >
                Team @ Lumora Agency
              </a>
            </p>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}

export default Footer;
