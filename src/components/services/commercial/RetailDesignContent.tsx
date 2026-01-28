'use client';

import { useEffect, useRef } from 'react';

const RetailDesignContent = () => {
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
    <div className="retail-design-content">
      {/* Introduction Section */}
      <section
        className="rd-section intro-section"
        ref={(el) => { sectionsRef.current[0] = el; }}
      >
        <div className="container">
          <div className="intro-content">
            <p className="intro-lead">
              Commercial interior design plays a crucial — and often decisive — role in the customer experience.
            </p>
            <p className="intro-text">
              A well-designed commercial space must reflect the company's core values and DNA, while naturally guiding the customer toward the product itself.
            </p>
            <p className="intro-highlight">
              An experienced commercial interior designer knows how to delicately weave a brand's capabilities and identity into the interior design, ensuring that the sales process begins the moment a customer steps through the door.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Integration Section */}
      <section
        className="rd-section brand-section"
        ref={(el) => { sectionsRef.current[1] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Brand Integration in Design</h2>
          <div className="brand-content">
            <p className="brand-intro">
              Whether designing an office, workspace, retail store, hotel, or spa, commercial design integrates the brand into the planning process from its earliest stages.
            </p>
            <div className="brand-grid">
              <div className="brand-item">
                <div className="brand-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <span>Retail Stores</span>
              </div>
              <div className="brand-item">
                <div className="brand-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                </div>
                <span>Offices</span>
              </div>
              <div className="brand-item">
                <div className="brand-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
                    <path d="M12 18h.01"/>
                  </svg>
                </div>
                <span>Hotels</span>
              </div>
              <div className="brand-item">
                <div className="brand-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <span>Spas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Journey Section */}
      <section
        className="rd-section journey-section"
        ref={(el) => { sectionsRef.current[2] = el; }}
      >
        <div className="container">
          <h2 className="section-title">How Do You Encourage Customers to Buy?</h2>
          <div className="journey-content">
            <p className="journey-intro">
              High-quality, well-executed commercial interior design must be built around both the product and its target audience, in full alignment with the brand's identity.
            </p>
            <div className="journey-highlight">
              <p>
                Innovation, the use of creative and advanced materials, and the thoughtful translation of a company's core values into the physical space all contribute to the success of the business — justifying the investment and supporting long-term growth and prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Impact Section */}
      <section
        className="rd-section employee-section"
        ref={(el) => { sectionsRef.current[3] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Impact on Employee Satisfaction</h2>
          <div className="employee-content">
            <p className="employee-text">
              A successful commercial design also enhances employee satisfaction and productivity.
            </p>
            <p className="employee-highlight">
              Employees take pride in their workplace and demonstrate greater dedication and commitment when the environment reflects the company's respect for both its team and its customers.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Path Section */}
      <section
        className="rd-section path-section"
        ref={(el) => { sectionsRef.current[4] = el; }}
      >
        <div className="container">
          <h2 className="section-title">The Customer Journey</h2>
          <div className="path-content">
            <div className="path-steps">
              <div className="path-step">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h3>Entrance & First Impression</h3>
                  <p>Creating a strong and memorable first impression that welcomes and intrigues</p>
                </div>
              </div>
              <div className="path-step">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h3>Product Presentation</h3>
                  <p>Showcasing products and demonstrating execution capabilities effectively</p>
                </div>
              </div>
              <div className="path-step">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h3>Point of Sale</h3>
                  <p>A carefully choreographed path with core messages and brand values subtly embedded</p>
                </div>
              </div>
              <div className="path-step">
                <div className="step-number">04</div>
                <div className="step-content">
                  <h3>Confident Exit</h3>
                  <p>Reinforcing the customer's confidence — a quiet confirmation that they've chosen the right place</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complexity Section */}
      <section
        className="rd-section complexity-section"
        ref={(el) => { sectionsRef.current[5] = el; }}
      >
        <div className="container">
          <div className="complexity-content">
            <div className="complexity-box">
              <p className="complexity-text">
                Designing commercial spaces is a complex process that requires experience, understanding, and precision in order to align the design with functional, emotional, and business-driven needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="rd-section cta-section"
        ref={(el) => { sectionsRef.current[6] = el; }}
        id="contact"
      >
        <div className="container">
          <h2 className="cta-title">Ready to Transform Your Commercial Space?</h2>
          <p className="cta-description">
            Let's create a retail environment that reflects your brand's identity and guides customers toward success.
          </p>
          <a href="/#contact-cta" className="cta-button-large">
            <span>Start Your Retail Design Project</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default RetailDesignContent;
