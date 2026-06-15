import Link from "next/link";
import Cta from "@/components/Cta";
import { wa } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="relative mx-auto w-full max-w-6xl px-4 py-40 sm:px-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted">
          404, page not found
        </p>
        <h1 className="font-display mt-5 max-w-3xl text-5xl font-extrabold tracking-tight text-ink sm:text-7xl/[0.95]">
          This page slipped past the <span className="text-signal">beam.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          The address doesn&rsquo;t match anything we print. The lighthouse
          still knows the way back.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Cta href="/services">Explore our services</Cta>
          <Cta href={wa("Hi Lighthouse Print, I'd like a quote.")} variant="ghost">
            Get a quote on WhatsApp
          </Cta>
        </div>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-11 items-center text-sm font-semibold text-ink underline-offset-4 hover:underline"
        >
          Back to the homepage
        </Link>
      </div>
    </section>
  );
}
