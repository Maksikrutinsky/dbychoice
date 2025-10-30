import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import RevolutionaryDesign from '@/components/RevolutionaryDesign';
import VisionSection from '@/components/VisionSection';
import LightingShowcase from '@/components/LightingShowcase';
import UltraRealistic from '@/components/UltraRealistic';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import YouTubeModal from '@/components/YouTubeModal';

export const metadata: Metadata = {
  title: 'Design By Choice – Where You\'re Part of the Creative Reality',
  description: 'Smart, transparent, and accessible interior design – from anywhere, anytime. Expert team, live streaming from the field, and interactive visualizations.',
  keywords: ['interior design', 'smart design', 'mixed reality', 'home design', 'virtual design', 'design technology'],
  authors: [{ name: 'Design By Choice' }],
  openGraph: {
    title: 'Design By Choice – Where You\'re Part of the Creative Reality',
    description: 'Smart, transparent, and accessible interior design – from anywhere, anytime.',
    url: 'https://designbychoice.com',
    siteName: 'Design By Choice',
    images: [
      {
        url: '/images/DESIGNBYCHOICE1.png',
        width: 1200,
        height: 630,
        alt: 'Design By Choice',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Design By Choice – Where You\'re Part of the Creative Reality',
    description: 'Smart, transparent, and accessible interior design – from anywhere, anytime.',
    images: ['/images/DESIGNBYCHOICE1.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://designbychoice.com',
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className="main">
        <RevolutionaryDesign />
        <VisionSection />
        <UltraRealistic />
        <LightingShowcase />
        <ContactCTA />
      </main>
      <Footer />
      <YouTubeModal />
    </>
  );
}
