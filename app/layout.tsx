import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BeamLoader from "@/components/BeamLoader";
import { site } from "@/lib/site";

// Single family, committed weight contrast: Bricolage's optical sizing
// covers display and body, and one font file set keeps mobile-data
// payloads lean.
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
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
  themeColor: "#0b0d16",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="skip-link rounded-full bg-beam px-5 py-3 text-sm font-semibold text-ink"
        >
          Skip to content
        </a>
        <BeamLoader />
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
