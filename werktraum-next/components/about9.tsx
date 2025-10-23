import React from "react";

const About9 = () => {
  return (
    <section className="py-16 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-8 text-3xl font-medium leading-tight tracking-tight md:text-4xl text-foreground text-center">
            Gerhard Trappendreher
            <br />
            <span className="text-2xl md:text-3xl text-muted-foreground">
              Schreinermeister & Experte für individuelle Raumlösungen
            </span>
          </h1>

          <div className="mb-12 flex justify-center">
            <img
              src="/Gerhard.jpg"
              alt="Gerhard Trappendreher - Schreinermeister und Inhaber von Werktraum"
              className="w-full max-w-sm h-80 rounded-lg object-cover shadow-lg"
            />
          </div>

          <div className="mx-auto mb-16 text-center">
            <div className="mb-8">
              <span className="text-muted-foreground block text-lg mb-2">
                Schreinermeister & CAD-Spezialist
              </span>
              <span className="text-foreground font-semibold text-lg">
                München, Bayern
              </span>
            </div>

            <div className="max-w-3xl mx-auto">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Mit über 20 Jahren Erfahrung im Handwerk habe ich bereits eine beeindruckende Vielfalt
                an Projekten erfolgreich umgesetzt – von innovativen Tinyhouse-Konzepten bis hin zu
                repräsentativen Geschäftsräumen wie der Bayern Lounge in der Allianz Arena.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Als Vollprofi verbinde ich traditionelle Handwerkskunst mit modernster CAD-Technologie.
                Meine systematische Herangehensweise und das tiefe Verständnis für unterschiedlichste
                Anforderungen ermöglichen es mir, maßgeschneiderte Lösungen zu entwickeln.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Von der ersten Planung bis zur finalen Umsetzung begleite ich Sie kompetent durch
                Ihr Projekt. Dabei stehen Qualität, Termintreue und individuelle Beratung im Mittelpunkt
                meiner Arbeit – ganz gleich ob Küchenbau, Büroausstattung oder komplexe Innenausbauten.
              </p>
            </div>

            <div className="mt-12 flex justify-center">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg"
                alt="Professioneller Arbeitsplatz"
                className="w-full max-w-2xl rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About9 };
