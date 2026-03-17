"use client";

import { useState, useEffect, useRef } from "react";

interface Tech {
  id: string;
  icon: React.ReactNode;
  name: string;
  tagline: string;
  description: string;
  video: string;
}

const TECHS: Tech[] = [
  {
    id: "3d",
    name: "3D Modeling & Visualization",
    tagline: "See the space before it's built",
    description: "We build precise 3D models of every project — from conceptual renders to photorealistic walkthroughs — so you can experience the space before a single wall is moved.",
    video: "/videos/video1.mp4",
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
    video: "/videos/video2.mp4",
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
    description: "Using immersive VR technology, clients can walk through their redesigned space in real time — experiencing scale, light, color, and flow before any work begins.",
    video: "/videos/process.mp4",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="14" width="40" height="20" rx="10" />
        <circle cx="17" cy="24" r="5" />
        <circle cx="31" cy="24" r="5" />
        <path d="M22 24H26" />
        <path d="M4 24H12M36 24H44" strokeOpacity="0.5" />
      </svg>
    ),
  },
  {
    id: "materials",
    name: "Digital Material Library",
    tagline: "Every finish, curated and visualized",
    description: "Our digital material library spans thousands of finishes — flooring, tile, countertops, cabinetry, fabrics. Every selection is documented with specs, pricing, and lead times.",
    video: "/videos/video3.mp4",
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
  {
    id: "planning",
    name: "Space Planning Software",
    tagline: "Flow, function, and furniture — optimized",
    description: "We use professional space planning tools to test multiple layout configurations digitally — ensuring furniture placement, traffic flow, and functional zones are resolved before procurement begins.",
    video: "/videos/video4.mp4",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="4" width="40" height="40" rx="2" />
        <path d="M4 20H28V44M28 20V4" />
        <rect x="32" y="24" width="8" height="12" rx="1" fill="currentColor" strokeWidth="0" opacity="0.4" />
        <rect x="8" y="24" width="14" height="8" rx="1" fill="currentColor" strokeWidth="0" opacity="0.3" />
      </svg>
    ),
  },
  {
    id: "pm",
    name: "Project Management Platform",
    tagline: "Every deadline tracked, every detail shared",
    description: "All timelines, budgets, documents, and decisions live in one shared platform — giving you full visibility into where your project stands at any moment, from anywhere.",
    video: "/videos/video5.mp4",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="6" y="6" width="36" height="36" rx="3" />
        <path d="M14 18H34M14 24H28M14 30H22" />
        <circle cx="34" cy="30" r="6" fill="none" />
        <path d="M31 30L33 32L37 28" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function AboutTech() {
  const [activeId, setActiveId] = useState<string | null>(null);
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

  const activeTech = TECHS.find((t) => t.id === activeId) ?? null;

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

        {/* Icon grid */}
        <div className="at-grid">
          {TECHS.map((tech) => (
            <button
              key={tech.id}
              className={`at-card${activeId === tech.id ? " at-card-active" : ""}`}
              onClick={() => setActiveId((id) => id === tech.id ? null : tech.id)}
              aria-expanded={activeId === tech.id}
            >
              <div className="at-icon">{tech.icon}</div>
              <div className="at-card-name">{tech.name}</div>
              <div className="at-card-tag">{tech.tagline}</div>
              <span className="at-card-hint">{activeId === tech.id ? "▲ close" : "▼ learn more"}</span>
            </button>
          ))}
        </div>

        {/* Expanded panel */}
        {activeTech && (
          <div className="at-panel" key={activeTech.id}>
            <div className="at-panel-inner">
              <div className="at-panel-text">
                <h3 className="at-panel-title">{activeTech.name}</h3>
                <p className="at-panel-desc">{activeTech.description}</p>
              </div>
              <div className="at-panel-video">
                <video
                  key={activeTech.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="at-video"
                >
                  <source src={activeTech.video} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
