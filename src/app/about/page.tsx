'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './about.css';

const AboutPage = () => {
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
        threshold: 0.2,
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
    <>
      <Header />
      <main className="about-page">
        {/* Hero Section */}
        <section className="about-hero section-visible">
          <div className="hero-overlay"></div>
          <div className="container about-hero-content">
            <div className="hero-icon">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <h1 className="about-title">
              <span>About</span>
              <span className="accent">Design By Choice</span>
            </h1>
            <p className="about-subtitle">
              Where soul meets space – design with depth, intention, and elegance
            </p>
          </div>
        </section>

        {/* Section 1: Studio Overview with Logo */}
        <section
          className="about-section studio-section"
          ref={(el) => { sectionsRef.current[0] = el; }}
        >
          <div className="container">
            <div className="studio-header">
              <Image
                src="/images/DESIGNBYCHOICE.png"
                alt="Design By Choice Logo"
                width={300}
                height={110}
                className="about-logo"
              />
            </div>
            <h2 className="section-title">About the Studio</h2>
            <p className="section-description">
              Our studio is a home for multidisciplinary design, built on the belief that design is more than aesthetics – it is a language of identity, values, and lifestyle.
            </p>
            <div className="studio-content">
              <p>
                Through a unique blend of interior design, fashion styling, personal styling, product development, and event design, we create spaces and experiences that feel as good as they look.
              </p>
              <p>
                Whether it's a private desert home in the heart of Arizona or a commercial space crafted around a precise concept – every project receives personal attention, thoughtful planning, and meticulous focus on even the smallest details.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Values */}
        <section
          className="about-section values-section"
          ref={(el) => { sectionsRef.current[1] = el; }}
        >
          <div className="container">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-description">
              The studio operates based on a clear set of values that guide us from the very first meeting until the moment your space becomes a reality
            </p>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <h3>Mutual Respect</h3>
                <p>We view every client as a true partner. Listening, understanding personal needs, culture, lifestyle, and memories forms the foundation of a design that honors who you are.</p>
              </div>

              <div className="value-item">
                <div className="value-icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4M12 8h.01"/>
                  </svg>
                </div>
                <h3>Full Transparency</h3>
                <p>Every step is supported by clear explanations, accurate timelines, and honest expectations. With us, there are no surprises – only an open, trustworthy, and connected process.</p>
              </div>

              <div className="value-item">
                <div className="value-icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </div>
                <h3>Uncompromising Professionalism</h3>
                <p>Our standards are high. We invest in every detail – from materials to finishing, from concept to lighting – maintaining top-level design, technical accuracy, and refined aesthetics at all times.</p>
              </div>

              <div className="value-item">
                <div className="value-icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3>Collaborative Creation</h3>
                <p>You are an essential part of the creative journey. The process is built on continuous dialogue, leaving space for your ideas, feelings, and dreams – to ensure the final design truly feels like you.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Personal Story with Photo */}
        <section
          className="about-section personal-section"
          ref={(el) => { sectionsRef.current[2] = el; }}
        >
          <div className="container">
            <h2 className="section-title">Meet Arianna</h2>
            <div className="personal-wrapper">
              <div className="personal-image">
                <Image
                  src="/images/dogman2.png"
                  alt="Arianna Avidor - Interior Designer"
                  width={400}
                  height={600}
                  className="designer-photo"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
              <div className="personal-story">
                <p className="story-highlight">
                  I was born and raised in a reality that was far from simple—one where design wasn't part of the daily conversation, nor something that sparked much interest.
                </p>
                <p>
                  But within me, something else was burning. By the time I was six, I understood that within this simplicity, design was my way of seeing the world differently.
                </p>
                <p>
                  It all began with clothing—what I chose to wear, and how each piece expressed something about me. Design became a form of personal expression. That's how I found myself studying and working in fashion design and styling from a young age, creating custom bridal gowns and offering precise, authentic styling for women seeking truth, not trends.
                </p>
                <p>
                  Over the years, I expanded my knowledge into product design, event design, commercial space design, and concept development for boutiques, offices, and private homes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Journey & Experience */}
        <section
          className="about-section journey-section"
          ref={(el) => { sectionsRef.current[3] = el; }}
        >
          <div className="container">
            <h2 className="section-title">A Global Journey</h2>
            <p className="section-description">
              My life journey opened my eyes to cultural worlds, colors, materials, and textures that became tools in my creative process
            </p>
            <div className="journey-grid">
              <div className="journey-item">
                <span className="journey-icon">🇮🇹</span>
                <h3>Italy</h3>
                <p>Refinement</p>
              </div>
              <div className="journey-item">
                <span className="journey-icon">🇹🇷</span>
                <h3>Turkey & Africa</h3>
                <p>Layers and richness</p>
              </div>
              <div className="journey-item">
                <span className="journey-icon">🇺🇸</span>
                <h3>United States</h3>
                <p>Innovation</p>
              </div>
              <div className="journey-item">
                <span className="journey-icon">🇮🇱</span>
                <h3>Israel</h3>
                <p>Warmth and authenticity</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Philosophy */}
        <section
          className="about-section philosophy-section"
          ref={(el) => { sectionsRef.current[4] = el; }}
        >
          <div className="container">
            <h2 className="section-title philosophy-title">I create worlds</h2>
            <p className="philosophy-tagline">
              Worlds of feeling, emotion, aesthetics, and life
            </p>
            <div className="philosophy-content">
              <p className="philosophy-intro">
                My name is <strong>Arianna Avidor</strong>. I am an interior designer, stylist, creator of experiences—and a woman who lives design.
              </p>
              <p>
                I believe a space is not defined by its walls, but by the feeling it leaves behind. This is why every design I create is shaped through the five senses—what you see, smell, hear, touch, and even taste—so the result becomes a full, immersive, unforgettable experience.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: What Makes Us Different */}
        <section
          className="about-section different-section"
          ref={(el) => { sectionsRef.current[5] = el; }}
        >
          <div className="container">
            <h2 className="section-title">What Makes My Work Different</h2>
            <div className="different-list">
              <div className="different-item">
                <div className="different-icon">◆</div>
                <p>I am not just a designer — I am a storyteller</p>
              </div>
              <div className="different-item">
                <div className="different-icon">◆</div>
                <p>I see each client as a whole person, with their own style, history, vision, and personal taste</p>
              </div>
              <div className="different-item">
                <div className="different-icon">◆</div>
                <p>I weave together worlds — fashion and interiors, art and materials, journeys and home</p>
              </div>
              <div className="different-item">
                <div className="different-icon">◆</div>
                <p>I don't just shape a space — I craft an experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: CTA */}
        <section
          className="about-section cta-section"
          ref={(el) => { sectionsRef.current[6] = el; }}
        >
          <div className="container">
            <h2 className="cta-title">Who Do I Create For?</h2>
            <p className="cta-description">
              For those seeking more than design.<br />
              For those who want to feel their home.
            </p>
            <a href="/#contact-cta" className="cta-button-large">
              <span>Let's Create Together</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
