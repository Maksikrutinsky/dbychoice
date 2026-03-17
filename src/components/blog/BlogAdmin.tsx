'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useBlog, Article } from '@/context/BlogContext';
import { uploadBlogImageToCloud } from '@/app/blog/cloud';

const availableImages = [
  '/images/gallery1.jpg', '/images/gallery2.jpg', '/images/gallery3.jpg', '/images/gallery4.jpg',
  '/images/gallery5.jpg', '/images/gallery6.jpg', '/images/gallery7.jpg', '/images/gallery8.jpg',
  '/images/salon.webp', '/images/Kitchens1.webp', '/images/Dining1.webp',
  '/images/OFFICE SPACES.webp', '/images/HOSPITALITY.webp', '/images/RETAIL DESIGN.webp',
];

// Icons as separate components
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

// Separate ImagePicker component with local state
function ImagePickerModal({
  currentImage,
  onSelect,
  onClose
}: {
  currentImage: string;
  onSelect: (img: string) => void;
  onClose: () => void;
}) {
  const [urlInput, setUrlInput] = useState(currentImage || '');
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (ev) => {
      const base64 = ev.target?.result as string;
      setUploading(true);
      try {
        const url = await uploadBlogImageToCloud(base64);
        onSelect(url);
        onClose();
      } catch {
        // fallback: use base64 locally
        onSelect(base64);
        onClose();
      } finally {
        setUploading(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleApplyUrl = () => {
    if (urlInput.trim()) {
      onSelect(urlInput.trim());
      onClose();
    }
  };

  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <div className="modal-top">
          <h3>Choose Image</h3>
          <button onClick={onClose}>×</button>
        </div>
        <div className="modal-content">
          <label>Enter Image URL</label>
          <div className="url-row">
            <input
              type="text"
              value={urlInput}
              onChange={e => setUrlInput(e.target.value)}
              placeholder="https://example.com/image.jpg"
            />
            <button className="apply-btn" onClick={handleApplyUrl}>Apply</button>
          </div>

          <label>Or Upload File</label>
          <div className="upload-zone" onClick={() => !uploading && fileRef.current?.click()}>
            {uploading ? 'Uploading…' : 'Click to upload'}
          </div>
          <input ref={fileRef} type="file" accept="image/*" onChange={handleUpload} hidden />

          <label>Or Select from Gallery</label>
          <div className="gallery-grid">
            {availableImages.map((img, i) => (
              <div
                key={i}
                className={`gallery-item ${currentImage === img ? 'selected' : ''}`}
                onClick={() => { onSelect(img); onClose(); }}
              >
                <img src={img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .modal-bg {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
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
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          color: #86868b;
          margin: 1rem 0 0.5rem;
        }
        .modal-content label:first-child {
          margin-top: 0;
        }
        .url-row {
          display: flex;
          gap: 0.5rem;
        }
        .url-row input {
          flex: 1;
          padding: 0.65rem 0.85rem;
          background: #fff;
          border: 1px solid #e5e5e7;
          border-radius: 6px;
          color: #1d1d1f;
          font-size: 0.9rem;
        }
        .url-row input:focus {
          outline: none;
          border-color: #007aff;
        }
        .apply-btn {
          padding: 0.65rem 1rem;
          background: #007aff;
          color: #fff;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
        }
        .apply-btn:hover {
          background: #0056b3;
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
      `}</style>
    </div>
  );
}

export default function BlogAdmin() {
  const { data, updateMainHero, updateSectionIntro, updatePageHero, updatePageContent, updateArticles, saveAll, resetToDefault, hasUnsavedChanges } = useBlog();
  const [activeTab, setActiveTab] = useState<'main' | 'inspiration' | 'tips' | 'guides' | 'insights'>('main');
  const [saveMessage, setSaveMessage] = useState('');
  const [imagePickerFor, setImagePickerFor] = useState<{ id: string; current: string; onSelect: (img: string) => void } | null>(null);
  const [editingArticle, setEditingArticle] = useState<string | null>(null);
  const [showNewArticle, setShowNewArticle] = useState(false);
  const [newArticle, setNewArticle] = useState({ title: '', excerpt: '', content: '', image: '/images/gallery1.jpg' });
  const [autoSave, setAutoSave] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['hero', 'section-0', 'section-1', 'section-2', 'section-3', 'page-hero', 'page-content', 'articles']));
  const [pendingDelete, setPendingDelete] = useState<{ type: 'article'; id: string } | { type: 'card'; idx: number } | null>(null);

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

  // Filter articles by current tab category
  const filteredArticles = activeTab !== 'main'
    ? data.articles.filter(a => a.category === activeTab)
    : [];

  // Card functions
  const addCard = () => {
    if (activeTab === 'main') return;
    const cards = [...(data.pageContents[activeTab]?.cards || [])];
    cards.push({ title: 'New Card', description: 'Description...', image: '/images/gallery1.jpg' });
    updatePageContent(activeTab, { ...data.pageContents[activeTab], cards });
  };

  const deleteCard = (idx: number) => {
    setPendingDelete({ type: 'card', idx });
  };

  const confirmDeleteCard = (idx: number) => {
    const cards = [...(data.pageContents[activeTab]?.cards || [])];
    cards.splice(idx, 1);
    updatePageContent(activeTab, { ...data.pageContents[activeTab], cards });
    setPendingDelete(null);
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
    const newArt: Article = {
      id: Date.now().toString(),
      title: newArticle.title,
      excerpt: newArticle.excerpt,
      content: newArticle.content,
      image: newArticle.image,
      category: activeTab as 'inspiration' | 'tips' | 'guides' | 'insights'
    };
    updateArticles([...data.articles, newArt]);
    setNewArticle({ title: '', excerpt: '', content: '', image: '/images/gallery1.jpg' });
    setShowNewArticle(false);
  };

  const deleteArticle = (id: string) => {
    setPendingDelete({ type: 'article', id });
  };

  const confirmDeleteArticle = (id: string) => {
    updateArticles(data.articles.filter(a => a.id !== id));
    if (editingArticle === id) setEditingArticle(null);
    setPendingDelete(null);
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

  // Open image picker
  const openImagePicker = (id: string, current: string, onSelect: (img: string) => void) => {
    setImagePickerFor({ id, current, onSelect });
  };

  // Fixed button labels (hardcoded in BlogContent — shown read-only in admin)
  const FIXED_BTN_LABELS: Record<string, string> = {
    inspiration: 'Explore Inspirations',
    tips: 'Discover Tips',
    guides: 'View Guides',
    insights: 'Explore Insights',
  };

  // Field component
  const Field = ({ label, value, onChange, multi = false }: { label: string; value: string; onChange: (v: string) => void; multi?: boolean }) => (
    <div className="field">
      <label>{label}</label>
      {multi ? (
        <textarea value={value} onChange={e => onChange(e.target.value)} />
      ) : (
        <input type="text" value={value} onChange={e => onChange(e.target.value)} />
      )}
    </div>
  );

  // Arrow Button
  const ArrowBtn = ({ dir, onClick, disabled }: { dir: 'up' | 'down'; onClick: () => void; disabled?: boolean }) => (
    <button className={`arrow-btn ${disabled ? 'disabled' : ''}`} onClick={onClick} disabled={disabled} title={dir === 'up' ? 'Move up' : 'Move down'}>
      {dir === 'up' ? (
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 15l-6-6-6 6"/></svg>
      ) : (
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6"/></svg>
      )}
    </button>
  );

  // Image Preview with edit button
  const ImagePreview = ({ src, pickerId, onSelect }: { src: string; pickerId: string; onSelect: (img: string) => void }) => (
    <div className="img-preview-small">
      <img src={src || '/images/gallery1.jpg'} alt="" />
      <button className="img-edit-btn" onClick={() => openImagePicker(pickerId, src, onSelect)}>
        <ImageIcon /> Change
      </button>
    </div>
  );

  return (
    <div className="admin-page">
      {/* HEADER */}
      <header className="admin-header">
        <div className="header-left">
          <Link href="/admin" className="back-btn">← Dashboard</Link>
          <h1>From Us to You <span>Admin</span></h1>
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
          <button className="header-btn primary" onClick={handleSave}>
            Save
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7"/></svg>
          </button>
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
                  <ImagePreview
                    src={data.mainHero.image}
                    pickerId="hero"
                    onSelect={img => updateMainHero({ ...data.mainHero, image: img })}
                  />
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
                    <div className="field">
                      <label>Button Text <span style={{ fontSize: '0.75rem', color: '#b8921a', fontWeight: 500 }}>(fixed)</span></label>
                      <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        padding: '9px 20px', background: 'linear-gradient(135deg, #b8921a, #d4af37)',
                        color: '#fff', borderRadius: '50px', fontSize: '0.88rem',
                        fontWeight: 600, letterSpacing: '0.06em', userSelect: 'none',
                        boxShadow: '0 3px 14px rgba(184,146,26,0.35)', width: 'fit-content',
                      }}>
                        {FIXED_BTN_LABELS[sec]}
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19"/>
                        </svg>
                      </div>
                    </div>
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
                  <ImagePreview
                    src={data.pageHeros[activeTab]?.image || ''}
                    pickerId="page-hero"
                    onSelect={img => updatePageHero(activeTab, { ...data.pageHeros[activeTab], image: img })}
                  />
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
                        <ImagePreview
                          src={card.image}
                          pickerId={`card-${idx}`}
                          onSelect={img => {
                            const cards = [...data.pageContents[activeTab].cards];
                            cards[idx] = { ...cards[idx], image: img };
                            updatePageContent(activeTab, { ...data.pageContents[activeTab], cards });
                          }}
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
                  {!showNewArticle && (
                    <button className="add-btn full" onClick={() => setShowNewArticle(true)}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
                      Add New Article
                    </button>
                  )}

                  {showNewArticle && (
                    <div className="new-form">
                      <h4>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                        New Article
                      </h4>
                      <ImagePreview
                        src={newArticle.image}
                        pickerId="new-article"
                        onSelect={img => setNewArticle({ ...newArticle, image: img })}
                      />
                      <Field label="Title" value={newArticle.title} onChange={v => setNewArticle({ ...newArticle, title: v })} />
                      <Field label="Excerpt" value={newArticle.excerpt} onChange={v => setNewArticle({ ...newArticle, excerpt: v })} />
                      <Field label="Content" value={newArticle.content} onChange={v => setNewArticle({ ...newArticle, content: v })} multi />
                      <div className="form-actions">
                        <button className="save-btn" onClick={addArticle}>Add</button>
                        <button className="cancel-btn" onClick={() => setShowNewArticle(false)}>Cancel</button>
                      </div>
                    </div>
                  )}

                  {filteredArticles.length === 0 ? (
                    <div className="no-articles">
                      <p>No articles in this category yet.</p>
                      <p className="hint">Click &quot;+ Add New Article&quot; to create one.</p>
                    </div>
                  ) : (
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
                          <button className="icon-btn-labeled edit" onClick={() => setEditingArticle(editingArticle === art.id ? null : art.id)} title="Edit article">
                            <EditIcon />
                            <span>{editingArticle === art.id ? 'Close' : 'Edit'}</span>
                          </button>
                          <button className="icon-btn-labeled trash" onClick={() => deleteArticle(art.id)} title="Delete article">
                            <TrashIcon />
                            <span>Delete</span>
                          </button>

                          {editingArticle === art.id && (
                            <div className="article-edit">
                              <ImagePreview
                                src={art.image}
                                pickerId={`article-${art.id}`}
                                onSelect={img => updateArticles(data.articles.map(a => a.id === art.id ? { ...a, image: img } : a))}
                              />
                              <Field label="Title" value={art.title} onChange={v => updateArticles(data.articles.map(a => a.id === art.id ? { ...a, title: v } : a))} />
                              <Field label="Excerpt" value={art.excerpt} onChange={v => updateArticles(data.articles.map(a => a.id === art.id ? { ...a, excerpt: v } : a))} />
                              <Field label="Content" value={art.content} onChange={v => updateArticles(data.articles.map(a => a.id === art.id ? { ...a, content: v } : a))} multi />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </section>
          </>
        )}
      </main>

      {/* IMAGE PICKER MODAL */}
      {imagePickerFor && (
        <ImagePickerModal
          currentImage={imagePickerFor.current}
          onSelect={imagePickerFor.onSelect}
          onClose={() => setImagePickerFor(null)}
        />
      )}

      {/* DELETE CONFIRM MODAL */}
      {pendingDelete && (
        <div className="modal-bg" onClick={() => setPendingDelete(null)}>
          <div className="modal-box small" onClick={e => e.stopPropagation()}>
            <div className="modal-icon-danger">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/>
              </svg>
            </div>
            <h3>{pendingDelete.type === 'article' ? 'Delete Article?' : 'Delete Card?'}</h3>
            <p>This action cannot be undone.</p>
            <div className="modal-actions">
              <button className="cancel-btn" onClick={() => setPendingDelete(null)}>Cancel</button>
              <button className="danger-btn" onClick={() => {
                if (pendingDelete.type === 'article') confirmDeleteArticle(pendingDelete.id);
                else confirmDeleteCard(pendingDelete.idx);
              }}>Delete</button>
            </div>
          </div>
        </div>
      )}

      {/* RESET MODAL */}
      {showResetConfirm && (
        <div className="modal-bg" onClick={() => setShowResetConfirm(false)}>
          <div className="modal-box small" onClick={e => e.stopPropagation()}>
            <div className="modal-icon-warn">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            </div>
            <h3>Reset Everything?</h3>
            <p>All content will revert to defaults. This cannot be undone.</p>
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
          background: #080c18;
          color: #e8e0d0;
          font-family: var(--font-inter), "Inter", system-ui, sans-serif;
        }

        /* ===== HEADER ===== */
        .admin-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 32px;
          background: linear-gradient(135deg, #06080f 0%, #0d1225 100%);
          border-bottom: 1px solid rgba(212,175,55,0.25);
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 4px 24px rgba(0,0,0,0.4);
        }
        .header-left {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .back-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          font-size: 0.82rem;
          letter-spacing: 0.04em;
          transition: color 0.2s;
        }
        .back-btn:hover { color: #d4af37; }
        .admin-header h1 {
          font-family: "Playfair Display", serif;
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: #fff;
          margin: 0;
        }
        .admin-header h1 span {
          background: linear-gradient(135deg, #b8921a, #d4af37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .header-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        /* Toggle */
        .auto-toggle {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.02em;
        }
        .auto-toggle input { display: none; }
        .toggle-track {
          width: 40px;
          height: 22px;
          background: rgba(255,255,255,0.1);
          border-radius: 11px;
          position: relative;
          transition: 0.3s;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .toggle-thumb {
          position: absolute;
          width: 16px;
          height: 16px;
          background: rgba(255,255,255,0.5);
          border-radius: 50%;
          top: 2px;
          left: 2px;
          transition: 0.3s;
        }
        .auto-toggle input:checked + .toggle-track {
          background: rgba(184,146,26,0.4);
          border-color: #b8921a;
        }
        .auto-toggle input:checked + .toggle-track .toggle-thumb {
          left: 20px;
          background: #d4af37;
        }

        .save-msg {
          color: #a8d5a2;
          font-size: 0.8rem;
          padding: 5px 12px;
          background: rgba(168,213,162,0.1);
          border: 1px solid rgba(168,213,162,0.2);
          border-radius: 20px;
          letter-spacing: 0.03em;
        }
        .unsaved-dot {
          width: 8px;
          height: 8px;
          background: #d4af37;
          border-radius: 50%;
          animation: pulse 2s infinite;
          box-shadow: 0 0 6px rgba(212,175,55,0.5);
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        /* Header buttons */
        .header-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 20px;
          border-radius: 50px;
          font-size: 0.83rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s;
          border: none;
          font-family: inherit;
          letter-spacing: 0.05em;
        }
        .header-btn.outline {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.18);
          color: rgba(255,255,255,0.55);
        }
        .header-btn.outline:hover {
          border-color: rgba(220,60,60,0.6);
          color: #ff9999;
          background: rgba(200,50,50,0.1);
        }
        .header-btn.primary {
          background: linear-gradient(135deg, #b8921a 0%, #d4af37 50%, #d4a84b 100%);
          color: #fff;
          box-shadow: 0 4px 18px rgba(184,146,26,0.4);
          position: relative;
          overflow: hidden;
        }
        .header-btn.primary::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
          transition: left 0.5s;
        }
        .header-btn.primary:hover::after { left: 160%; }
        .header-btn.primary:hover {
          box-shadow: 0 6px 24px rgba(212,175,55,0.55);
          transform: translateY(-1px);
        }

        /* ===== TABS ===== */
        .admin-tabs {
          display: flex;
          gap: 0;
          background: #0d1225;
          padding: 0 32px;
          border-bottom: 1px solid rgba(212,175,55,0.12);
          overflow-x: auto;
        }
        .tab {
          padding: 15px 24px;
          background: none;
          border: none;
          color: rgba(255,255,255,0.35);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          position: relative;
          transition: color 0.2s;
          white-space: nowrap;
          font-family: inherit;
          letter-spacing: 0.05em;
        }
        .tab:hover { color: rgba(255,255,255,0.75); }
        .tab.active {
          color: #d4af37;
          font-weight: 700;
        }
        .tab.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #b8921a, #d4af37);
        }

        /* ===== CONTENT ===== */
        .admin-content {
          max-width: 900px;
          margin: 0 auto;
          padding: 28px 24px;
        }

        /* ===== SECTION ===== */
        .admin-section {
          background: #0f1528;
          border-radius: 16px;
          margin-bottom: 14px;
          overflow: hidden;
          border: 1px solid rgba(212,175,55,0.12);
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          transition: border-color 0.2s;
        }
        .admin-section:hover {
          border-color: rgba(212,175,55,0.22);
        }
        .section-head {
          display: flex;
          align-items: center;
          padding: 16px 20px;
          cursor: pointer;
          transition: background 0.2s;
          gap: 12px;
        }
        .section-head:hover {
          background: rgba(212,175,55,0.04);
        }
        .section-num {
          width: 28px;
          height: 28px;
          background: linear-gradient(135deg, #b8921a, #d4af37);
          color: #fff;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.8rem;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(184,146,26,0.35);
        }
        .section-head h2 {
          flex: 1;
          font-family: "Playfair Display", serif;
          font-size: 1rem;
          font-weight: 700;
          margin: 0;
          color: #e8e0d0;
          letter-spacing: 0.02em;
        }
        .expand-icon {
          width: 26px;
          height: 26px;
          background: rgba(212,175,55,0.08);
          border: 1px solid rgba(212,175,55,0.15);
          border-radius: 7px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          color: #d4af37;
        }
        .section-body {
          padding: 20px;
          border-top: 1px solid rgba(212,175,55,0.1);
          background: #0a0e1e;
        }

        /* ===== FIELD ===== */
        .field {
          margin-bottom: 14px;
        }
        .field label {
          display: block;
          font-size: 0.7rem;
          font-weight: 700;
          color: rgba(212,175,55,0.65);
          margin-bottom: 6px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }
        .field input, .field textarea {
          width: 100%;
          padding: 11px 14px;
          background: #141930;
          border: 1.5px solid rgba(212,175,55,0.15);
          border-radius: 10px;
          color: #e8e0d0;
          font-size: 0.92rem;
          font-family: inherit;
          transition: border-color 0.2s, background 0.2s;
          outline: none;
        }
        .field input:focus, .field textarea:focus {
          border-color: rgba(212,175,55,0.5);
          background: #19203a;
        }
        .field textarea {
          min-height: 80px;
          resize: vertical;
        }
        .field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        /* ===== IMAGE PREVIEW ===== */
        .img-preview-small {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px;
          background: #141930;
          border: 1.5px solid rgba(212,175,55,0.15);
          border-radius: 12px;
          margin-bottom: 14px;
        }
        .img-preview-small img {
          width: 80px;
          height: 60px;
          object-fit: cover;
          border-radius: 8px;
          border: 1px solid rgba(212,175,55,0.2);
        }
        .img-edit-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background: rgba(184,146,26,0.1);
          border: 1px solid rgba(184,146,26,0.3);
          border-radius: 20px;
          color: #d4af37;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
          letter-spacing: 0.04em;
        }
        .img-edit-btn:hover {
          background: rgba(184,146,26,0.2);
          border-color: rgba(212,175,55,0.5);
        }

        /* ===== ARROW BUTTONS ===== */
        .arrow-btn {
          width: 30px;
          height: 28px;
          background: #141930;
          border: 1px solid rgba(212,175,55,0.2);
          border-radius: 7px;
          color: rgba(212,175,55,0.7);
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: inherit;
        }
        .arrow-btn:hover:not(.disabled) {
          background: linear-gradient(135deg, #b8921a, #d4af37);
          color: #fff;
          border-color: #d4af37;
        }
        .arrow-btn.disabled {
          opacity: 0.2;
          cursor: not-allowed;
        }

        /* ===== ICON BUTTONS ===== */
        .icon-btn {
          width: 34px;
          height: 34px;
          background: #141930;
          border: 1px solid rgba(212,175,55,0.15);
          border-radius: 9px;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: inherit;
        }
        .icon-btn.edit {
          color: #d4af37;
        }
        .icon-btn.edit:hover {
          background: linear-gradient(135deg, #b8921a, #d4af37);
          color: #fff;
          border-color: #d4af37;
        }
        .icon-btn.trash {
          color: #e05050;
          border-color: rgba(224,80,80,0.2);
        }
        .icon-btn.trash:hover {
          background: #c0392b;
          color: #fff;
          border-color: #c0392b;
        }

        /* ===== CARDS ===== */
        .cards-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 18px 0 12px;
          padding-top: 14px;
          border-top: 1px solid rgba(212,175,55,0.1);
        }
        .cards-header h3 {
          font-size: 0.88rem;
          font-weight: 700;
          margin: 0;
          color: #e8e0d0;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .add-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 18px;
          background: linear-gradient(135deg, #b8921a 0%, #d4af37 100%);
          color: #fff;
          border: none;
          border-radius: 50px;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s;
          font-family: inherit;
          letter-spacing: 0.05em;
          box-shadow: 0 3px 12px rgba(184,146,26,0.35);
          position: relative;
          overflow: hidden;
        }
        .add-btn::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
          transition: left 0.5s;
        }
        .add-btn:hover::after { left: 160%; }
        .add-btn:hover {
          box-shadow: 0 5px 20px rgba(212,175,55,0.5);
          transform: translateY(-1px);
        }
        .add-btn.full {
          display: flex;
          justify-content: center;
          width: 100%;
          padding: 13px;
          margin-bottom: 14px;
          font-size: 0.9rem;
          border-radius: 12px;
        }

        .cards-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .card-item {
          background: #141930;
          border-radius: 12px;
          padding: 14px;
          border: 1px solid rgba(212,175,55,0.12);
        }
        .card-toolbar {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(212,175,55,0.08);
        }
        .card-num {
          font-weight: 700;
          color: #d4af37;
          font-size: 0.82rem;
          letter-spacing: 0.04em;
        }
        .card-arrows {
          display: flex;
          gap: 4px;
          flex: 1;
        }

        .sub-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: #e8e0d0;
          margin: 18px 0 12px;
          padding-top: 14px;
          border-top: 1px solid rgba(212,175,55,0.1);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        /* ===== ARTICLES ===== */
        .no-articles {
          text-align: center;
          padding: 36px;
          color: rgba(255,255,255,0.3);
        }
        .no-articles p { margin: 4px 0; }
        .no-articles .hint { font-size: 0.82rem; }
        .articles-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .article-item {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
          padding: 12px;
          background: #141930;
          border-radius: 12px;
          border: 1px solid rgba(212,175,55,0.1);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .article-item:hover {
          border-color: rgba(212,175,55,0.22);
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
        }
        .article-arrows {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .article-arrows .arrow-btn {
          width: 26px;
          height: 22px;
          font-size: 0.6rem;
        }
        .article-thumb {
          width: 60px;
          height: 45px;
          object-fit: cover;
          border-radius: 7px;
          border: 1px solid rgba(212,175,55,0.15);
        }
        .article-info {
          flex: 1;
          min-width: 150px;
        }
        .article-info strong {
          display: block;
          color: #e8e0d0;
          font-size: 0.88rem;
          margin-bottom: 3px;
        }
        .article-info span {
          font-size: 0.77rem;
          color: rgba(255,255,255,0.35);
        }
        .article-edit {
          width: 100%;
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid rgba(212,175,55,0.1);
        }

        /* ===== NEW ARTICLE FORM ===== */
        .new-form {
          background: #141930;
          border-radius: 14px;
          padding: 20px;
          margin-bottom: 14px;
          border: 1.5px solid rgba(212,175,55,0.2);
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }
        .new-form h4 {
          margin: 0 0 16px;
          color: #d4af37;
          font-size: 0.95rem;
          font-weight: 700;
          font-family: "Playfair Display", serif;
          display: flex;
          align-items: center;
          gap: 8px;
          letter-spacing: 0.04em;
        }
        .form-actions {
          display: flex;
          gap: 8px;
          margin-top: 14px;
          padding-top: 14px;
          border-top: 1px solid rgba(212,175,55,0.1);
        }
        .save-btn {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 10px 20px;
          background: linear-gradient(135deg, #b8921a 0%, #d4af37 50%, #d4a84b 100%);
          color: #fff;
          border: none;
          border-radius: 50px;
          font-weight: 700;
          cursor: pointer;
          font-family: inherit;
          font-size: 0.88rem;
          letter-spacing: 0.05em;
          transition: all 0.25s;
          box-shadow: 0 4px 16px rgba(184,146,26,0.4);
          position: relative;
          overflow: hidden;
        }
        .save-btn::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
          transition: left 0.5s;
        }
        .save-btn:hover::after { left: 160%; }
        .save-btn:hover {
          box-shadow: 0 6px 22px rgba(212,175,55,0.55);
          transform: translateY(-1px);
        }
        .cancel-btn {
          padding: 10px 18px;
          background: transparent;
          color: rgba(255,255,255,0.45);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 50px;
          cursor: pointer;
          font-family: inherit;
          font-size: 0.88rem;
          transition: all 0.2s;
          letter-spacing: 0.03em;
        }
        .cancel-btn:hover {
          border-color: rgba(255,255,255,0.3);
          color: rgba(255,255,255,0.7);
        }

        /* ===== MODAL (delete / reset confirm) ===== */
        .modal-bg {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.65);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal-box {
          background: #0f1528;
          border-radius: 18px;
          width: 90%;
          max-width: 360px;
          padding: 30px;
          text-align: center;
          box-shadow: 0 24px 64px rgba(0,0,0,0.6);
          border: 1px solid rgba(212,175,55,0.15);
        }
        .modal-box h3 {
          margin: 0 0 8px;
          font-size: 1.15rem;
          font-family: "Playfair Display", serif;
          color: #e8e0d0;
          letter-spacing: 0.02em;
        }
        .modal-box p {
          color: rgba(255,255,255,0.4);
          margin: 0 0 22px;
          font-size: 0.87rem;
        }
        .modal-actions {
          display: flex;
          gap: 10px;
          justify-content: center;
        }
        .danger-btn {
          padding: 10px 24px;
          background: linear-gradient(135deg, #c0392b, #e05050);
          color: #fff;
          border: none;
          border-radius: 50px;
          font-weight: 700;
          cursor: pointer;
          font-family: inherit;
          font-size: 0.88rem;
          letter-spacing: 0.04em;
          transition: all 0.25s;
          box-shadow: 0 4px 16px rgba(192,57,43,0.4);
        }
        .danger-btn:hover {
          box-shadow: 0 6px 22px rgba(192,57,43,0.6);
          transform: translateY(-1px);
        }

        /* ===== LABELED ICON BUTTONS (articles) ===== */
        .icon-btn-labeled {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 7px 14px;
          border-radius: 20px;
          border: 1px solid;
          cursor: pointer;
          font-size: 0.78rem;
          font-weight: 600;
          font-family: inherit;
          transition: all 0.2s;
          white-space: nowrap;
          letter-spacing: 0.04em;
        }
        .icon-btn-labeled.edit {
          color: #d4af37;
          background: rgba(212,175,55,0.07);
          border-color: rgba(212,175,55,0.2);
        }
        .icon-btn-labeled.edit:hover {
          background: linear-gradient(135deg, #b8921a, #d4af37);
          color: #fff;
          border-color: #d4af37;
        }
        .icon-btn-labeled.trash {
          color: #e05050;
          background: rgba(224,80,80,0.06);
          border-color: rgba(224,80,80,0.2);
        }
        .icon-btn-labeled.trash:hover {
          background: #c0392b;
          color: #fff;
          border-color: #c0392b;
        }

        /* ===== MODAL ICONS ===== */
        .modal-icon-danger, .modal-icon-warn {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 18px;
        }
        .modal-icon-danger {
          background: rgba(192,57,43,0.12);
          color: #e05050;
          border: 1px solid rgba(192,57,43,0.25);
        }
        .modal-icon-warn {
          background: rgba(212,175,55,0.1);
          color: #d4af37;
          border: 1px solid rgba(212,175,55,0.2);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          .admin-header {
            flex-wrap: wrap;
            gap: 12px;
            padding: 12px 16px;
          }
          .header-left, .header-right {
            width: 100%;
            justify-content: space-between;
          }
          .admin-tabs {
            padding: 0 16px;
          }
          .admin-content {
            padding: 16px;
          }
          .field-row {
            grid-template-columns: 1fr;
          }
          .icon-btn-labeled span {
            display: none;
          }
          .icon-btn-labeled {
            padding: 8px;
          }
        }
      `}</style>
    </div>
  );
}
