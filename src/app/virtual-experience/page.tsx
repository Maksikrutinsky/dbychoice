import type { Metadata } from 'next';
import Header from '@/components/Header';
import VirtualExperienceHero from '@/components/virtual-experience/VirtualExperienceHero';
import Section2 from '@/components/virtual-experience/Section2';
import Section3 from '@/components/virtual-experience/Section3';
import Section4 from '@/components/virtual-experience/Section4';
import Section5 from '@/components/virtual-experience/Section5';
import Footer from '@/components/Footer';
import YouTubeModal from '@/components/YouTubeModal';

export const metadata: Metadata = {
  title: 'Virtual Experience – Design By Choice',
  description: 'Experience interior design like never before with our virtual reality solutions.',
  keywords: ['virtual experience', 'virtual reality', 'interior design', 'VR design', 'mixed reality'],
};

export default function VirtualExperience() {
  return (
    <>
      <Header />
      <VirtualExperienceHero />
      <main className="main">
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </main>
      <Footer />
      <YouTubeModal />
    </>
  );
}
