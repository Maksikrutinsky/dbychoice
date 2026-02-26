"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export interface FlipCardData {
  image: string;
  title: string;
  shortText: string;
  href: string;
  ctaLabel?: string;
}

interface FlipCardSectionProps {
  num: string;
  title: string;
  subtitle?: string;
  cards: FlipCardData[];
  columns?: 2 | 3;
  id?: string;
}

function FlipCard({ card }: { card: FlipCardData }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`fcs-card ${flipped ? "fcs-card-flipped" : ""}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <div className="fcs-card-inner">
        {/* Front — image */}
        <div className="fcs-front">
          <img src={card.image} alt={card.title} className="fcs-img" />
          <div className="fcs-front-overlay" />
          <h3 className="fcs-front-title">{card.title}</h3>
          <span className="fcs-hint">Hover to explore</span>
        </div>

        {/* Back — text */}
        <div className="fcs-back">
          <div className="fcs-back-content">
            <h3 className="fcs-back-title">{card.title}</h3>
            <p className="fcs-back-text">{card.shortText}</p>
            <Link href={card.href} className="fcs-cta" onClick={(e) => e.stopPropagation()}>
              {card.ctaLabel ?? "Learn More"}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FlipCardSection({
  num, title, subtitle, cards, columns = 3, id,
}: FlipCardSectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("fcs-visible"); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="fcs-section" id={id}>
      <div className="fcs-section-bg" />
      <div className="container fcs-inner">
        <div className="fcs-header">
          <span className="fcs-num">{num}</span>
          <div className="fcs-header-text">
            <h2 className="fcs-title">{title}</h2>
            {subtitle && <p className="fcs-subtitle">{subtitle}</p>}
          </div>
          <div className="fcs-header-rule" />
        </div>

        <div className={`fcs-grid fcs-cols-${columns}`}>
          {cards.map((card) => (
            <FlipCard key={card.href} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
