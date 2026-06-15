import type { Metadata } from "next";
import Cta, { Eyebrow } from "@/components/Cta";
import Reveal from "@/components/Reveal";
import { site, wa } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Lighthouse Print on WhatsApp (+263 772 603 119), by phone, or at 142 King George Road, Avondale, Harare.",
};

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-36 sm:px-6 sm:pt-44">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display mt-6 max-w-3xl text-5xl font-extrabold tracking-tight text-ink sm:text-7xl/[0.95]">
            The fastest quote in print is one message away.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            WhatsApp is the quickest way to reach the team. Send your brief,
            sizes and quantities and we&rsquo;ll come back with a quote. Prefer
            to talk? Every number below is click-to-call.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-9 flex flex-wrap gap-4">
            <Cta href={wa("Hi Lighthouse Print, I'd like a quote.")}>
              Get a quote on WhatsApp
            </Cta>
            <Cta href={`tel:${site.phones[0].tel}`} variant="ghost">
              Call {site.phones[0].label}
            </Cta>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-5 lg:grid-cols-[1.1fr_1fr]">
          {/* ---- phones + address + socials ---- */}
          <div className="grid content-start gap-5">
            <Reveal>
              <div className="rounded-2xl border border-ink/10 bg-white p-7">
                <h2 className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted">
                  Call us
                </h2>
                <ul className="mt-5 grid gap-x-8 gap-y-1 sm:grid-cols-2">
                  {site.phones.map((p) => (
                    <li key={p.tel}>
                      <a
                        href={`tel:${p.tel}`}
                        className="inline-flex min-h-11 items-center text-[15px] font-medium text-ink transition-colors duration-200 hover:text-signal-deep"
                      >
                        {p.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs leading-relaxed text-muted">
                  Mobile numbers reach the sales team directly; the 0242
                  landlines ring the Avondale head office.
                </p>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="rounded-2xl border border-ink/10 bg-white p-7">
                <h2 className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted">
                  Visit us
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-ink">
                  {site.address.street},
                  <br />
                  {site.address.suburb}, {site.address.city},{" "}
                  {site.address.country}
                </p>
                <a
                  href={site.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-ink/20 px-5 text-sm font-medium text-ink hover:border-ink/50"
                >
                  Open in Google Maps
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-3.5 w-3.5">
                    <path d="M4 12 12 4M5.5 4H12v6.5" />
                  </svg>
                </a>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="rounded-2xl border border-ink/10 bg-white p-7">
                <h2 className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted">
                  Follow the work
                </h2>
                <ul className="mt-5 flex flex-wrap gap-3">
                  {site.socials.map((s) => (
                    <li key={s.href}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn inline-flex min-h-11 items-center rounded-full border border-ink/15 px-5 text-sm font-medium text-ink hover:border-ink/40"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* ---- map ---- */}
          <Reveal delay={120}>
            <div className="h-full min-h-[420px] overflow-hidden rounded-2xl border border-ink/10">
              <iframe
                src={site.mapsEmbed}
                title="Map to Lighthouse Print, 142 King George Road, Avondale, Harare"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- closing (red colour-block) ---- */}
      <section className="on-ink bg-signal">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 sm:py-24">
          <Reveal>
            <p className="font-display max-w-2xl text-2xl font-bold leading-snug tracking-tight text-white sm:text-4xl/[1.05]">
              Bring artwork, or bring nothing but the idea. The design studio
              can take it from a sketch to press-ready.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Cta href={wa("Hi Lighthouse Print, I have an idea I'd like printed.")} variant="ink">
              Get a quote on WhatsApp
            </Cta>
          </Reveal>
        </div>
      </section>
    </>
  );
}
