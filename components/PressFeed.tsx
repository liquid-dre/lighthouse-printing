"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Cta from "@/components/Cta";

export type FeedItem = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  body: string;
  bullets?: string[];
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
};

/**
 * "Web-fed press" feed (the Ragged Edge mechanism). On large screens with
 * motion allowed, the right column is a sticky masked window: as the left
 * text column scrolls, flat full-bleed images feed VERTICALLY through the
 * window (next in from the bottom, active out the top). Images are never
 * scaled or warped; the press feel comes from the locked window + vertical
 * feed + soft symmetric corners + snappy eased scrub.
 *
 * Scroll-to-pixel mapping: the right column is `position: sticky; top: 0`,
 * so the LEFT column's height (one ~85vh panel per item) supplies the
 * section's scroll length. A single ScrollTrigger spans the section
 * (start top-top, end bottom-bottom) and drives a timeline of (n-1) eased
 * tweens, each sliding the track up by one window-height (yPercent -100*i),
 * so the N media map to N equal scroll slices.
 *
 * GSAP/ScrollTrigger is dynamically imported (code-split, never in the
 * shared bundle) and only on lg+ with motion enabled, so phones and
 * reduced-motion users download no animation code and get a clean static
 * stacked layout (image + text per item), fully readable.
 */
export default function PressFeed({ items }: { items: FeedItem[] }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [enhanced, setEnhanced] = useState(false);

  // Decide whether to run the sticky feed (lg+ and motion allowed).
  useEffect(() => {
    const lg = window.matchMedia("(min-width: 1024px)");
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const decide = () => setEnhanced(lg.matches && !rm.matches);
    decide();
    lg.addEventListener("change", decide);
    rm.addEventListener("change", decide);
    return () => {
      lg.removeEventListener("change", decide);
      rm.removeEventListener("change", decide);
    };
  }, []);

  // Set up the scrubbed feed once enhanced. GSAP loaded on demand.
  useEffect(() => {
    if (!enhanced) return;
    let killed = false;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any;
    let onLoad: (() => void) | undefined;
    let timer: ReturnType<typeof setTimeout> | undefined;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (killed || !sectionRef.current || !trackRef.current) return;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const n = items.length;
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.4,
            invalidateOnRefresh: true,
          },
        });
        // Each tween = one media item feeding through, one equal scroll slice.
        // ease "none" keeps the slices linear/even under scrub; the snappy,
        // un-bouncy "catch-up" feel comes from scrub: 0.4 smoothing, not from
        // warping the position curve.
        for (let i = 1; i < n; i++) {
          tl.to(trackRef.current, {
            yPercent: -100 * i,
            ease: "none",
            duration: 1,
          });
        }
      }, sectionRef);

      onLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", onLoad);
      timer = setTimeout(() => ScrollTrigger.refresh(), 300); // after images settle
    })();

    return () => {
      killed = true;
      if (onLoad) window.removeEventListener("load", onLoad);
      if (timer) clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, [enhanced, items]);

  // ---- Static stacked layout (SSR default, mobile, reduced-motion) ----
  if (!enhanced) {
    return (
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-20 py-20 sm:py-24">
          {items.map((it) => (
            <article key={it.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <figure className="overflow-hidden rounded-2xl border border-ink/10">
                <Image
                  src={it.src}
                  alt={it.alt}
                  width={1200}
                  height={800}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="aspect-[3/2] w-full object-cover"
                />
              </figure>
              <ItemCopy item={it} />
            </article>
          ))}
        </div>
      </section>
    );
  }

  // ---- Enhanced sticky web-fed feed (lg+, motion allowed) ----
  return (
    <section ref={sectionRef} aria-label="Our services, fed through the press">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-16">
          {/* LEFT: text panels scroll normally */}
          <div>
            {items.map((it) => (
              <div
                key={it.title}
                className="flex min-h-[85vh] flex-col justify-center py-10"
              >
                <ItemCopy item={it} />
              </div>
            ))}
          </div>

          {/* RIGHT: sticky masked window, flat images feed vertically */}
          <div aria-hidden="true">
            <div className="sticky top-0 flex h-screen items-center">
              <div className="relative w-full overflow-hidden rounded-2xl border border-ink/10">
                {/* window aspect sets the visible height; track + slides fill it.
                    3/2 matches the landscape press shots (~16/11) with minimal crop. */}
                <div className="aspect-[3/2] w-full" />
                <div
                  ref={trackRef}
                  className="absolute inset-0 will-change-transform"
                >
                  {items.map((it, i) => (
                    <div
                      key={it.src + i}
                      className="absolute inset-0"
                      style={{ transform: `translateY(${i * 100}%)` }}
                    >
                      <Image
                        src={it.src}
                        alt=""
                        fill
                        sizes="50vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ItemCopy({ item }: { item: FeedItem }) {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
        {item.eyebrow}
      </p>
      <h3 className="font-display mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
        {item.title}
      </h3>
      <p className="mt-4 max-w-md text-lg font-medium text-ink">{item.body}</p>
      {item.bullets && (
        <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
          {item.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm leading-snug text-muted">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal-deep">
                <path d="m2.5 8.5 3.5 3.5 7.5-8" />
              </svg>
              {b}
            </li>
          ))}
        </ul>
      )}
      {(item.primary || item.secondary) && (
        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
          {item.primary && <Cta href={item.primary.href}>{item.primary.label}</Cta>}
          {item.secondary && (
            <Link
              href={item.secondary.href}
              className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink transition-colors duration-200 hover:text-signal-deep"
            >
              {item.secondary.label}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-3.5 w-3.5 transition-transform duration-300 ease-(--ease-out-strong) group-hover:translate-x-1">
                <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
              </svg>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
