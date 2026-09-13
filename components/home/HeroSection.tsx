"use client";

import { useRef, useState } from "react";
import type { WheelEvent as ReactWheelEvent } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Menu, X } from "lucide-react";

/* =========================================================
   PROJECT SHOWCASE

   NOTE: the artwork images below don't exist in /public yet
   (lumora-soie.png, lumora-kalm.png, lumora-aurelie.png,
   lumora-cove.png). Each card layers a soft brand-gradient
   placeholder under the image url, so once a real file is
   added at that path it will simply render on top — no
   further code changes required.
========================================================= */

type Project = {
  client: string;
  headline: string;
  category: string;
  artwork: string;
  gradient: string;
};

const projects: Project[] = [
  {
    client: "SOIE COLLECTIVE",
    headline: "Timeless Pieces. Modern Essence.",
    category: "Digital experience & brand strategy",
    artwork: "/lumora-soie.png",
    gradient: "linear-gradient(150deg, #7C8F98, #445059)",
  },
  {
    client: "KALM SKINCARE",
    headline: "Clean. Conscious. Effective.",
    category: "Branding & e-commerce",
    artwork: "/lumora-kalm.png",
    gradient: "linear-gradient(150deg, #C7B9A6, #8C7E6C)",
  },
  {
    client: "AURÉLIE",
    headline: "Where Stories Take Shape.",
    category: "Branding & digital presence",
    artwork: "/lumora-aurelie.png",
    gradient: "linear-gradient(150deg, #DCD3C4, #AFA391)",
  },
  {
    client: "COVE STUDIO",
    headline: "Crafting Digital Worlds.",
    category: "Web design & development",
    artwork: "/lumora-cove.png",
    gradient: "linear-gradient(150deg, #6E8794, #2E3D45)",
  },
];

/* -----------------------------------------------------------
   CIRCULAR 3D LAYOUT

   Every card stays mounted (keyed by client name, not by
   `active`) and is nudged around an implied circular/orbit
   track based on its offset from the active card. Swiping or
   clicking an arrow shifts every card's offset by one step,
   and framer-motion springs each one smoothly to its new spot
   on the "wheel" instead of snapping/cutting between states.
----------------------------------------------------------- */

const ANGLE_STEP = 30; // degrees of rotation per step around the wheel
const RADIUS_X = 215; // how far a step pushes a card left/right
const BASE_Z = 60; // depth of the centered card
const DEPTH_FALLOFF = 55; // how quickly depth drops off per step away

function getWheelOffset(index: number, active: number, total: number) {
  const raw = (index - active + total) % total;
  return raw > total / 2 ? raw - total : raw;
}

function getCardTransform(offset: number) {
  const angle = offset * ANGLE_STEP;
  const absOffset = Math.abs(offset);

  return {
    x: offset * RADIUS_X,
    z: BASE_Z - absOffset * DEPTH_FALLOFF,
    rotateY: -angle,
    scale: 1 - absOffset * 0.09,
    zIndex: 40 - absOffset * 10,
    opacity: absOffset > 2 ? 0 : 1,
  };
}

function ArrowButton({
  direction,
  onClick,
  label,
}: {
  direction: "left" | "right";
  onClick: () => void;
  label: string;
}) {
  const Icon = direction === "left" ? ArrowLeft : ArrowRight;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#806C5D]/20 bg-[#F4EFE7]/80 text-[#2A211D] backdrop-blur-sm transition-colors hover:bg-[#AFC4CE]"
    >
      <Icon
        size={15}
        strokeWidth={1.25}
        className="transition-transform group-hover:scale-110"
      />
    </button>
  );
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
  const { x, z, rotateY, scale, zIndex, opacity } = getCardTransform(offset);

  return (
    // Static centering wrapper (Tailwind handles the responsive size +
    // the -50%/-50% centering) so the animated wheel transform below only
    // ever has to deal with its own x/z/rotateY/scale — no transform
    // strings to merge, no fighting over the `transform` property.
    <div
      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
        isCenter
          ? "h-[420px] w-[295px] md:h-[470px] md:w-[335px]"
          : "h-[350px] w-[195px] md:h-[395px] md:w-[225px]"
      }`}
      style={{ zIndex, pointerEvents: opacity === 0 ? "none" : "auto" }}
    >
      <motion.article
        aria-label={project.client}
        className="relative h-full w-full overflow-hidden rounded-[10px] border border-white/70 shadow-[0_35px_60px_rgba(42,33,29,0.28)]"
        style={{
          backgroundImage: `${project.gradient}, url(${project.artwork})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        initial={false}
        animate={{ x, z, rotateY, scale, opacity }}
        transition={{ type: "spring", stiffness: 160, damping: 22, mass: 0.9 }}
      >
        {/* Client label — sits above the image on the center card,
            overlaid directly on the image for side cards. */}
        {isCenter ? (
          <div className="flex items-center justify-between px-5 pt-4 font-mono text-[9px] uppercase tracking-[0.14em] text-white/85">
            <span>{counterLabel}</span>
            <span className="font-semibold">{project.client}</span>
          </div>
        ) : (
          <span className="absolute left-4 top-4 z-10 font-mono text-[8px] uppercase tracking-[0.12em] text-white/90">
            {project.client}
          </span>
        )}

        {/* Legibility gradient so the overlaid copy reads over the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/15 to-transparent" />

        {/* Headline / category / CTA */}
        <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
          <p className="font-serif text-[15px] italic leading-snug text-white md:text-[19px]">
            {project.headline}
          </p>
          <p className="mt-2 font-mono text-[7px] uppercase tracking-[0.14em] text-white/70 md:text-[8px]">
            {project.category}
          </p>

          <div className="mt-3 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-white md:text-[9px]">
              View project
              <ArrowRight size={11} strokeWidth={1.5} />
            </span>
          </div>
        </div>

        {isCenter && (
          <span className="absolute -bottom-4 -right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#AFC4CE] text-[#2A211D] shadow-[0_10px_20px_rgba(42,33,29,0.25)]">
            <ArrowRight size={15} strokeWidth={1.5} />
          </span>
        )}
      </motion.article>
    </div>
  );
}

function ProjectShowcase() {
  const [active, setActive] = useState(0);
  const lastWheelStep = useRef(0);

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

  // Scrolling (mouse wheel / trackpad) over the showcase advances the
  // wheel one step at a time — throttled so a single physical scroll
  // gesture (which fires many small wheel events) only ever spins it
  // once per animation cycle instead of skipping several cards.
  const handleWheel = (event: ReactWheelEvent<HTMLDivElement>) => {
    if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;
    if (Math.abs(event.deltaY) < 8) return;

    event.preventDefault();

    const now = Date.now();
    if (now - lastWheelStep.current < 650) return;
    lastWheelStep.current = now;

    if (event.deltaY > 0) next();
    else previous();
  };

  return (
    <div className="relative h-[520px] w-full md:h-[570px]">
      <div className="absolute right-[8%] top-[6%] z-0 h-64 w-64 rounded-full bg-[#AFC4CE]/45 md:h-80 md:w-80" />

      <motion.div
        className="absolute inset-0 z-10 flex cursor-grab items-center justify-center active:cursor-grabbing"
        style={{ perspective: "1600px" }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.15}
        onDragEnd={handleDragEnd}
        onWheel={handleWheel}
      >
        <div
          className="relative h-full w-[900px]"
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

      <div className="absolute left-0 top-1/2 z-40 -translate-y-1/2">
        <ArrowButton direction="left" onClick={previous} label="Previous project" />
      </div>

      <div className="absolute right-0 top-1/2 z-40 -translate-y-1/2">
        <ArrowButton direction="right" onClick={next} label="Next project" />
      </div>
    </div>
  );
}

/* =========================================================
   HEADER

   Replaces the site's floating nav for this redesign — it
   is the only navigation rendered on the page.
========================================================= */

const navLinks: [string, string][] = [
  ["Home", "#top"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Work", "#portfolio"],
  ["Process", "#process"],
  ["Contact", "#consultation"],
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 md:px-12 md:py-7">
      <a
        href="#top"
        className="font-serif text-[25px] tracking-[0.01em] text-[#2A211D] md:text-[27px]"
      >
        LUMORA
      </a>

      <nav
        className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex"
        aria-label="Primary navigation"
      >
        {navLinks.map(([label, href], index) => (
          <a
            key={label}
            href={href}
            aria-current={index === 0 ? "page" : undefined}
            className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#2A211D]/80 transition-opacity hover:opacity-60"
          >
            {label}
          </a>
        ))}
      </nav>

      <a
        href="#consultation"
        className="hidden items-center gap-3 rounded-full bg-[#DCE7EA] px-5 py-3 font-mono text-[9px] uppercase tracking-[0.1em] text-[#2A211D] transition-transform hover:-translate-y-0.5 md:flex"
      >
        Let&apos;s create <ArrowRight size={13} strokeWidth={1.4} />
      </a>

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
          className="absolute left-5 right-5 top-[74px] flex flex-col border border-[#2A211D]/10 bg-[#F4EFE7]/95 p-5 shadow-lg backdrop-blur-md md:hidden"
          aria-label="Mobile navigation"
        >
          {navLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#2A211D]/10 py-3 font-mono text-[10px] uppercase tracking-[0.13em] last:border-0"
            >
              {label}
            </a>
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
      className="relative mx-auto max-w-[1440px] overflow-hidden bg-[#F4EFE7] px-6 md:px-12"
      aria-labelledby="hero-title"
    >
      <Header />

      <div className="grid items-center gap-3 pb-10 pt-10 md:grid-cols-[0.75fr_1.55fr] md:gap-0 md:pb-14 md:pt-14">
        <div className="relative z-30 max-w-[380px] self-center md:pb-4">
          <p className="mb-6 font-mono text-[9px] uppercase tracking-[0.16em] text-[#806C5D]">
            Digital agency for modern brands
          </p>

          <h1
            id="hero-title"
            className="font-serif text-[54px] leading-[0.88] tracking-[-0.025em] text-[#2A211D] sm:text-[65px] md:text-[62px] lg:text-[69px]"
          >
            We craft digital <em className="text-[#AFC4CE]">experiences</em>{" "}
            that scale brands into the future.
          </h1>

          <div className="my-5 h-px w-9 bg-[#2A211D]/50" />

          <p className="max-w-[295px] text-[11px] leading-[1.65] text-[#2A211D]/65">
            Strategy-led. Design-driven. Tech-enabled.
            <br />
            We build digital experiences that connect,
            <br />
            convert and create lasting impact.
          </p>

          <a
            href="#portfolio"
            className="group mt-7 inline-flex items-center gap-3 border-b border-[#2A211D]/30 pb-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-[#2A211D]"
          >
            Explore our work
            <ArrowRight
              size={13}
              strokeWidth={1.25}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        <div className="relative">
          <ProjectShowcase />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
