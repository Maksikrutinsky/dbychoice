import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DevelopersInvestorsHero from '@/components/services/special/DevelopersInvestorsHero';
import DevelopersInvestorsContent from '@/components/services/special/DevelopersInvestorsContent';
import './developers-investors.css';

export const metadata: Metadata = {
  title: 'Developer & Investor Support – Design By Choice',
  description: 'Design That Elevates Property Value. We help developers and investors create properties that stand out, attract buyers, and deliver exceptional returns.',
  keywords: ['developer support', 'investor design', 'property value', 'real estate development', 'model homes', 'smart refresh'],
};

export default function DevelopersInvestorsPage() {
  return (
    <>
      <Header />
      <main className="developers-investors-page">
        <DevelopersInvestorsHero />
        <DevelopersInvestorsContent />
      </main>
      <Footer />
    </>
  );
}
