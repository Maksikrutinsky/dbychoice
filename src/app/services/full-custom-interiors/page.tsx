import type { Metadata } from 'next';
import Header from '@/components/Header';
import ParallaxService from '@/components/ParallaxService';
import BackButton from '@/components/BackButton';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Full Custom Interiors – Design By Choice',
  description: 'Complete home transformation from concept to completion. Every room, every detail — crafted for a cohesive, beautiful living space.',
};

export default function FullCustomInteriorsPage() {
  return (
    <>
      <ParallaxService />
      <Header />
      <main className="ssp-page">

        <div className="ssp-stripe">
          <span className="ssp-watermark">03</span>
          <div className="container ssp-stripe-inner">
            <BackButton />
            <span className="ssp-eyebrow">Private Home Design</span>
            <h1 className="ssp-title">Full Custom Interiors</h1>
            <div className="ssp-rule" />
          </div>
        </div>

        <div className="container ssp-body">
          <div className="ssp-col-left">
            <p className="ssp-lead">
              Interior design is a subtle translation of life into form, color, and material — the connection between vision and reality, between people and the spaces in which they live, create, and breathe. Every process begins with a true connection between people and place, between emotion and material.
            </p>
            <ul className="ssp-points">
              <li>Complete space planning and layout optimization</li>
              <li>Full material and finish selection — every surface considered</li>
              <li>Contractor coordination and on-site oversight</li>
              <li>Furniture sourcing, styling, and final presentation</li>
              <li>For couples who have purchased their dream home</li>
              <li>For families planning an expansion or renovation</li>
            </ul>
            <div className="ssp-cta-row">
              <Link href="/#contact-cta" className="ssp-btn">
                Start Your Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/portfolio" className="ssp-btn-ghost">View Portfolio</Link>
            </div>
          </div>
          <div className="ssp-col-right">
            <div className="ssp-grid">
              <div className="ssp-card">
                <h3>Managing Complex Processes</h3>
                <p>Renovation with confidence and clarity — we handle the complexity so you can focus on living. From contractor coordination to finish selection, every detail is managed.</p>
              </div>
              <div className="ssp-card">
                <h3>Budgetary Excellence</h3>
                <p>Staying within budget while achieving the best possible result — without compromise. We identify where to invest and where to save, maximizing every decision.</p>
              </div>
              <div className="ssp-card">
                <h3>Schedule Certainty</h3>
                <p>Clear timelines that minimize disruption to your daily life throughout the process. You always know what is happening, when, and why.</p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}
