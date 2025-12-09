'use client';

import { useEffect, useRef, useState } from 'react';

const Section4 = () => {
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

  return (
    <section
      ref={sectionRef}
      id="virtual-section-4"
      className={`diagonal-section diagonal-section-white ${isVisible ? 'section-visible' : ''}`}
    >
      <div className="diagonal-background"></div>
      <div className="container section-content">
        {/* Content will be added later */}
      </div>
    </section>
  );
};

export default Section4;
