'use client';

import { useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "Hugo Boss Messestand",
    year: "2005",
    category: "Gewerbebau",
    location: "Cannes",
    image: "/Wohnräume.jpg",
    description: "Planung und Gestaltung eines repräsentativen Messestands für Hugo Boss mit hochwertigen Materialien und eleganter Präsentation.",
    services: ["CAD-Planung", "Innenausbau", "Projektleitung"],
    details: "Ein prestigeträchtiges Projekt, bei dem wir einen hochwertigen Messestand für Hugo Boss entwickelten. Der Stand beeindruckte durch seine elegante Präsentation und hochwertige Materialien, die die Marke Hugo Boss perfekt repräsentierten."
  },
  {
    id: 2,
    title: "Allianz Arena Bayern Lounge",
    year: "2005",
    category: "Hospitality",
    location: "München",
    image: "/CAD.jpg",
    description: "Exklusive Loungegestaltung in der Allianz Arena mit modernem Design und funktionaler Raumaufteilung für VIP-Bereiche.",
    services: ["Innenausbau", "Möbeldesign", "Projektmanagement"],
    details: "Die Bayern Lounge in der Allianz Arena war ein Prestigeprojekt mit höchsten Ansprüchen. Wir schufen eine exklusive Atmosphäre für VIP-Gäste mit modernem Design und funktionaler Raumaufteilung."
  },
  {
    id: 3,
    title: "St. Paulus Kirche Sanierung",
    year: "2007",
    category: "Öffentliche Bauten",
    location: "München",
    image: "/Tinyhouse.jpg",
    description: "Denkmalsgerechte Sanierung und Innenausbau der historischen Kirche unter Berücksichtigung liturgischer Anforderungen.",
    services: ["Restaurierung", "CAD-Planung", "Bauleitung"],
    details: "Eine besondere Herausforderung war die denkmalsgerechte Sanierung der St. Paulus Kirche. Hier vereinten wir historische Substanz mit modernen Anforderungen und liturgischen Bedürfnissen."
  },
  {
    id: 4,
    title: "Britisches Konsulat",
    year: "2007",
    category: "Öffentliche Bauten",
    location: "Genf",
    image: "/Wohnräume.jpg",
    description: "Repräsentative Büroausstattung des Konsulats mit hochwertigen Materialien und funktionaler Arbeitsplatzgestaltung.",
    services: ["Büroausbau", "Möbelplanung", "Projektsteuerung"],
    details: "Für das Britische Konsulat in Genf entwickelten wir eine repräsentative und funktionale Büroausstattung, die den diplomatischen Ansprüchen gerecht wurde."
  },
  {
    id: 5,
    title: "Flughafen Wien Tower",
    year: "2007",
    category: "Infrastruktur",
    location: "Wien",
    image: "/CAD.jpg",
    description: "Technische Innenausstattung und ergonomische Arbeitsplatzgestaltung im Kontrollturm des Flughafens Wien.",
    services: ["Technischer Ausbau", "Ergonomieplanung", "Installation"],
    details: "Der Kontrollturm des Flughafens Wien erforderte höchste Präzision bei der ergonomischen Arbeitsplatzgestaltung und technischen Ausstattung für die Flugsicherung."
  },
  {
    id: 6,
    title: "Lufthansa Lounge Munich",
    year: "2011",
    category: "Hospitality",
    location: "München",
    image: "/Tinyhouse.jpg",
    description: "Moderne Loungegestaltung im Non-Schengen Bereich mit komfortablen Wartebereichen und Businessfacilities.",
    services: ["Lounge-Design", "Innenausbau", "Lichtplanung"],
    details: "Die Lufthansa Lounge Munich im Non-Schengen Bereich kombiniert modernstes Design mit höchstem Komfort für Geschäftsreisende und Premium-Passagiere."
  },
  {
    id: 7,
    title: "VR-Bank Komplettsanierung",
    year: "2016",
    category: "Gewerbebau",
    location: "Bayern",
    image: "/Wohnräume.jpg",
    description: "Umfassende Modernisierung der Bankfiliale mit zeitgemäßem Design und kundenfreundlicher Raumaufteilung.",
    services: ["Komplettsanierung", "Innenausbau", "Möbeldesign"],
    details: "Die Komplettsanierung der VR-Bank umfasste eine vollständige Modernisierung mit zeitgemäßem Design und optimierter Kundenberatung."
  },
  {
    id: 8,
    title: "Audi Showroom Facility",
    year: "2018",
    category: "Gewerbebau",
    location: "Deutschland",
    image: "/CAD.jpg",
    description: "Hochwertige Showroom-Gestaltung für Audi mit präsentationsoptimierter Beleuchtung und Produktinszenierung.",
    services: ["Showroom-Design", "Lichtplanung", "Projektmanagement"],
    details: "Der Audi Showroom vereint hochwertige Gestaltung mit optimaler Produktpräsentation durch professionelle Lichtplanung und moderne Raumkonzepte."
  },
  {
    id: 9,
    title: "Private Wohnhaussanierung",
    year: "2017",
    category: "Wohnbau",
    location: "München",
    image: "/Tinyhouse.jpg",
    description: "Komplette Modernisierung eines Einfamilienhauses mit offener Wohnraumgestaltung und maßgeschneiderten Möbeln.",
    services: ["Wohnraumplanung", "Küchenbau", "Möbeldesign"],
    details: "Die Sanierung des Einfamilienhauses in München umfasste eine komplette Neugestaltung mit offenen Wohnbereichen und individuell gefertigten Möbeln."
  },
  {
    id: 10,
    title: "Zahnarztpraxis Dr. Müller",
    year: "2016",
    category: "Gesundheitswesen",
    location: "Bayern",
    image: "/Wohnräume.jpg",
    description: "Funktionale Praxisgestaltung mit hygienischen Standards und patientenfreundlicher Atmosphäre.",
    services: ["Praxisausbau", "Möbelplanung", "Hygieneplanung"],
    details: "Die Zahnarztpraxis Dr. Müller wurde nach neuesten hygienischen Standards gestaltet, mit besonderem Fokus auf Patientenkomfort und Funktionalität."
  }
];

const categories = ["Alle", "Gewerbebau", "Hospitality", "Öffentliche Bauten", "Wohnbau", "Gesundheitswesen", "Infrastruktur"];

export default function Referenzen() {
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === "Alle"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Proof of Work
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Über 20 Jahre Erfahrung in Innenausbau, CAD-Planung und Projektmanagement.
            Entdecken Sie eine Auswahl unserer realisierten Projekte.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 text-base rounded-full transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-100 hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 border border-border rounded-lg shadow-soft hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1"
              onClick={() => setSelectedProject(project)}
            >

              {/* Project Image */}
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-base font-semibold text-emerald-400 bg-gray-800 px-3 py-1 rounded">
                    {project.category}
                  </span>
                  <span className="text-base text-gray-300 font-medium">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-100 mb-2">
                  {project.title}
                </h3>

                <p className="text-base text-gray-300 mb-3">
                  📍 {project.location}
                </p>

                <p className="text-gray-300 text-base mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Services */}
                <div className="border-t pt-4">
                  <h4 className="text-base font-semibold text-gray-100 mb-2">Leistungen:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.services.map((service, index) => (
                      <span
                        key={index}
                        className="text-sm bg-gray-700 text-gray-100 px-3 py-1 rounded"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gray-800 rounded-lg p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-500 mb-2">20+</div>
              <div className="text-lg text-gray-300">Jahre Erfahrung</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-500 mb-2">100+</div>
              <div className="text-lg text-gray-300">Abgeschlossene Projekte</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-500 mb-2">50+</div>
              <div className="text-lg text-gray-300">Zufriedene Kunden</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-500 mb-2">7</div>
              <div className="text-lg text-gray-300">Fachbereiche</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-4 text-gray-100">
            Ihr Projekt ist nicht dabei?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Lassen Sie uns über Ihr individuelles Projekt sprechen.
            Wir freuen uns darauf, Ihre Ideen zu verwirklichen.
          </p>
          <a
            href="/kontakt"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Projekt anfragen
          </a>
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-800 border border-border rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Project Image */}
                <div className="h-64 sm:h-80 relative overflow-hidden rounded-t-xl">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-base font-semibold text-emerald-400 bg-gray-800 px-3 py-1 rounded">
                      {selectedProject.category}
                    </span>
                    <span className="text-base text-gray-300 font-medium">
                      {selectedProject.year}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-3">
                    {selectedProject.title}
                  </h2>

                  <p className="text-lg text-gray-300 mb-6">
                    📍 {selectedProject.location}
                  </p>

                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <p className="text-gray-200 text-lg mb-8 leading-relaxed">
                    {selectedProject.details}
                  </p>

                  {/* Services */}
                  <div className="border-t border-gray-700 pt-6">
                    <h4 className="text-lg font-semibold text-gray-100 mb-4">Leistungen:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.services.map((service, index) => (
                        <span
                          key={index}
                          className="text-sm bg-gray-700 text-gray-100 px-4 py-2 rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact CTA */}
                  <div className="mt-8 pt-6 border-t border-gray-700 text-center">
                    <p className="text-gray-300 mb-4">Interessiert an einem ähnlichen Projekt?</p>
                    <a
                      href="/kontakt"
                      className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200"
                    >
                      Kontakt aufnehmen
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}