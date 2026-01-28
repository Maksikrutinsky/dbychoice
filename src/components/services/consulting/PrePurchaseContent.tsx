'use client';

import { useEffect, useRef } from 'react';

const PrePurchaseContent = () => {
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
    <div className="pre-purchase-content">
      {/* What This Service Is */}
      <section
        className="pp-section intro-section"
        ref={(el) => { sectionsRef.current[0] = el; }}
      >
        <div className="container">
          <h2 className="section-title">What This Service Is</h2>
          <div className="intro-content">
            <p className="intro-lead">
              A professional design assessment performed before you make an offer.
            </p>
            <p className="intro-text">
              Instead of relying on imagination, you get a clear understanding of what the home can become — and what it can't. I analyze layout, flow, structure, lighting, future design possibilities, and the long-term potential of the space.
            </p>
            <p className="intro-highlight">
              You receive clarity and confidence before committing to a major purchase.
            </p>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section
        className="pp-section ideal-section"
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
              <p>First-time homebuyers</p>
            </div>
            <div className="ideal-item">
              <div className="ideal-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <p>Buyers choosing between multiple properties</p>
            </div>
            <div className="ideal-item">
              <div className="ideal-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <p>Clients who struggle visualizing spaces</p>
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
              <p>Anyone planning a remodel or refresh right after buying</p>
            </div>
            <div className="ideal-item">
              <div className="ideal-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <p>Real estate agents wanting to support clients with design insight</p>
            </div>
            <div className="ideal-item">
              <div className="ideal-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              </div>
              <p>Buyers unsure if a property is "the one"</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section
        className="pp-section included-section"
        ref={(el) => { sectionsRef.current[2] = el; }}
      >
        <div className="container">
          <h2 className="section-title">What's Included</h2>
          <div className="included-grid">
            <div className="included-card">
              <div className="included-header">
                <div className="included-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <h3>Property walkthrough (on-site or virtual)</h3>
              </div>
              <p>Assessment of layout, openings, ceilings, zones, natural light, and future flow.</p>
            </div>
            <div className="included-card">
              <div className="included-header">
                <div className="included-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <h3>Feasibility insights</h3>
              </div>
              <p>What can be moved, opened, expanded, or redesigned — and what's unrealistic.</p>
            </div>
            <div className="included-card">
              <div className="included-header">
                <div className="included-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <h3>Cost-awareness guidance</h3>
              </div>
              <p>Understanding what is affordable vs. what becomes a major investment.</p>
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
                <h3>Design potential preview</h3>
              </div>
              <p>How the home could look with better furniture, finishes, layout, color, and styling.</p>
            </div>
            <div className="included-card">
              <div className="included-header">
                <div className="included-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3>Lifestyle fit check</h3>
              </div>
              <p>Is the home right for your routine, storage needs, family use, and comfort?</p>
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
                <h3>Technology-enhanced visualization</h3>
              </div>
              <p>VR previews / 3D design tools to help you truly "see" the potential.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section
        className="pp-section why-section"
        ref={(el) => { sectionsRef.current[3] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Why This Works</h2>
          <div className="why-content">
            <p className="why-lead">
              Most buyers fall into two traps: overestimating what's possible or underestimating the cost of key changes.
            </p>
            <p className="why-text">
              This service protects you from both. You get the truth — not assumptions. The result? More confident decisions, better negotiations, smarter investments.
            </p>
            <div className="why-highlight">
              <p>
                Make informed decisions with professional design insight before you commit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Walk Away With */}
      <section
        className="pp-section walkaway-section"
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
              <p>A clear understanding of the property's true potential</p>
            </div>
            <div className="walkaway-item">
              <div className="walkaway-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p>A designer's perspective on layout and future upgrades</p>
            </div>
            <div className="walkaway-item">
              <div className="walkaway-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p>Awareness of possible limitations</p>
            </div>
            <div className="walkaway-item">
              <div className="walkaway-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p>Budget expectations for future transformations</p>
            </div>
            <div className="walkaway-item">
              <div className="walkaway-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p>Confidence before making an offer</p>
            </div>
            <div className="walkaway-item">
              <div className="walkaway-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p>Support for your real estate agent during negotiations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="pp-section cta-section"
        ref={(el) => { sectionsRef.current[5] = el; }}
        id="contact"
      >
        <div className="container">
          <h2 className="cta-title">Buy with Confidence</h2>
          <p className="cta-description">
            Make smarter property decisions with expert design insight. Book your Pre-Purchase Design Review™ today.
          </p>
          <a href="/#contact-cta" className="cta-button-large">
            <span>Book Your Pre-Purchase Review&trade;</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default PrePurchaseContent;
