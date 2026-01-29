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

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let dropTimeout: NodeJS.Timeout;
    let firstTransitionTimeout: NodeJS.Timeout;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            dropTimeout = setTimeout(() => {
              setHasDropped(true);
              firstTransitionTimeout = setTimeout(() => {
                setCurrentImageIndex(1);
                interval = setInterval(() => {
                  setCurrentImageIndex((prev) => {
                    const next = prev + 1;
                    return next >= images.length ? 0 : next;
                  });
                }, 1500);
              }, 800);
            }, 1200);
          } else {
            setIsVisible(false);
            setHasDropped(false);
            setCurrentImageIndex(0);
            if (interval) clearInterval(interval);
            if (dropTimeout) clearTimeout(dropTimeout);
            if (firstTransitionTimeout) clearTimeout(firstTransitionTimeout);
          }
        });
      },
      { threshold: 0.2 }
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
      className="virtual-section-3"
    >
      <div className="container section3-container">
        {/* Left Side - Title and Text */}
        <div className={`section3-text ${isVisible ? 'visible' : ''}`}>
          <h2>
            Virtual Experience<br />on Your Phone
          </h2>
          <p>
            Watch your phone transform into a portal for interior design. See designs emerge from the screen into your living room in real-time.
          </p>
          <div className="decorative-line-desktop" />
        </div>

        {/* Mobile Gold Line - Between text and images */}
        <div className="decorative-line-mobile" />

        {/* Right Side - Image Animation */}
        <div className={`section3-images ${isVisible ? 'visible' : ''}`}>
          <div className="images-container">
            {images.map((img, index) => {
              const isActive = currentImageIndex === index;
              const isFirstImage = index === 0;

              return (
                <img
                  key={index}
                  src={img}
                  alt={`Virtual experience step ${index + 1}`}
                  className={`section3-image ${isActive ? 'active' : ''} ${!hasDropped && !isFirstImage ? 'hidden' : ''}`}
                />
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .virtual-section-3 {
          min-height: 85vh;
          position: relative;
          background: #0b162dff;
          clip-path: polygon(0 0, 100% 200px, 100% calc(100% - 200px), 0 100%);
          margin-top: -200px;
          padding-top: 200px;
          padding-bottom: 200px;
          overflow: hidden;
        }

        .section3-container {
          position: relative;
          z-index: 2;
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 80px;
        }

        .section3-text {
          flex: 1;
          max-width: 500px;
          opacity: 0;
          transform: translateX(-30px);
          transition: opacity 1.5s ease-out 0.3s, transform 1.5s ease-out 0.3s;
          position: relative;
          padding-right: 40px;
        }

        .section3-text.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .section3-text h2 {
          font-size: 4rem;
          font-weight: 700;
          font-family: 'Playfair Display', serif;
          color: #f5deb3;
          text-shadow: 0 4px 30px rgba(245, 222, 179, 0.5);
          line-height: 1.2;
          margin-bottom: 3rem;
        }

        .section3-text p {
          font-size: 1.5rem;
          line-height: 1.9;
          color: rgba(255, 255, 255, 0.95);
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .decorative-line-desktop {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, transparent 0%, #d4af37 20%, #f5deb3 50%, #d4af37 80%, transparent 100%);
          transform: translateX(-15%) skewX(10deg);
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.4), 0 0 40px rgba(212, 175, 55, 0.2);
        }

        .decorative-line-mobile {
          display: none;
        }

        .section3-images {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          opacity: 0;
          transform: translateX(100px) scale(0.9);
          transition: opacity 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s, transform 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s;
          margin-right: -100px;
        }

        .section3-images.visible {
          opacity: 1;
          transform: translateX(0) scale(1);
        }

        .images-container {
          position: relative;
          width: 650px;
          height: 750px;
          overflow: hidden;
        }

        .section3-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: 0;
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
        }

        .section3-image.active {
          opacity: 1;
          z-index: 2;
        }

        .section3-image.hidden {
          display: none;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .virtual-section-3 {
            clip-path: polygon(0 0, 100% 120px, 100% calc(100% - 120px), 0 100%);
            margin-top: -120px;
            padding-top: 150px;
            padding-bottom: 150px;
          }

          .section3-container {
            gap: 40px;
          }

          .section3-text h2 {
            font-size: 3rem;
          }

          .section3-text p {
            font-size: 1.2rem;
          }

          .images-container {
            width: 450px;
            height: 550px;
          }

          .section3-images {
            margin-right: -50px;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .virtual-section-3 {
            min-height: auto;
            clip-path: polygon(0 0, 100% 80px, 100% calc(100% - 100px), 0 100%);
            margin-top: -80px;
            padding-top: 90px;
            padding-bottom: 120px;
          }

          .section3-container {
            flex-direction: column;
            gap: 0;
            min-height: auto;
            padding: 0 15px;
          }

          .section3-text {
            max-width: 100%;
            padding-right: 0;
            text-align: center;
            order: 1;
          }

          .section3-text h2 {
            font-size: 1.5rem;
            margin-bottom: 0.6rem;
          }

          .section3-text p {
            font-size: 0.85rem;
            line-height: 1.5;
            margin-bottom: 0;
          }

          .decorative-line-desktop {
            display: none;
          }

          .decorative-line-mobile {
            display: block;
            order: 2;
            width: 80px;
            height: 2px;
            background: linear-gradient(90deg, transparent 0%, #d4af37 20%, #f5deb3 50%, #d4af37 80%, transparent 100%);
            box-shadow: 0 0 15px rgba(212, 175, 55, 0.5);
            margin: 12px auto;
          }

          .section3-images {
            margin-right: 0;
            margin-top: 0;
            justify-content: center;
            order: 3;
            width: 100%;
          }

          .images-container {
            width: 100%;
            max-width: 240px;
            height: 320px;
            margin: 0 auto;
          }

          .section3-image {
            object-fit: contain;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .virtual-section-3 {
            padding-top: 70px;
            padding-bottom: 100px;
          }

          .section3-text h2 {
            font-size: 1.4rem;
          }

          .section3-text p {
            font-size: 0.8rem;
          }

          .decorative-line-mobile {
            width: 60px;
            margin: 10px auto;
          }

          .images-container {
            max-width: 220px;
            height: 290px;
          }
        }
      `}</style>
    </section>
  );
};

export default Section3;
