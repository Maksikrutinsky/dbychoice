import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OfficeSpacesHero from '@/components/services/commercial/OfficeSpacesHero';
import OfficeSpacesContent from '@/components/services/commercial/OfficeSpacesContent';
import './office-spaces.css';

export const metadata: Metadata = {
  title: 'Office Spaces Design – Design By Choice',
  description: 'Business & Commercial Environment Design. We plan and design office spaces that are fully tailored to the company, its employees, and its clients.',
  keywords: ['office design', 'commercial interior design', 'workspace design', 'business environment', 'office planning'],
};

export default function OfficeSpacesPage() {
  return (
    <>
      <Header />
      <main className="office-spaces-page">
        <OfficeSpacesHero />
        <OfficeSpacesContent />
      </main>
      <Footer />
    </>
  );
}
