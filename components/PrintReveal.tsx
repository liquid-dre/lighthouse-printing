"use client";

import { useEffect, useRef, type ReactNode } from "react";

type PrintRevealProps = {
  children: ReactNode;
  /** Stagger delay (ms) applied to the feed + print-head. */
  delay?: number;
  /** Print in immediately on mount (hero/LCP) instead of waiting for scroll. */
  eager?: boolean;
  className?: string;
  as?: "div" | "figure" | "li";
};

/**
 * "Printer Feed": the signature reveal. Wraps a single media child
 * (next/image fill container or <video>) and prints it in top→bottom via
 * a clip-path inset, with a thin red print-head line travelling the front.
 *
 * Fires once on first viewport entry (or on mount when `eager`). All motion
 * is CSS (clip-path/transform/opacity) in globals.css; this only toggles the
 * `.is-printed` class and measures the feed distance for the print-head.
 * Reduced-motion + no-JS fallbacks are handled in CSS (media shows instantly).
 */
export default function PrintReveal({
  children,
  delay = 0,
  eager = false,
  className = "",
  as: Tag = "div",
}: PrintRevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const print = () => {
      // Feed distance = element height, so the print-head travels the full
      // media and the keyframe stays GPU-only (translateY, no layout).
      el.style.setProperty("--feed", `${el.offsetHeight}px`);
      el.classList.add("is-printed");
    };

    if (eager) {
      const r = requestAnimationFrame(print);
      return () => cancelAnimationFrame(r);
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            print();
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [eager]);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={`print-reveal ${className}`}
      style={
        delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined
      }
    >
      {children}
    </Tag>
  );
}
