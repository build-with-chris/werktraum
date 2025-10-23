import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Innenausbau() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground">
                🏗️ Kernleistung
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Innenausbau
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Von Gastronomie-Projekten bis zu Privaträumen. Hochwertige Lösungen für jeden Anspruch
              mit über 20 Jahren Erfahrung in München und Bayern.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Unsere Innenausbau-Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Maßgeschneiderte Lösungen für Ihre individuellen Anforderungen
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Küchenbau */}
              <Card className="bg-gray-800 border-2 border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🍽️</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Küchenbau München</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Maßgeschneiderte Küchen vom Profi. Von der Planung bis zur Installation –
                    alles aus einer Hand.
                  </p>
                </CardContent>
              </Card>

              {/* Möbelbau */}
              <Card className="bg-gray-800 border-2 border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🪑</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Möbelbau & Schreinerarbeiten</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Individuelle Wohnlösungen und maßgeschneiderte Möbel für Ihr Zuhause.
                  </p>
                </CardContent>
              </Card>

              {/* Gastronomie */}
              <Card className="bg-gray-800 border-2 border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🍷</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Gastronomie-Innenausbau</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lounges, Restaurants, VIP-Bereiche – wie die Bayern Lounge in der Allianz Arena.
                  </p>
                </CardContent>
              </Card>

              {/* Büroausbau */}
              <Card className="bg-gray-800 border-2 border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">💼</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Büroausbau & Praxiseinrichtung</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Funktionale Geschäftsräume und Praxen mit durchdachtem Design.
                  </p>
                </CardContent>
              </Card>

              {/* Privaträume */}
              <Card className="bg-gray-800 border-2 border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Private Wohnräume</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Gemütliche und funktionale Privaträume für Ihr Zuhause.
                  </p>
                </CardContent>
              </Card>

              {/* Projektleitung */}
              <Card className="bg-gray-800 border-2 border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Projektmanagement</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Komplette Projektsteuerung von der Planung bis zur Fertigstellung.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Unser Innenausbau-Prozess
              </h2>
              <p className="text-xl text-muted-foreground">
                Von der ersten Idee bis zur Schlüsselübergabe
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Beratung & Planung</h3>
                <p className="text-muted-foreground">
                  Ausführliche Beratung und detaillierte Planung Ihres Innenausbau-Projekts.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Design & Visualisierung</h3>
                <p className="text-muted-foreground">
                  3D-Visualisierung und CAD-Planung für perfekte Vorab-Darstellung.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Umsetzung & Fertigstellung</h3>
                <p className="text-muted-foreground">
                  Professionelle Umsetzung durch erfahrene Handwerker und termingerechte Fertigstellung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Bereit für Ihr Innenausbau-Projekt?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Lassen Sie uns gemeinsam Ihre Räume verwandeln.
              Kostenlose Beratung und transparente Planung von Anfang an.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg">
                <Link href="/kontakt">
                  Jetzt Beratung anfragen
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/referenzen">
                  Innenausbau-Projekte ansehen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}