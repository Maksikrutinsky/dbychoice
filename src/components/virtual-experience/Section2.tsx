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

  const scrollWithDelay = (targetId: string, isFooter = false) => {
    // Check if mobile device
    const isMobile = window.innerWidth <= 768;

    const performScroll = () => {
      if (isFooter) {
        const footer = document.querySelector('footer');
        if (footer) {
          footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    // On mobile, delay scroll to show effect first
    if (isMobile) {
      setTimeout(performScroll, 600); // 600ms delay to see the effect
    } else {
      performScroll();
    }
  };

  const handleTouchStart = (callback: () => void) => (e: React.TouchEvent) => {
    // Prevent double-triggering on touch devices
    e.preventDefault();
    callback();
  };

  const handleClickOrTouch = (callback: () => void) => {
    return {
      onClick: callback,
      onTouchStart: handleTouchStart(callback),
    };
  };

  const scrollToSection3 = () => {
    scrollWithDelay('virtual-section-3');
  };

  const scrollToSection4 = () => {
    scrollWithDelay('virtual-section-4');
  };

  const scrollToSection5 = () => {
    scrollWithDelay('virtual-section-5');
  };

  const scrollToSection6 = () => {
    scrollWithDelay('', true);
  };

  return (
    <section
      ref={sectionRef}
      id="virtual-section-2"
      className={`diagonal-section diagonal-section-white ${isVisible ? 'section-visible' : ''}`}
    >
      <div className="diagonal-background"></div>
      <div className="section-content">
        <h2 className="technology-main-title">Choose Your Technology</h2>
        <div className="diagonal-sections-wrapper">
        <div className="diagonal-strip iphone-strip" {...handleClickOrTouch(scrollToSection3)}>
          <div className="strip-content">
            <img
              src="/images/iphone_1.webp"
              alt="iPhone Off"
              className="strip-image strip-image-off iphone-off"
            />
            <img
              src="/images/iphone_2.webp"
              alt="iPhone On"
              className="strip-image strip-image-on iphone-on"
            />
            <span className="strip-label">IPHONE</span>
          </div>
        </div>

        <div className="diagonal-strip vr-strip" {...handleClickOrTouch(scrollToSection4)}>
          <div className="strip-content">
            <div className="vr-flip-container">
              <div className="vr-flip-inner">
                <img
                  src="/images/VRfronted.webp"
                  alt="VR Headset Front"
                  className="vr-flip-front"
                />
                <img
                  src="/images/VRbackend.webp"
                  alt="VR Headset Back"
                  className="vr-flip-back"
                />
              </div>
            </div>
            <span className="strip-label">VR HEADSET</span>
          </div>
        </div>

        <div className="diagonal-strip computer-strip" {...handleClickOrTouch(scrollToSection5)}>
          <div className="strip-content">
            <img
              src="/images/computer1.webp"
              alt="Computer with Sketch"
              className="strip-image strip-image-off computer-off"
            />
            <img
              src="/images/computer2.webp"
              alt="Computer with Home"
              className="strip-image strip-image-on computer-on"
            />
            <span className="strip-label">COMPUTER</span>
          </div>
        </div>

        <div className="diagonal-strip eyeglasses-strip">
          <div className="strip-content">
            <img
              src="/images/eyeglasses.webp"
              alt="Eyeglasses"
              className="strip-image eyeglasses-image"
            />
            <span className="strip-label">EYEGLASSES</span>
          </div>
        </div>

        <div className="diagonal-strip ipad-strip" {...handleClickOrTouch(scrollToSection6)}>
          <div className="strip-content">
            <img
              src="/images/ipad_1.webp"
              alt="iPad Off"
              className="strip-image strip-image-off"
            />
            <img
              src="/images/ipad_2.webp"
              alt="iPad On"
              className="strip-image strip-image-on"
            />
            <span className="strip-label">IPAD</span>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
