import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Datenschutz — German Cannabis Standard' };

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-[var(--color-surface)]">
      <nav className="glass sticky top-0 z-50"><div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between"><Link href="/" className="flex items-center gap-2"><img src="/logo.svg" alt="GCS Logo" className="h-6 w-auto invert" /></Link><Link href="/" className="px-4 py-2 rounded-full bg-solar-500/10 border border-solar-500/30 text-solar-400 text-sm font-medium hover:bg-solar-500/20 transition-all">← Zurück</Link></div></nav>
      <main className="max-w-3xl mx-auto px-6 py-24">
        <div className="mb-12"><div className="w-12 h-1 bg-solar-500 mb-6 rounded-full" /><h1 className="text-3xl sm:text-4xl font-light text-white mb-2">Datenschutzerklärung</h1><p className="text-[var(--color-text-muted)] text-sm">Stand: Februar 2024</p></div>
        <div className="space-y-12 text-[var(--color-text-secondary)] leading-relaxed font-light">
          <Section title="Datenschutz auf einen Blick"><H3>Allgemeine Hinweise</H3><p>Die folgenden Hinweise geben einen einfachen Überblick...</p><H3 className="mt-6">Datenerfassung auf dieser Website</H3><H4>Wer ist verantwortlich?</H4><p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.</p><H4>Wie erfassen wir Ihre Daten?</H4><p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.</p><p className="mt-2">Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst.</p></Section>
          <Section title="Hosting"><p>Wir hosten die Inhalte unserer Website bei: INWX GmbH, Prinzessinnenstr. 30, 10969 Berlin</p><p className="mt-2">Es besteht ein Vertrag über Auftragsverarbeitung (AVV).</p></Section>
          <Section title="Allgemeine Hinweise und Pflichtinformationen"><H3>Datenschutz</H3><p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.</p><H3 className="mt-6">Hinweis zur verantwortlichen Stelle</H3><p>GCS — German Cannabis Standard GmbH, Kantstraße 24, 10623 Berlin</p><H3 className="mt-6">Speicherdauer</H3><p>Soweit keine speziellere Speicherdauer genannt wurde, verbleiben Ihre Daten bis der Zweck entfällt.</p></Section>
          <Section title="Datenerfassung auf dieser Website"><H3>Cookies</H3><p>Unsere Internetseiten verwenden so genannte „Cookies".</p><H3 className="mt-6">Kontaktformular</H3><p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben gespeichert.</p><H3 className="mt-6">Anfrage per E-Mail, Telefon oder Telefax</H3><p>Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten wird zum Zwecke der Bearbeitung gespeichert.</p></Section>
        </div>
      </main>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section><h2 className="text-xl font-medium text-white mb-6">{title}</h2>{children}</section>;
}
function H3({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h3 className={`${className || ''} text-white/90 font-medium mb-2`}>{children}</h3>;
}
function H4({ children }: { children: React.ReactNode }) {
  return <h4 className="text-white/80 font-medium mb-1 mt-4">{children}</h4>;
}
