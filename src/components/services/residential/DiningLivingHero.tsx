'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const DiningLivingHero = () => {
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
    <section className="dining-living-hero" ref={heroRef}>
      <div className="dining-living-hero-bg">
        <Image
          src="/images/Residential Design/Dining & Living Rooms.webp"
          alt="Dining & Living Room Design"
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

      <div className="container dining-living-hero-content">
        <span className="hero-label">Shared Living Spaces</span>
        <h1 className="dining-living-title">
          <span className="title-line">Dining & Living Rooms</span>
          <span className="title-line accent">The Heart of Your Home</span>
        </h1>

        <p className="dining-living-subtitle">
          Creating spaces where family gathers, friends connect, and memories are made
        </p>

        <a href="/#contact-cta" className="cta-button">
          <span>Design Your Living Space</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default DiningLivingHero;
