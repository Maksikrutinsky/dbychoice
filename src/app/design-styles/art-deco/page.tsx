import type { Metadata } from 'next';
import Header from '@/components/Header';
import ArtDecoHero from '@/components/design-styles/art-deco/ArtDecoHero';
import BuildingProcess from '@/components/design-styles/art-deco/BuildingProcess';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Art Deco Design – Design By Choice',
  description: 'Discover glamorous elegance - Art Deco Design captures the spirit of the twenties with bold patterns, luxury materials, and geometric precision.',
  keywords: ['art deco design', 'vintage design', 'geometric patterns', 'luxury design', 'interior design'],
};

export default function ArtDecoDesign() {
  return (
    <>
      <Header />
      <ArtDecoHero />
      <main className="main">
        <BuildingProcess />
      </main>
      <Footer />
    </>
  );
}
