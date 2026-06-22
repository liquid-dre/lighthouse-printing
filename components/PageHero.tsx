import Image from "next/image";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { Eyebrow } from "@/components/Cta";
import { blurProps } from "@/lib/blur";

type Variant = "photo" | "red" | "ink";

/**
 * One bold, dark hero shell shared across the Services / About / Contact pages,
 * so they read as a single system differentiated only by background:
 *   photo → the safari Big 5 photograph under an ink scrim
 *   red   → brand red colour-field
 *   ink   → deep near-black colour-field
 * The body of each page stays white-forward; the hero is the bold anchor.
 *
 * `title` is a ReactNode so each page can supply its own red/script accent.
 * `children` carries the supporting copy, CTAs or jump-nav beneath the heading.
 */
export default function PageHero({
  variant,
  eyebrow,
  title,
  children,
}: {
  variant: Variant;
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="brand-texture on-ink relative isolate overflow-hidden bg-ink">
      {variant === "photo" ? (
        <>
          <Image
            src="/images/savanna-big5.jpg"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            quality={80}
            {...blurProps("/images/savanna-big5.jpg")}
            className="-z-10 object-cover object-[center_68%]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/85 via-ink/65 to-ink/90"
          />
        </>
      ) : (
        <div
          aria-hidden="true"
          className={`absolute inset-0 -z-10 ${
            variant === "red" ? "bg-signal" : "bg-ink"
          }`}
        />
      )}

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-40 sm:px-6 sm:pb-28 sm:pt-52">
        <Reveal>
          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display mt-5 max-w-4xl text-5xl font-extrabold tracking-tight text-paper sm:text-7xl/[0.95]">
            {title}
          </h1>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
