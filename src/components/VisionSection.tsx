'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const VisionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const features = [
    {
      number: "01",
      title: "Live Streaming",
      description: "Watch your design unfold in real-time from anywhere in the world"
    },
    {
      number: "02",
      title: "Mixed Reality",
      description: "Blend virtual designs with physical reality seamlessly"
    },
    {
      number: "03",
      title: "Real-Time Updates",
      description: "See every change instantly as decisions are made"
    },
    {
      number: "04",
      title: "Ultra-Realistic",
      description: "Visualizations so precise, they're indistinguishable from reality"
    }
  ];

  return (
    <section id="vision" ref={sectionRef} className="vision-pro-section">
      <div className="container vision-pro-container">
        {/* Header */}
        <motion.div
          className="vision-pro-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="vision-pro-label">THE FUTURE OF DESIGN</span>
          <h2 className="vision-pro-title">
            Welcome to the New Era <br />
            <span className="highlight">of Interior Design</span>
          </h2>
          <p className="vision-pro-subtitle">
            Smart Design. Ultra-Real Experience. Total Transparency.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="vision-pro-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="vision-pro-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ y: -8 }}
            >
              <div className="card-number">{feature.number}</div>
              <h3 className="card-title">{feature.title}</h3>
              <p className="card-description">{feature.description}</p>
              <div className="card-line"></div>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <motion.div
          className="vision-pro-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="content-main">
            Experience interactive, live, and breathing design through advanced{' '}
            <span className="text-accent">Mixed Reality</span> technologies. 
            We blend your dream with on-site reality—<span className="text-accent">in real-time</span>.
          </p>
          <p className="content-secondary">
            From screen visualization to the construction site, everything is connected, 
            updated, and looks exactly as it will be in reality. It's so precise, 
            you can't tell where the blueprint ends and your home begins.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="vision-pro-cta"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a href="#tech" className="cta-pro-button">
            Explore Technology
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>

        {/* Decorative Separator */}
        <div className="vision-separator">
          <div className="separator-line"></div>
          <div className="separator-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" stroke="#DAA520" strokeWidth="2" opacity="0.5"/>
              <circle cx="20" cy="20" r="12" stroke="#DAA520" strokeWidth="2"/>
              <circle cx="20" cy="20" r="4" fill="#DAA520"/>
            </svg>
          </div>
          <div className="separator-line"></div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
