"use client";

import { useEffect, useState } from "react";

/**
 * "The Beam", plays on every full page load (no sessionStorage gating,
 * by explicit client requirement). Decorative only: aria-hidden, skippable
 * by click / tap / any key, and the page renders underneath throughout.
 *
 * Sequence: wordmark fades in → line-art motifs from the print world draw
 * in → key shapes ink up in brand red and lamp gold → the lamp ignites and
 * a rotating beam wipes the loader away (conic-gradient mask in CSS).
 * prefers-reduced-motion: static lit scene, quick opacity fade.
 */
export default function BeamLoader() {
  const [phase, setPhase] = useState<"playing" | "exiting" | "skipped" | "done">(
    "playing",
  );

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Dev-only inspection hook: ?loader-hold keeps the loader on screen.
    if (
      process.env.NODE_ENV === "development" &&
      new URLSearchParams(window.location.search).has("loader-hold")
    ) {
      return;
    }

    let settled = false;
    const skip = () => {
      if (settled) return;
      settled = true;
      setPhase("skipped");
      setTimeout(() => setPhase("done"), 320);
    };
    window.addEventListener("pointerdown", skip);
    window.addEventListener("keydown", skip);

    const exitAt = reduced ? 1300 : 2150;
    const exitTimer = setTimeout(() => {
      if (settled) return;
      settled = true;
      setPhase("exiting");
    }, exitAt);
    const doneTimer = setTimeout(() => setPhase("done"), exitAt + 1050);

    return () => {
      window.removeEventListener("pointerdown", skip);
      window.removeEventListener("keydown", skip);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      className={`beam-loader pointer-events-none select-none ${
        phase === "exiting" ? "is-exiting" : ""
      } ${phase === "skipped" ? "is-skipped" : ""}`}
    >
      <svg
        viewBox="0 0 720 480"
        className="h-full max-h-[88svh] w-full max-w-5xl px-6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* ---- rotating beam (exit) ---- */}
        <g className="beam-wedge">
          <polygon
            points="360,132 1300,30 1300,260"
            fill="url(#beamGrad)"
            opacity="0.85"
          />
        </g>

        {/* ---- central lighthouse ---- */}
        <g stroke="#F7F5F0" strokeWidth="1.6">
          {/* tower */}
          <path className="motif" style={vars(620, 0.4)} d="M341 258 L348 156 H372 L379 258 Z" />
          {/* bands */}
          <path className="motif" style={vars(200, 0.65)} d="M345.5 192 H374.5 M343.5 226 H376.5" />
          {/* gallery + lamp room */}
          <path className="motif" style={vars(300, 0.55)} d="M344 156 H376 M348 156 V143 H372 V156" />
          <path className="motif" style={vars(220, 0.7)} d="M350 143 V124 H370 V143" />
          {/* roof + finial */}
          <path className="motif" style={vars(160, 0.8)} d="M347 124 L360 110 L373 124 Z M360 110 V103" />
          {/* base rocks */}
          <path className="motif" style={vars(360, 0.6)} d="M312 258 H408 M322 270 C338 262 352 274 366 268 C382 262 392 272 400 268" />
          {/* lamp (inks up gold) */}
          <circle className="ink-fill" style={dvar(1.5)} cx="360" cy="133" r="6.5" fill="#FFC24B" stroke="none" />
          <circle className="lamp-glow" cx="360" cy="133" r="13" fill="#FFC24B" opacity="0.35" stroke="none" />
          <circle className="lamp-glow" cx="360" cy="133" r="22" fill="#FFC24B" opacity="0.14" stroke="none" />
        </g>

        {/* ---- left cluster: press rollers, paper, ink drops ---- */}
        <g stroke="#F7F5F0" strokeWidth="1.4">
          <circle className="motif" style={vars(190, 0.5)} cx="120" cy="150" r="26" />
          <circle className="motif" style={vars(140, 0.62)} cx="172" cy="172" r="18" />
          <circle className="motif" style={vars(120, 0.74)} cx="118" cy="204" r="14" />
          {/* sheet running through rollers */}
          <path className="motif" style={vars(260, 0.85)} d="M62 232 C 110 218 160 236 210 212" />
          {/* paper sheet with fold */}
          <path className="motif" style={vars(300, 0.95)} d="M84 300 H156 V368 H84 Z M132 300 L156 322" />
          {/* ink droplets (ink up red) */}
          <path className="motif" style={vars(80, 1.05)} d="M196 282 c8 12 12 18 12 25 a12 12 0 1 1 -24 0 c0 -7 4 -13 12 -25 Z" />
          <path className="ink-fill" style={dvar(1.62)} d="M196 287 c6 9 9 14 9 20 a9 9 0 1 1 -18 0 c0 -6 3 -11 9 -20 Z" fill="#E01C24" stroke="none" />
          <path className="motif" style={vars(60, 1.15)} d="M226 330 c5 8 8 12 8 17 a8 8 0 1 1 -16 0 c0 -5 3 -9 8 -17 Z" />
        </g>

        {/* ---- right cluster: CMYK marks, crop marks, halftone, banner, van ---- */}
        <g stroke="#F7F5F0" strokeWidth="1.4">
          {/* registration marks */}
          <g className="motif" style={vars(420, 0.55)}>
            <circle cx="560" cy="140" r="11" />
            <path d="M560 122 V158 M542 140 H578" />
          </g>
          <g className="motif" style={vars(300, 0.7)}>
            <circle cx="610" cy="170" r="8" />
            <path d="M610 157 V183 M597 170 H623" />
          </g>
          {/* CMYK chips (ink up) */}
          <rect className="motif" style={vars(120, 0.8)} x="540" y="196" width="14" height="14" rx="2" />
          <rect className="motif" style={vars(120, 0.86)} x="560" y="196" width="14" height="14" rx="2" />
          <rect className="motif" style={vars(120, 0.92)} x="580" y="196" width="14" height="14" rx="2" />
          <rect className="motif" style={vars(120, 0.98)} x="600" y="196" width="14" height="14" rx="2" />
          <rect className="ink-fill" style={dvar(1.55)} x="542" y="198" width="10" height="10" rx="1.5" fill="#2BB3C0" stroke="none" />
          <rect className="ink-fill" style={dvar(1.62)} x="562" y="198" width="10" height="10" rx="1.5" fill="#E0489A" stroke="none" />
          <rect className="ink-fill" style={dvar(1.69)} x="582" y="198" width="10" height="10" rx="1.5" fill="#FFC24B" stroke="none" />
          <rect className="ink-fill" style={dvar(1.76)} x="602" y="198" width="10" height="10" rx="1.5" fill="#F7F5F0" stroke="none" />
          {/* crop marks */}
          <path className="motif" style={vars(160, 1.0)} d="M524 240 h16 M532 232 v16 M636 240 h16 M644 232 v16" />
          {/* halftone dot arcs */}
          <g className="ink-fill" style={dvar(1.7)} fill="#F7F5F0" stroke="none" opacity="0.7">
            <circle cx="548" cy="282" r="2.4" /><circle cx="566" cy="276" r="2" />
            <circle cx="584" cy="272" r="1.7" /><circle cx="602" cy="270" r="1.4" />
            <circle cx="620" cy="270" r="1.1" /><circle cx="556" cy="298" r="1.9" />
            <circle cx="574" cy="292" r="1.6" /><circle cx="592" cy="288" r="1.3" />
            <circle cx="610" cy="286" r="1" />
          </g>
          {/* banner roll */}
          <path className="motif" style={vars(300, 1.1)} d="M520 330 H600 M520 330 a7 7 0 1 0 0 14 H596 M600 330 a7 7 0 1 1 0 14 M560 344 V386 M544 386 H576" />
          {/* wrapped van silhouette */}
          <g className="motif" style={vars(420, 1.2)}>
            <path d="M620 372 h-44 a8 8 0 0 1 -8 -8 v-18 a8 8 0 0 1 8 -8 h30 l16 12 h14 a6 6 0 0 1 6 6 v8 a8 8 0 0 1 -8 8 h-2" />
            <circle cx="590" cy="372" r="6.5" />
            <circle cx="628" cy="372" r="6.5" />
            <path d="M580 350 c10 6 22 6 34 0" />
          </g>
          <path className="ink-fill" style={dvar(1.82)} d="M583 351 c9 5 19 5 28 0 l-4 -3 h-20 Z" fill="#E01C24" stroke="none" />
        </g>

        {/* ---- wordmark + tagline (clear readable zone) ---- */}
        <g textAnchor="middle">
          <text
            className="wordmark font-display"
            x="360"
            y="430"
            fill="#FFFFFF"
            fontSize="30"
            fontWeight="700"
            letterSpacing="6"
          >
            LIGHTHOUSE <tspan fill="#E01C24">PRINT</tspan>
          </text>
          <text
            className="tagline"
            x="360"
            y="458"
            fill="#FFFFFF"
            fillOpacity="0.85"
            fontSize="11"
            letterSpacing="3.2"
          >
            ZIMBABWE&apos;S PRINT PRODUCTION POWERHOUSE
          </text>
        </g>

        <defs>
          <linearGradient id="beamGrad" x1="360" y1="132" x2="1300" y2="145" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#FFC24B" stopOpacity="0.9" />
            <stop offset="0.55" stopColor="#FFC24B" stopOpacity="0.32" />
            <stop offset="1" stopColor="#FFC24B" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/** stroke-draw vars: path length + start delay */
function vars(len: number, delay: number): React.CSSProperties {
  return { "--len": len, "--d": `${delay}s` } as React.CSSProperties;
}

/** ink-up delay only */
function dvar(delay: number): React.CSSProperties {
  return { "--d": `${delay}s` } as React.CSSProperties;
}
