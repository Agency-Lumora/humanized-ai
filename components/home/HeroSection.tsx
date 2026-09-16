"use client";

import { useEffect, useRef, useState } from "react";
import type { WheelEvent as ReactWheelEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Project = {
  client: string;
  eyebrow: string;
  image: string;
  headline: string;
  subline: string;
  tone: string;
};

const projects: Project[] = [
  {
    client: "AUREL DIAMOND",
    eyebrow: "AUREL",
    image: "/aurel.jpeg",
    headline: "Timeless\nElegance.",
    subline: "Fine jewellery",
    tone: "#F7F3EC",
  },
  {
    client: "ZAMURA",
    eyebrow: "ZAMURA",
    image: "/narrativ.jpeg",
    headline: "Better Ideas.\nBigger Results.",
    subline: "Beauty & lifestyle",
    tone: "#DDECF2",
  },
  {
    client: "REET'S CLUB",
    eyebrow: "REET'S CLUB",
    image: "/nails.jpeg",
    headline: "The art of\neveryday elegance.",
    subline: "Contemporary fashion",
    tone: "#F4E8DB",
  },
];

const typewriterPhrases = [
  "Growth Machines.",
  "Systems That Scale.",
  "Digital Experiences.",
  "Brands That Move.",
];

/* -----------------------------------------------------------
   STACKED PORTFOLIO SHUFFLE

   The card footprint stays fixed in every position. Advancing the
   work only reorders three calm, overlapping poses: focus -> lower
   back -> upper back -> focus.
----------------------------------------------------------- */

function getWheelOffset(index: number, active: number, total: number) {
  const raw = (index - active + total) % total;
  return raw > total / 2 ? raw - total : raw;
}

function getCardTransform(offset: number) {
  if (offset === 0) {
    return { x: -18, y: 0, z: 80, rotate: 7, scale: 1, zIndex: 30 };
  }

  if (offset > 0) {
    return { x: 102, y: -108, z: 28, rotate: 10, scale: 0.93, zIndex: 10 };
  }

  return { x: 88, y: 122, z: 12, rotate: 10, scale: 0.9, zIndex: 20 };
}

function ProjectCard({
  project,
  offset,
  counterLabel,
}: {
  project: Project;
  offset: number;
  counterLabel: string;
}) {
  const isCenter = offset === 0;
  const { x, y, z, rotate, scale, zIndex } = getCardTransform(offset);

  return (
    // Static centering wrapper (Tailwind handles the responsive size +
    // the -50%/-50% centering) so the animated wheel transform below only
    // ever has to deal with its own x/z/rotateY/scale — no transform
    // strings to merge, no fighting over the `transform` property.
    <div
      className="absolute left-1/2 top-1/2 h-[205px] w-[315px] -translate-x-1/2 -translate-y-1/2 md:h-[250px] md:w-[410px]"
      style={{ zIndex, pointerEvents: isCenter ? "auto" : "none" }}
    >
      <motion.article
        aria-label={project.client}
        className="relative h-full w-full overflow-hidden rounded-[4px] border-[5px] border-white bg-white shadow-[0_24px_45px_rgba(42,33,29,0.16)] md:border-[7px]"
        style={{
          backgroundColor: project.tone,
          backgroundImage: `url(${project.image})`,
          backgroundPosition: "right bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "47% auto",
        }}
        initial={false}
        animate={{ x, y, z, rotate, scale }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Client label — sits above the image on the center card,
            overlaid directly on the image for side cards. */}
        <div className="absolute inset-x-0 top-0 flex h-4 items-center justify-between bg-white/95 px-2 font-mono text-[5px] uppercase tracking-[0.12em] text-[#2A211D]/55 md:h-5 md:px-3 md:text-[6px]">
          <span>{project.eyebrow}</span>
          <span>{counterLabel}</span>
        </div>

        <div className="absolute bottom-[16%] left-[8%] z-10 max-w-[58%]">
          <p className="whitespace-pre-line font-serif text-[15px] leading-[0.92] text-[#2A211D] md:text-[21px]">
            {project.headline}
          </p>
          <p className="mt-2 font-mono text-[5px] uppercase tracking-[0.12em] text-[#2A211D]/55 md:text-[6px]">
            {project.subline}
          </p>
        </div>

      </motion.article>
    </div>
  );
}

function ProjectShowcase() {
  const [active, setActive] = useState(0);
  const wheelLocked = useRef(false);
  const activeRef = useRef(active);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  const next = () => {
    setActive((current) => (current + 1) % projects.length);
  };

  const previous = () => {
    setActive((current) => (current - 1 + projects.length) % projects.length);
  };

  const handleDragEnd = (
    _event: unknown,
    info: { offset: { x: number } }
  ) => {
    if (info.offset.x < -60) next();
    else if (info.offset.x > 60) previous();
  };

  // Scroll one card per wheel step while the showcase is active. Once the
  // final card is reached, normal page scrolling resumes so the user can move
  // on to the next section.
  const handleWheel = (event: ReactWheelEvent<HTMLDivElement>) => {
    if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;
    if (Math.abs(event.deltaY) < 8) return;

    const atStart = activeRef.current <= 0;
    const atEnd = activeRef.current >= projects.length - 1;

    if (event.deltaY > 0 && !atEnd) {
      event.preventDefault();
      if (wheelLocked.current) return;
      wheelLocked.current = true;
      next();
      window.setTimeout(() => {
        wheelLocked.current = false;
      }, 650);
      return;
    }

    if (event.deltaY < 0 && !atStart) {
      event.preventDefault();
      if (wheelLocked.current) return;
      wheelLocked.current = true;
      previous();
      window.setTimeout(() => {
        wheelLocked.current = false;
      }, 650);
    }
  };

  return (
    <div
      className="relative h-[480px] w-full touch-pan-y md:h-[540px]"
      data-lenis-prevent
      onWheel={handleWheel}
      aria-label="Selected work carousel. Scroll to view each project."
    >
      <div className="absolute right-[10%] top-[8%] z-0 h-64 w-64 rounded-full bg-[#DCEBF0] md:h-80 md:w-80" />
      <div className="absolute right-[2%] top-[24%] z-0 h-[280px] w-[520px] rotate-[-16deg] rounded-[50%] border border-[#8EBED5]/60" />
      <span className="absolute right-[22%] top-[16%] z-20 text-[24px] font-light text-[#6EA9C7]">✦</span>

      <motion.div
        className="absolute inset-0 z-10 flex cursor-grab items-center justify-center active:cursor-grabbing"
        style={{ perspective: "1600px" }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.15}
        onDragEnd={handleDragEnd}
      >
        <div
          className="relative h-full w-[780px]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.client}
              project={project}
              offset={getWheelOffset(index, active, projects.length)}
              counterLabel={`${String(active + 1).padStart(2, "0")} / ${String(
                projects.length
              ).padStart(2, "0")}`}
            />
          ))}
        </div>
      </motion.div>

      <div className="absolute right-[3%] top-[52%] z-40 w-[118px] rounded-[4px] border border-white/80 bg-white/80 p-3 shadow-[0_14px_30px_rgba(42,33,29,0.12)] backdrop-blur-sm md:right-[2%] md:w-[145px] md:p-4">
        <p className="font-mono text-[7px] uppercase tracking-[0.11em] text-[#2A211D]/50">Real Results</p>
        <p className="mt-1 font-serif text-[24px] leading-none text-[#2A211D] md:text-[30px]">200%</p>
        <p className="mt-1 text-[8px] leading-tight text-[#2A211D]/55">average growth for our clients</p>
      </div>

      <p className="absolute bottom-1 left-1/2 z-40 -translate-x-1/2 whitespace-nowrap font-mono text-[7px] uppercase tracking-[0.16em] text-[#2A211D]/45 md:text-[8px]">
        Scroll to explore · {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
      </p>
    </div>
  );
}

function HeroTypewriter() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [characterCount, setCharacterCount] = useState(typewriterPhrases[0].length);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = typewriterPhrases[phraseIndex];
    const isComplete = characterCount === phrase.length;
    const isEmpty = characterCount === 0;
    const delay = isComplete && !isDeleting ? 1400 : isEmpty && isDeleting ? 350 : isDeleting ? 55 : 95;

    const timer = window.setTimeout(() => {
      if (isComplete && !isDeleting) {
        setIsDeleting(true);
      } else if (isEmpty && isDeleting) {
        setPhraseIndex((current) => (current + 1) % typewriterPhrases.length);
        setIsDeleting(false);
      } else {
        setCharacterCount((current) => current + (isDeleting ? -1 : 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [characterCount, isDeleting, phraseIndex]);

  return (
    <span className="text-[#6EA9C7]">
      {typewriterPhrases[phraseIndex].slice(0, characterCount)}
      <span className="ml-0.5 inline-block h-[0.9em] w-px translate-y-[0.08em] bg-[#6EA9C7] align-baseline opacity-70" />
    </span>
  );
}

/* =========================================================
   HEADER

   Replaces the site's floating nav for this redesign — it
   is the only navigation rendered on the page.
========================================================= */

const navLinks: [string, string][] = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Work", "/portfolio"],
  ["Process", "/process"],
  ["Contact", "/contact"],
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="fixed left-0 right-0 top-0 z-50 mx-auto flex max-w-[1440px] items-center justify-between bg-[#F4EFE7]/95 px-6 py-6 backdrop-blur-sm md:px-12 md:py-7">
      <Link
        href={isHome ? "#top" : "/"}
        className="font-serif text-[25px] tracking-[0.01em] text-[#2A211D] md:text-[27px]"
      >
        LUMORA
      </Link>

      <nav
        className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex"
        aria-label="Primary navigation"
      >
        {navLinks.map(([label, href], index) => (
          <Link
            key={label}
            href={href}
            aria-current={pathname === href ? "page" : undefined}
            className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#2A211D]/80 transition-opacity hover:opacity-60"
          >
            {label}
          </Link>
        ))}
      </nav>

      <Link
        href="/contact"
        className="hidden items-center gap-3 rounded-full bg-[#DCE7EA] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.1em] text-[#2A211D] transition-transform hover:-translate-y-0.5 md:flex"
      >
        Let&apos;s create <ArrowRight size={13} strokeWidth={1.4} />
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
          className="fixed left-0 right-0 top-[74px] flex flex-col border-b border-[#2A211D]/10 bg-[#F4EFE7]/95 p-5 shadow-lg backdrop-blur-md md:hidden"
          aria-label="Mobile navigation"
        >
          {navLinks.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#2A211D]/10 py-3 font-mono text-[12px] uppercase tracking-[0.13em] last:border-0"
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

/* =========================================================
   HERO SECTION
========================================================= */

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative mx-auto max-w-[1440px] overflow-x-clip bg-[#F4EFE7]"
      aria-labelledby="hero-title"
    >
      <Header />

      <div className="relative min-h-screen px-6 md:px-12">
      <div className="grid min-h-screen items-center gap-8 pb-8 pt-[118px] md:grid-cols-[0.9fr_1.1fr] md:gap-2 md:pb-[94px] md:pt-[126px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-30 max-w-[590px] self-center pb-2 text-left md:pb-0"
        >
          <p className="mb-6 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#6EA9C7]">
            <span className="h-px w-8 bg-[#6EA9C7]/50" />
            Digital agency&nbsp; / &nbsp;Surat, India
          </p>

          <h1
            id="hero-title"
            className="max-w-[600px] text-[36px] font-normal leading-[0.98] tracking-[-0.035em] text-[#2A211D] sm:text-[50px] md:text-[53px] lg:text-[62px]"
          >
            <span className="block">
              We don&apos;t just design Websites.
            </span>
            <span className="block">
              We build <HeroTypewriter />
            </span>
          </h1>

          <p className="mt-7 max-w-[480px] text-[11px] leading-[1.65] text-[#2A211D]/65 md:text-[12px]">
            A full-service digital agency offering web design, branding, AI automation,
            CRM setup and growth strategy for founders who&apos;ve outgrown basic agencies.
            <br />
            Built in Surat. Trusted Across India.
          </p>

          <a
            href="#portfolio"
            className="group mt-8 inline-flex items-center gap-3 border-b border-[#2A211D]/30 pb-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-[#2A211D]"
          >
            Explore our work
            <ArrowRight
              size={13}
              strokeWidth={1.25}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        <div className="relative h-[480px] w-full md:h-[540px]">
          <div className="flex h-full items-center justify-center">
            <ProjectShowcase />
          </div>
        </div>

       
      </div>
      </div>
    </section>
  );
}

export default HeroSection;
