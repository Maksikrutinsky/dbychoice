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

        <div className="blog-hero-shapes" aria-hidden="true">
          <div className="blog-hero-shape blog-shape-circle-lg" />
          <div className="blog-hero-shape blog-shape-circle-sm" />
          <div className="blog-hero-shape blog-shape-diamond" />
          <div className="blog-hero-shape blog-shape-ring" />
        </div>

        <div className="blog-hero-particles" aria-hidden="true">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`blog-particle blog-particle-${i + 1}`} />
          ))}
        </div>

        <div className="blog-hero-glow" aria-hidden="true" />

        <div className={`blog-hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="blog-hero-deco-line top" />
          <span className="blog-hero-eyebrow">{data.mainHero.tagline}</span>
          <h1>
            <span className="blog-title-sub">{data.mainHero.title}</span>
            <span className="blog-title-accent">{data.mainHero.titleAccent}</span>
          </h1>
          <div className="blog-hero-divider">
            <span className="blog-divider-line" />
            <span className="blog-divider-diamond" />
            <span className="blog-divider-line" />
          </div>
          <p className="blog-hero-sub">{data.mainHero.description}</p>
          <div className="blog-hero-deco-line bottom" />
        </div>

        <div className="blog-scroll-indicator">
          <span>Explore</span>
          <div className="blog-scroll-arrow">
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
      <section id="inspirations" className={`blog-section blog-section-light ${visibleSections.includes('inspirations') ? 'visible' : ''}`}>
        <div className="s1-bg-ring s1-ring-a" aria-hidden="true" />
        <div className="s1-bg-ring s1-ring-b" aria-hidden="true" />
        <div className="blog-container blog-section-container">

          <div className="blog-about-title-block">
            <div className="blog-about-vline" />
            <span className="blog-about-eyebrow">01 — {data.sectionIntros.inspiration.subtitle}</span>
            <h2 className="blog-about-heading">
              <span className="blog-ah-small">Design</span>
              <span className="blog-ah-accent">Inspirations</span>
            </h2>
            <div className="blog-about-diamond-row">
              <span className="blog-adl" /><span className="blog-add" /><span className="blog-adl" />
            </div>
            <p className="blog-about-tagline">{data.sectionIntros.inspiration.intro}</p>
            <div className="blog-about-vline bottom" />
          </div>

          <p className="blog-section-body">{data.sectionIntros.inspiration.secondaryText}</p>

          <Link href="/blog/inspirations" className="blog-btn blog-btn-gold">
            <span>Explore Inspirations</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        <div className="blog-side-deco left" />
        <div className="blog-side-deco right" />
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2 — TIPS
      ══════════════════════════════════════════ */}
      <section id="tips" className={`blog-section blog-section-dark ${visibleSections.includes('tips') ? 'visible' : ''}`}>
        <div className="blog-dark-float-circle dfc-tl" />
        <div className="blog-dark-float-circle dfc-br" />
        <div className="blog-dark-center-glow" />
        <div className="blog-container blog-section-container">

          <span className="blog-dark-eyebrow">02 — {data.sectionIntros.tips.subtitle}</span>
          <div className="blog-dark-title-wrap">
            <h2 className="blog-dark-heading">{data.sectionIntros.tips.title}</h2>
            <div className="blog-gold-bar" />
          </div>

          <div className="blog-tips-cards">
            {[
              { label: 'Space Planning', icon: <><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></> },
              { label: 'Lighting Design', icon: <><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/><path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></> },
              { label: 'Material Selection', icon: <><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M3 9H21M9 21V9" stroke="currentColor" strokeWidth="2"/></> },
            ].map(({ label, icon }) => (
              <div key={label} className="blog-tip-card">
                <div className="blog-tip-card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">{icon}</svg>
                </div>
                <span className="blog-tip-card-label">{label}</span>
              </div>
            ))}
          </div>

          <p className="blog-section-lead light">{data.sectionIntros.tips.intro}</p>
          <p className="blog-section-body light">{data.sectionIntros.tips.secondaryText}</p>

          <Link href="/blog/tips" className="blog-btn blog-btn-outline">
            <span>Discover Tips</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3 — GUIDES
      ══════════════════════════════════════════ */}
      <section id="guides" className={`blog-section blog-section-light ${visibleSections.includes('guides') ? 'visible' : ''}`}>
        <div className="s1-bg-ring s1-ring-c" aria-hidden="true" />
        <div className="blog-container blog-section-container">

          <span className="blog-light-eyebrow">03 — {data.sectionIntros.guides.subtitle}</span>
          <h2 className="blog-light-heading">{data.sectionIntros.guides.title}</h2>
          <div className="blog-gold-line-center" />

          <div className="blog-journey-row">
            <div className="blog-journey-step">
              <div className="blog-journey-step-num">01</div>
              <div className="blog-journey-step-label">Planning</div>
            </div>
            <div className="blog-journey-connector">
              <div className="blog-jc-line" /><div className="blog-jc-diamond" /><div className="blog-jc-line" />
            </div>
            <div className="blog-journey-step">
              <div className="blog-journey-step-num">02</div>
              <div className="blog-journey-step-label">Design</div>
            </div>
            <div className="blog-journey-connector">
              <div className="blog-jc-line" /><div className="blog-jc-diamond" /><div className="blog-jc-line" />
            </div>
            <div className="blog-journey-step">
              <div className="blog-journey-step-num">03</div>
              <div className="blog-journey-step-label">Execute</div>
            </div>
          </div>

          <p className="blog-section-lead">{data.sectionIntros.guides.intro}</p>
          <p className="blog-section-body">{data.sectionIntros.guides.secondaryText}</p>

          <Link href="/blog/guides" className="blog-btn blog-btn-gold">
            <span>View Guides</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        <div className="blog-side-deco left" />
        <div className="blog-side-deco right" />
      </section>

      {/* ══════════════════════════════════════════
          SECTION 4 — INSIGHTS
      ══════════════════════════════════════════ */}
      <section id="insights" className={`blog-section blog-section-dark ${visibleSections.includes('insights') ? 'visible' : ''}`}>
        <div className="blog-dark-float-circle dfc-tr" />
        <div className="blog-dark-float-circle dfc-bl" />
        <div className="blog-dark-center-glow" />
        <div className="blog-container blog-section-container">

          <span className="blog-dark-eyebrow">04 — {data.sectionIntros.insights.subtitle}</span>
          <div className="blog-dark-title-wrap">
            <h2 className="blog-dark-heading">{data.sectionIntros.insights.title}</h2>
            <div className="blog-gold-bar" />
          </div>

          <div className="blog-insight-grid">
            {[
              { label: 'Homes',       path: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
              { label: 'Offices',     path: 'M2 7h20v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7zM16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2' },
              { label: 'Hospitality', path: 'M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z' },
              { label: 'Retail',      path: 'M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0' },
            ].map(({ label, path }) => (
              <div key={label} className="blog-insight-card">
                <div className="blog-insight-card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={path} />
                  </svg>
                </div>
                <span className="blog-insight-card-label">{label}</span>
              </div>
            ))}
          </div>

          <p className="blog-section-lead light">{data.sectionIntros.insights.intro}</p>
          <p className="blog-section-body light">{data.sectionIntros.insights.secondaryText}</p>

          <Link href="/blog/insights" className="blog-btn blog-btn-outline">
            <span>Explore Insights</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

    </main>
  );
};

export default BlogContent;
