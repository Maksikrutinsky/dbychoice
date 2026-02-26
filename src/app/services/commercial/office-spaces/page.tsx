import type { Metadata } from 'next';
import Header from '@/components/Header';
import ParallaxService from '@/components/ParallaxService';
import BackButton from '@/components/BackButton';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Office Spaces Design – Design By Choice',
  description: 'Business & Commercial Environment Design. We plan and design office spaces that are fully tailored to the company, its employees, and its clients.',
};

export default function OfficeSpacesPage() {
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
            <h1 className="ssp-title">Office Spaces</h1>
            <div className="ssp-rule" />
          </div>
        </div>

        <div className="container ssp-body">
          <div className="ssp-col-left">
            <p className="ssp-lead">
              Office design tells the company&apos;s story — reflecting its vision, values, and culture. We create workspaces tailored to the company, its team, and its clients, supporting productivity, creativity, and a strong sense of identity.
            </p>
            <ul className="ssp-points">
              <li>Space planning and division of offices and shared areas</li>
              <li>Material, color, and finish selection</li>
              <li>Furniture procurement and styling</li>
              <li>Full architectural and electrical drawing set</li>
              <li>Contractor coordination through move-in</li>
              <li>Renovation and shell-stage projects</li>
            </ul>
            <div className="ssp-cta-row">
              <Link href="/#contact-cta" className="ssp-btn">
                Start a Conversation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/services/commercial/retail-design" className="ssp-btn-ghost">Retail Design</Link>
            </div>
          </div>
          <div className="ssp-col-right">
            <div className="ssp-grid">
              <div className="ssp-card">
                <h3>Brand-Driven Design</h3>
                <p>Design inspired by what the company communicates — professionally and personally, internally and to clients. Color, material, and layout chosen to reflect organizational identity.</p>
              </div>
              <div className="ssp-card">
                <h3>Comprehensive Planning</h3>
                <p>A full set of drawings and specifications: architectural layout, electrical planning, flooring, ceiling, wall design, and complete interior finish selection for every surface.</p>
              </div>
              <div className="ssp-card">
                <h3>End-to-End Coordination</h3>
                <p>From concept through contractor management to employee move-in — all elements aligned into a single, cohesive space built for productivity and everyday comfort.</p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}
