'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const OneTimeConsultationHero = () => {
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
      {
        threshold: 0.2,
      }
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
    <section className="otc-hero" ref={heroRef}>
      <div className="otc-hero-bg">
        <Image
          src="/images/One-Time Consultation.webp"
          alt="One-Time Consultation"
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

      <div className="container otc-hero-content">
        <span className="hero-label">Consulting Services</span>
        <h1 className="otc-title">
          <span className="title-line">One-Time Consultation</span>
          <span className="title-line accent">The Direction Session&trade;</span>
        </h1>

        <p className="otc-subtitle">
          Your home, your dream, your path. Let's define it.
        </p>

        <a href="/#contact-cta" className="cta-button">
          <span>Book Your Session</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default OneTimeConsultationHero;
