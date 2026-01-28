'use client';

import { useEffect, useRef } from 'react';

const OfficeSpacesContent = () => {
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
    <div className="office-spaces-content">
      {/* Introduction Section */}
      <section
        className="os-section intro-section"
        ref={(el) => { sectionsRef.current[0] = el; }}
      >
        <div className="container">
          <div className="intro-content">
            <p className="intro-lead">
              Office design is a complex and in-depth process whose purpose is to tell the company's story — reflecting its vision, character, values, and organizational atmosphere.
            </p>
            <p className="intro-text">
              We plan and design office spaces that are fully tailored to the company, its employees, and its clients. The goal is to create environments that differentiate the business, align with its branding, support effective communication, and encourage creativity, engagement, and a strong sense of commitment.
            </p>
            <p className="intro-highlight">
              Design inspiration is drawn from what the company wishes to communicate — both professionally and on a personal level — internally and externally.
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive Process Section */}
      <section
        className="os-section process-section"
        ref={(el) => { sectionsRef.current[1] = el; }}
      >
        <div className="container">
          <h2 className="section-title">A Comprehensive Design Process</h2>
          <div className="process-content">
            <p className="process-intro">
              Through a thoughtful and thorough planning process, we examine the many parameters involved in office design, beginning with collaborative thinking and concept development.
            </p>
            <div className="process-grid">
              <div className="process-item">
                <div className="process-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <line x1="3" y1="9" x2="21" y2="9"/>
                    <line x1="9" y1="21" x2="9" y2="9"/>
                  </svg>
                </div>
                <p>Space planning and division into offices and shared areas</p>
              </div>
              <div className="process-item">
                <div className="process-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="13.5" cy="6.5" r="4"/>
                    <circle cx="19" cy="17" r="3"/>
                    <circle cx="6" cy="17" r="4"/>
                  </svg>
                </div>
                <p>Selection of materials, colors, and textures</p>
              </div>
              <div className="process-item">
                <div className="process-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <rect x="8" y="3" width="8" height="12" rx="2"/>
                  </svg>
                </div>
                <p>Furniture procurement and complementary styling</p>
              </div>
              <div className="process-item">
                <div className="process-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <p>Coordination through to employee move-in</p>
              </div>
            </div>
            <p className="process-conclusion">
              By the end of the process, all elements come together into a single, cohesive space — meticulously designed and executed — a place that supports productivity, creativity, success, and everyday comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Planning Details Section */}
      <section
        className="os-section planning-section"
        ref={(el) => { sectionsRef.current[2] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Office Interior Design Planning</h2>
          <div className="planning-content">
            <p className="planning-intro">
              An office interior design plan includes a complete and comprehensive set of drawings and specifications, including:
            </p>
            <div className="planning-list">
              <div className="planning-item">
                <div className="planning-marker"></div>
                <p>Architectural layout</p>
              </div>
              <div className="planning-item">
                <div className="planning-marker"></div>
                <p>Electrical planning</p>
              </div>
              <div className="planning-item">
                <div className="planning-marker"></div>
                <p>Flooring, ceiling, and wall design</p>
              </div>
            </div>
            <p className="planning-text">
              The process also includes the selection of all interior finishes — floors, walls, special claddings, furniture, lighting, curtains, and even accessories that complete the atmosphere.
            </p>
            <p className="planning-text">
              In many cases, we also manage the selection of contractors, guide their work, and coordinate between all execution teams.
            </p>
            <div className="planning-highlight">
              <p>
                Whether the project involves renovating an existing office or designing a workspace from scratch — starting at the shell stage — we manage the entire project with creativity, transparency, and close collaboration with the company's management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Parameters Section */}
      <section
        className="os-section parameters-section"
        ref={(el) => { sectionsRef.current[3] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Key Parameters in Business Workspace Planning</h2>
          <div className="parameters-content">
            <p className="parameters-intro">
              Designing a professional work environment requires a deep and thoughtful examination of the company's existing organizational culture, and an understanding of what it wishes to communicate to employees, clients, and suppliers upon entering the space.
            </p>
            <p className="parameters-statement">
              The organization's values and vision should be clearly reflected in the design and planning of the office.
            </p>
            <div className="parameters-grid">
              <div className="parameter-card">
                <div className="parameter-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <p>Analysis of work processes and relationships between departments and teams</p>
              </div>
              <div className="parameter-card">
                <div className="parameter-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <p>Budget evaluation for office design and planning</p>
              </div>
              <div className="parameter-card">
                <div className="parameter-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                    <polyline points="17 6 23 6 23 12"/>
                  </svg>
                </div>
                <p>Consideration of projected growth — in space and employees — and flexibility for future changes</p>
              </div>
            </div>
            <div className="parameters-conclusion">
              <p>
                Office design is a complex and challenging task that requires clear alignment of expectations, in-depth analysis of company needs, and a deep understanding of its future vision, work culture, and business differentiation.
              </p>
              <p className="emphasis">
                A precise and well-adapted interior design is a strategic asset — an integral part of achieving the company's long-term goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section
        className="os-section principles-section"
        ref={(el) => { sectionsRef.current[4] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Fundamental Principles of Office Design</h2>
          <div className="principles-grid">
            <div className="principle-card">
              <div className="principle-header">
                <div className="principle-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5"/>
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                  </svg>
                </div>
                <h3>Color</h3>
              </div>
              <p>Office color selection is inspired by the company's branding and the message leadership wishes to convey. Colors have a powerful impact on atmosphere, emotion, and perception.</p>
            </div>
            <div className="principle-card">
              <div className="principle-header">
                <div className="principle-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                    <polyline points="2 17 12 22 22 17"/>
                    <polyline points="2 12 12 17 22 12"/>
                  </svg>
                </div>
                <h3>Harmony</h3>
              </div>
              <p>Office design requires attention to every detail in order to create a cohesive, well-balanced, and thoughtfully planned environment.</p>
            </div>
            <div className="principle-card">
              <div className="principle-header">
                <div className="principle-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </div>
                <h3>Natural Light & Ventilation</h3>
              </div>
              <p>We prioritize the use of natural light and shading solutions to reduce heat during summer months, along with efficient ventilation and openings that allow airflow from multiple directions.</p>
            </div>
            <div className="principle-card">
              <div className="principle-header">
                <div className="principle-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3>Work Environment Variety</h3>
              </div>
              <p>Office design includes a range of working environments — from open-space areas to café-style informal seating, relaxation and play zones, and smaller rooms for one-on-one meetings. Flexible, multi-purpose office design encourages collaboration, teamwork, and creative thinking.</p>
            </div>
            <div className="principle-card featured">
              <div className="principle-header">
                <div className="principle-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
                    <rect x="9" y="9" width="6" height="6"/>
                    <line x1="9" y1="1" x2="9" y2="4"/>
                    <line x1="15" y1="1" x2="15" y2="4"/>
                    <line x1="9" y1="20" x2="9" y2="23"/>
                    <line x1="15" y1="20" x2="15" y2="23"/>
                    <line x1="20" y1="9" x2="23" y2="9"/>
                    <line x1="20" y1="14" x2="23" y2="14"/>
                    <line x1="1" y1="9" x2="4" y2="9"/>
                    <line x1="1" y1="14" x2="4" y2="14"/>
                  </svg>
                </div>
                <h3>Innovation & Technology</h3>
              </div>
              <p>Office design allows for the integration of advanced solutions such as acoustic seating pods, flexible partitions, standing desks, quiet rooms, and private workspaces. Our studio stays continuously up to date with advanced construction methods, innovative materials, and contemporary solutions in office design.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="os-section cta-section"
        ref={(el) => { sectionsRef.current[5] = el; }}
        id="contact"
      >
        <div className="container">
          <h2 className="cta-title">Ready to Transform Your Workspace?</h2>
          <p className="cta-description">
            Let's create an office environment that reflects your company's vision, values, and culture — a space that inspires productivity and success.
          </p>
          <a href="/#contact-cta" className="cta-button-large">
            <span>Start Your Office Design Project</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default OfficeSpacesContent;
