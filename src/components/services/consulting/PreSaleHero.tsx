'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const PreSaleHero = () => {
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
    <section className="pre-sale-hero" ref={heroRef}>
      <div className="pre-sale-hero-bg">
        <Image
          src="/images/Pre-Sale Design Consultation page.webp"
          alt="Desert Modern Home in Arizona"
          fill
          className="hero-bg-image"
          priority
          style={{ objectFit: 'cover' }}
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container pre-sale-hero-content">
        <h1 className="pre-sale-title">
          <span className="title-line">Pre-Sale Design</span>
          <span className="title-line accent">Consultation™</span>
        </h1>

        <p className="pre-sale-subtitle">
          A focused, high-impact consultation that reveals what your home truly needs before hitting the market
        </p>

        <a href="#contact" className="cta-button">
          <span>Book Consultation</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default PreSaleHero;
