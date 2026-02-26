import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesVideoSection from '@/components/services/ServicesVideoSection';
import FlipCardSection from '@/components/services/FlipCardSection';
import RetirementSection from '@/components/services/RetirementSection';
import VirtualDesignSection from '@/components/services/VirtualDesignSection';
import ParallaxService from '@/components/ParallaxService';

export const metadata: Metadata = {
  title: 'Our Services – Design By Choice',
  description: 'Comprehensive interior design services: private homes, retirement communities, investors, virtual design, and commercial spaces.',
};

export default function ServicesPage() {
  return (
    <>
      <ParallaxService />
      <Header />
      <main className="services-page" style={{ position: 'relative', zIndex: 1 }}>
        <ServicesHero />

        <ServicesVideoSection />

        {/* Section 01 — Private Home Design */}
        <FlipCardSection
          id="residential"
          num="01"
          title="Private Home Design"
          subtitle="From a single room to a complete transformation — we design homes that truly feel like you."
          columns={3}
          cards={[
            {
              image: '/images/Residential Design/Full Design.webp',
              title: 'Full Custom Interiors',
              shortText: 'Complete home transformation from concept to completion. Every room, every detail — crafted for a cohesive, beautiful living space that reflects who you are.',
              href: '/services/full-custom-interiors',
              ctaLabel: 'Explore Full Design',
            },
            {
              image: '/images/Residential Design/What Kind of Planning Is Right for You1.webp',
              title: 'Partial Design',
              shortText: 'Targeted design for the spaces that matter most. Maximum impact within your defined scope and budget — no compromise on quality.',
              href: '/services/partial-design',
              ctaLabel: 'Explore Partial Design',
            },
            {
              image: '/images/Home Styling.webp',
              title: 'Home Styling',
              shortText: 'Professional staging and styling that transforms your space — whether you\'re living in it or preparing it for sale.',
              href: '/services/home-styling',
              ctaLabel: 'Explore Home Styling',
            },
          ]}
        />

        {/* Section 04 — Retirement Communities */}
        <RetirementSection />

        {/* Section 03 — Design for ROI */}
        <FlipCardSection
          id="roi"
          num="03"
          title="Design for ROI"
          subtitle="Smart design that drives returns — for investors, agents, and short-term rental hosts."
          columns={3}
          cards={[
            {
              image: '/images/Developer & Investor Support.webp',
              title: 'Investors & Developers',
              shortText: 'Turn a good property into a premium listing. Full design strategy from purchase to market — built to sell fast and command higher prices.',
              href: '/services/investors',
              ctaLabel: 'View Investor Services',
            },
            {
              image: '/images/Real Estate Agent Support.webp',
              title: 'Real Estate Agents',
              shortText: 'Close more deals with a design partner behind you. From pre-sale transformations to post-purchase guidance that builds lasting referrals.',
              href: '/services/real-estate-agents',
              ctaLabel: 'Agent Partnership',
            },
            {
              image: '/images/Residential Design/The Focal Point and Gathering Area1.webp',
              title: 'AirBnB & Short-Term Rentals',
              shortText: 'Design experiences guests pay premium rates to book — and come back for. Optimized for occupancy, photography, and glowing reviews.',
              href: '/services/airbnb',
              ctaLabel: 'Explore STR Design',
            },
          ]}
        />

        {/* Section 06 — Virtual Design (before/after slider) */}
        <VirtualDesignSection />

        {/* Section 05 — Commercial Design */}
        <FlipCardSection
          id="commercial"
          num="05"
          title="Commercial Design"
          subtitle="Inspiring spaces for businesses that want to make an impression — and keep it."
          columns={3}
          cards={[
            {
              image: '/images/Commercial Design/Office Spaces.webp',
              title: 'Office Spaces',
              shortText: 'Create inspiring work environments that boost productivity, reflect your company culture, and impress clients from the moment they walk in.',
              href: '/services/commercial/office-spaces',
              ctaLabel: 'Explore Office Design',
            },
            {
              image: '/images/Commercial Design/Retail Design.webp',
              title: 'Retail Design',
              shortText: 'Design compelling retail spaces that attract customers, guide the shopping journey, and elevate your brand experience.',
              href: '/services/commercial/retail-design',
              ctaLabel: 'Explore Retail Design',
            },
            {
              image: '/images/Commercial Design/Hospitality.webp',
              title: 'Hospitality',
              shortText: 'Craft memorable hospitality environments that delight guests, reinforce your brand identity, and keep people coming back.',
              href: '/services/commercial/hospitality',
              ctaLabel: 'Explore Hospitality',
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
