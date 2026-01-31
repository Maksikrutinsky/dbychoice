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
        <div className="img-preview">
          <img src={currentImage || '/images/gallery1.jpg'} alt="" />
          <div className="img-overlay">
            <button onClick={() => setShowImagePicker(pickerId)}>Change Image</button>
          </div>
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
                  <div className="preview-bar">
                    <img src={data.mainHero.image || '/images/salon.webp'} alt="" />
                    <div>
                      <small>{data.mainHero.tagline}</small>
                      <strong>{data.mainHero.title} <em>{data.mainHero.titleAccent}</em></strong>
                    </div>
                  </div>
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
                    <div className="preview-bar mini">
                      <strong>{data.sectionIntros[sec]?.title}</strong>
                      <em>{data.sectionIntros[sec]?.subtitle}</em>
                    </div>
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
                  <div className="preview-bar">
                    <img src={data.pageHeros[activeTab]?.image || '/images/salon.webp'} alt="" />
                    <div>
                      <small>{data.pageHeros[activeTab]?.label}</small>
                      <strong>{data.pageHeros[activeTab]?.title} <em>{data.pageHeros[activeTab]?.titleAccent}</em></strong>
                    </div>
                  </div>
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
                          <button className="delete-btn" onClick={() => deleteCard(idx)}>Delete</button>
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
                    <div className="new-article-form">
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
                        <div className="article-info" onClick={() => setEditingArticle(editingArticle === art.id ? null : art.id)}>
                          <strong>{art.title}</strong>
                          <span>{art.excerpt}</span>
                        </div>
                        <button className="delete-btn" onClick={() => deleteArticle(art.id)}>Delete</button>

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
            <p>All changes will be lost and content will return to default.</p>
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
          background: #0f0f0f;
          color: #fff;
          font-family: system-ui, -apple-system, sans-serif;
        }

        /* ===== HEADER ===== */
        .admin-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background: #1a1a1a;
          border-bottom: 1px solid #333;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .header-left {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .back-btn {
          color: #888;
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all 0.2s;
        }
        .back-btn:hover {
          background: #333;
          color: #fff;
        }
        .admin-header h1 {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0;
          background: linear-gradient(135deg, #c9a961 0%, #f0d78c 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
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
          color: #888;
        }
        .auto-toggle input { display: none; }
        .toggle-track {
          width: 44px;
          height: 24px;
          background: #333;
          border-radius: 12px;
          position: relative;
          transition: 0.3s;
        }
        .toggle-thumb {
          position: absolute;
          width: 18px;
          height: 18px;
          background: #666;
          border-radius: 50%;
          top: 3px;
          left: 3px;
          transition: 0.3s;
        }
        .auto-toggle input:checked + .toggle-track {
          background: #c9a961;
        }
        .auto-toggle input:checked + .toggle-track .toggle-thumb {
          left: 23px;
          background: #fff;
        }

        .save-msg {
          color: #4ade80;
          font-size: 0.85rem;
          padding: 0.4rem 0.8rem;
          background: rgba(74, 222, 128, 0.1);
          border-radius: 6px;
        }
        .unsaved-dot {
          width: 10px;
          height: 10px;
          background: #f59e0b;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.9); }
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
          background: transparent;
          border: 1px solid #444;
          color: #888;
        }
        .header-btn.outline:hover {
          border-color: #c9a961;
          color: #c9a961;
        }
        .header-btn.primary {
          background: linear-gradient(135deg, #c9a961 0%, #a88a4a 100%);
          color: #000;
        }
        .header-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(201, 169, 97, 0.4);
        }

        /* ===== TABS ===== */
        .admin-tabs {
          display: flex;
          gap: 0;
          background: #1a1a1a;
          padding: 0 2rem;
          border-bottom: 1px solid #333;
          overflow-x: auto;
        }
        .tab {
          padding: 1rem 1.5rem;
          background: none;
          border: none;
          color: #666;
          font-size: 0.9rem;
          cursor: pointer;
          position: relative;
          transition: color 0.2s;
        }
        .tab:hover { color: #fff; }
        .tab.active {
          color: #c9a961;
        }
        .tab.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: #c9a961;
        }

        /* ===== CONTENT ===== */
        .admin-content {
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem;
        }

        /* ===== SECTION ===== */
        .admin-section {
          background: #1a1a1a;
          border-radius: 16px;
          margin-bottom: 1.5rem;
          overflow: hidden;
          border: 1px solid #2a2a2a;
        }
        .section-head {
          display: flex;
          align-items: center;
          padding: 1.25rem 1.5rem;
          cursor: pointer;
          transition: background 0.2s;
          gap: 1rem;
        }
        .section-head:hover {
          background: #222;
        }
        .section-num {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #c9a961 0%, #a88a4a 100%);
          color: #000;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.9rem;
        }
        .section-head h2 {
          flex: 1;
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
        }
        .expand-icon {
          width: 28px;
          height: 28px;
          background: #333;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          color: #c9a961;
        }
        .section-body {
          padding: 1.5rem;
          border-top: 1px solid #2a2a2a;
        }

        /* ===== PREVIEW BAR ===== */
        .preview-bar {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: linear-gradient(135deg, #252525 0%, #1f1f1f 100%);
          border-radius: 12px;
          margin-bottom: 1.5rem;
          border: 1px solid #333;
        }
        .preview-bar img {
          width: 100px;
          height: 70px;
          object-fit: cover;
          border-radius: 8px;
        }
        .preview-bar small {
          color: #c9a961;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .preview-bar strong {
          display: block;
          font-size: 1rem;
          color: #fff;
        }
        .preview-bar em {
          color: #c9a961;
          font-style: normal;
        }
        .preview-bar.mini {
          padding: 0.75rem 1rem;
        }
        .preview-bar.mini strong {
          font-size: 0.9rem;
        }

        /* ===== FIELD ===== */
        .field {
          margin-bottom: 1.25rem;
        }
        .field label {
          display: block;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #888;
          margin-bottom: 0.5rem;
        }
        .field input, .field textarea {
          width: 100%;
          padding: 0.875rem 1rem;
          background: #252525;
          border: 1px solid #333;
          border-radius: 10px;
          color: #fff;
          font-size: 0.95rem;
          transition: all 0.2s;
        }
        .field input:focus, .field textarea:focus {
          outline: none;
          border-color: #c9a961;
          box-shadow: 0 0 0 3px rgba(201, 169, 97, 0.1);
        }
        .field textarea {
          min-height: 100px;
          resize: vertical;
        }
        .field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        /* ===== IMAGE PICKER ===== */
        .img-picker {
          margin-bottom: 1.5rem;
        }
        .img-preview {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
        }
        .img-preview img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .img-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .img-preview:hover .img-overlay {
          opacity: 1;
        }
        .img-overlay button {
          padding: 0.75rem 1.5rem;
          background: #c9a961;
          color: #000;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
        }

        /* ===== ARROW BUTTONS ===== */
        .arrow-btn {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #333 0%, #222 100%);
          border: 1px solid #444;
          border-radius: 8px;
          color: #c9a961;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .arrow-btn:hover:not(.disabled) {
          background: linear-gradient(135deg, #c9a961 0%, #a88a4a 100%);
          color: #000;
          border-color: #c9a961;
          transform: scale(1.1);
        }
        .arrow-btn.disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        /* ===== CARDS ===== */
        .cards-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 2rem 0 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid #333;
        }
        .cards-header h3 {
          font-size: 1rem;
          font-weight: 600;
          margin: 0;
        }
        .add-btn {
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        .add-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(34, 197, 94, 0.3);
        }
        .add-btn.full {
          width: 100%;
          padding: 1rem;
          margin-bottom: 1rem;
        }

        .cards-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .card-item {
          background: #252525;
          border-radius: 12px;
          padding: 1.25rem;
          border: 1px solid #333;
        }
        .card-toolbar {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #333;
        }
        .card-num {
          font-weight: 700;
          color: #c9a961;
          font-size: 0.9rem;
        }
        .card-arrows {
          display: flex;
          gap: 0.5rem;
          flex: 1;
        }
        .delete-btn {
          padding: 0.5rem 1rem;
          background: transparent;
          border: 1px solid #ef4444;
          color: #ef4444;
          border-radius: 6px;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        .delete-btn:hover {
          background: #ef4444;
          color: #fff;
        }

        .sub-title {
          font-size: 1rem;
          font-weight: 600;
          margin: 2rem 0 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid #333;
        }

        /* ===== ARTICLES ===== */
        .articles-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .article-item {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: #252525;
          border-radius: 12px;
          border: 1px solid #333;
        }
        .article-arrows {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .article-arrows .arrow-btn {
          width: 30px;
          height: 26px;
          font-size: 0.7rem;
        }
        .article-thumb {
          width: 80px;
          height: 60px;
          object-fit: cover;
          border-radius: 8px;
        }
        .article-info {
          flex: 1;
          min-width: 200px;
          cursor: pointer;
        }
        .article-info strong {
          display: block;
          color: #fff;
          margin-bottom: 0.25rem;
        }
        .article-info span {
          font-size: 0.85rem;
          color: #888;
        }
        .article-edit {
          width: 100%;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #333;
        }
        .new-article-form {
          background: #252525;
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 1rem;
          border: 1px solid #333;
        }
        .new-article-form h4 {
          margin: 0 0 1rem;
          color: #c9a961;
        }
        .form-actions {
          display: flex;
          gap: 0.75rem;
          margin-top: 1rem;
        }
        .save-btn {
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #c9a961 0%, #a88a4a 100%);
          color: #000;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
        }
        .cancel-btn {
          padding: 0.75rem 1.5rem;
          background: #333;
          color: #888;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        /* ===== MODAL ===== */
        .modal-bg {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal-box {
          background: #1a1a1a;
          border-radius: 16px;
          width: 90%;
          max-width: 500px;
          max-height: 85vh;
          overflow: hidden;
          border: 1px solid #333;
        }
        .modal-box.small {
          max-width: 400px;
          padding: 2rem;
          text-align: center;
        }
        .modal-box.small h3 {
          margin: 0 0 0.5rem;
          color: #fff;
        }
        .modal-box.small p {
          color: #888;
          margin: 0 0 1.5rem;
        }
        .modal-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          background: #252525;
          border-bottom: 1px solid #333;
        }
        .modal-top h3 {
          margin: 0;
          font-size: 1.1rem;
        }
        .modal-top button {
          width: 32px;
          height: 32px;
          background: #333;
          border: none;
          border-radius: 8px;
          color: #888;
          font-size: 1.3rem;
          cursor: pointer;
        }
        .modal-content {
          padding: 1.5rem;
          max-height: 60vh;
          overflow-y: auto;
        }
        .modal-content label {
          display: block;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          color: #888;
          margin: 1rem 0 0.5rem;
        }
        .modal-content label:first-child {
          margin-top: 0;
        }
        .modal-content input {
          width: 100%;
          padding: 0.75rem 1rem;
          background: #252525;
          border: 1px solid #333;
          border-radius: 8px;
          color: #fff;
        }
        .upload-zone {
          padding: 1.5rem;
          background: #252525;
          border: 2px dashed #444;
          border-radius: 12px;
          text-align: center;
          color: #888;
          cursor: pointer;
          transition: all 0.2s;
        }
        .upload-zone:hover {
          border-color: #c9a961;
          color: #c9a961;
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem;
          max-height: 180px;
          overflow-y: auto;
        }
        .gallery-item {
          aspect-ratio: 1;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          border: 2px solid transparent;
          transition: all 0.2s;
        }
        .gallery-item:hover {
          border-color: #666;
        }
        .gallery-item.selected {
          border-color: #c9a961;
        }
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .modal-actions {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
        }
        .danger-btn {
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          color: #fff;
          border: none;
          border-radius: 8px;
          font-weight: 600;
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
