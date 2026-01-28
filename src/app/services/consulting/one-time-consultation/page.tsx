import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OneTimeConsultationHero from '@/components/services/consulting/OneTimeConsultationHero';
import OneTimeConsultationContent from '@/components/services/consulting/OneTimeConsultationContent';
import './one-time-consultation.css';

export const metadata: Metadata = {
  title: 'One-Time Consultation – Design By Choice',
  description: 'A personalized 1:1 design consultation. Your home, your dream, your path. Let\'s define it together.',
  keywords: ['design consultation', 'interior design consultation', 'home design advice', 'direction session', 'design guidance'],
};

export default function OneTimeConsultationPage() {
  return (
    <>
      <Header />
      <main className="one-time-consultation-page">
        <OneTimeConsultationHero />
        <OneTimeConsultationContent />
      </main>
      <Footer />
    </>
  );
}
