'use client';

import { useEffect, useRef, useState } from 'react';

const Section4 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (videoRef.current) {
              videoRef.current.currentTime = 0;
              videoRef.current.play();
            }
          } else {
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
      className="virtual-section-4"
    >
      <div className="container section4-container">
        {/* Left Side - Video */}
        <div className={`section4-video ${isVisible ? 'visible' : ''}`}>
          <div className="video-wrapper">
            <video
              ref={videoRef}
              src="/videos/video1.mp4"
              loop
              muted
              playsInline
            />
          </div>
          <div className="decorative-line" />
        </div>

        {/* Right Side - Title and Text */}
        <div className="section4-text">
          <h2 className={isVisible ? 'visible' : ''}>
            VR Headset Experience
          </h2>
          <p className={isVisible ? 'visible' : ''}>
            Immerse yourself in a virtual world of interior design. Experience your spaces in full 3D with cutting-edge VR technology.
          </p>
        </div>
      </div>

      <style jsx>{`
        .virtual-section-4 {
          min-height: 85vh;
          position: relative;
          background: linear-gradient(135deg, #f5ead5 0%, #e8d4b8 100%);
          clip-path: polygon(0 0, 100% 200px, 100% calc(100% - 200px), 0 100%);
          margin-top: -200px;
          padding-top: 200px;
          padding-bottom: 200px;
          overflow: hidden;
        }

        .section4-container {
          position: relative;
          z-index: 2;
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 80px;
        }

        .section4-video {
          flex: 1.2;
          display: flex;
          justify-content: flex-start;
          align-items: stretch;
          opacity: 0;
          transform: translateX(-100px) scale(0.9);
          transition: opacity 1.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s, transform 1.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s;
          position: relative;
          min-height: 70vh;
        }

        .section4-video.visible {
          opacity: 1;
          transform: translateX(0) scale(1);
        }

        .video-wrapper {
          position: relative;
          clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
          overflow: hidden;
          width: 100%;
          height: 100%;
        }

        .video-wrapper video {
          width: 100%;
          height: 100%;
          min-height: 70vh;
          object-fit: cover;
          display: block;
        }

        .decorative-line {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, transparent 0%, #d4af37 20%, #f5deb3 50%, #d4af37 80%, transparent 100%);
          transform: translateX(15%) skewX(-10deg);
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.4), 0 0 40px rgba(212, 175, 55, 0.2);
        }

        .section4-text {
          flex: 1;
          max-width: 500px;
          padding-left: 40px;
        }

        .section4-text h2 {
          font-size: 4rem;
          font-weight: 700;
          font-family: 'Playfair Display', serif;
          color: #0b162d;
          text-shadow: 0 2px 10px rgba(11, 22, 45, 0.1);
          line-height: 1.2;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(-40px) scale(0.95);
          transition: opacity 1.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s, transform 1.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s;
        }

        .section4-text h2.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .section4-text p {
          font-size: 1.5rem;
          line-height: 1.9;
          color: #2c3e50;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1.6s ease-out 0.7s, transform 1.6s ease-out 0.7s;
        }

        .section4-text p.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .virtual-section-4 {
            clip-path: polygon(0 0, 100% 120px, 100% calc(100% - 120px), 0 100%);
            margin-top: -120px;
            padding-top: 150px;
            padding-bottom: 150px;
          }

          .section4-container {
            gap: 40px;
          }

          .section4-text h2 {
            font-size: 3rem;
          }

          .section4-text p {
            font-size: 1.2rem;
          }

          .section4-video {
            min-height: 50vh;
          }

          .video-wrapper video {
            min-height: 50vh;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .virtual-section-4 {
            min-height: auto;
            clip-path: polygon(0 0, 100% 100px, 100% calc(100% - 50px), 0 100%);
            margin-top: -120px;
            padding-top: 130px;
            padding-bottom: 70px;
            background: #0b162d;
          }

          .section4-container {
            flex-direction: column;
            gap: 15px;
            min-height: auto;
            padding: 0 15px;
          }

          .section4-text {
            max-width: 100%;
            padding-left: 0;
            text-align: center;
            order: 1;
          }

          .section4-text h2 {
            font-size: 1.6rem;
            margin-bottom: 0.8rem;
            color: #f5deb3;
          }

          .section4-text p {
            font-size: 0.9rem;
            line-height: 1.5;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 0;
          }

          .section4-video {
            min-height: auto;
            width: 100%;
            order: 2;
          }

          .video-wrapper {
            clip-path: none;
            border-radius: 8px;
            overflow: hidden;
          }

          .video-wrapper video {
            min-height: auto;
            height: auto;
            max-height: 170px;
            border-radius: 8px;
            aspect-ratio: 16/9;
            object-fit: cover;
          }

          .decorative-line {
            display: none;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .virtual-section-4 {
            padding-top: 110px;
            padding-bottom: 50px;
          }

          .section4-text h2 {
            font-size: 1.5rem;
          }

          .section4-text p {
            font-size: 0.85rem;
          }

          .video-wrapper video {
            max-height: 150px;
          }

          .section4-text p {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Section4;
