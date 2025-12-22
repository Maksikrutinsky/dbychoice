import type { Metadata } from 'next';
import Header from '@/components/Header';
import IndustrialHero from '@/components/design-styles/industrial/IndustrialHero';
import BuildingProcess from '@/components/design-styles/industrial/BuildingProcess';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Industrial Design – Design By Choice',
  description: 'Discover raw urban beauty - Industrial Design embraces exposed brick, metal accents, and warehouse aesthetics for refined, rugged spaces.',
  keywords: ['industrial design', 'urban design', 'warehouse aesthetics', 'exposed brick', 'interior design'],
};

export default function IndustrialDesign() {
  return (
    <>
      <Header />
      <IndustrialHero />
      <main className="main">
        <BuildingProcess />
      </main>
      <Footer />
    </>
  );
}
