'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import './EclecticStyles.css';

const buildingSteps = [
  {
    id: 1,
    title: 'Massing',
    image: '/images/Design Styles/eclectic/eclectic_01-massing.webp',
  },
  {
    id: 2,
    title: 'Openings',
    image: '/images/Design Styles/eclectic/eclectic_02-openings.webp',
  },
  {
    id: 3,
    title: 'Materials',
    image: '/images/Design Styles/eclectic/eclectic_03-materials.webp',
  },
  {
    id: 4,
    title: 'Colors',
    image: '/images/Design Styles/eclectic/eclectic_04-colors.webp',
  },
  {
    id: 5,
    title: 'Details',
    image: '/images/Design Styles/eclectic/eclectic_05-details.webp',
  },
  {
    id: 6,
    title: 'Landscape',
    image: '/images/Design Styles/eclectic/eclectic_06-landscape.webp',
  },
  {
    id: 7,
    title: 'Final',
    image: '/images/Design Styles/eclectic/eclectic_07-final.webp',
  },
];

export default function BuildingProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer to detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            setIsPlaying(true);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % buildingSteps.length);
      }, 3000); // Change image every 3 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <section className="building-process" ref={sectionRef}>
      <div className="cinematic-container">
        <div className="cinematic-viewer">
          {buildingSteps.map((step, index) => (
            <div
              key={step.id}
              className={`cinematic-layer ${index === activeStep ? 'active' : ''} ${
                index < activeStep ? 'completed' : ''
              }`}
            >
              <Image
                src={step.image}
                alt={step.title}
                fill
                sizes="100vw"
                priority={index === 0}
                className="cinematic-image"
              />
            </div>
          ))}

          {/* Subtle Step Title */}
          <div className="cinematic-title">
            {buildingSteps[activeStep].title}
          </div>
        </div>
      </div>
    </section>
  );
}
