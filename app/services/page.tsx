import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Cta, { Eyebrow } from "@/components/Cta";
import Reveal from "@/components/Reveal";
import { services } from "@/data/services";
import { waQuote } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Litho print, digital print, design studio, vehicle branding and wide-format print: Lighthouse Print's five crafts, in depth.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ---- header ---- */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-36 sm:px-6 sm:pt-44">
        <Reveal>
          <Eyebrow>Services</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display mt-5 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-6xl/[1.03]">
            Everything a brand needs to be seen, printed under one roof.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            Five specialist crafts that hand work to each other: artwork flows
            from the studio to the right press, and out to finishing, wrapping
            or installation without leaving the building.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <nav aria-label="Jump to a service" className="mt-10 flex flex-wrap gap-2.5">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="btn inline-flex min-h-11 items-center rounded-full border border-white/12 bg-white/[0.03] px-4 text-sm font-medium text-mist hover:border-white/35 hover:text-white"
              >
                {s.name}
              </a>
            ))}
          </nav>
        </Reveal>
      </section>

      {/* ---- in-depth anchored sections ---- */}
      {services.map((s, i) => {
        const flip = i % 2 === 1;
        return (
          <section
            key={s.slug}
            id={s.slug}
            aria-labelledby={`${s.slug}-title`}
            className={i % 2 === 1 ? "border-y border-white/8 bg-ink-deep" : ""}
          >
            <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
              <div
                className={`grid items-center gap-10 lg:gap-16 ${
                  flip ? "lg:grid-cols-[1.1fr_1fr]" : "lg:grid-cols-[1fr_1.1fr]"
                }`}
              >
                <Reveal clip className={flip ? "lg:order-2" : ""}>
                  <figure className="relative aspect-[16/11] overflow-hidden rounded-2xl">
                    <Image
                      src={s.hero.src}
                      alt={s.hero.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <figcaption className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-ink/70 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-paper backdrop-blur-sm">
                      {s.spec}
                    </figcaption>
                  </figure>
                </Reveal>

                <div className={flip ? "lg:order-1" : ""}>
                  <Reveal from={flip ? "left" : "right"}>
                    <h2
                      id={`${s.slug}-title`}
                      className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
                    >
                      {s.name}
                    </h2>
                    <p className="mt-3 text-base font-medium text-signal-tint">
                      {s.tagline}
                    </p>
                  </Reveal>
                  <Reveal delay={100}>
                    <p className="mt-5 text-[15px] leading-relaxed text-mist">
                      {s.description[0]}
                    </p>
                  </Reveal>
                  <Reveal delay={160}>
                    <ul className="mt-7 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                      {s.capabilities.map((c) => (
                        <li
                          key={c}
                          className="flex items-start gap-2.5 text-sm leading-snug text-paper/85"
                        >
                          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-beam">
                            <path d="m2.5 8.5 3.5 3.5 7.5-8" />
                          </svg>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                  <Reveal delay={220}>
                    <div className="mt-9 flex flex-wrap items-center gap-4">
                      <Cta href={waQuote(s.name)}>Request a quote</Cta>
                      <Link
                        href={`/services/${s.slug}`}
                        className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-paper hover:text-white"
                      >
                        See the work
                        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-3.5 w-3.5 transition-transform duration-300 ease-(--ease-out-strong) group-hover:translate-x-1">
                          <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
                        </svg>
                      </Link>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
