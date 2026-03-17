"use client";

import { useRef, useState } from "react";

const SLIDES = [
  {
    id: "intro",
    eyebrow: "The Designer",
    heading: "About Me",
    hasVideo: true,
    content: null,
    quote: "Design has been my language since childhood — a way of seeing the world differently when everything around me was purely functional.",
  },
  {
    id: "story",
    eyebrow: "The Story",
    heading: "From Fashion to Spaces",
    hasVideo: false,
    content: [
      "It began with fashion — styling, custom gowns, and understanding how clothing expresses identity. From a young age I worked with women seeking authenticity, not trends.",
      "Over time, that same eye moved into interiors, product design, commercial spaces, and experiential environments. I worked as a broker, managed a real estate office, led service operations — but I always returned to design.",
      "Years of global travel across Asia, Europe, the Middle East, and the Americas opened me to cultures, materials, and textures that became permanent tools in my creative process.",
    ],
    quote: null,
  },
  {
    id: "philosophy",
    eyebrow: "The Philosophy",
    heading: "I Create Worlds",
    hasVideo: false,
    content: [
      "I believe a space is not measured by walls alone, but by the feeling it leaves behind.",
      "Every design I create engages all five senses — crafting a complete, immersive experience that is entirely yours. I am Arianna Avidor — interior designer, stylist, and experience artist.",
    ],
    quote: "Worlds of feeling, emotion, aesthetics — and life.",
  },
  {
    id: "apart",
    eyebrow: "What Sets Me Apart",
    heading: "I Tell a Story",
    hasVideo: false,
    items: [
      { num: "01", text: "I see my clients as whole people — with style, history, vision, and personal taste." },
      { num: "02", text: "I connect worlds — fashion and interiors, art and material, journey and home." },
      { num: "03", text: "I don't just plan a space — I design an experience." },
    ],
    content: null,
    quote: null,
  },
];

export default function AriannaSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const goTo = (idx: number) => {
    if (!trackRef.current) return;
    const slide = trackRef.current.children[idx] as HTMLElement;
    slide?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    setActive(idx);
  };

  const handleScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, offsetWidth } = trackRef.current;
    setActive(Math.round(scrollLeft / offsetWidth));
  };

  return (
    <div className="ars-wrapper">
      {/* Header */}
      <div className="ars-header">
        <span className="section-label light">The Designer</span>
        <h2 className="section-title arianna-title">About Me – Arianna Avidor</h2>
        <div className="title-underline gold" />
      </div>

      {/* Scroll track */}
      <div className="ars-track" ref={trackRef} onScroll={handleScroll}>
        {SLIDES.map((slide, i) => (
          <div key={slide.id} className="ars-slide">

            {/* Left accent */}
            <div className="ars-slide-accent">
              <span className="ars-slide-num">0{i + 1}</span>
              <span className="ars-slide-vline" />
            </div>

            {/* Content */}
            <div className="ars-slide-body">
              <span className="ars-eyebrow">{slide.eyebrow}</span>
              <h3 className="ars-heading">{slide.heading}</h3>

              {slide.hasVideo && (
                <div className="ars-video-wrap">
                  <video autoPlay loop muted playsInline className="ars-video">
                    <source src="/videos/process.mp4" type="video/mp4" />
                  </video>
                </div>
              )}

              {slide.quote && (
                <blockquote className="ars-quote">{slide.quote}</blockquote>
              )}

              {"content" in slide && slide.content && (
                <div className="ars-paragraphs">
                  {slide.content.map((p, j) => <p key={j}>{p}</p>)}
                </div>
              )}

              {"items" in slide && slide.items && (
                <div className="ars-items">
                  {slide.items.map((item) => (
                    <div key={item.num} className="ars-item">
                      <span className="ars-item-num">{item.num}</span>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="ars-nav">
        <button
          className="ars-nav-btn"
          onClick={() => goTo(Math.max(0, active - 1))}
          disabled={active === 0}
          aria-label="Previous"
        >
          ←
        </button>
        <div className="ars-dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`ars-dot${i === active ? " ars-dot-active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          className="ars-nav-btn"
          onClick={() => goTo(Math.min(SLIDES.length - 1, active + 1))}
          disabled={active === SLIDES.length - 1}
          aria-label="Next"
        >
          →
        </button>
      </div>
    </div>
  );
}
