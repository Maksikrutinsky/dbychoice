import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import './styles.css';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '700', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://designbychoice.com'),
  title: {
    default: 'Design By Choice – Interior Design Innovation',
    template: '%s | Design By Choice',
  },
  description: 'Smart, transparent, and accessible interior design with Mixed Reality technology.',
  applicationName: 'Design By Choice',
  generator: 'Next.js',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Design By Choice',
  description: 'Smart, transparent, and accessible interior design – from anywhere, anytime.',
  url: 'https://designbychoice.com',
  logo: 'https://designbychoice.com/images/DESIGNBYCHOICE.png',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    availableLanguage: ['English', 'Hebrew'],
  },
  sameAs: [
    // Add your social media URLs here
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IL',
  },
  service: {
    '@type': 'Service',
    serviceType: 'Interior Design',
    provider: {
      '@type': 'Organization',
      name: 'Design By Choice',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Israel',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
