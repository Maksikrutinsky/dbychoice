import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GuidesContent from '@/components/blog/GuidesContent';

export const metadata: Metadata = {
  title: 'Design Guides – Design By Choice',
  description: 'Step by step guides for designing, renovating, or building your home.',
};

export default function GuidesPage() {
  return (
    <>
      <Header />
      <GuidesContent />
      <Footer />
    </>
  );
}
