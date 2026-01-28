import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RetailDesignHero from '@/components/services/commercial/RetailDesignHero';
import RetailDesignContent from '@/components/services/commercial/RetailDesignContent';
import './retail-design.css';

export const metadata: Metadata = {
  title: 'Retail Design – Design By Choice',
  description: 'Commercial Space Design. A well-designed commercial space must reflect the company\'s core values and DNA, while naturally guiding the customer toward the product itself.',
  keywords: ['retail design', 'commercial space design', 'store design', 'shop interior', 'retail interior design'],
};

export default function RetailDesignPage() {
  return (
    <>
      <Header />
      <main className="retail-design-page">
        <RetailDesignHero />
        <RetailDesignContent />
      </main>
      <Footer />
    </>
  );
}
