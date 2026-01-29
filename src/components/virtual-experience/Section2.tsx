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

  const scrollWithDelay = (targetId: string, isFooter = false, centerView = false) => {
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
          target.scrollIntoView({ behavior: 'smooth', block: centerView ? 'center' : 'start' });
        }
      }
    };

    if (isMobile) {
      setTimeout(performScroll, 600);
    } else {
      performScroll();
    }
  };

  const handleTouchStart = (callback: () => void) => (e: React.TouchEvent) => {
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
    scrollWithDelay('virtual-section-3', false, true);
  };

  const scrollToSection4 = () => {
    scrollWithDelay('virtual-section-4');
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
        <div className="diagonal-sections-wrapper">
          <div className="diagonal-strip iphone-strip bordered-strip" {...handleClickOrTouch(scrollToSection3)}>
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
            </div>
          </div>

          <div className="diagonal-strip vr-strip bordered-strip" {...handleClickOrTouch(scrollToSection4)}>
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
            </div>
          </div>

          <div className="diagonal-strip computer-strip bordered-strip non-clickable">
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
            </div>
          </div>

          <div className="diagonal-strip eyeglasses-strip bordered-strip non-clickable">
            <div className="strip-content">
              <img
                src="/images/eyeglasses.webp"
                alt="Eyeglasses"
                className="strip-image eyeglasses-image"
              />
            </div>
          </div>

          <div className="diagonal-strip ipad-strip bordered-strip" {...handleClickOrTouch(scrollToSection6)}>
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
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .diagonal-sections-wrapper {
          display: flex;
          flex-direction: row;
          gap: 40px;
          justify-content: center;
          align-items: center;
          flex-wrap: nowrap;
          padding: 60px 20px;
          overflow-x: auto;
        }

        .bordered-strip {
          outline: none;
          flex: 0 0 auto;
          width: 200px;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 3px solid #d4af37;
          border-radius: 50%;
          position: relative;
          transition: all 0.4s ease;
          cursor: pointer;
        }

        .bordered-strip .strip-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        .bordered-strip .strip-image,
        .bordered-strip .eyeglasses-image {
          max-width: 170%;
          max-height: 170%;
          width: auto;
          height: auto;
          object-fit: contain;
        }

        .iphone-strip .strip-content,
        .ipad-strip .strip-content,
        .computer-strip .strip-content {
          transform: translateY(-35px);
        }

        .eyeglasses-strip .strip-content {
          transform: translateY(50px);
        }

        .vr-strip .strip-content {
          transform: translate(-75px, -15px);
        }

        .bordered-strip .vr-flip-container {
          width: 100% !important;
          height: 100% !important;
        }

        .vr-flip-front,
        .vr-flip-back {
          width: 220% !important;
          height: 220% !important;
          max-width: 220% !important;
          max-height: 220% !important;
          transform-origin: center !important;
        }

        .bordered-strip:hover {
          transform: translateY(-10px) scale(1.08);
          border-color: #1a1f3a;
          box-shadow: 0 12px 35px rgba(26, 31, 58, 0.3);
        }

        .bordered-strip:focus {
          outline: none;
        }

        .non-clickable {
          cursor: default !important;
        }

        .non-clickable:hover {
          transform: translateY(-8px) scale(1.05);
          border-color: #1a1f3a;
          box-shadow: 0 10px 30px rgba(26, 31, 58, 0.25);
        }

        /* Tablet responsive */
        @media (max-width: 1024px) {
          .diagonal-sections-wrapper {
            gap: 30px;
            padding: 50px 15px;
            flex-wrap: wrap;
          }

          .bordered-strip {
            width: 160px;
            height: 160px;
          }
        }

        /* Mobile responsive - Single column */
        @media (max-width: 768px) {
          .diagonal-sections-wrapper {
            display: flex;
            flex-direction: column;
            gap: 25px;
            padding: 40px 20px;
            overflow-x: visible;
            align-items: center;
          }

          .bordered-strip {
            width: 150px;
            height: 150px;
            border-width: 2px;
          }

          .bordered-strip .strip-image,
          .bordered-strip .eyeglasses-image {
            max-width: 140%;
            max-height: 140%;
          }

          .vr-flip-front,
          .vr-flip-back {
            width: 180% !important;
            height: 180% !important;
            max-width: 180% !important;
            max-height: 180% !important;
          }

          .vr-strip .strip-content {
            transform: translate(-35px, -10px);
          }

          .iphone-strip .strip-content,
          .ipad-strip .strip-content,
          .computer-strip .strip-content {
            transform: translateY(-25px);
          }

          .eyeglasses-strip .strip-content {
            transform: translateY(40px);
          }

          .bordered-strip:hover {
            transform: scale(1.05);
          }
        }

        /* Small mobile */
        @media (max-width: 480px) {
          .diagonal-sections-wrapper {
            gap: 20px;
            padding: 30px 15px;
          }

          .bordered-strip {
            width: 130px;
            height: 130px;
          }

          .bordered-strip .strip-image,
          .bordered-strip .eyeglasses-image {
            max-width: 130%;
            max-height: 130%;
          }

          .vr-flip-front,
          .vr-flip-back {
            width: 160% !important;
            height: 160% !important;
            max-width: 160% !important;
            max-height: 160% !important;
          }

          .vr-strip .strip-content {
            transform: translate(-28px, -8px);
          }

          .iphone-strip .strip-content,
          .ipad-strip .strip-content,
          .computer-strip .strip-content {
            transform: translateY(-20px);
          }

          .eyeglasses-strip .strip-content {
            transform: translateY(32px);
          }
        }
      `}</style>
    </section>
  );
};

export default Section2;
