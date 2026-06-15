import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BeamLoader from "@/components/BeamLoader";
import { site } from "@/lib/site";

// One lean variable family. Schibsted Grotesk is a sharp editorial
// grotesque: tight and confident at display sizes, even and legible as
// body. A single font set keeps mobile-data payloads minimal.
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
    <html lang="en" className={`${schibsted.variable} h-full antialiased`}>
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
