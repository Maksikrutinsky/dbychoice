import type { Metadata } from 'next';
import Header from '@/components/Header';
import GeometricOrigamiHero from '@/components/design-styles/geometric-origami/GeometricOrigamiHero';
import BuildingProcess from '@/components/design-styles/geometric-origami/BuildingProcess';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Geometric-Origami Design – Design By Choice',
  description: 'Discover angular artistry - Geometric-Origami Design transforms spaces through crystalline shapes, sharp lines, and mathematical beauty.',
  keywords: ['geometric design', 'origami design', 'angular design', 'avant-garde', 'interior design'],
};

export default function GeometricOrigamiDesign() {
  return (
    <>
      <Header />
      <GeometricOrigamiHero />
      <main className="main">
        <BuildingProcess />
      </main>
      <Footer />
    </>
  );
}
