import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PrePurchaseHero from '@/components/services/consulting/PrePurchaseHero';
import PrePurchaseContent from '@/components/services/consulting/PrePurchaseContent';
import './pre-purchase.css';

export const metadata: Metadata = {
  title: 'Pre-Purchase Design Review™ – Design By Choice',
  description: 'Buy Smarter. Design Smarter. Professional design assessment before you make an offer. Understand your property\'s true potential and limitations.',
  keywords: ['pre-purchase consultation', 'design review', 'property assessment', 'real estate design', 'buyer consultation', 'home potential'],
};

export default function PrePurchasePage() {
  return (
    <>
      <Header />
      <main className="pre-purchase-page">
        <PrePurchaseHero />
        <PrePurchaseContent />
      </main>
      <Footer />
    </>
  );
}
