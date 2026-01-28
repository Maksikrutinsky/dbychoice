import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RealEstateAgentsHero from '@/components/services/special/RealEstateAgentsHero';
import RealEstateAgentsContent from '@/components/services/special/RealEstateAgentsContent';
import './real-estate-agents.css';

export const metadata: Metadata = {
  title: 'Real Estate Agent Support – Design By Choice',
  description: 'Turn Listings Into Sold Signs. Premium design tools to help your clients see the potential—and make their decision. Pre-sale staging and buyer visualization.',
  keywords: ['real estate support', 'agent services', 'property staging', 'buyer visualization', 'listing design', 'real estate design'],
};

export default function RealEstateAgentsPage() {
  return (
    <>
      <Header />
      <main className="real-estate-agents-page">
        <RealEstateAgentsHero />
        <RealEstateAgentsContent />
      </main>
      <Footer />
    </>
  );
}
