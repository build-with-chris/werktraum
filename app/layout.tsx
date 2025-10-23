import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimationObserver from "./components/AnimationObserver";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Innenausbau München | Schreinermeister Gerhard Trappendreher | Werktraum",
  description: "Innenausbau München ✓ Schreinermeister mit 20+ Jahren Erfahrung ✓ Küchenbau ✓ Möbelbau ✓ Gastronomie-Ausbau ✓ Von Allianz Arena bis Privatwohnung ✓ Kostenlose Beratung",
  keywords: "Innenausbau München, Schreinermeister München, Küchenbau München, Möbelbau Bayern, Gastronomie Innenausbau, Tinyhouse München, CAD-Planung, Vectorworks Schulung, Gerhard Trappendreher, Werktraum",
  authors: [{ name: "Gerhard Trappendreher" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://werktraum.de"
  },
  openGraph: {
    title: "Innenausbau München | Schreinermeister Gerhard Trappendreher",
    description: "Professioneller Innenausbau in München ✓ 20+ Jahre Erfahrung ✓ Von Allianz Arena Bayern Lounge bis Privatwohnungen ✓ Kostenlose Erstberatung",
    type: "website",
    locale: "de_DE",
    siteName: "Werktraum - Innenausbau München",
    url: "https://werktraum.de",
    images: [
      {
        url: "/Wohnräume.jpg",
        width: 1200,
        height: 630,
        alt: "Innenausbau München - Referenzprojekt Gerhard Trappendreher"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Innenausbau München | Schreinermeister Gerhard Trappendreher",
    description: "Professioneller Innenausbau in München ✓ 20+ Jahre Erfahrung ✓ Kostenlose Beratung",
    images: ["/Wohnräume.jpg"]
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
        >
          Zum Hauptinhalt springen
        </a>
        <Header />
        <main id="main-content" role="main">{children}</main>
        <Footer />
        <AnimationObserver />
      </body>
    </html>
  );
}
