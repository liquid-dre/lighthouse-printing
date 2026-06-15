import Image from "next/image";
import Link from "next/link";
import Cta, { Eyebrow } from "@/components/Cta";
import Reveal from "@/components/Reveal";
import PrintReveal from "@/components/PrintReveal";
import ServiceCard from "@/components/ServiceCard";
import ClientsMarquee from "@/components/ClientsMarquee";
import { services } from "@/data/services";
import { site, wa, waQuote } from "@/lib/site";

const trustClaims = [
  "Over a decade of excellence",
  "Xerox Certified Partner",
  "Certified MPS Next-Gen Distributor",
  "Heidelberg Speedmaster press",
  "Trusted by NGOs, embassies, government & corporates",
];

const whyLighthouse = [
  {
    title: "One-stop capacity",
    body: "Design, litho, digital, vehicle and wide-format under one roof. One brief, one accountable team, one consistent result.",
  },
  {
    title: "Heidelberg litho power",
    body: "A Speedmaster SM-74 anchors our offset line: the image quality high-volume brochures, books and stationery deserve.",
  },
  {
    title: "Xerox certified engineers",
    body: "Every Xerox press we run is supported by LTG Xerox Certified Engineers in Harare, so uptime is something you can plan around.",
  },
  {
    title: "Nationwide trusted partner",
    body: "The preferred provider for NGOs, embassies, educational institutions, government departments and corporates across Zimbabwe.",
  },
];

export default function Home() {
  return (
    <>
      {/* ================= HERO (paper, oversized, copy only) ================= */}
      <section className="mx-auto max-w-6xl px-4 pb-12 pt-36 sm:px-6 sm:pt-44">
        <Reveal>
          <Eyebrow>Lighthouse Print · Harare · since 2010</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display mt-6 max-w-5xl text-[3.4rem]/[0.92] font-extrabold tracking-tight text-ink sm:text-8xl/[0.9] lg:text-[8.5rem]/[0.88]">
            Zimbabwe&rsquo;s print
            <br />
            production <span className="text-signal">powerhouse.</span>
          </h1>
        </Reveal>
        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <Reveal delay={160}>
            <p className="max-w-md text-lg leading-relaxed text-muted">
              Litho, digital, design, vehicle branding and wide-format, under
              one roof. Over a decade of one-stop, innovative print solutions.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="flex flex-wrap items-center gap-4">
              <Cta href={wa("Hi Lighthouse Print, I'd like a quote.")} variant="ink">
                Get a quote on WhatsApp
              </Cta>
              <Cta href="/services" variant="ghost">
                Explore our services
              </Cta>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- press, its own clean stage, prints in ---- */}
      <section className="mx-auto max-w-6xl px-4 pb-24 pt-6 sm:px-6 sm:pb-28">
        <PrintReveal as="figure" eager className="overflow-hidden rounded-2xl border border-ink/10">
          <Image
            src="/images/hero-press.jpg"
            alt="The Heidelberg Speedmaster SM-74 on a clean studio stage"
            width={2200}
            height={1300}
            preload
            sizes="(max-width: 1152px) 100vw, 1152px"
            quality={80}
            className="w-full"
          />
        </PrintReveal>
        <Reveal>
          <p className="mt-4 text-sm text-muted">
            The litho floor, anchored by a Heidelberg Speedmaster SM-74.
          </p>
        </Reveal>
      </section>

      {/* ================= TRUST + CLIENTS ================= */}
      <section
        aria-label="Why clients trust Lighthouse Print"
        className="border-y border-ink/10 bg-white"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal>
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3.5">
              {trustClaims.map((claim) => (
                <li key={claim} className="text-[13px] font-medium tracking-wide text-muted">
                  {claim}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-14">
              <p className="text-center text-[11px] font-medium uppercase tracking-[0.3em] text-muted">
                A big thank you to our clients
              </p>
              <div className="mt-8">
                <ClientsMarquee />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <h2 className="font-display max-w-xl text-4xl font-extrabold tracking-tight text-ink sm:text-6xl/[0.95]">
              Five crafts. One roof.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Link
              href="/services"
              className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink transition-colors duration-200 hover:text-signal-deep"
            >
              See all services in depth
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-3.5 w-3.5 transition-transform duration-300 ease-(--ease-out-strong) group-hover:translate-x-1">
                <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
              </svg>
            </Link>
          </Reveal>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 60} className="h-full">
              <ServiceCard service={s} priorityImage={i === 0} />
            </Reveal>
          ))}
          {/* CTA tile completes the 2x3 grid so card heights stay equal */}
          <Reveal as="li" delay={300} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-2xl bg-ink p-7 text-paper">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-paper/55">
                  Not sure where to start?
                </p>
                <h3 className="font-display mt-3 text-2xl font-bold tracking-tight">
                  Tell us about the job and we&rsquo;ll route it to the right
                  press.
                </h3>
              </div>
              <div className="pt-8">
                <Cta href={wa("Hi Lighthouse Print, I'd like to talk through a print job.")}>
                  Get a quote on WhatsApp
                </Cta>
              </div>
            </div>
          </Reveal>
        </ul>
      </section>

      {/* ================= INK COLOUR-BLOCK divider ================= */}
      <section className="on-ink bg-ink">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <Reveal>
            <p className="font-display max-w-4xl text-3xl font-extrabold leading-[1.05] tracking-tight text-paper sm:text-6xl/[1.02]">
              One of the top-performing Xerox distributors in Africa, and the
              lead distributor in Zimbabwe.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-paper/65">
              A certified Managed Print Services Next-Generation Distributor,
              with Xerox equipment supported by our own certified engineers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= WHY LIGHTHOUSE ================= */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28">
        <Reveal>
          <h2 className="font-display max-w-2xl text-4xl font-extrabold tracking-tight text-ink sm:text-6xl/[0.95]">
            The capacity of a production house, the care of a studio.
          </h2>
        </Reveal>
        <ul className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {whyLighthouse.map((w, i) => (
            <Reveal as="li" key={w.title} delay={i * 80}>
              <p className="font-display text-3xl font-extrabold tracking-tight text-signal">
                0{i + 1}
              </p>
              <h3 className="font-display mt-4 border-t border-ink/15 pt-4 text-lg font-bold tracking-tight text-ink">
                {w.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{w.body}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ================= VEHICLE SHOWCASE (case study) ================= */}
      <section className="border-t border-ink/10 bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <Reveal>
                <Eyebrow>We lead with wraps</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-6xl/[0.95]">
                  Every vehicle is a moving billboard.
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
                  From single sedans to national fleets: gazebos, flags,
                  banners and buses in one consistent livery. Designed, printed
                  and applied by Lighthouse.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-8">
                  <Cta href={waQuote("Vehicle Branding")}>Quote my vehicle</Cta>
                </div>
              </Reveal>
            </div>
            <PrintReveal as="figure" className="overflow-hidden rounded-2xl border border-ink/10">
              <Image
                src="/images/vehicle-hevoi.jpg"
                alt="A sedan in a vivid full HEVOI FM wrap, photographed at golden hour"
                width={2000}
                height={1250}
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="w-full"
              />
            </PrintReveal>
          </div>

          <ul className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3">
            {[
              { src: "/images/bus-fifa.jpg", alt: "Coach bus in a full green tournament livery" },
              { src: "/images/vehicle-rav4.jpg", alt: "SUV with a two-tone green campaign wrap" },
              { src: "/images/bus-red.jpg", alt: "Intercity bus in a full-body advertising wrap" },
            ].map((img, i) => (
              <PrintReveal as="figure" key={img.src} delay={i * 90} className={`lift overflow-hidden rounded-2xl border border-ink/10 ${i === 2 ? "hidden sm:block" : ""}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1200}
                  height={900}
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="aspect-[4/3] w-full object-cover"
                />
              </PrintReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= RED COLOUR-BLOCK closing ================= */}
      <section className="on-ink bg-signal">
        <div className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 sm:py-32">
          <Reveal>
            <h2 className="font-display mx-auto max-w-3xl text-5xl font-extrabold tracking-tight text-white sm:text-7xl/[0.95]">
              Start your print job today.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white">
              Send the brief on WhatsApp and the team will come back with a
              quote, usually the same day.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-9 flex flex-col items-center gap-4">
              <Cta href={wa("Hi Lighthouse Print, I'd like to start a print job.")} variant="ink">
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
