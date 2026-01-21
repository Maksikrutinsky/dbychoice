'use client';

import { useEffect, useRef } from 'react';

const KitchensContent = () => {
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
    <div className="kitchens-content">
      {/* Introduction Section */}
      <section
        className="kt-section intro-section"
        ref={(el) => { sectionsRef.current[0] = el; }}
      >
        <div className="container">
          <div className="intro-content">
            <p className="intro-lead">
              The kitchen is the heart of the home.
            </p>
            <p className="intro-text">
              Food has a unique ability to bring people closer, and in a family home we seek to create opportunities for shared time — moments to reconnect, catch up on life, and simply be together.
            </p>
            <p className="intro-text">
              There is nothing more natural than sharing a piece of cake over a cup of coffee, or cooking dinner together at the end of the day.
            </p>
          </div>
        </div>
      </section>

      {/* Modern Kitchens Section */}
      <section
        className="kt-section modern-section"
        ref={(el) => { sectionsRef.current[1] = el; }}
      >
        <div className="container">
          <div className="modern-content">
            <p>
              Today, designed kitchens have become a standard. In every home renovation or apartment design, the kitchen is carefully planned and custom-designed according to the lifestyle, needs, and daily habits of those who live in the home.
            </p>
            <p>
              In recent years, there has also been a growing demand for <strong>outdoor kitchens</strong>. Many homes now include two kitchen spaces — an indoor kitchen and an outdoor one.
            </p>
            <p className="highlight-text">
              The world of kitchen design offers a wide range of styles, sophisticated hardware solutions, and thoughtful answers for every functional need.
            </p>
          </div>
        </div>
      </section>

      {/* Beating Heart Section */}
      <section
        className="kt-section beating-heart-section"
        ref={(el) => { sectionsRef.current[2] = el; }}
      >
        <div className="container">
          <h2 className="section-title">The Beating Heart of the Home</h2>
          <div className="heart-content">
            <p className="heart-lead">
              The kitchen is not just a place to cook — it is where life happens.
            </p>
            <p>
              The most meaningful conversations take place around the countertop, during morning coffee or a shared evening meal. In a world where the kitchen has become the center of the home's design, its planning must combine aesthetics, functionality, and a deeply personal lifestyle approach.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section
        className="kt-section why-choose-section"
        ref={(el) => { sectionsRef.current[3] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Why Choose My Studio for Your Kitchen Design</h2>
          <p className="section-subtitle">More Than a Beautiful Kitchen</p>
          <div className="why-intro">
            <p>
              When you choose to work with me as your interior designer, you receive a holistic design process — one that understands not only how your kitchen should look, but how it should function within your daily life and within the overall aesthetic of your home.
            </p>
            <p>
              Unlike kitchen companies or renovation contractors, I guide you through a complete process that includes:
            </p>
          </div>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7"/>
                  <rect x="14" y="3" width="7" height="7"/>
                  <rect x="14" y="14" width="7" height="7"/>
                  <rect x="3" y="14" width="7" height="7"/>
                </svg>
              </div>
              <h3>Smart, Ergonomic Planning</h3>
              <p>Tailored to your cooking routine and the design of the entire home.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
                  <line x1="8" y1="2" x2="8" y2="18"/>
                  <line x1="16" y1="6" x2="16" y2="22"/>
                </svg>
              </div>
              <h3>3D and VR Visualizations</h3>
              <p>The option to step into your future kitchen before it is built.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3>Durable, Innovative Materials</h3>
              <p>Careful selection of sustainable materials adapted to the desert climate of Arizona.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <h3>Custom Cabinetry Design</h3>
              <p>Unique details, fronts, and hardware not found in standard catalogs.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Personal Supervision</h3>
              <p>Coordination with suppliers, carpenters, and contractors until a precise and refined result is achieved.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cabinetry Section */}
      <section
        className="kt-section cabinetry-section"
        ref={(el) => { sectionsRef.current[4] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Kitchen Cabinetry Planning</h2>
          <div className="cabinetry-content">
            <p className="cabinetry-intro">
              Cabinetry is the foundation of every well-designed kitchen — from the cabinet structure and fronts to the hardware and the smallest details that make a significant difference.
            </p>
            <p className="cabinetry-lead">
              I plan kitchen cabinetry with long-term use in mind — looking 10 to 15 years ahead — with an emphasis on:
            </p>
            <div className="cabinetry-grid">
              <div className="cabinetry-item">
                <span className="cabinetry-marker"></span>
                <p>High-quality wooden cabinet bodies</p>
              </div>
              <div className="cabinetry-item">
                <span className="cabinetry-marker"></span>
                <p>Custom-designed fronts</p>
              </div>
              <div className="cabinetry-item">
                <span className="cabinetry-marker"></span>
                <p>Advanced hardware that opens and closes smoothly and quietly</p>
              </div>
              <div className="cabinetry-item">
                <span className="cabinetry-marker"></span>
                <p>Hidden storage solutions that maintain a clean, minimalist appearance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appliances Section */}
      <section
        className="kt-section appliances-section"
        ref={(el) => { sectionsRef.current[5] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Appliances – Where Technology Meets Design</h2>
          <div className="appliances-content">
            <p>
              In luxury kitchen planning, every appliance is carefully integrated and often concealed, allowing the overall design to remain clean and elegant.
            </p>
            <p>
              I incorporate built-in solutions for refrigerators, dishwashers, ovens, and even coffee machines — creating a unified, refined design language without visual overload.
            </p>
          </div>
        </div>
      </section>

      {/* Work Surfaces Section */}
      <section
        className="kt-section surfaces-section"
        ref={(el) => { sectionsRef.current[6] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Work Surfaces & Materials</h2>
          <p className="section-intro">
            I select durable and innovative materials that offer both a sense of luxury and maximum everyday comfort:
          </p>
          <div className="surfaces-grid">
            <div className="surface-card">
              <div className="surface-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <line x1="9" y1="3" x2="9" y2="21"/>
                </svg>
              </div>
              <h3>Advanced Porcelain</h3>
              <p>Surfaces resistant to heat, scratches, and stains</p>
            </div>
            <div className="surface-card">
              <div className="surface-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <h3>Natural Quartz & Granite</h3>
              <p>For a rich, timeless look</p>
            </div>
            <div className="surface-card">
              <div className="surface-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <ellipse cx="12" cy="5" rx="9" ry="3"/>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                </svg>
              </div>
              <h3>Integrated Sinks</h3>
              <p>Designed as part of the work surface</p>
            </div>
            <div className="surface-card">
              <div className="surface-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v6m0 0l4-4m-4 4L8 4"/>
                  <path d="M12 22v-6m0 0l4 4m-4-4l-4 4"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3>Pull-out Faucets</h3>
              <p>Precisely chosen finishes that align with all fixtures</p>
            </div>
          </div>
        </div>
      </section>

      {/* Outdoor Kitchens Section */}
      <section
        className="kt-section outdoor-section"
        ref={(el) => { sectionsRef.current[7] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Outdoor Kitchens</h2>
          <div className="outdoor-content">
            <p className="outdoor-lead">
              The kitchen no longer belongs only inside the home.
            </p>
            <p>
              For clients in Arizona, I also design modern outdoor kitchens that extend the home's interior design language into the garden or pool area — using heat-resistant materials, corrosion-resistant finishes, and highly practical solutions for hosting and entertaining.
            </p>
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section
        className="kt-section why-me-section"
        ref={(el) => { sectionsRef.current[8] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Why Choose Me?</h2>
          <div className="why-me-content">
            <p className="why-me-lead">
              Because I don't just design kitchens — I create experiences.
            </p>
            <p>
              My vision is to offer you a space that is practical, luxurious, and emotionally engaging, through intelligent materials, advanced technology, and meticulous attention to even the smallest details.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="kt-section cta-section"
        ref={(el) => { sectionsRef.current[9] = el; }}
        id="contact"
      >
        <div className="container">
          <h2 className="cta-title">Ready to Design Your Dream Kitchen?</h2>
          <p className="cta-description">
            Let's create the heart of your home — a kitchen that's as functional as it is beautiful.
          </p>
          <a href="/#contact-cta" className="cta-button-large">
            <span>Start Your Kitchen Design</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default KitchensContent;
