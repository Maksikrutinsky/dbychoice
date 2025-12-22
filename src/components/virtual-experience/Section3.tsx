'use client';

import { useEffect, useRef, useState } from 'react';

const Section3 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasDropped, setHasDropped] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const images = [
    '/images/phone-livingroom_01-phone-navy.webp',
    '/images/phone-livingroom_02-inside-screen-navy.webp',
    '/images/phone-livingroom_03-emerging-navy.webp',
    '/images/phone-livingroom_04-full-room-navy.webp'
  ];

  // Auto-play animation when section is in view
  useEffect(() => {
    let interval: NodeJS.Timeout;
    let dropTimeout: NodeJS.Timeout;
    let firstTransitionTimeout: NodeJS.Timeout;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Wait for phone to drop before starting animation
            dropTimeout = setTimeout(() => {
              setHasDropped(true);
              // First transition happens faster (800ms after drop)
              firstTransitionTimeout = setTimeout(() => {
                setCurrentImageIndex(1);
                // Then start regular interval from image 2 onwards
                interval = setInterval(() => {
                  setCurrentImageIndex((prev) => {
                    const next = prev + 1;
                    return next >= images.length ? 0 : next;
                  });
                }, 1500); // Regular speed for subsequent transitions
              }, 800); // Faster first transition
            }, 1200); // Wait for drop animation to complete
          } else {
            // Stop auto-playing when out of view
            setIsVisible(false);
            setHasDropped(false);
            setCurrentImageIndex(0);
            if (interval) clearInterval(interval);
            if (dropTimeout) clearTimeout(dropTimeout);
            if (firstTransitionTimeout) clearTimeout(firstTransitionTimeout);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (interval) clearInterval(interval);
      if (dropTimeout) clearTimeout(dropTimeout);
      if (firstTransitionTimeout) clearTimeout(firstTransitionTimeout);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [images.length]);

  return (
    <section
      ref={sectionRef}
      id="virtual-section-3"
      style={{
        minHeight: '85vh',
        position: 'relative',
        background: '#0b162dff',
        clipPath: 'polygon(0 0, 100% 200px, 100% calc(100% - 200px), 0 100%)',
        marginTop: '-200px',
        paddingTop: '200px',
        paddingBottom: '200px',
        overflow: 'hidden'
      }}
    >
      {/* Main Content Area */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '80px'
        }}
      >
        {/* Left Side - Title and Text */}
        <div style={{
          flex: '1',
          maxWidth: '500px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
          transition: 'opacity 1.5s ease-out 0.3s, transform 1.5s ease-out 0.3s',
          position: 'relative',
          paddingRight: '40px'
        }}>
          <h2 style={{
            fontSize: '4rem',
            fontWeight: '700',
            fontFamily: 'Playfair Display, serif',
            color: '#f5deb3',
            textShadow: '0 4px 30px rgba(245, 222, 179, 0.5)',
            lineHeight: '1.2',
            marginBottom: '3rem'
          }}>
            Virtual Experience<br />on Your Phone
          </h2>
          <p style={{
            fontSize: '1.5rem',
            lineHeight: '1.9',
            color: 'rgba(255, 255, 255, 0.95)',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
          }}>
            Watch your phone transform into a portal for interior design. See designs emerge from the screen into your living room in real-time.
          </p>

          {/* Decorative Diagonal Line */}
          <div style={{
            position: 'absolute',
            right: '0',
            top: '0',
            bottom: '0',
            width: '3px',
            background: 'linear-gradient(180deg, transparent 0%, #d4af37 20%, #f5deb3 50%, #d4af37 80%, transparent 100%)',
            transform: 'translateX(-15%) skewX(10deg)',
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.4), 0 0 40px rgba(212, 175, 55, 0.2)',
            zIndex: 10
          }} />
        </div>

        {/* Right Side - Magical Image Animation */}
        <div style={{
          flex: '1',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(100px) scale(0.9)',
          transition: 'opacity 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s, transform 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s',
          position: 'relative',
          paddingRight: '0px',
          marginRight: '-100px'
        }}>

          {/* Images Container with Animation Effect */}
          <div style={{
            position: 'relative',
            width: '650px',
            height: '750px',
            overflow: 'hidden',
            zIndex: 2
          }}>
            {/* Display all images stacked with smooth animation */}
            {images.map((img, index) => {
              const isActive = currentImageIndex === index;
              const isFirstImage = index === 0;

              return (
                <img
                  key={index}
                  src={img}
                  alt={`Virtual experience step ${index + 1}`}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    opacity: isActive ? 1 : 0,
                    transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    zIndex: isActive ? 2 : 1,
                    display: !hasDropped && !isFirstImage ? 'none' : 'block'
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes swirl {
          0% {
            transform: translateX(50%) rotate(0deg) scale(0.5);
            opacity: 0;
          }
          30% {
            transform: translateX(50%) rotate(100deg) scale(1.1);
            opacity: 0.9;
          }
          60% {
            transform: translateX(50%) rotate(200deg) scale(1.3);
            opacity: 0.8;
          }
          100% {
            transform: translateX(50%) rotate(360deg) scale(0.9);
            opacity: 0;
          }
        }

        @keyframes sparkle {
          0% {
            transform: translateY(-50px) scale(0) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 1;
            transform: translateY(50px) scale(1.2) rotate(180deg);
          }
          50% {
            opacity: 1;
            transform: translateY(150px) scale(1) rotate(360deg);
          }
          80% {
            opacity: 0.8;
            transform: translateY(250px) scale(0.8) rotate(540deg);
          }
          100% {
            transform: translateY(350px) scale(0) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        @keyframes lightSweep {
          0% {
            background-position: -200% 0;
            opacity: 0.3;
          }
          50% {
            background-position: 0% 0;
            opacity: 1;
          }
          100% {
            background-position: 200% 0;
            opacity: 0.3;
          }
        }

        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          section#virtual-section-3 {
            padding-top: 120px !important;
            padding-bottom: 120px !important;
            clip-path: polygon(0 0, 100% 80px, 100% calc(100% - 80px), 0 100%) !important;
            margin-top: -80px !important;
          }

          .container {
            flex-direction: column !important;
            gap: 40px !important;
            padding: 0 20px !important;
          }

          h2 {
            font-size: 2.5rem !important;
            margin-bottom: 2rem !important;
          }

          p {
            font-size: 1.1rem !important;
            margin-bottom: 1.5rem !important;
          }

          div[style*="width: 650px"] {
            width: 100% !important;
            max-width: 450px !important;
            height: 550px !important;
            padding-right: 0 !important;
          }

          div[style*="maxWidth: 500px"] {
            max-width: 100% !important;
            padding-right: 0 !important;
          }

          div[style*="skewX"] {
            display: block !important;
            right: 50% !important;
            left: auto !important;
            transform: translateX(50%) skewX(0deg) !important;
            width: 2px !important;
            height: 80px !important;
            top: auto !important;
            bottom: -60px !important;
          }

          div[style*="marginRight: -100px"] {
            margin-right: 0 !important;
          }

          div[style*="width: 650px"] {
            width: 100% !important;
            max-width: 450px !important;
            height: 550px !important;
            margin: 0 auto !important;
          }
        }

        @media (max-width: 480px) {
          h2 {
            font-size: 2rem !important;
          }

          p {
            font-size: 1rem !important;
          }

          div[style*="width: 650px"] {
            max-width: 100% !important;
            height: 450px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Section3;
