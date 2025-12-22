'use client';

import { useEffect, useRef, useState } from 'react';

const Section4 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Speed up video playback to 80% speed (faster than before)
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Restart video from beginning when section is visible
            if (videoRef.current) {
              videoRef.current.currentTime = 0;
              videoRef.current.play();
            }
          } else {
            // Pause video when section is not visible
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="virtual-section-4"
      style={{
        minHeight: '85vh',
        position: 'relative',
        background: 'linear-gradient(135deg, #f5ead5 0%, #e8d4b8 100%)',
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
        {/* Left Side - Video with Diagonal Clip */}
        <div style={{
          flex: '1.2',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'stretch',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(-100px) scale(0.9)',
          transition: 'opacity 1.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s, transform 1.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s',
          position: 'relative',
          minHeight: '70vh'
        }}>
          <div style={{
            position: 'relative',
            clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)',
            overflow: 'hidden',
            width: '100%',
            height: '100%'
          }}>
            <video
              ref={videoRef}
              src="/videos/video1.mp4"
              loop
              muted
              playsInline
              style={{
                width: '100%',
                height: '100%',
                minHeight: '70vh',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>

          {/* Decorative Diagonal Line */}
          <div style={{
            position: 'absolute',
            right: '0',
            top: '0',
            bottom: '0',
            width: '3px',
            background: 'linear-gradient(180deg, transparent 0%, #d4af37 20%, #f5deb3 50%, #d4af37 80%, transparent 100%)',
            transform: 'translateX(15%) skewX(-10deg)',
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.4), 0 0 40px rgba(212, 175, 55, 0.2)',
            zIndex: 10
          }} />
        </div>

        {/* Right Side - Title and Text */}
        <div style={{
          flex: '1',
          maxWidth: '500px',
          paddingLeft: '40px'
        }}>
          <h2 style={{
            fontSize: '4rem',
            fontWeight: '700',
            fontFamily: 'Playfair Display, serif',
            color: '#0b162d',
            textShadow: '0 2px 10px rgba(11, 22, 45, 0.1)',
            lineHeight: '1.2',
            marginBottom: '3rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(-40px) scale(0.95)',
            transition: 'opacity 1.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s, transform 1.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s'
          }}>
            VR Headset Experience
          </h2>
          <p style={{
            fontSize: '1.5rem',
            lineHeight: '1.9',
            color: '#2c3e50',
            textShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 1.6s ease-out 0.7s, transform 1.6s ease-out 0.7s'
          }}>
            Immerse yourself in a virtual world of interior design. Experience your spaces in full 3D with cutting-edge VR technology.
          </p>
        </div>
      </div>

      <style jsx>{`
        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          section#virtual-section-4 {
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

          video {
            width: 100% !important;
            max-width: 450px !important;
            height: 550px !important;
          }

          div[style*="maxWidth: 500px"] {
            max-width: 100% !important;
            padding-left: 0 !important;
          }

          div[style*="clipPath"] {
            clip-path: none !important;
          }

          div[style*="skewX"] {
            display: block !important;
            right: 50% !important;
            transform: translateX(50%) skewX(0deg) !important;
            width: 2px !important;
            height: 80px !important;
            top: auto !important;
            bottom: -60px !important;
          }
        }

        @media (max-width: 480px) {
          h2 {
            font-size: 2rem !important;
          }

          p {
            font-size: 1rem !important;
          }

          video {
            max-width: 100% !important;
            height: 450px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Section4;
