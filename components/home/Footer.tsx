"use client";

import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const columns = {
  "Quick links": [["Home", "#top"], ["About", "#about"], ["Services", "#services"], ["Work", "#portfolio"], ["Journal", "#"], ["Contact", "#consultation"]],
  Services: [["Website Design & Development", "#services"], ["UI/UX Design", "#services"], ["Website Redesign", "#services"], ["Integrations & Setup", "#services"], ["Automations", "#services"], ["Social Media Marketing", "#services"], ["Paid Ads", "#services"]],
  "Partner with us": [["Marketing Agencies", "#services"], ["Service Agencies", "#services"], ["Collaborate", "#consultation"]],
};

export function Footer() {
  return (
    <footer id="footer" className="border-t border-[#806C5D]/25 bg-[#F4EFE7] text-[#2A211D]">
      <Container className="py-[clamp(3rem,6vw,5rem)]">
        <div className="grid gap-[clamp(2.5rem,5vw,4rem)] min-[900px]:grid-cols-[0.9fr_2.1fr]">
          <div><p className="font-serif text-3xl tracking-[0.18em]">LUMORA</p><p className="mt-5 max-w-xs text-sm leading-6 text-[#2A211D]/65">Digital solutions for forward-thinking businesses.</p><a href="mailto:hello@agencylumora.com" className="mt-8 inline-flex items-center gap-2 text-xs font-bold">hello@agencylumora.com <ArrowUpRight className="h-4 w-4" /></a></div>
          <div className="grid gap-8 min-[480px]:grid-cols-2 sm:grid-cols-3">
            {Object.entries(columns).map(([heading, links]) => <div key={heading}><h3 className="text-[10px] font-bold uppercase tracking-[0.2em]">{heading}</h3><ul className="mt-5 space-y-3">{links.map(([label, href]) => <li key={label}><a href={href} className="text-xs leading-5 text-[#2A211D]/65 transition hover:text-[#2A211D]">{label}</a></li>)}</ul></div>)}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-[#806C5D]/25 pt-6 text-[10px] uppercase tracking-[0.12em] text-[#806C5D] sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Lumora. All rights reserved.</p><div className="flex gap-5"><a href="#">Privacy policy</a><a href="#">Terms & conditions</a></div></div>
      </Container>
    </footer>
  );
}

export default Footer;
