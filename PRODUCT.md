# Product

## Register

Brand. This is a marketing site; the design is the product. Every surface
(home, services, service details, about, contact) is a brand surface whose
job is to convert visitors into WhatsApp quote conversations.

## Users & Purpose

- Marketing and procurement people at NGOs, embassies, educational
  institutions, government departments and corporates in Zimbabwe, plus
  SME owners. Often on mobile data in Harare.
- Job to be done: confirm Lighthouse Print can handle their job (litho,
  digital, design, vehicle wraps, wide-format), then get a quote with the
  least friction possible (WhatsApp first, phone second).
- Emotions to evoke: confidence in industrial capacity, pride of
  craft, cinematic drama (the lighthouse beam), zero doubt about
  legitimacy.

## Brand personality

Powerhouse, cinematic, precise. The brand world is night-ink darkness cut
by a warm lighthouse beam, with the brand's own red (#E01C24, extracted
from the logo) as the signal color. Print-craft motifs (CMYK marks,
halftone, registration, paper) are the decorative language.

## Anti-references

- Generic SaaS landing-page grammar (eyebrow on every section, identical
  icon cards, hero metrics).
- Fake trust signals. Every claim on this site is real (Xerox certified
  partner, MPS Next-Gen Distributor, Heidelberg SM-74, real client wall
  from the brand's own materials). Nothing invented.
- Template print-shop sites with stocky clip-art.

## Accessibility

WCAG AA contrast minimum everywhere, full keyboard access with visible
focus, 44px touch targets, reduced-motion fallbacks for the loader and all
scroll/marquee motion. Mobile-data performance is a hard constraint.

## Hard constraints

- All CTAs do a real thing: wa.me/263772603119 (optionally prefilled),
  tel: links, real Google Maps. No non-functional chrome, no contact form
  (no handler exists; no public email exists in brand materials).
- "The Beam" loader plays on every full page load by explicit client
  requirement (no sessionStorage gating).
- /data/services.ts is the single source of truth for the five services.
