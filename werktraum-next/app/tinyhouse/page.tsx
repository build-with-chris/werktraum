import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Tinyhouse() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground">
                🏠 Kernleistung
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Tinyhouse-Projekte
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Clevere Raumkonzepte für minimalistisches Leben mit maximaler
              Funktionalität und nachhaltigen Materialien.
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
                Tinyhouse-Expertise
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Durchdachte Lösungen für das Leben auf kleinem Raum
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Planung & Design */}
              <Card className="bg-gray-800 border-2 border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">📐</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Tinyhouse-Planung</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Maßgeschneiderte Grundrissplanung für optimale Raumnutzung auf kleinstem Raum.
                  </p>
                </CardContent>
              </Card>

              {/* Innenausbau */}
              <Card className="bg-gray-800 border-2 border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🔨</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Tinyhouse-Innenausbau</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Kompletter Innenausbau mit multifunktionalen Möbeln und cleveren Stauraumlösungen.
                  </p>
                </CardContent>
              </Card>

              {/* Nachhaltige Materialien */}
              <Card className="bg-gray-800 border-2 border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Nachhaltige Materialien</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ökologische Baustoffe und ressourcenschonende Bauweise für umweltbewusstes Wohnen.
                  </p>
                </CardContent>
              </Card>

              {/* Multifunktionale Möbel */}
              <Card className="bg-gray-800 border-2 border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🪑</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Smart Furniture</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Multifunktionale Möbel, die sich dem begrenzten Raum anpassen und mehrere Zwecke erfüllen.
                  </p>
                </CardContent>
              </Card>

              {/* Mobile Lösungen */}
              <Card className="bg-gray-800 border-2 border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🚛</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Mobile Konzepte</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Anhänger-basierte Tinyhouses für maximale Flexibilität und Mobilität.
                  </p>
                </CardContent>
              </Card>

              {/* Beratung */}
              <Card className="bg-gray-800 border-2 border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Tinyhouse-Beratung</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Umfassende Beratung zu rechtlichen, technischen und praktischen Aspekten.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Tinyhouse-Philosophie
              </h2>
              <p className="text-xl text-muted-foreground">
                Weniger ist mehr – maximale Lebensqualität auf minimalem Raum
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Funktionalität</h3>
                <p className="text-muted-foreground">
                  Jeder Quadratzentimeter wird optimal genutzt durch durchdachte Planung
                  und multifunktionale Elemente.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Nachhaltigkeit</h3>
                <p className="text-muted-foreground">
                  Ökologische Materialien und energieeffiziente Lösungen für
                  umweltbewusstes Wohnen.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Individualität</h3>
                <p className="text-muted-foreground">
                  Jedes Tinyhouse wird individuell an die Bedürfnisse und
                  Wünsche der Bewohner angepasst.
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
              Bereit für Ihr Tinyhouse-Abenteuer?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Lassen Sie uns gemeinsam Ihr perfektes Tinyhouse entwickeln.
              Von der ersten Idee bis zum bezugsfertigen Zuhause.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg">
                <Link href="/kontakt">
                  Tinyhouse-Beratung starten
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/referenzen">
                  Tinyhouse-Projekte ansehen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}