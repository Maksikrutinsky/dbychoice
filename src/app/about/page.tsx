'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutTech from '@/components/about/AboutTech';
import DesignProcess from '@/components/about/DesignProcess';
import ParallaxAbout from '@/components/ParallaxAbout';
import './about.css';
import './about-tech.css';
import './design-process.css';

const coreValues = [
  {
    id: 'transparency',
    title: 'Full Transparency',
    description: 'Every step is supported by clear explanations, accurate timelines, and honest expectations. With us, there are no surprises – only an open, trustworthy, and connected process.',
    image: '/images/brand-values/full-transparency.webp',
  },
  {
    id: 'respect',
    title: 'Mutual Respect',
    description: 'We view every client as a true partner. Listening, understanding personal needs, culture, lifestyle, and memories forms the foundation of a design that honors who you are.',
    image: '/images/brand-values/mutual-respect.webp',
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    description: 'You are an essential part of the creative journey. The process is built on continuous dialogue, leaving space for your ideas, feelings, and dreams.',
    image: '/images/brand-values/collaboration.webp',
  },
  {
    id: 'identity',
    title: 'Designed Identity',
    description: 'Every design tells your unique story. We create spaces that reflect your personality, values, and the life you want to live.',
    image: '/images/brand-values/designed-identity.webp',
  },
  {
    id: 'options',
    title: 'Design Options',
    description: 'We believe in empowering you with choices. Multiple design directions, materials, and solutions – so you can choose what resonates most.',
    image: '/images/brand-values/design-options.webp',
  },
  {
    id: 'aesthetics',
    title: 'Design Aesthetics',
    description: 'Beauty matters. We invest in every detail – from materials to finishing, from concept to lighting – maintaining refined aesthetics at all times.',
    image: '/images/brand-values/design-aesthetics.webp',
  },
];

const AboutPage = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('section-visible');
        });
      },
      { threshold: 0.08 }
    );
    sectionsRef.current.forEach((s) => { if (s) observer.observe(s); });
    return () => sectionsRef.current.forEach((s) => { if (s) observer.unobserve(s); });
  }, []);

  return (
    <>
      <ParallaxAbout />
      <Header />
      <main className="about-page">

        {/* Hero */}
        <section className="about-hero section-visible">
          <div className="container about-hero-content">
            <div className="hero-decorative-line top" />
            <h1 className="about-title">
              <span className="title-line title-line-1">About</span>
              <span className="title-line title-line-2 accent">Design By Choice</span>
            </h1>
            <div className="hero-divider">
              <span className="divider-line" />
              <span className="divider-diamond" />
              <span className="divider-line" />
            </div>
            <p className="about-subtitle">
              Where soul meets space – design with depth, intention, and elegance
            </p>
            <div className="hero-decorative-line bottom" />
          </div>
        </section>

        {/* Section 1 — About Arianna + video */}
        <section
          className="about-section arianna-section"
          ref={(el) => { sectionsRef.current[0] = el; }}
        >
          <div className="container">
            <div className="arianna-header">
              <span className="section-label light">The Designer</span>
              <h2 className="section-title arianna-title">About Me – Arianna Avidor</h2>
              <div className="title-underline gold" />
            </div>

            {/* Video + intro */}
            <div className="arianna-intro">
              <div className="arianna-image-wrapper arianna-image-1">
                <video
                  autoPlay loop muted playsInline
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                >
                  <source src="/videos/process.mp4" type="video/mp4" />
                </video>
                <div className="image-frame" />
              </div>
              <div className="arianna-story">
                <p className="story-highlight">
                  Design has been my language since childhood — a way of seeing the world differently when everything around me was purely functional.
                </p>
                <p>
                  It began with fashion — styling, custom gowns, and understanding how clothing expresses identity. Over time, that same eye for detail moved into interiors, product design, and experiential spaces.
                </p>
                <p>
                  Years of global travel — across Asia, Europe, the Middle East, and the Americas — opened me to cultures, materials, and textures that became permanent tools in my creative process.
                </p>
              </div>
            </div>

            {/* Philosophy */}
            <div className="arianna-philosophy arianna-philosophy-solo">
              <div className="philosophy-text">
                <div className="philosophy-quote">
                  <h3 className="philosophy-heading">I create worlds</h3>
                  <p className="philosophy-tagline-text">Worlds of feeling, emotion, aesthetics — and life.</p>
                </div>
                <p>
                  I believe a space is not measured by walls alone, but by the feeling it leaves behind. Every design I create engages all five senses — crafting a complete, immersive experience that is entirely yours.
                </p>
              </div>
            </div>

            {/* What sets me apart */}
            <div className="arianna-difference">
              <div className="difference-header">
                <h3>What sets me apart</h3>
              </div>
              <div className="difference-content">
                <p className="difference-lead">I am not just a designer. I tell a story.</p>
                <div className="difference-items">
                  <div className="difference-item">
                    <span className="diff-number">01</span>
                    <p>I see my clients as whole people — with style, history, vision, and personal taste.</p>
                  </div>
                  <div className="difference-item">
                    <span className="diff-number">02</span>
                    <p>I connect worlds — fashion and interiors, art and material, journey and home.</p>
                  </div>
                  <div className="difference-item">
                    <span className="diff-number">03</span>
                    <p>I don't just plan a space — I design an experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — About the Studio + Technologies */}
        <section
          className="about-section studio-section"
          ref={(el) => { sectionsRef.current[1] = el; }}
        >
          <div className="studio-bg-element" />
          <div className="container">
            <div className="studio-header">
              <span className="section-label">Our Story</span>
              <h2 className="section-title">About the Studio</h2>
              <div className="title-underline" />
            </div>
            <div className="studio-content-wrapper">
              <div className="studio-main-text">
                <p className="lead-text">
                  Our studio is a home for multidisciplinary design, built on the belief that design is more than aesthetics — it is a language of identity, values, and lifestyle.
                </p>
              </div>
              <div className="studio-columns">
                <div className="studio-column">
                  <p>
                    Through a unique blend of interior design, fashion styling, personal styling, product development, and event design, we create spaces and experiences that feel as good as they look.
                  </p>
                </div>
                <div className="studio-column">
                  <p>
                    Whether it's a private desert home in the heart of Arizona or a commercial space crafted around a precise concept — every project receives personal attention, thoughtful planning, and meticulous focus on even the smallest details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — Technologies */}
        <AboutTech />

        {/* Section 4 — Core Values */}
        <section
          className="about-section values-section"
          ref={(el) => { sectionsRef.current[2] = el; }}
        >
          <div className="container">
            <div className="studio-header">
              <span className="section-label">What We Stand For</span>
              <h2 className="section-title">Core Values</h2>
              <div className="title-underline" />
            </div>
            <div className="values-grid-new">
              {coreValues.map((value) => (
                <div key={value.id} className="value-card">
                  <div className="value-card-inner">
                    <div className="value-card-front">
                      <Image
                        src={value.image}
                        alt={value.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                      <div className="value-card-overlay" />
                      <h3 className="value-card-title">{value.title}</h3>
                    </div>
                    <div className="value-card-back">
                      <div
                        className="value-card-back-bg"
                        style={{ backgroundImage: `url(${value.image})` }}
                      />
                      <div className="value-card-back-overlay" />
                      <h3>{value.title}</h3>
                      <p>{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 — Design Process */}
        <DesignProcess />

        {/* CTA */}
        <section
          className="about-section cta-section"
          ref={(el) => { sectionsRef.current[3] = el; }}
        >
          <div className="cta-bg-pattern" />
          <div className="container">
            <h2 className="cta-title">Ready to Begin Your Journey?</h2>
            <p className="cta-description">
              Let's create a space that tells your story.<br />
              A space that feels like home.
            </p>
            <a href="/#contact-cta" className="cta-button-large">
              <span>Let's Create Together</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
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
