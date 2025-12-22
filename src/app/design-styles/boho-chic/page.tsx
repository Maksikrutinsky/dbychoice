import type { Metadata } from 'next';
import Header from '@/components/Header';
import BohoChicHero from '@/components/design-styles/boho-chic/BohoChicHero';
import BuildingProcess from '@/components/design-styles/boho-chic/BuildingProcess';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Boho Chic Design – Design By Choice',
  description: 'Discover free-spirited style - Boho Chic Design layers global influences, vintage finds, and natural textures into authentic, artistic spaces.',
  keywords: ['boho design', 'bohemian design', 'chic design', 'vintage design', 'interior design'],
};

export default function BohoChicDesign() {
  return (
    <>
      <Header />
      <BohoChicHero />
      <main className="main">
        <BuildingProcess />
      </main>
      <Footer />
    </>
  );
}
