import type { Metadata, Viewport } from "next";
import { Poppins, Caveat, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BeamLoader from "@/components/BeamLoader";
import RouteTransition from "@/components/RouteTransition";
import { site } from "@/lib/site";

// Brand-matched trio: Poppins (heavy geometric grotesque) carries the display
// headings to echo the corporate profile's headline letterforms; Caveat (brush
// pen) carries the playful safari/print punchlines; Schibsted Grotesk stays on
// body and UI. Latin only.
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Lighthouse Print | Zimbabwe's Print Production Powerhouse",
    template: "%s | Lighthouse Print",
  },
  description: site.description,
  openGraph: {
    siteName: site.name,
    title: "Lighthouse Print | Zimbabwe's Print Production Powerhouse",
    description: site.description,
    images: [{ url: "/images/hero-press.jpg", width: 2400, height: 1500 }],
    locale: "en_ZW",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f5f2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${caveat.variable} ${schibsted.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="skip-link rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper"
        >
          Skip to content
        </a>
        <BeamLoader />
        <Navbar />
        <main id="main" className="flex-1">
          <RouteTransition>{children}</RouteTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
