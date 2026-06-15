import Image from "next/image";
import Link from "next/link";
import { site, wa } from "@/lib/site";
import { services } from "@/data/services";

export default function Footer() {
  return (
    <footer className="on-ink border-t border-ink/10 bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Lighthouse Print, home">
              <Image
                src="/brand/mark.png"
                alt=""
                aria-hidden="true"
                width={374}
                height={348}
                className="h-8 w-auto"
              />
              <span className="font-display text-lg font-bold tracking-tight text-paper">
                Lighthouse<span className="text-signal"> Print</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/65">
              Zimbabwe&rsquo;s print production powerhouse. Over a decade of
              one-stop innovative print solutions from Avondale, Harare.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-paper/55">
              Xerox certified business partner and certified MPS Next-Generation
              Distributor. Xerox equipment is supported by LTG Xerox Certified
              Engineers in Harare.
            </p>
            <div className="mt-6 flex gap-3">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-paper/65 hover:border-white/30 hover:text-paper"
                  aria-label={`Lighthouse Print on ${s.label}`}
                >
                  {s.label === "Facebook" ? (
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4.5 w-4.5">
                      <path d="M13.5 21v-7h2.4l.5-3h-2.9V9.1c0-.9.3-1.6 1.7-1.6h1.3V4.8c-.6-.1-1.5-.2-2.4-.2-2.4 0-4 1.5-4 4.1V11H7.5v3h2.6v7h3.4Z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="h-4.5 w-4.5">
                      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                      <circle cx="12" cy="12" r="3.8" />
                      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Services">
            <h2 className="text-[11px] font-medium uppercase tracking-[0.3em] text-paper/55">
              Services
            </h2>
            <ul className="mt-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-flex min-h-11 items-center text-sm text-paper/65 transition-colors duration-200 hover:text-paper"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Lighthouse Group">
            <h2 className="text-[11px] font-medium uppercase tracking-[0.3em] text-paper/55">
              The Group
            </h2>
            <ul className="mt-3">
              {site.group.map((g) => (
                <li key={g.href}>
                  <a
                    href={g.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center text-sm text-paper/65 transition-colors duration-200 hover:text-paper"
                  >
                    {g.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/about"
                  className="inline-flex min-h-11 items-center text-sm text-paper/65 transition-colors duration-200 hover:text-paper"
                >
                  About Lighthouse Print
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-[11px] font-medium uppercase tracking-[0.3em] text-paper/55">
              Head office
            </h2>
            <a
              href={site.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block py-2 text-sm leading-relaxed text-paper/65 transition-colors duration-200 hover:text-paper"
            >
              {site.address.street},
              <br />
              {site.address.suburb}, {site.address.city},
              <br />
              {site.address.country}
            </a>
            <ul className="mt-2">
              {site.phones.slice(0, 2).map((p) => (
                <li key={p.tel}>
                  <a
                    href={`tel:${p.tel}`}
                    className="inline-flex min-h-11 items-center text-sm text-paper/65 transition-colors duration-200 hover:text-paper"
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={wa()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-5 inline-flex min-h-11 items-center rounded-full border border-white/15 px-5 text-sm font-medium text-paper hover:border-white/40"
            >
              WhatsApp us
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/8 pt-6 text-xs text-paper/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Lighthouse Print. Part of the
            Lighthouse Group: Print, Technology and Digital.
          </p>
          <p>One of the top-performing Xerox distributors in Africa.</p>
        </div>
      </div>
    </footer>
  );
}
