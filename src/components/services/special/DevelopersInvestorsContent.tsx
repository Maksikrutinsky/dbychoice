'use client';

import { useEffect, useRef } from 'react';

const DevelopersInvestorsContent = () => {
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
    <div className="di-content">
      {/* Introduction */}
      <section className="di-section intro-section" ref={(el) => { sectionsRef.current[0] = el; }}>
        <div className="container">
          <h2 className="section-title">Design Is Strategy</h2>
          <div className="intro-content">
            <p className="intro-lead">
              In today's competitive market, design is not just aesthetics — it's strategy.
            </p>
            <p className="intro-text">
              At Design By Choice, we help developers and investors create properties that stand out, attract buyers, and deliver exceptional returns through focused, efficient, and visually compelling design solutions.
            </p>
            <p className="intro-highlight">
              Thoughtful design doesn't just enhance appearance — it creates emotional connection, elevates user experience, and measurably increases property value.
            </p>
          </div>
        </div>
      </section>

      {/* Smart Design */}
      <section className="di-section smart-section" ref={(el) => { sectionsRef.current[1] = el; }}>
        <div className="container">
          <h2 className="section-title">Smart Design. Real Results.</h2>
          <div className="smart-content">
            <p className="smart-text">
              We understand that success lies in balancing luxury with budget precision. Our process ensures that every project feels refined, modern, and market-ready — while remaining aligned with timelines and financial goals.
            </p>
            <p className="smart-highlight">
              From model homes and properties for sale to residential and commercial developments, we deliver cohesive design concepts that maximize both appeal and profitability.
            </p>
          </div>
        </div>
      </section>

      {/* Smart Refresh Package */}
      <section className="di-section package-section" ref={(el) => { sectionsRef.current[2] = el; }}>
        <div className="container">
          <h2 className="section-title">The Smart Refresh Package</h2>
          <p className="section-intro">A targeted upgrade solution for developers, investors, and property sellers looking to increase value quickly and effectively.</p>
          <div className="package-grid">
            <div className="package-card">
              <div className="package-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
                </svg>
              </div>
              <h3>Design Strategy</h3>
              <p>Aligned with target audience and market positioning</p>
            </div>
            <div className="package-card">
              <div className="package-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                </svg>
              </div>
              <h3>Smart Interior Refresh</h3>
              <p>Emphasizing light, modernity, and premium appeal</p>
            </div>
            <div className="package-card">
              <div className="package-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="13.5" cy="6.5" r="4"/><circle cx="19" cy="17" r="3"/><circle cx="6" cy="17" r="4"/>
                </svg>
              </div>
              <h3>Materials & Colors</h3>
              <p>Carefully selected within a defined budget</p>
            </div>
            <div className="package-card">
              <div className="package-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>
              <h3>Professional Staging</h3>
              <p>For marketing and sales impact</p>
            </div>
            <div className="package-card featured">
              <div className="package-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3>Spatial Experience</h3>
              <p>Allows buyers or tenants to envision themselves in the space</p>
            </div>
          </div>
          <div className="goal-box">
            <p><strong>The goal:</strong> Transform the property into a polished, high-end product that sells faster and at a higher value.</p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="di-section process-section" ref={(el) => { sectionsRef.current[3] = el; }}>
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <div className="process-grid">
            <div className="process-card">
              <div className="process-number">1</div>
              <h3>Market Alignment</h3>
              <p>Analyzing target audience, pricing levels, and competitors</p>
            </div>
            <div className="process-card">
              <div className="process-number">2</div>
              <h3>Efficient Concept Design</h3>
              <p>Creating a refined, accessible design language with balanced materials and colors</p>
            </div>
            <div className="process-card">
              <div className="process-number">3</div>
              <h3>Precise Execution</h3>
              <p>Detailed planning, supplier coordination, and on-site guidance</p>
            </div>
            <div className="process-card">
              <div className="process-number">4</div>
              <h3>Value-Driven Results</h3>
              <p>Design that delivers strong ROI and faster sales cycles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="di-section why-section" ref={(el) => { sectionsRef.current[4] = el; }}>
        <div className="container">
          <h2 className="section-title">Why Developers & Investors Choose Design By Choice</h2>
          <div className="why-list">
            <div className="why-item">
              <div className="why-marker">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p>Design concepts aligned with the property's financial potential</p>
            </div>
            <div className="why-item">
              <div className="why-marker">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p>Premium material selection with budget awareness</p>
            </div>
            <div className="why-item">
              <div className="why-marker">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p>Experience across residential, commercial, and mixed-use projects</p>
            </div>
            <div className="why-item">
              <div className="why-marker">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p>Clear documentation, advanced visualizations, and full coordination</p>
            </div>
            <div className="why-item">
              <div className="why-marker">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p>A unique balance between business strategy and refined design</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="di-section cta-section" ref={(el) => { sectionsRef.current[5] = el; }} id="contact">
        <div className="container">
          <h2 className="cta-title">Let's Create Your Next Success</h2>
          <p className="cta-description">
            From concept to delivery — design that maximizes property value and accelerates sales.
          </p>
          <a href="/#contact-cta" className="cta-button-large">
            <span>Partner With Us</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default DevelopersInvestorsContent;
