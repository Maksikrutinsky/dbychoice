import type { Metadata } from 'next';
import Header from '@/components/Header';
import TraditionalHero from '@/components/design-styles/traditional/TraditionalHero';
import BuildingProcess from '@/components/design-styles/traditional/BuildingProcess';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Traditional Design – Design By Choice',
  description: 'Discover timeless elegance - Traditional Design honors classic principles with symmetry, rich woods, and refined details.',
  keywords: ['traditional design', 'classic design', 'elegant design', 'interior design', 'timeless style'],
};

export default function TraditionalDesign() {
  return (
    <>
      <Header />
      <TraditionalHero />
      <main className="main">
        <BuildingProcess />
      </main>
      <Footer />
    </>
  );
}
