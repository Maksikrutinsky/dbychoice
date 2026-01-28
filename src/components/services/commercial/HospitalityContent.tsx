'use client';

import { useEffect, useRef } from 'react';

const HospitalityContent = () => {
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
    <div className="hospitality-content">
      {/* Introduction Section */}
      <section
        className="hp-section intro-section"
        ref={(el) => { sectionsRef.current[0] = el; }}
      >
        <div className="container">
          <div className="intro-content">
            <p className="intro-lead">
              Every hospitality space tells a story — and the guest experience begins long before check-in.
            </p>
            <p className="intro-text">
              Through thoughtful styling, a refined aesthetic, and a trained design eye, we transform hospitality environments into spaces that feel welcoming, elevated, and cohesive — without structural changes, demolition, or disruptive construction processes.
            </p>
            <p className="intro-highlight">
              Hospitality design focused on atmosphere, flow, and detail is one of the most effective and cost-efficient ways to enhance guest experience, strengthen brand identity, and elevate the overall perception of the space.
            </p>
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section
        className="hp-section what-is-section"
        ref={(el) => { sectionsRef.current[1] = el; }}
      >
        <div className="container">
          <h2 className="section-title">What Is Hospitality Design?</h2>
          <div className="what-is-content">
            <p className="what-is-intro">
              Hospitality design is the art of shaping guest experience through space. It focuses on visual impact, comfort, functionality, and emotional connection — using furniture, materials, lighting, color, textiles, and layout decisions to create environments that feel intentional and memorable.
            </p>
            <div className="what-is-grid">
              <div className="what-is-column no-changes">
                <h3>What We Don't Do</h3>
                <ul>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"/>
                      <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                    No structural changes
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"/>
                      <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                    No system replacements
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"/>
                      <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                    No construction downtime
                  </li>
                </ul>
              </div>
              <div className="what-is-column focus">
                <h3>What We Focus On</h3>
                <ul>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Making better use of existing furniture and spaces
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Deciding what to preserve, update, or replace
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Enhancing flow, clarity, and comfort
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Creating a cohesive atmosphere that reflects the brand
                  </li>
                </ul>
              </div>
            </div>
            <p className="what-is-conclusion">
              It is a powerful way to refresh and elevate hospitality spaces — efficiently, thoughtfully, and without turning the property into a construction site.
            </p>
          </div>
        </div>
      </section>

      {/* Seven Elements Section */}
      <section
        className="hp-section elements-section"
        ref={(el) => { sectionsRef.current[2] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Hospitality Styling vs. Interior Architecture</h2>
          <p className="elements-intro">
            While full hospitality interior design projects may involve architectural planning, infrastructure upgrades, contractors, and long timelines — hospitality styling focuses on the experience, not the structure.
          </p>
          <p className="elements-subtitle">Hospitality styling is built around seven key elements:</p>
          <div className="elements-grid">
            <div className="element-card">
              <div className="element-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                </svg>
              </div>
              <span>Furniture</span>
            </div>
            <div className="element-card">
              <div className="element-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"/>
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42"/>
                </svg>
              </div>
              <span>Color</span>
            </div>
            <div className="element-card">
              <div className="element-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18V5l12-2v13"/>
                  <circle cx="6" cy="18" r="3"/>
                  <circle cx="18" cy="16" r="3"/>
                </svg>
              </div>
              <span>Lighting</span>
            </div>
            <div className="element-card">
              <div className="element-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 3v18"/>
                  <path d="M18 3v18"/>
                  <path d="M6 12h12"/>
                </svg>
              </div>
              <span>Textiles</span>
            </div>
            <div className="element-card">
              <div className="element-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>
              <span>Art</span>
            </div>
            <div className="element-card">
              <div className="element-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <span>Accessories</span>
            </div>
            <div className="element-card">
              <div className="element-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                  <polyline points="2 17 12 22 22 17"/>
                  <polyline points="2 12 12 17 22 12"/>
                </svg>
              </div>
              <span>Materials & Finishes</span>
            </div>
          </div>
          <div className="approach-benefits">
            <h3>This approach makes hospitality design:</h3>
            <div className="benefits-grid">
              <div className="benefit-item">Faster to implement</div>
              <div className="benefit-item">More budget-efficient</div>
              <div className="benefit-item">Easier to execute without closing the space</div>
              <div className="benefit-item">Flexible for different property types and scales</div>
              <div className="benefit-item">Ideal for hotels, boutique accommodations, serviced apartments, and guest-focused environments</div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Approach Section */}
      <section
        className="hp-section approach-section"
        ref={(el) => { sectionsRef.current[3] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Studio Approach — Design By Choice</h2>
          <div className="approach-content">
            <p className="approach-intro">
              Each hospitality project begins with a deep understanding of the brand, the guests, and the intended experience.
            </p>
            <div className="approach-grid">
              <div className="approach-column">
                <h3>We Assess:</h3>
                <ul>
                  <li>The potential of the existing space</li>
                  <li>Brand values and visual language</li>
                  <li>Guest profile and usage patterns</li>
                  <li>Budget framework and timeline</li>
                  <li>What can be elevated using existing elements</li>
                  <li>Where strategic upgrades will have the strongest impact</li>
                </ul>
              </div>
              <div className="approach-column">
                <h3>Our Process Includes:</h3>
                <ul>
                  <li>Defining a clear design concept and atmosphere</li>
                  <li>Curating color palettes and material selections</li>
                  <li>Furniture sourcing and styling strategy</li>
                  <li>Refreshing or upgrading existing elements where possible</li>
                  <li>Coordinating lighting, finishes, and visual details</li>
                  <li>Complete styling and placement of every element</li>
                </ul>
              </div>
            </div>
            <div className="approach-result">
              <p>
                The result is a refined, layered, and coherent hospitality environment — carefully designed to welcome, engage, and leave a lasting impression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section
        className="hp-section why-works-section"
        ref={(el) => { sectionsRef.current[4] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Why Hospitality Styling Works</h2>
          <p className="why-intro">
            Hospitality styling enhances guest experience without pressure or disruption. It is ideal for properties seeking:
          </p>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p>A noticeable upgrade without renovation</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p>A welcoming, modern, and cohesive atmosphere</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p>Strong visual identity aligned with the brand</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p>A refreshed look for outdated interiors</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p>Smart use of existing assets combined with new elements</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p>A space that guests remember — and want to return to</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section
        className="hp-section deliverables-section"
        ref={(el) => { sectionsRef.current[5] = el; }}
      >
        <div className="container">
          <h2 className="section-title">What You Get</h2>
          <p className="deliverables-intro">With Design By Choice, hospitality design includes:</p>
          <div className="deliverables-grid">
            <div className="deliverable-card">
              <p>A complete visual and experiential transformation</p>
            </div>
            <div className="deliverable-card">
              <p>Professional spatial planning and aesthetic direction</p>
            </div>
            <div className="deliverable-card">
              <p>Refresh and optimization of existing furniture and elements</p>
            </div>
            <div className="deliverable-card">
              <p>Curated selection of new furniture, lighting, and accessories</p>
            </div>
            <div className="deliverable-card">
              <p>A cohesive atmosphere that feels welcoming, elevated, and timeless</p>
            </div>
            <div className="deliverable-card">
              <p>A space that reflects your brand identity</p>
            </div>
            <div className="deliverable-card highlight">
              <p>Minimal disruption, no construction, and no downtime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section
        className="hp-section audience-section"
        ref={(el) => { sectionsRef.current[6] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Who Is This Service For?</h2>
          <div className="audience-grid">
            <div className="audience-item">
              <div className="audience-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <p>Hotels and boutique accommodations</p>
            </div>
            <div className="audience-item">
              <div className="audience-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <p>Short-term rental properties</p>
            </div>
            <div className="audience-item">
              <div className="audience-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <p>Hospitality-focused residential projects</p>
            </div>
            <div className="audience-item">
              <div className="audience-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <p>Property owners seeking to elevate guest experience</p>
            </div>
            <div className="audience-item">
              <div className="audience-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <p>Brands looking to strengthen identity through space</p>
            </div>
            <div className="audience-item">
              <div className="audience-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <p>Projects requiring impact without renovation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="hp-section cta-section"
        ref={(el) => { sectionsRef.current[7] = el; }}
        id="contact"
      >
        <div className="container">
          <h2 className="cta-title">Book a Hospitality Design Consultation</h2>
          <p className="cta-description">
            Start elevating your guest experience with thoughtful, impactful design.
          </p>
          <a href="/#contact-cta" className="cta-button-large">
            <span>Start Elevating Your Guest Experience</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default HospitalityContent;
