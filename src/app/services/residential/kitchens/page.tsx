import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import KitchensHero from '@/components/services/residential/KitchensHero';
import KitchensContent from '@/components/services/residential/KitchensContent';
import './kitchens.css';

export const metadata: Metadata = {
  title: 'Kitchen Design – Design By Choice',
  description: 'The heart of the home. Custom kitchen design combining aesthetics, functionality, and a deeply personal lifestyle approach.',
  keywords: ['kitchen design', 'custom kitchens', 'kitchen renovation', 'Arizona kitchen design', 'outdoor kitchens'],
};

export default function KitchensPage() {
  return (
    <>
      <Header />
      <main className="kitchens-page">
        <KitchensHero />
        <KitchensContent />
      </main>
      <Footer />
    </>
  );
}
