'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import './GeometricOrigamiStyles.css';

const buildingSteps = [
  {
    id: 1,
    title: 'Basic House',
    image: '/images/Design Styles/geometric origami/geo-origami_01-basic-house.webp',
  },
  {
    id: 2,
    title: 'Broken Geometry',
    image: '/images/Design Styles/geometric origami/geo-origami_02-broken-geometry.webp',
  },
  {
    id: 3,
    title: 'Folded Forms',
    image: '/images/Design Styles/geometric origami/geo-origami_03-folded-forms.webp',
  },
  {
    id: 4,
    title: 'Angular Openings',
    image: '/images/Design Styles/geometric origami/geo-origami_04-angular-openings.webp',
  },
  {
    id: 5,
    title: 'Depth',
    image: '/images/Design Styles/geometric origami/geo-origami_05-depth.webp',
  },
  {
    id: 6,
    title: 'Materials',
    image: '/images/Design Styles/geometric origami/geo-origami_06-materials.webp',
  },
  {
    id: 7,
    title: 'Final',
    image: '/images/Design Styles/geometric origami/geo-origami_07-final.webp',
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
