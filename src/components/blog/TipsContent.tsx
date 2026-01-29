'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const TipsContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="tips-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="hero-bg">
          <img src="/images/Dining1.webp" alt="Professional Tips" />
          <div className="hero-overlay" />
        </div>
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <Link href="/blog" className="back-link">← Back to Blog</Link>
          <span className="page-label">02</span>
          <h1>Professional<br /><span className="accent">Tips</span></h1>
          <p className="subtitle">Expert Design Guidance</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="main-content">
        <div className="container">
          <div className="intro-block">
            <h2>Insight, Not Trends</h2>
            <p>
              This space was created to share insight—not trends. Here, I open the door to the way I truly see design: the decisions that shape a home, the details that change how a space feels, and the questions worth asking before making them.
            </p>
            <p>
              These tips are meant to sharpen your perspective, inspire smarter choices, and help you see your home—and the design process—through a deeper, more intentional lens. If you're curious to understand what truly makes a space work, feel right, and last—this is where to begin.
            </p>
          </div>

          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Space Planning</h3>
              <p>Understanding flow, proportion, and the relationship between spaces is fundamental to good design.</p>
            </div>

            <div className="tip-card">
              <div className="tip-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Lighting Design</h3>
              <p>Light shapes our perception of space. Layer natural and artificial light for depth and ambiance.</p>
            </div>

            <div className="tip-card">
              <div className="tip-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M3 9H21M9 21V9" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Material Selection</h3>
              <p>The right materials bring texture, warmth, and longevity to your design.</p>
            </div>

            <div className="tip-card">
              <div className="tip-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Color Psychology</h3>
              <p>Colors affect mood and perception. Choose palettes that support the desired atmosphere.</p>
            </div>

            <div className="tip-card">
              <div className="tip-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Furniture Scale</h3>
              <p>Proper scale creates visual balance. Measure twice, decide once.</p>
            </div>

            <div className="tip-card">
              <div className="tip-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Art & Accessories</h3>
              <p>Personal touches transform a house into a home. Curate with intention.</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .tips-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8f6f3 0%, #efe9e1 100%);
          color: #0b162d;
        }

        .page-hero {
          position: relative;
          height: 70vh;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(11, 22, 45, 0.6), rgba(11, 22, 45, 0.9));
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 20px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease;
        }

        .hero-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .back-link {
          display: inline-block;
          color: #d4af37;
          text-decoration: none;
          margin-bottom: 2rem;
          font-size: 0.9rem;
        }

        .page-label {
          display: block;
          font-size: 5rem;
          font-weight: 800;
          color: rgba(212, 175, 55, 0.2);
          line-height: 1;
        }

        .hero-content h1 {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #fff;
        }

        .accent {
          color: #d4af37;
        }

        .subtitle {
          font-size: 1.1rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.7);
        }

        .main-content {
          padding: 100px 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .intro-block {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 80px;
        }

        .intro-block h2 {
          font-size: 2.5rem;
          font-family: 'Playfair Display', serif;
          color: #0b162d;
          margin-bottom: 1.5rem;
        }

        .intro-block p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #444;
          margin-bottom: 1rem;
        }

        .tips-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .tip-card {
          background: #fff;
          padding: 40px 30px;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .tip-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(212, 175, 55, 0.15);
        }

        .tip-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #d4af37, #f5deb3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: #0b162d;
        }

        .tip-card h3 {
          font-size: 1.3rem;
          font-family: 'Playfair Display', serif;
          margin-bottom: 1rem;
          color: #0b162d;
        }

        .tip-card p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #666;
        }

        @media (max-width: 1024px) {
          .tips-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .page-hero {
            height: 50vh;
          }

          .tips-grid {
            grid-template-columns: 1fr;
          }

          .tip-card {
            padding: 30px 20px;
          }
        }
      `}</style>
    </main>
  );
};

export default TipsContent;
