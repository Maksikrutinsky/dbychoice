"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function RetirementSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("ret-visible"); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="ret-section" id="retirement">
      <div className="ret-bg" />
      <div className="container ret-inner">
        <div>
          <span className="ret-num">04</span>
          <span className="ret-eyebrow">A Chapter Worth Designing</span>
          <h2 className="ret-title">Design for Retirement Communities</h2>
          <div className="ret-rule" />
          <p className="ret-text">
            This new chapter often brings exciting lifestyle changes — downsizing, relocating, or simply reimagining how you want to live. Our goal is to make that transition effortless and beautiful.
          </p>
          <p className="ret-text" style={{ marginBottom: 32 }}>
            Whether furnishing an entire home from scratch or refreshing your favorite pieces to suit a new space, we blend comfort, sophistication, and personal style into an environment that truly feels like home. Our full-service approach covers space planning, furniture selection, custom window treatments, and accessories — all tailored to your preferences and daily needs.
          </p>
          <Link href="/services/retirement-communities" className="ret-cta">
            Discover the Service
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="ret-image">
          <img
            src="/images/Residential Design/Full Design.webp"
            alt="Retirement Community Design"
          />
        </div>
      </div>
    </section>
  );
}
