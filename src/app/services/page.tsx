import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceSection from '@/components/services/ServiceSection';

export const metadata: Metadata = {
  title: 'Our Services – Design By Choice',
  description: 'Comprehensive design services including residential, commercial, consulting, and specialized design solutions.',
};

export default function ServicesPage() {
  const residentialServices = [
    {
      title: 'Full Design',
      description: 'Complete home transformation from concept to completion, covering every room and detail for a cohesive living environment.',
      href: '/services/residential/full-design'
    },
    {
      title: 'Bedrooms',
      description: 'Create your perfect sanctuary with custom bedroom designs that blend comfort, style, and functionality.',
      href: '/services/residential/bedrooms'
    },
    {
      title: 'Kitchens',
      description: 'Design the heart of your home with innovative kitchen solutions that combine aesthetics with optimal workflow.',
      href: '/services/residential/kitchens'
    },
    {
      title: 'Bathrooms',
      description: 'Transform your bathroom into a spa-like retreat with luxurious materials and thoughtful design.',
      href: '/services/residential/bathrooms'
    },
    {
      title: 'Dining & Living Rooms',
      description: 'Design elegant social spaces where family and friends gather, combining comfort with sophisticated style.',
      href: '/services/residential/dining-living'
    },
  ];

  const commercialServices = [
    {
      title: 'Office Spaces',
      description: 'Create inspiring work environments that boost productivity and reflect your company culture.',
      href: '/services/commercial/office-spaces'
    },
    {
      title: 'Retail Design',
      description: 'Design compelling retail spaces that attract customers and enhance the shopping experience.',
      href: '/services/commercial/retail-design'
    },
    {
      title: 'Hospitality',
      description: 'Craft memorable hospitality environments that delight guests and reinforce your brand identity.',
      href: '/services/commercial/hospitality'
    },
  ];

  const consultingServices = [
    {
      title: 'Pre-Purchase Consulting (Full Potential)',
      description: 'Expert guidance before buying property to assess renovation potential, costs, and design possibilities.',
      href: '/services/consulting/pre-purchase'
    },
    {
      title: 'Pre-Sale Consulting (Design Enhancement)',
      description: 'Strategic design improvements to maximize your property value and appeal to potential buyers.',
      href: '/services/consulting/pre-sale'
    },
    {
      title: 'One-Time Consultation',
      description: 'Focused design advice for specific challenges or decisions, providing expert direction when you need it.',
      href: '/services/consulting/one-time'
    },
  ];

  const specialServices = [
    {
      title: 'Design & Support for Overseas Residents',
      description: 'Complete remote design management for clients abroad, with live streaming and regular updates throughout your project.',
      href: '/services/special/overseas-residents'
    },
    {
      title: 'Developer & Investor Support',
      description: 'Professional design services for real estate developers and investors to maximize property value and market appeal.',
      href: '/services/special/developers-investors'
    },
    {
      title: 'Real Estate Agent Support',
      description: 'Partner with us to offer your clients professional design consultation and staging services.',
      href: '/services/special/real-estate-agents'
    },
  ];

  return (
    <>
      <Header />
      <main className="services-page">
        <ServicesHero />

        <ServiceSection
          title="Residential Design"
          subtitle="Complete Private Home Design"
          description="From concept to completion, we transform your living spaces into personalized sanctuaries that reflect your style, needs, and aspirations."
          services={residentialServices}
          index={0}
        />

        <ServiceSection
          title="Commercial Design"
          subtitle="Innovative Commercial Spaces"
          description="Creating inspiring work environments that enhance productivity, brand identity, and customer experience."
          services={commercialServices}
          index={1}
        />

        <ServiceSection
          title="Consulting Services"
          subtitle="Expert Design Guidance"
          description="Professional consultation services to help you make informed decisions, maximize your property's potential, and achieve your design goals."
          services={consultingServices}
          index={2}
        />

        <ServiceSection
          title="Special Services"
          subtitle="Tailored Design Solutions"
          description="Specialized services designed for unique client needs, from remote design management to professional partnerships."
          services={specialServices}
          index={3}
        />

        <ServiceSection
          title="Home Styling"
          subtitle="Transform Your Space"
          description="Professional staging and styling services that bring your home to life, whether for living or selling."
          services={[{
            title: 'Home Styling',
            description: 'Professional home staging and styling to showcase your property at its best, perfect for selling or refreshing your current space.',
            href: '/services/home-styling'
          }]}
          index={4}
          isSingle={true}
        />
      </main>
      <Footer />
    </>
  );
}
