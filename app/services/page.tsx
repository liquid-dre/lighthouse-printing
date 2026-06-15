import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Cta, { Eyebrow } from "@/components/Cta";
import Reveal from "@/components/Reveal";
import PrintReveal from "@/components/PrintReveal";
import { services } from "@/data/services";
import { site, wa, waQuote } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Litho print, digital print, design studio, vehicle branding and wide-format print: Lighthouse Print's five crafts, in depth.",
};

// Real workflow, in order: genuine process guidance, not a sales funnel.
const steps = [
  {
    n: "01",
    title: "Send your brief",
    body: "Message us on WhatsApp with sizes, quantities, your deadline and any artwork you already have.",
  },
  {
    n: "02",
    title: "Quote & proof",
    body: "We come back with a quote, usually the same day, and a proof for you to sign off before anything runs.",
  },
  {
    n: "03",
    title: "Print & finish",
    body: "Your job runs on the right press, then through in-house finishing: cutting, folding and binding.",
  },
  {
    n: "04",
    title: "Collect or deliver",
    body: "Pick up from Avondale, or we arrange delivery. Fleet wraps and signage are fitted by our team.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ---- header ---- */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-36 sm:px-6 sm:pt-44">
        <Reveal>
          <Eyebrow>Services</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display mt-6 max-w-4xl text-5xl font-extrabold tracking-tight text-ink sm:text-7xl/[0.95]">
            Everything a brand needs to be seen, printed under one roof.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
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
                className="btn inline-flex min-h-11 items-center rounded-full border border-ink/15 bg-white px-4 text-sm font-medium text-muted hover:border-ink/40 hover:text-ink"
              >
                {s.name}
              </a>
            ))}
          </nav>
        </Reveal>
      </section>

      {/* ---- in-depth anchored sections (case-study rhythm) ---- */}
      {services.map((s, i) => {
        const flip = i % 2 === 1;
        return (
          <section
            key={s.slug}
            id={s.slug}
            aria-labelledby={`${s.slug}-title`}
            className={i % 2 === 1 ? "border-y border-ink/10 bg-white" : ""}
          >
            <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
              <div
                className={`grid items-center gap-10 lg:gap-16 ${
                  flip ? "lg:grid-cols-[1.1fr_1fr]" : "lg:grid-cols-[1fr_1.1fr]"
                }`}
              >
                <PrintReveal
                  as="figure"
                  className={`relative overflow-hidden rounded-2xl border border-ink/10 ${flip ? "lg:order-2" : ""}`}
                >
                  <Image
                    src={s.hero.src}
                    alt={s.hero.alt}
                    width={1600}
                    height={1100}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="aspect-[16/11] w-full object-cover"
                  />
                  <figcaption className="absolute bottom-3 left-3 rounded-full border border-ink/10 bg-paper/90 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-ink backdrop-blur-sm">
                    {s.spec}
                  </figcaption>
                </PrintReveal>

                <div className={flip ? "lg:order-1" : ""}>
                  <Reveal>
                    <p className="font-display text-2xl font-extrabold tracking-tight text-signal">
                      0{i + 1}
                    </p>
                    <h2
                      id={`${s.slug}-title`}
                      className="font-display mt-2 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl"
                    >
                      {s.name}
                    </h2>
                    <p className="mt-3 text-lg font-medium text-ink">
                      {s.tagline}
                    </p>
                  </Reveal>
                  <Reveal delay={100}>
                    <p className="mt-5 text-[15px] leading-relaxed text-muted">
                      {s.description[0]}
                    </p>
                  </Reveal>
                  <Reveal delay={160}>
                    <ul className="mt-7 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                      {s.capabilities.map((c) => (
                        <li
                          key={c}
                          className="flex items-start gap-2.5 text-sm leading-snug text-ink/85"
                        >
                          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal-deep">
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
                        className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink transition-colors duration-200 hover:text-signal-deep"
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

      {/* ---- how it works (real workflow) + closing ---- */}
      <section aria-labelledby="how-it-works" className="border-t border-ink/10">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28">
          <Reveal>
            <Eyebrow>How it works</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2
              id="how-it-works"
              className="font-display mt-4 max-w-2xl text-4xl font-extrabold tracking-tight text-ink sm:text-6xl/[0.95]"
            >
              From your brief to off the press.
            </h2>
          </Reveal>
          <ol className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 80}>
                <p className="font-display text-3xl font-extrabold tracking-tight text-signal">
                  {s.n}
                </p>
                <h3 className="font-display mt-4 border-t border-ink/15 pt-4 text-lg font-bold tracking-tight text-ink">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {s.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---- red colour-block closing ---- */}
      <section className="on-ink bg-signal">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-24 text-center sm:px-6 sm:py-28">
          <Reveal>
            <h2 className="font-display max-w-2xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl/[0.95]">
              Tell us what you need printed.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-4 flex flex-col items-center gap-4">
              <Cta href={wa("Hi Lighthouse Print, I'd like a quote.")} variant="ink">
                Get a quote on WhatsApp
              </Cta>
              <p className="text-sm text-white">
                Prefer to talk?{" "}
                <a
                  href={`tel:${site.phones[0].tel}`}
                  className="font-semibold text-white underline-offset-4 hover:underline"
                >
                  Call {site.phones[0].label}
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
