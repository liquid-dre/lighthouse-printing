import type { Metadata } from "next";
import Image from "next/image";
import Cta, { Eyebrow } from "@/components/Cta";
import Reveal from "@/components/Reveal";
import PrintReveal from "@/components/PrintReveal";
import ClientsMarquee from "@/components/ClientsMarquee";
import { site, wa } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Incorporated in 2010, Lighthouse Print is Zimbabwe's print production powerhouse, part of the Lighthouse Group, partnered with Xerox and powered by a Heidelberg Speedmaster SM-74.",
};

const values = ["Commitment", "Integrity", "Excellence", "Family", "Professionalism"];

const group = [
  {
    name: "Lighthouse Print",
    role: "Litho, digital, design, vehicle branding and wide-format production in Harare.",
    href: null,
    current: true,
  },
  {
    name: "Lighthouse Technology",
    role: "Xerox office and production equipment, supported by Xerox Certified Engineers.",
    href: "https://www.ltg.co.zw",
    current: false,
  },
  {
    name: "Lighthouse Digital",
    role: "Digital marketing and online brand presence for the region.",
    href: "https://www.lighthousedigital.co.zw",
    current: false,
  },
  {
    name: "Lighthouse Document Solutions",
    role: "Managed document workflows and enterprise print services.",
    href: "https://www.lighthousedocumentsolutions.co.zw",
    current: false,
  },
];

const served = [
  "Non-governmental organisations",
  "Embassies & diplomatic missions",
  "Educational institutions",
  "Government departments",
  "Corporates & SMEs",
];

const partners = [
  "Xerox certified business partner",
  "Certified MPS Next-Generation Distributor",
  "Heidelberg Speedmaster SM-74 litho press",
  "LTG Xerox Certified Engineers in Harare",
];

export default function AboutPage() {
  return (
    <>
      {/* ---- story ---- */}
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-36 sm:px-6 sm:pt-44">
        <Reveal>
          <Eyebrow>About us · since 2010</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display mt-6 max-w-4xl text-5xl font-extrabold tracking-tight text-ink sm:text-7xl/[0.95]">
            A decade and counting of one-stop print excellence.
          </h1>
        </Reveal>
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div>
            <Reveal delay={120}>
              <p className="text-lg leading-relaxed text-muted">
                Lighthouse Print was incorporated in 2010 with one objective:
                provide one-stop innovative printing solutions. Today that
                means a full range of print services, a graphic design studio,
                and the supply of Xerox office and production equipment, all
                supported by Xerox Certified Engineers.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                We are powered by a young, qualified and passionate team with
                the skills to respond to a technologically evolving print
                industry. The company&rsquo;s steady acquisition of modern
                printing equipment, from the Heidelberg Speedmaster SM-74 on
                the litho floor to production-class Xerox presses, drives this
                dynamic, innovative brand. Exceeding client expectations is
                what motivates us.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap gap-2.5">
                {values.map((v) => (
                  <span
                    key={v}
                    className="rounded-full border border-ink/15 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-ink/80"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
          <PrintReveal as="figure" className="overflow-hidden rounded-2xl border border-ink/10">
            <Image
              src="/images/hero-press.jpg"
              alt="The Heidelberg Speedmaster SM-74 on a clean studio stage"
              width={1400}
              height={1500}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="aspect-[4/5] w-full object-cover lg:aspect-auto lg:h-full"
            />
          </PrintReveal>
        </div>
      </section>

      {/* ---- vision / mission ---- */}
      <section className="border-y border-ink/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 py-20 sm:px-6 sm:py-24 md:grid-cols-2">
          {[
            {
              label: "Our vision",
              body: "To be the preferred fully-fledged design and print solutions company in Zimbabwe and beyond.",
            },
            {
              label: "Our mission",
              body: "To profitably meet the needs of our clients by providing creative and innovative solutions.",
            },
          ].map((v, i) => (
            <Reveal key={v.label} delay={i * 100}>
              <div className="h-full rounded-2xl border border-ink/10 bg-paper p-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted">
                  {v.label}
                </p>
                <p className="font-display mt-4 text-2xl font-bold leading-snug tracking-tight text-ink sm:text-3xl">
                  {v.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---- the group ---- */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28">
        <Reveal>
          <Eyebrow>The Lighthouse Group</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display mt-4 max-w-2xl text-4xl font-extrabold tracking-tight text-ink sm:text-6xl/[0.95]">
            Print is one beam of a bigger light.
          </h2>
        </Reveal>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {group.map((g, i) => {
            const inner = (
              <>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-lg font-bold tracking-tight text-ink">
                    {g.name}
                  </h3>
                  {g.current ? (
                    <span className="rounded-full bg-signal px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                      You are here
                    </span>
                  ) : (
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-4 w-4 shrink-0 text-muted transition-transform duration-300 ease-(--ease-out-strong) group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      <path d="M4 12 12 4M5.5 4H12v6.5" />
                    </svg>
                  )}
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{g.role}</p>
              </>
            );
            const cls =
              "lift group block h-full rounded-2xl border border-ink/10 bg-white p-7";
            return (
              <Reveal as="li" key={g.name} delay={i * 70} className="h-full">
                {g.href ? (
                  <a
                    href={g.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${cls} hover:border-ink/25`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={cls}>{inner}</div>
                )}
              </Reveal>
            );
          })}
        </ul>
      </section>

      {/* ---- partners ---- */}
      <section className="border-t border-ink/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Reveal>
                <h2 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
                  Backed by the names that built the industry.
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 text-base leading-relaxed text-muted">
                  Lighthouse Print is one of the top-performing Xerox
                  distributors in Africa, one of the few certified Managed
                  Print Services (MPS) Next-Generation Distributors on the
                  continent, and the lead Xerox distributor in Zimbabwe. On the
                  offset floor, our litho capacity is anchored by a Heidelberg
                  Speedmaster SM-74.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <ul className="mt-7 space-y-2.5">
                  {partners.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm font-medium text-ink/90">
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal-deep">
                        <path d="m2.5 8.5 3.5 3.5 7.5-8" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <PrintReveal as="figure" className="overflow-hidden rounded-2xl border border-ink/10 bg-white">
              <Image
                src="/images/heidelberg-sm74.jpg"
                alt="Heidelberg Speedmaster SM-74 sheet-fed offset press"
                width={1600}
                height={1000}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="aspect-[16/10] w-full object-contain p-6"
              />
            </PrintReveal>
          </div>
        </div>
      </section>

      {/* ---- who we serve + clients (ink colour-block) ---- */}
      <section className="on-ink bg-ink">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28">
          <Reveal>
            <h2 className="font-display max-w-2xl text-4xl font-extrabold tracking-tight text-paper sm:text-6xl/[0.98]">
              The preferred provider for the institutions that can&rsquo;t
              afford mistakes.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <ul className="mt-10 flex flex-wrap gap-2.5">
              {served.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm text-paper/85"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-16">
              <p className="text-center text-[11px] font-medium uppercase tracking-[0.3em] text-paper/55">
                A big thank you to our clients
              </p>
              <div className="mt-8">
                <ClientsMarquee />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 sm:py-28">
        <Reveal>
          <h2 className="font-display mx-auto max-w-2xl text-4xl font-extrabold tracking-tight text-ink sm:text-6xl/[0.95]">
            Work with the team behind the beam.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted">
            {site.address.street}, {site.address.suburb}, {site.address.city}.
            We&rsquo;re one message away.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Cta href={wa("Hi Lighthouse Print, I'd like to discuss a project.")}>
              Get a quote on WhatsApp
            </Cta>
            <Cta href="/contact" variant="ghost">
              Contact details
            </Cta>
          </div>
        </Reveal>
      </section>
    </>
  );
}
