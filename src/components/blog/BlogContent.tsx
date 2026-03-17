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
      { threshold: 0.1 }
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
        <div className="hero-shapes" aria-hidden="true">
          <div className="hero-shape shape-circle-lg" />
          <div className="hero-shape shape-circle-sm" />
          <div className="hero-shape shape-diamond" />
          <div className="hero-shape shape-ring" />
        </div>
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

      {/* ── LIGHTING SHOWCASE — centered, no diagonal ── */}
      <div className="blog-lighting-wrapper">
        <LightingShowcase />
      </div>

      {/* ══════════════════════════════════════════
          SECTION 1 — INSPIRATIONS (About-style title)
      ══════════════════════════════════════════ */}
      <section id="inspirations" className={`blog-section section-light ${visibleSections.includes('inspirations') ? 'visible' : ''}`}>
        <div className="s1-bg-ring ring-a" aria-hidden="true" />
        <div className="s1-bg-ring ring-b" aria-hidden="true" />
        <div className="container section-container">

          {/* About-style title block */}
          <div className="about-title-block">
            <div className="about-vline" aria-hidden="true" />
            <span className="about-eyebrow">01 — {data.sectionIntros.inspiration.subtitle}</span>
            <h2 className="about-heading">
              <span className="ah-small">Design</span>
              <span className="ah-accent">Inspirations</span>
            </h2>
            <div className="about-diamond-row" aria-hidden="true">
              <span className="adl" /><span className="add" /><span className="adl" />
            </div>
            <p className="about-tagline">{data.sectionIntros.inspiration.intro}</p>
            <div className="about-vline" aria-hidden="true" />
          </div>

          <p className="section-body-text">{data.sectionIntros.inspiration.secondaryText}</p>

          <Link href="/blog/inspirations" className="blog-btn gold">
            <span>Explore Inspirations</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        <div className="side-deco left" aria-hidden="true" />
        <div className="side-deco right" aria-hidden="true" />
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2 — TIPS (dark, rich)
      ══════════════════════════════════════════ */}
      <section id="tips" className={`blog-section section-dark ${visibleSections.includes('tips') ? 'visible' : ''}`}>
        <div className="dark-float-circle dfc-tl" aria-hidden="true" />
        <div className="dark-float-circle dfc-br" aria-hidden="true" />
        <div className="dark-center-glow" aria-hidden="true" />
        <div className="container section-container">

          <span className="dark-eyebrow">02 — {data.sectionIntros.tips.subtitle}</span>
          <div className="dark-title-wrap">
            <h2 className="dark-heading">{data.sectionIntros.tips.title}</h2>
            <div className="gold-bar" aria-hidden="true" />
          </div>

          <div className="tips-cards">
            <div className="tip-card">
              <div className="tip-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="tip-card-label">Space Planning</span>
            </div>
            <div className="tip-card">
              <div className="tip-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="tip-card-label">Lighting Design</span>
            </div>
            <div className="tip-card">
              <div className="tip-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M3 9H21M9 21V9" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span className="tip-card-label">Material Selection</span>
            </div>
          </div>

          <p className="section-lead light">{data.sectionIntros.tips.intro}</p>
          <p className="section-body-text light">{data.sectionIntros.tips.secondaryText}</p>

          <Link href="/blog/tips" className="blog-btn outline-gold">
            <span>Discover Tips</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3 — GUIDES (light, journey)
      ══════════════════════════════════════════ */}
      <section id="guides" className={`blog-section section-light ${visibleSections.includes('guides') ? 'visible' : ''}`}>
        <div className="s1-bg-ring ring-c" aria-hidden="true" />
        <div className="container section-container">

          <span className="light-eyebrow">03 — {data.sectionIntros.guides.subtitle}</span>
          <h2 className="light-heading">{data.sectionIntros.guides.title}</h2>
          <div className="gold-line-center" aria-hidden="true" />

          <div className="journey-row">
            <div className="journey-step">
              <div className="journey-step-num">01</div>
              <div className="journey-step-label">Planning</div>
            </div>
            <div className="journey-connector">
              <div className="jc-line" />
              <div className="jc-diamond" aria-hidden="true" />
              <div className="jc-line" />
            </div>
            <div className="journey-step">
              <div className="journey-step-num">02</div>
              <div className="journey-step-label">Design</div>
            </div>
            <div className="journey-connector">
              <div className="jc-line" />
              <div className="jc-diamond" aria-hidden="true" />
              <div className="jc-line" />
            </div>
            <div className="journey-step">
              <div className="journey-step-num">03</div>
              <div className="journey-step-label">Execute</div>
            </div>
          </div>

          <p className="section-lead">{data.sectionIntros.guides.intro}</p>
          <p className="section-body-text">{data.sectionIntros.guides.secondaryText}</p>

          <Link href="/blog/guides" className="blog-btn gold">
            <span>View Guides</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        <div className="side-deco left" aria-hidden="true" />
        <div className="side-deco right" aria-hidden="true" />
      </section>

      {/* ══════════════════════════════════════════
          SECTION 4 — INSIGHTS (dark, categories)
      ══════════════════════════════════════════ */}
      <section id="insights" className={`blog-section section-dark ${visibleSections.includes('insights') ? 'visible' : ''}`}>
        <div className="dark-float-circle dfc-tr" aria-hidden="true" />
        <div className="dark-float-circle dfc-bl" aria-hidden="true" />
        <div className="dark-center-glow" aria-hidden="true" />
        <div className="container section-container">

          <span className="dark-eyebrow">04 — {data.sectionIntros.insights.subtitle}</span>
          <div className="dark-title-wrap">
            <h2 className="dark-heading">{data.sectionIntros.insights.title}</h2>
            <div className="gold-bar" aria-hidden="true" />
          </div>

          <div className="insight-grid">
            {[
              { label: 'Homes', path: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
              { label: 'Offices', path: 'M2 7h20v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7zM16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2' },
              { label: 'Hospitality', path: 'M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z' },
              { label: 'Retail', path: 'M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0' },
            ].map(({ label, path }) => (
              <div key={label} className="insight-card">
                <div className="insight-card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={path} />
                  </svg>
                </div>
                <span className="insight-card-label">{label}</span>
              </div>
            ))}
          </div>

          <p className="section-lead light">{data.sectionIntros.insights.intro}</p>
          <p className="section-body-text light">{data.sectionIntros.insights.secondaryText}</p>

          <Link href="/blog/insights" className="blog-btn outline-gold">
            <span>Explore Insights</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          STYLES
      ════════════════════════════════════════════════════════════ */}
      <style jsx>{`

        /* ── Page ── */
        .blog-page {
          min-height: 100vh;
          overflow-x: hidden;
          background: #f8f5f0;
        }

        /* ── Lighting override: remove diagonal + center content ── */
        :global(.blog-lighting-wrapper .lighting-showcase) {
          margin-top: 0 !important;
          margin-bottom: 0 !important;
          overflow: hidden !important;
          padding: 0 !important;
          min-height: 95vh;
          align-items: center !important;
          justify-content: center !important;
        }
        :global(.blog-lighting-wrapper .lighting-background) {
          clip-path: none !important;
        }
        :global(.blog-lighting-wrapper .lighting-controls) {
          padding: 4rem 2rem !important;
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

        /* ════════════════════════════════
           HERO
        ════════════════════════════════ */
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
        .blog-hero-bg { position: absolute; inset: 0; z-index: 0; }
        .blog-hero-bg img { width: 100%; height: 100%; object-fit: cover; opacity: 0.32; }
        .blog-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(10,13,26,0.78) 0%, rgba(26,31,58,0.62) 50%, rgba(45,53,97,0.72) 100%);
        }

        .hero-shapes { position: absolute; inset: 0; z-index: 2; pointer-events: none; overflow: hidden; }
        .hero-shape { position: absolute; border: 1px solid rgba(212,175,55,0.22); animation: floatShape 20s ease-in-out infinite; }
        .shape-circle-lg { width: 320px; height: 320px; border-radius: 50%; top: 8%; left: 4%; animation-delay: 0s; }
        .shape-circle-sm { width: 160px; height: 160px; border-radius: 50%; bottom: 18%; left: 12%; animation-delay: -7s; border-color: rgba(212,175,55,0.15); }
        .shape-diamond   { width: 180px; height: 180px; top: 20%; right: 8%; animation-delay: -12s; animation-name: floatShapeDiamond; }
        .shape-ring      { width: 260px; height: 260px; border-radius: 50%; bottom: 10%; right: 5%; border-width: 2px; border-color: rgba(212,175,55,0.13); animation-delay: -4s; }

        @keyframes floatShape {
          0%,100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
          25%      { transform: translateY(-28px) rotate(5deg); opacity: 0.5; }
          75%      { transform: translateY(-38px) rotate(8deg); opacity: 0.55; }
        }
        @keyframes floatShapeDiamond {
          0%,100% { transform: rotate(45deg) translateY(0); opacity: 0.3; }
          50%      { transform: rotate(50deg) translateY(-20px); opacity: 0.5; }
        }

        .hero-particles { position: absolute; inset: 0; z-index: 3; overflow: hidden; pointer-events: none; }
        .particle { position: absolute; width: 3px; height: 3px; background: rgba(212,175,55,0.7); border-radius: 50%; bottom: -8px; box-shadow: 0 0 8px rgba(212,175,55,0.5); animation: floatUp linear infinite; }
        .particle-1 { left: 10%; animation-duration: 9s; }
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

        .hero-glow {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
          width: 600px; height: 600px; z-index: 4; pointer-events: none;
          background: radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%);
          animation: pulseGlow 4s ease-in-out infinite;
        }
        @keyframes pulseGlow {
          0%,100% { opacity: 0.5; transform: translate(-50%,-50%) scale(1); }
          50%      { opacity: 0.85; transform: translate(-50%,-50%) scale(1.15); }
        }

        .blog-hero-content {
          position: relative; z-index: 10; text-align: center; padding: 0 24px;
          opacity: 0; transform: translateY(35px);
          transition: all 1.1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .blog-hero-content.visible { opacity: 1; transform: translateY(0); }

        .hero-deco-line {
          width: 1px; height: 56px;
          background: linear-gradient(to bottom, transparent, #d4af37, transparent);
          margin: 0 auto;
        }
        .hero-deco-line.top    { margin-bottom: 1.8rem; }
        .hero-deco-line.bottom { margin-top: 1.8rem; }

        .blog-eyebrow {
          display: inline-block; font-size: 0.78rem; font-weight: 600;
          letter-spacing: 0.22em; text-transform: uppercase; color: #d4af37; margin-bottom: 1.2rem;
        }
        .blog-hero-content h1 {
          font-family: 'Playfair Display', serif; line-height: 1.1; margin-bottom: 1.8rem;
          display: flex; flex-direction: column; gap: 0.25rem;
        }
        .title-sub {
          display: block; font-size: clamp(1.2rem,2.5vw,1.7rem); font-weight: 300;
          letter-spacing: 10px; text-transform: uppercase; color: rgba(255,255,255,0.88);
        }
        .title-accent {
          display: block; font-size: clamp(3rem,7vw,5.5rem); font-weight: 700;
          color: #d4af37; font-style: italic;
          text-shadow: 0 0 80px rgba(212,175,55,0.55);
        }

        .hero-divider { display: flex; align-items: center; justify-content: center; gap: 1.2rem; margin-bottom: 1.5rem; }
        .divider-line { display: block; width: 90px; height: 1px; background: linear-gradient(90deg, transparent, #d4af37, transparent); }
        .divider-diamond {
          display: block; width: 12px; height: 12px; background: #d4af37;
          transform: rotate(45deg); flex-shrink: 0;
          box-shadow: 0 0 24px rgba(212,175,55,0.8);
          animation: diamondPulse 2.5s ease-in-out infinite;
        }
        @keyframes diamondPulse {
          0%,100% { box-shadow: 0 0 24px rgba(212,175,55,0.8); }
          50%      { box-shadow: 0 0 44px rgba(212,175,55,1); }
        }

        .hero-sub {
          font-size: 1.08rem; color: rgba(255,248,235,0.8); max-width: 500px;
          margin: 0 auto; font-weight: 300; line-height: 1.75; font-style: italic;
        }

        .scroll-indicator {
          position: absolute; bottom: 38px; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 6px;
          color: rgba(255,255,255,0.45); z-index: 10;
        }
        .scroll-indicator span { font-size: 0.7rem; letter-spacing: 3px; text-transform: uppercase; }
        .scroll-arrow { color: #d4af37; animation: bounce 2s ease-in-out infinite; }
        @keyframes bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(8px); } }

        /* ════════════════════════════════
           SECTIONS BASE
        ════════════════════════════════ */
        .blog-section {
          position: relative; padding: 120px 0; overflow: hidden;
          opacity: 0; transform: translateY(40px);
          transition: opacity 0.85s ease, transform 0.85s ease;
        }
        .blog-section.visible { opacity: 1; transform: translateY(0); }

        .section-light { background: linear-gradient(180deg, #fdfaf6 0%, #f5f0e8 100%); }
        .section-dark  { background: linear-gradient(135deg, #08091a 0%, #131829 55%, #1e2540 100%); }

        .container { max-width: 1080px; margin: 0 auto; padding: 0 48px; }
        .section-container { position: relative; z-index: 5; text-align: center; display: flex; flex-direction: column; align-items: center; }

        /* Side decorative gold lines (light sections) */
        .side-deco {
          position: absolute; top: 50%; transform: translateY(-50%);
          width: 1px; height: 180px;
          background: linear-gradient(to bottom, transparent, rgba(212,175,55,0.35), transparent);
        }
        .side-deco.left  { left: 52px; }
        .side-deco.right { right: 52px; }

        /* ════════════════════════════════
           SECTION 1 — About-style title
        ════════════════════════════════ */
        .s1-bg-ring {
          position: absolute; border-radius: 50%; pointer-events: none;
          border: 1px solid rgba(212,175,55,0.1);
        }
        .ring-a { width: 540px; height: 540px; top: -100px; right: -120px; }
        .ring-b { width: 320px; height: 320px; bottom: -60px; left: -80px; }
        .ring-c { width: 460px; height: 460px; bottom: -80px; right: -100px; }

        .about-title-block {
          display: flex; flex-direction: column; align-items: center;
          margin-bottom: 2.8rem;
        }

        .about-vline {
          width: 1px; height: 64px;
          background: linear-gradient(to bottom, transparent, #d4af37, transparent);
          margin: 0 auto 2rem;
        }
        .about-vline + * { margin-top: 0; }
        .about-title-block .about-vline:last-child { margin: 2rem auto 0; }

        .about-eyebrow {
          display: inline-block; font-size: 0.78rem; font-weight: 600;
          letter-spacing: 0.22em; text-transform: uppercase; color: #b8921a;
          margin-bottom: 1.4rem;
        }

        .about-heading {
          font-family: 'Playfair Display', serif;
          display: flex; flex-direction: column; gap: 0.2rem;
          margin-bottom: 1.6rem;
        }
        .ah-small {
          display: block; font-size: clamp(1.1rem,2vw,1.5rem); font-weight: 300;
          letter-spacing: 8px; text-transform: uppercase; color: #3d3d3d;
        }
        .ah-accent {
          display: block; font-size: clamp(2.8rem,5.5vw,4.4rem); font-weight: 700;
          color: #1a2332; font-style: italic; line-height: 1.1;
        }

        .about-diamond-row {
          display: flex; align-items: center; justify-content: center;
          gap: 1rem; margin-bottom: 1.8rem;
        }
        .adl { display: block; width: 80px; height: 1px; background: linear-gradient(90deg, transparent, #d4af37, transparent); }
        .add {
          display: block; width: 10px; height: 10px; background: #d4af37;
          transform: rotate(45deg); flex-shrink: 0;
          box-shadow: 0 0 18px rgba(212,175,55,0.7);
          animation: diamondPulse 2.5s ease-in-out infinite;
        }

        .about-tagline {
          font-size: 1.12rem; line-height: 1.85; color: #3d4a5c;
          max-width: 640px; margin: 0 auto; font-style: italic;
        }

        .section-body-text {
          font-size: 0.97rem; line-height: 1.78; color: #5a6474; max-width: 580px; margin-bottom: 2.4rem;
        }
        .section-body-text.light { color: rgba(255,248,235,0.6); }

        .section-lead { font-size: 1.1rem; line-height: 1.85; color: #3d4a5c; max-width: 620px; margin-bottom: 1rem; }
        .section-lead.light { color: rgba(255,248,235,0.82); }

        /* ════════════════════════════════
           SECTION 2 & 4 — Dark
        ════════════════════════════════ */
        .dark-float-circle {
          position: absolute; border-radius: 50%; border: 1px solid rgba(212,175,55,0.15);
          pointer-events: none; animation: floatShape 22s ease-in-out infinite;
        }
        .dfc-tl { width: 280px; height: 280px; top: -80px; left: -80px; animation-delay: -4s; }
        .dfc-br { width: 200px; height: 200px; bottom: -50px; right: -50px; animation-delay: -11s; }
        .dfc-tr { width: 240px; height: 240px; top: -60px; right: -60px; animation-delay: -2s; }
        .dfc-bl { width: 180px; height: 180px; bottom: -40px; left: -40px; animation-delay: -8s; }

        .dark-center-glow {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
          width: 560px; height: 560px; pointer-events: none;
          background: radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%);
          animation: pulseGlow 5.5s ease-in-out infinite;
        }

        .dark-eyebrow {
          display: inline-block; font-size: 0.76rem; font-weight: 600;
          letter-spacing: 0.22em; text-transform: uppercase; color: #d4af37;
          margin-bottom: 1.2rem;
        }

        .dark-title-wrap { display: flex; flex-direction: column; align-items: center; margin-bottom: 2.8rem; }
        .dark-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem,5vw,3.8rem); font-weight: 700;
          color: #fff8eb; line-height: 1.15; margin-bottom: 1.2rem;
          letter-spacing: -0.01em;
        }
        .gold-bar {
          width: 64px; height: 3px; border-radius: 2px;
          background: linear-gradient(90deg, #d4af37, #e8c547, #d4af37);
          box-shadow: 0 0 14px rgba(212,175,55,0.5);
        }

        /* Tip cards (dark section) */
        .tips-cards {
          display: flex; gap: 24px; justify-content: center; margin-bottom: 2.8rem; flex-wrap: wrap;
        }
        .tip-card {
          display: flex; flex-direction: column; align-items: center; gap: 14px;
          padding: 28px 32px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(212,175,55,0.2);
          border-radius: 16px;
          backdrop-filter: blur(8px);
          transition: all 0.35s ease;
          min-width: 140px;
        }
        .tip-card:hover {
          background: rgba(212,175,55,0.08);
          border-color: rgba(212,175,55,0.5);
          transform: translateY(-6px);
          box-shadow: 0 12px 36px rgba(212,175,55,0.15);
        }
        .tip-card-icon {
          width: 58px; height: 58px; border-radius: 50%;
          background: linear-gradient(135deg, rgba(212,175,55,0.18), rgba(212,175,55,0.05));
          border: 1px solid rgba(212,175,55,0.35);
          display: flex; align-items: center; justify-content: center;
          color: #d4af37;
          transition: all 0.35s ease;
        }
        .tip-card:hover .tip-card-icon { box-shadow: 0 0 28px rgba(212,175,55,0.35); }
        .tip-card-label {
          font-size: 0.8rem; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; color: rgba(255,248,235,0.7);
        }

        /* ════════════════════════════════
           SECTION 3 — Light (Journey)
        ════════════════════════════════ */
        .light-eyebrow {
          display: inline-block; font-size: 0.78rem; font-weight: 600;
          letter-spacing: 0.22em; text-transform: uppercase; color: #b8921a;
          margin-bottom: 1rem;
        }
        .light-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem,5vw,3.8rem); font-weight: 700;
          color: #1a2332; line-height: 1.15; margin-bottom: 1.2rem;
          letter-spacing: -0.01em;
        }
        .gold-line-center {
          width: 64px; height: 3px; border-radius: 2px;
          background: linear-gradient(90deg, #d4af37, #e8c547, #d4af37);
          margin: 0 auto 3rem;
        }

        .journey-row {
          display: flex; align-items: center; justify-content: center;
          gap: 0; margin-bottom: 3rem; flex-wrap: wrap;
        }
        .journey-step {
          display: flex; flex-direction: column; align-items: center; gap: 10px;
          padding: 22px 30px;
          background: #fff;
          border: 1.5px solid rgba(184,146,26,0.2);
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(26,18,32,0.06);
          transition: all 0.3s ease;
          min-width: 110px;
        }
        .journey-step:hover {
          border-color: #b8921a;
          box-shadow: 0 8px 32px rgba(184,146,26,0.18);
          transform: translateY(-4px);
        }
        .journey-step-num {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem; font-weight: 700; color: #b8921a; line-height: 1;
        }
        .journey-step-label { font-size: 0.82rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #3d3d3d; }

        .journey-connector {
          display: flex; align-items: center; gap: 4px; padding: 0 8px;
        }
        .jc-line { width: 28px; height: 1px; background: linear-gradient(to right, rgba(184,146,26,0.4), rgba(184,146,26,0.2)); }
        .jc-diamond {
          width: 7px; height: 7px; background: #d4af37;
          transform: rotate(45deg); flex-shrink: 0;
          box-shadow: 0 0 8px rgba(212,175,55,0.5);
        }

        /* ════════════════════════════════
           SECTION 4 — Insight cards
        ════════════════════════════════ */
        .insight-grid {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 16px; margin-bottom: 2.8rem; max-width: 680px; width: 100%;
        }
        .insight-card {
          display: flex; flex-direction: column; align-items: center; gap: 12px;
          padding: 24px 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(212,175,55,0.18);
          border-radius: 14px;
          transition: all 0.3s ease;
        }
        .insight-card:hover {
          background: rgba(212,175,55,0.1);
          border-color: #d4af37;
          transform: translateY(-4px);
          box-shadow: 0 8px 28px rgba(212,175,55,0.18);
        }
        .insight-card-icon {
          width: 48px; height: 48px; border-radius: 50%;
          background: rgba(212,175,55,0.1); border: 1px solid rgba(212,175,55,0.3);
          display: flex; align-items: center; justify-content: center;
          color: #d4af37; transition: all 0.3s ease;
        }
        .insight-card:hover .insight-card-icon { background: rgba(212,175,55,0.2); box-shadow: 0 0 20px rgba(212,175,55,0.3); }
        .insight-card-label { font-size: 0.76rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,248,235,0.65); }

        /* ════════════════════════════════
           BUTTONS
        ════════════════════════════════ */
        .blog-btn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 15px 34px; font-size: 0.88rem; font-weight: 600;
          letter-spacing: 0.07em; text-decoration: none; border-radius: 50px;
          transition: all 0.32s ease; position: relative; overflow: hidden;
        }
        .blog-btn::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transform: translateX(-100%); transition: transform 0.5s ease;
        }
        .blog-btn:hover::before { transform: translateX(100%); }
        .blog-btn svg { transition: transform 0.3s ease; }
        .blog-btn:hover svg { transform: translateX(4px); }

        .blog-btn.gold {
          background: linear-gradient(135deg, #b8921a, #d4af37);
          color: #fff; box-shadow: 0 4px 22px rgba(184,146,26,0.38);
        }
        .blog-btn.gold:hover { transform: translateY(-2px); box-shadow: 0 10px 32px rgba(212,175,55,0.55); }

        .blog-btn.outline-gold {
          background: transparent; color: #d4af37; border: 1.5px solid rgba(212,175,55,0.5);
        }
        .blog-btn.outline-gold:hover {
          background: rgba(212,175,55,0.12); border-color: #d4af37;
          transform: translateY(-2px); box-shadow: 0 8px 26px rgba(212,175,55,0.2);
        }

        /* ════════════════════════════════
           RESPONSIVE
        ════════════════════════════════ */
        @media (max-width: 768px) {
          .blog-hero { height: 88vh; }
          .title-accent { font-size: 3rem; }
          .blog-section { padding: 80px 0; }
          .container { padding: 0 20px; }
          .side-deco { display: none; }
          .ah-accent { font-size: 2.6rem; }
          .dark-heading, .light-heading { font-size: 2.2rem; }
          .tips-cards { gap: 14px; }
          .tip-card { padding: 20px 24px; min-width: 120px; }
          .insight-grid { grid-template-columns: repeat(2, 1fr); max-width: 340px; }
          .journey-row { gap: 0; }
          .journey-step { padding: 16px 22px; min-width: 90px; }
          .blog-btn { width: 100%; justify-content: center; }
          .about-vline { height: 44px; }
          .shape-circle-lg, .shape-ring { display: none; }
        }

        @media (max-width: 480px) {
          .title-sub { letter-spacing: 5px; font-size: 1rem; }
          .title-accent { font-size: 2.4rem; }
          .journey-row { flex-direction: column; align-items: center; gap: 0; }
          .journey-connector { flex-direction: column; padding: 4px 0; }
          .jc-line { width: 1px; height: 18px; background: linear-gradient(to bottom, rgba(184,146,26,0.4), rgba(184,146,26,0.2)); }
          .tips-cards { flex-direction: column; align-items: center; }
          .insight-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
        }
      `}</style>
    </main>
  );
};

export default BlogContent;
