'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const KitchensHero = () => {
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
    <section className="kitchens-hero" ref={heroRef}>
      <div className="kitchens-hero-bg">
        <Image
          src="/images/Residential Design/Kitchens.webp"
          alt="Kitchen Design"
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

      <div className="container kitchens-hero-content">
        <span className="hero-label">Kitchen Design</span>
        <h1 className="kitchens-title">
          <span className="title-line">Kitchen Design</span>
          <span className="title-line accent">The Heart of the Home</span>
        </h1>

        <p className="kitchens-subtitle">
          Where life happens, connections are made, and memories are created
        </p>

        <a href="/#contact-cta" className="cta-button">
          <span>Design Your Kitchen</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default KitchensHero;
