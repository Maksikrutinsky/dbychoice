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
      { threshold: 0.12 }
    );

    const sections = document.querySelectorAll('.blog-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="blog-page">

      {/* ── HERO ── */}
      <section className="blog-hero">
        <div className="blog-hero-bg">
          <img src={data.mainHero.image} alt="Blog Hero" />
          <div className="blog-hero-overlay" />
        </div>

        {/* Floating geometric shapes */}
        <div className="hero-shapes" aria-hidden="true">
          <div className="hero-shape shape-circle-lg" />
          <div className="hero-shape shape-circle-sm" />
          <div className="hero-shape shape-diamond" />
          <div className="hero-shape shape-ring" />
        </div>

        {/* Decorative particles */}
        <div className="hero-particles" aria-hidden="true">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`} />
          ))}
        </div>

        <div className="hero-glow" aria-hidden="true" />

        <div className={`blog-hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="hero-deco-line top" />
          <span className="blog-eyebrow">{data.mainHero.tagline}</span>
          <h1>
            <span className="title-sub">{data.mainHero.title}</span>
            <span className="title-accent">{data.mainHero.titleAccent}</span>
          </h1>
          <div className="hero-divider">
            <span className="divider-line" />
            <span className="divider-diamond" />
            <span className="divider-line" />
          </div>
          <p className="hero-sub">{data.mainHero.description}</p>
          <div className="hero-deco-line bottom" />
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

      {/* ── LIGHTING SHOWCASE — right after hero ── */}
      <div className="blog-lighting-wrapper">
        <LightingShowcase />
      </div>

      {/* ── SECTION 1: Inspirations ── */}
      <section id="inspirations" className={`blog-section section-light ${visibleSections.includes('inspirations') ? 'visible' : ''}`}>
        <div className="section-bg-orb orb-right" aria-hidden="true" />
        <div className="container section-container">
          <span className="section-label">{data.sectionIntros.inspiration.subtitle}</span>
          <div className="section-num-bg" aria-hidden="true">01</div>
          <h2 className="section-title dark">{data.sectionIntros.inspiration.title}</h2>
          <div className="title-underline gold" />
          <p className="section-lead">{data.sectionIntros.inspiration.intro}</p>
          <p className="section-body-text">{data.sectionIntros.inspiration.secondaryText}</p>
          <Link href="/blog/inspirations" className="blog-btn gold">
            <span>{data.sectionIntros.inspiration.buttonText}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        <div className="section-deco-line left" aria-hidden="true" />
        <div className="section-deco-line right" aria-hidden="true" />
      </section>

      {/* ── SECTION 2: Tips ── */}
      <section id="tips" className={`blog-section section-dark ${visibleSections.includes('tips') ? 'visible' : ''}`}>
        <div className="section-float-shape shape-tl" aria-hidden="true" />
        <div className="section-float-shape shape-br" aria-hidden="true" />
        <div className="section-glow" aria-hidden="true" />
        <div className="container section-container">
          <span className="section-label light">{data.sectionIntros.tips.subtitle}</span>
          <div className="section-num-bg light" aria-hidden="true">02</div>
          <h2 className="section-title light">{data.sectionIntros.tips.title}</h2>
          <div className="title-underline gold" />
          <div className="tips-icons-row">
            <div className="tip-icon-item">
              <div className="tip-icon-circle">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Space Planning</span>
            </div>
            <div className="tip-icon-item">
              <div className="tip-icon-circle">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span>Lighting</span>
            </div>
            <div className="tip-icon-item">
              <div className="tip-icon-circle">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M3 9H21M9 21V9" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span>Materials</span>
            </div>
          </div>
          <p className="section-lead light">{data.sectionIntros.tips.intro}</p>
          <p className="section-body-text light">{data.sectionIntros.tips.secondaryText}</p>
          <Link href="/blog/tips" className="blog-btn outline-gold">
            <span>{data.sectionIntros.tips.buttonText}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* ── SECTION 3: Guides ── */}
      <section id="guides" className={`blog-section section-light ${visibleSections.includes('guides') ? 'visible' : ''}`}>
        <div className="section-bg-orb orb-left" aria-hidden="true" />
        <div className="container section-container">
          <span className="section-label">{data.sectionIntros.guides.subtitle}</span>
          <div className="section-num-bg" aria-hidden="true">03</div>
          <h2 className="section-title dark">{data.sectionIntros.guides.title}</h2>
          <div className="title-underline gold" />
          <div className="guides-steps">
            <div className="guide-step">
              <div className="step-num">01</div>
              <span>Planning</span>
            </div>
            <div className="step-connector" />
            <div className="guide-step">
              <div className="step-num">02</div>
              <span>Design</span>
            </div>
            <div className="step-connector" />
            <div className="guide-step">
              <div className="step-num">03</div>
              <span>Execute</span>
            </div>
          </div>
          <p className="section-lead">{data.sectionIntros.guides.intro}</p>
          <p className="section-body-text">{data.sectionIntros.guides.secondaryText}</p>
          <Link href="/blog/guides" className="blog-btn gold">
            <span>{data.sectionIntros.guides.buttonText}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        <div className="section-deco-line left" aria-hidden="true" />
        <div className="section-deco-line right" aria-hidden="true" />
      </section>

      {/* ── SECTION 4: Insights ── */}
      <section id="insights" className={`blog-section section-dark ${visibleSections.includes('insights') ? 'visible' : ''}`}>
        <div className="section-float-shape shape-tl" aria-hidden="true" />
        <div className="section-float-shape shape-br" aria-hidden="true" />
        <div className="section-glow" aria-hidden="true" />
        <div className="container section-container">
          <span className="section-label light">{data.sectionIntros.insights.subtitle}</span>
          <div className="section-num-bg light" aria-hidden="true">04</div>
          <h2 className="section-title light">{data.sectionIntros.insights.title}</h2>
          <div className="title-underline gold" />
          <div className="insight-tags-row">
            {[
              { icon: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>, label: 'Homes' },
              { icon: <><rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="2"/></>, label: 'Offices' },
              { icon: <><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 1v3M10 1v3M14 1v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></>, label: 'Hospitality' },
              { icon: <><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>, label: 'Retail' },
            ].map(({ icon, label }) => (
              <div key={label} className="insight-tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">{icon}</svg>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <p className="section-lead light">{data.sectionIntros.insights.intro}</p>
          <p className="section-body-text light">{data.sectionIntros.insights.secondaryText}</p>
          <Link href="/blog/insights" className="blog-btn outline-gold">
            <span>{data.sectionIntros.insights.buttonText}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

      <style jsx>{`
        .blog-page {
          min-height: 100vh;
          overflow-x: hidden;
          background: #f8f5f0;
        }

        /* ── Override lighting-showcase diagonal when inside blog ── */
        :global(.blog-lighting-wrapper .lighting-showcase) {
          margin-top: 0 !important;
          margin-bottom: 0 !important;
          overflow: hidden !important;
          padding: 0 !important;
          min-height: 95vh;
        }
        :global(.blog-lighting-wrapper .lighting-background) {
          clip-path: none !important;
        }
        @media (max-width: 768px) {
          :global(.blog-lighting-wrapper .lighting-showcase) {
            clip-path: none !important;
            margin-top: 0 !important;
            margin-bottom: 0 !important;
            padding: 0 !important;
          }
          :global(.blog-lighting-wrapper .lighting-background) {
            clip-path: none !important;
          }
        }
        @media (max-width: 480px) {
          :global(.blog-lighting-wrapper .lighting-showcase) {
            clip-path: none !important;
            padding: 0 !important;
          }
          :global(.blog-lighting-wrapper .lighting-background) {
            clip-path: none !important;
          }
        }

        /* ══════════════════════════════
           HERO
        ══════════════════════════════ */
        .blog-hero {
          position: relative;
          height: 100vh;
          min-height: 620px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(135deg, #0a0d1a 0%, #1a1f3a 50%, #2d3561 100%);
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
          opacity: 0.35;
        }
        .blog-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(10,13,26,0.75) 0%, rgba(26,31,58,0.6) 50%, rgba(45,53,97,0.7) 100%);
        }

        /* Floating geometric shapes */
        .hero-shapes {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          overflow: hidden;
        }
        .hero-shape {
          position: absolute;
          border: 1px solid rgba(212, 175, 55, 0.25);
          animation: floatShape 20s ease-in-out infinite;
        }
        .shape-circle-lg {
          width: 320px;
          height: 320px;
          border-radius: 50%;
          top: 8%;
          left: 4%;
          animation-delay: 0s;
        }
        .shape-circle-sm {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          bottom: 18%;
          left: 12%;
          animation-delay: -7s;
          border-color: rgba(212, 175, 55, 0.18);
        }
        .shape-diamond {
          width: 180px;
          height: 180px;
          top: 20%;
          right: 8%;
          transform: rotate(45deg);
          animation-delay: -12s;
        }
        .shape-ring {
          width: 260px;
          height: 260px;
          border-radius: 50%;
          bottom: 10%;
          right: 5%;
          border-width: 2px;
          border-color: rgba(212, 175, 55, 0.15);
          animation-delay: -4s;
        }
        @keyframes floatShape {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
          25%  { transform: translateY(-28px) rotate(5deg); opacity: 0.5; }
          50%  { transform: translateY(-14px) rotate(-3deg); opacity: 0.4; }
          75%  { transform: translateY(-38px) rotate(8deg); opacity: 0.55; }
        }
        .shape-diamond { animation-name: floatShapeDiamond; }
        @keyframes floatShapeDiamond {
          0%, 100% { transform: rotate(45deg) translateY(0); opacity: 0.3; }
          50%       { transform: rotate(50deg) translateY(-20px); opacity: 0.5; }
        }

        /* Particles */
        .hero-particles {
          position: absolute;
          inset: 0;
          z-index: 3;
          overflow: hidden;
          pointer-events: none;
        }
        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: rgba(212, 175, 55, 0.7);
          border-radius: 50%;
          bottom: -8px;
          box-shadow: 0 0 8px rgba(212, 175, 55, 0.5);
          animation: floatUp linear infinite;
        }
        .particle-1 { left: 10%; animation-duration: 9s; animation-delay: 0s; }
        .particle-2 { left: 22%; animation-duration: 12s; animation-delay: -3s; width: 4px; height: 4px; }
        .particle-3 { left: 38%; animation-duration: 8s; animation-delay: -5s; }
        .particle-4 { left: 52%; animation-duration: 14s; animation-delay: -1s; width: 2px; height: 2px; }
        .particle-5 { left: 65%; animation-duration: 10s; animation-delay: -8s; }
        .particle-6 { left: 78%; animation-duration: 11s; animation-delay: -4s; width: 4px; height: 4px; }
        .particle-7 { left: 88%; animation-duration: 7s; animation-delay: -2s; }
        .particle-8 { left: 46%; animation-duration: 13s; animation-delay: -6s; width: 2px; height: 2px; }
        @keyframes floatUp {
          0%   { transform: translateY(0); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateY(-100vh); opacity: 0; }
        }

        /* Hero glow */
        .hero-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, transparent 70%);
          z-index: 4;
          pointer-events: none;
          animation: pulseGlow 4s ease-in-out infinite;
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
          50%       { opacity: 0.85; transform: translate(-50%, -50%) scale(1.15); }
        }

        /* Hero content */
        .blog-hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 0 24px;
          opacity: 0;
          transform: translateY(35px);
          transition: all 1.1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .blog-hero-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-deco-line {
          width: 1px;
          height: 56px;
          background: linear-gradient(to bottom, transparent, #d4af37, transparent);
          margin: 0 auto;
        }
        .hero-deco-line.top  { margin-bottom: 1.8rem; }
        .hero-deco-line.bottom { margin-top: 1.8rem; }

        .blog-eyebrow {
          display: inline-block;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #d4af37;
          margin-bottom: 1.2rem;
        }

        .blog-hero-content h1 {
          font-family: 'Playfair Display', serif;
          line-height: 1.1;
          margin-bottom: 1.8rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .title-sub {
          display: block;
          font-size: clamp(1.2rem, 2.5vw, 1.7rem);
          font-weight: 300;
          letter-spacing: 10px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.88);
        }
        .title-accent {
          display: block;
          font-size: clamp(3rem, 7vw, 5.5rem);
          font-weight: 700;
          color: #d4af37;
          text-shadow: 0 0 80px rgba(212, 175, 55, 0.55);
          font-style: italic;
        }

        .hero-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.2rem;
          margin-bottom: 1.5rem;
        }
        .divider-line {
          display: block;
          width: 90px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
        }
        .divider-diamond {
          display: block;
          width: 12px;
          height: 12px;
          background: #d4af37;
          transform: rotate(45deg);
          flex-shrink: 0;
          box-shadow: 0 0 24px rgba(212, 175, 55, 0.8);
          animation: diamondPulse 2.5s ease-in-out infinite;
        }
        @keyframes diamondPulse {
          0%, 100% { box-shadow: 0 0 24px rgba(212,175,55,0.8); }
          50%       { box-shadow: 0 0 44px rgba(212,175,55,1); }
        }

        .hero-sub {
          font-size: 1.08rem;
          color: rgba(255, 248, 235, 0.8);
          max-width: 500px;
          margin: 0 auto;
          font-weight: 300;
          line-height: 1.75;
          font-style: italic;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 38px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          color: rgba(255,255,255,0.45);
          z-index: 10;
        }
        .scroll-indicator span {
          font-size: 0.7rem;
          letter-spacing: 3px;
          text-transform: uppercase;
        }
        .scroll-arrow {
          color: #d4af37;
          animation: bounce 2s ease-in-out infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(8px); }
        }

        /* ══════════════════════════════
           SECTIONS BASE
        ══════════════════════════════ */
        .blog-section {
          position: relative;
          padding: 110px 0;
          overflow: hidden;
          opacity: 0;
          transform: translateY(45px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .blog-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-light {
          background: linear-gradient(180deg, #f8f5f0 0%, #f5f0e8 100%);
          color: #1a2332;
        }
        .section-dark {
          background: linear-gradient(135deg, #0a0d1a 0%, #1a1f3a 60%, #2d3561 100%);
          color: #fff;
        }

        .container {
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .section-container {
          position: relative;
          z-index: 5;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Big ghost number */
        .section-num-bg {
          font-family: 'Playfair Display', serif;
          font-size: 8rem;
          font-weight: 800;
          color: rgba(26, 35, 50, 0.06);
          line-height: 1;
          user-select: none;
          pointer-events: none;
          margin-bottom: -2rem;
          letter-spacing: -0.04em;
        }
        .section-num-bg.light {
          color: rgba(212, 175, 55, 0.1);
        }

        .section-label {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #b8921a;
          margin-bottom: 0.6rem;
        }
        .section-label.light {
          color: #d4af37;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1rem;
          letter-spacing: -0.01em;
        }
        .section-title.dark  { color: #1a2332; }
        .section-title.light { color: #fff8eb; }

        .title-underline {
          width: 70px;
          height: 3px;
          border-radius: 2px;
          margin: 0 auto 2.5rem;
        }
        .title-underline.gold {
          background: linear-gradient(90deg, #d4af37, #e8c547);
        }

        .section-lead {
          font-size: 1.1rem;
          line-height: 1.85;
          color: #3d4a5c;
          max-width: 620px;
          margin-bottom: 1rem;
        }
        .section-lead.light {
          color: rgba(255, 248, 235, 0.82);
        }

        .section-body-text {
          font-size: 0.97rem;
          line-height: 1.75;
          color: #5a6474;
          max-width: 580px;
          margin-bottom: 2.2rem;
        }
        .section-body-text.light {
          color: rgba(255, 248, 235, 0.6);
        }

        /* Decorative side lines for light sections */
        .section-deco-line {
          position: absolute;
          top: 50%;
          width: 1px;
          height: 140px;
          background: linear-gradient(to bottom, transparent, rgba(212,175,55,0.4), transparent);
          transform: translateY(-50%);
          pointer-events: none;
        }
        .section-deco-line.left  { left: 48px; }
        .section-deco-line.right { right: 48px; }

        /* Background orb for light sections */
        .section-bg-orb {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }
        .orb-right { top: 10%; right: -160px; }
        .orb-left  { bottom: 10%; left: -160px; }

        /* Floating shapes for dark sections */
        .section-float-shape {
          position: absolute;
          border: 1px solid rgba(212,175,55,0.18);
          border-radius: 50%;
          pointer-events: none;
          animation: floatShape 18s ease-in-out infinite;
        }
        .shape-tl {
          width: 240px;
          height: 240px;
          top: -60px;
          left: -60px;
          animation-delay: -3s;
        }
        .shape-br {
          width: 180px;
          height: 180px;
          bottom: -40px;
          right: -40px;
          animation-delay: -9s;
        }

        /* Glow for dark sections */
        .section-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%);
          pointer-events: none;
          animation: pulseGlow 5s ease-in-out infinite;
        }

        /* ══════════════════════════════
           BUTTONS
        ══════════════════════════════ */
        .blog-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-decoration: none;
          border-radius: 50px;
          transition: all 0.32s ease;
          position: relative;
          overflow: hidden;
        }
        .blog-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
          transform: translateX(-100%);
          transition: transform 0.5s ease;
        }
        .blog-btn:hover::before { transform: translateX(100%); }
        .blog-btn svg { transition: transform 0.3s ease; }
        .blog-btn:hover svg { transform: translateX(4px); }

        .blog-btn.gold {
          background: linear-gradient(135deg, #b8921a, #d4af37);
          color: #fff;
          box-shadow: 0 4px 20px rgba(184,146,26,0.35);
        }
        .blog-btn.gold:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(212,175,55,0.5);
        }

        .blog-btn.outline-gold {
          background: transparent;
          color: #d4af37;
          border: 1.5px solid rgba(212,175,55,0.55);
        }
        .blog-btn.outline-gold:hover {
          background: rgba(212,175,55,0.12);
          border-color: #d4af37;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(212,175,55,0.2);
        }

        /* ══════════════════════════════
           TIPS ICONS
        ══════════════════════════════ */
        .tips-icons-row {
          display: flex;
          justify-content: center;
          gap: 32px;
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
          width: 68px;
          height: 68px;
          background: linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.05));
          border: 1.5px solid rgba(212,175,55,0.4);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #d4af37;
          transition: all 0.35s ease;
          box-shadow: 0 0 20px rgba(212,175,55,0.1);
        }
        .tip-icon-item:hover .tip-icon-circle {
          background: linear-gradient(135deg, rgba(212,175,55,0.3), rgba(212,175,55,0.12));
          box-shadow: 0 0 35px rgba(212,175,55,0.35);
          transform: translateY(-6px) scale(1.06);
        }
        .tip-icon-item span {
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(212,175,55,0.7);
        }

        /* ══════════════════════════════
           GUIDES STEPS
        ══════════════════════════════ */
        .guides-steps {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        .guide-step {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 22px;
          border: 1.5px solid rgba(184,146,26,0.28);
          border-radius: 50px;
          background: rgba(184,146,26,0.04);
          transition: all 0.3s ease;
        }
        .guide-step:hover {
          border-color: #b8921a;
          background: rgba(184,146,26,0.1);
          transform: translateY(-2px);
        }
        .step-num {
          font-size: 0.92rem;
          font-weight: 700;
          color: #b8921a;
        }
        .guide-step span {
          font-size: 0.88rem;
          font-weight: 500;
          color: #3d4a5c;
        }
        .step-connector {
          width: 26px;
          height: 1.5px;
          background: linear-gradient(to right, #b8921a, transparent);
        }

        /* ══════════════════════════════
           INSIGHT TAGS
        ══════════════════════════════ */
        .insight-tags-row {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        .insight-tag {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 10px 20px;
          background: rgba(212,175,55,0.08);
          color: #d4af37;
          border: 1px solid rgba(212,175,55,0.25);
          border-radius: 50px;
          font-size: 0.83rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .insight-tag:hover {
          background: rgba(212,175,55,0.2);
          border-color: #d4af37;
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(212,175,55,0.2);
        }

        /* ══════════════════════════════
           RESPONSIVE
        ══════════════════════════════ */
        @media (max-width: 768px) {
          .blog-hero { height: 88vh; }
          .title-accent { font-size: 3rem; }
          .blog-section { padding: 80px 0; }
          .container { padding: 0 20px; }
          .section-num-bg { font-size: 5.5rem; }
          .section-deco-line { display: none; }
          .tips-icons-row { gap: 20px; }
          .tip-icon-circle { width: 56px; height: 56px; }
          .guides-steps { flex-direction: column; gap: 6px; }
          .step-connector {
            width: 1.5px;
            height: 18px;
            background: linear-gradient(to bottom, #b8921a, transparent);
          }
          .insight-tags-row { gap: 8px; }
          .shape-circle-lg, .shape-ring { display: none; }
          .blog-btn { width: 100%; justify-content: center; }
        }

        @media (max-width: 480px) {
          .title-sub { letter-spacing: 5px; font-size: 1rem; }
          .title-accent { font-size: 2.6rem; }
          .section-title { font-size: 1.9rem; }
          .section-lead { font-size: 1rem; }
        }
      `}</style>
    </main>
  );
};

export default BlogContent;
