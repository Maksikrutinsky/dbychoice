import type { Metadata } from 'next';
import Header from '@/components/Header';
import ParallaxService from '@/components/ParallaxService';
import BackButton from '@/components/BackButton';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pre-Sale Design – Design By Choice',
  description: 'Strategic design improvements that maximize your sale price. Turn your property into the listing buyers compete for.',
};

export default function PreSalePage() {
  return (
    <>
      <ParallaxService />
      <Header />
      <main className="ssp-page">

        <div className="ssp-stripe">
          <span className="ssp-watermark">06</span>
          <div className="container ssp-stripe-inner">
            <BackButton />
            <span className="ssp-eyebrow">Virtual Design</span>
            <h1 className="ssp-title">Pre-Sale Design</h1>
            <div className="ssp-rule" />
          </div>
        </div>

        <div className="container ssp-body">
          <div className="ssp-col-left">
            <p className="ssp-lead">
              When a property needs more than staging — it needs a transformation. Strategic design improvements that maximize your sale price and make buyers compete for your listing.
            </p>
            <ul className="ssp-points">
              <li>Full design assessment for sale price maximization</li>
              <li>Layout adjustments and space optimization</li>
              <li>Targeted finish updates — flooring, paint, fixtures</li>
              <li>Styling and presentation for listing photography</li>
              <li>Budget-conscious approach with strong ROI focus</li>
              <li>For occupied homes, vacant properties, or any listing</li>
            </ul>
            <div className="ssp-cta-row">
              <Link href="/#contact-cta" className="ssp-btn">
                Request a Proposal
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/services/pre-purchase" className="ssp-btn-ghost">Pre-Purchase Consulting</Link>
            </div>
          </div>
          <div className="ssp-col-right">
            <div className="ssp-grid">
              <div className="ssp-card">
                <h3>Design Assessment</h3>
                <p>Full evaluation focused on sale price maximization — identifying which improvements deliver the strongest return and which can be skipped entirely.</p>
              </div>
              <div className="ssp-card">
                <h3>Finish Updates</h3>
                <p>Targeted updates to flooring, paint, fixtures, and hardware — the surfaces buyers notice first and price accordingly.</p>
              </div>
              <div className="ssp-card">
                <h3>Listing Presentation</h3>
                <p>Styling and arrangement optimized for listing photography — the first impression that determines whether buyers schedule a showing or scroll past.</p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}
