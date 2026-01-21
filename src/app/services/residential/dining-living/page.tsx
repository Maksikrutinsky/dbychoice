import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DiningLivingHero from '@/components/services/residential/DiningLivingHero';
import DiningLivingContent from '@/components/services/residential/DiningLivingContent';
import './dining-living.css';

export const metadata: Metadata = {
  title: 'Dining & Living Room Design – Design By Choice',
  description: 'Shared living spaces interior design. Creating inviting spaces for family time, hosting friends, and everyday living.',
  keywords: ['living room design', 'dining room design', 'interior design', 'shared living spaces', 'Arizona home design'],
};

export default function DiningLivingPage() {
  return (
    <>
      <Header />
      <main className="dining-living-page">
        <DiningLivingHero />
        <DiningLivingContent />
      </main>
      <Footer />
    </>
  );
}
