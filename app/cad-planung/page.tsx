import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function CADPlanung() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground">
                📐 Kernleistung
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground">
              CAD-Planung
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Präzise 3D-Visualisierungen und professionelle Vectorworks-Schulungen für
              perfekte Ergebnisse in jeder Dimension.
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
                Unsere CAD-Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Von der ersten Skizze bis zur ausführungsreifen Zeichnung
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 3D-Visualisierung */}
              <Card className="bg-gray-800 border-2 border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">3D-Visualisierung</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Realistische 3D-Darstellungen Ihrer Projekte für eine perfekte Vorab-Visualisierung.
                  </p>
                </CardContent>
              </Card>

              {/* Vectorworks Planung */}
              <Card className="bg-gray-800 border-2 border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Vectorworks Expertise</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Professionelle CAD-Planung mit Vectorworks für höchste Präzision und Detailgenauigkeit.
                  </p>
                </CardContent>
              </Card>

              {/* Technische Zeichnungen */}
              <Card className="bg-gray-800 border-2 border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">📏</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Technische Zeichnungen</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Detaillierte Werkstatt- und Ausführungszeichnungen für eine reibungslose Umsetzung.
                  </p>
                </CardContent>
              </Card>

              {/* Schulungen */}
              <Card className="bg-gray-800 border-2 border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Vectorworks Schulungen</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Professionelle Schulungen und Workshops für Vectorworks-Software.
                  </p>
                </CardContent>
              </Card>

              {/* Planungsberatung */}
              <Card className="bg-gray-800 border-2 border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Planungsberatung</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Beratung bei komplexen Planungsaufgaben und technischen Herausforderungen.
                  </p>
                </CardContent>
              </Card>

              {/* Rendering */}
              <Card className="bg-gray-800 border-2 border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Photorealistisches Rendering</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Hochwertige Renderings für Präsentationen und Marketingzwecke.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Software & Tools Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Software & Expertise
              </h2>
              <p className="text-xl text-muted-foreground">
                Professionelle Tools für präzise Ergebnisse
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground font-bold">VW</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Vectorworks</h3>
                <p className="text-muted-foreground">
                  Professionelle CAD-Software für Architektur und Innenausbau mit
                  jahrelanger Expertise und Schulungserfahrung.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground font-bold">3D</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">3D-Modellierung</h3>
                <p className="text-muted-foreground">
                  Detaillierte 3D-Modelle für realistische Darstellungen und
                  präzise Planungsgrundlagen für jedes Projekt.
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
              Bereit für präzise Planung?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Lassen Sie uns Ihre Ideen in detaillierte Pläne verwandeln.
              Von der ersten Skizze bis zur ausführungsreifen Zeichnung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg">
                <Link href="/kontakt">
                  CAD-Planung anfragen
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/referenzen">
                  CAD-Projekte ansehen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}