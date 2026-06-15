import Link from "next/link";
import Cta from "@/components/Cta";
import { wa } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="relative mx-auto w-full max-w-6xl px-4 py-40 sm:px-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-mist/80">
          404, page not found
        </p>
        <h1 className="font-display mt-5 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-6xl/[1.03]">
          This page slipped past the beam.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
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
          className="mt-8 inline-flex min-h-11 items-center text-sm font-semibold text-signal-tint"
        >
          Back to the homepage
        </Link>
      </div>
    </section>
  );
}
