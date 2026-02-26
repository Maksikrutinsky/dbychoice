import type { Metadata } from 'next';
import Header from '@/components/Header';
import ParallaxService from '@/components/ParallaxService';
import BackButton from '@/components/BackButton';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AirBnB & Short-Term Rental Design – Design By Choice',
  description: 'Create an experience guests pay premium rates to book — and come back for. STR design that drives occupancy and generates glowing reviews.',
};

export default function AirbnbPage() {
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
            <h1 className="ssp-title">AirBnB & Short-Term Rentals</h1>
            <div className="ssp-rule" />
          </div>
        </div>

        <div className="container ssp-body">
          <div className="ssp-col-left">
            <p className="ssp-lead">
              STR success isn&apos;t just about location. It&apos;s about how a space makes people feel when they walk in. We design short-term rental properties that drive occupancy, justify higher nightly rates, and generate the kind of reviews that fill calendars.
            </p>
            <ul className="ssp-points">
              <li>Guest experience strategy and design concept</li>
              <li>Space planning optimized for comfort and photography</li>
              <li>Full furniture and décor sourcing with budget breakdown</li>
              <li>Durable material selection for high-turnover use</li>
              <li>Styling guidance for professional listing photography</li>
              <li>Design consistency across multiple properties</li>
            </ul>
            <div className="ssp-cta-row">
              <Link href="/#contact-cta" className="ssp-btn">
                Request a Proposal
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/services/investors" className="ssp-btn-ghost">Flip Design Package</Link>
            </div>
          </div>
          <div className="ssp-col-right">
            <div className="ssp-grid">
              <div className="ssp-card">
                <h3>Guest Experience Strategy</h3>
                <p>Design concept built around how guests feel — from the moment they enter to the moment they leave the review that brings the next booking.</p>
              </div>
              <div className="ssp-card">
                <h3>Photography-First Planning</h3>
                <p>Space planning optimized for both comfort and listing photography — because great photos drive clicks, and great stays drive 5-star reviews.</p>
              </div>
              <div className="ssp-card">
                <h3>Durable, Sourced Furnishings</h3>
                <p>Full furniture and décor sourcing with budget breakdown, using materials built for high-turnover use — beautiful on day one, beautiful on day three hundred.</p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}
