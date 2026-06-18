'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-surface)]">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src="/logo.svg" alt="GCS Logo" className="h-6 w-auto invert" />
          </a>
          <div className="flex items-center gap-6">
            {['Philosophie', 'Produktion', 'Qualität', 'Partner'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors hidden md:block">{item}</a>
            ))}
            <a href="#kontakt" className="px-4 py-2 rounded-full bg-solar-500/10 border border-solar-500/30 text-solar-400 text-sm font-medium hover:bg-solar-500/20 transition-all">Kontakt</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero/salt-mine.jpg" alt="GCS Salzminen-Anbau" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[var(--color-surface)]" />
        </div>
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full gradient-solar-glow blur-3xl opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full gradient-green-glow blur-3xl opacity-15" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <span className="w-2 h-2 rounded-full bg-solar-400 animate-pulse" />
              <span className="text-xs text-[var(--color-text-secondary)] tracking-wider uppercase">Berlin · Cannabis-Tech · Medical</span>
            </div>
          </div>
          <h1 className="animate-fade-up animate-fade-up-delay-1 text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-tight mb-6">
            <span className="text-white">Medical Cannabis.</span><br />
            <span className="text-white">Made in Germany.</span><br />
            <span className="text-gradient font-medium">Fueled by Solar Power.</span>
          </h1>
          <p className="animate-fade-up animate-fade-up-delay-2 text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            GCS produziert medizinisches Cannabis in einer der modernsten GMP-zertifizierten Anlagen Europas — im Solar Valley Bitterfeld. Nachhaltig, kontrolliert, skalierbar.
          </p>
          <div className="animate-fade-up animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#produktion" className="px-8 py-4 rounded-full bg-gradient-to-r from-solar-500 to-ember-500 text-black font-semibold hover:shadow-lg hover:shadow-solar-500/20 transition-all active:scale-95">Produktion entdecken</a>
            <a href="#kontakt" className="px-8 py-4 rounded-full border border-[var(--color-border-hover)] text-[var(--color-text-secondary)] hover:text-white hover:border-white/20 transition-all">Partner werden</a>
          </div>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { value: '20.000 m²', label: 'Produktionsfläche' },
              { value: '25 t', label: 'Jahreskapazität' },
              { value: '100%', label: 'Solar-betrieben' },
              { value: 'GMP/GACP', label: 'Zertifiziert' },
            ].map((stat) => (<div key={stat.label} className="text-center"><div className="text-2xl sm:text-3xl font-semibold text-white mb-1">{stat.value}</div><div className="text-xs text-[var(--color-text-muted)] tracking-wide uppercase">{stat.label}</div></div>))}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[var(--color-text-muted)]"><path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </section>

      {/* Philosophie */}
      <section id="philosophie" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs tracking-widest uppercase text-solar-400 mb-4 block">Unsere Mission</span>
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">From Cultivation to Pharmacies.<br /><span className="text-[var(--color-text-secondary)]">Made in Germany. Solar-betrieben.</span></h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed font-light">Wir kultivieren medizinisches Cannabis auf 20.000 m² im Solar Valley Bitterfeld — mit 100% erneuerbarer Energie. Als vollintegriertes Unternehmen kontrollieren wir die gesamte Wertschöpfungskette: vom Anbau über die GMP-zertifizierte Produktion bis zur Distribution an Apotheken.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '☀️', title: 'Solar Power', text: 'Unsere Anlage wird vollständig mit Solarenergie betrieben. Das senkt nicht nur CO₂-Emissionen, sondern garantiert auch stabile Energiepreise für eine skalierbare Produktion.' },
              { icon: '🧬', title: 'GMP & GACP', text: 'Zertifiziert nach höchsten pharmazeutischen Standards. Jede Charge wird unter Reinraumbedingungen produziert und durchläuft strenge Qualitätskontrollen.' },
              { icon: '🔗', title: 'Full Vertical', text: 'Vom Seed bis zur Apotheke — wir besitzen und kontrollieren jeden Schritt. Das bedeutet volle Transparenz, konstante Qualität und zuverlässige Lieferketten.' },
            ].map((p) => (<div key={p.title} className="group p-8 rounded-3xl gradient-card border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-300"><div className="text-3xl mb-4">{p.icon}</div><h3 className="text-lg font-medium text-white mb-3">{p.title}</h3><p className="text-sm text-[var(--color-text-secondary)] leading-relaxed font-light">{p.text}</p></div>))}
          </div>
        </div>
      </section>

      {/* Produktion */}
      <section id="produktion" className="py-32 px-6 gradient-solar relative overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs tracking-widest uppercase text-solar-300 mb-4 block">Produktion</span>
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">Solar Valley Bitterfeld</h2>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed font-light">Im Herzen des Solar Valley entsteht eine der modernsten Cannabis-Produktionsanlagen Deutschlands. Auf 20.000 m² produzieren wir jährlich bis zu 25 Tonnen medizinisches Cannabis — vollständig mit erneuerbarer Energie.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                { num: '01', title: '20.000 m² Gesamtfläche', desc: 'State-of-the-art Indoor-Facility mit automatisierten Klimasystemen und LED-Beleuchtung.' },
                { num: '02', title: '25 Tonnen Jahreskapazität', desc: 'Skalierbar auf über 50 Tonnen in Phase 2. Genug Kapazität für den wachsenden deutschen Markt.' },
                { num: '03', title: '100% Solar-Energie', desc: 'Direkte Anbindung an den Solarpark Bitterfeld. Kein fossiler Strom — null CO₂-Emissionen im Betrieb.' },
                { num: '04', title: 'GMP nach §13 AMG', desc: 'Vollständig GMP-zertifizierte Produktion unter Reinraumbedingungen. EU-GMP-Standard für den Export.' },
              ].map((item) => (<div key={item.num} className="flex gap-5"><div className="text-2xl font-light text-solar-400/60 tabular-nums shrink-0">{item.num}</div><div><h3 className="text-white font-medium mb-1">{item.title}</h3><p className="text-sm text-white/50 font-light leading-relaxed">{item.desc}</p></div></div>))}
            </div>
            <div className="relative aspect-square rounded-3xl gradient-card border border-[var(--color-border)] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center"><div className="text-7xl mb-4">☀️</div><div className="text-white/40 text-sm font-mono">Bitterfeld-Wolfen</div><div className="text-white/20 text-xs mt-2">Solar Valley</div><div className="mt-8 grid grid-cols-3 gap-3 px-8">{['GMP','GACP','EU-GMP'].map(c=>(<div key={c} className="px-3 py-2 rounded-lg bg-white/5 border border-white/5 text-xs text-white/40 text-center">{c}</div>))}</div></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualität */}
      <section id="qualitaet" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs tracking-widest uppercase text-gcs-green-400 mb-4 block">Qualität & Compliance</span>
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-16">Pharma-Standard. Nicht Straßenqualität.</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: 'GACP-Anbau', items: ['Rückverfolgbarkeit jeder Pflanze', 'Keine Pestizide', 'Standardisierte Kultivierungsprotokolle', 'Kontrollierte Umgebungsbedingungen'] },
              { title: 'GMP-Produktion', items: ['Reinraum Klasse D', 'Chargen-Dokumentation', 'Stabilitätsprüfung', 'AMG §13 konform'] },
              { title: 'Qualitätskontrolle', items: ['THC/CBD-Profilanalyse', 'Mikrobiologische Tests', 'Schwermetall-Screening', 'Terpen-Profil'] },
              { title: 'Distribution', items: ['Großhandelserlaubnis §52a AMG', 'Sichere Lieferkette', 'Direktes Apotheken-Netzwerk', 'Import & Export EU'] },
            ].map((card) => (<div key={card.title} className="p-6 rounded-2xl gradient-card border border-[var(--color-border)] text-left"><h3 className="text-white font-medium mb-4">{card.title}</h3><ul className="space-y-2">{card.items.map((item)=>(<li key={item} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]"><span className="text-gcs-green-400 mt-0.5 shrink-0">✓</span>{item}</li>))}</ul></div>))}
          </div>
        </div>
      </section>

      {/* Partner */}
      <section id="partner" className="py-32 px-6 gradient-solar relative">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-xs tracking-widest uppercase text-solar-300 mb-4 block">Partner & Wissenschaft</span>
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-16">Geballte Expertise</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { name: 'Humboldt-Universität Berlin', role: 'Wissenschaftlicher Partner', desc: 'Forschung zu urbaner Pflanzenökophysiologie. Prof. Dr. Christian Ulrichs leitet die Forschungsaktivitäten.' },
              { name: 'K+S Gruppe', role: 'Industriepartner', desc: 'Einer der weltweit führenden Bergbau- und Rohstoffkonzerne. Strategische Partnerschaft für Infrastruktur und Standortentwicklung.' },
              { name: 'Solar Valley Bitterfeld', role: 'Energiepartner', desc: 'Direkter Zugang zu 100% erneuerbarer Energie aus einem der größten Solarparks Deutschlands. Null CO₂-Emissionen.' },
            ].map((partner) => (<div key={partner.name} className="p-8 rounded-2xl gradient-card border border-white/5 hover:border-white/10 transition-all"><div className="text-3xl mb-4">{partner.name.includes('Humboldt') ? (<img src="/partners/humboldt.svg" alt="Humboldt-Universität" className="h-10 w-auto invert opacity-70" />) : partner.name.includes('K+S') ? '⛏️' : '☀️'}</div><h3 className="text-white font-medium mb-2">{partner.name}</h3><div className="text-xs text-solar-400 mb-3">{partner.role}</div><p className="text-sm text-white/40 font-light leading-relaxed">{partner.desc}</p></div>))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs tracking-widest uppercase text-solar-400 mb-4 block">Kontakt</span>
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">Let&apos;s set the new standard.</h2>
          <p className="text-[var(--color-text-secondary)] mb-12 leading-relaxed font-light">Sie sind Apotheker, Investor oder Partner aus der Pharmabranche? Wir freuen uns auf den Austausch.</p>
          <div className="p-8 rounded-3xl gradient-card border border-[var(--color-border)]">
            <div className="grid sm:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-white font-medium mb-4">German Cannabis Standard GmbH</h3>
                <div className="space-y-3 text-sm text-[var(--color-text-secondary)]"><p>Kantstraße 24</p><p>10623 Berlin</p><p className="pt-2"><a href="tel:+493****7638" className="hover:text-white transition-colors">+49 (0)30 552 17 638</a></p><p><a href="mailto:info@cannabiosan.de" className="hover:text-white transition-colors">info@germancannabisstandard.de</a></p></div>
              </div>
              <div className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                <p className="text-white font-medium">Quick Links</p>
                <p><a href="https://www.linkedin.com/company/gcs-german-cannabis-standard" target="_blank" rel="noopener" className="hover:text-white transition-colors">LinkedIn</a></p>
                <p><Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link></p>
                <p><Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2"><img src="/logo.svg" alt="GCS Logo" className="h-5 w-auto invert opacity-60" /><span className="text-xs text-[var(--color-text-muted)]">German Cannabis Standard GmbH © {new Date().getFullYear()}</span></div>
          <div className="text-xs text-[var(--color-text-muted)]">Medical Cannabis. Made in Germany. Fueled by Solar Power.</div>
        </div>
      </footer>
    </div>
  );
}
