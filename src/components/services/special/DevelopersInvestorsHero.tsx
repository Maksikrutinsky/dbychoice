'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const DevelopersInvestorsHero = () => {
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

    if (heroRef.current) observer.observe(heroRef.current);
    return () => { if (heroRef.current) observer.unobserve(heroRef.current); };
  }, []);

  return (
    <section className="di-hero" ref={heroRef}>
      <div className="di-hero-bg">
        <Image
          src="/images/Special Services/Developer & Investor Support.webp"
          alt="Developer & Investor Support"
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

      <div className="container di-hero-content">
        <span className="hero-label">Special Services</span>
        <h1 className="di-title">
          <span className="title-line">Developer & Investor</span>
          <span className="title-line accent">Support</span>
        </h1>

        <p className="di-subtitle">
          Design That Elevates Property Value
        </p>

        <a href="/#contact-cta" className="cta-button">
          <span>Partner With Us</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default DevelopersInvestorsHero;
