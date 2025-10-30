'use client';

import { useState } from 'react';

interface HeroProps {
  onWatchClick?: () => void;
}

const Hero = ({ onWatchClick }: HeroProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleWatchNow = () => {
    setIsPlaying(true);
    if (onWatchClick) {
      onWatchClick();
    }
    // Trigger modal from parent
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('openYoutubeModal'));
    }
  };

  return (
    <section id="home" className="hero-wrapper">
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/video/background.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="hero section">
        <div className="container hero-content">
          <div className="hero-copy">
            <h1 className="headline">
              <span className="headline-line">
                Where You&apos;re Part of the Creative Reality
              </span>
            </h1>
            <div className="hero-cta">
              <button
                className="cta-button watch-now"
                onClick={handleWatchNow}
                aria-label="Watch our introduction video"
              >
                <svg
                  className="play-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                </svg>
                WATCH NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

