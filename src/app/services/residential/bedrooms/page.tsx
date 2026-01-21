import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BedroomsHero from '@/components/services/residential/BedroomsHero';
import BedroomsContent from '@/components/services/residential/BedroomsContent';
import './bedrooms.css';

export const metadata: Metadata = {
  title: 'Bedroom Design – Design By Choice',
  description: 'A personal space to begin and end the day. Custom bedroom design for master bedrooms, children\'s bedrooms, and guest rooms.',
  keywords: ['bedroom design', 'master bedroom', 'children bedroom', 'interior design', 'Arizona bedroom design'],
};

export default function BedroomsPage() {
  return (
    <>
      <Header />
      <main className="bedrooms-page">
        <BedroomsHero />
        <BedroomsContent />
      </main>
      <Footer />
    </>
  );
}
