import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FullDesignHero from '@/components/services/residential/FullDesignHero';
import FullDesignContent from '@/components/services/residential/FullDesignContent';
import './full-design.css';

export const metadata: Metadata = {
  title: 'Full Interior Design – Design By Choice',
  description: 'Full interior design for private homes. Personal, bespoke design from the heart. Complete home transformation from concept to completion.',
  keywords: ['full interior design', 'residential design', 'private home design', 'bespoke design', 'Arizona interior design'],
};

export default function FullDesignPage() {
  return (
    <>
      <Header />
      <main className="full-design-page">
        <FullDesignHero />
        <FullDesignContent />
      </main>
      <Footer />
    </>
  );
}
