import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border text-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">

          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">Werktraum</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Ihr Experte für Innenausbau, Tinyhouse-Bau und CAD-Planung.
              Von der Planung bis zur Fertigung alles aus einer Hand.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Navigation</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                Startseite
              </Link>
              <Link href="/innenausbau" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                Innenausbau
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                Über uns
              </Link>
              <Link href="/cad-planung" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                CAD-Planung
              </Link>
              <Link href="/referenzen" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                Referenzen
              </Link>
              <Link href="/tinyhouse" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                Tinyhouse
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">
              <Link href="/kontakt" className="hover:text-primary transition-colors duration-200">
                Kontakt
              </Link>
            </h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <a href="tel:016012489000" className="hover:text-foreground transition-colors duration-200">
                  0160 12 48 900
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span>✉️</span>
                <a href="mailto:info@werktraum.de" className="hover:text-foreground transition-colors duration-200">
                  info@werktraum.de
                </a>
              </div>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://facebook.com/werktraum.respirare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  aria-label="Facebook"
                >
                  📘
                </a>
                <a
                  href="https://twitter.com/Raum_zum_Leben"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  aria-label="Twitter"
                >
                  🐦
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Werktraum. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/impressum" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}