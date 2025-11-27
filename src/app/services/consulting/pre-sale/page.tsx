import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PreSaleHero from '@/components/services/consulting/PreSaleHero';
import PreSaleContent from '@/components/services/consulting/PreSaleContent';

export const metadata: Metadata = {
  title: 'Pre-Sale Design Consultation™ – Design By Choice',
  description: 'A focused, high-impact consultation that reveals what your home truly needs before hitting the market. Strategic design improvements to maximize property value.',
  keywords: ['pre-sale consultation', 'home staging', 'property value', 'real estate design', 'market appeal'],
};

export default function PreSalePage() {
  return (
    <>
      <Header />
      <main className="pre-sale-page">
        <PreSaleHero />
        <PreSaleContent />
      </main>
      <Footer />
    </>
  );
}
