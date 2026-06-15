import type { Metadata } from "next";
import Image from "next/image";
import Cta, { Eyebrow } from "@/components/Cta";
import Reveal from "@/components/Reveal";
import ClientsMarquee from "@/components/ClientsMarquee";
import { site, wa } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Incorporated in 2010, Lighthouse Print is Zimbabwe's print production powerhouse, part of the Lighthouse Group, partnered with Xerox and powered by a Heidelberg Speedmaster SM-74.",
};

const values = [
  "Commitment",
  "Integrity",
  "Excellence",
  "Family",
  "Professionalism",
];

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

export default function AboutPage() {
  return (
    <>
      {/* ---- story ---- */}
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-36 sm:px-6 sm:pt-44">
        <Reveal>
          <Eyebrow>About us · since 2010</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display mt-5 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl/[1.03]">
            A decade and counting of one-stop print excellence.
          </h1>
        </Reveal>
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div>
            <Reveal delay={120}>
              <p className="text-base leading-relaxed text-mist sm:text-lg">
                Lighthouse Print was incorporated in 2010 with one objective:
                provide one-stop innovative printing solutions. Today that
                means a full range of print services, a graphic design studio,
                and the supply of Xerox office and production equipment, all
                supported by Xerox Certified Engineers.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-5 text-base leading-relaxed text-mist sm:text-lg">
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
                    className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-paper/85"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={160} clip>
            <figure className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:aspect-auto lg:h-full">
              <Image
                src="/images/ds-office.jpg"
                alt="Inside the Lighthouse studio, with brand values printed large on the office wall"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ---- vision / mission ---- */}
      <section className="border-y border-white/8 bg-ink-deep">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 py-20 sm:px-6 sm:py-24 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-white/8 bg-white/[0.03] p-1.5">
              <div className="h-full rounded-[10px] bg-ink-soft p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-beam">
                  Our vision
                </p>
                <p className="font-display mt-4 text-xl font-bold leading-snug tracking-tight text-paper sm:text-2xl">
                  To be the preferred fully-fledged design and print solutions
                  company in Zimbabwe and beyond.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-2xl border border-white/8 bg-white/[0.03] p-1.5">
              <div className="h-full rounded-[10px] bg-ink-soft p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-beam">
                  Our mission
                </p>
                <p className="font-display mt-4 text-xl font-bold leading-snug tracking-tight text-paper sm:text-2xl">
                  To profitably meet the needs of our clients by providing
                  creative and innovative solutions.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- the group ---- */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <Reveal>
          <Eyebrow>The Lighthouse Group</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display mt-5 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl/[1.05]">
            Print is one beam of a bigger light.
          </h2>
        </Reveal>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {group.map((g, i) => {
            const inner = (
              <>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-lg font-bold tracking-tight text-paper">
                    {g.name}
                  </h3>
                  {g.current ? (
                    <span className="rounded-full bg-signal/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-signal-tint">
                      You are here
                    </span>
                  ) : (
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-4 w-4 shrink-0 text-mist transition-transform duration-300 ease-(--ease-out-strong) group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      <path d="M4 12 12 4M5.5 4H12v6.5" />
                    </svg>
                  )}
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-mist">
                  {g.role}
                </p>
              </>
            );
            const cls =
              "lift group block h-full rounded-2xl border border-white/8 bg-white/[0.03] p-7";
            return (
              <Reveal as="li" key={g.name} delay={i * 70} className="h-full">
                {g.href ? (
                  <a
                    href={g.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${cls} hover:border-white/25`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={`${cls} border-signal/30`}>{inner}</div>
                )}
              </Reveal>
            );
          })}
        </ul>
      </section>

      {/* ---- partners ---- */}
      <section className="on-paper bg-paper text-ink">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Reveal>
                <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  Backed by the names that built the industry.
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 text-[15px] leading-relaxed text-slate">
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
                  {[
                    "Xerox certified business partner",
                    "Certified MPS Next-Generation Distributor",
                    "Heidelberg Speedmaster SM-74 litho press",
                    "LTG Xerox Certified Engineers in Harare",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm font-medium">
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal-deep">
                        <path d="m2.5 8.5 3.5 3.5 7.5-8" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <Reveal delay={120} clip>
              <figure className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-white">
                <Image
                  src="/images/heidelberg-sm74.jpg"
                  alt="Heidelberg Speedmaster SM-74 sheet-fed offset press"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-6"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- who we serve + clients ---- */}
      <section className="border-b border-white/8 bg-ink-deep">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <Reveal>
            <h2 className="font-display max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              The preferred provider for the institutions that can&rsquo;t
              afford mistakes.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {served.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-sm text-paper/85"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-14">
              <p className="text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-mist/80">
                A big thank you to our clients
              </p>
              <div className="mt-7">
                <ClientsMarquee />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28">
        <Reveal>
          <h2 className="font-display mx-auto max-w-xl text-3xl font-bold tracking-tight text-white sm:text-5xl/[1.05]">
            Work with the team behind the beam.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-mist">
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
