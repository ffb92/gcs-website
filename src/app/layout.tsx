import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'German Cannabis Standard — Medical Cannabis. Made in Germany.',
  description:
    'GCS ist ein führendes deutsches Agritech-Unternehmen für medizinischen Cannabisanbau. 20.000 m² Produktionsfläche im Solar Valley Bitterfeld. GMP & GACP zertifiziert. From Cultivation to Pharmacies.',
  keywords: [
    'Medical Cannabis', 'Medizinisches Cannabis', 'GMP Cannabis', 'Cannabis Anbau Deutschland',
    'Solar Valley', 'Bitterfeld', 'German Cannabis Standard', 'GCS', 'Pharma Cannabis',
    'Cannabis Großhandel', 'Cannabis Produktion', 'GACP', 'Cannabis Made in Germany',
  ],
  openGraph: {
    title: 'German Cannabis Standard — Medical Cannabis. Made in Germany.',
    description: 'GMP-zertifizierte Cannabis-Produktion im Solar Valley Bitterfeld. 25 Tonnen Jahreskapazität. Nachhaltig, solar-betrieben, Made in Germany.',
    siteName: 'German Cannabis Standard',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'German Cannabis Standard',
    description: 'Medical Cannabis. Made in Germany. Fueled by Solar Power.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500;600;700&family=IBM+Plex+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[var(--color-surface)] text-[var(--color-text-primary)] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
