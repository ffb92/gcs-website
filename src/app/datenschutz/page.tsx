import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Datenschutz — German Cannabis Standard',
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-[var(--color-surface)]">
      <nav className="glass sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="GCS Logo" className="h-6 w-auto invert" />
          </Link>
          <Link
            href="/"
            className="px-4 py-2 rounded-full bg-solar-500/10 border border-solar-500/30 text-solar-400 text-sm font-medium hover:bg-solar-500/20 transition-all"
          >
            ← Zurück
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-24">
        <div className="mb-12">
          <div className="w-12 h-1 bg-solar-500 mb-6 rounded-full" />
          <h1 className="text-3xl sm:text-4xl font-light text-white mb-2">Datenschutzerklärung</h1>
          <p className="text-[var(--color-text-muted)] text-sm">Stand: Februar 2024</p>
        </div>

        <div className="space-y-12 text-[var(--color-text-secondary)] leading-relaxed font-light">
          <section>
            <h2 className="text-lg font-medium text-white mb-3">Allgemeine Hinweise</h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">Verantwortliche Stelle</h2>
            <div className="space-y-1">
              <p>GCS — German Cannabis Standard GmbH</p>
              <p>Kantstraße 24</p>
              <p>10623 Berlin</p>
              <p className="pt-1">
                E-Mail:{' '}
                <a href="mailto:info@germancannabisstandard.de" className="text-solar-400 hover:text-solar-300 transition-colors">
                  info@germancannabisstandard.de
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">Datenerfassung auf dieser Website</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-white/80 font-medium mb-1">Cookies</h3>
                <p>
                  Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten
                  auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung
                  (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
                  Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht.
                </p>
              </div>
              <div>
                <h3 className="text-white/80 font-medium mb-1">Server-Log-Dateien</h3>
                <p>
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                  Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und
                  Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners,
                  Uhrzeit der Serveranfrage, IP-Adresse.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">Hosting</h2>
            <p>
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            <p className="mt-2">INWX GmbH, Prinzessinnenstr. 30, 10969 Berlin</p>
            <p className="mt-2">
              Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und
              bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und
              effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter
              (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
              Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie
              sich jederzeit unter der oben angegebenen Adresse an uns wenden.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">Speicherdauer</h2>
            <p>
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
              Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
              berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
              werden Ihre Daten gelöscht.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
