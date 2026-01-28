import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HospitalityHero from '@/components/services/commercial/HospitalityHero';
import HospitalityContent from '@/components/services/commercial/HospitalityContent';
import './hospitality.css';

export const metadata: Metadata = {
  title: 'Hospitality Design – Design By Choice',
  description: 'Crafting memorable hospitality environments that delight guests and reinforce your brand identity. Professional hospitality styling without structural changes.',
  keywords: ['hospitality design', 'hotel design', 'boutique accommodation', 'guest experience', 'hospitality styling'],
};

export default function HospitalityPage() {
  return (
    <>
      <Header />
      <main className="hospitality-page">
        <HospitalityHero />
        <HospitalityContent />
      </main>
      <Footer />
    </>
  );
}
