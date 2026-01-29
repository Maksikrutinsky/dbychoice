'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const RotatingButtons = () => {
  const buttonsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('buttons-visible');
          } else {
            entry.target.classList.remove('buttons-visible');
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
    { id: 1, image: '/images/c1.png', alt: 'Residential Design', href: '/services', section: 'residential' },
    { id: 2, image: '/images/c2.png', alt: 'Commercial Design', href: '/services', section: 'commercial' },
    { id: 3, image: '/images/c3.png', alt: 'Consultation Services', href: '/services', section: 'consulting' },
    { id: 4, image: '/images/c4.png', alt: 'Additional Services', href: '/services', section: 'special' },
  ];

  const handleClick = (href: string, section: string) => {
    router.push(href);
    const scrollToSection = () => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        setTimeout(scrollToSection, 50);
      }
    };
    setTimeout(scrollToSection, 100);
  };

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
              <button
                onClick={() => handleClick(button.href, button.section)}
                className="rotating-button"
              >
                <img src={button.image} alt={button.alt} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RotatingButtons;
