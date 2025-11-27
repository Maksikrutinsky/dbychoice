"use client";

import { useEffect, useRef, useState, MouseEvent } from 'react';
import Link from 'next/link';
import {
  ReactCompareSlider,
  ReactCompareSliderImage
} from 'react-compare-slider';

interface ServiceItem {
  title: string;
  description: string;
  href: string;
  image1?: string;
  image2?: string;
}

interface ServiceSectionProps {
  title: string;
  subtitle: string;
  description: string;
  services: ServiceItem[];
  index: number;
  isSingle?: boolean;
  isHomeStyling?: boolean;
  isConsulting?: boolean;
  isSpecial?: boolean;
}

const ServiceSection = ({ title, subtitle, description, services, index, isSingle = false, isHomeStyling = false, isConsulting = false, isSpecial = false }: ServiceSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState<{ [key: number]: { x: number; y: number } }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Always update visibility based on intersection
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.15, rootMargin: '-50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  // Check if this is the Commercial Design section (index 1)
  const isCommercial = index === 1;

  // Check if this is the Home Styling section
  const isHomeStyle = isHomeStyling;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, cardIndex: number) => {
    if (!isCommercial && !isHomeStyle) return;

    const cardElement = e.currentTarget;
    const rect = cardElement.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1

    setActiveCardIndex(cardIndex);
    setMousePosition((prev) => ({
      ...prev,
      [cardIndex]: { x, y }
    }));
  };

  const handleMouseLeave = (cardIndex: number) => {
    if (!isCommercial && !isHomeStyle) return;
    setActiveCardIndex(null);
    setMousePosition((prev) => ({
      ...prev,
      [cardIndex]: { x: 0, y: 0 }
    }));
  };

  return (
    <section
      ref={sectionRef}
      className={`service-section ${isVisible ? 'visible' : ''} ${isEven ? 'layout-left' : 'layout-right'}`}
      style={{ '--section-index': index } as React.CSSProperties}
    >
      <div className="service-section-background">
        <div className="section-number">{String(index + 1).padStart(2, '0')}</div>
      </div>

      <div className="container">
        <div className="service-section-content">
          <div className="service-section-header">
            <span className="service-subtitle">{subtitle}</span>
            <h2 className="service-title">{title}</h2>
            <p className="service-description">{description}</p>
          </div>

          <div className={`service-cards ${isSingle ? 'single-card' : ''} ${isCommercial ? 'commercial-cards' : ''} ${isHomeStyle ? 'home-styling-cards' : ''} ${isConsulting ? 'consulting-cards' : ''} ${isSpecial ? 'special-cards' : ''}`}>
            {services.map((service, idx) => {
              const cardMousePos = mousePosition[idx] || { x: 0, y: 0 };

              // Special Services Cards - Dissolve Effect
              if (isSpecial) {
                return (
                  <div
                    key={idx}
                    className="dissolve-card"
                    style={{ '--card-index': idx } as React.CSSProperties}
                  >
                    <div className="dissolve-image-layer">
                      <img
                        src={service.image1 || '/images/service1.webp'}
                        alt={service.title}
                      />
                      <div className="dissolve-title-overlay">
                        <h3 className="dissolve-title">{service.title}</h3>
                      </div>
                    </div>
                    <div className="dissolve-content-layer">
                      <p className="dissolve-description">{service.description}</p>
                      <Link href={service.href} className="dissolve-link">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M5 12h14M12 5l7 7-7 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                );
              }

              // Special Consulting Cards - All with Before/After Slider
              if (isConsulting) {
                return (
                  <div
                    key={idx}
                    className="consulting-slider-card"
                    style={{ '--card-index': idx } as React.CSSProperties}
                  >
                    <h3 className="consulting-card-title">{service.title}</h3>
                    <div className="consulting-slider">
                      <ReactCompareSlider
                        itemOne={<ReactCompareSliderImage src={service.image1 || '/images/service1.webp'} alt="Before" />}
                        itemTwo={<ReactCompareSliderImage src={service.image2 || '/images/service1.webp'} alt="After" />}
                        position={50}
                        style={{
                          width: '100%',
                          height: '100%',
                        }}
                      />
                    </div>
                    <div className="consulting-card-content">
                      <p className="consulting-card-description">{service.description}</p>
                      <Link href={service.href} className="consulting-card-link">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M5 12h14M12 5l7 7-7 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                );
              }

              return isHomeStyle ? (
                <div
                  key={idx}
                  className="home-styling-card"
                  style={{ '--card-index': idx } as React.CSSProperties}
                >
                  <div
                    className="home-styling-image"
                    style={{
                      transform: `
                        translate(${cardMousePos.x * 20}px, ${cardMousePos.y * 20}px)
                        rotateY(${cardMousePos.x * 10}deg)
                        rotateX(${-cardMousePos.y * 10}deg)
                      `,
                      transition: activeCardIndex === idx ? 'none' : 'transform 0.6s ease-out'
                    }}
                    onMouseMove={(e) => handleMouseMove(e, idx)}
                    onMouseLeave={() => handleMouseLeave(idx)}
                  >
                    <img
                      src={service.image1 || '/images/service1.webp'}
                      alt={service.title}
                    />
                  </div>
                  <div className="home-styling-link-wrapper">
                    <Link href={service.href} className="home-styling-link">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M5 12h14M12 5l7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ) : isCommercial ? (
                <div
                  key={idx}
                  className="commercial-card"
                  style={{ '--card-index': idx } as React.CSSProperties}
                  onMouseMove={(e) => handleMouseMove(e, idx)}
                  onMouseLeave={() => handleMouseLeave(idx)}
                >
                  <h3 className="commercial-title">{service.title}</h3>
                  <div
                    className="commercial-image"
                    style={{
                      transform: `
                        translate(${cardMousePos.x * 20}px, ${cardMousePos.y * 20}px)
                        rotateY(${cardMousePos.x * 10}deg)
                        rotateX(${-cardMousePos.y * 10}deg)
                      `,
                      transition: activeCardIndex === idx ? 'none' : 'transform 0.6s ease-out'
                    }}
                  >
                    <img
                      src={service.image1 || '/images/service1.webp'}
                      alt={service.title}
                    />
                  </div>
                  <div className="commercial-content">
                    <p className="commercial-description">{service.description}</p>
                    <Link href={service.href} className="commercial-link">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M5 12h14M12 5l7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ) : (
                <div
                  key={idx}
                  className={`service-card full-design-card`}
                  style={{ '--card-index': idx } as React.CSSProperties}
                >
                  <div className="full-design-content">
                    <h3 className="service-card-title">{service.title}</h3>
                    <p className="service-card-description">{service.description}</p>
                    <Link href={service.href} className="service-card-link">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M5 12h14M12 5l7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div className="full-design-image">
                    <img
                      src={service.image1 || '/images/service1.webp'}
                      alt={service.title}
                      className="image-default"
                    />
                    <img
                      src={service.image2 || '/images/service1.webp'}
                      alt={`${service.title} Hover`}
                      className="image-hover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="section-decoration">
        <div className="decoration-line"></div>
      </div>
    </section>
  );
};

export default ServiceSection;
