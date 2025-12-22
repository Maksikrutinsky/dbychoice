'use client';

import { useEffect, useRef, useState } from 'react';

const Section5 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const videos = [
    '/videos/video2.mp4',
    '/videos/video3.mp4',
    '/videos/video4.mp4'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Start playing all videos
            videoRefs.current.forEach(video => {
              if (video) {
                video.currentTime = 0;
                video.play().catch(err => {
                  console.log('Video autoplay prevented:', err);
                });
              }
            });
          } else {
            setIsVisible(false);
            // Pause all videos when out of view
            videoRefs.current.forEach(video => {
              if (video) video.pause();
            });
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
      id="virtual-section-5"
      style={{
        minHeight: '70vh',
        position: 'relative',
        background: '#0b162dff',
        clipPath: 'polygon(0 0, 100% 200px, 100% 100%, 0 100%)',
        marginTop: '-200px',
        paddingTop: '250px',
        paddingBottom: '100px',
        overflow: 'hidden'
      }}
    >
      {/* Main Container - Two Columns */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '60px',
          minHeight: '50vh',
          alignItems: 'center',
          maxWidth: '1600px',
          margin: '0 auto',
          padding: '0 40px'
        }}
      >
        {/* Left Side - Title and Text */}
        <div style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '60px 40px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
          transition: 'opacity 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s, transform 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s'
        }}>
          {/* Title and Text */}
          <h2 style={{
            fontSize: '4rem',
            fontWeight: '700',
            fontFamily: 'Playfair Display, serif',
            color: '#f5deb3',
            textShadow: '0 4px 30px rgba(245, 222, 179, 0.5)',
            lineHeight: '1.2',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            iPad Scanning<br />to Reality
          </h2>
          <p style={{
            fontSize: '1.4rem',
            lineHeight: '1.8',
            color: 'rgba(255, 255, 255, 0.95)',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
            textAlign: 'left',
            maxWidth: '500px'
          }}>
            Watch iPad scans transform into tangible reality. Experience how your design scans become real, immersive spaces.
          </p>
        </div>

        {/* Right Side - Three Videos in Row Layout */}
        <div style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          gap: '30px',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
          transition: 'opacity 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s, transform 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s'
        }}>
          {/* Video 1 */}
          <div style={{
            position: 'relative',
            width: '280px',
            transform: 'rotate(-5deg)',
            transition: 'transform 0.3s ease'
          }}>
            {/* Diagonal Gold Line After Video 1 */}
            <div style={{
              position: 'absolute',
              top: '50%',
              right: '-25px',
              width: '50px',
              height: '3px',
              background: 'linear-gradient(90deg, #d4af37 0%, transparent 100%)',
              transform: 'translateY(-50%) rotate(45deg)',
              boxShadow: '0 0 20px rgba(212, 175, 55, 0.8)',
              zIndex: 1
            }} />

            <video
              ref={el => { videoRefs.current[0] = el; }}
              src={videos[0]}
              loop
              muted
              playsInline
              preload="auto"
              onLoadedData={() => console.log('Video 0 data loaded')}
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: '9/16',
                objectFit: 'cover',
                display: 'block',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(212, 175, 55, 0.3)',
                border: '3px solid #d4af37',
                borderRadius: '8px'
              }}
            />
          </div>

          {/* Video 2 */}
          <div style={{
            position: 'relative',
            width: '280px',
            transform: 'rotate(3deg)',
            transition: 'transform 0.3s ease'
          }}>
            {/* Diagonal Gold Line After Video 2 */}
            <div style={{
              position: 'absolute',
              top: '50%',
              right: '-25px',
              width: '50px',
              height: '3px',
              background: 'linear-gradient(90deg, #d4af37 0%, transparent 100%)',
              transform: 'translateY(-50%) rotate(45deg)',
              boxShadow: '0 0 20px rgba(212, 175, 55, 0.8)',
              zIndex: 1
            }} />

            <video
              ref={el => { videoRefs.current[1] = el; }}
              src={videos[1]}
              loop
              muted
              playsInline
              preload="auto"
              onLoadedData={() => console.log('Video 1 data loaded')}
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: '9/16',
                objectFit: 'cover',
                display: 'block',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(212, 175, 55, 0.3)',
                border: '3px solid #d4af37',
                borderRadius: '8px'
              }}
            />
          </div>

          {/* Video 3 */}
          <div style={{
            position: 'relative',
            width: '280px',
            transform: 'rotate(-4deg)',
            transition: 'transform 0.3s ease'
          }}>
            <video
              ref={el => { videoRefs.current[2] = el; }}
              src={videos[2]}
              loop
              muted
              playsInline
              preload="auto"
              onLoadedData={() => console.log('Video 2 data loaded')}
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: '9/16',
                objectFit: 'cover',
                display: 'block',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(212, 175, 55, 0.3)',
                border: '3px solid #d4af37',
                borderRadius: '8px'
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Tablet and Mobile Responsive Styles */
        @media (max-width: 1200px) {
          .container {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 0 20px !important;
          }

          /* Adjust video container for tablet */
          div[style*="flexDirection: 'row'"] {
            flex-direction: column !important;
            gap: 30px !important;
          }

          /* Reset video rotations and sizes for tablet */
          div[style*="width: '280px'"] {
            width: 60% !important;
            margin: 0 auto !important;
            transform: none !important;
          }
        }

        @media (max-width: 968px) {
          section#virtual-section-5 {
            padding-top: 150px !important;
            padding-bottom: 80px !important;
            clip-path: polygon(0 0, 100% 80px, 100% 100%, 0 100%) !important;
            margin-top: -80px !important;
            min-height: auto !important;
          }

          .container {
            min-height: auto !important;
            gap: 30px !important;
          }

          h2 {
            font-size: 2.5rem !important;
            margin-bottom: 1.5rem !important;
            text-align: center !important;
          }

          p {
            font-size: 1.1rem !important;
            padding: 0 20px !important;
            text-align: center !important;
            margin: 0 auto !important;
          }

          /* Mobile video layout */
          div[style*="width: '280px'"] {
            width: 70% !important;
          }

          video {
            aspect-ratio: 9/16 !important;
            width: 100% !important;
            height: auto !important;
          }

          /* Hide diagonal gold lines on mobile */
          div[style*="rotate(45deg)"] {
            display: none !important;
          }
        }

        @media (max-width: 480px) {
          section#virtual-section-5 {
            padding-top: 100px !important;
            padding-bottom: 60px !important;
          }

          h2 {
            font-size: 2rem !important;
          }

          p {
            font-size: 1rem !important;
          }

          /* Smaller videos on small mobile */
          div[style*="width: '280px'"] {
            width: 85% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Section5;
