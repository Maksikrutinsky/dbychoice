'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const GuidesContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="guides-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="hero-bg">
          <img src="/images/Kitchens1.webp" alt="Design Guides" />
          <div className="hero-overlay" />
        </div>
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <Link href="/blog" className="back-link">← Back to Blog</Link>
          <span className="page-label">03</span>
          <h1>Design<br /><span className="accent">Guides</span></h1>
          <p className="subtitle">Step by Step Journey</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="main-content">
        <div className="container">
          <div className="intro-block">
            <h2>Your Design Journey</h2>
            <p>
              Planning to design, renovate, or build a home—but not sure where to begin, what truly deserves your focus, or what should not be overlooked along the way?
            </p>
            <p>
              These guides were created to bring clarity to the process, sharpen decision-making, and guide you step by step through each space in the home and every phase of the project—grounded in experience, expertise, and a comprehensive understanding of the entire journey.
            </p>
          </div>

          <div className="guides-timeline">
            <div className="timeline-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Planning Phase</h3>
                <p>Understanding your needs, budget, and timeline. Creating a vision and defining priorities.</p>
                <img src="/images/FullDesign1.webp" alt="Planning" />
              </div>
            </div>

            <div className="timeline-connector" />

            <div className="timeline-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Design Development</h3>
                <p>Translating vision into concrete plans. Material selection, space planning, and detailed drawings.</p>
                <img src="/images/FullDesign2.webp" alt="Design" />
              </div>
            </div>

            <div className="timeline-connector" />

            <div className="timeline-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Execution & Delivery</h3>
                <p>Managing the build process, coordinating contractors, and ensuring quality at every step.</p>
                <img src="/images/Bedrooms1.webp" alt="Execution" />
              </div>
            </div>
          </div>

          <div className="spaces-section">
            <h2>Guides by Space</h2>
            <div className="spaces-grid">
              <div className="space-card">
                <img src="/images/Kitchens2.webp" alt="Kitchen" />
                <h4>Kitchen Design</h4>
              </div>
              <div className="space-card">
                <img src="/images/Bathrooms1.webp" alt="Bathroom" />
                <h4>Bathroom Design</h4>
              </div>
              <div className="space-card">
                <img src="/images/Bedrooms2.webp" alt="Bedroom" />
                <h4>Bedroom Design</h4>
              </div>
              <div className="space-card">
                <img src="/images/Dining2.webp" alt="Living Room" />
                <h4>Living & Dining</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .guides-page {
          min-height: 100vh;
          background: #0b162d;
          color: #fff;
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
          background: linear-gradient(to bottom, rgba(11, 22, 45, 0.7), rgba(11, 22, 45, 0.95));
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
          color: #f5deb3;
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
          color: #f5deb3;
          margin-bottom: 1.5rem;
        }

        .intro-block p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 1rem;
        }

        .guides-timeline {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-bottom: 100px;
        }

        .timeline-step {
          display: flex;
          gap: 40px;
          align-items: flex-start;
        }

        .step-number {
          font-size: 3rem;
          font-weight: 800;
          color: #d4af37;
          min-width: 80px;
        }

        .step-content {
          flex: 1;
          background: rgba(255, 255, 255, 0.03);
          padding: 30px;
          border-radius: 16px;
          border: 1px solid rgba(212, 175, 55, 0.2);
        }

        .step-content h3 {
          font-size: 1.5rem;
          font-family: 'Playfair Display', serif;
          color: #f5deb3;
          margin-bottom: 1rem;
        }

        .step-content p {
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1.5rem;
        }

        .step-content img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 8px;
        }

        .timeline-connector {
          width: 2px;
          height: 40px;
          background: linear-gradient(to bottom, #d4af37, transparent);
          margin-left: 40px;
        }

        .spaces-section h2 {
          font-size: 2rem;
          font-family: 'Playfair Display', serif;
          color: #f5deb3;
          text-align: center;
          margin-bottom: 40px;
        }

        .spaces-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .space-card {
          position: relative;
          height: 250px;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
        }

        .space-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .space-card:hover img {
          transform: scale(1.1);
        }

        .space-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(11, 22, 45, 0.8), transparent);
        }

        .space-card h4 {
          position: absolute;
          bottom: 20px;
          left: 20px;
          color: #fff;
          font-size: 1.1rem;
          z-index: 1;
        }

        @media (max-width: 1024px) {
          .spaces-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .page-hero {
            height: 50vh;
          }

          .timeline-step {
            flex-direction: column;
            gap: 15px;
          }

          .step-number {
            font-size: 2rem;
          }

          .timeline-connector {
            margin-left: 0;
            margin: 0 auto;
          }

          .spaces-grid {
            grid-template-columns: 1fr;
          }

          .space-card {
            height: 200px;
          }
        }
      `}</style>
    </main>
  );
};

export default GuidesContent;
