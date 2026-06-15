"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { clients } from "@/lib/site";

/**
 * Client wall sliced from the brand's real "thank you to our clients"
 * board. Pure CSS marquee, duplicated track for the seamless loop, with
 * a pause/play control (WCAG 2.2.2). The animation also stops while the
 * strip is off-screen, and collapses to a static wrapped grid under
 * prefers-reduced-motion (globals.css).
 */
export default function ClientsMarquee() {
  const [paused, setPaused] = useState(false);
  const [onScreen, setOnScreen] = useState(true);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setOnScreen(entry.isIntersecting),
      { threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const running = !paused && onScreen;

  return (
    <div ref={wrapRef} className="relative">
      <div
        className="overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <ul
          className="marquee-track flex w-max animate-marquee items-center gap-10 py-2"
          style={{ animationPlayState: running ? "running" : "paused" }}
        >
          {[0, 1].map((dup) =>
            clients.map((c) => (
              <li
                key={`${dup}-${c.name}`}
                aria-hidden={dup === 1 ? "true" : undefined}
                className="shrink-0"
              >
                <Image
                  src={c.src}
                  alt={dup === 0 ? c.name : ""}
                  width={106}
                  height={106}
                  sizes="64px"
                  className="h-14 w-14 rounded-full bg-white ring-1 ring-ink/10 sm:h-16 sm:w-16"
                />
              </li>
            )),
          )}
        </ul>
      </div>
      <button
        type="button"
        onClick={() => setPaused((v) => !v)}
        aria-pressed={paused}
        aria-label={paused ? "Play client logos" : "Pause client logos"}
        className="btn absolute -bottom-2 right-0 flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-muted hover:border-ink/30 hover:text-ink"
      >
        {paused ? (
          <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="h-3.5 w-3.5">
            <path d="M5 3.2v9.6c0 .5.6.8 1 .5l7-4.8a.6.6 0 0 0 0-1l-7-4.8a.6.6 0 0 0-1 .5Z" />
          </svg>
        ) : (
          <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="h-3.5 w-3.5">
            <rect x="4" y="3" width="3" height="10" rx="1" />
            <rect x="9" y="3" width="3" height="10" rx="1" />
          </svg>
        )}
      </button>
    </div>
  );
}
