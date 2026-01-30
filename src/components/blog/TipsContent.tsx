'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useBlog } from '@/context/BlogContext';

const TipsContent = () => {
  const { data } = useBlog();
  const [isVisible, setIsVisible] = useState(false);
  const pageData = data.pageHeros.tips;
  const content = data.pageContents.tips;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="tips-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="hero-bg">
          <img src={pageData.image} alt="Professional Tips" />
          <div className="hero-overlay" />
        </div>
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
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

          <div className="tips-grid">
            {content.cards.map((card, index) => (
              <div key={index} className="tip-card">
                <div className="tip-number">0{index + 1}</div>
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
            </div>
          </div>

          <div className="back-section">
            <Link href="/blog" className="back-link-styled">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Blog
            </Link>
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
          color: #0b162d;
          margin-bottom: 1.5rem;
        }

        .intro-block p {
          font-size: 1.15rem;
          line-height: 1.9;
          color: rgba(11, 22, 45, 0.8);
        }

        .tips-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-bottom: 100px;
        }

        .tip-card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(212, 175, 55, 0.2);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .tip-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(11, 22, 45, 0.15);
        }

        .tip-number {
          position: absolute;
          top: 20px;
          left: 20px;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #d4af37, #c4a030);
          color: #0b162d;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.1rem;
          z-index: 2;
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);
        }

        .tip-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .tip-card:hover img {
          transform: scale(1.05);
        }

        .card-content {
          padding: 25px;
        }

        .card-content h3 {
          font-size: 1.3rem;
          font-family: 'Playfair Display', serif;
          color: #0b162d;
          margin-bottom: 0.75rem;
        }

        .card-content p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: rgba(11, 22, 45, 0.7);
        }

        .philosophy-section {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }

        .philosophy-text h2 {
          font-size: 2rem;
          font-family: 'Playfair Display', serif;
          color: #0b162d;
          margin-bottom: 1.5rem;
        }

        .philosophy-text p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: rgba(11, 22, 45, 0.8);
          margin-bottom: 2rem;
        }

        .blog-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          background: linear-gradient(135deg, #0b162d 0%, #1a2a4a 100%);
          color: #d4af37;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          border-radius: 50px;
          border: 2px solid #d4af37;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(11, 22, 45, 0.2);
        }

        .blog-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .blog-btn:hover::before {
          left: 100%;
        }

        .blog-btn:hover {
          background: linear-gradient(135deg, #d4af37 0%, #c4a030 100%);
          color: #0b162d;
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 30px rgba(212, 175, 55, 0.4);
        }

        .blog-btn svg {
          transition: transform 0.3s ease;
        }

        .blog-btn:hover svg {
          transform: translateX(5px);
        }

        .back-section {
          text-align: center;
          margin-top: 80px;
          padding-top: 40px;
          border-top: 1px solid rgba(212, 175, 55, 0.2);
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

          .blog-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </main>
  );
};

export default TipsContent;
