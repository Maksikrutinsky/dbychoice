"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";

interface BACardData {
  before: string;
  after: string;
  title: string;
  shortText: string;
  href: string;
}

function BeforeAfterCard({ data, delay = 0 }: { data: BACardData; delay?: number }) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const didAnimate = useRef(false);

  const clamp = (v: number) => Math.max(8, Math.min(92, v));

  const posFromClient = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPosition(clamp(((clientX - rect.left) / rect.width) * 100));
  }, []);

  // Intro animation — sweeps the divider to show interactivity
  useEffect(() => {
    if (didAnimate.current) return;
    didAnimate.current = true;

    const timer = setTimeout(() => {
      let start: number | null = null;
      const DURATION = 1600;

      const tick = (ts: number) => {
        if (start === null) start = ts;
        const t = Math.min((ts - start) / DURATION, 1);
        // Ease: 50 → 28 → 72 → 50
        const wave = Math.sin(t * Math.PI * 2) * 22;
        setPosition(50 + wave);
        if (t < 1) {
          animRef.current = requestAnimationFrame(tick);
        } else {
          setPosition(50);
        }
      };

      animRef.current = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animRef.current);
    };
  }, [delay]);

  const stopAnim = () => cancelAnimationFrame(animRef.current);

  return (
    <div
      ref={containerRef}
      className="ba-card"
      onMouseDown={(e) => {
        setDragging(true);
        stopAnim();
        posFromClient(e.clientX);
      }}
      onMouseMove={(e) => {
        if (dragging) posFromClient(e.clientX);
      }}
      onMouseUp={() => setDragging(false)}
      onMouseLeave={() => setDragging(false)}
      onTouchStart={(e) => {
        stopAnim();
        posFromClient(e.touches[0].clientX);
      }}
      onTouchMove={(e) => {
        e.preventDefault();
        posFromClient(e.touches[0].clientX);
      }}
    >
      {/* After image — base layer, always visible */}
      <div className="ba-layer ba-layer-after">
        <img src={data.after} alt={`${data.title} — after`} draggable={false} />
        <span className="ba-label ba-label-r">After</span>
      </div>

      {/* Before image — clipped to reveal from left */}
      <div
        className="ba-layer ba-layer-before"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img src={data.before} alt={`${data.title} — before`} draggable={false} />
        <span className="ba-label ba-label-l">Before</span>
      </div>

      {/* Divider line + handle */}
      <div className="ba-divider" style={{ left: `${position}%` }}>
        <div className="ba-handle">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l-6-6 6-6" />
            <path d="M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>

      {/* Info overlay */}
      <div className="ba-info">
        <div>
          <h3 className="ba-title">{data.title}</h3>
          <p className="ba-text">{data.shortText}</p>
        </div>
        <Link
          href={data.href}
          className="ba-cta"
          onClick={(e) => e.stopPropagation()}
        >
          Learn More
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

const cards: BACardData[] = [
  {
    before: "/images/Pre-Purchase Consulting-before.webp",
    after:  "/images/Pre-Purchase Consulting-after.webp",
    title: "Pre-Purchase Consulting",
    shortText: "See a property's true potential before you commit — expert design assessment that turns hesitation into a confident offer.",
    href: "/services/pre-purchase",
  },
  {
    before: "/images/Pre-Sale Consulting-before.webp",
    after:  "/images/Pre-Sale Consulting-after.webp",
    title: "Pre-Sale Design",
    shortText: "Strategic improvements that maximize your sale price — turn your listing into the property buyers compete for.",
    href: "/services/pre-sale",
  },
];

export default function VirtualDesignSection() {
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
    <section ref={ref} className="fcs-section" id="virtual">
      <div className="fcs-section-bg" />
      <div className="container fcs-inner">

        <div className="fcs-header">
          <span className="fcs-num">04</span>
          <div className="fcs-header-text">
            <h2 className="fcs-title">Virtual Design</h2>
            <p className="fcs-subtitle">
              Drag to reveal the transformation — see what expert design makes possible, before you decide.
            </p>
          </div>
          <div className="fcs-header-rule" />
        </div>

        <div className="fcs-grid fcs-cols-2">
          {cards.map((card, i) => (
            <BeforeAfterCard key={card.href} data={card} delay={600 + i * 400} />
          ))}
        </div>

      </div>
    </section>
  );
}
