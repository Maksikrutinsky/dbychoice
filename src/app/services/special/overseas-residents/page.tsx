import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OverseasResidentsHero from '@/components/services/special/OverseasResidentsHero';
import OverseasResidentsContent from '@/components/services/special/OverseasResidentsContent';
import './overseas-residents.css';

export const metadata: Metadata = {
  title: 'Design & Support for Overseas Residents – Design By Choice',
  description: 'Relocation Design Services for Out-of-State & International Clients. Seamless transition. Thoughtful design. A home that feels like yours — from day one.',
  keywords: ['overseas residents', 'relocation design', 'international clients', 'remote design', 'Arizona relocation', 'move-in ready'],
};

export default function OverseasResidentsPage() {
  return (
    <>
      <Header />
      <main className="overseas-residents-page">
        <OverseasResidentsHero />
        <OverseasResidentsContent />
      </main>
      <Footer />
    </>
  );
}
