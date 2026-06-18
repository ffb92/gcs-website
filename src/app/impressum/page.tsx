import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Impressum — German Cannabis Standard',
};

export default function ImpressumPage() {
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
          <h1 className="text-3xl sm:text-4xl font-light text-white mb-2">Impressum</h1>
          <p className="text-[var(--color-text-muted)] text-sm">Angaben gemäß § 5 TMG</p>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-lg font-medium text-white mb-3">Anschrift</h2>
            <div className="text-[var(--color-text-secondary)] leading-relaxed font-light space-y-1">
              <p>GCS — German Cannabis Standard GmbH</p>
              <p>Kantstraße 24</p>
              <p>10623 Berlin</p>
              <p className="pt-2 text-sm text-[var(--color-text-muted)]">
                Handelsregister: HRB 217200<br />
                Registergericht: Berlin
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">Vertretungsberechtigte</h2>
            <div className="text-[var(--color-text-secondary)] leading-relaxed font-light">
              <p>Dogan Küncekli</p>
              <p>Dr. Nikolaos Katsaras</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">Kontakt</h2>
            <div className="text-[var(--color-text-secondary)] leading-relaxed font-light space-y-1">
              <p>Telefon: +49 (0)30 552 17 638</p>
              <p>
                E-Mail:{' '}
                <a href="mailto:info@germancannabisstandard.de" className="text-solar-400 hover:text-solar-300 transition-colors">
                  info@germancannabisstandard.de
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">Umsatzsteuer-ID</h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed font-light">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG: DE330497191
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">Berufshaftpflichtversicherung</h2>
            <div className="text-[var(--color-text-secondary)] leading-relaxed font-light">
              <p>ALTRO Innovativ-Versicherungsmakler</p>
              <p>Landsberger Str. 402, 81241 München</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">EU-Streitschlichtung</h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed font-light">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-solar-400 hover:text-solar-300 transition-colors">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-white mb-3">Verbraucherstreitbeilegung</h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed font-light">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
