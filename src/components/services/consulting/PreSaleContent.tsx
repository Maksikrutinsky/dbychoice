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
        threshold: 0.2,
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
        className="pre-sale-section what-section"
        ref={(el) => { sectionsRef.current[0] = el; }}
      >
        <div className="container">
          <h2 className="section-title">What This Service Is</h2>
          <p className="section-description">
            A focused, high-impact consultation that reveals what your home truly needs before hitting the market.
            I evaluate the property through the eyes of a designer and a buyer — helping you highlight strengths,
            disguise weaknesses, and present a polished, desirable space buyers instantly connect with.
          </p>
        </div>
      </section>

      {/* Ideal For */}
      <section
        className="pre-sale-section ideal-section"
        ref={(el) => { sectionsRef.current[1] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Ideal For</h2>
          <div className="ideal-grid">
            <div className="ideal-item">
              <div className="ideal-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <p>Homeowners preparing to sell</p>
            </div>

            <div className="ideal-item">
              <div className="ideal-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <p>Real estate agents who want stronger, faster listings</p>
            </div>

            <div className="ideal-item">
              <div className="ideal-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <p>Sellers working with tight timelines</p>
            </div>

            <div className="ideal-item">
              <div className="ideal-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <p>Homes sitting too long on the market</p>
            </div>

            <div className="ideal-item">
              <div className="ideal-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
        className="pre-sale-section included-section"
        ref={(el) => { sectionsRef.current[2] = el; }}
      >
        <div className="container">
          <h2 className="section-title">What's Included</h2>
          <div className="included-list">
            <div className="included-item">
              <div className="included-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <div className="included-content">
                <h3>On-site or virtual walkthrough</h3>
                <p>Assessment of flow, layout, lighting, sightlines, and first impressions.</p>
              </div>
            </div>

            <div className="included-item">
              <div className="included-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <div className="included-content">
                <h3>Strategic recommendations</h3>
                <p>What to refresh, what to remove, what to update — and what NOT to spend money on.</p>
              </div>
            </div>

            <div className="included-item">
              <div className="included-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7"/>
                  <rect x="14" y="3" width="7" height="7"/>
                  <rect x="14" y="14" width="7" height="7"/>
                  <rect x="3" y="14" width="7" height="7"/>
                </svg>
              </div>
              <div className="included-content">
                <h3>Room-by-room action plan</h3>
                <p>Color palette, furniture adjustments, decor suggestions, lighting improvements.</p>
              </div>
            </div>

            <div className="included-item">
              <div className="included-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="included-content">
                <h3>Pre-sale styling guidance</h3>
                <p>How to visually elevate the home and appeal to a broad audience.</p>
              </div>
            </div>

            <div className="included-item">
              <div className="included-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <div className="included-content">
                <h3>Budget guidance</h3>
                <p>Smart investments that increase perceived value.</p>
              </div>
            </div>

            <div className="included-item">
              <div className="included-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <div className="included-content">
                <h3>Technology-enhanced preview (optional)</h3>
                <p>Using VR/visualization tools to show how small updates change the buyer experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section
        className="pre-sale-section why-section"
        ref={(el) => { sectionsRef.current[3] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Why This Works</h2>
          <p className="section-description">
            Buyers aren't just purchasing square footage — they're purchasing a lifestyle.
            A beautifully presented home creates emotional connection, leads to higher offers, and sells faster.
            This service gives you the professional strategy you need before spending a dollar on updates.
          </p>
        </div>
      </section>

      {/* What You Walk Away With */}
      <section
        className="pre-sale-section walkaway-section"
        ref={(el) => { sectionsRef.current[4] = el; }}
      >
        <div className="container">
          <h2 className="section-title">What You Walk Away With</h2>
          <div className="walkaway-grid">
            <div className="walkaway-item">
              <div className="walkaway-icon">✓</div>
              <p>A clear, prioritized design plan</p>
            </div>
            <div className="walkaway-item">
              <div className="walkaway-icon">✓</div>
              <p>Understanding what truly affects buyer perception</p>
            </div>
            <div className="walkaway-item">
              <div className="walkaway-icon">✓</div>
              <p>Solutions for staging, layout, color, lighting, and decor</p>
            </div>
            <div className="walkaway-item">
              <div className="walkaway-icon">✓</div>
              <p>Confidence your listing will shine</p>
            </div>
            <div className="walkaway-item">
              <div className="walkaway-icon">✓</div>
              <p>A strategic roadmap for your real estate agent</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="pre-sale-section cta-section"
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
