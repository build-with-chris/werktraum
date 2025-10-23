import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Prinzipien | Werktraum Philosophie | Schreinermeister Gerhard Trappendreher",
  description: "Die Prinzipien hinter jedem Werktraum-Projekt ✓ Systematische Planung ✓ Zielgruppen-Verständnis ✓ Handwerksliebe ✓ Von der Allianz Arena bis zum Tinyhouse",
  keywords: "Werktraum Prinzipien, Schreinermeister Philosophie, Innenausbau München, Projektmanagement, Handwerkskunst",
};

// Structured Data für die Prinzipien
const principlesSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Werktraum",
  "description": "Prinzipien und Philosophie hinter professionellem Innenausbau",
  "founder": {
    "@type": "Person",
    "name": "Gerhard Trappendreher"
  }
};

export default function Prinzipien() {
  return (
    <>
      {/* Structured Data für SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(principlesSchema),
        }}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">

          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">
              Prinzipien
            </h1>
            <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-6">
              <strong>Die Philosophie hinter jedem Werktraum-Projekt</strong>
            </p>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Von der Bayern Lounge in der Allianz Arena bis zum alternativen Tinyhouse –
              diese Prinzipien verbinden alle unsere Projekte.
            </p>
          </div>

          {/* Core Philosophy */}
          <div className="mb-24">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/30">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-100 mb-6">
                  Das Werktraum-Mindset
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  Gerhards einzigartiger Ansatz verbindet <strong>systematische Organisation</strong> mit
                  <strong> tiefem Zielgruppen-Verständnis</strong> und <strong>echter Handwerksliebe</strong>.
                </p>
              </div>

              {/* Three Core Principles */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-24 h-24 bg-blue-600/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600/30 transition-all duration-300 border border-blue-500/30">
                    <svg className="w-12 h-12 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-100 mb-4">Systematische Planung</h3>
                  <p className="text-gray-300 leading-relaxed">
                    80% des Erfolgs liegt in der detaillierten Vorbereitung.
                    Jeder Schritt ist durchdacht – von der CAD-Planung bis zur Schlüsselübergabe.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-24 h-24 bg-purple-600/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-600/30 transition-all duration-300 border border-purple-500/30">
                    <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-100 mb-4">Zielgruppen-Verständnis</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Ob alternative Tinyhouse-Bewohner oder Premium-Gastronomie –
                    Gerhard spricht die Sprache seiner Kunden und versteht ihre Welten.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-24 h-24 bg-red-600/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600/30 transition-all duration-300 border border-red-500/30">
                    <svg className="w-12 h-12 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-100 mb-4">Handwerksliebe</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Die Leidenschaft für perfekte Details und hochwertige Umsetzung –
                    das verbindende Element aller Werktraum-Projekte.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Principles */}
          <div className="space-y-16">

            {/* Principle 1: Systematic Approach */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-blue-600/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-blue-500/20">
                  <span className="text-blue-400 font-semibold">Prinzip 01</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-100 mb-6">
                  Struktur schafft Freiheit
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  Gerhards systematisches Vorgehen ist der Schlüssel zu kreativer Exzellenz.
                  Durch durchdachte Planung entstehen Freiräume für innovative Lösungen.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-400">Detaillierte CAD-Planung vor jedem Projekt</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-400">Präzise Kostenkalkulation und Zeitplanung</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-400">Systematische Qualitätskontrolle</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-600/5 to-transparent rounded-2xl p-8 border border-blue-500/10">
                <div className="text-6xl text-blue-400/20 mb-4">📐</div>
                <blockquote className="text-2xl text-gray-200 italic leading-relaxed">
                  "20% Zeit in die Planung investieren spart 50% der Kosten und 80% der Nerven."
                </blockquote>
                <cite className="text-gray-400 text-sm mt-4 block">— Gerhard Trappendreher</cite>
              </div>
            </div>

            {/* Principle 2: Understanding Target Groups */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gradient-to-br from-purple-600/5 to-transparent rounded-2xl p-8 border border-purple-500/10">
                <div className="text-6xl text-purple-400/20 mb-4">🎯</div>
                <div className="space-y-6">
                  <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/30">
                    <h4 className="text-lg font-semibold text-gray-200 mb-2">Alternative Zielgruppe</h4>
                    <p className="text-gray-400 text-sm">Tinyhouse-Bewohner, Minimalisten, Freiheitsliebende</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/30">
                    <h4 className="text-lg font-semibold text-gray-200 mb-2">Premium-Segment</h4>
                    <p className="text-gray-400 text-sm">Bayern Lounge, Luxus-Gastronomie, Exklusive Projekte</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center bg-purple-600/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-purple-500/20">
                  <span className="text-purple-400 font-semibold">Prinzip 02</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-100 mb-6">
                  Sprache der Zielgruppen
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  Echtes Verständnis entsteht nicht durch Theorie, sondern durch Empathie.
                  Gerhard taucht in die Welten seiner Kunden ein.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Das Geheimnis liegt darin, die unterschiedlichen Bedürfnisse zu verstehen:
                  Während Tinyhouse-Bewohner Nachhaltigkeit und Flexibilität schätzen,
                  steht bei Premium-Projekten Exklusivität und Prestige im Vordergrund.
                </p>
              </div>
            </div>

            {/* Principle 3: Craftsmanship */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-red-600/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-red-500/20">
                  <span className="text-red-400 font-semibold">Prinzip 03</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-100 mb-6">
                  Leidenschaft macht den Unterschied
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  Technik kann man lernen, Leidenschaft muss man leben.
                  Sie ist das unsichtbare Element, das jedes Werktraum-Projekt auszeichnet.
                </p>
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
                  <h4 className="text-lg font-semibold text-gray-200 mb-3">Das verbindende Element</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Ob 5-Sterne-Restaurant oder minimalistisches Tinyhouse –
                    die Liebe zum Detail und der Anspruch an Perfektion bleiben konstant.
                    Das spüren Kunden von der ersten Beratung bis zur finalen Abnahme.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-600/5 to-transparent rounded-2xl p-8 border border-red-500/10">
                <div className="text-6xl text-red-400/20 mb-4">❤️</div>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-200 mb-2">20+</div>
                    <div className="text-gray-400 text-sm">Jahre Leidenschaft</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-200 mb-2">100%</div>
                    <div className="text-gray-400 text-sm">Herzblut in jedem Projekt</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Success Formula */}
          <div className="mt-24 text-center">
            <div className="bg-gradient-to-r from-gray-800/40 via-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/30">
              <h2 className="text-4xl font-bold text-gray-100 mb-8">
                Die Werktraum-Formel
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-2xl font-semibold">
                <span className="text-blue-400">Systematik</span>
                <span className="text-gray-500">+</span>
                <span className="text-purple-400">Empathie</span>
                <span className="text-gray-500">+</span>
                <span className="text-red-400">Leidenschaft</span>
                <span className="text-gray-500">=</span>
                <span className="text-gray-200">Perfektion</span>
              </div>
              <p className="text-xl text-gray-400 mt-8 max-w-3xl mx-auto leading-relaxed">
                Diese einzigartige Kombination macht jeden Werktraum-Auftrag zu einem besonderen Erlebnis –
                unabhängig von Größe, Budget oder Zielgruppe.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <h3 className="text-3xl font-bold text-gray-100 mb-6">
              Erleben Sie die Werktraum-Prinzipien
            </h3>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Lassen Sie uns gemeinsam Ihr Projekt nach diesen bewährten Prinzipien umsetzen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Projekt besprechen
              </Link>
              <Link
                href="/referenzen"
                className="inline-block border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-gray-700 hover:border-gray-500 transition-all duration-300"
              >
                Proof of Work ansehen
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}