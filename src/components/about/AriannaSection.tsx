"use client";

import { useRef, useState } from "react";

const MORE_SLIDES = [
  {
    id: "story",
    eyebrow: "The Story",
    heading: "From Fashion to Spaces",
    content: [
      "It began with fashion — styling, custom gowns, and understanding how clothing expresses identity. From a young age I worked with women seeking authenticity, not trends.",
      "Over time, that same eye moved into interiors, product design, commercial spaces, and experiential environments. I worked as a broker, managed a real estate office, led service operations — but I always returned to design.",
      "Years of global travel across Asia, Europe, the Middle East, and the Americas opened me to cultures, materials, and textures that became permanent tools in my creative process.",
    ],
  },
  {
    id: "philosophy",
    eyebrow: "The Philosophy",
    heading: "I Create Worlds",
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
    items: [
      { num: "01", text: "I see my clients as whole people — with style, history, vision, and personal taste." },
      { num: "02", text: "I connect worlds — fashion and interiors, art and material, journey and home." },
      { num: "03", text: "I don't just plan a space — I design an experience." },
    ],
  },
];

export default function AriannaSection() {
  const [expanded, setExpanded] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const goTo = (idx: number) => {
    if (!trackRef.current) return;
    const slide = trackRef.current.children[idx] as HTMLElement;
    slide?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    setActiveSlide(idx);
  };

  const handleScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, offsetWidth } = trackRef.current;
    setActiveSlide(Math.round(scrollLeft / offsetWidth));
  };

  return (
    <div className="ars-wrapper">

      {/* ── Main view: video right, text left ── */}
      <div className="ars-main">

        {/* Left: text */}
        <div className="ars-main-text">
          <span className="ars-eyebrow">The Designer</span>
          <h2 className="ars-main-heading">About Me –<br />Arianna Avidor</h2>
          <blockquote className="ars-main-quote">
            Design has been my language since childhood — a way of seeing the world differently when everything around me was purely functional.
          </blockquote>
          <p className="ars-main-intro">
            I am Arianna Avidor — interior designer, stylist, and experience artist. I believe a space is not measured by walls alone, but by the feeling it leaves behind.
          </p>
          <button
            className="ars-expand-btn"
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
          >
            {expanded ? (
              <><span>Close</span><span className="ars-btn-arrow ars-btn-arrow-up">↑</span></>
            ) : (
              <><span>More about Arianna</span><span className="ars-btn-arrow">→</span></>
            )}
          </button>
        </div>

        {/* Right: video */}
        <div className="ars-main-video">
          <video autoPlay loop muted playsInline className="ars-video">
            <source src="/videos/process.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* ── Expandable carousel ── */}
      {expanded && (
        <div className="ars-extra">
          <div className="ars-track" ref={trackRef} onScroll={handleScroll}>
            {MORE_SLIDES.map((slide, i) => (
              <div key={slide.id} className="ars-slide">
                <div className="ars-slide-accent">
                  <span className="ars-slide-num">0{i + 1}</span>
                  <span className="ars-slide-vline" />
                </div>
                <div className="ars-slide-body">
                  <span className="ars-eyebrow">{slide.eyebrow}</span>
                  <h3 className="ars-heading">{slide.heading}</h3>

                  {"quote" in slide && slide.quote && (
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
            <button className="ars-nav-btn" onClick={() => goTo(Math.max(0, activeSlide - 1))} disabled={activeSlide === 0} aria-label="Previous">←</button>
            <div className="ars-dots">
              {MORE_SLIDES.map((_, i) => (
                <button key={i} className={`ars-dot${i === activeSlide ? " ars-dot-active" : ""}`} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`} />
              ))}
            </div>
            <button className="ars-nav-btn" onClick={() => goTo(Math.min(MORE_SLIDES.length - 1, activeSlide + 1))} disabled={activeSlide === MORE_SLIDES.length - 1} aria-label="Next">→</button>
          </div>
        </div>
      )}
    </div>
  );
}
