'use client';

import { useRef, useEffect, useState } from 'react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('.revolutionary-design');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-wrapper">
      {/* Video Background */}
      <div className="video-background">
        <video ref={videoRef} autoPlay muted loop playsInline className="hero-video">
          <source src="/images/video2.1.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Decorative Elements */}
      <div className="hero-decoration">
        <div className="decoration-line decoration-line-1"></div>
        <div className="decoration-line decoration-line-2"></div>
        <div className="decoration-corner decoration-corner-tl"></div>
        <div className="decoration-corner decoration-corner-br"></div>
      </div>

      {/* Hero Content */}
      <div className="hero section">
        <div className="container hero-content">
          <div className={`hero-copy ${isVisible ? 'hero-copy-visible' : ''}`}>
            <span className="hero-tagline">Design By Choice</span>
            <h1 className="headline">
              <span className="headline-line headline-line-1">
                Where You&apos;re Part
              </span>
              <span className="headline-line headline-line-2">
                of the Creative
              </span>
              <span className="headline-line headline-line-3 headline-accent">
                Reality
              </span>
            </h1>
            <p className="hero-subtitle">
              Smart, transparent, and accessible interior design
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator" onClick={scrollToNext}>
          <span className="scroll-text">Explore</span>
          <div className="scroll-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
