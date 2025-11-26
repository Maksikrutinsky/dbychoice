'use client';

import { useEffect, useRef } from 'react';

const RotatingButtons = () => {
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('buttons-visible');
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (buttonsRef.current) {
      observer.observe(buttonsRef.current);
    }

    return () => {
      if (buttonsRef.current) {
        observer.unobserve(buttonsRef.current);
      }
    };
  }, []);

  const buttons = [
    { id: 1, image: '/images/c1.png', alt: 'Button 1' },
    { id: 2, image: '/images/c2.png', alt: 'Button 2' },
    { id: 3, image: '/images/c3.png', alt: 'Button 3' },
    { id: 4, image: '/images/c4.png', alt: 'Button 4' },
  ];

  return (
    <section className="rotating-buttons-section section">
      <div className="container">
        <div className="rotating-buttons-grid" ref={buttonsRef}>
          {buttons.map((button, index) => (
            <div
              key={button.id}
              className="rotating-button-wrapper"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="rotating-button">
                <img src={button.image} alt={button.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RotatingButtons;
