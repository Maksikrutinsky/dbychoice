"use client";

import { useEffect, useRef } from 'react';

const ServicesHero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Always toggle animation based on visibility
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          } else {
            entry.target.classList.remove('animate-in');
          }
        });
      },
      { threshold: 0.2, rootMargin: '-100px 0px' }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="services-hero">
      <div className="services-hero-background">
        <div className="services-hero-overlay"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="container services-hero-content">
        <div className="services-hero-text">
          <h1 className="services-hero-title">
            <span className="title-line">Studio Services</span>
          </h1>

          <div className="services-hero-description">
            <p className="lead-text">
              Our studio offers a comprehensive range of services so that every client can find exactly what they're looking for. We ensure complete and meticulous support for every project from start to finish, providing you with peace of mind and a sense of security throughout the process, and delivering an environment that perfectly matches your desires, taste, and aspirations.
            </p>

            <p className="secondary-text">
              Alongside first-class planning and design services, we offer comprehensive project management, remote services for overseas residents who aren't present during renovation or construction, and a variety of consulting services to help you choose the right property for your family, stay within budgets and goals, and achieve the best results with minimum stress and time, and maximum taste and style.
            </p>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span className="scroll-text">Scroll to explore</span>
      </div>
    </section>
  );
};

export default ServicesHero;
