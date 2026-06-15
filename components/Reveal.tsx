"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in ms, applied via CSS custom property. */
  delay?: number;
  /** Use the cinematic clip-path reveal instead of the fade-up. */
  clip?: boolean;
  /** Entrance direction for the fade variant. Defaults to "up". */
  from?: "up" | "left" | "right";
  className?: string;
  as?: "div" | "section" | "li" | "figure";
};

/**
 * Adds `.is-visible` when the element enters the viewport (once).
 * All motion lives in CSS so it runs off the main thread and the
 * prefers-reduced-motion fallback is handled in globals.css.
 */
export default function Reveal({
  children,
  delay = 0,
  clip = false,
  from = "up",
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={`${clip ? "clip-reveal" : "reveal"} ${
        !clip && from !== "up" ? `from-${from}` : ""
      } ${className}`}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
