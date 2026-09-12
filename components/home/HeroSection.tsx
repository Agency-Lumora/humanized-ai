"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
} from "react";

/* =========================================================
   CLIENT LOGOS

   These are currently rendered as text placeholders.
   Replace the <text> elements with your actual SVG/logo
   assets later. The orbital animation does not need to change.
========================================================= */

const clientLogos = [
  "SHOPIFY",
  "SLACK",
  "NOTION",
  "FIGMA",
  "GOOGLE",
  "ADOBE",
  "STRIPE",
  "AMAZON",
  "HUBSPOT",
  "META",
  "NARRATIV",
  "AUREL DIAMOND",
  "RK INTERIOR",
];

/* =========================================================
   HERO ORBITAL PATH

   Designed on a 1600 × 800 canvas.

   Shape characteristics:

   - enters from left edge
   - curves inward on the left
   - stays away from the headline
   - sweeps across the lower section
   - curves inward on the right
   - exits through the right edge

   This is intentionally an OPEN ribbon.
   It is NOT an ellipse.
========================================================= */

const HERO_PATH = `
  M -90 195

  C 70 210
    260 255
    365 330

  C 425 372
    455 405
    425 440

  C 385 485
    285 505
    205 530

  C 130 552
    75 570
    68 605

  C 60 645
    160 670
    370 685

  C 610 702
    880 707
    1130 690

  C 1360 675
    1500 650
    1540 610

  C 1575 575
    1520 555
    1445 535

  C 1360 512
    1260 490
    1220 448

  C 1188 412
    1220 378
    1280 335

  C 1390 258
    1490 212
    1690 195
`;

/* =========================================================
   BACKGROUND
========================================================= */

function SubtleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* ---------------------------------------------------
          Powdered blue base
      --------------------------------------------------- */}

      <div className="absolute inset-0 bg-[#D4E3E8]" />

      {/* ---------------------------------------------------
          Main atmospheric radial gradient
      --------------------------------------------------- */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(
            ellipse_70%_65%_at_50%_42%,
            rgba(239,248,250,0.82)_0%,
            rgba(222,237,241,0.68)_34%,
            rgba(204,224,231,0.48)_67%,
            rgba(184,211,220,0.62)_100%
          )]
        "
      />

      {/* ---------------------------------------------------
          Soft central glow
      --------------------------------------------------- */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(
            ellipse_35%_45%_at_50%_45%,
            rgba(247,250,249,0.38),
            transparent_75%
          )]
        "
      />

      {/* ---------------------------------------------------
          Upper blue atmosphere
      --------------------------------------------------- */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(
            ellipse_80%_42%_at_50%_0%,
            rgba(190,216,225,0.42),
            transparent_72%
          )]
        "
      />

      {/* ---------------------------------------------------
          Left atmospheric depth
      --------------------------------------------------- */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(
            ellipse_42%_65%_at_0%_48%,
            rgba(178,208,218,0.32),
            transparent_72%
          )]
        "
      />

      {/* ---------------------------------------------------
          Right atmospheric depth
      --------------------------------------------------- */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(
            ellipse_42%_65%_at_100%_48%,
            rgba(178,208,218,0.30),
            transparent_72%
          )]
        "
      />

      {/* ---------------------------------------------------
          Very soft bottom fade
      --------------------------------------------------- */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-transparent
          to-[#EEF2F0]/45
        "
      />

      {/* ---------------------------------------------------
          Extremely subtle grain
      --------------------------------------------------- */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
          [background-image:radial-gradient(rgba(42,33,29,0.8)_0.5px,transparent_0.5px)]
          [background-size:6px_6px]
        "
      />

      {/* ---------------------------------------------------
          Atmospheric particles
      --------------------------------------------------- */}

      {[
        [13, 25],
        [25, 15],
        [33, 30],
        [51, 16],
        [67, 27],
        [76, 18],
        [89, 33],
        [59, 48],
        [73, 39],
        [43, 23],
        [19, 54],
      ].map(([left, top], index) => (
        <motion.span
          key={index}
          className="
            absolute
            h-[3px]
            w-[3px]
            rounded-full
            bg-white
          "
          style={{
            left: `${left}%`,
            top: `${top}%`,
          }}
          animate={{
            opacity: [0.07, 0.3, 0.07],
            scale: [0.8, 1.15, 0.8],
          }}
          transition={{
            duration: 4 + index * 0.45,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3,
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================
   MAGNETIC CTA
========================================================= */

function MagneticCTA({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    damping: 20,
    stiffness: 300,
  });

  const springY = useSpring(y, {
    damping: 20,
    stiffness: 300,
  });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (!ref.current) return;

    const rect =
      ref.current.getBoundingClientRect();

    const centerX =
      rect.left + rect.width / 2;

    const centerY =
      rect.top + rect.height / 2;

    x.set(
      (event.clientX - centerX) * 0.25
    );

    y.set(
      (event.clientY - centerY) * 0.25
    );
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="
        relative
        inline-flex
        overflow-hidden
      "
    >
      {/* Main button */}

      <motion.div
        className="
          relative
          z-10
          flex
          items-center
          gap-4
          bg-[#2A211D]
          px-8
          py-5
          text-xs
          font-bold
          uppercase
          tracking-[0.15em]
          text-[#F4EFE7]
        "
        animate={{
          backgroundColor: hovered
            ? "#806C5D"
            : "#2A211D",
        }}
        transition={{
          duration: 0.3,
        }}
      >
        {children}

        <motion.span
          animate={{
            x: hovered ? 5 : 0,
          }}
          transition={{
            duration: 0.25,
          }}
        >
          →
        </motion.span>
      </motion.div>

      {/* Hover sweep */}

      <motion.div
        className="
          absolute
          inset-0
          bg-[#AFC4CE]
        "
        initial={{
          x: "-100%",
        }}
        animate={{
          x: hovered
            ? "0%"
            : "-100%",
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
      />
    </motion.a>
  );
}

/* =========================================================
   LOGO TRACK
========================================================= */

function LogoTrack({
  reducedMotion,
}: {
  reducedMotion: boolean;
}) {
  const pathRef =
    useRef<SVGPathElement>(null);

  const logoRefs =
    useRef<(SVGGElement | null)[]>([]);

  const [pathLength, setPathLength] =
    useState(0);

  /* -------------------------------------------------------
     Measure the actual SVG path
  ------------------------------------------------------- */

  useEffect(() => {
    if (!pathRef.current) return;

    setPathLength(
      pathRef.current.getTotalLength()
    );
  }, []);

  /* -------------------------------------------------------
     Animate logos along the trajectory
  ------------------------------------------------------- */

  useEffect(() => {
    if (
      reducedMotion ||
      !pathRef.current ||
      !pathLength
    ) {
      return;
    }

    const path = pathRef.current;

    /*
      One full cycle every 42 seconds.
      Slow enough to feel ambient rather than decorative.
    */

    const duration = 42000;

    const start =
      performance.now();

    let animationFrame = 0;

    const animate = (
      now: number
    ) => {
      const elapsed =
        now - start;

      const cycle =
        (elapsed % duration) /
        duration;

      logoRefs.current.forEach(
        (logo, index) => {
          if (!logo) return;

          /*
            Spread logos evenly.
          */

          const offset =
            index /
            clientLogos.length;

          /*
            Right → left.

            The path is defined left → right,
            therefore reverse the progress.
          */

          const progress =
            1 -
            ((cycle + offset) % 1);

          const distance =
            progress *
            pathLength;

          const point =
            path.getPointAtLength(
              distance
            );

          /*
            Depth effect.

            Lower/front section:
              slightly larger
              slightly more visible

            Upper/outside section:
              slightly lighter
          */

          const depth =
            Math.sin(
              progress * Math.PI
            );

          const scale =
            0.86 +
            depth * 0.12;

          const opacity =
            0.34 +
            depth * 0.17;

          /*
            The <text> already uses
            textAnchor="middle", so we
            do NOT manually translate
            the text by -50px.
          */

          logo.setAttribute(
            "transform",
            `
              translate(
                ${point.x}
                ${point.y}
              )
              scale(${scale})
            `
          );

          logo.setAttribute(
            "opacity",
            String(opacity)
          );
        }
      );

      animationFrame =
        requestAnimationFrame(
          animate
        );
    };

    animationFrame =
      requestAnimationFrame(
        animate
      );

    return () =>
      cancelAnimationFrame(
        animationFrame
      );
  }, [
    pathLength,
    reducedMotion,
  ]);

  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
      "
      style={{
        zIndex: 1,
      }}
    >
      <svg
        className="
          absolute
          inset-0
          h-full
          w-full
        "
        viewBox="0 0 1600 800"
        preserveAspectRatio="none"
        aria-hidden="true"
      >

        <defs>

          {/* ------------------------------------------------
              Soft trajectory glow
          ------------------------------------------------ */}

          <filter
            id="trackGlow"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feGaussianBlur
              stdDeviation="1.2"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* ------------------------------------------------
              White trajectory gradient
          ------------------------------------------------ */}

          <linearGradient
            id="trackGradient"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop
              offset="0%"
              stopColor="#EFF8FA"
              stopOpacity="0.60"
            />

            <stop
              offset="25%"
              stopColor="#FFFFFF"
              stopOpacity="0.90"
            />

            <stop
              offset="50%"
              stopColor="#FFFFFF"
              stopOpacity="0.95"
            />

            <stop
              offset="75%"
              stopColor="#FFFFFF"
              stopOpacity="0.90"
            />

            <stop
              offset="100%"
              stopColor="#EFF8FA"
              stopOpacity="0.60"
            />
          </linearGradient>

        </defs>

        {/* =================================================
            MAIN OPEN RIBBON
        ================================================= */}

        <path
          ref={pathRef}
          d={HERO_PATH}
          fill="none"
          stroke="url(#trackGradient)"
          strokeWidth="1.35"
          strokeLinecap="round"
          filter="url(#trackGlow)"
          opacity="0.82"
        />

        {/* =================================================
            LIGHT NODES
        ================================================= */}

        <circle
          cx="180"
          cy="195"
          r="2"
          fill="#FFFFFF"
          opacity="0.72"
        />

        <circle
          cx="310"
          cy="245"
          r="2"
          fill="#FFFFFF"
          opacity="0.70"
        />

        <circle
          cx="160"
          cy="635"
          r="2"
          fill="#FFFFFF"
          opacity="0.72"
        />

        <circle
          cx="500"
          cy="700"
          r="2"
          fill="#FFFFFF"
          opacity="0.78"
        />

        <circle
          cx="800"
          cy="695"
          r="2"
          fill="#FFFFFF"
          opacity="0.80"
        />

        <circle
          cx="1100"
          cy="700"
          r="2"
          fill="#FFFFFF"
          opacity="0.76"
        />

        <circle
          cx="1440"
          cy="635"
          r="2"
          fill="#FFFFFF"
          opacity="0.72"
        />

        <circle
          cx="1290"
          cy="245"
          r="2"
          fill="#FFFFFF"
          opacity="0.70"
        />

        {/* =================================================
            MOVING LOGOS
        ================================================= */}

        {!reducedMotion &&
          clientLogos.map(
            (logo, index) => (
              <g
                key={`${logo}-${index}`}
                ref={(element) => {
                  logoRefs.current[
                    index
                  ] = element;
                }}
                opacity="0"
              >
                <text
                  x="0"
                  y="0"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#59686D"
                  fontSize={
                    index % 3 === 0
                      ? "16"
                      : index % 2 === 0
                      ? "14"
                      : "13"
                  }
                  fontFamily="Arial, Helvetica, sans-serif"
                  fontWeight="500"
                  letterSpacing="0.3"
                >
                  {logo}
                </text>
              </g>
            )
          )}

        {/* =================================================
            REDUCED MOTION
        ================================================= */}

        {reducedMotion &&
          clientLogos
            .slice(0, 8)
            .map(
              (logo, index) => (
                <text
                  key={logo}
                  x={
                    100 +
                    index * 190
                  }
                  y={
                    index % 2 === 0
                      ? 190
                      : 650
                  }
                  fill="#59686D"
                  opacity="0.32"
                  fontSize="15"
                  fontFamily="Arial, Helvetica, sans-serif"
                  textAnchor="middle"
                >
                  {logo}
                </text>
              )
            )}

      </svg>
    </div>
  );
}

/* =========================================================
   HERO SECTION
========================================================= */

export function HeroSection() {
  const [
    prefersReducedMotion,
    setPrefersReducedMotion,
  ] = useState(false);

  /* -------------------------------------------------------
     Reduced-motion preference
  ------------------------------------------------------- */

  useEffect(() => {
    const mediaQuery =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      );

    setPrefersReducedMotion(
      mediaQuery.matches
    );

    const handleChange = (
      event: MediaQueryListEvent
    ) => {
      setPrefersReducedMotion(
        event.matches
      );
    };

    mediaQuery.addEventListener(
      "change",
      handleChange
    );

    return () =>
      mediaQuery.removeEventListener(
        "change",
        handleChange
      );
  }, []);

  return (
    <section
      className="
        relative
        flex
        min-h-[100svh]
        items-center
        justify-center
        overflow-hidden
        bg-[#D4E3E8]
      "
    >

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <SubtleBackground />

      {/* =================================================
          ORBITAL LOGO TRACK
      ================================================= */}

      <LogoTrack
        reducedMotion={
          prefersReducedMotion
        }
      />

      {/* =================================================
          CENTER HERO CONTENT
      ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[1100px]
          -translate-y-[5.5vh]
          flex-col
          items-center
          px-6
          text-center
        "
      >

        {/* -------------------------------------------------
            EYEBROW
        ------------------------------------------------- */}

        <motion.p
          initial={{
            opacity: 0,
            y: -12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mb-9
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.35em]
            text-[#806C5D]
          "
        >
          Lumora Digital Studio
        </motion.p>

        {/* -------------------------------------------------
            MAIN HEADLINE
        ------------------------------------------------- */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [
              0.25,
              0.1,
              0.25,
              1,
            ],
          }}
          className="
            relative
            font-serif
            text-[clamp(3.5rem,5.4vw,5.35rem)]
            leading-[0.9]
            tracking-[-0.04em]
            text-[#2A211D]
          "
        >

          <span className="block">
            WE MAKE
          </span>

          <span className="block">
            DIGITAL{" "}
            <span className="text-[#806C5D]">
              FEEL
            </span>
          </span>

          <span className="block">
            DIFFERENT.
          </span>

        </motion.h1>

        {/* -------------------------------------------------
            SUPPORTING COPY
        ------------------------------------------------- */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.45,
          }}
          className="
            mx-auto
            mt-8
            max-w-[650px]
            text-sm
            leading-7
            text-[#2A211D]/60
            sm:text-[15px]
          "
        >
          We build digital experiences
          through design, technology,
          and strategy.
          <br />
          Every project is crafted to be
          memorable.
        </motion.p>

        {/* -------------------------------------------------
            CTA
        ------------------------------------------------- */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.7,
          }}
          className="mt-9"
        >
          <MagneticCTA
            href="#consultation"
          >
            Let's make something
          </MagneticCTA>
        </motion.div>

      </div>

      {/* =================================================
          SCROLL INDICATOR
      ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 1.2,
        }}
        className="
          absolute
          bottom-7
          left-1/2
          z-20
          -translate-x-1/2
        "
      >
        <motion.div
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            flex
            flex-col
            items-center
            gap-2
          "
        >
          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.2em]
              text-[#806C5D]
            "
          >
            Scroll
          </span>

          <span
            className="
              h-6
              w-px
              bg-[#806C5D]/40
            "
          />
        </motion.div>
      </motion.div>

    </section>
  );
}

export default HeroSection;