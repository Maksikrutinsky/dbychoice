'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useBlog } from '@/context/BlogContext';

const BlogContent = () => {
  const { data } = useBlog();
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll('.blog-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-bg">
          <img src={data.mainHero.image} alt="Blog Hero" />
          <div className="blog-hero-overlay" />
        </div>
        <div className="hero-shapes">
          <div className="shape shape-1" />
          <div className="shape shape-2" />
          <div className="shape shape-3" />
        </div>
        <div className={`blog-hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="hero-line" />
          <span className="blog-tagline">{data.mainHero.tagline}</span>
          <h1>{data.mainHero.title}<br /><span className="accent">{data.mainHero.titleAccent}</span></h1>
          <p>{data.mainHero.description}</p>
          <div className="hero-line bottom" />
        </div>
        <div className="scroll-indicator">
          <span>Explore</span>
          <div className="scroll-arrow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Section 1: Design Inspirations & Ideas */}
      <section id="inspirations" className={`blog-section section-inspirations ${visibleSections.includes('inspirations') ? 'visible' : ''}`}>
        <div className="section-bg">
          <div className="diagonal-stripe stripe-1" />
          <div className="diagonal-stripe stripe-2" />
          <div className="floating-circle circle-1" />
          <div className="floating-circle circle-2" />
        </div>
        <div className="container section-container">
          <div className="section-content centered">
            <div className="section-text full-width">
              <div className="section-label">01</div>
              <h2>{data.sectionIntros.inspiration.title}</h2>
              <span className="section-subtitle">{data.sectionIntros.inspiration.subtitle}</span>
              <p className="section-intro">{data.sectionIntros.inspiration.intro}</p>
              <p className="section-text-secondary">{data.sectionIntros.inspiration.secondaryText}</p>
              <Link href="/blog/inspirations" className="styled-btn">
                <span>{data.sectionIntros.inspiration.buttonText}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="decorative-elements">
          <div className="deco-line line-1" />
          <div className="deco-line line-2" />
          <div className="deco-dot dot-1" />
          <div className="deco-dot dot-2" />
          <div className="deco-dot dot-3" />
        </div>
      </section>

      {/* Section 2: Professional Tips */}
      <section id="tips" className={`blog-section section-tips ${visibleSections.includes('tips') ? 'visible' : ''}`}>
        <div className="section-bg">
          <div className="wave-shape" />
          <div className="dots-pattern" />
        </div>
        <div className="container section-container">
          <div className="section-content centered">
            <div className="section-visual-icons">
              <div className="tips-icon icon-1">
                <div className="icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Space Planning</span>
              </div>
              <div className="tips-icon icon-2">
                <div className="icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <span>Lighting Design</span>
              </div>
              <div className="tips-icon icon-3">
                <div className="icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M3 9H21M9 21V9" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <span>Material Selection</span>
              </div>
            </div>
            <div className="section-text full-width">
              <div className="section-label">02</div>
              <h2>{data.sectionIntros.tips.title}</h2>
              <span className="section-subtitle">{data.sectionIntros.tips.subtitle}</span>
              <p className="section-intro">{data.sectionIntros.tips.intro}</p>
              <p className="section-text-secondary">{data.sectionIntros.tips.secondaryText}</p>
              <Link href="/blog/tips" className="styled-btn dark">
                <span>{data.sectionIntros.tips.buttonText}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Design Guides */}
      <section id="guides" className={`blog-section section-guides ${visibleSections.includes('guides') ? 'visible' : ''}`}>
        <div className="section-bg">
          <div className="hex-pattern" />
          <div className="gradient-orb orb-1" />
          <div className="gradient-orb orb-2" />
        </div>
        <div className="container section-container">
          <div className="section-content centered">
            <div className="section-text full-width">
              <div className="section-label">03</div>
              <h2>{data.sectionIntros.guides.title}</h2>
              <span className="section-subtitle">{data.sectionIntros.guides.subtitle}</span>
              <p className="section-intro">{data.sectionIntros.guides.intro}</p>
              <p className="section-text-secondary">{data.sectionIntros.guides.secondaryText}</p>
              <div className="guides-steps">
                <div className="guide-step">
                  <div className="step-number">01</div>
                  <span>Planning</span>
                </div>
                <div className="guide-connector" />
                <div className="guide-step">
                  <div className="step-number">02</div>
                  <span>Design</span>
                </div>
                <div className="guide-connector" />
                <div className="guide-step">
                  <div className="step-number">03</div>
                  <span>Execute</span>
                </div>
              </div>
              <Link href="/blog/guides" className="styled-btn">
                <span>{data.sectionIntros.guides.buttonText}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Design Insights */}
      <section id="insights" className={`blog-section section-insights ${visibleSections.includes('insights') ? 'visible' : ''}`}>
        <div className="section-bg">
          <div className="triangle-pattern" />
          <div className="glow-line line-1" />
          <div className="glow-line line-2" />
        </div>
        <div className="container section-container">
          <div className="section-content centered">
            <div className="insights-categories">
              <div className="insight-tag">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Homes</span>
              </div>
              <div className="insight-tag">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>Offices</span>
              </div>
              <div className="insight-tag">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 1v3M10 1v3M14 1v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>Hospitality</span>
              </div>
              <div className="insight-tag">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 6h18M16 10a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Retail</span>
              </div>
            </div>
            <div className="section-text full-width">
              <div className="section-label">04</div>
              <h2>{data.sectionIntros.insights.title}</h2>
              <span className="section-subtitle">{data.sectionIntros.insights.subtitle}</span>
              <p className="section-intro">{data.sectionIntros.insights.intro}</p>
              <p className="section-text-secondary">{data.sectionIntros.insights.secondaryText}</p>
              <Link href="/blog/insights" className="styled-btn dark">
                <span>{data.sectionIntros.insights.buttonText}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .blog-page {
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* ===== HERO SECTION ===== */
        .blog-hero {
          position: relative;
          height: 100vh;
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .blog-hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .blog-hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .blog-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(11, 22, 45, 0.9) 0%, rgba(11, 22, 45, 0.7) 50%, rgba(11, 22, 45, 0.85) 100%);
        }

        .hero-shapes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .shape {
          position: absolute;
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 50%;
        }

        .shape-1 {
          width: 400px;
          height: 400px;
          top: -100px;
          right: -100px;
          animation: float 8s ease-in-out infinite;
        }

        .shape-2 {
          width: 200px;
          height: 200px;
          bottom: 20%;
          left: 10%;
          animation: float 6s ease-in-out infinite reverse;
        }

        .shape-3 {
          width: 150px;
          height: 150px;
          top: 30%;
          right: 20%;
          border: 2px solid rgba(212, 175, 55, 0.2);
          animation: float 10s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, 20px) rotate(5deg); }
        }

        .blog-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 20px;
          opacity: 0;
          transform: translateY(40px);
          transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .blog-hero-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-line {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
          margin: 0 auto 2rem;
        }

        .hero-line.bottom {
          margin: 2rem auto 0;
        }

        .blog-tagline {
          display: inline-block;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 6px;
          text-transform: uppercase;
          color: #d4af37;
          margin-bottom: 1rem;
        }

        .blog-hero-content h1 {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 300;
          font-family: 'Playfair Display', serif;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .blog-hero-content h1 .accent {
          color: #d4af37;
          font-style: italic;
        }

        .blog-hero-content p {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.8);
          max-width: 500px;
          margin: 0 auto;
          font-weight: 300;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.6);
          z-index: 2;
        }

        .scroll-indicator span {
          font-size: 0.75rem;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .scroll-arrow {
          animation: bounce 2s ease-in-out infinite;
          color: #d4af37;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }

        /* ===== SECTION BASE STYLES ===== */
        .blog-section {
          position: relative;
          padding: 120px 0;
          overflow: hidden;
        }

        .section-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }

        .section-container {
          position: relative;
          z-index: 2;
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .section-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .section-content.centered {
          text-align: center;
        }

        .section-text.full-width {
          max-width: 700px;
        }

        .section-label {
          font-size: 4rem;
          font-weight: 800;
          color: rgba(212, 175, 55, 0.15);
          line-height: 1;
          margin-bottom: 1rem;
        }

        .section-text h2 {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          font-family: 'Playfair Display', serif;
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }

        .section-subtitle {
          display: block;
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #d4af37;
          margin-bottom: 2rem;
        }

        .section-intro {
          font-size: 1.15rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .section-text-secondary {
          font-size: 1rem;
          line-height: 1.7;
          opacity: 0.8;
          margin-bottom: 2rem;
        }

        /* ===== STYLED BUTTONS ===== */
        .blog-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          background: linear-gradient(135deg, #d4af37 0%, #c4a030 100%);
          color: #0b162d;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          border-radius: 50px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
        }

        .blog-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .blog-btn:hover::before {
          left: 100%;
        }

        .blog-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 30px rgba(212, 175, 55, 0.5);
        }

        .blog-btn svg {
          transition: transform 0.3s ease;
        }

        .blog-btn:hover svg {
          transform: translateX(5px);
        }

        .blog-btn.dark {
          background: linear-gradient(135deg, #0b162d 0%, #1a2a4a 100%);
          color: #d4af37;
          border: 2px solid #d4af37;
          box-shadow: 0 4px 20px rgba(11, 22, 45, 0.3);
        }

        .blog-btn.dark:hover {
          background: linear-gradient(135deg, #d4af37 0%, #c4a030 100%);
          color: #0b162d;
          box-shadow: 0 8px 30px rgba(212, 175, 55, 0.5);
        }

        /* ===== SECTION 1: INSPIRATIONS ===== */
        .section-inspirations {
          background: #0b162d;
          color: #fff;
        }

        .section-inspirations h2 {
          color: #f5deb3;
        }

        .diagonal-stripe {
          position: absolute;
          width: 200%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.3), transparent);
        }

        .stripe-1 {
          top: 20%;
          left: -50%;
          transform: rotate(-5deg);
        }

        .stripe-2 {
          bottom: 30%;
          left: -50%;
          transform: rotate(5deg);
        }

        .floating-circle {
          position: absolute;
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 50%;
        }

        .circle-1 {
          width: 300px;
          height: 300px;
          top: 10%;
          right: -100px;
          animation: float 12s ease-in-out infinite;
        }

        .circle-2 {
          width: 200px;
          height: 200px;
          bottom: 10%;
          left: -50px;
          animation: float 8s ease-in-out infinite reverse;
        }

        .decorative-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .deco-line {
          position: absolute;
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, #d4af37, transparent);
        }

        .deco-line.line-1 {
          top: 30%;
          left: 5%;
          transform: rotate(45deg);
        }

        .deco-line.line-2 {
          bottom: 25%;
          right: 5%;
          transform: rotate(-45deg);
          background: linear-gradient(90deg, transparent, #d4af37);
        }

        .deco-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #d4af37;
          border-radius: 50%;
          opacity: 0.5;
        }

        .deco-dot.dot-1 { top: 20%; right: 15%; }
        .deco-dot.dot-2 { bottom: 30%; left: 10%; }
        .deco-dot.dot-3 { top: 60%; right: 8%; }

        /* ===== SECTION 2: TIPS ===== */
        .section-tips {
          background: linear-gradient(135deg, #f8f6f3 0%, #efe9e1 100%);
          color: #0b162d;
        }

        .wave-shape {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 200px;
          background: linear-gradient(to top, rgba(212, 175, 55, 0.05), transparent);
          clip-path: polygon(0 50%, 100% 0, 100% 100%, 0 100%);
        }

        .dots-pattern {
          position: absolute;
          top: 50px;
          right: 50px;
          width: 200px;
          height: 200px;
          background-image: radial-gradient(circle, rgba(212, 175, 55, 0.3) 2px, transparent 2px);
          background-size: 20px 20px;
        }

        .section-visual-icons {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .tips-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }

        .icon-circle {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #d4af37, #f5deb3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0b162d;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
        }

        .tips-icon:hover .icon-circle {
          transform: translateY(-8px) scale(1.1);
          box-shadow: 0 15px 40px rgba(212, 175, 55, 0.4);
        }

        .tips-icon span {
          font-size: 0.9rem;
          font-weight: 600;
          color: #0b162d;
          transition: color 0.3s ease;
        }

        .tips-icon:hover span {
          color: #d4af37;
        }

        /* ===== SECTION 3: GUIDES ===== */
        .section-guides {
          background: #0b162d;
          color: #fff;
        }

        .section-guides h2 {
          color: #f5deb3;
        }

        .hex-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill='%23d4af37'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9z'/%3E%3C/g%3E%3C/svg%3E");
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
        }

        .orb-1 {
          width: 400px;
          height: 400px;
          background: rgba(212, 175, 55, 0.1);
          top: -100px;
          left: -100px;
        }

        .orb-2 {
          width: 300px;
          height: 300px;
          background: rgba(212, 175, 55, 0.08);
          bottom: -50px;
          right: -50px;
        }

        .guides-steps {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin: 2rem 0;
          flex-wrap: wrap;
        }

        .guide-step {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.05);
          padding: 14px 24px;
          border-radius: 50px;
          border: 1px solid rgba(212, 175, 55, 0.3);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .guide-step:hover {
          background: rgba(212, 175, 55, 0.15);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
        }

        .step-number {
          font-size: 1rem;
          font-weight: 700;
          color: #d4af37;
        }

        .guide-step span {
          font-size: 0.9rem;
          font-weight: 500;
        }

        .guide-connector {
          width: 30px;
          height: 2px;
          background: linear-gradient(to right, #d4af37, transparent);
        }

        /* ===== SECTION 4: INSIGHTS ===== */
        .section-insights {
          background: linear-gradient(135deg, #f8f6f3 0%, #efe9e1 100%);
          color: #0b162d;
        }

        .triangle-pattern {
          position: absolute;
          top: 0;
          right: 0;
          width: 400px;
          height: 400px;
          opacity: 0.1;
          background: linear-gradient(135deg, #d4af37 25%, transparent 25%);
        }

        .glow-line {
          position: absolute;
          height: 2px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
        }

        .glow-line.line-1 {
          width: 300px;
          top: 30%;
          left: 5%;
          transform: rotate(30deg);
        }

        .glow-line.line-2 {
          width: 200px;
          bottom: 25%;
          right: 10%;
          transform: rotate(-20deg);
        }

        .insights-categories {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .insight-tag {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: linear-gradient(135deg, #0b162d, #1a2a4a);
          color: #fff;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(11, 22, 45, 0.3);
        }

        .insight-tag:hover {
          background: linear-gradient(135deg, #d4af37, #c4a030);
          color: #0b162d;
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
        }

        .insight-tag svg {
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }

        .insight-tag:hover svg {
          opacity: 1;
        }

        /* ===== ANIMATIONS ===== */
        .blog-section {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .blog-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          .blog-hero {
            height: 80vh;
            min-height: 500px;
          }

          .blog-hero-content h1 {
            font-size: 2.5rem;
          }

          .blog-section {
            padding: 80px 0;
          }

          .section-container {
            padding: 0 20px;
          }

          .section-label {
            font-size: 3rem;
          }

          .section-visual-icons {
            gap: 25px;
          }

          .icon-circle {
            width: 60px;
            height: 60px;
          }

          .icon-circle svg {
            width: 24px;
            height: 24px;
          }

          .guides-steps {
            flex-direction: column;
            gap: 10px;
          }

          .guide-connector {
            width: 2px;
            height: 20px;
            background: linear-gradient(to bottom, #d4af37, transparent);
          }

          .insights-categories {
            gap: 10px;
          }

          .insight-tag {
            padding: 10px 18px;
            font-size: 0.85rem;
          }

          .blog-btn {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .blog-hero-content h1 {
            font-size: 2rem;
          }

          .blog-tagline {
            letter-spacing: 3px;
            font-size: 0.75rem;
          }

          .section-label {
            font-size: 2.5rem;
          }

          .section-text h2 {
            font-size: 1.8rem;
          }

          .section-intro {
            font-size: 1rem;
          }

          .section-visual-icons {
            gap: 20px;
          }

          .tips-icon span {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </main>
  );
};

export default BlogContent;
