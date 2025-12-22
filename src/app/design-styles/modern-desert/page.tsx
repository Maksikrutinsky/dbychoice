import type { Metadata } from 'next';
import Header from '@/components/Header';
import ModernDesertHero from '@/components/design-styles/modern-desert/ModernDesertHero';
import BuildingProcess from '@/components/design-styles/modern-desert/BuildingProcess';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Modern Desert Design – Design By Choice',
  description: 'Discover the art of Modern Desert Design - where minimalist architecture meets the raw beauty of desert landscapes.',
  keywords: ['modern desert design', 'desert architecture', 'minimalist design', 'interior design', 'desert homes'],
};

export default function ModernDesertDesign() {
  return (
    <>
      <Header />
      <ModernDesertHero />
      <main className="main">
        <BuildingProcess />
      </main>
      <Footer />
    </>
  );
}
