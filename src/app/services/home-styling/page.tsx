import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomeStylingHero from '@/components/services/HomeStylingHero';
import HomeStylingContent from '@/components/services/HomeStylingContent';
import './home-styling.css';

export const metadata: Metadata = {
  title: 'Home Styling – Design By Choice',
  description: 'Refresh Your Space Without a Full Redesign. Quick, impactful styling updates using what you have—or adding a few key pieces. Transform your home with professional styling.',
  keywords: ['home styling', 'interior styling', 'room refresh', 'home makeover', 'furniture arrangement', 'decor styling'],
};

export default function HomeStylingPage() {
  return (
    <>
      <Header />
      <main className="home-styling-page">
        <HomeStylingHero />
        <HomeStylingContent />
      </main>
      <Footer />
    </>
  );
}
