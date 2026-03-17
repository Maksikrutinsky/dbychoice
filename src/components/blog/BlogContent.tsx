'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useBlog } from '@/context/BlogContext';
import LightingShowcase from '@/components/LightingShowcase';

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
      { threshold: 0.15 }
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
        <div className={`blog-hero-content ${isVisible ? 'visible' : ''}`}>
          <span className="blog-eyebrow">{data.mainHero.tagline}</span>
          <h1>{data.mainHero.title}<br /><em>{data.mainHero.titleAccent}</em></h1>
          <div className="blog-divider">
            <span className="blog-divider-line" />
            <span className="blog-divider-diamond" />
            <span className="blog-divider-line" />
          </div>
          <p>{data.mainHero.description}</p>
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

      {/* Section 1: Design Inspirations */}
      <section id="inspirations" className={`blog-section section-light ${visibleSections.includes('inspirations') ? 'visible' : ''}`}>
        <div className="diagonal-top" />
        <div className="container section-container">
          <div className="section-label-num">01</div>
          <h2 className="section-heading">{data.sectionIntros.inspiration.title}</h2>
          <span className="section-subtitle-gold">{data.sectionIntros.inspiration.subtitle}</span>
          <p className="section-body">{data.sectionIntros.inspiration.intro}</p>
          <p className="section-body secondary">{data.sectionIntros.inspiration.secondaryText}</p>
          <Link href="/blog/inspirations" className="blog-cta-btn">
            <span>{data.sectionIntros.inspiration.buttonText}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        <div className="diagonal-bottom" />
      </section>

      {/* Section 2: Professional Tips */}
      <section id="tips" className={`blog-section section-dark ${visibleSections.includes('tips') ? 'visible' : ''}`}>
        <div className="container section-container">
          <div className="section-label-num light">02</div>
          <h2 className="section-heading light">{data.sectionIntros.tips.title}</h2>
          <span className="section-subtitle-gold">{data.sectionIntros.tips.subtitle}</span>
          <div className="tips-icons-row">
            <div className="tip-icon-item">
              <div className="tip-icon-circle">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Space Planning</span>
            </div>
            <div className="tip-icon-item">
              <div className="tip-icon-circle">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span>Lighting Design</span>
            </div>
            <div className="tip-icon-item">
              <div className="tip-icon-circle">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M3 9H21M9 21V9" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span>Materials</span>
            </div>
          </div>
          <p className="section-body light">{data.sectionIntros.tips.intro}</p>
          <p className="section-body secondary light">{data.sectionIntros.tips.secondaryText}</p>
          <Link href="/blog/tips" className="blog-cta-btn outline">
            <span>{data.sectionIntros.tips.buttonText}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* Section 3: Design Guides */}
      <section id="guides" className={`blog-section section-light ${visibleSections.includes('guides') ? 'visible' : ''}`}>
        <div className="diagonal-top reverse" />
        <div className="container section-container">
          <div className="section-label-num">03</div>
          <h2 className="section-heading">{data.sectionIntros.guides.title}</h2>
          <span className="section-subtitle-gold">{data.sectionIntros.guides.subtitle}</span>
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
          <p className="section-body">{data.sectionIntros.guides.intro}</p>
          <p className="section-body secondary">{data.sectionIntros.guides.secondaryText}</p>
          <Link href="/blog/guides" className="blog-cta-btn">
            <span>{data.sectionIntros.guides.buttonText}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        <div className="diagonal-bottom reverse" />
      </section>

      {/* Section 4: Design Insights */}
      <section id="insights" className={`blog-section section-dark ${visibleSections.includes('insights') ? 'visible' : ''}`}>
        <div className="container section-container">
          <div className="section-label-num light">04</div>
          <h2 className="section-heading light">{data.sectionIntros.insights.title}</h2>
          <span className="section-subtitle-gold">{data.sectionIntros.insights.subtitle}</span>
          <div className="insight-tags-row">
            <div className="insight-tag">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Homes</span>
            </div>
            <div className="insight-tag">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>Offices</span>
            </div>
            <div className="insight-tag">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 1v3M10 1v3M14 1v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>Hospitality</span>
            </div>
            <div className="insight-tag">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 6h18M16 10a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Retail</span>
            </div>
          </div>
          <p className="section-body light">{data.sectionIntros.insights.intro}</p>
          <p className="section-body secondary light">{data.sectionIntros.insights.secondaryText}</p>
          <Link href="/blog/insights" className="blog-cta-btn outline">
            <span>{data.sectionIntros.insights.buttonText}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* Lighting Showcase */}
      <LightingShowcase />

      <style jsx>{`
        .blog-page {
          min-height: 100vh;
          overflow-x: hidden;
          background: #f5f0ea;
        }

        /* ── HERO ── */
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
          inset: 0;
          z-index: 0;
        }

        .blog-hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .blog-hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(28, 18, 10, 0.58);
        }

        .blog-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 20px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .blog-hero-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .blog-eyebrow {
          display: inline-block;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #d4a84b;
          margin-bottom: 18px;
        }

        .blog-hero-content h1 {
          font-size: clamp(2.8rem, 7vw, 5rem);
          font-weight: 300;
          font-family: 'Playfair Display', serif;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }

        .blog-hero-content h1 em {
          font-style: italic;
          color: #d4a84b;
        }

        .blog-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 20px;
        }

        .blog-divider-line {
          display: block;
          width: 56px;
          height: 1px;
          background: rgba(212, 168, 75, 0.5);
        }

        .blog-divider-diamond {
          display: block;
          width: 8px;
          height: 8px;
          background: #d4a84b;
          transform: rotate(45deg);
          flex-shrink: 0;
        }

        .blog-hero-content p {
          font-size: 1.05rem;
          color: rgba(255, 248, 235, 0.85);
          max-width: 480px;
          margin: 0 auto;
          font-weight: 300;
          line-height: 1.7;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          color: rgba(255, 255, 255, 0.5);
          z-index: 2;
        }

        .scroll-indicator span {
          font-size: 0.72rem;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .scroll-arrow {
          animation: bounce 2s ease-in-out infinite;
          color: #d4a84b;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }

        /* ── SECTIONS ── */
        .blog-section {
          position: relative;
          padding: 100px 0;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .blog-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-light {
          background: #f5f0ea;
          color: #1a1220;
        }

        .section-dark {
          background: #1a1220;
          color: #fff;
        }

        /* ── DIAGONAL SHAPES ── */
        .diagonal-top {
          position: absolute;
          top: -40px;
          left: 0;
          width: 100%;
          height: 80px;
          background: #f5f0ea;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 40%);
          z-index: 1;
        }

        .diagonal-top.reverse {
          clip-path: polygon(0 0, 100% 0, 100% 40%, 0 100%);
        }

        .diagonal-bottom {
          position: absolute;
          bottom: -40px;
          left: 0;
          width: 100%;
          height: 80px;
          background: #f5f0ea;
          clip-path: polygon(0 0, 100% 60%, 100% 100%, 0 100%);
          z-index: 1;
        }

        .diagonal-bottom.reverse {
          clip-path: polygon(0 60%, 100% 0, 100% 100%, 0 100%);
        }

        .section-dark::before {
          content: '';
          position: absolute;
          top: -40px;
          left: 0;
          width: 100%;
          height: 80px;
          background: #1a1220;
          clip-path: polygon(0 40%, 100% 0, 100% 100%, 0 100%);
          z-index: 2;
        }

        .section-dark::after {
          content: '';
          position: absolute;
          bottom: -40px;
          left: 0;
          width: 100%;
          height: 80px;
          background: #1a1220;
          clip-path: polygon(0 0, 100% 0, 100% 60%, 0 100%);
          z-index: 2;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .section-container {
          position: relative;
          z-index: 3;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .section-label-num {
          font-family: 'Playfair Display', serif;
          font-size: 5rem;
          font-weight: 800;
          color: rgba(184, 146, 26, 0.12);
          line-height: 1;
          margin-bottom: 0.5rem;
          user-select: none;
        }

        .section-label-num.light {
          color: rgba(212, 168, 75, 0.18);
        }

        .section-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.2rem, 4.5vw, 3.2rem);
          font-weight: 700;
          color: #1a1220;
          margin-bottom: 0.5rem;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }

        .section-heading.light {
          color: #fff8eb;
        }

        .section-subtitle-gold {
          display: block;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #b8921a;
          margin-bottom: 2rem;
        }

        .section-body {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #3d3248;
          max-width: 640px;
          margin-bottom: 1rem;
        }

        .section-body.light {
          color: rgba(255, 248, 235, 0.82);
        }

        .section-body.secondary {
          opacity: 0.75;
          font-size: 0.97rem;
          margin-bottom: 2rem;
        }

        /* ── BUTTONS ── */
        .blog-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 30px;
          background: #b8921a;
          color: #fff;
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-decoration: none;
          border-radius: 50px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 18px rgba(184, 146, 26, 0.28);
          margin-top: 0.5rem;
        }

        .blog-cta-btn:hover {
          background: #d4a84b;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(212, 168, 75, 0.4);
        }

        .blog-cta-btn svg {
          transition: transform 0.3s ease;
        }

        .blog-cta-btn:hover svg {
          transform: translateX(4px);
        }

        .blog-cta-btn.outline {
          background: transparent;
          color: #d4a84b;
          border: 1.5px solid #d4a84b;
          box-shadow: none;
        }

        .blog-cta-btn.outline:hover {
          background: #d4a84b;
          color: #1a1220;
          box-shadow: 0 8px 28px rgba(212, 168, 75, 0.35);
        }

        /* ── TIPS ICONS ── */
        .tips-icons-row {
          display: flex;
          justify-content: center;
          gap: 36px;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }

        .tip-icon-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .tip-icon-circle {
          width: 72px;
          height: 72px;
          background: linear-gradient(135deg, #b8921a, #d4a84b);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          transition: all 0.35s ease;
          box-shadow: 0 4px 18px rgba(184, 146, 26, 0.3);
        }

        .tip-icon-item:hover .tip-icon-circle {
          transform: translateY(-6px) scale(1.08);
          box-shadow: 0 12px 32px rgba(212, 168, 75, 0.45);
        }

        .tip-icon-item span {
          font-size: 0.82rem;
          font-weight: 600;
          color: rgba(255, 248, 235, 0.75);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        /* ── GUIDES STEPS ── */
        .guides-steps {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .guide-step {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 22px;
          border: 1.5px solid rgba(184, 146, 26, 0.3);
          border-radius: 50px;
          background: rgba(184, 146, 26, 0.05);
          transition: all 0.3s ease;
          cursor: default;
        }

        .guide-step:hover {
          background: rgba(184, 146, 26, 0.12);
          border-color: #b8921a;
          transform: translateY(-2px);
        }

        .step-number {
          font-size: 0.95rem;
          font-weight: 700;
          color: #b8921a;
        }

        .guide-step span {
          font-size: 0.88rem;
          font-weight: 500;
          color: #3d3248;
        }

        .guide-connector {
          width: 28px;
          height: 1.5px;
          background: linear-gradient(to right, #b8921a, transparent);
        }

        /* ── INSIGHT TAGS ── */
        .insight-tags-row {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }

        .insight-tag {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 10px 20px;
          background: rgba(212, 168, 75, 0.1);
          color: #d4a84b;
          border: 1.5px solid rgba(212, 168, 75, 0.3);
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: default;
        }

        .insight-tag:hover {
          background: #d4a84b;
          color: #1a1220;
          border-color: #d4a84b;
          transform: translateY(-3px) scale(1.04);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .blog-hero {
            height: 85vh;
          }

          .blog-section {
            padding: 80px 0;
          }

          .container {
            padding: 0 20px;
          }

          .section-label-num {
            font-size: 3.5rem;
          }

          .tips-icons-row {
            gap: 24px;
          }

          .tip-icon-circle {
            width: 58px;
            height: 58px;
          }

          .guides-steps {
            flex-direction: column;
            gap: 8px;
          }

          .guide-connector {
            width: 1.5px;
            height: 20px;
            background: linear-gradient(to bottom, #b8921a, transparent);
          }

          .insight-tags-row {
            gap: 8px;
          }

          .blog-cta-btn {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .blog-hero-content h1 {
            font-size: 2.2rem;
          }

          .section-heading {
            font-size: 1.9rem;
          }
        }
      `}</style>
    </main>
  );
};

export default BlogContent;
