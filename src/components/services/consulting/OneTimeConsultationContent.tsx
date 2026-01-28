'use client';

import { useEffect, useRef } from 'react';

const OneTimeConsultationContent = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="otc-content">
      {/* Introduction Section */}
      <section
        className="otc-section intro-section"
        ref={(el) => { sectionsRef.current[0] = el; }}
      >
        <div className="container">
          <h2 className="section-title">A Personalized 1:1 Design Consultation</h2>
          <div className="intro-content">
            <p className="intro-lead">
              In this focused one-on-one session, we explore your challenges, your lifestyle, and your design aspirations.
            </p>
            <p className="intro-text">
              By the end of the consultation, you will clearly understand which design service is right for you — whether it's a full interior design project, a partial upgrade, a pre-sale or pre-purchase consultation, or a complete home refresh.
            </p>
            <p className="intro-highlight">
              Find your direction here.
            </p>
          </div>
        </div>
      </section>

      {/* What Is Direction Session Section */}
      <section
        className="otc-section direction-section"
        ref={(el) => { sectionsRef.current[1] = el; }}
      >
        <div className="container">
          <h2 className="section-title">What Is the Direction Session&trade;?</h2>
          <div className="direction-content">
            <p className="direction-intro">
              The Direction Session&trade; is a high-value, one-time consultation designed to give you clarity before you commit to a major project or make costly decisions.
            </p>
            <p className="direction-text">
              Instead of guessing, feeling overwhelmed, or not knowing where to begin, this session provides confidence, focus, and a clear design direction tailored specifically to your goals, space, and lifestyle.
            </p>
            <div className="direction-highlight">
              <p>
                It is the fastest and smartest way to understand what your home truly needs — and what it doesn't.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Is This Right For You Section */}
      <section
        className="otc-section right-for-you-section"
        ref={(el) => { sectionsRef.current[2] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Is This the Right Service for You?</h2>
          <div className="right-for-you-content">
            <p className="section-intro">This session helps you determine whether you need:</p>
            <div className="services-grid">
              <div className="service-item">
                <div className="service-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <p>A full interior design project</p>
              </div>
              <div className="service-item">
                <div className="service-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                  </svg>
                </div>
                <p>A partial home refresh</p>
              </div>
              <div className="service-item">
                <div className="service-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <p>A home-staging-style upgrade before selling</p>
              </div>
              <div className="service-item">
                <div className="service-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                </div>
                <p>A pre-purchase design review before buying</p>
              </div>
              <div className="service-item">
                <div className="service-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
                    <rect x="9" y="9" width="6" height="6"/>
                  </svg>
                </div>
                <p>A home styling and furnishing plan</p>
              </div>
              <div className="service-item">
                <div className="service-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                    <line x1="9" y1="9" x2="9.01" y2="9"/>
                    <line x1="15" y1="9" x2="15.01" y2="9"/>
                  </svg>
                </div>
                <p>Or a strategic combination of these</p>
              </div>
            </div>
            <p className="section-conclusion">
              You leave knowing exactly which path is right for you — without wasting time, money, or energy.
            </p>
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section
        className="otc-section who-section"
        ref={(el) => { sectionsRef.current[3] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Who Is This For?</h2>
          <div className="who-content">
            <p className="section-intro">This service is ideal for:</p>
            <div className="who-grid">
              <div className="who-card">
                <div className="who-marker"></div>
                <p>Homeowners who feel stuck or overwhelmed and want professional guidance</p>
              </div>
              <div className="who-card">
                <div className="who-marker"></div>
                <p>Clients unsure which service they need — full renovation, refresh, or new furniture</p>
              </div>
              <div className="who-card">
                <div className="who-marker"></div>
                <p>Sellers preparing a home for the market and wanting smart, value-driven updates</p>
              </div>
              <div className="who-card">
                <div className="who-marker"></div>
                <p>Buyers who want to understand a property's true potential before committing</p>
              </div>
              <div className="who-card">
                <div className="who-marker"></div>
                <p>Clients with a defined budget who want to invest wisely and avoid costly mistakes</p>
              </div>
              <div className="who-card">
                <div className="who-marker"></div>
                <p>Anyone seeking fast, clear, professional design direction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Cover Section */}
      <section
        className="otc-section cover-section"
        ref={(el) => { sectionsRef.current[4] = el; }}
      >
        <div className="container">
          <h2 className="section-title">What We Cover During the Session</h2>
          <p className="section-intro">During the consultation, we explore:</p>
          <div className="cover-grid">
            <div className="cover-card">
              <div className="cover-header">
                <div className="cover-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h3>Your Pain Points</h3>
              </div>
              <p>What isn't working in your home — emotionally, visually, or functionally.</p>
            </div>
            <div className="cover-card">
              <div className="cover-header">
                <div className="cover-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
                  </svg>
                </div>
                <h3>Your Lifestyle & Vision</h3>
              </div>
              <p>How you want to live in your space now and in the future.</p>
            </div>
            <div className="cover-card">
              <div className="cover-header">
                <div className="cover-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <h3>Your Priorities & Budget</h3>
              </div>
              <p>What matters most and where investment will create the greatest impact.</p>
            </div>
            <div className="cover-card">
              <div className="cover-header">
                <div className="cover-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <line x1="3" y1="9" x2="21" y2="9"/>
                    <line x1="9" y1="21" x2="9" y2="9"/>
                  </svg>
                </div>
                <h3>The Potential of the Space</h3>
              </div>
              <p>Layout, flow, sightlines, lighting, materials, and furnishing opportunities.</p>
            </div>
            <div className="cover-card featured">
              <div className="cover-header">
                <div className="cover-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </div>
                <h3>Your Goals</h3>
              </div>
              <p>Whether you're selling, buying, renovating, or refreshing — each path requires a different strategy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Receive Section */}
      <section
        className="otc-section receive-section"
        ref={(el) => { sectionsRef.current[5] = el; }}
      >
        <div className="container">
          <h2 className="section-title">What You Receive After the Session</h2>
          <div className="receive-content">
            <p className="section-intro">After the consultation, you receive a personalized Direction Summary, including:</p>
            <div className="receive-list">
              <div className="receive-item">
                <div className="receive-marker">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p>A clear recommendation for the right service</p>
              </div>
              <div className="receive-item">
                <div className="receive-marker">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p>A prioritized action plan with practical next steps</p>
              </div>
              <div className="receive-item">
                <div className="receive-marker">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p>Professional insights on layout, materials, furniture, lighting, color, and flow</p>
              </div>
              <div className="receive-item">
                <div className="receive-marker">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p>Budget guidance — where to invest and where to hold back</p>
              </div>
              <div className="receive-item">
                <div className="receive-marker">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p>Timeline expectations for each possible path</p>
              </div>
              <div className="receive-item">
                <div className="receive-marker">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p>Optional tech-driven visual insights using advanced tools such as VR previews or 3D spatial assessments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section
        className="otc-section matters-section"
        ref={(el) => { sectionsRef.current[6] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Why This Session Matters</h2>
          <div className="matters-content">
            <p className="section-intro">Many clients make avoidable mistakes, such as:</p>
            <div className="mistakes-grid">
              <div className="mistake-item">
                <div className="mistake-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="15" y1="9" x2="9" y2="15"/>
                    <line x1="9" y1="9" x2="15" y2="15"/>
                  </svg>
                </div>
                <p>Buying furniture that doesn't fit the space</p>
              </div>
              <div className="mistake-item">
                <div className="mistake-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="15" y1="9" x2="9" y2="15"/>
                    <line x1="9" y1="9" x2="15" y2="15"/>
                  </svg>
                </div>
                <p>Choosing paint colors that don't work with the lighting</p>
              </div>
              <div className="mistake-item">
                <div className="mistake-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="15" y1="9" x2="9" y2="15"/>
                    <line x1="9" y1="9" x2="15" y2="15"/>
                  </svg>
                </div>
                <p>Renovating the wrong room first</p>
              </div>
              <div className="mistake-item">
                <div className="mistake-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="15" y1="9" x2="9" y2="15"/>
                    <line x1="9" y1="9" x2="15" y2="15"/>
                  </svg>
                </div>
                <p>Investing in upgrades buyers don't value</p>
              </div>
              <div className="mistake-item">
                <div className="mistake-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="15" y1="9" x2="9" y2="15"/>
                    <line x1="9" y1="9" x2="15" y2="15"/>
                  </svg>
                </div>
                <p>Falling in love with a home that doesn't support their lifestyle</p>
              </div>
            </div>
            <div className="matters-highlight">
              <p className="highlight-title">The Direction Session&trade; prevents these mistakes.</p>
              <p>It gives you a designer's perspective, strategic thinking, and clarity — from the very beginning.</p>
            </div>
            <div className="testimonial-box">
              <p>"Finally understanding what my home needs — and why."</p>
              <span>— What clients often describe the session as</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section
        className="otc-section choose-section"
        ref={(el) => { sectionsRef.current[7] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Why Choose Design By Choice?</h2>
          <p className="section-intro">Because I combine:</p>
          <div className="choose-grid">
            <div className="choose-card">
              <div className="choose-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h3>Strong Spatial Vision</h3>
              <p>Seeing potential others miss</p>
            </div>
            <div className="choose-card">
              <div className="choose-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                  <polyline points="2 17 12 22 22 17"/>
                  <polyline points="2 12 12 17 22 12"/>
                </svg>
              </div>
              <h3>Technical Expertise</h3>
              <p>Layout, lighting, flow, and materials</p>
            </div>
            <div className="choose-card">
              <div className="choose-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h3>Real Estate Insight</h3>
              <p>Understanding what adds value in Arizona markets</p>
            </div>
            <div className="choose-card">
              <div className="choose-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
                  <rect x="9" y="9" width="6" height="6"/>
                  <line x1="9" y1="1" x2="9" y2="4"/>
                  <line x1="15" y1="1" x2="15" y2="4"/>
                  <line x1="9" y1="20" x2="9" y2="23"/>
                  <line x1="15" y1="20" x2="15" y2="23"/>
                </svg>
              </div>
              <h3>Modern Technology</h3>
              <p>VR previews and interactive design tools</p>
            </div>
            <div className="choose-card">
              <div className="choose-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <h3>Practical Thinking</h3>
              <p>Real solutions for real lives</p>
            </div>
            <div className="choose-card">
              <div className="choose-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3>A Holistic Approach</h3>
              <p>Beauty, function, and long-term results</p>
            </div>
          </div>
          <div className="choose-statement">
            <p>I don't push you toward a service you don't need.</p>
            <p className="emphasis">I recommend the solution that will deliver the best outcome for your specific goals.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        className="otc-section process-section"
        ref={(el) => { sectionsRef.current[8] = el; }}
      >
        <div className="container">
          <h2 className="section-title">How the Session Works</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Book your consultation</h3>
                <p>(Zoom or in-person, depending on location)</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Complete a short design questionnaire</h3>
                <p>This helps me understand your space and objectives in advance.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>60–75 minute expert session</h3>
                <p>We analyze, explore, and define your design direction.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Receive your Direction Summary</h3>
                <p>Clear next steps. No confusion. No guessing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section
        className="otc-section outcome-section"
        ref={(el) => { sectionsRef.current[9] = el; }}
      >
        <div className="container">
          <h2 className="section-title">The Outcome: Clarity, Confidence, Direction</h2>
          <div className="outcome-content">
            <p className="section-intro">By the end of the session, you will know:</p>
            <div className="outcome-grid">
              <div className="outcome-item">
                <div className="outcome-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p>What your home truly needs</p>
              </div>
              <div className="outcome-item">
                <div className="outcome-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p>What to prioritize</p>
              </div>
              <div className="outcome-item">
                <div className="outcome-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p>What to avoid</p>
              </div>
              <div className="outcome-item">
                <div className="outcome-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p>What budget is realistic</p>
              </div>
              <div className="outcome-item">
                <div className="outcome-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p>Which service is right for you</p>
              </div>
              <div className="outcome-item">
                <div className="outcome-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p>What your next step should be — and why</p>
              </div>
            </div>
            <div className="outcome-highlight">
              <p>This session delivers peace of mind and a clear, actionable plan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="otc-section cta-section"
        ref={(el) => { sectionsRef.current[10] = el; }}
        id="contact"
      >
        <div className="container">
          <h2 className="cta-title">Book Your Direction Session&trade;</h2>
          <p className="cta-description">
            Your home, your dream, your path. Let's define it together.
          </p>
          <a href="/#contact-cta" className="cta-button-large">
            <span>Schedule Your Consultation</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default OneTimeConsultationContent;
