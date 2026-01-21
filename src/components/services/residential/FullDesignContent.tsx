'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const FullDesignContent = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="full-design-content">
      {/* Introduction Section */}
      <section
        className="fd-section intro-section"
        ref={(el) => { sectionsRef.current[0] = el; }}
      >
        <div className="container">
          <div className="intro-content">
            <p className="intro-lead">
              Interior design is a delicate translation of life into form, color, and material.
            </p>
            <p className="intro-text">
              It is the connection between vision and reality, between people and the spaces in which they live, create, and breathe.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section
        className="fd-section philosophy-section"
        ref={(el) => { sectionsRef.current[1] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Our Design Philosophy</h2>
          <div className="philosophy-grid">
            <div className="philosophy-text">
              <p>
                At Lev HaAretz Architecture & Interior Design, every process begins with <strong>connection</strong>.
              </p>
              <p>
                A true connection between people and place, between roots and growth, between emotion and material.
              </p>
              <p>
                We listen not only to what a home needs to be — but to <em>who lives within it</em>.
              </p>
            </div>
            <div className="philosophy-highlight">
              <div className="highlight-box">
                <p>
                  We explore the rhythm of daily life: what matters to preserve, what is ready to be released, and how past, present, and future can be woven into a single, harmonious living space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section
        className="fd-section approach-section"
        ref={(el) => { sectionsRef.current[2] = el; }}
      >
        <div className="container">
          <div className="approach-content">
            <div className="approach-text">
              <h2 className="section-title">Our Planning Approach</h2>
              <p className="approach-lead">
                Our planning always begins at the root — with emotion, memory, and essence.
              </p>
              <p>
                From there, creation is born. A design language that feels familiar yet surprising. Intimate, yet open to light, movement, and breath.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section
        className="fd-section challenges-section"
        ref={(el) => { sectionsRef.current[3] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Understanding the Real Challenges</h2>
          <p className="section-intro">
            In my work as an interior designer, I recognize that my clients' main challenges revolve around three central concerns:
          </p>
          <div className="challenges-grid">
            <div className="challenge-card">
              <div className="challenge-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <h3>Complex Process Management</h3>
              <p>Managing a complex renovation or construction process with confidence and clarity.</p>
            </div>
            <div className="challenge-card">
              <div className="challenge-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h3>Budget Excellence</h3>
              <p>Staying within budget while achieving the best possible result without compromise.</p>
            </div>
            <div className="challenge-card">
              <div className="challenge-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3>Timeline Certainty</h3>
              <p>Understanding timelines and minimizing the impact on daily life during the process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section
        className="fd-section expertise-section"
        ref={(el) => { sectionsRef.current[4] = el; }}
      >
        <div className="container">
          <div className="expertise-content">
            <p className="expertise-lead">
              I know how to identify the critical points that make the difference between a well-designed concept and a home that is truly comfortable, functional, and cost-efficient — without losing attention to detail along the way.
            </p>
            <p>
              Through extensive experience across a wide range of design projects, I am able to thoughtfully adapt each space to the character, lifestyle, and values of its owners.
            </p>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section
        className="fd-section clients-section"
        ref={(el) => { sectionsRef.current[5] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Who We Design For</h2>
          <p className="section-intro">
            My clients are people at a meaningful turning point in their lives — facing important decisions about their living environment.
          </p>
          <div className="clients-grid">
            <div className="client-item">
              <div className="client-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <p>Couples who have purchased their dream home</p>
            </div>
            <div className="client-item">
              <div className="client-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <p>Families planning an expansion</p>
            </div>
            <div className="client-item">
              <div className="client-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <p>Individuals who feel it is time to elevate their living space</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dream Section */}
      <section
        className="fd-section dream-section"
        ref={(el) => { sectionsRef.current[6] = el; }}
      >
        <div className="container">
          <div className="dream-content">
            <p className="dream-text">
              Each arrives with a <span className="highlight">dream</span>.
            </p>
            <p className="dream-mission">
              My role is to transform that dream into a tangible, living reality.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section - Full width without diagonal */}
      <section
        className="image-section"
        ref={(el) => { sectionsRef.current[7] = el; }}
      >
        <div className="image-container">
          <Image
            src="/images/Residential Design/add to Full Design.webp"
            alt="Full Design Interior"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="fd-section cta-section"
        ref={(el) => { sectionsRef.current[8] = el; }}
        id="contact"
      >
        <div className="container">
          <h2 className="cta-title">Ready to Transform Your Home?</h2>
          <p className="cta-description">
            Let's create a space that tells your story — a home that truly reflects who you are.
          </p>
          <a href="/#contact-cta" className="cta-button-large">
            <span>Begin Your Design Journey</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default FullDesignContent;
