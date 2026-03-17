import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesVideoSection from '@/components/services/ServicesVideoSection';
import FlipCardSection from '@/components/services/FlipCardSection';
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

        {/* Section 01 — Residential Interior Design */}
        <FlipCardSection
          id="residential"
          num="01"
          title="Residential Interior Design"
          subtitle="Custom home design services for homeowners and buyers"
          columns={2}
          cards={[
            {
              image: '/images/Residential Design/Full Design.webp',
              title: 'Full-Service Interior Design',
              bullets: [
                'Complete design concept development',
                'Space planning & layout optimization',
                'Full material selection (flooring, cabinetry, countertops, tile)',
                'Furniture, lighting & fixture selection',
                'Color palette & paint specifications',
                'Detailed sourcing with budget breakdown',
                'Contractor coordination & quality control',
                'Final styling & installation oversight',
              ],
            },
            {
              image: '/images/Residential Design/The Focal Point and Gathering Area1.webp',
              title: 'Single Room Design',
              bullets: [
                'Focused design for one room (living room, bedroom, kitchen, etc.)',
                'Space planning & furniture layout',
                'Material & finish selection for that room',
                'Lighting & fixture recommendations',
                'Color palette specific to the space',
                'Furniture & decor sourcing with links',
                'Budget-friendly options provided',
                'Styling guidance for completion',
              ],
            },
            {
              image: '/images/Residential Design/What Kind of Planning Is Right for You1.webp',
              title: 'Space-by-Space Design',
              bullets: [
                'Design multiple rooms without full-home commitment',
                'Phased approach (e.g., first floor now, second floor later)',
                'Each space designed individually with cohesive overall aesthetic',
                'Material & furniture selection per space',
                'Budget flexibility: prioritize rooms based on needs',
                'Contractor coordination for each phase',
                'Allows gradual transformation over time',
              ],
            },
            {
              image: '/images/Pre-Purchase Design Review page.webp',
              title: 'Pre-Purchase Design Review',
              bullets: [
                '1-hour property walkthrough before you buy',
                "Design potential assessment: what's achievable within your budget",
                'Layout evaluation & improvement suggestions',
                'Renovation cost estimates for proposed changes',
                'Red flags identification (structural, design limitations)',
                'Written summary delivered within 24-48 hours',
                'Helps you make confident, informed purchase decisions',
              ],
            },
          ]}
        />

        {/* Section 02 — Design for Real Estate Investors */}
        <FlipCardSection
          id="investors"
          num="02"
          title="Interior Design for Real Estate Investors"
          subtitle="Strategic design services for flip projects and rental properties"
          columns={2}
          cards={[
            {
              image: '/images/Developer & Investor Support.webp',
              title: 'Flip Design Package',
              bullets: [
                'Complete interior design strategy from purchase to listing',
                'Space planning & layout optimization for maximum perceived value',
                'Full material & finish selection: flooring, cabinetry, countertops, tile, paint',
                'Fixture packages (plumbing, lighting, hardware)',
                'Detailed finish schedules for contractor reference',
                'Supplier sourcing with pricing guidance',
                'On-site visits during key installation phases',
                'Final styling recommendations for listing photography',
                'Design that sells fast & commands premium prices',
              ],
            },
            {
              image: '/images/Real Estate Agent Support.webp',
              title: 'Short-Term Rental Design (Airbnb/VRBO)',
              bullets: [
                'Guest experience strategy & design concept',
                'Photography-ready space planning for listing photos',
                '"Instagram moment" creation: shareable spaces guests post about',
                'Cohesive aesthetic that differentiates from generic rentals',
                'Durable material selection for high-turnover rental use',
                'Complete furniture & decor sourcing with budget breakdown',
                'Bedding, linens & kitchen essentials specifications',
                'Styling guidance for professional photography',
                'Design that drives occupancy & justifies premium nightly rates',
              ],
            },
          ]}
        />

        {/* Section 03 — Furniture & Styling Services */}
        <FlipCardSection
          id="styling"
          num="03"
          title="Furniture & Styling Services"
          subtitle="Professional staging and furnishing for listings and move-ins"
          columns={3}
          cards={[
            {
              image: '/images/Pre-Sale Design Consultation page.webp',
              title: 'Presale Design & Staging',
              bullets: [
                '90-minute property walkthrough & assessment',
                'Comprehensive written staging report',
                'What to declutter, remove, rearrange',
                'Strategic additions: budget-friendly purchases that elevate the space',
                'Specific product recommendations with links & pricing',
                'Paint color recommendations for rooms needing refresh',
                'Quick fix checklist: small repairs for maximum impact',
                'Priority action plan: what to do first, second, third',
                '30-minute follow-up phone consultation',
              ],
            },
            {
              image: '/images/Home Styling.webp',
              title: 'One-Day Move-In Support',
              bullets: [
                'On-site support on your move-in day',
                'Furniture placement & layout guidance in real-time',
                'Unpacking strategy: what goes where for optimal flow',
                'Quick styling of main living areas',
                'Lighting setup & arrangement',
                'Immediate "livable & beautiful" result',
                'Photo documentation of completed spaces',
                'Follow-up recommendations for remaining rooms',
                'Perfect for relocation clients or first-time homeowners',
              ],
            },
            {
              image: '/images/Residential Design/How Much Would You Like to Invest in Your Living Room Design1.webp',
              title: 'Full-Home Furniture & Styling',
              bullets: [
                'Complete furniture selection for entire home',
                'Sourcing with detailed budget breakdown by room',
                'Furniture layout & space planning',
                'Decor, artwork & accessories selection',
                'Window treatments & rug recommendations',
                'Coordination of delivery & installation',
                'Final styling & placement of all items',
                'Move-in ready, fully furnished home',
                'Cohesive aesthetic throughout',
              ],
            },
          ]}
        />

        {/* Section 04 — Remote Design Services */}
        <FlipCardSection
          id="remote"
          num="04"
          title="Remote Design Services"
          subtitle="Virtual design and project management for out-of-state property owners"
          columns={3}
          cards={[
            {
              image: '/images/Pre-Purchase Design Review page.webp',
              title: 'Pre-Purchase Design Review (Remote)',
              bullets: [
                'Virtual property walkthrough via video call',
                'Design potential assessment based on photos & videos you provide',
                'Layout evaluation & improvement suggestions',
                'Renovation cost estimates for Arizona market',
                'Red flags identification from available documentation',
                'Written summary with visual references',
                'Delivered within 48 hours',
                'Perfect for out-of-state investors evaluating properties',
              ],
            },
            {
              image: '/images/Residential Design/Living Room Design – In Your Style1.webp',
              title: 'Full Interior Design Services (Remote)',
              bullets: [
                'Virtual design consultation via video',
                'Complete design concept development',
                'Space planning & layout with floor plans',
                'Material, furniture & finish selection',
                '3D renderings for complex spaces (if needed)',
                'Detailed sourcing from Arizona-local suppliers',
                'Coordination with your local contractors',
                'Remote quality control through photos/videos',
                'Final styling guidance',
              ],
            },
            {
              image: '/images/Residential Design/Dining & Living Rooms.webp',
              title: 'Remote Project Management',
              bullets: [
                'Your local eyes on your Arizona investment',
                'Virtual design consultation & full design development',
                'Local contractor coordination & bid management',
                'Weekly (or custom) on-site property inspections',
                'Regular on-site visits with photo/video updates',
                'Quality control: work verified against specifications',
                'Budget tracking & expense documentation',
                'Timeline management & schedule adherence',
                'Punch list development & completion verification',
              ],
            },
          ]}
        />

        {/* Section 05 — Senior Living (Coming Soon) */}
        <FlipCardSection
          id="senior"
          num="05"
          title="Senior Living & Retirement Community Design"
          subtitle="Accessible, comfortable interior design for aging in place"
          columns={3}
          comingSoon
          cards={[
            {
              image: '/images/Residential Design/Bedrooms in Private Homes1.webp',
              title: 'Full-Service Interior Design',
              bullets: [
                'Complete design tailored for aging-in-place safety & comfort',
                'Accessible layout planning: wide doorways, clear pathways',
                'Non-slip flooring selection',
                'Grab bar placement & bathroom safety features',
                'Lighting design for visibility & fall prevention',
                'Furniture selection: stable, easy-to-use, ergonomic',
                'Color contrast for visual clarity',
                'Material & finish selection for easy maintenance',
              ],
            },
            {
              image: '/images/Residential Design/Custom bathroom design1.webp',
              title: 'ADA-Compliant Design Solutions',
              bullets: [
                'Full ADA compliance assessment',
                'Accessible bathroom design: roll-in showers, grab bars',
                'Kitchen modifications: lowered counters, accessible storage',
                'Doorway widening & threshold removal',
                'Ramp design & handrail installation planning',
                'Flooring transitions & slip-resistance',
                'Lighting & contrast for visual impairments',
                'Maintains aesthetic quality while meeting compliance',
              ],
            },
            {
              image: '/images/salon.webp',
              title: 'Aging-in-Place Remodels',
              bullets: [
                'Strategic home modifications for long-term safety',
                'Bathroom remodels: walk-in tubs, curbless showers',
                'Kitchen updates: accessible storage, easy-reach cabinets',
                'Bedroom modifications: proper lighting, accessible closets',
                'Stairway solutions: better lighting, handrails, potential for lift',
                'Flooring replacement: non-slip, low-maintenance',
                'Smart home integration: voice-activated lighting',
                'Future-proofing: design that adapts as needs change',
              ],
            },
          ]}
        />

        {/* Section 06 — Commercial Design (Coming Soon) */}
        <FlipCardSection
          id="commercial"
          num="06"
          title="Commercial Interior Design"
          subtitle="Office, retail, and hospitality design services"
          columns={3}
          comingSoon
          cards={[
            {
              image: '/images/Commercial Design/Office Spaces.webp',
              title: 'Full Commercial Interior Design',
              bullets: [
                'Complete commercial space design (office, retail, hospitality)',
                'Space planning optimized for workflow & customer experience',
                'Brand-aligned aesthetic & design concept',
                'Material & finish selection for high-traffic commercial use',
                'Furniture, fixtures & equipment (FF&E) selection',
                'Lighting design for functionality & ambiance',
                'Signage & wayfinding integration',
                'ADA compliance verification',
                'Budget management & value engineering',
              ],
            },
            {
              image: '/images/Commercial Design/Retail Design.webp',
              title: 'Pre-Purchase Potential Review',
              bullets: [
                'Commercial property walkthrough before purchase/lease',
                'Space evaluation: does it fit your business needs?',
                'Layout potential assessment & improvement suggestions',
                'Renovation cost estimates for commercial build-out',
                'Zoning & code compliance considerations',
                'Visibility, accessibility & customer flow evaluation',
                'Red flags identification (structural, mechanical, design limitations)',
                'Written summary delivered within 48 hours',
              ],
            },
            {
              image: '/images/Commercial Design/Hospitality.webp',
              title: 'Furniture & Styling Services (Commercial)',
              bullets: [
                'Complete furniture selection for commercial spaces',
                'Office furniture: desks, chairs, conference tables, storage',
                'Reception & waiting area furnishing',
                'Break room & employee lounge setup',
                'Retail display fixtures & merchandising solutions',
                'Restaurant/hospitality seating & furniture',
                'Durable, commercial-grade materials',
                'Coordination of delivery & installation',
              ],
            },
          ]}
        />

        {/* ── Contact CTA ── */}
        <section className="services-contact-cta">
          <div className="services-contact-inner">
            <span className="services-contact-eyebrow">Design By Choice · Get In Touch</span>
            <h2 className="services-contact-heading">
              Ready to Transform<br />
              <span className="services-contact-accent">Your Space?</span>
            </h2>
            <p className="services-contact-text">
              Let&apos;s discuss your project and find the perfect design solution for you.
            </p>
            <Link href="/#contact-cta" className="services-contact-btn">
              Start Your Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
