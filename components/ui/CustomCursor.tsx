"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const glow = useRef({ x: -100, y: -100 });

  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse/trackpad).
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);

    const interactiveSelector =
      'a, button, [role="button"], input, textarea, select, label, summary, [data-cursor="hover"]';

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (hidden) setHidden(false);

      const target = e.target as HTMLElement | null;
      setHovering(!!target?.closest(interactiveSelector));
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    let raf = 0;
    const render = () => {
      // Dot tracks the pointer exactly; ring & glow ease behind for a trail.
      ring.current.x += (mouse.current.x - ring.current.x) * 0.18;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.18;
      glow.current.x += (mouse.current.x - glow.current.x) * 0.08;
      glow.current.y += (mouse.current.y - glow.current.y) * 0.08;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glow.current.x}px, ${glow.current.y}px, 0) translate(-50%, -50%)`;
      }

      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [hidden]);

  if (!enabled) return null;

  const opacity = hidden ? 0 : 1;

  return (
    <>
      {/* Subtle editorial glow that lags farthest behind. Blends chocolate,
          taupe, and powder blue for a refined Lumora aura. */}
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-56 w-56 blur-3xl transition-opacity duration-300 will-change-transform"
        style={{
          opacity: opacity * (hovering ? 0.5 : 0.35),
          background:
            "radial-gradient(circle at 38% 38%, rgba(128,108,93,0.45) 0%, rgba(175,196,206,0.35) 28%, transparent 60%)," +
            "radial-gradient(circle at 65% 62%, rgba(220,231,234,0.4) 0%, rgba(220,231,234,0.2) 30%, transparent 62%)",
        }}
      />

      {/* Outline ring that eases behind the dot - diamond shape */}
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] border will-change-transform"
        style={{
          opacity,
          height: hovering ? 56 : 34,
          width: hovering ? 56 : 34,
          borderColor: hovering
            ? "rgba(59,130,246,0.9)"
            : "rgba(59,130,246,0.7)",
          borderWidth: 1.5,
          background: hovering
            ? "rgba(59,130,246,0.15)"
            : "transparent",
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          transition:
            "height 0.25s ease, width 0.25s ease, border-color 0.25s ease, background 0.25s ease, opacity 0.3s ease",
        }}
      />

      {/* Core dot that tracks the pointer precisely */}
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full will-change-transform"
        style={{
          opacity,
          height: pressed ? 6 : 8,
          width: pressed ? 6 : 8,
          background:
            "linear-gradient(135deg, #2A211D 0%, #806C5D 50%, #AFC4CE 100%)",
          boxShadow:
            "0 0 8px rgba(128,108,93,0.6), 0 0 16px rgba(175,196,206,0.4)",
          transition: "height 0.15s ease, width 0.15s ease, opacity 0.3s ease",
        }}
      />
    </>
  );
}

export default CustomCursor;
