'use client';

import { useEffect, useRef } from 'react';

const RealEstateAgentsContent = () => {
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
    <div className="rea-content">
      {/* Intro Section */}
      <section
        className="rea-section intro-section"
        ref={(el) => { sectionsRef.current[0] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Elevate Your Listings</h2>
          <div className="intro-content">
            <p className="intro-lead">
              Premium design tools to help your clients see the potential—and make their decision.
            </p>
            <p className="intro-text">
              Whether you're staging a property for sale or helping a buyer visualize their future home, professional design support can make the difference between hesitation and a signed contract.
            </p>
            <p className="intro-highlight">
              Give your clients the clarity they need to say "yes."
            </p>
          </div>
        </div>
      </section>

      {/* For Sellers Section */}
      <section
        className="rea-section sellers-section"
        ref={(el) => { sectionsRef.current[1] = el; }}
      >
        <div className="container">
          <h2 className="section-title">For Sellers</h2>
          <p className="section-intro">Make Every Listing Show-Ready</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>
              <h3>Pre-Sale Styling & Staging Consultation</h3>
              <p>Strategic advice on furniture arrangement, decluttering, and visual improvements to maximize appeal.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h3>Virtual Staging Visuals</h3>
              <p>Help empty or outdated spaces come to life with photorealistic design previews.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/>
                  <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                  <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/>
                  <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/>
                  <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"/>
                  <path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
                  <path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"/>
                  <path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"/>
                </svg>
              </div>
              <h3>Quick Fixes Guide</h3>
              <p>Low-cost, high-impact suggestions for sellers who want to boost value without major renovation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Buyers Section */}
      <section
        className="rea-section buyers-section"
        ref={(el) => { sectionsRef.current[2] = el; }}
      >
        <div className="container">
          <h2 className="section-title">For Buyers</h2>
          <p className="section-intro">Help Your Clients See the Future</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3>Pre-Purchase Design Review™</h3>
              <p>A professional design assessment before your client makes an offer—so they know exactly what the home can become.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h3>Visualization Tools</h3>
              <p>VR, 3D renderings, or concept boards to help hesitant buyers see possibilities.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              </div>
              <h3>Decision Support</h3>
              <p>Help clients compare properties based on design potential, not just current condition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section
        className="rea-section why-section"
        ref={(el) => { sectionsRef.current[3] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Why Partner With Us</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p>Add value to your client experience without extra workload</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p>Stand out from other agents with premium design offerings</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p>Close deals faster when buyers and sellers see the potential</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p>Build long-term relationships with a trusted design partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Models Section */}
      <section
        className="rea-section models-section"
        ref={(el) => { sectionsRef.current[4] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Partnership Models</h2>
          <div className="models-grid">
            <div className="model-card">
              <div className="model-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <h3>Per-Client Basis</h3>
              <p>Refer clients on a case-by-case basis and receive preferred partner pricing.</p>
            </div>
            <div className="model-card featured">
              <div className="model-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Ongoing Partnership</h3>
              <p>Dedicated support for your entire client portfolio with priority scheduling and exclusive rates.</p>
            </div>
            <div className="model-card">
              <div className="model-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                  <line x1="1" y1="10" x2="23" y2="10"/>
                </svg>
              </div>
              <h3>White-Label Service</h3>
              <p>Offer design services under your own brand with seamless backend support from our team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="rea-section cta-section"
        ref={(el) => { sectionsRef.current[5] = el; }}
        id="contact"
      >
        <div className="container">
          <h2 className="cta-title">Let's Partner Together</h2>
          <p className="cta-description">
            Elevate your client experience with professional design support. Contact us to discuss partnership opportunities.
          </p>
          <a href="/#contact-cta" className="cta-button-large">
            <span>Start a Partnership</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default RealEstateAgentsContent;
