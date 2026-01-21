'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const DiningLivingContent = () => {
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
    <div className="dining-living-content">
      {/* Introduction Section */}
      <section
        className="dl-section intro-section"
        ref={(el) => { sectionsRef.current[0] = el; }}
      >
        <div className="container">
          <div className="intro-content">
            <p className="intro-lead">
              The living room and dining areas are the most significant spaces in the home.
            </p>
            <p className="intro-text">
              They sit at the heart of the house and at the center of its shared, public life. These spaces play a major role in our everyday routine and serve a wide range of uses — family time, hosting friends, or simply a place to unwind after a long day.
            </p>
            <p className="intro-text">
              They are also the first areas we experience when entering the home.
            </p>
            <p className="intro-highlight">
              For this reason, a thoughtfully designed shared living space has become an essential part of every home. As an interior designer, I create spaces that serve all members of the household — inviting, comfortable, and always ready to host, gather, or simply be lived in.
            </p>
          </div>
        </div>
      </section>

      {/* Living Room Style Section */}
      <section
        className="dl-section style-section"
        ref={(el) => { sectionsRef.current[1] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Living Room Design – In Your Style</h2>
          <div className="style-content">
            <p>
              Ahead of our consultation meeting and in preparation for your home renovation, I will send you a link to the Design By Choice | Interior Design inspiration board on the social platform Pinterest.
            </p>
            <p>
              The board is continuously updated with carefully curated inspiration from around the world, spanning architecture and interior design, and includes over 1,000 images personally selected by me.
            </p>
            <div className="board-info">
              <p>
                For your convenience, the board is organized by different areas of the home — from children's rooms to living room design inspiration, bathroom design, impactful entryways, kitchen design, lighting design, offices, workspaces, and more.
              </p>
              <p className="board-benefit">
                The inspiration you choose from the board helps me understand your preferences — what attracts you, what resonates with you, how minimalist you are, and the precise balance that feels right for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Style Gallery */}
      <section className="gallery-section">
        <div className="gallery-grid two-images">
          <div className="gallery-item">
            <Image
              src="/images/Residential Design/Living Room Design – In Your Style1.webp"
              alt="Living Room Design Style"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="gallery-item">
            <Image
              src="/images/Residential Design/Living Room Design – In Your Style2.webp"
              alt="Living Room Design Style"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Planning Section */}
      <section
        className="dl-section planning-section"
        ref={(el) => { sectionsRef.current[2] = el; }}
      >
        <div className="container">
          <h2 className="section-title">What Kind of Planning Is Right for You</h2>
          <div className="planning-content">
            <p>
              Often, we imagine a luxurious, beautifully designed living room and choose inspiration images that do not fully align with the reality of the existing space.
            </p>
            <p className="planning-highlight">
              Creating a successful connection between a client's vision and the actual layout of the living room requires experience, sensitivity, and creativity.
            </p>
            <p>
              It is essential to carefully consider the placement of large openings and glass doors leading to the garden or balcony, as well as the positioning of the television, speakers, and lighting.
            </p>
            <p className="planning-goal">
              The goal is to create a natural gathering space — one that supports everyday family life while also being comfortable and inviting for hosting and entertaining.
            </p>
          </div>
        </div>
      </section>

      {/* Planning Image */}
      <section className="gallery-section single-image">
        <div className="gallery-grid single">
          <div className="gallery-item">
            <Image
              src="/images/Residential Design/What Kind of Planning Is Right for You1.webp"
              alt="Living Room Planning"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Budget Section */}
      <section
        className="dl-section budget-section"
        ref={(el) => { sectionsRef.current[3] = el; }}
      >
        <div className="container">
          <h2 className="section-title">How Much Would You Like to Invest in Your Living Room Design?</h2>
          <div className="budget-content">
            <p className="budget-intro">
              Ultimately, everything comes down to budget.
            </p>
            <div className="budget-questions">
              <div className="budget-item">
                <span className="budget-marker"></span>
                <p>Would you like to incorporate high-end integrated sound systems and recessed lighting?</p>
              </div>
              <div className="budget-item">
                <span className="budget-marker"></span>
                <p>Is it important to you to include curtains, rugs, cushions, and thoughtfully designed textiles?</p>
              </div>
              <div className="budget-item">
                <span className="budget-marker"></span>
                <p>Does the comfort and quality of your sofa matter to you?</p>
              </div>
            </div>
            <div className="budget-wisdom">
              <p>
                Quality comes at a cost — but it also offers longevity and durability over time. Choosing high-quality fabrics and materials directly affects the overall investment.
              </p>
              <p className="budget-conclusion">
                For this reason, it is essential to define your budget clearly and design your living room accordingly — creating a space that balances comfort, aesthetics, and long-term value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Gallery */}
      <section className="gallery-section">
        <div className="gallery-grid three-images">
          <div className="gallery-item">
            <Image
              src="/images/Residential Design/How Much Would You Like to Invest in Your Living Room Design1.webp"
              alt="Living Room Investment"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="gallery-item">
            <Image
              src="/images/Residential Design/How Much Would You Like to Invest in Your Living Room Design2.webp"
              alt="Living Room Investment"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="gallery-item">
            <Image
              src="/images/Residential Design/How Much Would You Like to Invest in Your Living Room Design3.webp"
              alt="Living Room Investment"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Important Elements Section */}
      <section
        className="dl-section elements-section"
        ref={(el) => { sectionsRef.current[4] = el; }}
      >
        <div className="container">
          <h2 className="section-title">What Is Important to Include in Living Room Design?</h2>
          <div className="elements-grid">
            <div className="element-card">
              <h3>Seating</h3>
              <p>
                The main element in living room design is the seating — the sofa and armchairs. This is the largest and most dominant piece of furniture in the space, and it should never be compromised.
              </p>
              <p>
                I recommend choosing high-quality synthetic fabrics that are non-absorbent and easy to clean and maintain. The sofa should be properly proportioned to the size of the living room, offering both comfort and generosity. Its placement will strongly influence the overall layout and design of the space.
              </p>
            </div>
            <div className="element-card">
              <h3>Lighting</h3>
              <p>
                Living room lighting should integrate seamlessly with the overall lighting concept of the home. It should be soft rather than harsh, and ideally dimmable to allow different moods throughout the day and evening.
              </p>
            </div>
            <div className="element-card">
              <h3>Rugs</h3>
              <p>
                Defining creates scale. A rug frames the seating area, grounds the space, and adds warmth and a sense of comfort.
              </p>
            </div>
            <div className="element-card">
              <h3>Greenery</h3>
              <p>
                Try to incorporate meaningful, larger plants in two areas of the living room. They bring life, balance, and a natural presence into the space.
              </p>
            </div>
            <div className="element-card">
              <h3>Accessories</h3>
              <p>
                Avoid overloading the space with decorative objects. Choose a few meaningful pieces — not necessarily functional — that add character, beauty, and personality.
              </p>
            </div>
            <div className="element-card featured">
              <h3>Connection to the Outdoors</h3>
              <p>
                One of the most important elements in living room design is the connection to the outdoors. In a refined, well-designed living room, the transition to the garden, pool, or outdoor entertaining area is an integral part of the planning.
              </p>
              <p>
                Visual and physical continuity between indoors and outdoors creates a sense of openness, richness, and scale. Natural greenery and trees further enhance both the living room and its connection to the exterior.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focal Point Section */}
      <section
        className="dl-section focal-section"
        ref={(el) => { sectionsRef.current[5] = el; }}
      >
        <div className="container">
          <h2 className="section-title">The Focal Point and Gathering Area</h2>
          <div className="focal-content">
            <p className="focal-question">
              What kind of living room do you envision for yourself? What serves as the focal point and gathering center in your space?
            </p>
            <div className="focal-options">
              <span>Is it the television?</span>
              <span>A fireplace?</span>
              <span>A piano?</span>
              <span>A statement bookshelf?</span>
            </div>
            <p>
              In living room interior design, many people dream of a carefully designed feature wall — one that continues the architectural lines and design language of the home.
            </p>
            <p className="focal-approach">
              I enjoy integrating elements such as a fireplace, television, or custom library into this focal wall, and designing soft, layered lighting that draws the eye and creates a sense of emphasis and warmth.
            </p>
            <p className="focal-cta">
              Get in touch, and let's begin a conversation about your shared living spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Focal Point Gallery */}
      <section className="gallery-section focal-gallery">
        <div className="gallery-grid seven-images">
          <div className="gallery-item large">
            <Image
              src="/images/Residential Design/The Focal Point and Gathering Area1.webp"
              alt="Focal Point Design"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="gallery-item">
            <Image
              src="/images/Residential Design/The Focal Point and Gathering Area2.webp"
              alt="Focal Point Design"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="gallery-item">
            <Image
              src="/images/Residential Design/The Focal Point and Gathering Area3.webp"
              alt="Focal Point Design"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="gallery-item">
            <Image
              src="/images/Residential Design/The Focal Point and Gathering Area4.webp"
              alt="Focal Point Design"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="gallery-item">
            <Image
              src="/images/Residential Design/The Focal Point and Gathering Area5.webp"
              alt="Focal Point Design"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="gallery-item">
            <Image
              src="/images/Residential Design/The Focal Point and Gathering Area6.webp"
              alt="Focal Point Design"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="gallery-item">
            <Image
              src="/images/Residential Design/The Focal Point and Gathering Area7.webp"
              alt="Focal Point Design"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="dl-section cta-section"
        ref={(el) => { sectionsRef.current[6] = el; }}
        id="contact"
      >
        <div className="container">
          <h2 className="cta-title">Ready to Design Your Shared Living Spaces?</h2>
          <p className="cta-description">
            Let's create a living room that brings your family together and welcomes your guests.
          </p>
          <a href="/#contact-cta" className="cta-button-large">
            <span>Start Your Living Room Design</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default DiningLivingContent;
