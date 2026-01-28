'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const BedroomsContent = () => {
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
    <div className="bedrooms-content">
      {/* Introduction Section */}
      <section
        className="bd-section intro-section"
        ref={(el) => { sectionsRef.current[0] = el; }}
      >
        <div className="container">
          <div className="intro-content">
            <p className="intro-lead">
              Our bedroom is the place where we open and close each day — our most private and intimate space.
            </p>
            <p className="intro-text">
              The design of a bedroom has a significant impact on mood, intimacy, and even the quality of our sleep.
            </p>
            <p className="intro-text">
              Bedroom design should reflect who you are, while feeling calm, generous, and nurturing.
            </p>
          </div>
        </div>
      </section>

      {/* Layout Section */}
      <section
        className="bd-section layout-section"
        ref={(el) => { sectionsRef.current[1] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Creating the Right Layout</h2>
          <div className="layout-content">
            <p>
              The first step in designing a bedroom is creating the right layout — considering windows, access to a garden or balcony, the entrance door, and the natural flow of the space.
            </p>
            <p className="highlight-text">
              Furniture placement must strike a careful balance: maximum privacy in the sleeping area, alongside smart and efficient storage solutions that support everyday living.
            </p>
          </div>
        </div>
      </section>

      {/* Tailored Design Section */}
      <section
        className="bd-section tailored-section"
        ref={(el) => { sectionsRef.current[2] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Tailored Bedroom Design</h2>
          <div className="tailored-content">
            <p>
              The design of bedrooms within a home is shaped by the people who live there — their number, age, and the unique design language chosen for each space.
            </p>
            <p>
              Every bedroom is approached individually, while maintaining harmony with the overall aesthetic of the home.
            </p>
            <p className="categories-intro">
              Bedroom design may be developed into specific categories:
            </p>
            <div className="categories-grid">
              <div className="category-item">
                <div className="category-icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 4v16"/>
                    <path d="M22 4v16"/>
                    <path d="M2 12h20"/>
                    <path d="M2 20h20"/>
                    <path d="M5 12V4h14v8"/>
                  </svg>
                </div>
                <h3>Master Bedrooms</h3>
              </div>
              <div className="category-item">
                <div className="category-icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                    <line x1="9" y1="9" x2="9.01" y2="9"/>
                    <line x1="15" y1="9" x2="15.01" y2="9"/>
                  </svg>
                </div>
                <h3>Children's Bedrooms</h3>
              </div>
              <div className="category-item">
                <div className="category-icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3>Guest Bedrooms</h3>
              </div>
            </div>
            <p className="categories-footer">
              Each space receives thoughtful planning, attention to detail, and a design that supports comfort, rest, and emotional well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Private Homes Section */}
      <section
        className="bd-section private-homes-section"
        ref={(el) => { sectionsRef.current[3] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Bedrooms in Private Homes</h2>
          <div className="private-homes-content">
            <p>
              When designing private homes, it is recommended to plan all bedrooms with en-suite bathrooms and generous wardrobe spaces.
            </p>
            <p>
              This approach allows the rooms to function comfortably both for growing children who need privacy and personal space, and as guest suites when needed.
            </p>
            <p>
              When the overall floor area is more limited, I recommend locating the parents' bedroom separately from the children's bedrooms, and integrating a spacious en-suite bathroom along with a well-designed walk-in closet.
            </p>
            <p>
              The children's bedrooms can then be arranged around a shared family bathroom, or designed with shared bathrooms in a Jack-and-Jill layout.
            </p>
          </div>
        </div>
      </section>

      {/* Private Homes Gallery */}
      <section className="gallery-section">
        <div className="gallery-grid four-images">
          <div className="gallery-item">
            <Image
              src="/images/Residential Design/Bedrooms in Private Homes1.webp"
              alt="Bedrooms in Private Homes"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="gallery-item">
            <Image
              src="/images/Residential Design/Bedrooms in Private Homes2.webp"
              alt="Bedrooms in Private Homes"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="gallery-item">
            <Image
              src="/images/Residential Design/Bedrooms in Private Homes3.webp"
              alt="Bedrooms in Private Homes"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="gallery-item">
            <Image
              src="/images/Residential Design/Bedrooms in Private Homes4.webp"
              alt="Bedrooms in Private Homes"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Children's Bedroom Section */}
      <section
        className="bd-section children-section"
        ref={(el) => { sectionsRef.current[4] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Children's Bedroom Interior Design</h2>
          <div className="children-content">
            <p>
              When designing children's bedrooms, I recommend a timeless approach that does not age with the child and allows the room to remain functional without the need for redesign every few years.
            </p>
            <p className="highlight-text">
              Children's room planning requires forward thinking — preparing lighting, electrical outlets, and storage solutions that support both early childhood and the teenage years, while allowing the space to evolve naturally with the child.
            </p>
          </div>
        </div>
      </section>

      {/* Children's Bedroom Gallery */}
      <section className="gallery-section">
        <div className="gallery-grid four-images">
          <div className="gallery-item">
            <Image
              src="/images/Residential Design/Children’s Bedroom Interior Design1.webp"
              alt="Children's Bedroom Interior Design"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="gallery-item">
            <Image
              src="/images/Residential Design/Children’s Bedroom Interior Design2.webp"
              alt="Children's Bedroom Interior Design"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="gallery-item">
            <Image
              src="/images/Residential Design/Children’s Bedroom Interior Design3.webp"
              alt="Children's Bedroom Interior Design"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="gallery-item">
            <Image
              src="/images/Residential Design/Children’s Bedroom Interior Design4.webp"
              alt="Children's Bedroom Interior Design"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Master Bedroom Section */}
      <section
        className="bd-section master-section"
        ref={(el) => { sectionsRef.current[5] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Master Bedroom Design</h2>
          <div className="master-content">
            <p className="master-lead">
              Designing a comfortable and indulgent master bedroom requires creating multiple lighting scenarios and thoughtfully adapting the space to support quality time as a couple.
            </p>

            <div className="lighting-info">
              <h3>Lighting Considerations</h3>
              <p>
                Exposure to natural daylight is essential in areas such as the vanity, walk-in closet, and dressing zone, while technical and professional lighting is integrated for evening and nighttime use.
              </p>
              <p>
                In the sleeping area, personal reading lights are important, alongside soft, romantic lighting that promotes calm, intimacy, and relaxation.
              </p>
            </div>

            <div className="planning-info">
              <h3>Thoughtful Planning</h3>
              <p>
                A thorough and early understanding of the daily habits and routines of the couple sharing the bedroom allows for precise planning and the development of thoughtful solutions to potential challenges.
              </p>
              <div className="examples-list">
                <div className="example-item">
                  <span className="example-marker"></span>
                  <p>When one partner wakes up early in the morning to prepare for work, it is important to design a dressing or preparation area that does not disturb the other partner's sleep.</p>
                </div>
                <div className="example-item">
                  <span className="example-marker"></span>
                  <p>The use of glass partitions in the en-suite bathroom may not suit couples who require a high level of privacy or who go to sleep at different times.</p>
                </div>
              </div>
            </div>

            <p className="master-conclusion">
              Your bedroom has a profound influence on your mood and the flow of your day. For this reason, careful planning and thoughtful design lead to a significantly higher quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* Master Bedroom Image */}
      <section className="gallery-section single-image">
        <div className="gallery-grid single">
          <div className="gallery-item">
            <Image
              src="/images/Residential Design/Master Bedroom Design1.webp"
              alt="Master Bedroom Design"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="bd-section cta-section"
        ref={(el) => { sectionsRef.current[6] = el; }}
        id="contact"
      >
        <div className="container">
          <h2 className="cta-title">Ready to Design Your Perfect Bedroom?</h2>
          <p className="cta-description">
            Let's create a personal sanctuary — a bedroom that supports rest, renewal, and your unique lifestyle.
          </p>
          <a href="/#contact-cta" className="cta-button-large">
            <span>Start Your Bedroom Design</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default BedroomsContent;
