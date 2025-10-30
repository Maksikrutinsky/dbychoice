'use client';

import { useEffect, useRef } from 'react';

const RevolutionaryDesign = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section id="revolutionary-design" className="revolutionary-section section">
      <div className="revolutionary-bg">
        <div className="light-beam beam-1"></div>
        <div className="light-beam beam-2"></div>
        <div className="light-beam beam-3"></div>
        <div className="golden-ring"></div>
      </div>
      
      <div className="container revolutionary-content">
        <div className="design-decorations">
          <div className="decoration-left">
            <svg className="decor-svg" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M 20,20 L 80,20 L 80,40" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.6"/>
              <path d="M 20,20 L 20,80" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.6"/>
              <line x1="10" y1="100" x2="90" y2="100" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
              <rect x="30" y="95" width="40" height="10" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.45"/>
              <path d="M 50,140 L 50,180" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.5"/>
              <circle cx="50" cy="140" r="8" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.45"/>
            </svg>
          </div>

          <div className="decoration-right">
            <svg className="decor-svg" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="20" width="60" height="50" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.6"/>
              <line x1="50" y1="20" x2="50" y2="70" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
              <line x1="20" y1="45" x2="80" y2="45" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
              <line x1="50" y1="100" x2="50" y2="120" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
              <circle cx="50" cy="125" r="12" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.6"/>
              <path d="M 20,160 L 80,160 L 80,180" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.5"/>
            </svg>
          </div>
        </div>

        <h2 className="revolutionary-title" ref={titleRef}>
          <span className="title-main">The Design Reality</span>
          <span className="title-highlight">You&apos;ve Always Dreamed Of</span>
        </h2>

        <div className="revolutionary-description">
          <p>Experience the next generation of interior design — live, interactive, and immersive. Where every detail comes to life in real-time.</p>
          <p>From sketch to visualization, from the field to your screen — our technology empowers you to see, feel, and decide as if you were there yourself.</p>
          <p>Whether you&apos;re at home, at work, or in another country entirely — you&apos;re part of the process, always. Watch, connect, and design your dream — with one click.</p>
        </div>

        <div className="revolutionary-links">
          <a href="#team" className="text-link">About &gt;</a>
          <a href="#tech" className="text-link">Our Technology &gt;</a>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryDesign;

