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
      className="virtual-section-5"
    >
      <div className="container section5-container">
        {/* Left Side - Title and Text */}
        <div className={`section5-text ${isVisible ? 'visible' : ''}`}>
          <h2>
            iPad Scanning<br />to Reality
          </h2>
          <p>
            Watch iPad scans transform into tangible reality. Experience how your design scans become real, immersive spaces.
          </p>
        </div>

        {/* Right Side - Three Videos */}
        <div className={`section5-videos ${isVisible ? 'visible' : ''}`}>
          <div className="video-card video-card-1">
            <div className="gold-line" />
            <video
              ref={el => { videoRefs.current[0] = el; }}
              src={videos[0]}
              loop
              muted
              playsInline
              preload="auto"
            />
          </div>

          <div className="video-card video-card-2">
            <div className="gold-line" />
            <video
              ref={el => { videoRefs.current[1] = el; }}
              src={videos[1]}
              loop
              muted
              playsInline
              preload="auto"
            />
          </div>

          <div className="video-card video-card-3">
            <video
              ref={el => { videoRefs.current[2] = el; }}
              src={videos[2]}
              loop
              muted
              playsInline
              preload="auto"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .virtual-section-5 {
          min-height: 70vh;
          position: relative;
          background: #0b162dff;
          clip-path: polygon(0 0, 100% 200px, 100% 100%, 0 100%);
          margin-top: -200px;
          padding-top: 250px;
          padding-bottom: 100px;
          overflow: hidden;
        }

        .section5-container {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          min-height: 50vh;
          align-items: center;
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .section5-text {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 60px 40px;
          opacity: 0;
          transform: translateX(-50px);
          transition: opacity 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s, transform 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s;
        }

        .section5-text.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .section5-text h2 {
          font-size: 4rem;
          font-weight: 700;
          font-family: 'Playfair Display', serif;
          color: #f5deb3;
          text-shadow: 0 4px 30px rgba(245, 222, 179, 0.5);
          line-height: 1.2;
          margin-bottom: 2rem;
          text-align: center;
        }

        .section5-text p {
          font-size: 1.4rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.95);
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
          text-align: left;
          max-width: 500px;
        }

        .section5-videos {
          position: relative;
          display: flex;
          flex-direction: row;
          gap: 30px;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateX(50px);
          transition: opacity 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s, transform 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s;
        }

        .section5-videos.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .video-card {
          position: relative;
          width: 280px;
          transition: transform 0.3s ease;
        }

        .video-card-1 {
          transform: rotate(-5deg);
        }

        .video-card-2 {
          transform: rotate(3deg);
        }

        .video-card-3 {
          transform: rotate(-4deg);
        }

        .gold-line {
          position: absolute;
          top: 50%;
          right: -25px;
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, #d4af37 0%, transparent 100%);
          transform: translateY(-50%) rotate(45deg);
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.8);
          z-index: 1;
        }

        .video-card video {
          width: 100%;
          height: auto;
          aspect-ratio: 9/16;
          object-fit: cover;
          display: block;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(212, 175, 55, 0.3);
          border: 3px solid #d4af37;
          border-radius: 8px;
        }

        /* Tablet */
        @media (max-width: 1200px) {
          .section5-container {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 0 20px;
          }

          .section5-text {
            padding: 40px 20px;
            align-items: center;
          }

          .section5-text p {
            text-align: center;
          }

          .video-card {
            width: 200px;
          }

          .video-card-1,
          .video-card-2,
          .video-card-3 {
            transform: none;
          }

          .gold-line {
            display: none;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .virtual-section-5 {
            min-height: auto;
            clip-path: polygon(0 0, 100% 80px, 100% 100%, 0 100%);
            margin-top: -80px;
            padding-top: 120px;
            padding-bottom: 80px;
          }

          .section5-container {
            min-height: auto;
            gap: 30px;
          }

          .section5-text {
            padding: 20px;
          }

          .section5-text h2 {
            font-size: 2rem;
            margin-bottom: 1.5rem;
          }

          .section5-text p {
            font-size: 1rem;
            line-height: 1.7;
          }

          .section5-videos {
            flex-direction: row;
            gap: 15px;
            overflow-x: auto;
            overflow-y: hidden;
            padding: 20px 15px;
            margin: 0 -20px;
            justify-content: flex-start;
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          .section5-videos::-webkit-scrollbar {
            display: none;
          }

          .video-card {
            flex: 0 0 auto;
            width: 140px;
            scroll-snap-align: start;
          }

          .video-card video {
            border-width: 2px;
            border-radius: 6px;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .virtual-section-5 {
            padding-top: 100px;
            padding-bottom: 60px;
          }

          .section5-text h2 {
            font-size: 1.7rem;
          }

          .section5-text p {
            font-size: 0.95rem;
          }

          .section5-videos {
            gap: 12px;
            padding: 15px 10px;
          }

          .video-card {
            width: 120px;
          }
        }
      `}</style>
    </section>
  );
};

export default Section5;
