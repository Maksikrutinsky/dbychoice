'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useBlog } from '@/context/BlogContext';

const InspirationsContent = () => {
  const { data } = useBlog();
  const [isVisible, setIsVisible] = useState(false);
  const pageData = data.pageHeros.inspiration;
  const content = data.pageContents.inspiration;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="inspirations-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="hero-bg">
          <img src={pageData.image} alt="Design Inspirations" />
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

          <div className="inspiration-grid">
            {content.cards.map((card, index) => (
              <div key={index} className={`inspiration-card ${index === 0 ? 'large' : ''}`}>
                <img src={card.image} alt={card.title} />
                <div className="card-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="philosophy-section">
            <div className="philosophy-text">
              <h2>{content.philosophyTitle}</h2>
              <p>{content.philosophyText}</p>
              <Link href="/blog" className="blog-btn">
                <span>Explore More</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            <div className="philosophy-visual">
              <div className="visual-decoration">
                <div className="deco-circle circle-1" />
                <div className="deco-circle circle-2" />
                <div className="deco-line" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .inspirations-page {
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

        .inspiration-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-bottom: 100px;
        }

        .inspiration-card {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(212, 175, 55, 0.2);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .inspiration-card:hover {
          transform: translateY(-8px);
          border-color: rgba(212, 175, 55, 0.5);
          box-shadow: 0 20px 50px rgba(212, 175, 55, 0.15);
        }

        .inspiration-card.large {
          grid-column: span 2;
        }

        .inspiration-card img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .inspiration-card:hover img {
          transform: scale(1.05);
        }

        .inspiration-card.large img {
          height: 400px;
        }

        .card-content {
          padding: 30px;
        }

        .card-content h3 {
          font-size: 1.5rem;
          font-family: 'Playfair Display', serif;
          color: #f5deb3;
          margin-bottom: 1rem;
        }

        .card-content p {
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.8);
        }

        .philosophy-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .philosophy-text h2 {
          font-size: 2rem;
          font-family: 'Playfair Display', serif;
          color: #f5deb3;
          margin-bottom: 1.5rem;
        }

        .philosophy-text p {
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

        .philosophy-visual {
          position: relative;
          height: 300px;
        }

        .visual-decoration {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .deco-circle {
          position: absolute;
          border: 2px solid rgba(212, 175, 55, 0.3);
          border-radius: 50%;
        }

        .circle-1 {
          width: 200px;
          height: 200px;
          top: 20%;
          left: 20%;
          animation: float 8s ease-in-out infinite;
        }

        .circle-2 {
          width: 150px;
          height: 150px;
          bottom: 10%;
          right: 20%;
          border-color: rgba(212, 175, 55, 0.2);
          animation: float 6s ease-in-out infinite reverse;
        }

        .deco-line {
          position: absolute;
          width: 150px;
          height: 2px;
          background: linear-gradient(90deg, #d4af37, transparent);
          top: 50%;
          left: 30%;
          transform: rotate(45deg);
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, 20px); }
        }

        @media (max-width: 768px) {
          .page-hero {
            height: 50vh;
          }

          .inspiration-grid {
            grid-template-columns: 1fr;
          }

          .inspiration-card.large {
            grid-column: auto;
          }

          .philosophy-section {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .philosophy-visual {
            display: none;
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

export default InspirationsContent;
