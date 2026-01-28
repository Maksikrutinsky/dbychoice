'use client';

import { useEffect, useRef } from 'react';

const OverseasResidentsContent = () => {
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
      { threshold: 0.15 }
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
    <div className="or-content">
      {/* Introduction */}
      <section className="or-section intro-section" ref={(el) => { sectionsRef.current[0] = el; }}>
        <div className="container">
          <h2 className="section-title">Relocation Design Services</h2>
          <div className="intro-content">
            <p className="intro-lead">
              Relocating to a new state or moving across continents is exciting — but it can also be overwhelming.
            </p>
            <p className="intro-text">
              Managing a design project remotely, understanding local styles, and choosing reliable suppliers without prior familiarity can quickly become a challenge. This is where our service comes in.
            </p>
            <p className="intro-highlight">
              At Design By Choice, we manage every detail on your behalf — from design and planning to sourcing, installations, and final styling — so you arrive at a home that feels personal, complete, and ready from the very first moment.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="or-section included-section" ref={(el) => { sectionsRef.current[1] = el; }}>
        <div className="container">
          <h2 className="section-title">What This Service Includes</h2>
          <p className="section-intro">A complete remote-to-on-site design solution:</p>
          <div className="included-grid">
            <div className="included-card">
              <div className="included-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3>Online Meetings</h3>
              <p>Define needs, style preferences, and budget through virtual consultations</p>
            </div>
            <div className="included-card">
              <div className="included-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3>Full Design Concept</h3>
              <p>Tailored to Arizona's climate and desert-modern aesthetic</p>
            </div>
            <div className="included-card">
              <div className="included-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
                </svg>
              </div>
              <h3>Space Planning</h3>
              <p>Execution-ready design plans when required</p>
            </div>
            <div className="included-card">
              <div className="included-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
              </div>
              <h3>Sourcing & Purchasing</h3>
              <p>Furniture, lighting, and accessory selection and procurement</p>
            </div>
            <div className="included-card">
              <div className="included-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <h3>Full Home Styling</h3>
              <p>Complete styling prior to move-in</p>
            </div>
            <div className="included-card">
              <div className="included-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Local Coordination</h3>
              <p>Trusted local suppliers, installers, and contractors</p>
            </div>
            <div className="included-card">
              <div className="included-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h3>Photo & Video Updates</h3>
              <p>No need to travel for every decision</p>
            </div>
            <div className="included-card featured">
              <div className="included-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/>
                </svg>
              </div>
              <h3>VR & 3D Visualization</h3>
              <p>Experience the home before completion with optional VR previews</p>
            </div>
          </div>
          <div className="result-box">
            <p>The result: a fully prepared home — no stress, no surprises.</p>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="or-section who-section" ref={(el) => { sectionsRef.current[2] = el; }}>
        <div className="container">
          <h2 className="section-title">Who Is This Service For?</h2>
          <div className="who-grid">
            <div className="who-card">
              <div className="who-marker"></div>
              <p>Overseas residents relocating to Arizona who need local expertise</p>
            </div>
            <div className="who-card">
              <div className="who-marker"></div>
              <p>Families purchasing a home remotely and seeking reliable guidance</p>
            </div>
            <div className="who-card">
              <div className="who-marker"></div>
              <p>Investors requiring a designed, move-in or rental-ready property</p>
            </div>
            <div className="who-card">
              <div className="who-marker"></div>
              <p>Buyers of new-build properties looking for full design before occupancy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="or-section why-section" ref={(el) => { sectionsRef.current[3] = el; }}>
        <div className="container">
          <h2 className="section-title">Why Clients Choose This Service</h2>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3>Peace of Mind</h3>
              <p>We manage everything on the ground</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3>Time Savings</h3>
              <p>No flights, supplier coordination, or guesswork</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3>Local Expertise</h3>
              <p>Climate-appropriate materials, trusted vendors, regional insight</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <h3>Luxury Results</h3>
              <p>Premium outcomes with minimal stress</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/>
                </svg>
              </div>
              <h3>Smart Technology</h3>
              <p>VR previews, 3D visuals, live updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="or-section process-section" ref={(el) => { sectionsRef.current[4] = el; }}>
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Discovery Call</h3>
                <p>Understanding your lifestyle, goals, and relocation challenges.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Concept & Planning</h3>
                <p>Design language, mood boards, material selection, and optional 3D visualization.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Sourcing & Purchasing</h3>
                <p>Furniture, lighting, textiles, and accessories.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Installation & Styling</h3>
                <p>On-site coordination, installation days, and full home styling.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Move-In Ready</h3>
                <p>The door opens — and it feels like home instantly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="or-section cta-section" ref={(el) => { sectionsRef.current[5] = el; }} id="contact">
        <div className="container">
          <h2 className="cta-title">Ready to Make Arizona Feel Like Home?</h2>
          <p className="cta-description">
            Let's design your new beginning, beautifully and seamlessly.
          </p>
          <a href="/#contact-cta" className="cta-button-large">
            <span>Start Your Relocation Journey</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default OverseasResidentsContent;
