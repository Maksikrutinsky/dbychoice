import type { Metadata } from 'next';
import Header from '@/components/Header';
import ParallaxService from '@/components/ParallaxService';
import BackButton from '@/components/BackButton';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home Styling – Design By Choice',
  description: 'Professional staging and styling that transforms your space — whether you are living in it or preparing it for sale.',
};

export default function HomeStylingPage() {
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
            <h1 className="ssp-title">Home Styling</h1>
            <div className="ssp-rule" />
          </div>
        </div>

        <div className="container ssp-body">
          <div className="ssp-col-left">
            <p className="ssp-lead">
              Professional styling that breathes new life into your space — without the need for a full renovation. Whether you are refreshing your current home or preparing it for a successful sale, we create the atmosphere that makes people feel immediately at home.
            </p>
            <ul className="ssp-points">
              <li>Curated accessories, artwork, and textiles</li>
              <li>Furniture arrangement and flow optimization</li>
              <li>Pre-sale staging for maximum buyer appeal</li>
              <li>Color and material coordination</li>
              <li>Lighting arrangement and ambiance</li>
              <li>Works with your existing pieces or introduces new ones</li>
            </ul>
            <div className="ssp-cta-row">
              <Link href="/#contact-cta" className="ssp-btn">
                Book a Styling Session
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/services/full-custom-interiors" className="ssp-btn-ghost">Full Custom Interiors</Link>
            </div>
          </div>
          <div className="ssp-col-right">
            <div className="ssp-grid ssp-grid-2">
              <div className="ssp-card">
                <h3>Lifestyle Styling</h3>
                <p>Refresh your current home with curated accessories, artwork, textiles, and arrangements — elevating the atmosphere and your daily experience without a full renovation.</p>
              </div>
              <div className="ssp-card">
                <h3>Pre-Sale Staging</h3>
                <p>Strategic presentation that makes buyers emotionally connect with the property — helping it sell faster and at a stronger price. First impressions that drive offers.</p>
              </div>
              <div className="ssp-card">
                <h3>Space Editing</h3>
                <p>Thoughtful curation of what stays, what moves, and what goes — creating a sense of space, flow, and intention that transforms how a home feels.</p>
              </div>
              <div className="ssp-card">
                <h3>Seasonal Refresh</h3>
                <p>Update your space for a new season, a new chapter, or simply a new feeling — without replacing what you love about your home.</p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}
