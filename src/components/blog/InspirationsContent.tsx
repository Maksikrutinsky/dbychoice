'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const InspirationsContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="inspirations-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="hero-bg">
          <img src="/images/Design Styles/eclectic/eclectic_07-final.webp" alt="Design Inspirations" />
          <div className="hero-overlay" />
        </div>
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <Link href="/blog" className="back-link">← Back to Blog</Link>
          <span className="page-label">01</span>
          <h1>Design Inspirations<br /><span className="accent">& Ideas</span></h1>
          <p className="subtitle">Studio Perspective</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="main-content">
        <div className="container">
          <div className="intro-block">
            <h2>A Global Source of Inspiration</h2>
            <p>
              The design I create is rooted in a global, multi-layered source of inspiration. It is an eclectic approach that connects nature, art, cultures, and historical eras—not as trends, but as a foundation for original, meaningful creation. In an open, global world, inspiration exists everywhere and is an integral part of my design language.
            </p>
          </div>

          <div className="inspiration-grid">
            <div className="inspiration-card large">
              <img src="/images/Design Styles/minimal/minimal_07-final.webp" alt="Nature Inspiration" />
              <div className="card-content">
                <h3>Nature & Organic Forms</h3>
                <p>Nature is a central source of inspiration in my work—through organic forms, soft lines, and the balance between material and movement, alongside the human body and its natural harmony.</p>
              </div>
            </div>

            <div className="inspiration-card">
              <img src="/images/Design Styles/industrial/industrial_07-final.webp" alt="Historical Styles" />
              <div className="card-content">
                <h3>Historical Reinterpretation</h3>
                <p>The past plays a role in contemporary spaces through refined reinterpretation of styles such as Bauhaus, retro, and the expressive spirit of the 1960s—clean, precise, yet rich in character.</p>
              </div>
            </div>

            <div className="inspiration-card">
              <img src="/images/Design Styles/traditional/traditional_07-final.webp" alt="Global Cultures" />
              <div className="card-content">
                <h3>Global Cultures</h3>
                <p>The clarity and restraint of Japanese minimalism, the color and ornamentation of India and Morocco, and the tactile, organic materiality of Africa.</p>
              </div>
            </div>
          </div>

          <div className="philosophy-section">
            <div className="philosophy-text">
              <h2>Creating an Experience</h2>
              <p>
                For me, interior design is the creation of an experience—one that tells a story, bridges personal journeys with the idea of home, and gives each space depth, character, and presence. These influences come together to create spaces that are not only visually refined, but deeply felt.
              </p>
            </div>
            <div className="philosophy-images">
              <img src="/images/Design Styles/rustic/rustic_07-final.webp" alt="Design Philosophy" />
              <img src="/images/Design Styles/desert-modern/desert-modern_07-final.webp" alt="Design Philosophy" />
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
          display: inline-block;
          color: #d4af37;
          text-decoration: none;
          margin-bottom: 2rem;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .back-link:hover {
          color: #f5deb3;
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
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .inspiration-card:hover {
          transform: translateY(-5px);
          border-color: rgba(212, 175, 55, 0.5);
        }

        .inspiration-card.large {
          grid-column: span 2;
        }

        .inspiration-card img {
          width: 100%;
          height: 300px;
          object-fit: cover;
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
        }

        .philosophy-images {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .philosophy-images img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-radius: 12px;
          border: 1px solid rgba(212, 175, 55, 0.2);
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

          .philosophy-images img {
            height: 180px;
          }
        }
      `}</style>
    </main>
  );
};

export default InspirationsContent;
