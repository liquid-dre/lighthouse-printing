"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Subtle per-route fade-up. Keying the wrapper on the pathname remounts the
 * page subtree on navigation, replaying the `.route-fade` animation (handled
 * in globals.css, reduced-motion aware). Transform/opacity only.
 */
export default function RouteTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="route-fade">
      {children}
    </div>
  );
}
