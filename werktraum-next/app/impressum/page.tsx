export default function Impressum() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-foreground">
        Impressum
      </h1>
      <div className="max-w-4xl prose prose-invert">

        <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Angaben gemäß § 5 TMG:</h2>

        <div className="text-muted-foreground mb-6 leading-relaxed">
          <p className="mb-2"><strong className="text-foreground">Gerhard Trappendreher</strong></p>
          <p className="mb-2">Werktraum</p>
          <p className="mb-2">Zehntfeldstr. 183</p>
          <p className="mb-4">81825 München</p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Kontakt</h2>

        <div className="text-muted-foreground mb-6 leading-relaxed">
          <p className="mb-2">Telefon: <a href="tel:+491601248900" className="text-primary hover:underline">+49 160 1248900</a></p>
          <p className="mb-2">E-Mail: <a href="mailto:info@werktraum.de" className="text-primary hover:underline">info@werktraum.de</a></p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Haftung für Inhalte</h2>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Haftung für Links</h2>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Urheberrecht</h2>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </p>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          Quelle: <a href="https://www.e-recht24.de" className="text-primary hover:underline">https://www.e-recht24.de</a>
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Urheberrecht Bildmaterial</h2>

        <div className="text-muted-foreground mb-6 leading-relaxed">
          <p className="mb-2">© panthermedia.net</p>
          <p className="mb-2">Gerhard Trappendreher</p>
        </div>

      </div>
    </div>
  );
}