'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const InsightsContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="insights-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="hero-bg">
          <img src="/images/OFFICE SPACES.webp" alt="Design Insights" />
          <div className="hero-overlay" />
        </div>
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <Link href="/blog" className="back-link">← Back to Blog</Link>
          <span className="page-label">04</span>
          <h1>Design<br /><span className="accent">Insights</span></h1>
          <p className="subtitle">For Homes & Businesses</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="main-content">
        <div className="container">
          <div className="intro-block">
            <h2>Thoughtful Design for Every Space</h2>
            <p>
              Thoughtful design of every space—whether at home or in a business—is key to creating a place that feels right and meaningful. How can you maximize the potential of each room, tailor the environment to your lifestyle or business needs, and incorporate details that make the space truly work for you?
            </p>
            <p>
              In this section, you'll find tips, ideas, and inspiration for every space—from private rooms in your home to offices, cafés, retail stores, or hotels. Learn how to transform the challenge of business design into a creative journey that sparks imagination and delivers a unique, memorable experience for everyone who enters.
            </p>
          </div>

          <div className="category-section">
            <h2>For Your Home</h2>
            <div className="category-grid">
              <div className="category-card">
                <img src="/images/home.webp" alt="Living Spaces" />
                <div className="card-overlay">
                  <h3>Living Spaces</h3>
                  <p>Create comfort and connection in your everyday spaces</p>
                </div>
              </div>
              <div className="category-card">
                <img src="/images/Kitchens1.webp" alt="Private Rooms" />
                <div className="card-overlay">
                  <h3>Private Rooms</h3>
                  <p>Personal retreats designed for rest and rejuvenation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="category-section">
            <h2>For Your Business</h2>
            <div className="category-grid four-cols">
              <div className="category-card">
                <img src="/images/OFFICE SPACES.webp" alt="Offices" />
                <div className="card-overlay">
                  <h3>Offices</h3>
                  <p>Productivity meets inspiration</p>
                </div>
              </div>
              <div className="category-card">
                <img src="/images/RETAIL DESIGN.webp" alt="Retail" />
                <div className="card-overlay">
                  <h3>Retail</h3>
                  <p>Customer experiences that convert</p>
                </div>
              </div>
              <div className="category-card">
                <img src="/images/HOSPITALITY.webp" alt="Hospitality" />
                <div className="card-overlay">
                  <h3>Hospitality</h3>
                  <p>Memorable guest experiences</p>
                </div>
              </div>
              <div className="category-card">
                <img src="/images/Dining1.webp" alt="Restaurants" />
                <div className="card-overlay">
                  <h3>Restaurants</h3>
                  <p>Atmosphere that enhances dining</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .insights-page {
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

        .category-section {
          margin-bottom: 80px;
        }

        .category-section h2 {
          font-size: 1.8rem;
          font-family: 'Playfair Display', serif;
          color: #0b162d;
          margin-bottom: 30px;
          padding-left: 20px;
          border-left: 3px solid #d4af37;
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .category-grid.four-cols {
          grid-template-columns: repeat(4, 1fr);
        }

        .category-card {
          position: relative;
          height: 300px;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
        }

        .category-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .category-card:hover img {
          transform: scale(1.1);
        }

        .card-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 30px;
          background: linear-gradient(to top, rgba(11, 22, 45, 0.9), transparent);
          color: #fff;
        }

        .card-overlay h3 {
          font-size: 1.4rem;
          font-family: 'Playfair Display', serif;
          margin-bottom: 0.5rem;
          color: #f5deb3;
        }

        .card-overlay p {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
        }

        @media (max-width: 1024px) {
          .category-grid.four-cols {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .page-hero {
            height: 50vh;
          }

          .category-grid,
          .category-grid.four-cols {
            grid-template-columns: 1fr;
          }

          .category-card {
            height: 250px;
          }
        }
      `}</style>
    </main>
  );
};

export default InsightsContent;
