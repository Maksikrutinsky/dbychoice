import type { Metadata } from 'next';
import Header from '@/components/Header';
import ParallaxService from '@/components/ParallaxService';
import BackButton from '@/components/BackButton';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pre-Purchase Design Consulting – Design By Choice',
  description: 'Expert design perspective before you commit. Understand a property\'s true potential and make confident, informed decisions before signing.',
};

export default function PrePurchasePage() {
  return (
    <>
      <ParallaxService />
      <Header />
      <main className="ssp-page">

        <div className="ssp-stripe">
          <span className="ssp-watermark">04</span>
          <div className="container ssp-stripe-inner">
            <BackButton />
            <span className="ssp-eyebrow">Virtual Design</span>
            <h1 className="ssp-title">Pre-Purchase Consulting</h1>
            <div className="ssp-rule" />
          </div>
        </div>

        <div className="container ssp-body">
          <div className="ssp-col-left">
            <p className="ssp-lead">
              See a property&apos;s true potential before you commit. Our design assessment gives you a clear picture of what is possible — so you make your offer with confidence, not hesitation. You see a fixer-upper. We see what it can become.
            </p>
            <ul className="ssp-points">
              <li>Available in person or remotely for overseas clients</li>
              <li>Honest assessment — potential and limitations both</li>
              <li>Budget-calibrated renovation scope</li>
              <li>Visual direction and design possibilities</li>
              <li>Written summary for reference and decision-making</li>
              <li>Turn hesitation into a confident offer</li>
            </ul>
            <div className="ssp-cta-row">
              <Link href="/#contact-cta" className="ssp-btn">
                Book a Consultation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/services/pre-sale" className="ssp-btn-ghost">Pre-Sale Design</Link>
            </div>
          </div>
          <div className="ssp-col-right">
            <div className="ssp-grid ssp-grid-2">
              <div className="ssp-card">
                <h3>Property Walkthrough</h3>
                <p>Design-focused assessment of the property&apos;s strengths, limitations, and possibilities — available in person or remotely for overseas clients.</p>
              </div>
              <div className="ssp-card">
                <h3>Renovation Potential Analysis</h3>
                <p>What&apos;s achievable within your budget range — realistic scope, realistic costs, realistic timeline. No surprises after the offer is accepted.</p>
              </div>
              <div className="ssp-card">
                <h3>Visual Direction</h3>
                <p>How the space could look and feel after improvements — giving you a concrete vision to anchor your decision rather than abstract possibilities.</p>
              </div>
              <div className="ssp-card">
                <h3>Written Summary</h3>
                <p>A clear document you can reference during negotiations and decision-making — and share with your partner, family, or agent.</p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}
