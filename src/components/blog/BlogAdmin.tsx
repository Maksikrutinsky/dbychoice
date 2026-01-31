'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useBlog, Article } from '@/context/BlogContext';

const availableImages = [
  '/images/gallery1.jpg', '/images/gallery2.jpg', '/images/gallery3.jpg', '/images/gallery4.jpg',
  '/images/gallery5.jpg', '/images/gallery6.jpg', '/images/gallery7.jpg', '/images/gallery8.jpg',
  '/images/salon.webp', '/images/Kitchens1.webp', '/images/Dining1.webp',
  '/images/OFFICE SPACES.webp', '/images/HOSPITALITY.webp', '/images/RETAIL DESIGN.webp',
];

export default function BlogAdmin() {
  const { data, updateMainHero, updateSectionIntro, updatePageHero, updatePageContent, updateArticles, saveAll, resetToDefault, hasUnsavedChanges } = useBlog();
  const [activeTab, setActiveTab] = useState<'main' | 'inspiration' | 'tips' | 'guides' | 'insights'>('main');
  const [saveMessage, setSaveMessage] = useState('');
  const [showImagePicker, setShowImagePicker] = useState<string | null>(null);
  const [editingArticle, setEditingArticle] = useState<string | null>(null);
  const [showNewArticle, setShowNewArticle] = useState(false);
  const [newArticle, setNewArticle] = useState({ title: '', excerpt: '', content: '', image: '/images/gallery1.jpg' });
  const [autoSave, setAutoSave] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['hero', 'section-0', 'section-1', 'section-2', 'section-3', 'page-hero', 'page-content', 'articles']));

  useEffect(() => {
    if (autoSave && hasUnsavedChanges) {
      const timer = setTimeout(() => {
        saveAll();
        setSaveMessage('Saved!');
        setTimeout(() => setSaveMessage(''), 2000);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [autoSave, hasUnsavedChanges, data, saveAll]);

  const handleSave = () => {
    saveAll();
    setSaveMessage('Saved!');
    setTimeout(() => setSaveMessage(''), 2000);
  };

  const handleReset = () => {
    resetToDefault();
    setShowResetConfirm(false);
    setSaveMessage('Reset complete');
    setTimeout(() => setSaveMessage(''), 2000);
  };

  const toggleExpand = (id: string) => {
    setExpandedSections(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filteredArticles = activeTab !== 'main' ? data.articles.filter(a => a.category === activeTab) : [];

  // Card functions
  const addCard = () => {
    if (activeTab === 'main') return;
    const cards = [...(data.pageContents[activeTab]?.cards || [])];
    cards.push({ title: 'New Card', description: 'Description...', image: '/images/gallery1.jpg' });
    updatePageContent(activeTab, { ...data.pageContents[activeTab], cards });
  };

  const deleteCard = (idx: number) => {
    if (!confirm('Delete this card?')) return;
    const cards = [...(data.pageContents[activeTab]?.cards || [])];
    cards.splice(idx, 1);
    updatePageContent(activeTab, { ...data.pageContents[activeTab], cards });
  };

  const moveCard = (idx: number, dir: 'up' | 'down') => {
    const cards = [...(data.pageContents[activeTab]?.cards || [])];
    const newIdx = dir === 'up' ? idx - 1 : idx + 1;
    if (newIdx < 0 || newIdx >= cards.length) return;
    [cards[idx], cards[newIdx]] = [cards[newIdx], cards[idx]];
    updatePageContent(activeTab, { ...data.pageContents[activeTab], cards });
  };

  // Article functions
  const addArticle = () => {
    if (!newArticle.title || activeTab === 'main') return;
    updateArticles([...data.articles, { id: Date.now().toString(), ...newArticle, category: activeTab as Article['category'] }]);
    setNewArticle({ title: '', excerpt: '', content: '', image: '/images/gallery1.jpg' });
    setShowNewArticle(false);
  };

  const deleteArticle = (id: string) => {
    if (confirm('Delete this article?')) {
      updateArticles(data.articles.filter(a => a.id !== id));
    }
  };

  const moveArticle = (id: string, dir: 'up' | 'down') => {
    const catArticles = data.articles.filter(a => a.category === activeTab);
    const others = data.articles.filter(a => a.category !== activeTab);
    const idx = catArticles.findIndex(a => a.id === id);
    const newIdx = dir === 'up' ? idx - 1 : idx + 1;
    if (newIdx < 0 || newIdx >= catArticles.length) return;
    [catArticles[idx], catArticles[newIdx]] = [catArticles[newIdx], catArticles[idx]];
    updateArticles([...others, ...catArticles]);
  };

  // Icons
  const TrashIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14zM10 11v6M14 11v6"/>
    </svg>
  );

  const EditIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
      <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
    </svg>
  );

  const ImageIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <path d="M21 15l-5-5L5 21"/>
    </svg>
  );

  // Image Picker Component
  const ImagePicker = ({ currentImage, onSelect, pickerId }: { currentImage: string; onSelect: (img: string) => void; pickerId: string }) => {
    const fileRef = useRef<HTMLInputElement>(null);

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          onSelect(ev.target?.result as string);
          setShowImagePicker(null);
        };
        reader.readAsDataURL(file);
      }
    };

    return (
      <div className="img-picker">
        <div className="img-preview-small">
          <img src={currentImage || '/images/gallery1.jpg'} alt="" />
          <button className="img-edit-btn" onClick={() => setShowImagePicker(pickerId)}>
            <ImageIcon /> Change
          </button>
        </div>
        {showImagePicker === pickerId && (
          <div className="modal-bg" onClick={() => setShowImagePicker(null)}>
            <div className="modal-box" onClick={e => e.stopPropagation()}>
              <div className="modal-top">
                <h3>Choose Image</h3>
                <button onClick={() => setShowImagePicker(null)}>×</button>
              </div>
              <div className="modal-content">
                <label>URL</label>
                <input type="text" value={currentImage} onChange={e => onSelect(e.target.value)} placeholder="Paste URL..." />

                <label>Upload</label>
                <div className="upload-zone" onClick={() => fileRef.current?.click()}>
                  Click to upload (no size limit)
                </div>
                <input ref={fileRef} type="file" accept="image/*" onChange={handleUpload} hidden />

                <label>Gallery</label>
                <div className="gallery-grid">
                  {availableImages.map((img, i) => (
                    <div key={i} className={`gallery-item ${currentImage === img ? 'selected' : ''}`} onClick={() => { onSelect(img); setShowImagePicker(null); }}>
                      <img src={img} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Input Field
  const Field = ({ label, value, onChange, multi = false }: { label: string; value: string; onChange: (v: string) => void; multi?: boolean }) => (
    <div className="field">
      <label>{label}</label>
      {multi ? <textarea value={value} onChange={e => onChange(e.target.value)} /> : <input value={value} onChange={e => onChange(e.target.value)} />}
    </div>
  );

  // Arrow Button Component
  const ArrowBtn = ({ dir, onClick, disabled }: { dir: 'up' | 'down'; onClick: () => void; disabled?: boolean }) => (
    <button className={`arrow-btn ${disabled ? 'disabled' : ''}`} onClick={onClick} disabled={disabled}>
      {dir === 'up' ? '▲' : '▼'}
    </button>
  );

  return (
    <div className="admin-page">
      {/* HEADER */}
      <header className="admin-header">
        <div className="header-left">
          <Link href="/blog" className="back-btn">← Back</Link>
          <h1>Blog Admin</h1>
        </div>
        <div className="header-right">
          <label className="auto-toggle">
            <input type="checkbox" checked={autoSave} onChange={e => setAutoSave(e.target.checked)} />
            <span className="toggle-track"><span className="toggle-thumb" /></span>
            Auto-save
          </label>
          {saveMessage && <span className="save-msg">{saveMessage}</span>}
          {hasUnsavedChanges && <span className="unsaved-dot" />}
          <button className="header-btn outline" onClick={() => setShowResetConfirm(true)}>Reset</button>
          <button className="header-btn primary" onClick={handleSave}>Save</button>
        </div>
      </header>

      {/* TABS */}
      <nav className="admin-tabs">
        {(['main', 'inspiration', 'tips', 'guides', 'insights'] as const).map(tab => (
          <button key={tab} className={`tab ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>
            {tab === 'main' ? 'Main Page' : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>

      {/* CONTENT */}
      <main className="admin-content">
        {activeTab === 'main' ? (
          <>
            {/* HERO */}
            <section className="admin-section">
              <div className="section-head" onClick={() => toggleExpand('hero')}>
                <h2>Hero Section</h2>
                <span className="expand-icon">{expandedSections.has('hero') ? '−' : '+'}</span>
              </div>
              {expandedSections.has('hero') && (
                <div className="section-body">
                  <ImagePicker currentImage={data.mainHero.image} onSelect={img => updateMainHero({ ...data.mainHero, image: img })} pickerId="hero" />
                  <Field label="Tagline" value={data.mainHero.tagline} onChange={v => updateMainHero({ ...data.mainHero, tagline: v })} />
                  <div className="field-row">
                    <Field label="Title" value={data.mainHero.title} onChange={v => updateMainHero({ ...data.mainHero, title: v })} />
                    <Field label="Accent" value={data.mainHero.titleAccent} onChange={v => updateMainHero({ ...data.mainHero, titleAccent: v })} />
                  </div>
                  <Field label="Description" value={data.mainHero.description} onChange={v => updateMainHero({ ...data.mainHero, description: v })} multi />
                </div>
              )}
            </section>

            {/* SECTION INTROS */}
            {(['inspiration', 'tips', 'guides', 'insights'] as const).map((sec, i) => (
              <section key={sec} className="admin-section">
                <div className="section-head" onClick={() => toggleExpand(`section-${i}`)}>
                  <div className="section-num">{i + 1}</div>
                  <h2>{sec.charAt(0).toUpperCase() + sec.slice(1)}</h2>
                  <span className="expand-icon">{expandedSections.has(`section-${i}`) ? '−' : '+'}</span>
                </div>
                {expandedSections.has(`section-${i}`) && (
                  <div className="section-body">
                    <div className="field-row">
                      <Field label="Title" value={data.sectionIntros[sec]?.title || ''} onChange={v => updateSectionIntro(sec, { ...data.sectionIntros[sec], title: v })} />
                      <Field label="Subtitle" value={data.sectionIntros[sec]?.subtitle || ''} onChange={v => updateSectionIntro(sec, { ...data.sectionIntros[sec], subtitle: v })} />
                    </div>
                    <Field label="Introduction" value={data.sectionIntros[sec]?.intro || ''} onChange={v => updateSectionIntro(sec, { ...data.sectionIntros[sec], intro: v })} multi />
                    <Field label="Secondary Text" value={data.sectionIntros[sec]?.secondaryText || ''} onChange={v => updateSectionIntro(sec, { ...data.sectionIntros[sec], secondaryText: v })} multi />
                    <Field label="Button Text" value={data.sectionIntros[sec]?.buttonText || ''} onChange={v => updateSectionIntro(sec, { ...data.sectionIntros[sec], buttonText: v })} />
                  </div>
                )}
              </section>
            ))}
          </>
        ) : (
          <>
            {/* PAGE HERO */}
            <section className="admin-section">
              <div className="section-head" onClick={() => toggleExpand('page-hero')}>
                <h2>Page Hero</h2>
                <span className="expand-icon">{expandedSections.has('page-hero') ? '−' : '+'}</span>
              </div>
              {expandedSections.has('page-hero') && (
                <div className="section-body">
                  <ImagePicker currentImage={data.pageHeros[activeTab]?.image || ''} onSelect={img => updatePageHero(activeTab, { ...data.pageHeros[activeTab], image: img })} pickerId="page-hero" />
                  <div className="field-row">
                    <Field label="Title" value={data.pageHeros[activeTab]?.title || ''} onChange={v => updatePageHero(activeTab, { ...data.pageHeros[activeTab], title: v })} />
                    <Field label="Accent" value={data.pageHeros[activeTab]?.titleAccent || ''} onChange={v => updatePageHero(activeTab, { ...data.pageHeros[activeTab], titleAccent: v })} />
                  </div>
                  <Field label="Subtitle" value={data.pageHeros[activeTab]?.subtitle || ''} onChange={v => updatePageHero(activeTab, { ...data.pageHeros[activeTab], subtitle: v })} />
                </div>
              )}
            </section>

            {/* PAGE CONTENT */}
            <section className="admin-section">
              <div className="section-head" onClick={() => toggleExpand('page-content')}>
                <h2>Page Content</h2>
                <span className="expand-icon">{expandedSections.has('page-content') ? '−' : '+'}</span>
              </div>
              {expandedSections.has('page-content') && (
                <div className="section-body">
                  <Field label="Intro Title" value={data.pageContents[activeTab]?.introTitle || ''} onChange={v => updatePageContent(activeTab, { ...data.pageContents[activeTab], introTitle: v })} />
                  <Field label="Intro Text" value={data.pageContents[activeTab]?.introText || ''} onChange={v => updatePageContent(activeTab, { ...data.pageContents[activeTab], introText: v })} multi />

                  <div className="cards-header">
                    <h3>Cards</h3>
                    <button className="add-btn" onClick={addCard}>+ Add Card</button>
                  </div>

                  <div className="cards-list">
                    {data.pageContents[activeTab]?.cards?.map((card, idx, arr) => (
                      <div key={idx} className="card-item">
                        <div className="card-toolbar">
                          <span className="card-num">#{idx + 1}</span>
                          <div className="card-arrows">
                            <ArrowBtn dir="up" onClick={() => moveCard(idx, 'up')} disabled={idx === 0} />
                            <ArrowBtn dir="down" onClick={() => moveCard(idx, 'down')} disabled={idx === arr.length - 1} />
                          </div>
                          <button className="icon-btn trash" onClick={() => deleteCard(idx)} title="Delete">
                            <TrashIcon />
                          </button>
                        </div>
                        <ImagePicker
                          currentImage={card.image}
                          onSelect={img => {
                            const cards = [...data.pageContents[activeTab].cards];
                            cards[idx] = { ...cards[idx], image: img };
                            updatePageContent(activeTab, { ...data.pageContents[activeTab], cards });
                          }}
                          pickerId={`card-${idx}`}
                        />
                        <Field label="Title" value={card.title} onChange={v => {
                          const cards = [...data.pageContents[activeTab].cards];
                          cards[idx] = { ...cards[idx], title: v };
                          updatePageContent(activeTab, { ...data.pageContents[activeTab], cards });
                        }} />
                        <Field label="Description" value={card.description} onChange={v => {
                          const cards = [...data.pageContents[activeTab].cards];
                          cards[idx] = { ...cards[idx], description: v };
                          updatePageContent(activeTab, { ...data.pageContents[activeTab], cards });
                        }} multi />
                      </div>
                    ))}
                  </div>

                  <h3 className="sub-title">Philosophy</h3>
                  <Field label="Title" value={data.pageContents[activeTab]?.philosophyTitle || ''} onChange={v => updatePageContent(activeTab, { ...data.pageContents[activeTab], philosophyTitle: v })} />
                  <Field label="Text" value={data.pageContents[activeTab]?.philosophyText || ''} onChange={v => updatePageContent(activeTab, { ...data.pageContents[activeTab], philosophyText: v })} multi />
                </div>
              )}
            </section>

            {/* ARTICLES */}
            <section className="admin-section">
              <div className="section-head" onClick={() => toggleExpand('articles')}>
                <h2>Articles ({filteredArticles.length})</h2>
                <span className="expand-icon">{expandedSections.has('articles') ? '−' : '+'}</span>
              </div>
              {expandedSections.has('articles') && (
                <div className="section-body">
                  <button className="add-btn full" onClick={() => setShowNewArticle(true)}>+ Add New Article</button>

                  {showNewArticle && (
                    <div className="new-form">
                      <h4>New Article</h4>
                      <ImagePicker currentImage={newArticle.image} onSelect={img => setNewArticle({ ...newArticle, image: img })} pickerId="new-art" />
                      <Field label="Title" value={newArticle.title} onChange={v => setNewArticle({ ...newArticle, title: v })} />
                      <Field label="Excerpt" value={newArticle.excerpt} onChange={v => setNewArticle({ ...newArticle, excerpt: v })} />
                      <Field label="Content" value={newArticle.content} onChange={v => setNewArticle({ ...newArticle, content: v })} multi />
                      <div className="form-actions">
                        <button className="save-btn" onClick={addArticle}>Add</button>
                        <button className="cancel-btn" onClick={() => setShowNewArticle(false)}>Cancel</button>
                      </div>
                    </div>
                  )}

                  <div className="articles-list">
                    {filteredArticles.map((art, idx, arr) => (
                      <div key={art.id} className="article-item">
                        <div className="article-arrows">
                          <ArrowBtn dir="up" onClick={() => moveArticle(art.id, 'up')} disabled={idx === 0} />
                          <ArrowBtn dir="down" onClick={() => moveArticle(art.id, 'down')} disabled={idx === arr.length - 1} />
                        </div>
                        <img src={art.image} alt="" className="article-thumb" />
                        <div className="article-info">
                          <strong>{art.title}</strong>
                          <span>{art.excerpt}</span>
                        </div>
                        <button className="icon-btn edit" onClick={() => setEditingArticle(editingArticle === art.id ? null : art.id)} title="Edit">
                          <EditIcon />
                        </button>
                        <button className="icon-btn trash" onClick={() => deleteArticle(art.id)} title="Delete">
                          <TrashIcon />
                        </button>

                        {editingArticle === art.id && (
                          <div className="article-edit">
                            <ImagePicker currentImage={art.image} onSelect={img => updateArticles(data.articles.map(a => a.id === art.id ? { ...a, image: img } : a))} pickerId={`art-${art.id}`} />
                            <Field label="Title" value={art.title} onChange={v => updateArticles(data.articles.map(a => a.id === art.id ? { ...a, title: v } : a))} />
                            <Field label="Excerpt" value={art.excerpt} onChange={v => updateArticles(data.articles.map(a => a.id === art.id ? { ...a, excerpt: v } : a))} />
                            <Field label="Content" value={art.content} onChange={v => updateArticles(data.articles.map(a => a.id === art.id ? { ...a, content: v } : a))} multi />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          </>
        )}
      </main>

      {/* RESET MODAL */}
      {showResetConfirm && (
        <div className="modal-bg" onClick={() => setShowResetConfirm(false)}>
          <div className="modal-box small" onClick={e => e.stopPropagation()}>
            <h3>Reset Everything?</h3>
            <p>All changes will be lost.</p>
            <div className="modal-actions">
              <button className="cancel-btn" onClick={() => setShowResetConfirm(false)}>Cancel</button>
              <button className="danger-btn" onClick={handleReset}>Reset</button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* ===== BASE ===== */
        .admin-page {
          min-height: 100vh;
          background: #f5f5f7;
          color: #1d1d1f;
          font-family: system-ui, -apple-system, sans-serif;
        }

        /* ===== HEADER ===== */
        .admin-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background: #fff;
          border-bottom: 1px solid #e5e5e7;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        .header-left {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .back-btn {
          color: #86868b;
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all 0.2s;
        }
        .back-btn:hover {
          background: #f5f5f7;
          color: #1d1d1f;
        }
        .admin-header h1 {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0;
          color: #1d1d1f;
        }
        .header-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        /* Toggle */
        .auto-toggle {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          font-size: 0.85rem;
          color: #86868b;
        }
        .auto-toggle input { display: none; }
        .toggle-track {
          width: 44px;
          height: 24px;
          background: #e5e5e7;
          border-radius: 12px;
          position: relative;
          transition: 0.3s;
        }
        .toggle-thumb {
          position: absolute;
          width: 18px;
          height: 18px;
          background: #fff;
          border-radius: 50%;
          top: 3px;
          left: 3px;
          transition: 0.3s;
          box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        }
        .auto-toggle input:checked + .toggle-track {
          background: #34c759;
        }
        .auto-toggle input:checked + .toggle-track .toggle-thumb {
          left: 23px;
        }

        .save-msg {
          color: #34c759;
          font-size: 0.85rem;
          padding: 0.4rem 0.8rem;
          background: rgba(52, 199, 89, 0.1);
          border-radius: 6px;
        }
        .unsaved-dot {
          width: 10px;
          height: 10px;
          background: #ff9500;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .header-btn {
          padding: 0.6rem 1.25rem;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          border: none;
        }
        .header-btn.outline {
          background: #fff;
          border: 1px solid #e5e5e7;
          color: #86868b;
        }
        .header-btn.outline:hover {
          border-color: #ff3b30;
          color: #ff3b30;
        }
        .header-btn.primary {
          background: #007aff;
          color: #fff;
        }
        .header-btn.primary:hover {
          background: #0056b3;
        }

        /* ===== TABS ===== */
        .admin-tabs {
          display: flex;
          gap: 0;
          background: #fff;
          padding: 0 2rem;
          border-bottom: 1px solid #e5e5e7;
          overflow-x: auto;
        }
        .tab {
          padding: 1rem 1.5rem;
          background: none;
          border: none;
          color: #86868b;
          font-size: 0.9rem;
          cursor: pointer;
          position: relative;
          transition: color 0.2s;
        }
        .tab:hover { color: #1d1d1f; }
        .tab.active {
          color: #007aff;
          font-weight: 500;
        }
        .tab.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: #007aff;
        }

        /* ===== CONTENT ===== */
        .admin-content {
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem;
        }

        /* ===== SECTION ===== */
        .admin-section {
          background: #fff;
          border-radius: 12px;
          margin-bottom: 1rem;
          overflow: hidden;
          border: 1px solid #e5e5e7;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
        }
        .section-head {
          display: flex;
          align-items: center;
          padding: 1rem 1.25rem;
          cursor: pointer;
          transition: background 0.2s;
          gap: 0.75rem;
        }
        .section-head:hover {
          background: #f5f5f7;
        }
        .section-num {
          width: 28px;
          height: 28px;
          background: #007aff;
          color: #fff;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.85rem;
        }
        .section-head h2 {
          flex: 1;
          font-size: 1rem;
          font-weight: 600;
          margin: 0;
        }
        .expand-icon {
          width: 24px;
          height: 24px;
          background: #f5f5f7;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          color: #86868b;
        }
        .section-body {
          padding: 1.25rem;
          border-top: 1px solid #e5e5e7;
          background: #fafafa;
        }

        /* ===== FIELD ===== */
        .field {
          margin-bottom: 1rem;
        }
        .field label {
          display: block;
          font-size: 0.75rem;
          font-weight: 500;
          color: #86868b;
          margin-bottom: 0.4rem;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }
        .field input, .field textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          background: #fff;
          border: 1px solid #e5e5e7;
          border-radius: 8px;
          color: #1d1d1f;
          font-size: 0.95rem;
          transition: all 0.2s;
        }
        .field input:focus, .field textarea:focus {
          outline: none;
          border-color: #007aff;
          box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
        }
        .field textarea {
          min-height: 80px;
          resize: vertical;
        }
        .field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        /* ===== IMAGE PICKER ===== */
        .img-picker {
          margin-bottom: 1rem;
        }
        .img-preview-small {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem;
          background: #fff;
          border: 1px solid #e5e5e7;
          border-radius: 10px;
        }
        .img-preview-small img {
          width: 80px;
          height: 60px;
          object-fit: cover;
          border-radius: 6px;
        }
        .img-edit-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: #f5f5f7;
          border: 1px solid #e5e5e7;
          border-radius: 6px;
          color: #1d1d1f;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        .img-edit-btn:hover {
          background: #e5e5e7;
        }

        /* ===== ARROW BUTTONS ===== */
        .arrow-btn {
          width: 32px;
          height: 32px;
          background: #fff;
          border: 1px solid #e5e5e7;
          border-radius: 6px;
          color: #007aff;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .arrow-btn:hover:not(.disabled) {
          background: #007aff;
          color: #fff;
          border-color: #007aff;
        }
        .arrow-btn.disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        /* ===== ICON BUTTONS ===== */
        .icon-btn {
          width: 36px;
          height: 36px;
          background: #fff;
          border: 1px solid #e5e5e7;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .icon-btn.edit {
          color: #007aff;
        }
        .icon-btn.edit:hover {
          background: #007aff;
          color: #fff;
          border-color: #007aff;
        }
        .icon-btn.trash {
          color: #ff3b30;
        }
        .icon-btn.trash:hover {
          background: #ff3b30;
          color: #fff;
          border-color: #ff3b30;
        }

        /* ===== CARDS ===== */
        .cards-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 1.5rem 0 1rem;
          padding-top: 1rem;
          border-top: 1px solid #e5e5e7;
        }
        .cards-header h3 {
          font-size: 0.95rem;
          font-weight: 600;
          margin: 0;
        }
        .add-btn {
          padding: 0.5rem 1rem;
          background: #34c759;
          color: #fff;
          border: none;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        .add-btn:hover {
          background: #2db14c;
        }
        .add-btn.full {
          width: 100%;
          padding: 0.75rem;
          margin-bottom: 1rem;
        }

        .cards-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .card-item {
          background: #fff;
          border-radius: 10px;
          padding: 1rem;
          border: 1px solid #e5e5e7;
        }
        .card-toolbar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid #e5e5e7;
        }
        .card-num {
          font-weight: 600;
          color: #007aff;
          font-size: 0.85rem;
        }
        .card-arrows {
          display: flex;
          gap: 0.35rem;
          flex: 1;
        }

        .sub-title {
          font-size: 0.95rem;
          font-weight: 600;
          margin: 1.5rem 0 1rem;
          padding-top: 1rem;
          border-top: 1px solid #e5e5e7;
        }

        /* ===== ARTICLES ===== */
        .articles-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .article-item {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          background: #fff;
          border-radius: 10px;
          border: 1px solid #e5e5e7;
        }
        .article-arrows {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .article-arrows .arrow-btn {
          width: 26px;
          height: 22px;
          font-size: 0.65rem;
        }
        .article-thumb {
          width: 60px;
          height: 45px;
          object-fit: cover;
          border-radius: 6px;
        }
        .article-info {
          flex: 1;
          min-width: 150px;
        }
        .article-info strong {
          display: block;
          color: #1d1d1f;
          font-size: 0.9rem;
          margin-bottom: 0.15rem;
        }
        .article-info span {
          font-size: 0.8rem;
          color: #86868b;
        }
        .article-edit {
          width: 100%;
          margin-top: 0.75rem;
          padding-top: 0.75rem;
          border-top: 1px solid #e5e5e7;
        }
        .new-form {
          background: #fff;
          border-radius: 10px;
          padding: 1rem;
          margin-bottom: 1rem;
          border: 1px solid #e5e5e7;
        }
        .new-form h4 {
          margin: 0 0 1rem;
          color: #007aff;
          font-size: 0.95rem;
        }
        .form-actions {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.75rem;
        }
        .save-btn {
          padding: 0.6rem 1.25rem;
          background: #007aff;
          color: #fff;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
        }
        .cancel-btn {
          padding: 0.6rem 1.25rem;
          background: #f5f5f7;
          color: #86868b;
          border: 1px solid #e5e5e7;
          border-radius: 6px;
          cursor: pointer;
        }

        /* ===== MODAL ===== */
        .modal-bg {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.4);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal-box {
          background: #fff;
          border-radius: 14px;
          width: 90%;
          max-width: 450px;
          max-height: 85vh;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        }
        .modal-box.small {
          max-width: 350px;
          padding: 1.5rem;
          text-align: center;
        }
        .modal-box.small h3 {
          margin: 0 0 0.5rem;
          font-size: 1.1rem;
        }
        .modal-box.small p {
          color: #86868b;
          margin: 0 0 1.25rem;
          font-size: 0.9rem;
        }
        .modal-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.25rem;
          background: #f5f5f7;
          border-bottom: 1px solid #e5e5e7;
        }
        .modal-top h3 {
          margin: 0;
          font-size: 1rem;
        }
        .modal-top button {
          width: 28px;
          height: 28px;
          background: #e5e5e7;
          border: none;
          border-radius: 6px;
          color: #86868b;
          font-size: 1.2rem;
          cursor: pointer;
        }
        .modal-content {
          padding: 1.25rem;
          max-height: 55vh;
          overflow-y: auto;
        }
        .modal-content label {
          display: block;
          font-size: 0.7rem;
          font-weight: 500;
          text-transform: uppercase;
          color: #86868b;
          margin: 1rem 0 0.4rem;
        }
        .modal-content label:first-child {
          margin-top: 0;
        }
        .modal-content input {
          width: 100%;
          padding: 0.65rem 0.85rem;
          background: #fff;
          border: 1px solid #e5e5e7;
          border-radius: 6px;
          color: #1d1d1f;
          font-size: 0.9rem;
        }
        .upload-zone {
          padding: 1.25rem;
          background: #f5f5f7;
          border: 2px dashed #e5e5e7;
          border-radius: 10px;
          text-align: center;
          color: #86868b;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 0.9rem;
        }
        .upload-zone:hover {
          border-color: #007aff;
          color: #007aff;
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.4rem;
          max-height: 160px;
          overflow-y: auto;
        }
        .gallery-item {
          aspect-ratio: 1;
          border-radius: 6px;
          overflow: hidden;
          cursor: pointer;
          border: 2px solid transparent;
          transition: all 0.2s;
        }
        .gallery-item:hover {
          border-color: #86868b;
        }
        .gallery-item.selected {
          border-color: #007aff;
        }
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .modal-actions {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
        }
        .danger-btn {
          padding: 0.6rem 1.25rem;
          background: #ff3b30;
          color: #fff;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          .admin-header {
            flex-wrap: wrap;
            gap: 1rem;
            padding: 1rem;
          }
          .header-left, .header-right {
            width: 100%;
            justify-content: space-between;
          }
          .admin-tabs {
            padding: 0 1rem;
          }
          .admin-content {
            padding: 1rem;
          }
          .field-row {
            grid-template-columns: 1fr;
          }
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
}
