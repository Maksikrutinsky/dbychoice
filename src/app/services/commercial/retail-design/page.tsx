import type { Metadata } from 'next';
import Header from '@/components/Header';
import ParallaxService from '@/components/ParallaxService';
import BackButton from '@/components/BackButton';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Retail Design – Design By Choice',
  description: 'Commercial Space Design. A well-designed commercial space reflects the brand\'s core values and naturally guides the customer toward the product.',
};

export default function RetailDesignPage() {
  return (
    <>
      <ParallaxService />
      <Header />
      <main className="ssp-page">

        <div className="ssp-stripe">
          <span className="ssp-watermark">06</span>
          <div className="container ssp-stripe-inner">
            <BackButton />
            <span className="ssp-eyebrow">Commercial Design</span>
            <h1 className="ssp-title">Retail Design</h1>
            <div className="ssp-rule" />
          </div>
        </div>

        <div className="container ssp-body">
          <div className="ssp-col-left">
            <p className="ssp-lead">
              A well-designed commercial space reflects the brand&apos;s core values and guides customers toward the product — the sales process begins the moment they walk through the door.
            </p>
            <ul className="ssp-points">
              <li>Brand integration from the earliest design stage</li>
              <li>Customer journey and traffic flow planning</li>
              <li>Product presentation and display strategy</li>
              <li>Material, color, and finish selection</li>
              <li>Innovation through creative and advanced materials</li>
              <li>Spaces that sell before a word is spoken</li>
            </ul>
            <div className="ssp-cta-row">
              <Link href="/#contact-cta" className="ssp-btn">
                Start a Conversation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/services/commercial/office-spaces" className="ssp-btn-ghost">Office Spaces</Link>
            </div>
          </div>
          <div className="ssp-col-right">
            <div className="ssp-grid">
              <div className="ssp-card">
                <h3>Brand Integration</h3>
                <p>Commercial design weaves brand identity into the space from day one — every material, surface, and layout decision aligned with the company&apos;s values and visual language.</p>
              </div>
              <div className="ssp-card">
                <h3>Customer Journey Design</h3>
                <p>A choreographed path from entrance to point of sale — strong first impression, effective product presentation, and a confident exit that reinforces the buying decision.</p>
              </div>
              <div className="ssp-card">
                <h3>Commercial Execution</h3>
                <p>High-quality design built around both the product and its audience. Innovation and creativity that differentiate your space and support long-term business growth.</p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}
