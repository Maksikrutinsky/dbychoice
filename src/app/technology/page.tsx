import type { Metadata } from 'next';
import Header from '@/components/Header';
import VisionSection from '@/components/VisionSection';
import UltraRealistic from '@/components/UltraRealistic';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Technology – Design By Choice',
  description: 'Explore our cutting-edge technology that brings interior design to life with mixed reality and ultra-realistic visualizations.',
  keywords: ['interior design technology', 'mixed reality', 'virtual design', 'design innovation'],
};

export default function Technology() {
  return (
    <>
      <Header />
      <main className="main">
        <VisionSection />
        <UltraRealistic />
      </main>
      <Footer />
    </>
  );
}
