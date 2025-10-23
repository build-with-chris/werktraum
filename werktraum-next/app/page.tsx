import Link from 'next/link';
import Image from 'next/image';
import { Feature275 } from '@/components/feature275';

// Structured Data für SEO
const innenausbauSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Innenausbau München",
  "description": "Professioneller Innenausbau in München und Bayern vom erfahrenen Schreinermeister. Küchenbau, Möbelbau, Gastronomie-Ausbau und individuelle Wohnlösungen.",
  "provider": {
    "@type": "Person",
    "name": "Gerhard Trappendreher",
    "jobTitle": "Schreinermeister",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Zehntfeldstr. 183",
      "addressLocality": "München",
      "postalCode": "81825",
      "addressCountry": "DE"
    }
  },
  "areaServed": ["München", "Bayern"],
  "serviceType": ["Innenausbau", "Küchenbau", "Möbelbau", "Schreinerarbeiten"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Innenausbau-Leistungen",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Küchenbau München"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Möbelbau & Schreinerarbeiten"
        }
      }
    ]
  }
};

export default function Home() {
  return (
    <>
      {/* Structured Data für SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(innenausbauSchema),
        }}
      />

      {/* Hero with Features Section */}
      <Feature275 />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Bereit für Ihr Projekt?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Lassen Sie uns gemeinsam Ihre Ideen verwirklichen.
              Kostenlose Beratung und transparente Planung von Anfang an.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-5 text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Jetzt Beratungstermin vereinbaren
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}