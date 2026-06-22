import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";
import { blurProps } from "@/lib/blur";

/**
 * Equal-height service card on the light theme: a white surface on paper
 * with a hairline and soft shadow. The image is flat (a gentle hover
 * scale only), the description is line-clamped, and the footer row is
 * pinned to the bottom with mt-auto so every card aligns.
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
      className="lift group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-[0_10px_40px_-24px_rgba(17,17,19,0.35)] hover:border-ink/25"
    >
      <div className="overflow-hidden">
        <Image
          src={service.hero.src}
          alt={service.hero.alt}
          width={1200}
          height={750}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          preload={priorityImage}
          {...blurProps(service.hero.src)}
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-(--ease-out-strong) group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col px-6 pb-6 pt-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          {service.spec}
        </p>
        <h3 className="font-display mt-2 text-xl font-bold tracking-tight text-ink">
          {service.name}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
          {service.summary}
        </p>
        <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-ink">
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
