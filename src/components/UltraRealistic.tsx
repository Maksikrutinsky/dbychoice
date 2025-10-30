const UltraRealistic = () => {
  return (
    <section id="ultra-realistic" className="ultra-realistic-section">
      <div className="ultra-grid-bg"></div>
      <div className="ultra-container">
        <div className="ultra-badge">NEXT-GEN DESIGN</div>
        <h2 className="ultra-mega-title">
          <span className="title-line">Ultra-Realistic</span>
          <span className="title-line gradient-text">Experience</span>
        </h2>
        <p className="ultra-lead">
          Images, visualizations, and virtual elements so real, you can see, feel, and influence them in real-time.
        </p>

        <div className="features-cards">
          <div className="feature-card-modern" data-feature="realism">
            <div className="card-number">01</div>
            <div className="card-icon-modern">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="2" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="card-title-modern">Unmatched Realism</h3>
            <p className="card-desc-modern">Every material, color, and texture looks completely authentic.</p>
          </div>

          <div className="feature-card-modern" data-feature="interactive">
            <div className="card-number">02</div>
            <div className="card-icon-modern">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M7 12L12 7L17 12L12 17L7 12Z" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="2" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="card-title-modern">Interactive & Adaptive</h3>
            <p className="card-desc-modern">Change, choose, and feel the changes instantly.</p>
          </div>

          <div className="feature-card-modern" data-feature="mobile">
            <div className="card-number">03</div>
            <div className="card-icon-modern">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="9" y1="18" x2="15" y2="18" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
            <h3 className="card-title-modern">Cross-Platform</h3>
            <p className="card-desc-modern">Be part of the process from anywhere, anytime.</p>
          </div>

          <div className="feature-card-modern" data-feature="development">
            <div className="card-number">04</div>
            <div className="card-icon-modern">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
            <h3 className="card-title-modern">Fast & Efficient</h3>
            <p className="card-desc-modern">Faster, more accurate, perfect customer experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltraRealistic;

