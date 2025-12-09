'use client';

import { useEffect, useRef, useState } from 'react';

const Section2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
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

  const scrollToSection4 = () => {
    const section4 = document.getElementById('virtual-section-4');
    if (section4) {
      section4.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="virtual-section-2"
      className={`diagonal-section diagonal-section-white ${isVisible ? 'section-visible' : ''}`}
    >
      <div className="diagonal-background"></div>
      <div className="container section-content">
        <div className="vr-technology-section">
          <div className="section-header">
            <h2 className="section-title">Choose Your Technology</h2>
            <p className="section-subtitle">Experience design through innovative technology</p>
          </div>

          <div className="vr-cards-container">
            <div
              className="vr-card"
              onClick={scrollToSection4}
            >
              <div className="vr-card-frame">
                <div className="vr-card-inner">
                  <div className="vr-card-front">
                    <img
                      src="/images/VRfronted.webp"
                      alt="VR Headset Front"
                      className="vr-image"
                    />
                  </div>
                  <div className="vr-card-back">
                    <img
                      src="/images/VRbackend.webp"
                      alt="VR Headset Back"
                      className="vr-image"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="vr-card eyeglasses-card"
              onClick={scrollToSection4}
            >
              <div className="vr-card-frame">
                <div className="eyeglasses-inner">
                  <img
                    src="/images/eyeglasses.webp"
                    alt="Eyeglasses"
                    className="eyeglasses-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
