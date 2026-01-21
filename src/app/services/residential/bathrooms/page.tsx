import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BathroomsHero from '@/components/services/residential/BathroomsHero';
import BathroomsContent from '@/components/services/residential/BathroomsContent';
import './bathrooms.css';

export const metadata: Metadata = {
  title: 'Bathroom Design – Design By Choice',
  description: 'Thoughtfully designed bathrooms that improve quality of life. Luxury bathroom design, custom showers, and spa-like retreats.',
  keywords: ['bathroom design', 'luxury bathroom', 'shower design', 'bathroom renovation', 'Arizona bathroom design'],
};

export default function BathroomsPage() {
  return (
    <>
      <Header />
      <main className="bathrooms-page">
        <BathroomsHero />
        <BathroomsContent />
      </main>
      <Footer />
    </>
  );
}
