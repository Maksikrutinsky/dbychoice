"use client";

import { useState, useEffect, useRef } from "react";

interface Tech {
  id: string;
  icon: React.ReactNode;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
}

const TECHS: Tech[] = [
  {
    id: "3d",
    name: "3D Modeling & Visualization",
    tagline: "See your space before it's built",
    description: "We build precise 3D models of every project — from conceptual renders to photorealistic walkthroughs — so you can experience the space before a single wall is moved.",
    highlights: ["Photorealistic room renders", "Full material & lighting simulation", "Multiple design options side by side", "Presented on-screen or printed"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M24 4L44 16V32L24 44L4 32V16L24 4Z" />
        <path d="M24 4V44M4 16L44 16M4 32L44 32" strokeOpacity="0.4" />
        <circle cx="24" cy="24" r="5" fill="currentColor" strokeWidth="0" opacity="0.6" />
      </svg>
    ),
  },
  {
    id: "cad",
    name: "CAD & Technical Drawing",
    tagline: "Precision on paper before it's on walls",
    description: "Every project is fully documented in CAD — floor plans, elevations, electrical layouts, demolition drawings — giving contractors exactly what they need to build without guessing.",
    highlights: ["Floor plans & elevations", "Electrical & plumbing layouts", "Demolition & construction drawings", "Permit-ready documentation"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="6" y="6" width="36" height="36" rx="3" />
        <path d="M6 16H42M16 6V42M30 22L36 28M30 28L36 22" />
        <circle cx="16" cy="16" r="2" fill="currentColor" strokeWidth="0" />
      </svg>
    ),
  },
  {
    id: "vr",
    name: "Virtual Reality Tours",
    tagline: "Walk through your home before it exists",
    description: "Using immersive VR technology, clients walk through their redesigned space in real time — experiencing scale, light, color, and flow before any work begins.",
    highlights: ["Full-room immersive walkthrough", "Real-scale spatial experience", "Light & mood simulation", "Available via VR headset or screen"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="14" width="40" height="20" rx="10" />
        <circle cx="17" cy="24" r="5" />
        <circle cx="31" cy="24" r="5" />
        <path d="M22 24H26" />
        <path d="M4 24H12M36 24H44" strokeOpacity="0.5" />
        <path d="M19 10L24 14L29 10" strokeOpacity="0.6" />
      </svg>
    ),
  },
  {
    id: "ipad",
    name: "Interactive Design Presentations",
    tagline: "Your design, beautifully delivered on iPad",
    description: "Design boards, material palettes, and concept presentations are delivered digitally on iPad — making reviews interactive, portable, and easy to share with family or contractors.",
    highlights: ["Digital mood boards & palettes", "Touchscreen material browsing", "Easy sharing with stakeholders", "Archived for future reference"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="8" y="4" width="32" height="40" rx="4" />
        <line x1="8" y1="36" x2="40" y2="36" />
        <circle cx="24" cy="41" r="1.5" fill="currentColor" strokeWidth="0" opacity="0.7" />
        <rect x="13" y="9" width="22" height="22" rx="2" strokeOpacity="0.5" />
      </svg>
    ),
  },
  {
    id: "phone",
    name: "Mobile Client Portal",
    tagline: "Your project in your pocket",
    description: "All timelines, approvals, product selections, and milestones are accessible from your phone — so you stay informed and in control at every stage, from anywhere.",
    highlights: ["Real-time project updates", "Approve selections on the go", "Budget & timeline tracking", "Direct messaging with the studio"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="13" y="3" width="22" height="42" rx="4" />
        <line x1="13" y1="10" x2="35" y2="10" />
        <line x1="13" y1="38" x2="35" y2="38" />
        <circle cx="24" cy="42.5" r="1.5" fill="currentColor" strokeWidth="0" opacity="0.7" />
        <rect x="18" y="14" width="12" height="20" rx="1.5" strokeOpacity="0.45" />
      </svg>
    ),
  },
  {
    id: "materials",
    name: "Digital Material Library",
    tagline: "Every finish, curated and visualized",
    description: "Our digital material library spans thousands of finishes — flooring, tile, countertops, cabinetry, fabrics. Every selection is documented with specs, pricing, and lead times.",
    highlights: ["Thousands of curated finishes", "Specs, pricing & lead times", "Physical sample boards available", "Full procurement management"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="6" y="6" width="16" height="16" rx="2" />
        <rect x="26" y="6" width="16" height="16" rx="2" />
        <rect x="6" y="26" width="16" height="16" rx="2" />
        <rect x="26" y="26" width="16" height="16" rx="2" />
        <circle cx="14" cy="14" r="3" fill="currentColor" strokeWidth="0" opacity="0.5" />
        <circle cx="34" cy="14" r="3" fill="currentColor" strokeWidth="0" opacity="0.7" />
        <circle cx="14" cy="34" r="3" fill="currentColor" strokeWidth="0" opacity="0.4" />
        <circle cx="34" cy="34" r="3" fill="currentColor" strokeWidth="0" opacity="0.6" />
      </svg>
    ),
  },
];

export default function AboutTech() {
  const [activeId, setActiveId] = useState<string>(TECHS[0].id);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add("at-visible"); },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const activeTech = TECHS.find((t) => t.id === activeId) ?? TECHS[0];

  return (
    <section ref={sectionRef} className="at-section">
      <div className="at-inner">
        <div className="at-header">
          <span className="at-eyebrow">The Studio · Our Tools</span>
          <h2 className="at-heading">Technology We Use</h2>
          <p className="at-sub">
            Our studio combines creative vision with professional-grade technology —
            ensuring precision, clarity, and exceptional results at every stage.
          </p>
          <div className="at-rule" />
        </div>

        {/* Track + detail panel */}
        <div className="at-layout">

          {/* Left: track list */}
          <div className="at-track">
            {TECHS.map((tech, i) => (
              <button
                key={tech.id}
                className={`at-track-item${activeId === tech.id ? " at-track-active" : ""}`}
                onClick={() => setActiveId(tech.id)}
              >
                <span className="at-track-line-top" style={{ visibility: i === 0 ? "hidden" : "visible" }} />
                <span className="at-track-dot">
                  <span className="at-track-icon">{tech.icon}</span>
                </span>
                <span className="at-track-line-bottom" style={{ visibility: i === TECHS.length - 1 ? "hidden" : "visible" }} />
                <span className="at-track-label">
                  <strong>{tech.name}</strong>
                  <span>{tech.tagline}</span>
                </span>
              </button>
            ))}
          </div>

          {/* Right: detail panel */}
          <div className="at-detail" key={activeId}>
            <div className="at-detail-icon">{activeTech.icon}</div>
            <h3 className="at-detail-title">{activeTech.name}</h3>
            <p className="at-detail-tagline">{activeTech.tagline}</p>
            <p className="at-detail-desc">{activeTech.description}</p>
            <ul className="at-detail-list">
              {activeTech.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
