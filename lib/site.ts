export const site = {
  name: "Lighthouse Print",
  tagline: "Zimbabwe's print production powerhouse",
  description:
    "Your one-stop innovative print solutions company. Litho, digital, design, vehicle branding and wide-format print from Harare, with over a decade of service excellence.",
  url: "https://www.lighthouseprint.co.zw",
  address: {
    street: "142 King George Road",
    suburb: "Avondale",
    city: "Harare",
    country: "Zimbabwe",
  },
  whatsappNumber: "263772603119",
  phones: [
    { label: "+263 772 603 119", tel: "+263772603119" },
    { label: "+263 774 105 429", tel: "+263774105429" },
    { label: "+263 242 307 323", tel: "+263242307323" },
    { label: "+263 242 307 326", tel: "+263242307326" },
    { label: "+263 242 307 255", tel: "+263242307255" },
    { label: "+263 242 339 612", tel: "+263242339612" },
  ],
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/lighthouseprintzim" },
    {
      label: "Instagram",
      href: "https://www.instagram.com/lighthouseprint_zim/",
    },
  ],
  group: [
    { label: "Lighthouse Technology", href: "https://www.ltg.co.zw" },
    {
      label: "Lighthouse Digital",
      href: "https://www.lighthousedigital.co.zw",
    },
    {
      label: "Lighthouse Document Solutions",
      href: "https://www.lighthousedocumentsolutions.co.zw",
    },
  ],
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=142+King+George+Road,+Avondale,+Harare,+Zimbabwe",
  mapsEmbed:
    "https://www.google.com/maps?q=142+King+George+Road,+Avondale,+Harare,+Zimbabwe&output=embed",
};

/** WhatsApp deep link, optionally pre-filled. */
export function wa(text?: string): string {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export const waQuote = (serviceName: string) =>
  wa(`Hi Lighthouse Print, I'd like a quote for ${serviceName}.`);

/** The 20 client badges sliced from the brand's own client wall. */
export const clients = [
  "UNICEF",
  "Bata",
  "British Council",
  "Alliance Française Zimbabwe",
  "FAO",
  "International Labour Organization",
  "fastjet",
  "UNDP",
  "ZIMRA",
  "PSI Zimbabwe",
  "USAID",
  "Old Mutual",
  "Oxfam",
  "BancABC",
  "RTG, Rainbow Tourism Group",
  "Plan International",
  "Steward Bank",
  "Netstar Ambulance Service",
  "WWF",
  "Tanganda Tea Company",
].map((name, i) => ({
  name,
  src: `/clients/client-${String(i + 1).padStart(2, "0")}.png`,
}));
