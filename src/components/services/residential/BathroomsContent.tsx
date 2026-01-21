'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const BathroomsContent = () => {
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
    <div className="bathrooms-content">
      {/* Introduction Section */}
      <section
        className="br-section intro-section"
        ref={(el) => { sectionsRef.current[0] = el; }}
      >
        <div className="container">
          <div className="intro-content">
            <p className="intro-quote">
              That was how a phone call began with a client whose home renovation and interior design I had completed just a few months earlier.
            </p>
            <p className="intro-lead">
              A thoughtfully designed and carefully planned bathroom significantly improves our quality of life.
            </p>
            <p className="intro-text">
              Think about it — is there any other moment during your day when you are truly alone with yourself? No phones, no screens, no interruptions, and no responsibilities from home or work.
            </p>
            <p className="intro-highlight">
              In modern living, luxury bathroom design takes on a deeper meaning — becoming a private, restorative space for calm, reflection, and renewal.
            </p>
          </div>
        </div>
      </section>

      {/* Why Shower Design Section */}
      <section
        className="br-section shower-design-section"
        ref={(el) => { sectionsRef.current[1] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Why Do You Need a Shower Design?</h2>
          <div className="shower-content">
            <p>
              Shower design requires functionality, maximum comfort, and planning a dedicated space for each of our shower fixtures.
            </p>
            <p>
              Shower design may sound simple, but there are some important key rules so you can get the respite you deserve, easy maintenance, and value for your investment.
            </p>
            <p className="highlight-text">
              A well-designed shower is a great opportunity for gathering and relaxation. Shower design is not only about beauty but also about the ease of use and your experience in it. It is important that you are comfortable and that everything you need is in your shower.
            </p>
          </div>
        </div>
      </section>

      {/* Shower Design Image */}
      <section className="gallery-section single-image">
        <div className="gallery-grid single">
          <div className="gallery-item">
            <Image
              src="/images/Residential Design/Why do you need a shower design1.webp"
              alt="Shower Design"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Custom Bathroom Section */}
      <section
        className="br-section custom-section"
        ref={(el) => { sectionsRef.current[2] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Custom Bathroom Design</h2>
          <div className="custom-content">
            <p>
              Planning a designer bathroom requires, as with any planning, prior clarification. Are there small children in the house? Are the children of similar ages? Will the children share the central bathroom?
            </p>
            <p>
              I recommend planning the house so that each bedroom also has its own bathroom, to provide complete privacy and allow the room to adapt even to later ages.
            </p>
            <p className="jack-jill">
              If there is no space, we will design shared bathrooms in a Jack and Jill style.
            </p>
          </div>
        </div>
      </section>

      {/* Custom Bathroom Image */}
      <section className="gallery-section single-image">
        <div className="gallery-grid single">
          <div className="gallery-item">
            <Image
              src="/images/Residential Design/Custom bathroom design1.webp"
              alt="Custom Bathroom Design"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Luxury Bathroom Section */}
      <section
        className="br-section luxury-section"
        ref={(el) => { sectionsRef.current[3] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Luxury Bathroom Design</h2>
          <div className="luxury-content">
            <p>
              Many homes today are designed with hammams, spas, saunas, jacuzzis and advanced systems that allow you to relax from the stresses of everyday life, and give your body and mind a break.
            </p>
            <p>
              The technology invested in plumbing systems and accessories is moving forward and enabling a more comfortable and better user experience. In addition to a wide selection of shades and colors for toilets, sinks and faucets, you can also find plenty of designs and innovations in everything.
            </p>
            <div className="designer-tip">
              <h3>Why Hire a Designer?</h3>
              <p>
                When designing a luxurious bathroom, it is important to hire a designer who is up to date with all the latest systems, and knows the installation details, delivery time, and the advantages and disadvantages of each product, so that you can choose the best one for you.
              </p>
              <p className="tip-conclusion">
                A carefully designed and planned bathroom significantly improves our quality of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Bathroom Image */}
      <section className="gallery-section single-image">
        <div className="gallery-grid single">
          <div className="gallery-item">
            <Image
              src="/images/Residential Design/Luxury bathroom design1.webp"
              alt="Luxury Bathroom Design"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Beautiful Combinations Section */}
      <section
        className="br-section combinations-section"
        ref={(el) => { sectionsRef.current[4] = el; }}
      >
        <div className="container">
          <h2 className="section-title">The Most Beautiful Combinations in Modern Shower Design</h2>
          <div className="combinations-content">
            <div className="combination-item">
              <h3>Black Faucets</h3>
              <p>
                Black faucets go with light-colored wall tiles, with which a black or wooden sink cabinet is chosen. The sink and toilet can be in matte white or a white toilet and a marble, concrete or Corian sink.
              </p>
            </div>
            <div className="combination-item">
              <h3>Black Tiles</h3>
              <p>
                If you chose black tiles, choose a light, uniform floor like the rest of the house. Incorporate the faucets in brushed stainless steel, and you can design the sink cabinet in a variety of options depending on your budget.
              </p>
            </div>
            <div className="combination-item">
              <h3>Rose Gold (Bronze) Faucets</h3>
              <p>
                Rose gold faucets will also work very nicely with black tiles. It is important to choose a wood color that will compliment them, such as American walnut.
              </p>
            </div>
            <p className="combination-tip">
              Always place a sample of the tile next to the faucet and take a picture.
            </p>
          </div>
        </div>
      </section>

      {/* Combinations Image */}
      <section className="gallery-section single-image">
        <div className="gallery-grid single">
          <div className="gallery-item">
            <Image
              src="/images/Residential Design/most beautiful combinations1.webp"
              alt="Beautiful Bathroom Combinations"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Black Shower Section */}
      <section
        className="br-section black-shower-section"
        ref={(el) => { sectionsRef.current[5] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Tips for Designing a Shower in Black</h2>
          <div className="black-shower-content">
            <p>
              When you want to get a dramatic look, and a hotel experience, black is a useful and wonderful tool. It is important to maintain a dosage that suits you.
            </p>
            <p>
              If you want a dramatic look, you can do this by using large, tight black tiles for the walls.
            </p>
            <div className="tile-tip">
              <p>
                For wall coverings, it is recommended to choose black tiles that are not smooth, and have a unique texture or print that will blur the marks of water droplets.
              </p>
              <p className="emphasis">And always, always matte, not glossy.</p>
            </div>
            <div className="designer-warning">
              <h3>Designer Arianna Avidor Tip for a Black Toilet</h3>
              <p>
                I would not recommend using black, or any dark color, this time. Our toilet is in daily use, and black toilets in particular show every sign. A black toilet requires high-level maintenance, it is only suitable for sleepy guest bathrooms and well-maintained showrooms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Black Shower Image */}
      <section className="gallery-section single-image">
        <div className="gallery-grid single">
          <div className="gallery-item">
            <Image
              src="/images/Residential Design/designing a shower in black1.webp"
              alt="Designing a Shower in Black"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Bathroom Tips Section */}
      <section
        className="br-section tips-section"
        ref={(el) => { sectionsRef.current[6] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Bathroom Design Tips</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h3>Toilet</h3>
              <p>
                It is important to maintain a distance of 50 cm from each side to the center of the toilet. The standard minimum is 40 cm from each side to the center of the toilet, but this is inconvenient and small.
              </p>
              <p>
                The distance in front of the toilet should not be less than 75 cm, but I would recommend leaving at least 85-90 cm.
              </p>
              <p>
                When the cistern is hidden, it will require concrete for the toilet bolts, plasterboard closure, waterproofing, and finally wall cladding. This thickening will take another 16 cm or so. For guest toilets, a width of no less than 160 cm is recommended.
              </p>
            </div>
            <div className="tip-card">
              <h3>Sink</h3>
              <p>
                The sink in your shower should be appropriate for the number of people using it. If it is a shared bathroom that children share, you may want to consider two sinks, or a long, shared trough sink with two faucets.
              </p>
              <p>
                Make sure that each sink is at least 60 cm wide, and that the faucet is accessible and easy to use.
              </p>
              <p>
                It is not recommended to design wall faucets in a general bathroom when there are small children — they cannot reach the opening handle and hang on with your help. The other option is a flower faucet - this is a faucet from the surface and not from the wall.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shower Ideas Section */}
      <section
        className="br-section ideas-section"
        ref={(el) => { sectionsRef.current[7] = el; }}
      >
        <div className="container">
          <h2 className="section-title">Shower Design Ideas</h2>
          <div className="ideas-content">
            <p>
              When designing a shower, a shower stall should be designed with a width of no less than 90 × 90 cm. However, awareness of a luxurious and spacious shower is very high, and the demand for a large and comfortable double shower stall is increasing.
            </p>
            <div className="ideas-features">
              <div className="feature-item">
                <span className="feature-marker"></span>
                <p>A spacious shower can incorporate a bench, a niche for soaps, and an advanced spa system with massage jets.</p>
              </div>
              <div className="feature-item">
                <span className="feature-marker"></span>
                <p>A freestanding bathtub is a jewel in the bathroom, and I recommend adding it when there is also a shower nearby. In everyday life, and as children grow up, the shower is used more.</p>
              </div>
            </div>
            <div className="layout-plan">
              <h3>The Layout Plan</h3>
              <p>
                The shower design requires a layout plan. This is a plan according to which the sequence works. Instead of random placement according to what works in the area, there is an important and detailed plan that indicates the location of each faucet, interfloor, niche, drainage channel and other elements.
              </p>
              <p>
                In this plan, we will ensure that the faucets are placed in advance according to the size of the tile, in order to achieve a more beautiful and designed result.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="br-section cta-section"
        ref={(el) => { sectionsRef.current[8] = el; }}
        id="contact"
      >
        <div className="container">
          <h2 className="cta-title">Ready to Design Your Dream Bathroom?</h2>
          <p className="cta-description">
            Let's create a private sanctuary — a bathroom that rejuvenates your body and mind.
          </p>
          <a href="/#contact-cta" className="cta-button-large">
            <span>Start Your Bathroom Design</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default BathroomsContent;
