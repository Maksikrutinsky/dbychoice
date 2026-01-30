'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const OverseasResidentsHero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className="or-hero" ref={heroRef}>
      <div className="or-hero-bg">
        <Image
          src="/images/Special Services/Design & Support for Overseas Residents.webp"
          alt="Design & Support for Overseas Residents"
          fill
          className="hero-bg-image"
          priority
          style={{ objectFit: 'cover' }}
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-floating-shapes">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="container or-hero-content">
        <span className="hero-label">Special Services</span>
        <h1 className="or-title">
          <span className="title-line">Design & Support for</span>
          <span className="title-line accent">Overseas Residents</span>
        </h1>

        <p className="or-subtitle">
          Seamless transition. Thoughtful design. A home that feels like yours — from day one.
        </p>

        <a href="/#contact-cta" className="cta-button">
          <span>Start Your Journey</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default OverseasResidentsHero;
