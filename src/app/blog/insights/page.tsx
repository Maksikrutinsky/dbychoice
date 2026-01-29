import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InsightsContent from '@/components/blog/InsightsContent';

export const metadata: Metadata = {
  title: 'Design Insights for Homes & Businesses – Design By Choice',
  description: 'Thoughtful design insights for every space—from private homes to businesses.',
};

export default function InsightsPage() {
  return (
    <>
      <Header />
      <InsightsContent />
      <Footer />
    </>
  );
}
