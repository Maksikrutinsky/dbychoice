'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './about.css';

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
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      {
        threshold: 0.1,
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
        {/* Hero Section - Impressive */}
        <section className="about-hero section-visible">
          <div className="hero-bg-pattern"></div>
          <div className="hero-floating-shapes">
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>
            <div className="floating-shape shape-4"></div>
          </div>
          <div className="hero-particles">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="particle" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}></div>
            ))}
          </div>
          <div className="hero-gradient-overlay"></div>
          <div className="hero-glow"></div>
          <div className="container about-hero-content">
            <div className="hero-decorative-line top"></div>
            <h1 className="about-title">
              <span className="title-line title-line-1">About</span>
              <span className="title-line title-line-2 accent">Design By Choice</span>
            </h1>
            <div className="hero-divider">
              <span className="divider-line"></span>
              <span className="divider-diamond"></span>
              <span className="divider-line"></span>
            </div>
            <p className="about-subtitle">
              Where soul meets space – design with depth, intention, and elegance
            </p>
            <div className="hero-decorative-line bottom"></div>
          </div>
        </section>

        {/* Section 1: About the Studio */}
        <section
          className="about-section studio-section"
          ref={(el) => { sectionsRef.current[0] = el; }}
        >
          <div className="studio-bg-element"></div>
          <div className="container">
            <div className="studio-header">
              <span className="section-label">Our Story</span>
              <h2 className="section-title">About the Studio</h2>
              <div className="title-underline"></div>
            </div>
            <div className="studio-content-wrapper">
              <div className="studio-main-text">
                <p className="lead-text">
                  Our studio is a home for multidisciplinary design, built on the belief that design is more than aesthetics – it is a language of identity, values, and lifestyle.
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
                    Whether it's a private desert home in the heart of Arizona or a commercial space crafted around a precise concept – every project receives personal attention, thoughtful planning, and meticulous focus on even the smallest details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Video GIF 1 - Full Height */}
        <section
          className="about-section video-section video-section-1"
          ref={(el) => { sectionsRef.current[1] = el; }}
        >
          <div className="video-container">
            <Image
              src="/images/about-video1.gif"
              alt="Design By Choice Studio"
              fill
              style={{ objectFit: 'cover' }}
              unoptimized
            />
            <div className="video-overlay"></div>
          </div>
        </section>

        {/* Section 3: Core Values - 6 Hover Flip Cards */}
        <section
          className="about-section values-section"
          ref={(el) => { sectionsRef.current[2] = el; }}
        >
          <div className="container">
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
                      <div className="value-card-overlay"></div>
                      <h3 className="value-card-title">{value.title}</h3>
                    </div>
                    <div className="value-card-back">
                      <h3>{value.title}</h3>
                      <p>{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Video GIF 2 - Full Height */}
        <section
          className="about-section video-section video-section-2"
          ref={(el) => { sectionsRef.current[3] = el; }}
        >
          <div className="video-container">
            <Image
              src="/images/about-video2.gif"
              alt="Design Process"
              fill
              style={{ objectFit: 'cover' }}
              unoptimized
            />
            <div className="video-overlay"></div>
          </div>
        </section>

        {/* Section 5: About Me - Arianna Avidor */}
        <section
          className="about-section arianna-section"
          ref={(el) => { sectionsRef.current[4] = el; }}
        >
          <div className="arianna-bg-elements">
            <div className="bg-circle bg-circle-1"></div>
            <div className="bg-circle bg-circle-2"></div>
            <div className="bg-circle bg-circle-3"></div>
          </div>
          <div className="arianna-floating-elements">
            <div className="arianna-float-shape arianna-float-1"></div>
            <div className="arianna-float-shape arianna-float-2"></div>
            <div className="arianna-float-shape arianna-float-3"></div>
            <div className="arianna-float-shape arianna-float-4"></div>
          </div>
          <div className="arianna-sparkles">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="sparkle" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}></div>
            ))}
          </div>
          <div className="container">
            <div className="arianna-header">
              <span className="section-label light">The Designer</span>
              <h2 className="section-title arianna-title">About Me – Arianna Avidor</h2>
              <div className="title-underline gold"></div>
            </div>

            <div className="arianna-intro">
              <div className="arianna-image-wrapper arianna-image-1">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                >
                  <source src="/videos/process.mp4" type="video/mp4" />
                </video>
                <div className="image-frame"></div>
              </div>
              <div className="arianna-story">
                <p className="story-highlight">
                  I was born and raised in a challenging environment—one where design was not part of daily conversation and rarely sparked interest.
                </p>
                <p>
                  Life revolved around daily survival—a tough, pragmatic reality. Yet, something inside me was different. By the age of six, I realized that even within this simplicity, design was my way of seeing the world differently.
                </p>
                <p>
                  It all started with clothing—what I chose to wear, and how each piece expressed who I am. Design became my personal language of self-expression. From a young age, I immersed myself in fashion design and styling, creating custom wedding gowns and precise styling for women seeking authenticity, not trends.
                </p>
              </div>
            </div>

            <div className="arianna-journey">
              <div className="journey-content">
                <p>
                  Over the years, I expanded my expertise into product design, event design, commercial spaces, and developing concepts for stores, offices, and private homes. I worked as a broker, managed a real estate office, and led service operations in large companies—but I always returned to design.
                </p>
                <p>
                  My journey through the world—from Thailand, Greece, Turkey, Switzerland, France, England, Spain, Africa, Italy, Jamaica, Israel, and the U.S.—opened me to cultures, colors, materials, and textures that became tools in my creative process. Every place I visited sparked new inspiration: in Italy, I learned refinement; in Turkey and Africa, layering; in the U.S., innovation; and in Israel, human warmth and authentic connection.
                </p>
              </div>
            </div>

            <div className="arianna-philosophy">
              <div className="philosophy-text">
                <div className="philosophy-quote">
                  <h3 className="philosophy-heading">I create worlds</h3>
                  <p className="philosophy-tagline-text">Worlds of feeling, emotion, aesthetics—and life.</p>
                </div>
                <p>
                  I am Arianna Avidor—an interior designer, stylist, and experience artist—a woman who lives design.
                </p>
                <p>
                  I believe a space is not measured by walls alone, but by the feeling it leaves behind. That's why every design I create engages all five senses—what you see, smell, hear, touch, and taste—to craft a complete, immersive, and unforgettable experience.
                </p>
              </div>
              <div className="arianna-image-wrapper arianna-image-2">
                <Image
                  src="/images/arianna2.jpeg"
                  alt="Arianna Avidor Design"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
                <div className="image-frame"></div>
              </div>
            </div>

            <div className="arianna-values-list">
              <h3>My philosophy is guided by clear values:</h3>
              <div className="values-items">
                <div className="value-item-new">
                  <span className="value-marker"></span>
                  <div>
                    <strong>Mutual Transparency</strong>
                    <span>trust, active listening, and honesty throughout the process.</span>
                  </div>
                </div>
                <div className="value-item-new">
                  <span className="value-marker"></span>
                  <div>
                    <strong>Mutual Respect</strong>
                    <span>because design is first and foremost a relationship between people.</span>
                  </div>
                </div>
                <div className="value-item-new">
                  <span className="value-marker"></span>
                  <div>
                    <strong>Uniqueness in Every Choice</strong>
                    <span>every home, client, and story is one of a kind.</span>
                  </div>
                </div>
                <div className="value-item-new">
                  <span className="value-marker"></span>
                  <div>
                    <strong>Design Through Listening</strong>
                    <span>to dreams, needs, and life itself.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="arianna-difference">
              <div className="difference-header">
                <h3>What sets me apart</h3>
              </div>
              <div className="difference-content">
                <p className="difference-lead">I am not just a designer. I tell a story.</p>
                <div className="difference-items">
                  <div className="difference-item">
                    <span className="diff-number">01</span>
                    <p>I see my clients as whole people—with style, history, vision, and personal taste.</p>
                  </div>
                  <div className="difference-item">
                    <span className="diff-number">02</span>
                    <p>I connect worlds—fashion and interiors, art and material, journey and home.</p>
                  </div>
                  <div className="difference-item">
                    <span className="diff-number">03</span>
                    <p>I don't just plan a space—I design an experience.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="arianna-for-you">
              <div className="for-you-content">
                <h3>Who I create for</h3>
                <p className="for-you-tagline">For those seeking more than design—for those who want to feel their home</p>
                <p className="for-you-intro">I'm here for you if:</p>
                <div className="for-you-items">
                  <div className="for-you-item">
                    <span className="check-mark"></span>
                    <p>You've gone through a life change and your home no longer feels right for you.</p>
                  </div>
                  <div className="for-you-item">
                    <span className="check-mark"></span>
                    <p>You've purchased a property that requires a comprehensive upgrade.</p>
                  </div>
                  <div className="for-you-item">
                    <span className="check-mark"></span>
                    <p>You're an investor looking to sell a property at a higher value.</p>
                  </div>
                  <div className="for-you-item">
                    <span className="check-mark"></span>
                    <p>You're seeking a design that speaks to the senses—not just the eye.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="about-section cta-section"
          ref={(el) => { sectionsRef.current[5] = el; }}
        >
          <div className="cta-bg-pattern"></div>
          <div className="container">
            <h2 className="cta-title">Ready to Begin Your Journey?</h2>
            <p className="cta-description">
              Let's create a space that tells your story.<br />
              A space that feels like home.
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
