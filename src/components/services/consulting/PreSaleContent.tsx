'use client';

import { useEffect, useRef } from 'react';

const PreSaleContent = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="pre-sale-content">
      {/* What This Service Is */}
      <section
        className="ps-section intro-section"
        ref={(el) => { sectionsRef.current[0] = el; }}
      >
        <div className="container">
          <h2 className="section-title">What This Service Is</h2>
          <div className="intro-content">
            <p className="intro-lead">
              A focused, high-impact consultation that reveals what your home truly needs before hitting the market.
            </p>
            <p className="intro-text">
              I evaluate the property through the eyes of a designer and a buyer — helping you highlight strengths, disguise weaknesses, and present a polished, desirable space buyers instantly connect with.
            </p>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section
        className="ps-section ideal-section"
        ref={(el) => { sectionsRef.current[1] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Ideal For</h2>
          <div className="ideal-grid">
            <div className="ideal-item">
              <div className="ideal-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <p>Homeowners preparing to sell</p>
            </div>
            <div className="ideal-item">
              <div className="ideal-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <p>Real estate agents who want stronger, faster listings</p>
            </div>
            <div className="ideal-item">
              <div className="ideal-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <p>Sellers working with tight timelines</p>
            </div>
            <div className="ideal-item">
              <div className="ideal-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v6m0 0l4-4m-4 4L8 4"/>
                  <path d="M20 12h-6m0 0l4 4m-4-4l4-4"/>
                  <path d="M12 22v-6m0 0l4 4m-4-4l-4 4"/>
                  <path d="M4 12h6m0 0L6 8m4 4l-4 4"/>
                </svg>
              </div>
              <p>Properties that need a visual refresh, not a full remodel</p>
            </div>
            <div className="ideal-item">
              <div className="ideal-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <p>Homes sitting too long on the market</p>
            </div>
            <div className="ideal-item">
              <div className="ideal-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <p>Anyone wanting a strategic, budget-conscious plan</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section
        className="ps-section included-section"
        ref={(el) => { sectionsRef.current[2] = el; }}
      >
        <div className="container">
          <h2 className="section-title">What's Included</h2>
          <div className="included-grid">
            <div className="included-card">
              <div className="included-header">
                <div className="included-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h3>On-site or virtual walkthrough</h3>
              </div>
              <p>Assessment of flow, layout, lighting, sightlines, and first impressions.</p>
            </div>
            <div className="included-card">
              <div className="included-header">
                <div className="included-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                </div>
                <h3>Strategic recommendations</h3>
              </div>
              <p>What to refresh, what to remove, what to update — and what NOT to spend money on.</p>
            </div>
            <div className="included-card">
              <div className="included-header">
                <div className="included-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7"/>
                    <rect x="14" y="3" width="7" height="7"/>
                    <rect x="14" y="14" width="7" height="7"/>
                    <rect x="3" y="14" width="7" height="7"/>
                  </svg>
                </div>
                <h3>Room-by-room action plan</h3>
              </div>
              <p>Color palette, furniture adjustments, decor suggestions, lighting improvements.</p>
            </div>
            <div className="included-card">
              <div className="included-header">
                <div className="included-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3>Pre-sale styling guidance</h3>
              </div>
              <p>How to visually elevate the home and appeal to a broad audience.</p>
            </div>
            <div className="included-card">
              <div className="included-header">
                <div className="included-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <h3>Budget guidance</h3>
              </div>
              <p>Smart investments that increase perceived value.</p>
            </div>
            <div className="included-card featured">
              <div className="included-header">
                <div className="included-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
                    <rect x="9" y="9" width="6" height="6"/>
                    <line x1="9" y1="1" x2="9" y2="4"/>
                    <line x1="15" y1="1" x2="15" y2="4"/>
                    <line x1="9" y1="20" x2="9" y2="23"/>
                    <line x1="15" y1="20" x2="15" y2="23"/>
                  </svg>
                </div>
                <h3>Technology-enhanced preview (optional)</h3>
              </div>
              <p>Using VR/visualization tools to show how small updates change the buyer experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section
        className="ps-section why-section"
        ref={(el) => { sectionsRef.current[3] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Why This Works</h2>
          <div className="why-content">
            <p className="why-lead">
              Buyers aren't just purchasing square footage — they're purchasing a lifestyle.
            </p>
            <p className="why-text">
              A beautifully presented home creates emotional connection, leads to higher offers, and sells faster. This service gives you the professional strategy you need before spending a dollar on updates.
            </p>
            <div className="why-highlight">
              <p>
                Strategic design improvements can increase your home's perceived value by thousands of dollars.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Walk Away With */}
      <section
        className="ps-section walkaway-section"
        ref={(el) => { sectionsRef.current[4] = el; }}
      >
        <div className="container">
          <h2 className="section-title">What You Walk Away With</h2>
          <div className="walkaway-grid">
            <div className="walkaway-item">
              <div className="walkaway-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p>A clear, prioritized design plan</p>
            </div>
            <div className="walkaway-item">
              <div className="walkaway-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p>Understanding what truly affects buyer perception</p>
            </div>
            <div className="walkaway-item">
              <div className="walkaway-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p>Solutions for staging, layout, color, lighting, and decor</p>
            </div>
            <div className="walkaway-item">
              <div className="walkaway-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p>Confidence your listing will shine</p>
            </div>
            <div className="walkaway-item">
              <div className="walkaway-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p>A strategic roadmap for your real estate agent</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="ps-section cta-section"
        ref={(el) => { sectionsRef.current[5] = el; }}
        id="contact"
      >
        <div className="container">
          <h2 className="cta-title">Boost Your Home's Market Appeal</h2>
          <p className="cta-description">
            Ready to maximize your property's value and attract more buyers? Let's create a strategic plan together.
          </p>
          <a href="/#contact-cta" className="cta-button-large">
            <span>Book Your Consultation</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default PreSaleContent;
