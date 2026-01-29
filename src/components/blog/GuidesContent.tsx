'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useBlog } from '@/context/BlogContext';

const GuidesContent = () => {
  const { data } = useBlog();
  const [isVisible, setIsVisible] = useState(false);
  const pageData = data.pageHeros.guides;
  const content = data.pageContents.guides;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="guides-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="hero-bg">
          <img src={pageData.image} alt="Design Guides" />
          <div className="hero-overlay" />
        </div>
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <Link href="/blog" className="back-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Blog
          </Link>
          <span className="page-label">{pageData.label}</span>
          <h1>{pageData.title}<br /><span className="accent">{pageData.titleAccent}</span></h1>
          <p className="subtitle">{pageData.subtitle}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="main-content">
        <div className="container">
          <div className="intro-block">
            <h2>{content.introTitle}</h2>
            <p>{content.introText}</p>
          </div>

          <div className="guides-timeline">
            {content.cards.map((card, index) => (
              <div key={index}>
                <div className="timeline-step">
                  <div className="step-number">0{index + 1}</div>
                  <div className="step-content">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <img src={card.image} alt={card.title} />
                  </div>
                </div>
                {index < content.cards.length - 1 && <div className="timeline-connector" />}
              </div>
            ))}
          </div>

          <div className="philosophy-section">
            <h2>{content.philosophyTitle}</h2>
            <p>{content.philosophyText}</p>
            <Link href="/blog" className="blog-btn">
              <span>Explore More</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
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
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #d4af37;
          text-decoration: none;
          margin-bottom: 2rem;
          font-size: 0.9rem;
          padding: 10px 20px;
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 50px;
          transition: all 0.3s ease;
        }

        .back-link:hover {
          background: rgba(212, 175, 55, 0.1);
          border-color: #d4af37;
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
          font-style: italic;
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
          font-size: 1.15rem;
          line-height: 1.9;
          color: rgba(255, 255, 255, 0.85);
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
          text-shadow: 0 0 30px rgba(212, 175, 55, 0.3);
        }

        .step-content {
          flex: 1;
          background: rgba(255, 255, 255, 0.03);
          padding: 30px;
          border-radius: 16px;
          border: 1px solid rgba(212, 175, 55, 0.2);
          transition: all 0.4s ease;
        }

        .step-content:hover {
          border-color: rgba(212, 175, 55, 0.5);
          box-shadow: 0 10px 40px rgba(212, 175, 55, 0.1);
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
          transition: transform 0.6s ease;
        }

        .step-content:hover img {
          transform: scale(1.02);
        }

        .timeline-connector {
          width: 2px;
          height: 40px;
          background: linear-gradient(to bottom, #d4af37, transparent);
          margin-left: 40px;
        }

        .philosophy-section {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }

        .philosophy-section h2 {
          font-size: 2rem;
          font-family: 'Playfair Display', serif;
          color: #f5deb3;
          margin-bottom: 1.5rem;
        }

        .philosophy-section p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 2rem;
        }

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

          .blog-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </main>
  );
};

export default GuidesContent;
