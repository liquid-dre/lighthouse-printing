import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";

/**
 * Equal-height service card: the grid stretches every card, the
 * description is line-clamped, and the footer row is pinned to the
 * bottom with mt-auto so all five cards align.
 */
export default function ServiceCard({
  service,
  priorityImage = false,
}: {
  service: Service;
  priorityImage?: boolean;
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="lift group flex h-full flex-col rounded-2xl border border-white/8 bg-white/[0.03] p-1.5 hover:border-white/20"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-[10px]">
        <Image
          src={service.hero.src}
          alt={service.hero.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          preload={priorityImage}
          className="object-cover transition-transform duration-700 ease-(--ease-out-strong) group-hover:scale-[1.04]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"
        />
      </div>
      <div className="flex flex-1 flex-col px-5 pb-5 pt-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-beam">
          {service.spec}
        </p>
        <h3 className="font-display mt-2 text-xl font-bold tracking-tight text-paper">
          {service.name}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-mist">
          {service.summary}
        </p>
        <span className="mt-auto flex items-center gap-2 pt-5 text-sm font-semibold text-signal-tint">
          Explore {service.shortName}
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-3.5 w-3.5 transition-transform duration-300 ease-(--ease-out-strong) group-hover:translate-x-1"
          >
            <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
