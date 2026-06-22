import type { Metadata } from "next";
import Cta, { Eyebrow } from "@/components/Cta";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import PressFeed, { type FeedItem } from "@/components/PressFeed";
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

// X-board print-product benefits (corporate profile p.20). `paths` are the
// inline-SVG strokes for each benefit's icon, drawn in the site's icon idiom.
const printBenefits = [
  {
    label: "100% Repulpable",
    gloss: "Fully recyclable board — kinder on the planet.",
    paths: ["M20 11.5a8 8 0 1 0-2.5 6.3", "M20 19v-4h-4"],
  },
  {
    label: "Ultra-lightweight",
    gloss: "Easy to lift, carry and ship anywhere.",
    paths: ["M5 19c0-8 6-14 14-14 0 8-6 14-14 14Z", "M5 19l7-7"],
  },
  {
    label: "Strong",
    gloss: "Rigid and durable enough to stand on its own.",
    paths: ["M12 3 5 6v5c0 4 3 7 7 8 4-1 7-4 7-8V6l-7-3Z", "M9 12l2 2 4-4"],
  },
  {
    label: "Non-toxic",
    gloss: "Safe to handle, display and dispose of.",
    paths: ["M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z", "M8.5 12l2.5 2.5 4.5-5"],
  },
  {
    label: "Flat-packable",
    gloss: "Folds flat for quick transport and storage.",
    paths: ["M3 8l9-4 9 4-9 4-9-4Z", "M3 12l9 4 9-4", "M3 16l9 4 9-4"],
  },
  {
    label: "Direct-printable",
    gloss: "Print straight onto the board, no mounting.",
    paths: [
      "M6 9V4h12v5",
      "M6 18H4v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6h-2",
      "M8 14h8v6H8z",
    ],
  },
];

const printUseCases = [
  {
    title: "Exhibition stands",
    body: "Board stands and displays are quick to assemble, lightweight and flat-packable — and they lift your expo space.",
  },
  {
    title: "Signage & display",
    body: "Direct-printable and CNC-friendly, for plenty of customisation across your signage and display needs.",
  },
  {
    title: "Retail displays",
    body: "The customisable nature of X-board lets you build a retail environment that both attracts customers and promotes your brand.",
  },
];

// The five crafts, fed through the press window (PressFeed).
const feedItems: FeedItem[] = services.map((s) => ({
  src: s.hero.src,
  alt: s.hero.alt,
  eyebrow: s.spec,
  title: s.name,
  body: s.tagline,
  bullets: s.capabilities.slice(0, 4),
  primary: { href: waQuote(s.name), label: "Request a quote" },
  secondary: { href: `/services/${s.slug}`, label: "See the work" },
}));

export default function ServicesPage() {
  return (
    <>
      {/* ---- hero (bold red) ---- */}
      <PageHero
        variant="red"
        eyebrow="Services"
        title={<>Everything a brand needs to be seen, printed under one roof.</>}
      >
        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/85">
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
                href={`/services/${s.slug}`}
                className="btn inline-flex min-h-11 items-center rounded-full border border-white/25 bg-white/10 px-4 text-sm font-medium text-paper hover:bg-white/20"
              >
                {s.name}
              </a>
            ))}
          </nav>
        </Reveal>
      </PageHero>

      {/* ---- the five crafts, fed through the press ---- */}
      <PressFeed items={feedItems} />

      {/* ---- the print revolution (X-board) ---- */}
      <section aria-labelledby="print-revolution" className="border-t border-ink/10">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28">
          <Reveal>
            <Eyebrow>The print revolution</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2
              id="print-revolution"
              className="font-display mt-4 max-w-2xl text-4xl font-extrabold tracking-tight text-ink sm:text-6xl/[0.95]"
            >
              Welcome the print revolution.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              X-board&mdash;a 100% repulpable display board, printed direct. A
              first for Zimbabwe: ultra-light, strong and flat-packable.
            </p>
          </Reveal>

          <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {printBenefits.map((b, i) => (
              <Reveal as="li" key={b.label} delay={i * 60} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-signal/10 text-signal-deep">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      {b.paths.map((d) => (
                        <path key={d} d={d} />
                      ))}
                    </svg>
                  </span>
                  <h3 className="font-display mt-4 text-lg font-bold tracking-tight text-ink">
                    {b.label}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {b.gloss}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>

          <div className="mt-16">
            <Reveal>
              <h3 className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted">
                Built for
              </h3>
            </Reveal>
            <ul className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {printUseCases.map((u, i) => (
                <Reveal as="li" key={u.title} delay={i * 70} className="h-full">
                  <div className="h-full rounded-2xl border border-ink/10 bg-paper p-6">
                    <h4 className="font-display text-lg font-bold tracking-tight text-ink">
                      {u.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {u.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---- how it works (real workflow) ---- */}
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
            {steps.map((s) => (
              <Reveal as="li" key={s.n}>
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
