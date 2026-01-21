'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const BathroomsHero = () => {
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
    <section className="bathrooms-hero" ref={heroRef}>
      <div className="bathrooms-hero-bg">
        <Image
          src="/images/Residential Design/Bathrooms.webp"
          alt="Bathroom Design"
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

      <div className="container bathrooms-hero-content">
        <span className="hero-label">Bathroom Design</span>
        <h1 className="bathrooms-title">
          <span className="title-line">Bathroom Design</span>
          <span className="title-line accent">A Private Space for Calm and Renewal</span>
        </h1>

        <p className="bathrooms-subtitle">
          "I love our bathroom so much — I don't want to leave it."
        </p>

        <a href="#contact" className="cta-button">
          <span>Design Your Bathroom</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default BathroomsHero;
