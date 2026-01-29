import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TipsContent from '@/components/blog/TipsContent';

export const metadata: Metadata = {
  title: 'Professional Design Tips – Design By Choice',
  description: 'Expert design guidance to sharpen your perspective and inspire smarter choices.',
};

export default function TipsPage() {
  return (
    <>
      <Header />
      <TipsContent />
      <Footer />
    </>
  );
}
