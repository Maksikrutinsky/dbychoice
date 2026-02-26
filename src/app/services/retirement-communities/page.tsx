import type { Metadata } from 'next';
import Header from '@/components/Header';
import ParallaxService from '@/components/ParallaxService';
import BackButton from '@/components/BackButton';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Retirement Community Design – Design By Choice',
  description: 'Beautiful, functional homes that make retirement living both comfortable and inspiring. A stress-free process tailored to your lifestyle.',
};

export default function RetirementCommunitiesPage() {
  return (
    <>
      <ParallaxService />
      <Header />
      <main className="ssp-page">

        <div className="ssp-stripe">
          <span className="ssp-watermark">02</span>
          <div className="container ssp-stripe-inner">
            <BackButton />
            <span className="ssp-eyebrow">A Chapter Worth Designing</span>
            <h1 className="ssp-title">Retirement Communities</h1>
            <div className="ssp-rule" />
          </div>
        </div>

        <div className="container ssp-body">
          <div className="ssp-col-left">
            <p className="ssp-lead">
              This new chapter often brings exciting lifestyle changes — downsizing, relocating, or simply reimagining how you want to live. Design By Choice makes that transition effortless and beautiful, blending comfort, sophistication, and personal style into an environment that truly feels like home.
            </p>
            <ul className="ssp-points">
              <li>Downsizing and relocation design support</li>
              <li>Full-home furnishing from scratch</li>
              <li>Refresh of existing pieces to suit a new space</li>
              <li>Comfort and accessibility built into every choice</li>
              <li>Personal style honored at every step</li>
              <li>A home as practical as it is beautiful</li>
            </ul>
            <div className="ssp-cta-row">
              <Link href="/#contact-cta" className="ssp-btn">
                Schedule a Consultation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
          <div className="ssp-col-right">
            <div className="ssp-grid">
              <div className="ssp-card">
                <h3>Space Planning</h3>
                <p>Thoughtful layouts that work with your daily rhythms — easy to navigate, comfortable to live in, beautiful to come home to.</p>
              </div>
              <div className="ssp-card">
                <h3>Furniture & Selection</h3>
                <p>Curated furniture, custom window treatments, and accessories — all tailored to your preferences, lifestyle, and the proportions of your new space.</p>
              </div>
              <div className="ssp-card">
                <h3>Stress-Free Process</h3>
                <p>From first conversation to final placement, we manage the entire process so the transition feels like a celebration, not a project.</p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}
