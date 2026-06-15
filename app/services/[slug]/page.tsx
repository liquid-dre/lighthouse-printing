import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Cta, { Eyebrow } from "@/components/Cta";
import Reveal from "@/components/Reveal";
import PrintReveal from "@/components/PrintReveal";
import { getService, services } from "@/data/services";
import { site, waQuote } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: `${service.tagline} ${service.summary}`,
    openGraph: {
      title: `${service.name} | Lighthouse Print`,
      description: service.tagline,
      images: [{ url: service.hero.src }],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const index = services.findIndex((s) => s.slug === service.slug);
  const next = services[(index + 1) % services.length];

  return (
    <>
      {/* ---- hero: copy on paper, image prints in (cleanly separated) ---- */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-32 sm:px-6 sm:pt-40">
        <Reveal>
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-medium text-muted">
            <Link href="/services" className="inline-flex min-h-11 items-center transition-colors duration-200 hover:text-ink">
              Services
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-ink">
              {service.name}
            </span>
          </nav>
        </Reveal>
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <Reveal delay={40}>
              <Eyebrow>{service.spec}</Eyebrow>
            </Reveal>
            <Reveal delay={110}>
              <h1 className="font-display mt-5 text-5xl font-extrabold tracking-tight text-ink sm:text-7xl/[0.95]">
                {service.name}
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-5 max-w-md text-lg font-medium leading-relaxed text-muted">
                {service.tagline}
              </p>
            </Reveal>
            <Reveal delay={250}>
              <div className="mt-8">
                <Cta href={waQuote(service.name)}>
                  Request a {service.name} quote
                </Cta>
              </div>
            </Reveal>
          </div>
          <PrintReveal as="figure" eager className="overflow-hidden rounded-2xl border border-ink/10">
            <Image
              src={service.hero.src}
              alt={service.hero.alt}
              width={1600}
              height={1100}
              preload
              sizes="(max-width: 1024px) 100vw, 55vw"
              quality={80}
              className="aspect-[16/11] w-full object-cover"
            />
          </PrintReveal>
        </div>
      </section>

      {/* ---- what it is + capabilities ---- */}
      <section className="border-t border-ink/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
            <div>
              <Reveal>
                <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                  What this craft does for you
                </h2>
              </Reveal>
              {service.description.map((para, i) => (
                <Reveal key={i} delay={80 + i * 70}>
                  <p className="mt-5 text-base leading-relaxed text-muted">
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={150}>
              <div className="rounded-2xl border border-ink/10 bg-paper p-7">
                <h3 className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted">
                  Capabilities
                </h3>
                <ul className="mt-5 space-y-3">
                  {service.capabilities.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-3 text-sm leading-snug text-ink/90"
                    >
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal-deep">
                        <path d="m2.5 8.5 3.5 3.5 7.5-8" />
                      </svg>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- gallery of real work ---- */}
      <section aria-label={`${service.name}: recent work`} className="border-t border-ink/10">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <Reveal>
            <Eyebrow>The work</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Recently off the press
            </h2>
          </Reveal>
          <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.gallery.map((img, i) => (
              <PrintReveal as="li" key={img.src} delay={(i % 3) * 90} className="lift overflow-hidden rounded-2xl border border-ink/10 bg-white">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1200}
                  height={900}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={
                    img.src.endsWith(".png")
                      ? "aspect-[4/3] w-full object-contain p-6"
                      : "aspect-[4/3] w-full object-cover"
                  }
                />
              </PrintReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- CTA + next service ---- */}
      <section className="border-t border-ink/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
            <Reveal>
              <div>
                <h2 className="font-display max-w-lg text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
                  Ready to put {service.shortName.toLowerCase()} to work?
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                  Message us on WhatsApp with your brief (sizes, quantities and
                  deadline) and we&rsquo;ll quote it.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <Cta href={waQuote(service.name)}>Get a quote on WhatsApp</Cta>
                  <a
                    href={`tel:${site.phones[0].tel}`}
                    className="inline-flex min-h-11 items-center text-sm font-medium text-ink underline-offset-4 hover:underline"
                  >
                    or call {site.phones[0].label}
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Link
                href={`/services/${next.slug}`}
                className="lift group block w-full max-w-sm overflow-hidden rounded-2xl border border-ink/10 bg-paper hover:border-ink/25 md:w-80"
              >
                <PrintReveal className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={next.hero.src}
                    alt={next.hero.alt}
                    fill
                    sizes="320px"
                    className="object-cover transition-transform duration-700 ease-(--ease-out-strong) group-hover:scale-[1.04]"
                  />
                </PrintReveal>
                <div className="px-5 py-4">
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
                    Next craft
                  </p>
                  <p className="font-display mt-1 text-lg font-bold tracking-tight text-ink">
                    {next.name}
                  </p>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
