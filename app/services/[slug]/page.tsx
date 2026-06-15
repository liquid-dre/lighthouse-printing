import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Cta, { Eyebrow } from "@/components/Cta";
import Reveal from "@/components/Reveal";
import { getService, services } from "@/data/services";
import { waQuote } from "@/lib/site";

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
      {/* ---- hero ---- */}
      <section className="relative flex min-h-[72svh] items-end overflow-hidden">
        <Image
          src={service.hero.src}
          alt={service.hero.alt}
          fill
          preload
          sizes="100vw"
          quality={80}
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/25"
        />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-44 sm:px-6 sm:pb-20">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs font-medium text-paper/70">
              <Link href="/services" className="inline-flex min-h-11 items-center transition-colors duration-200 hover:text-white">
                Services
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-paper">
                {service.name}
              </span>
            </nav>
          </Reveal>
          <Reveal delay={60}>
            <Eyebrow>{service.spec}</Eyebrow>
          </Reveal>
          <Reveal delay={130}>
            <h1 className="font-display mt-5 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-6xl/[1.03]">
              {service.name}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-paper/90 sm:text-lg">
              {service.tagline}
            </p>
          </Reveal>
          <Reveal delay={270}>
            <div className="mt-8">
              <Cta href={waQuote(service.name)}>
                Request a {service.name} quote
              </Cta>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- what it is + capabilities ---- */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                What this craft does for you
              </h2>
            </Reveal>
            {service.description.map((para, i) => (
              <Reveal key={i} delay={80 + i * 70}>
                <p className="mt-5 text-[15px] leading-relaxed text-mist sm:text-base">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-1.5">
              <div className="rounded-[10px] bg-ink-soft p-7">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-beam">
                  Capabilities
                </h3>
                <ul className="mt-5 space-y-3">
                  {service.capabilities.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-3 text-sm leading-snug text-paper/90"
                    >
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-beam">
                        <path d="m2.5 8.5 3.5 3.5 7.5-8" />
                      </svg>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- gallery of real work ---- */}
      <section
        aria-label={`${service.name}: recent work`}
        className="border-y border-white/8 bg-ink-deep"
      >
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <Reveal>
            <Eyebrow>The work</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Recently off the press
            </h2>
          </Reveal>
          <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.gallery.map((img, i) => (
              <Reveal as="li" key={img.src} delay={(i % 3) * 90}>
                <figure className="lift relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/8 bg-ink-soft">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={
                      img.src.endsWith(".png")
                        ? "object-contain p-6"
                        : "object-cover"
                    }
                  />
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- CTA + next service ---- */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(70%_90%_at_50%_115%,rgba(224,28,36,0.25),transparent_70%)]"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
            <Reveal>
              <div>
                <h2 className="font-display max-w-lg text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to put {service.shortName.toLowerCase()} to work?
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-mist">
                  Message us on WhatsApp with your brief (sizes, quantities and
                  deadline) and we&rsquo;ll quote it.
                </p>
                <div className="mt-7">
                  <Cta href={waQuote(service.name)}>
                    Get a quote on WhatsApp
                  </Cta>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Link
                href={`/services/${next.slug}`}
                className="lift group block w-full max-w-sm rounded-2xl border border-white/8 bg-white/[0.03] p-1.5 hover:border-white/20 md:w-80"
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-[10px]">
                  <Image
                    src={next.hero.src}
                    alt={next.hero.alt}
                    fill
                    sizes="320px"
                    className="object-cover transition-transform duration-700 ease-(--ease-out-strong) group-hover:scale-[1.04]"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                </div>
                <div className="px-5 py-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mist">
                    Next craft
                  </p>
                  <p className="font-display mt-1 text-lg font-bold tracking-tight text-paper">
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
