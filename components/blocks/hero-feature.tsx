import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HeroFeature() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="container relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">
              20+ Jahre Erfahrung
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Werktraum
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Vom Plan zur Perfektion – Ihr Raum, unsere Expertise. Professioneller Innenausbau,
              CAD-Planung und maßgeschneiderter Möbelbau in München und Bayern.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/kontakt">
                  Projekt starten
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/referenzen">
                  Referenzen ansehen
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">
              Unsere Expertise
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Von der ersten Idee bis zur Schlüsselübergabe
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <svg
                      className="h-6 w-6 text-primary-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                  </div>
                  <dt className="mt-4 font-semibold text-foreground">Innenausbau</dt>
                  <dd className="mt-2 leading-7 text-muted-foreground">
                    Von Gastronomie-Projekten bis zu Privaträumen. Hochwertige Lösungen für jeden Anspruch.
                  </dd>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 bg-primary rounded-full" />
                      Küchenbau & Möbeldesign
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 bg-primary rounded-full" />
                      Büro- & Praxisausbau
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 bg-primary rounded-full" />
                      Gastronomie-Einrichtung
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <svg
                      className="h-6 w-6 text-primary-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v2M9 7v10"
                      />
                    </svg>
                  </div>
                  <dt className="mt-4 font-semibold text-foreground">CAD-Planung</dt>
                  <dd className="mt-2 leading-7 text-muted-foreground">
                    Präzise 3D-Planungen und professionelle Vectorworks-Schulungen für perfekte Ergebnisse.
                  </dd>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 bg-primary rounded-full" />
                      3D-Visualisierung
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 bg-primary rounded-full" />
                      Vectorworks Schulungen
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 bg-primary rounded-full" />
                      Präzise Aufmaße
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <svg
                      className="h-6 w-6 text-primary-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                      />
                    </svg>
                  </div>
                  <dt className="mt-4 font-semibold text-foreground">Tinyhouse-Projekte</dt>
                  <dd className="mt-2 leading-7 text-muted-foreground">
                    Clevere Raumkonzepte für minimalistisches Leben mit maximaler Funktionalität.
                  </dd>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 bg-primary rounded-full" />
                      Nachhaltige Materialien
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 bg-primary rounded-full" />
                      Intelligente Stauraumlösungen
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 bg-primary rounded-full" />
                      Kompakte Wohnkonzepte
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </dl>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Vertrauen durch Erfahrung
              </h2>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-3">
              <div className="flex flex-col bg-muted/50 p-8">
                <dt className="text-sm font-semibold leading-6 text-muted-foreground">
                  Jahre Erfahrung
                </dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-foreground">
                  20+
                </dd>
              </div>
              <div className="flex flex-col bg-muted/50 p-8">
                <dt className="text-sm font-semibold leading-6 text-muted-foreground">
                  Abgeschlossene Projekte
                </dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-foreground">
                  100+
                </dd>
              </div>
              <div className="flex flex-col bg-muted/50 p-8">
                <dt className="text-sm font-semibold leading-6 text-muted-foreground">
                  Zufriedene Kunden
                </dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-foreground">
                  50+
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}