'use client';

import { useEffect, useRef } from 'react';

const HomeStylingContent = () => {
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
    <div className="hs-content">
      {/* Intro Section */}
      <section
        className="hs-section intro-section"
        ref={(el) => { sectionsRef.current[0] = el; }}
      >
        <div className="container">
          <h2 className="section-title">What Is Home Styling?</h2>
          <div className="intro-content">
            <p className="intro-lead">
              Quick, impactful styling updates using what you have—or adding a few key pieces.
            </p>
            <p className="intro-text">
              Home Styling is perfect for those who love their home but feel it's missing something. Whether your space feels outdated, cluttered, or just "off," a professional styling session can bring it back to life—without the cost or commitment of a full interior design project.
            </p>
            <p className="intro-highlight">
              Transform your space in a single session with expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section
        className="hs-section ideal-section"
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
              <p>Homeowners who want a fresh look without major changes</p>
            </div>
            <div className="ideal-item">
              <div className="ideal-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7"/>
                  <rect x="14" y="3" width="7" height="7"/>
                  <rect x="14" y="14" width="7" height="7"/>
                  <rect x="3" y="14" width="7" height="7"/>
                </svg>
              </div>
              <p>Those who have beautiful furniture but don't know how to arrange it</p>
            </div>
            <div className="ideal-item">
              <div className="ideal-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <p>Busy professionals who don't have time for a full project</p>
            </div>
            <div className="ideal-item">
              <div className="ideal-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>
              <p>Anyone preparing for guests, events, or photo shoots</p>
            </div>
            <div className="ideal-item">
              <div className="ideal-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <p>Budget-conscious clients who want maximum impact for minimum spend</p>
            </div>
            <div className="ideal-item">
              <div className="ideal-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <p>People who just moved in and need help making it feel like home</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section
        className="hs-section included-section"
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
                <h3>On-Site Styling Session</h3>
              </div>
              <p>I come to your home and work with what you have—rearranging, layering, and curating.</p>
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
                <h3>Furniture Arrangement</h3>
              </div>
              <p>Optimizing layout for flow, function, and visual balance.</p>
            </div>
            <div className="included-card">
              <div className="included-header">
                <div className="included-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                    <polyline points="2 17 12 22 22 17"/>
                    <polyline points="2 12 12 17 22 12"/>
                  </svg>
                </div>
                <h3>Accessory & Decor Placement</h3>
              </div>
              <p>Art, pillows, plants, books, lighting—placed with intention.</p>
            </div>
            <div className="included-card">
              <div className="included-header">
                <div className="included-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="9" cy="21" r="1"/>
                    <circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                </div>
                <h3>Shopping Suggestions</h3>
              </div>
              <p>Optional recommendations for a few additions to complete the look.</p>
            </div>
            <div className="included-card">
              <div className="included-header">
                <div className="included-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h3>Declutter Guidance</h3>
              </div>
              <p>Gentle help deciding what to keep, hide, or let go.</p>
            </div>
            <div className="included-card featured">
              <div className="included-header">
                <div className="included-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                </div>
                <h3>Before & After Photos</h3>
              </div>
              <p>So you can see—and share—the transformation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section
        className="hs-section why-section"
        ref={(el) => { sectionsRef.current[3] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Why It Works</h2>
          <div className="why-content">
            <p className="why-lead">
              Most people underestimate the power of placement.
            </p>
            <p className="why-text">
              The right arrangement can make a room feel twice as big, twice as cozy, or twice as luxurious. Styling isn't about buying new things—it's about using what you have in smarter ways.
            </p>
            <div className="why-highlight">
              <p>
                Sometimes all your home needs is a fresh perspective from a trained eye.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Walk Away With Section */}
      <section
        className="hs-section walkaway-section"
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
              <p>A beautifully styled space</p>
            </div>
            <div className="walkaway-item">
              <div className="walkaway-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p>A clear sense of your home's best features</p>
            </div>
            <div className="walkaway-item">
              <div className="walkaway-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p>A shopping list (if needed) for finishing touches</p>
            </div>
            <div className="walkaway-item">
              <div className="walkaway-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p>Confidence in your space again</p>
            </div>
            <div className="walkaway-item">
              <div className="walkaway-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p>A home that feels fresh and intentional</p>
            </div>
            <div className="walkaway-item">
              <div className="walkaway-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p>Ideas you can apply to other rooms</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="hs-section cta-section"
        ref={(el) => { sectionsRef.current[5] = el; }}
        id="contact"
      >
        <div className="container">
          <h2 className="cta-title">Ready for a Refresh?</h2>
          <p className="cta-description">
            Transform your space in a single session. Book your Home Styling appointment today.
          </p>
          <a href="/#contact-cta" className="cta-button-large">
            <span>Book Your Styling Session</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomeStylingContent;
