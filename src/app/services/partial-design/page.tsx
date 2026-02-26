import type { Metadata } from 'next';
import Header from '@/components/Header';
import ParallaxService from '@/components/ParallaxService';
import BackButton from '@/components/BackButton';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Partial Design – Design By Choice',
  description: 'Targeted interior design for the spaces that matter most. Maximum impact within your defined scope and budget.',
};

export default function PartialDesignPage() {
  return (
    <>
      <ParallaxService />
      <Header />
      <main className="ssp-page">

        <div className="ssp-stripe">
          <span className="ssp-watermark">01</span>
          <div className="container ssp-stripe-inner">
            <BackButton />
            <span className="ssp-eyebrow">Private Home Design</span>
            <h1 className="ssp-title">Partial Design</h1>
            <div className="ssp-rule" />
          </div>
        </div>

        <div className="container ssp-body">
          <div className="ssp-col-left">
            <p className="ssp-lead">
              Not every project requires a full renovation. Partial design focuses on the spaces and elements that will make the greatest difference — maximum impact within your defined scope and budget, without compromise on quality or cohesion.
            </p>
            <ul className="ssp-points">
              <li>Targeted design for specific rooms or spaces</li>
              <li>Material and finish selection with contractor documentation</li>
              <li>Furniture layout and sourcing for defined areas</li>
              <li>Maximum impact within your defined scope</li>
              <li>Cohesive with the rest of your home</li>
              <li>No compromise on quality or attention to detail</li>
            </ul>
            <div className="ssp-cta-row">
              <Link href="/#contact-cta" className="ssp-btn">
                Start a Conversation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/services/full-custom-interiors" className="ssp-btn-ghost">Full Custom Interiors</Link>
            </div>
          </div>
          <div className="ssp-col-right">
            <div className="ssp-grid">
              <div className="ssp-card">
                <h3>Kitchen or Bathroom</h3>
                <p>Standalone redesign of the spaces that most affect daily life and property value — complete material selection, layout optimization, and contractor-ready documentation.</p>
              </div>
              <div className="ssp-card">
                <h3>Living or Dining Room</h3>
                <p>Transform the spaces you spend the most time in — furniture arrangement, material selection, lighting, and styling that elevates the entire home.</p>
              </div>
              <div className="ssp-card">
                <h3>Ongoing Renovation Support</h3>
                <p>Material and finish selection to complement an ongoing project, ensuring consistency and quality across every surface your contractor touches.</p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}
