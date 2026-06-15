import type { Metadata } from "next";
import Cta, { Eyebrow } from "@/components/Cta";
import Reveal from "@/components/Reveal";
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
      {/* ---- header ---- */}
      <section className="mx-auto max-w-6xl px-4 pb-12 pt-36 sm:px-6 sm:pt-44">
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
                href={`/services/${s.slug}`}
                className="btn inline-flex min-h-11 items-center rounded-full border border-ink/15 bg-white px-4 text-sm font-medium text-muted hover:border-ink/40 hover:text-ink"
              >
                {s.name}
              </a>
            ))}
          </nav>
        </Reveal>
      </section>

      {/* ---- the five crafts, fed through the press ---- */}
      <PressFeed items={feedItems} />

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
