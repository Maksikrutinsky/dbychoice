import type { Metadata } from 'next';
import Header from '@/components/Header';
import ParallaxService from '@/components/ParallaxService';
import BackButton from '@/components/BackButton';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Real Estate Agent Design Partnership – Design By Choice',
  description: 'Become the agent who offers more. Design partnership services that help you close more deals and build lasting referrals.',
};

export default function RealEstateAgentsPage() {
  return (
    <>
      <ParallaxService />
      <Header />
      <main className="ssp-page">

        <div className="ssp-stripe">
          <span className="ssp-watermark">05</span>
          <div className="container ssp-stripe-inner">
            <BackButton />
            <span className="ssp-eyebrow">Design for ROI</span>
            <h1 className="ssp-title">Real Estate Agents</h1>
            <div className="ssp-rule" />
          </div>
        </div>

        <div className="container ssp-body">
          <div className="ssp-col-left">
            <p className="ssp-lead">
              Become the agent who offers more — not just a transaction, but a complete experience. You bring the client. We bring the expertise. Together, we close more deals and create clients who send referrals for years.
            </p>
            <ul className="ssp-points">
              <li>Presale design to maximize listing price</li>
              <li>Pre-purchase consultation for hesitant buyers</li>
              <li>Post-purchase design for new homeowners</li>
              <li>Priority scheduling for partner agents</li>
              <li>Co-branded materials for client presentations</li>
              <li>Preferred rates for ongoing partnerships</li>
            </ul>
            <div className="ssp-cta-row">
              <Link href="/#contact-cta" className="ssp-btn">
                Schedule a Partnership Call
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/#contact-cta" className="ssp-btn-ghost">Refer a Client</Link>
            </div>
          </div>
          <div className="ssp-col-right">
            <div className="ssp-grid">
              <div className="ssp-card">
                <h3>Presale Design</h3>
                <p>When a property needs more than staging — it needs a transformation. Full interior design service to maximize appeal and value before listing, covering layout adjustments to complete finish updates.</p>
              </div>
              <div className="ssp-card">
                <h3>Pre-Purchase Consultation</h3>
                <p>Turn hesitant buyers into confident offer-makers. A professional design perspective on a property&apos;s potential — buyers make offers on properties they would have passed on.</p>
              </div>
              <div className="ssp-card">
                <h3>Post-Purchase Guidance</h3>
                <p>Help your clients fall in love with what they just bought. A powerful referral tool that deepens the relationship and keeps you top of mind — offered as a value-add from you to them.</p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}
