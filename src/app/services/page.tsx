import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceSection from '@/components/services/ServiceSection';
import ParallaxService from '@/components/ParallaxService';

export const metadata: Metadata = {
  title: 'Our Services – Design By Choice',
  description: 'Comprehensive design services including residential, commercial, consulting, and specialized design solutions.',
};

export default function ServicesPage() {
  const residentialServices = [
    {
      title: 'Full Design',
      description: 'Complete home transformation from concept to completion, covering every room and detail for a cohesive living environment.',
      href: '/services/residential/full-design',
      image1: '/images/FullDesign1.webp',
      image2: '/images/FullDesign2.webp'
    },
    {
      title: 'Bedrooms',
      description: 'Create your perfect sanctuary with custom bedroom designs that blend comfort, style, and functionality.',
      href: '/services/residential/bedrooms',
      image1: '/images/Bedrooms1.webp',
      image2: '/images/Bedrooms2.webp'
    },
    {
      title: 'Kitchens',
      description: 'Design the heart of your home with innovative kitchen solutions that combine aesthetics with optimal workflow.',
      href: '/services/residential/kitchens',
      image1: '/images/Kitchens1.webp',
      image2: '/images/Kitchens2.webp'
    },
    {
      title: 'Bathrooms',
      description: 'Transform your bathroom into a spa-like retreat with luxurious materials and thoughtful design.',
      href: '/services/residential/bathrooms',
      image1: '/images/Bathrooms1.webp',
      image2: '/images/Bathrooms2.webp'
    },
    {
      title: 'Dining & Living Rooms',
      description: 'Design elegant social spaces where family and friends gather, combining comfort with sophisticated style.',
      href: '/services/residential/dining-living',
      image1: '/images/Dining1.webp',
      image2: '/images/Dining2.webp'
    },
  ];

  const commercialServices = [
    {
      title: 'Office Spaces',
      description: 'Create inspiring work environments that boost productivity and reflect your company culture.',
      href: '/services/commercial/office-spaces',
      image1: '/images/OFFICE SPACES.webp',
      image2: '/images/service1.webp'
    },
    {
      title: 'Retail Design',
      description: 'Design compelling retail spaces that attract customers and enhance the shopping experience.',
      href: '/services/commercial/retail-design',
      image1: '/images/RETAIL DESIGN.webp',
      image2: '/images/service1.webp'
    },
    {
      title: 'Hospitality',
      description: 'Craft memorable hospitality environments that delight guests and reinforce your brand identity.',
      href: '/services/commercial/hospitality',
      image1: '/images/HOSPITALITY.webp',
      image2: '/images/service1.webp'
    },
  ];

  const consultingServices = [
    {
      title: 'Pre-Purchase Consulting (Full Potential)',
      description: 'Expert guidance before buying property to assess renovation potential, costs, and design possibilities.',
      href: '/services/consulting/pre-purchase',
      image1: '/images/Pre-Purchase Consulting-before.webp',
      image2: '/images/Pre-Purchase Consulting-after.webp'
    },
    {
      title: 'Pre-Sale Consulting (Design Enhancement)',
      description: 'Strategic design improvements to maximize your property value and appeal to potential buyers.',
      href: '/services/consulting/pre-sale',
      image1: '/images/Pre-Sale Consulting-before.webp',
      image2: '/images/Pre-Sale Consulting-after.webp'
    },
    {
      title: 'One-Time Consultation',
      description: 'Focused design advice for specific challenges or decisions, providing expert direction when you need it.',
      href: '/services/consulting/one-time',
      image1: '/images/One-Time Consultation-before.webp',
      image2: '/images/One-Time Consultation-after.webp'
    },
  ];

  const specialServices = [
    {
      title: 'Design & Support for Overseas Residents',
      description: 'Complete remote design management for clients abroad, with live streaming and regular updates throughout your project.',
      href: '/services/special/overseas-residents',
      image1: '/images/Design & Support for Overseas Residents.webp',
      image2: '/images/service1.webp'
    },
    {
      title: 'Developer & Investor Support',
      description: 'Professional design services for real estate developers and investors to maximize property value and market appeal.',
      href: '/services/special/developers-investors',
      image1: '/images/Developer & Investor Support.webp',
      image2: '/images/service1.webp'
    },
    {
      title: 'Real Estate Agent Support',
      description: 'Partner with us to offer your clients professional design consultation and staging services.',
      href: '/services/special/real-estate-agents',
      image1: '/images/Real Estate Agent Support.webp',
      image2: '/images/service1.webp'
    },
  ];

  return (
    <>
      <ParallaxService />
      <Header />
      <main className="services-page" style={{ position: 'relative', zIndex: 1 }}>
        <ServicesHero />

        <div id="residential">
          <ServiceSection
            title="Residential Design"
            subtitle="Complete Private Home Design"
            description="From concept to completion, we transform your living spaces into personalized sanctuaries that reflect your style, needs, and aspirations."
            services={residentialServices}
            index={0}
          />
        </div>

        <div id="commercial">
          <ServiceSection
            title="Commercial Design"
            subtitle="Innovative Commercial Spaces"
            description="Creating inspiring work environments that enhance productivity, brand identity, and customer experience."
            services={commercialServices}
            index={1}
          />
        </div>

        <div id="consulting">
          <ServiceSection
            title="Consulting Services"
            subtitle="Expert Design Guidance"
            description="Professional consultation services to help you make informed decisions, maximize your property's potential, and achieve your design goals."
            services={consultingServices}
            index={2}
            isConsulting={true}
          />
        </div>

        <div id="special">
          <ServiceSection
            title="Special Services"
            subtitle="Tailored Design Solutions"
            description="Specialized services designed for unique client needs, from remote design management to professional partnerships."
            services={specialServices}
            index={3}
            isSpecial={true}
          />
        </div>

        <div id="home-styling">
          <ServiceSection
            title="Home Styling"
            subtitle="Transform Your Space"
            description="Professional staging and styling services that bring your home to life, whether for living or selling."
            services={[{
              title: 'Home Styling',
              description: 'Professional home staging and styling to showcase your property at its best, perfect for selling or refreshing your current space.',
              href: '/services/home-styling',
              image1: '/images/Home Styling.webp',
              image2: '/images/service1.webp'
            }]}
            index={4}
            isHomeStyling={true}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
