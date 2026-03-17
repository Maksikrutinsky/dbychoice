'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { dbLoad, dbSave } from './db';
import './portfolio.css';

const CATEGORIES = ['All', 'Residential', 'Commercial', 'Hospitality', 'Consulting', 'Other'];
export const STORAGE_KEY = 'dbc_portfolio_projects';

export interface Project {
  id: string;
  title: string;
  description: string;
  fullContent?: string;
  category: string;
  location: string;
  year: string;
  client?: string;
  style?: string;
  images: string[];
  createdAt: number;
}

const DEFAULT_PROJECTS: Project[] = [
  {
    id: 'default-scottsdale-flip',
    title: 'Residential Flip Renovation',
    description: 'Strategic full-home renovation transforming a dated 4BR/3BA into a modern 6BR/4BA — open-concept layout, complete mechanical overhaul, and professional staging. Sold prior to public listing above acquisition cost plus full renovation investment.',
    fullContent: `PROPERTY TYPE
Two-Story Residence — transformed from 4BR/3BA to 6BR/4BA
SERVICE PROVIDED
Full Design & Strategic Renovation for Resale
RESULT
Sold above purchase price + renovation costs

THE CHALLENGE
This property had solid bones but a dated, compartmentalized layout that didn't reflect how modern buyers live. The original 4-bedroom, 3-bathroom configuration included an underutilized home theater on the second floor — a niche feature with limited appeal to family buyers. The closed-off kitchen isolated the cook from family life. The double-height entry ceiling created drama but wasted valuable square footage. The home needed a complete mechanical overhaul and a strategic design transformation from outdated to modern.

DESIGN STRATEGY — LAYOUT TRANSFORMATION
• Removed the wall separating kitchen from dining room — creating an open-concept main floor that feels spacious, connected, and light-filled
• Reconfigured staircase orientation — improving flow and opening up the entry
• Converted underutilized double-height entry space into two additional bedrooms
• Transformed second-floor home theater into two bedrooms with shared bathroom
• Added a fourth full bathroom — a critical selling feature for family buyers
Net result: 4BR/3BA → 6BR/4BA — functional layout that appeals to modern buyers.

DESIGN AESTHETIC
Complete transformation from outdated to modern contemporary design. Clean lines, neutral palette, and timeless finishes. Light-filled spaces with modern materials and fixtures. Move-in ready presentation that appeals to today's buyers.

SCOPE OF WORK
Structural & Mechanical: Complete HVAC replacement · Full electrical upgrade · Plumbing overhaul · Gas line reconfiguration · Structural modifications for wall removal and stair relocation
Interior Design & Finishes: Space planning & layout optimization · Material selection (flooring, tile, cabinetry, countertops) · Lighting design · Paint palette · Hardware & plumbing fixture specifications · Contractor coordination
Final Presentation: Full-home staging & styling for listing photography

DESIGN DECISIONS THAT DROVE VALUE
✓ Open-concept kitchen/dining — the #1 feature buyers search for
✓ Added two bedrooms & one bathroom — 4BR/3BA → 6BR/4BA
✓ Maximized usable square footage — converted wasted vertical space into livable rooms
✓ Modern contemporary design — complete transformation to fresh, current aesthetic
✓ Neutral, timeless finishes — broad buyer appeal
✓ Professional staging — listings with staging sell 15–30 days faster

THE RESULT
Sold prior to public listing at a price exceeding acquisition cost plus full renovation investment. Every layout decision, every finish selection, every dollar spent was evaluated through the lens of resale value and buyer demand.`,
    category: 'Residential',
    location: 'Scottsdale, AZ',
    year: '2024',
    client: 'Real Estate Developer / Investor',
    style: 'Modern Contemporary',
    images: [],
    createdAt: 1700000007,
  },
  {
    id: 'default-tempe-airbnb',
    title: 'Full Renovation — 50-Year-Old Home, Tempe',
    description: 'Complete transformation of a 50-year-old home for short-term rental. We unlocked hidden potential by adding 2 bedrooms through smart structural changes, creating an open-concept entry–kitchen–living flow. Now comfortably accommodates 6 guests.',
    fullContent: `PROPERTY TYPE
Single-Family Home, ~50 years old
CLIENT
Real estate investor — Airbnb / Short-Term Rental
SERVICE PROVIDED
Full Design & Renovation for STR Optimization

THE CHALLENGE
The home had great bones but a closed, fragmented layout that failed to meet the expectations of modern short-term rental guests. Our goals were clear: maximize the number of bedrooms without sacrificing livability, and create a welcoming, open common area that guests would actually enjoy spending time in.

DESIGN STRATEGY
The key challenge was removing load-bearing walls to open up the entry, kitchen, and living room into a single inviting flow. Rather than hiding the structural solution, we made it a design feature:
• Installed exposed support beams that integrate naturally with the open-plan aesthetic
• Added decorative columns with custom-designed niches — creating architectural interest while serving a structural purpose
• Repurposed underutilized areas to add two additional bedrooms
• Carefully maintained ceiling heights and sightlines to keep the space feeling expansive

LAYOUT RESULT
✓ Added 2 bedrooms — now sleeps 6 guests comfortably
✓ Open-concept entry, kitchen, and living room — welcoming from the moment guests arrive
✓ Structural beams and niche columns as design elements, not eyesores
✓ Every room optimized for STR guest experience

SCOPE OF WORK
Structural modifications including wall removal and beam installation · New bedroom layouts and closet solutions · Open-plan kitchen and living redesign · Full finish selection: flooring, tile, cabinetry, fixtures · Lighting design throughout · Staging for listing photography`,
    category: 'Residential',
    location: 'Tempe, AZ',
    year: '2024',
    client: 'Real Estate Investor',
    style: 'Modern / Airbnb-Ready',
    images: [],
    createdAt: 1700000006,
  },
  {
    id: 'default-mesa-kitchen',
    title: 'Kitchen & Living Room Renovation — Mesa',
    description: 'Space-maximizing renovation of a compact home in Mesa. The focus: bringing natural light deep into the living areas through enlarged openings, and reimagining every inch of the kitchen and living room for functionality and style.',
    fullContent: `PROPERTY TYPE
Small Single-Family Home
LOCATION
Mesa, AZ
SERVICE PROVIDED
Kitchen & Living Room Renovation

THE CHALLENGE
Small homes demand smart design. The kitchen and living room felt cramped and dark — disconnected from the outdoors and from each other. The client wanted a space that felt larger, brighter, and more modern without a full structural overhaul.

DESIGN STRATEGY
✓ Enlarged window and door openings to flood the interior with natural light
✓ Removed visual barriers between kitchen and living area to create flow
✓ Optimized every storage zone — custom cabinetry reaching ceiling height
✓ Selected light, reflective finishes that amplify the natural light
✓ Created a cohesive material palette that unifies both spaces visually

THE RESULT
A home that feels twice its actual size — bright, open, and fully functional. Natural light now reaches every corner of the main living area, and the kitchen has become the heart of the home rather than an afterthought.`,
    category: 'Residential',
    location: 'Mesa, AZ',
    year: '2024',
    client: 'Private Client',
    style: 'Modern / Light-Filled',
    images: [],
    createdAt: 1700000005,
  },
  {
    id: 'default-mesa-apartment',
    title: 'Apartment Renovation — Mesa',
    description: 'An open, inviting home designed for a young couple starting their life together. The renovation focused on removing barriers, maximizing light, and creating a warm, modern space that feels personal and welcoming from the moment you walk in.',
    fullContent: `CLIENT
Young couple at the beginning of their journey together
LOCATION
Mesa, AZ
SERVICE PROVIDED
Full Apartment Renovation

THE VISION
This project was deeply personal — a young couple wanted their first shared home to feel like them. Open, warm, modern, and full of life. Not just a place to sleep, but a place they genuinely want to come home to.

DESIGN APPROACH
✓ Opened up the main living area for a spacious, connected feel
✓ Warm, inviting color palette that balances modern with cozy
✓ Smart furniture selection to maximize function in every square foot
✓ Custom lighting design to set the right mood in every space
✓ Details that reflect the couple's personality — not just a generic renovation

THE RESULT
A home that feels new, personal, and ready for everything that comes next. Light fills the space, the layout flows naturally, and every design decision was made with the people who live there in mind.`,
    category: 'Residential',
    location: 'Mesa, AZ',
    year: '2024',
    client: 'Private Client',
    style: 'Modern Warm',
    images: [],
    createdAt: 1700000004,
  },
  {
    id: 'default-classic-family-home',
    title: 'Classic Style Full Home Renovation',
    description: 'A massive transformation — not just cosmetic, but structural. New layout, new room divisions, and a distinctive classical aesthetic executed with exceptional detail. Designed for a family that wanted their home to feel as grand as it looks.',
    fullContent: `CLIENT
Family + their beloved dog
SERVICE PROVIDED
Full Home Renovation — Planning, Layout, Design & Execution

THE TRANSFORMATION
This project was one of the most comprehensive renovations we have undertaken — a full reimagining of the home's layout and style. The client wanted something that would stand apart: a truly classical aesthetic, executed at a high level, with a family-friendly plan that works for real daily life.

LAYOUT & PLANNING
The home's room divisions were completely rethought. New walls, new openings, and a reimagined flow that makes the home feel both grand and livable. Every space was planned around how the family actually moves through their day.

DESIGN STYLE
✓ Classical architecture with modern comfort — moldings, proportions, and detail that feel timeless
✓ Rich material palette: stone, solid wood, traditional tile patterns
✓ Statement spaces — an entry hall that makes an impression, a living room that commands attention
✓ Family-first functionality hidden within elegant forms
✓ Pet-friendly considerations throughout — durable finishes, easy-clean surfaces

SCOPE OF WORK
Full structural replanning · New room divisions and openings · Classical interior architecture details · Material specification throughout · Custom millwork and built-ins · Lighting design · Complete finish execution`,
    category: 'Residential',
    location: 'Arizona',
    year: '2023',
    client: 'Private Family',
    style: 'Classical',
    images: [],
    createdAt: 1700000003,
  },
  {
    id: 'default-personal-home',
    title: 'Private Residence — Personal Project',
    description: "A deeply personal home — designed with light, airy tones anchored by bold black accents that elevate the entire aesthetic. A nature-loving family's outdoor garden and pool blend seamlessly with the interiors, while the bedrooms in pink and brown tones create a warm, restful retreat.",
    fullContent: `A PERSONAL PROJECT
This is a home I designed for clients who share a deep love of nature, warmth, and understated elegance. Every decision was intentional — from the color palette to the way the indoors and outdoors speak to each other.

THE DESIGN PHILOSOPHY
Light and homey base tones create a calm, welcoming atmosphere. Strategic touches of black — in fixtures, frames, and accents — sharpen the design and elevate it several levels. It is a combination that never goes out of style.

INDOOR–OUTDOOR INTEGRATION
✓ The garden was designed as an extension of the living space — lush with plants and greenery
✓ Landscaping flows naturally into the pool area, creating a seamless outdoor retreat
✓ Large openings connect the interior to the garden visually and physically

THE BEDROOMS
Designed in soft tones of pink and warm brown — shades that create a genuinely restful atmosphere. Not trendy for the sake of it, but carefully chosen to promote calm, warmth, and a sense of personal sanctuary.

DESIGN DETAILS
✓ Light neutral base palette throughout the main living areas
✓ Black accents used with precision — hardware, lighting, window frames
✓ Bedroom palette: blush pink and warm brown for a cozy, intimate feel
✓ Garden: rich planting scheme with varied textures and heights
✓ Pool area integrated as a natural focal point of outdoor living`,
    category: 'Residential',
    location: 'Arizona',
    year: '2023',
    client: 'Private Client',
    style: 'Modern Warm — Light & Black Accents',
    images: [],
    createdAt: 1700000002,
  },
  {
    id: 'default-home-living-design',
    title: 'Home & Living Room Design',
    description: 'A comprehensive home and living room design project that balances openness and intimacy — creating spaces that are beautiful to look at and genuinely comfortable to live in. Every room designed as part of a cohesive whole.',
    fullContent: `SERVICE PROVIDED
Full Home & Living Room Interior Design

THE APPROACH
A home's living room is its heartbeat — the space where daily life unfolds, guests gather, and the family comes together. This project was built around that idea: every design choice serves both aesthetics and real living.

LIVING ROOM DESIGN
✓ Open, generous layout that invites relaxation without feeling empty
✓ Carefully layered lighting — ambient, task, and accent — for every time of day
✓ Custom furniture arrangement that balances conversation and flow
✓ Textile and material selection that adds warmth and texture
✓ A focal point that anchors the room and sets the design tone

WHOLE-HOME COHESION
Rather than designing each room in isolation, every space was considered as part of a unified home — consistent material palette, complementary finishes, and a visual language that flows from room to room.

THE RESULT
A home that feels intentional from the entry to the last room. Welcoming for guests, functional for daily life, and beautiful in every light.`,
    category: 'Residential',
    location: 'Arizona',
    year: '2024',
    client: 'Private Client',
    style: 'Contemporary Residential',
    images: [],
    createdAt: 1700000001,
  },
  {
    id: 'default-loft-european',
    title: 'European Classic Loft Apartment',
    description: 'A loft apartment with a distinctly European classical character — warm tones of brown and gold, elegant proportions, and a dedicated entertaining area designed for the clients who love to host and unwind with a glass of wine at the end of the day.',
    fullContent: `CLIENT
A couple who love to entertain and appreciate the finer things
SERVICE PROVIDED
Full Loft Interior Design

THE VISION
The clients had a clear vision: a home that feels like a European salon — warm, elegant, with real character. Brown and gold tones. Classical references without being stuffy. A space impressive enough to entertain in, intimate enough to genuinely live in.

THE CHALLENGE
Loft spaces are dramatic by nature, but the challenge was making them feel warm rather than cold, personal rather than showroom-like. The high ceilings and open plan needed to be shaped into distinct zones — including a dedicated entertaining corner that the clients specifically requested.

THE WINE & ENTERTAINING CORNER
The centerpiece of the social life of this home:
✓ Custom-designed bar and wine storage with classical detail
✓ Intimate seating arrangement — classical upholstery, warm lighting
✓ Gold accents in fixtures and hardware that catch the evening light
✓ Positioned to flow naturally from the main living area
✓ A space that invites you to slow down, pour a glass, and stay a while

DESIGN PALETTE
✓ Warm browns — rich wood tones, leather, woven textiles
✓ Gold accents — lighting, hardware, decorative elements
✓ Classical architectural references — moldings, proportions, framed panels
✓ Layered lighting to transition from day to evening effortlessly

THE RESULT
An apartment that feels like it has always been there — lived-in, elegant, and full of warmth. Guests always comment on it. The clients love coming home to it.`,
    category: 'Residential',
    location: 'Arizona',
    year: '2023',
    client: 'Private Client',
    style: 'European Classic',
    images: [],
    createdAt: 1700000000,
  },
];

const SEEDED_KEY = 'dbc_portfolio_seeded_v3';

export async function loadProjects(): Promise<Project[]> {
  if (typeof window === 'undefined') return [];
  try {
    // Migrate from localStorage if needed
    let data = await dbLoad<Project[]>(STORAGE_KEY);
    if (!data) {
      const lsRaw = localStorage.getItem(STORAGE_KEY);
      data = lsRaw ? JSON.parse(lsRaw) : [];
      if (lsRaw) localStorage.removeItem(STORAGE_KEY);
    }

    // Seed defaults once
    if (!localStorage.getItem(SEEDED_KEY)) {
      localStorage.setItem(SEEDED_KEY, '1');
      const existingIds = new Set((data ?? []).map((p) => p.id));
      const toAdd = DEFAULT_PROJECTS.filter((p) => !existingIds.has(p.id));
      if (toAdd.length > 0) {
        data = [...(data ?? []), ...toAdd];
        await dbSave(STORAGE_KEY, data);
      }
    }

    return data ?? [];
  } catch {
    return [];
  }
}

export async function saveProjects(projects: Project[]): Promise<string | null> {
  try {
    await dbSave(STORAGE_KEY, projects);
    return null;
  } catch {
    return 'Failed to save. Please try again.';
  }
}

function renderFullContent(text: string) {
  return text.split('\n').map((line, i) => {
    const trimmed = line.trim();
    if (!trimmed) return null;
    const isHeading = trimmed === trimmed.toUpperCase() && trimmed.length > 3 && !/^[✓•·]/.test(trimmed);
    const isBullet = /^[•✓·\-]/.test(trimmed);
    return (
      <p
        key={i}
        className={isHeading ? 'pm-section-heading' : isBullet ? 'pm-bullet' : undefined}
      >
        {isBullet ? trimmed.replace(/^[•✓·\-]\s*/, '') : trimmed}
      </p>
    );
  });
}

export default function PortfolioPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    loadProjects().then(setProjects);
  }, []);

  useEffect(() => {
    if (!activeProject) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveProject(null);
      if (e.key === 'ArrowRight') setActiveImg(i => Math.min(i + 1, (activeProject.images.length || 1) - 1));
      if (e.key === 'ArrowLeft') setActiveImg(i => Math.max(i - 1, 0));
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [activeProject]);

  const openProject = (project: Project) => {
    setActiveProject(project);
    setActiveImg(0);
  };

  return (
    <>
      <Header />
      <main className="portfolio-page">

        {/* ── Hero ── */}
        <section className="pf-hero">
          <div className="container pf-hero-content">
            <span className="pf-eyebrow">Design By Choice</span>
            <h1 className="pf-title">Our <em>Portfolio</em></h1>
            <div className="pf-divider">
              <span className="pf-divider-line" />
              <span className="pf-divider-diamond" />
              <span className="pf-divider-line" />
            </div>
            <p className="pf-subtitle">A curated collection of spaces we have brought to life — each one a unique story.</p>
            <img src="/images/about-video1.gif" alt="Design showcase" className="pf-hero-gif" />
          </div>
        </section>

        {/* ── Grid ── */}
        <section className="pf-grid-section">
          <div className="container">
            <div className="pf-grid">
              {projects.length === 0 ? (
                <div className="pf-empty">
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
                  </svg>
                  <h3>No projects yet</h3>
                  <p>Projects will appear here once added.</p>
                </div>
              ) : (
                projects.map((project) => (
                  <div
                    key={project.id}
                    className="pf-card"
                    onClick={() => openProject(project)}
                  >
                    <div className="pf-card-image">
                      {project.images.length > 0 ? (
                        <>
                          <img src={project.images[0]} alt={project.title} />
                          {project.images.length > 1 && (
                            <span className="pf-image-count">
                              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" />
                              </svg>
                              {project.images.length}
                            </span>
                          )}
                        </>
                      ) : (
                        <div className="pf-card-placeholder">
                          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" />
                          </svg>
                          <span>No images</span>
                        </div>
                      )}
                      <div className="pf-card-overlay">
                        <div className="pf-overlay-inner">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                          </svg>
                          <span>View Project</span>
                        </div>
                      </div>
                    </div>
                    <div className="pf-card-body">
                      <h3 className="pf-card-title">{project.title}</h3>
                      {project.description && <p className="pf-card-desc">{project.description}</p>}
                      <div className="pf-card-meta">
                        {project.location && (
                          <span className="pf-meta-item">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                            </svg>
                            {project.location}
                          </span>
                        )}
                        {project.year && (
                          <span className="pf-meta-item">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
                            </svg>
                            {project.year}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

      </main>
      <Footer />

      {/* ── Project Modal ── */}
      {activeProject && (
        <div className="pm-backdrop" onClick={() => setActiveProject(null)}>
          <div className="pm-modal" onClick={(e) => e.stopPropagation()}>

            {/* Close */}
            <button className="pm-close" onClick={() => setActiveProject(null)}>✕</button>

            {/* Left: project details */}
            <div className="pm-details">
              <span className="pm-category">{activeProject.category}</span>
              <h2 className="pm-title">{activeProject.title}</h2>

              {activeProject.description && (
                <p className="pm-desc">{activeProject.description}</p>
              )}

              <div className="pm-info-grid">
                {activeProject.location && (
                  <div className="pm-info-item">
                    <span className="pm-info-label">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                      </svg>
                      Location
                    </span>
                    <span className="pm-info-value">{activeProject.location}</span>
                  </div>
                )}
                {activeProject.year && (
                  <div className="pm-info-item">
                    <span className="pm-info-label">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                      Year
                    </span>
                    <span className="pm-info-value">{activeProject.year}</span>
                  </div>
                )}
                {activeProject.client && (
                  <div className="pm-info-item">
                    <span className="pm-info-label">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
                      </svg>
                      Client
                    </span>
                    <span className="pm-info-value">{activeProject.client}</span>
                  </div>
                )}
                {activeProject.style && (
                  <div className="pm-info-item">
                    <span className="pm-info-label">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      Style
                    </span>
                    <span className="pm-info-value">{activeProject.style}</span>
                  </div>
                )}
              </div>

              {activeProject.fullContent && (
                <div className="pm-full-content">
                  {renderFullContent(activeProject.fullContent)}
                </div>
              )}
            </div>

            {/* Right: image viewer */}
            <div className="pm-gallery">
              {activeProject.images.length > 0 ? (
                <>
                  <div className="pm-main-img">
                    <img src={activeProject.images[activeImg]} alt={`${activeProject.title} – ${activeImg + 1}`} />
                    {activeProject.images.length > 1 && (
                      <>
                        <button
                          className="pm-nav prev"
                          onClick={() => setActiveImg(i => Math.max(i - 1, 0))}
                          disabled={activeImg === 0}
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
                        </button>
                        <button
                          className="pm-nav next"
                          onClick={() => setActiveImg(i => Math.min(i + 1, activeProject.images.length - 1))}
                          disabled={activeImg === activeProject.images.length - 1}
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
                        </button>
                        <span className="pm-img-counter">{activeImg + 1} / {activeProject.images.length}</span>
                      </>
                    )}
                  </div>
                  {activeProject.images.length > 1 && (
                    <div className="pm-thumbs">
                      {activeProject.images.map((img, i) => (
                        <button
                          key={i}
                          className={`pm-thumb${i === activeImg ? ' active' : ''}`}
                          onClick={() => setActiveImg(i)}
                        >
                          <img src={img} alt={`thumb ${i + 1}`} />
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="pm-no-images">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" />
                  </svg>
                  <span>No images added yet</span>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  );
}
