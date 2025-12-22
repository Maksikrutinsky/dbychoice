import type { Metadata } from 'next';
import Header from '@/components/Header';
import EclecticHero from '@/components/design-styles/eclectic/EclecticHero';
import BuildingProcess from '@/components/design-styles/eclectic/BuildingProcess';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Eclectic Design – Design By Choice',
  description: 'Discover the beauty of diversity - Eclectic Design blends styles, eras, and cultures into harmonious, uniquely personal spaces.',
  keywords: ['eclectic design', 'mixed styles', 'interior design', 'bold patterns', 'diverse aesthetics'],
};

export default function EclecticDesign() {
  return (
    <>
      <Header />
      <EclecticHero />
      <main className="main">
        <BuildingProcess />
      </main>
      <Footer />
    </>
  );
}
