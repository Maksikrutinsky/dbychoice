import type { Metadata } from 'next';
import Header from '@/components/Header';
import ParallaxService from '@/components/ParallaxService';
import BackButton from '@/components/BackButton';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Investor & Developer Design – Design By Choice',
  description: 'Turn a good flip into a great one. Complete interior design strategy from purchase to listing — built to sell fast and command premium prices.',
};

export default function InvestorsPage() {
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
            <h1 className="ssp-title">Investors & Developers</h1>
            <div className="ssp-rule" />
          </div>
        </div>

        <div className="container ssp-body">
          <div className="ssp-col-left">
            <p className="ssp-lead">
              Turn a good flip into a great one. Complete interior design strategy from purchase to listing — built to position your property to sell fast and command premium prices. Design that differentiates, not just basic contractor finishes.
            </p>
            <ul className="ssp-points">
              <li>Space planning and layout optimization</li>
              <li>Full material & finish selection for every surface</li>
              <li>Detailed finish schedule for your contractor</li>
              <li>Supplier sourcing with pricing guidance</li>
              <li>On-site coordination during key phases</li>
              <li>Final styling for listing photography</li>
            </ul>
            <div className="ssp-cta-row">
              <Link href="/#contact-cta" className="ssp-btn">
                Request a Proposal
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/services/airbnb" className="ssp-btn-ghost">Short-Term Rental Design</Link>
            </div>
          </div>
          <div className="ssp-col-right">
            <div className="ssp-grid ssp-grid-2">
              <div className="ssp-card">
                <h3>Full Flip Design Package</h3>
                <p>Space planning and layout optimization, full material and finish selection — flooring, cabinetry, countertops, tile, fixtures, hardware, paint. Detailed finish schedule with supplier sourcing and pricing guidance.</p>
              </div>
              <div className="ssp-card">
                <h3>On-Site Coordination</h3>
                <p>Coordination during key installation phases to ensure the design vision is executed correctly — the difference between a well-designed concept and a home that photographs and sells.</p>
              </div>
              <div className="ssp-card">
                <h3>Listing Photography Styling</h3>
                <p>Final styling recommendations optimized for listing photography — the first impression that drives showings and competing offers.</p>
              </div>
              <div className="ssp-card">
                <h3>Who It&apos;s For</h3>
                <p>Investors executing residential flip projects in the mid-to-upper price range who want design that differentiates — and a process that maximizes return without unnecessary delays.</p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}
