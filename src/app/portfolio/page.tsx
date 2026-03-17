'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './portfolio.css';

const CATEGORIES = ['All', 'Residential', 'Commercial', 'Hospitality', 'Consulting', 'Other'];
export const STORAGE_KEY = 'dbc_portfolio_projects';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  year: string;
  client?: string;
  style?: string;
  images: string[];
  createdAt: number;
}

export function loadProjects(): Project[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveProjects(projects: Project[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

export default function PortfolioPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [gallery, setGallery] = useState<{ images: string[]; index: number; title: string } | null>(null);

  useEffect(() => {
    setProjects(loadProjects());
  }, []);

  useEffect(() => {
    if (!gallery) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setGallery(null);
      if (e.key === 'ArrowRight') setGallery(g => g && g.index < g.images.length - 1 ? { ...g, index: g.index + 1 } : g);
      if (e.key === 'ArrowLeft') setGallery(g => g && g.index > 0 ? { ...g, index: g.index - 1 } : g);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [gallery]);

  const filtered = projects.filter((p) => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q || p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const categoryCount = (cat: string) =>
    cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length;

  const openGallery = (project: Project) => {
    if (project.images.length === 0) return;
    setGallery({ images: project.images, index: 0, title: project.title });
  };

  return (
    <>
      <Header />
      <main className="portfolio-page">

        {/* ── Parallax zone: Hero ── */}
        <div className="pf-parallax-zone">
          <section className="pf-hero">
            <div className="container pf-hero-content">
              <div className="pf-hero-card">
                <span className="pf-eyebrow">Design By Choice</span>
                <h1 className="pf-title">Our <em>Portfolio</em></h1>
                <div className="pf-divider">
                  <span className="pf-divider-line" />
                  <span className="pf-divider-diamond" />
                  <span className="pf-divider-line" />
                </div>
                <p className="pf-subtitle">A curated collection of spaces we have brought to life — each one a unique story.</p>
              </div>
            </div>
          </section>
        </div>

        {/* ── Stats bar ── */}
        <div className="pf-stats">
          <div className="pf-stat">
            <span className="pf-stat-num">{projects.length}</span>
            <span className="pf-stat-label">Projects</span>
          </div>
          <div className="pf-stat">
            <span className="pf-stat-num">{projects.reduce((s, p) => s + p.images.length, 0)}</span>
            <span className="pf-stat-label">Photos</span>
          </div>
          <div className="pf-stat">
            <span className="pf-stat-num">{new Set(projects.map(p => p.category)).size || 0}</span>
            <span className="pf-stat-label">Categories</span>
          </div>
        </div>

        {/* ── Filters ── */}
        <section className="pf-filters-section">
          <div className="container">
            <div className="pf-filter-row">
              <div className="pf-filter-tabs">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    className={`pf-filter-tab${activeCategory === cat ? ' active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat} <span className="pf-tab-count">({categoryCount(cat)})</span>
                  </button>
                ))}
              </div>
              <div className="pf-search">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                </svg>
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Grid ── */}
        <section className="pf-grid-section">
          <div className="container">
            <div className="pf-grid">
              {filtered.length === 0 ? (
                <div className="pf-empty">
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
                  </svg>
                  <h3>{projects.length === 0 ? 'No projects yet' : 'No results found'}</h3>
                  <p>{projects.length === 0 ? 'Projects will appear here once added.' : 'Try adjusting your filters.'}</p>
                </div>
              ) : (
                filtered.map((project) => (
                  <div
                    key={project.id}
                    className={`pf-card${project.images.length > 0 ? ' has-images' : ''}`}
                    onClick={() => openGallery(project)}
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
                      <span className="pf-category-badge">{project.category}</span>
                      {project.images.length > 0 && (
                        <div className="pf-card-overlay">
                          <div className="pf-overlay-inner">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                            </svg>
                            <span>View Gallery</span>
                          </div>
                        </div>
                      )}
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

      {/* ── Gallery Lightbox ── */}
      {gallery && (
        <div className="pf-lightbox" onClick={() => setGallery(null)}>
          <div className="pf-lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <div className="pf-lightbox-header">
              <span className="pf-lightbox-title">{gallery.title}</span>
              <span className="pf-lightbox-counter">{gallery.index + 1} / {gallery.images.length}</span>
              <button className="pf-lightbox-close" onClick={() => setGallery(null)}>✕</button>
            </div>
            <div className="pf-lightbox-main">
              <button className="pf-lightbox-nav prev" onClick={() => setGallery(g => g && g.index > 0 ? { ...g, index: g.index - 1 } : g)} disabled={gallery.index === 0}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <div className="pf-lightbox-img">
                <img src={gallery.images[gallery.index]} alt={`${gallery.title} – ${gallery.index + 1}`} />
              </div>
              <button className="pf-lightbox-nav next" onClick={() => setGallery(g => g && g.index < g.images.length - 1 ? { ...g, index: g.index + 1 } : g)} disabled={gallery.index === gallery.images.length - 1}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
            {gallery.images.length > 1 && (
              <div className="pf-lightbox-thumbs">
                {gallery.images.map((img, i) => (
                  <button key={i} className={`pf-thumb${i === gallery.index ? ' active' : ''}`} onClick={() => setGallery(g => g ? { ...g, index: i } : g)}>
                    <img src={img} alt={`thumb ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
