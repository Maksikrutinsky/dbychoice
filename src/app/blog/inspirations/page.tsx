import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InspirationsContent from '@/components/blog/InspirationsContent';

export const metadata: Metadata = {
  title: 'Design Inspirations & Ideas – Design By Choice',
  description: 'Explore design inspirations rooted in nature, art, cultures, and historical eras.',
};

export default function InspirationsPage() {
  return (
    <>
      <Header />
      <InspirationsContent />
      <Footer />
    </>
  );
}
