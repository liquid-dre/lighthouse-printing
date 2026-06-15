import Image from "next/image";
import Link from "next/link";
import Cta, { Eyebrow } from "@/components/Cta";
import Reveal from "@/components/Reveal";
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
    glyph: <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Zm0 0v18M4 7l8 4 8-4" />,
  },
  {
    title: "Heidelberg litho power",
    body: "A Speedmaster SM-74 anchors our offset line: the image quality high-volume brochures, books and stationery deserve.",
    glyph: (
      <>
        <circle cx="8" cy="9" r="4" />
        <circle cx="15.5" cy="13.5" r="3" />
        <path d="M3 19c6-3 12 1 18-2" />
      </>
    ),
  },
  {
    title: "Xerox certified engineers",
    body: "Every Xerox press we run is supported by LTG Xerox Certified Engineers based in Harare, so uptime is something you can plan around.",
    glyph: (
      <path d="M14.5 6.5a4.5 4.5 0 0 1-5.9 5.6L4 16.7a2 2 0 1 0 2.8 2.8l4.6-4.6a4.5 4.5 0 0 0 5.6-5.9l-2.6 2.6-2.5-.7-.7-2.5 2.6-2.6a4.5 4.5 0 0 0 .7.7Z" />
    ),
  },
  {
    title: "Nationwide trusted partner",
    body: "Preferred provider for NGOs, embassies, educational institutions, government departments and corporates across Zimbabwe.",
    glyph: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.5 12h17M12 3.5c2.6 2.4 4 5.3 4 8.5s-1.4 6.1-4 8.5c-2.6-2.4-4-5.3-4-8.5s1.4-6.1 4-8.5Z" />
      </>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-press.jpg"
            alt="The Heidelberg Speedmaster press on a dark studio stage, raked by warm light"
            fill
            preload
            sizes="100vw"
            quality={80}
            className="hero-parallax object-cover object-[60%_center]"
          />
        </div>
        {/* one calm scrim, anchored bottom-left where the copy sits */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/60 to-ink/20"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/70 via-transparent to-transparent"
        />

        <div className="hero-copy-rise mx-auto w-full max-w-6xl px-4 pb-24 pt-44 sm:px-6 sm:pb-32">
          <Reveal>
            <h1 className="font-display max-w-3xl text-[2.9rem]/[0.98] font-bold tracking-tight text-white sm:text-7xl/[0.96] lg:text-[5.5rem]/[0.95]">
              Zimbabwe&rsquo;s print
              <br />
              production powerhouse.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-7 max-w-md text-base/relaxed text-paper/80 sm:text-lg/relaxed">
              Litho, digital, design, vehicle branding and wide-format,
              under one roof in Harare.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Cta href={wa("Hi Lighthouse Print, I'd like a quote.")}>
                Get a quote on WhatsApp
              </Cta>
              <Cta href="/services" variant="ghost">
                Explore our services
              </Cta>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= TRUST STRIP + CLIENTS ================= */}
      <section
        aria-label="Why clients trust Lighthouse Print"
        className="border-y border-white/8 bg-ink-deep"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal>
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3.5">
              {trustClaims.map((claim) => (
                <li
                  key={claim}
                  className="text-[13px] font-medium tracking-wide text-mist"
                >
                  {claim}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-14">
              <p className="text-center text-[11px] font-medium uppercase tracking-[0.3em] text-mist/70">
                A big thank you to our clients
              </p>
              <div className="mt-8">
                <ClientsMarquee />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= SERVICES HIGHLIGHTS ================= */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <h2 className="font-display max-w-md text-3xl font-bold tracking-tight text-white sm:text-5xl/[1.02]">
              Five crafts. One roof.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Link
              href="/services"
              className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-paper transition-colors duration-200 hover:text-white"
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
            <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-mist/80">
                  Not sure where to start?
                </p>
                <h3 className="font-display mt-3 text-2xl font-bold tracking-tight text-white">
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

      {/* ================= WHY LIGHTHOUSE ================= */}
      <section className="on-paper bg-paper text-ink">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28">
          <Reveal>
            <h2 className="font-display max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl/[1.02]">
              The capacity of a production house, the care of a studio.
            </h2>
          </Reveal>
          <ul className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {whyLighthouse.map((w, i) => (
              <Reveal as="li" key={w.title} delay={i * 80}>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-beam">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5.5 w-5.5">
                    {w.glyph}
                  </svg>
                </div>
                <h3 className="font-display mt-5 text-lg font-bold tracking-tight">
                  {w.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate">
                  {w.body}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= VEHICLE WRAP SHOWCASE ================= */}
      <section className="overflow-hidden py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <Reveal>
                <Eyebrow>We lead with wraps</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl/[1.02]">
                  Every vehicle is a moving billboard.
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-md text-base leading-relaxed text-mist">
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
            <Reveal clip>
              <figure className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src="/images/vehicle-hevoi.jpg"
                  alt="A sedan in a vivid full HEVOI FM wrap, photographed at golden hour"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>
          </div>

          <ul className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3">
            {[
              { src: "/images/bus-fifa.jpg", alt: "Coach bus in a full green tournament livery" },
              { src: "/images/vehicle-rav4.jpg", alt: "SUV with a two-tone green campaign wrap" },
              { src: "/images/bus-red.jpg", alt: "Intercity bus in a full-body advertising wrap" },
            ].map((img, i) => (
              <Reveal as="li" key={img.src} delay={i * 90} className={i === 2 ? "hidden sm:block" : ""}>
                <figure className="lift relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/8">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover"
                  />
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= CLOSING CTA (full-bleed scene) ================= */}
      <section className="relative isolate flex min-h-[78svh] items-center justify-center overflow-hidden border-t border-white/8">
        <Image
          src="/images/fleet-collateral.jpg"
          alt="The full range of Lighthouse output: wrapped vans and a coach, gazebo, flags, banners and printed collateral under stadium light"
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/78" />
        <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
          <Reveal>
            <h2 className="font-display mx-auto max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-6xl/[1.0]">
              Start your print job today.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-paper/85">
              Send the brief on WhatsApp and the team will come back with a
              quote, usually the same day.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-9 flex flex-col items-center gap-4">
              <Cta href={wa("Hi Lighthouse Print, I'd like to start a print job.")}>
                Get a quote on WhatsApp
              </Cta>
              <p className="text-sm text-paper/70">
                Prefer to talk?{" "}
                <a
                  href={`tel:${site.phones[0].tel}`}
                  className="font-medium text-paper underline-offset-4 hover:underline"
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
