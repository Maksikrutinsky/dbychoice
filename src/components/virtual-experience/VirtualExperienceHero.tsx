'use client';

import { useEffect, useState } from 'react';

const VirtualExperienceHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="virtual-experience-hero" className="virtual-hero-wrapper">
      {/* Video Background - Full Section */}
      <div className="virtual-video-background">
        <video autoPlay muted loop playsInline className="virtual-hero-video">
          <source src="/videos/video5.mp4" type="video/mp4" />
        </video>
        <div className="virtual-video-overlay"></div>
      </div>

      {/* Animated Particles Background */}
      <div className="particles-background">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>

      {/* Text Content Overlay */}
      <div className="virtual-hero-section">
        <div className={`container virtual-hero-content ${isLoaded ? 'loaded' : ''}`}>
          <h1 className="virtual-hero-title">
            <span className="title-word title-word-1">Virtual</span>
            <span className="title-word title-word-2">Experience</span>
          </h1>
          <p className="virtual-hero-description">
            Experience design in immersive 3D reality
          </p>
        </div>
      </div>
    </section>
  );
};

export default VirtualExperienceHero;
