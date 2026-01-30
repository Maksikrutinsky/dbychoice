"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  description: string[];
  features: string[];
  processSteps?: { title: string; description: string }[];
  imageUrl?: string;
}

const ServicePageTemplate = ({
  title,
  subtitle,
  description,
  features,
  processSteps,
  imageUrl,
}: ServicePageTemplateProps) => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add('animate-in');
    }
  }, []);

  return (
    <div className="service-page-template">
      {/* Hero Section */}
      <section ref={heroRef} className="service-page-hero">
        <div className="service-page-hero-background">
          <div className="hero-gradient"></div>
        </div>

        <div className="container">
          <Link href="/services" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12l7 7M5 12l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Back to Services</span>
          </Link>

          <div className="service-page-hero-content">
            <span className="service-page-subtitle">{subtitle}</span>
            <h1 className="service-page-title">{title}</h1>
            {description.map((paragraph, idx) => (
              <p key={idx} className="service-page-description">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="service-features-section">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card" style={{ '--feature-index': idx } as React.CSSProperties}>
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="feature-text">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      {processSteps && processSteps.length > 0 && (
        <section className="service-process-section">
          <div className="container">
            <h2 className="section-title">Our Process</h2>
            <div className="process-timeline">
              {processSteps.map((step, idx) => (
                <div key={idx} className="process-step" style={{ '--step-index': idx } as React.CSSProperties}>
                  <div className="step-number">{String(idx + 1).padStart(2, '0')}</div>
                  <div className="step-content">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                  {idx < processSteps.length - 1 && <div className="step-connector"></div>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="service-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-description">
              Let's bring your vision to life. Contact us today to discuss your project.
            </p>
            <Link href="/#contact-cta" className="cta-button">
              <span>Contact Us</span>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageTemplate;
