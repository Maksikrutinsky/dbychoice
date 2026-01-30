'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const HospitalityHero = () => {
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
    <section className="hospitality-hero" ref={heroRef}>
      <div className="hospitality-hero-bg">
        <Image
          src="/images/Commercial Design/Hospitality.webp"
          alt="Hospitality Design"
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

      <div className="container hospitality-hero-content">
        <span className="hero-label">Commercial Design</span>
        <h1 className="hospitality-title">
          <span className="title-line">Hospitality</span>
          <span className="title-line accent">Memorable Guest Experiences</span>
        </h1>

        <p className="hospitality-subtitle">
          Creating spaces that welcome, delight, and leave lasting impressions
        </p>

        <a href="/#contact-cta" className="cta-button">
          <span>Elevate Your Guest Experience</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HospitalityHero;
