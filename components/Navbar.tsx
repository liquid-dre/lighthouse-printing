"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { wa } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const close = () => setOpen(false);

  // Modal behavior while the overlay is open: lock scroll, make the rest
  // of the document inert, move focus in, trap Tab, restore on close.
  useEffect(() => {
    if (!open) return;

    const toggle = toggleRef.current;
    document.body.style.overflow = "hidden";
    const outside = document.querySelectorAll<HTMLElement>("main, footer");
    outside.forEach((el) => el.setAttribute("inert", ""));

    const menu = menuRef.current;
    const focusables = () =>
      Array.from(
        menu?.querySelectorAll<HTMLElement>("a[href], button") ?? [],
      ).filter((el) => el.tabIndex !== -1);
    focusables()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      const all = toggle ? [...items, toggle] : items;
      if (all.length === 0) return;
      const first = all[0];
      const last = all[all.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      } else if (active && !all.includes(active)) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      outside.forEach((el) => el.removeAttribute("inert"));
      window.removeEventListener("keydown", onKey);
      toggle?.focus();
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-4 mt-4 flex max-w-6xl items-center justify-between gap-3 rounded-full border border-white/10 bg-ink/75 py-2 pl-5 pr-2 backdrop-blur-xl sm:mx-6 lg:mx-auto">
        <Link
          href="/"
          className="flex min-h-11 items-center gap-2.5"
          aria-label="Lighthouse Print, home"
        >
          <Image
            src="/brand/mark.png"
            alt=""
            aria-hidden="true"
            width={374}
            height={348}
            className="h-7 w-auto"
          />
          <span className="font-display text-[17px] font-bold tracking-tight text-paper">
            Lighthouse<span className="text-signal-tint"> Print</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`btn inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium ${
                  active
                    ? "bg-white/10 text-white"
                    : "text-mist hover:bg-white/5 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={wa("Hi Lighthouse Print, I'd like a quote.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn hidden min-h-11 items-center rounded-full bg-signal px-5 text-sm font-semibold text-white hover:bg-signal-deep sm:inline-flex"
          >
            Get a quote
          </a>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="btn relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 md:hidden"
          >
            <span
              aria-hidden="true"
              className={`absolute h-px w-4.5 bg-paper transition-transform duration-300 ease-(--ease-swing) ${
                open ? "rotate-45" : "-translate-y-[3.5px]"
              }`}
            />
            <span
              aria-hidden="true"
              className={`absolute h-px w-4.5 bg-paper transition-transform duration-300 ease-(--ease-swing) ${
                open ? "-rotate-45" : "translate-y-[3.5px]"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Full-screen mobile overlay with staggered link reveal */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`fixed inset-0 -z-10 bg-ink-deep transition-opacity duration-[400ms] ease-(--ease-swing) md:hidden ${
          open ? "menu-open opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile"
          className="flex h-full flex-col justify-center gap-2 px-8"
        >
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              tabIndex={open ? 0 : -1}
              onClick={close}
              className="menu-link font-display py-2 text-4xl font-bold tracking-tight text-paper"
              style={{ "--stagger": `${100 + i * 50}ms` } as React.CSSProperties}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={wa("Hi Lighthouse Print, I'd like a quote.")}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
            onClick={close}
            className="menu-link mt-6 inline-flex w-fit min-h-12 items-center rounded-full bg-signal px-7 py-3 text-base font-semibold text-white"
            style={{ "--stagger": "320ms" } as React.CSSProperties}
          >
            Get a quote on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
