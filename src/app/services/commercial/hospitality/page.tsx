import type { Metadata } from 'next';
import Header from '@/components/Header';
import ParallaxService from '@/components/ParallaxService';
import BackButton from '@/components/BackButton';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hospitality Design – Design By Choice',
  description: 'Crafting memorable hospitality environments that delight guests and reinforce your brand identity — without structural changes or construction downtime.',
};

export default function HospitalityPage() {
  return (
    <>
      <ParallaxService />
      <Header />
      <main className="ssp-page">

        <div className="ssp-stripe">
          <span className="ssp-watermark">05</span>
          <div className="container ssp-stripe-inner">
            <BackButton />
            <span className="ssp-eyebrow">Commercial Design</span>
            <h1 className="ssp-title">Hospitality Design</h1>
            <div className="ssp-rule" />
          </div>
        </div>

        <div className="container ssp-body">
          <div className="ssp-col-left">
            <p className="ssp-lead">
              Every hospitality space tells a story. We transform hotels, boutique properties, and guest environments into spaces that feel elevated, cohesive, and unforgettable — without structural changes or construction downtime.
            </p>
            <ul className="ssp-points">
              <li>No structural changes, no system replacements</li>
              <li>Furniture, lighting, and textile curation</li>
              <li>Color palette and material selection</li>
              <li>Flow, atmosphere, and spatial planning</li>
              <li>Brand identity woven into every surface</li>
              <li>Complete styling and accessory placement</li>
            </ul>
            <div className="ssp-cta-row">
              <Link href="/#contact-cta" className="ssp-btn">
                Book a Consultation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/services/commercial/retail-design" className="ssp-btn-ghost">Retail Design</Link>
            </div>
          </div>
          <div className="ssp-col-right">
            <div className="ssp-grid">
              <div className="ssp-card">
                <h3>Atmosphere First</h3>
                <p>Guest experience shaped through furniture, color, lighting, textiles, art, and materials — every element chosen to create an environment that feels intentional and memorable.</p>
              </div>
              <div className="ssp-card">
                <h3>No Disruption</h3>
                <p>Maximum impact without renovation. Faster to implement, more budget-efficient, and easy to execute without closing the property — ideal for hotels, boutique stays, and serviced apartments.</p>
              </div>
              <div className="ssp-card">
                <h3>Lasting Impression</h3>
                <p>A refined, layered hospitality environment designed to welcome, engage, and leave guests wanting to return — and leaving the review that brings the next booking.</p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}
