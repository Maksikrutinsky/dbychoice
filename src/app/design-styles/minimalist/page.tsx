import type { Metadata } from 'next';
import Header from '@/components/Header';
import MinimalistHero from '@/components/design-styles/minimalist/MinimalistHero';
import BuildingProcess from '@/components/design-styles/minimalist/BuildingProcess';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Minimalist Design – Design By Choice',
  description: 'Discover the beauty of simplicity - Minimalist Design emphasizes clean lines, functional elegance, and the power of less is more.',
  keywords: ['minimalist design', 'minimalism', 'simple design', 'interior design', 'modern minimalism'],
};

export default function MinimalistDesign() {
  return (
    <>
      <Header />
      <MinimalistHero />
      <main className="main">
        <BuildingProcess />
      </main>
      <Footer />
    </>
  );
}
