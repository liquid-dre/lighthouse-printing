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
          <h1 className="font-display mt-5 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-6xl/[1.03]">
            The fastest quote in print is one message away.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
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
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-1.5">
                <div className="rounded-[10px] bg-ink-soft p-7">
                  <h2 className="text-[11px] font-medium uppercase tracking-[0.3em] text-mist/80">
                    Call us
                  </h2>
                  <ul className="mt-5 grid gap-x-8 gap-y-1 sm:grid-cols-2">
                    {site.phones.map((p) => (
                      <li key={p.tel}>
                        <a
                          href={`tel:${p.tel}`}
                          className="inline-flex min-h-11 items-center text-[15px] font-medium text-paper/90 transition-colors duration-200 hover:text-white"
                        >
                          {p.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs leading-relaxed text-mist/80">
                    Mobile numbers reach the sales team directly; the 0242
                    landlines ring the Avondale head office.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-1.5">
                <div className="rounded-[10px] bg-ink-soft p-7">
                  <h2 className="text-[11px] font-medium uppercase tracking-[0.3em] text-mist/80">
                    Visit us
                  </h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-paper/90">
                    {site.address.street},
                    <br />
                    {site.address.suburb}, {site.address.city},{" "}
                    {site.address.country}
                  </p>
                  <a
                    href={site.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-5 text-sm font-medium text-paper hover:border-white/40"
                  >
                    Open in Google Maps
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-3.5 w-3.5">
                      <path d="M4 12 12 4M5.5 4H12v6.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-1.5">
                <div className="rounded-[10px] bg-ink-soft p-7">
                  <h2 className="text-[11px] font-medium uppercase tracking-[0.3em] text-mist/80">
                    Follow the work
                  </h2>
                  <ul className="mt-5 flex flex-wrap gap-3">
                    {site.socials.map((s) => (
                      <li key={s.href}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn inline-flex min-h-11 items-center rounded-full border border-white/12 bg-white/[0.03] px-5 text-sm font-medium text-paper/90 hover:border-white/35 hover:text-white"
                        >
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ---- map ---- */}
          <Reveal delay={120} clip>
            <div className="h-full min-h-[420px] overflow-hidden rounded-2xl border border-white/8">
              <iframe
                src={site.mapsEmbed}
                title="Map to Lighthouse Print, 142 King George Road, Avondale, Harare"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0 grayscale-[35%] contrast-[1.05]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- hours-style closing band ---- */}
      <section className="border-t border-white/8 bg-ink-deep">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
          <Reveal>
            <p className="max-w-md text-sm leading-relaxed text-mist">
              Bring artwork, or bring nothing but the idea; the design studio
              can take it from a sketch to press-ready.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Cta href={wa("Hi Lighthouse Print, I have an idea I'd like printed.")}>
              Get a quote on WhatsApp
            </Cta>
          </Reveal>
        </div>
      </section>
    </>
  );
}
