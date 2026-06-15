import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BeamLoader from "@/components/BeamLoader";
import { site } from "@/lib/site";

// Editorial pairing on a contrast axis: Bricolage Grotesque (characterful,
// ink-trapped) carries the oversized display headings; Schibsted Grotesk
// (neutral, even) carries body and UI. Two lean variable fonts, latin only.
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
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
      className={`${bricolage.variable} ${schibsted.variable} h-full antialiased`}
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
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
