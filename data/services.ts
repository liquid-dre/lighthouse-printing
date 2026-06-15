export type GalleryImage = {
  src: string;
  alt: string;
};

export type Service = {
  slug: string;
  name: string;
  /** Short label used in nav and compact lists. */
  shortName: string;
  tagline: string;
  /** One-card summary used on the home highlights grid. */
  summary: string;
  /** Full description paragraphs for hub + detail pages. */
  description: string[];
  capabilities: string[];
  hero: GalleryImage;
  gallery: GalleryImage[];
  /** Small technical line shown under the service name. */
  spec: string;
};

export const services: Service[] = [
  {
    slug: "litho-print",
    name: "Litho Print",
    shortName: "Litho",
    tagline: "High-volume offset quality, anchored by a Heidelberg Speedmaster SM-74.",
    summary:
      "Offset printing for serious volume: brochures, books, catalogues, calendars and corporate stationery with exceptional image quality at low unit cost.",
    description: [
      "Lithographic printing provides excellent image quality at relatively low cost, and exceptional value on large-volume runs. That is why litho remains the preferred method for commercially printed books, brochures, catalogues, labels, magazines, posters and corporate stationery.",
      "Our litho line is anchored by a Heidelberg Speedmaster SM-74 (a press trusted by high-end printers worldwide), backed by in-house finishing: guillotining, folding, perfect binding and saddle stitching under one roof.",
    ],
    capabilities: [
      "Brochures, company profiles & annual reports",
      "Books, perfect binding & saddle stitch",
      "Calendars, flyers & A2 / A3 posters",
      "Corporate stationery & folders",
      "Labels, magazines & catalogues",
      "In-house guillotining, folding & finishing",
    ],
    hero: { src: "/images/hero-press.jpg", alt: "The Heidelberg Speedmaster SM-74 offset press on a clean studio stage" },
    gallery: [
      { src: "/images/litho-books.jpg", alt: "Perfect-bound books printed and finished by Lighthouse Print" },
      { src: "/images/litho-natfoods.jpg", alt: "National Foods corporate brochure spread with rich colour blocks" },
      { src: "/images/litho-brochure.jpg", alt: "Open brochure spread showing crisp offset image reproduction" },
      { src: "/images/litho-newsletter.jpg", alt: "Corporate newsletter cover and inner spread" },
      { src: "/images/litho-folder.jpg", alt: "Presentation folder with spot-colour cover" },
      { src: "/images/litho-notebooks.jpg", alt: "Branded corporate notebooks with foil-finished covers" },
    ],
    spec: "Heidelberg Speedmaster SM-74 · B2 sheet-fed offset",
  },
  {
    slug: "digital-print",
    name: "Digital Print",
    shortName: "Digital",
    tagline: "Short runs, unbelievable turnaround, full colour, powered by Xerox.",
    summary:
      "Fast-turnaround full-colour printing for short runs and variable data: business cards, leaflets and folders on a wide choice of stocks and finishes.",
    description: [
      "Digital printing gets your job done faster and more efficiently than ever. Full-colour output brings your business to life cost-effectively, at unbelievable turnaround times. Ideal for short runs, tight deadlines and variable-data work.",
      "As one of the top-performing Xerox distributors in Africa and a certified Managed Print Services (MPS) Next-Generation Distributor, we run production-class Xerox equipment supported by Xerox Certified Engineers from Lighthouse Technology in Harare.",
    ],
    capabilities: [
      "Business cards, flyers & leaflets",
      "Short-run brochures & booklets",
      "Variable data & personalised print",
      "Wide variety of paper stocks & finishes",
      "Binding, laminating & folding",
      "Same-week turnaround on most jobs",
    ],
    hero: { src: "/images/xerox-press.jpg", alt: "Xerox production digital press line" },
    gallery: [
      { src: "/images/digital-xerox-cards.png", alt: "Xerox-branded business cards printed digitally" },
      { src: "/images/digital-gold-cards.jpg", alt: "Gold-foiled business cards on a yellow background" },
      { src: "/images/digital-leaflet.jpg", alt: "Folded full-colour leaflet with geometric cover design" },
      { src: "/images/digital-folder.jpg", alt: "Digitally printed presentation folder mock-up" },
      { src: "/images/digital-calendar.jpg", alt: "Tent desk calendar printed in full colour" },
      { src: "/images/digital-lightbox.jpg", alt: "Backlit display print in a retail lightbox" },
    ],
    spec: "Xerox production presses · MPS Next-Gen Distributor",
  },
  {
    slug: "design-studio",
    name: "Design Studio",
    shortName: "Design",
    tagline: "Brand identities and artwork engineered for print, from first sketch to final proof.",
    summary:
      "Graphic design, brand identity and pre-press artwork, treated as one craft: what leaves the studio is already engineered for the press.",
    description: [
      "The quality of your company's design influences not only who buys from you, but what people think of your brand; even subtle changes to a logo or packaging change how a product is perceived.",
      "What makes our design service exceptional is the approach: every project is treated as unique, with a creative process that is simple, versatile and effective, with artwork engineered for print from day one, proofed and pre-press-ready.",
    ],
    capabilities: [
      "Logos & corporate identity packages",
      "Brand identity & style-guide development",
      "Rebranding & brand revision",
      "Start-up business packages",
      "Packaging & label design",
      "Artwork, proofing & pre-press",
    ],
    hero: { src: "/images/ds-prepress.jpg", alt: "A press proof on a dark studio stage with crop marks, a registration target and a CMYK colour bar under raking light" },
    gallery: [
      { src: "/images/ds-poster-hazel.jpg", alt: "Bold green promotional poster designed for Hazel Knitwear" },
      { src: "/images/ds-poster-dog.jpg", alt: "Pet adoption poster with playful typography" },
      { src: "/images/ds-logo-hotpot.jpg", alt: "HotPot logotype designed by the studio" },
      { src: "/images/ds-label-lols.jpg", alt: "Illustrated chilli sauce label design" },
      { src: "/images/digital-leaflet.jpg", alt: "Leaflet layout design with geometric cover" },
      { src: "/images/litho-book-cover.jpg", alt: "Book cover design with dramatic landscape photography" },
    ],
    spec: "Identity, artwork & pre-press",
  },
  {
    slug: "vehicle-branding",
    name: "Vehicle Branding",
    shortName: "Vehicles",
    tagline: "Your vehicle is a moving billboard: wrap it and take the brand everywhere it goes.",
    summary:
      "Full and partial wraps for cars, vans, buses and fleets. The single best advertising investment for any business running commercial vehicles.",
    description: [
      "If your company operates commercial vehicles, top-quality vehicle graphics are the single best advertising decision you can make: unbeatable consumer reach in your service area and brand exposure that compounds every kilometre.",
      "From a single sedan to a national bus fleet, we design, print and apply full and partial wraps that survive Zimbabwean roads and sun, colour-managed to keep every panel consistent across the whole fleet.",
    ],
    capabilities: [
      "Full & partial vehicle wraps",
      "Fleet branding & colour consistency",
      "Buses, trucks, vans & sedans",
      "Cut vinyl, decals & one-way vision",
      "Design, print & professional application",
      "Durable laminated finishes",
    ],
    hero: { src: "/images/vehicle-hevoi.jpg", alt: "Sedan in a vivid orange HEVOI FM full wrap" },
    gallery: [
      { src: "/images/bus-fifa.jpg", alt: "Coach bus in a full green tournament livery wrap" },
      { src: "/images/vehicle-rav4.jpg", alt: "SUV with two-tone green campaign wrap" },
      { src: "/images/vehicle-kuvarash.jpg", alt: "Hatchback with teal brand decals" },
      { src: "/images/vehicle-xtrail.jpg", alt: "Black SUV with cut-vinyl fleet branding" },
      { src: "/images/vehicle-honda.jpg", alt: "Wrapped service vehicle photographed after application" },
      { src: "/images/bus-red.jpg", alt: "Red intercity bus with full-body advertising wrap" },
    ],
    spec: "Wraps, fleets & cut vinyl",
  },
  {
    slug: "wide-format-print",
    name: "Wide-Format Print",
    shortName: "Wide-Format",
    tagline: "Banners, signage and billboards that make the brand impossible to miss.",
    summary:
      "PVC and vinyl prints, pull-up banners, teardrops, gazebos, wallpaper, canvas and billboard-scale signage, built for events, storefronts and roadsides.",
    description: [
      "Banners and signage draw attention to the best of your company: at trade shows, road shows, exhibitions, storefronts and roadsides. Wide-format print puts your brand at architectural scale.",
      "Pull-up banners remain one of the hardest-working formats: highly visible, genuinely portable, and protected by a recoil cartridge system that keeps the banner in perfect condition through years of setup and teardown. We print them alongside teardrops, gazebos, wallpaper, canvas and full billboard skins.",
    ],
    capabilities: [
      "PVC / vinyl prints & banners",
      "Pull-up banners & teardrop flags",
      "Gazebos & event branding",
      "Billboards & building signage",
      "Wallpaper & canvas printing",
      "Lightboxes & retail displays",
    ],
    hero: { src: "/images/wf-fastjet-totems.jpg", alt: "Row of fastjet check-in totem displays printed wide-format" },
    gallery: [
      { src: "/images/wf-emirates.jpg", alt: "Emirates building signage installed on a storefront" },
      { src: "/images/wf-event-boards.jpg", alt: "Event display boards lined up across a sports field" },
      { src: "/images/wf-bank-banner.jpg", alt: "Standard Bank A-frame banner at an outdoor event" },
      { src: "/images/wf-billboard.jpg", alt: "Veer-Freight roadside billboard" },
      { src: "/images/wf-monument-sign.jpg", alt: "Monument signage for a logistics company" },
      { src: "/images/wf-rollups.jpg", alt: "Set of printed pull-up banners for a hospitality brand" },
    ],
    spec: "Grand-format, events & signage",
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
