"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface ServiceItem {
  title: string;
  description: string;
  href: string;
}

interface ServiceSectionProps {
  title: string;
  subtitle: string;
  description: string;
  services: ServiceItem[];
  index: number;
  isSingle?: boolean;
}

const ServiceSection = ({ title, subtitle, description, services, index, isSingle = false }: ServiceSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const isEven = index % 2 === 0;

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

          <div className={`service-cards ${isSingle ? 'single-card' : ''}`}>
            {services.map((service, idx) => (
              <div
                key={idx}
                className="service-card"
                style={{ '--card-index': idx } as React.CSSProperties}
              >
                <div className="service-card-inner">
                  <div className="service-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-description">{service.description}</p>
                  <Link href={service.href} className="service-card-link">
                    <span>Read More</span>
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
                <div className="service-card-shine"></div>
              </div>
            ))}
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
