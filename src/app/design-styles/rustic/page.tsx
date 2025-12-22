import type { Metadata } from 'next';
import Header from '@/components/Header';
import RusticHero from '@/components/design-styles/rustic/RusticHero';
import BuildingProcess from '@/components/design-styles/rustic/BuildingProcess';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Rustic Design – Design By Choice',
  description: 'Discover natural warmth and charm - Rustic Design celebrates reclaimed wood, natural stone, and the beauty of imperfection.',
  keywords: ['rustic design', 'reclaimed wood', 'natural stone', 'interior design', 'country style'],
};

export default function RusticDesign() {
  return (
    <>
      <Header />
      <RusticHero />
      <main className="main">
        <BuildingProcess />
      </main>
      <Footer />
    </>
  );
}
