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

const BlogAdmin = () => {
  const { data, updateMainHero, updateSectionIntro, updatePageHero, updatePageContent, updateArticles, saveAll, resetToDefault, hasUnsavedChanges } = useBlog();
  const [activeTab, setActiveTab] = useState<'main' | 'inspiration' | 'tips' | 'guides' | 'insights'>('main');
  const [saveMessage, setSaveMessage] = useState('');
  const [showImagePicker, setShowImagePicker] = useState<string | null>(null);
  const [editingArticle, setEditingArticle] = useState<string | null>(null);
  const [showNewArticle, setShowNewArticle] = useState(false);
  const [newArticle, setNewArticle] = useState({ title: '', excerpt: '', content: '', image: '/images/gallery1.jpg' });
  const [autoSave, setAutoSave] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [collapsedSections, setCollapsedSections] = useState<Set<string>>(new Set());

  // Auto-save effect
  useEffect(() => {
    if (autoSave && hasUnsavedChanges) {
      const timer = setTimeout(() => {
        saveAll();
        setSaveMessage('Auto-saved');
        setTimeout(() => setSaveMessage(''), 2000);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [autoSave, hasUnsavedChanges, data, saveAll]);

  const handleSave = () => {
    saveAll();
    setSaveMessage('Saved');
    setTimeout(() => setSaveMessage(''), 2000);
  };

  const handleReset = () => {
    resetToDefault();
    setShowResetConfirm(false);
    setSaveMessage('Reset to default');
    setTimeout(() => setSaveMessage(''), 2000);
  };

  const toggleSection = (id: string) => {
    setCollapsedSections(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filteredArticles = activeTab !== 'main' ? data.articles.filter(a => a.category === activeTab) : [];

  const handleAddArticle = () => {
    if (!newArticle.title || activeTab === 'main') return;
    updateArticles([...data.articles, { id: Date.now().toString(), ...newArticle, category: activeTab as Article['category'] }]);
    setNewArticle({ title: '', excerpt: '', content: '', image: '/images/gallery1.jpg' });
    setShowNewArticle(false);
  };

  const handleDeleteArticle = (id: string) => {
    if (confirm('Delete this article?')) updateArticles(data.articles.filter(a => a.id !== id));
  };

  // Card management functions
  const handleAddCard = () => {
    if (activeTab === 'main') return;
    const cards = [...(data.pageContents[activeTab]?.cards || [])];
    cards.push({ title: 'New Card', description: 'Enter description here...', image: '/images/gallery1.jpg' });
    updatePageContent(activeTab, { ...data.pageContents[activeTab], cards });
  };

  const handleDeleteCard = (index: number) => {
    if (activeTab === 'main') return;
    const cards = [...(data.pageContents[activeTab]?.cards || [])];
    cards.splice(index, 1);
    updatePageContent(activeTab, { ...data.pageContents[activeTab], cards });
  };

  const handleMoveCard = (index: number, direction: 'up' | 'down') => {
    if (activeTab === 'main') return;
    const cards = [...(data.pageContents[activeTab]?.cards || [])];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= cards.length) return;
    [cards[index], cards[newIndex]] = [cards[newIndex], cards[index]];
    updatePageContent(activeTab, { ...data.pageContents[activeTab], cards });
  };

  // Article management functions
  const handleMoveArticle = (id: string, direction: 'up' | 'down') => {
    const categoryArticles = data.articles.filter(a => a.category === activeTab);
    const otherArticles = data.articles.filter(a => a.category !== activeTab);
    const index = categoryArticles.findIndex(a => a.id === id);
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= categoryArticles.length) return;
    [categoryArticles[index], categoryArticles[newIndex]] = [categoryArticles[newIndex], categoryArticles[index]];
    updateArticles([...otherArticles, ...categoryArticles]);
  };

  // Section Controls Component
  const SectionControls = ({ id, canMove, onMoveUp, onMoveDown, isFirst, isLast }: {
    id: string;
    canMove?: boolean;
    onMoveUp?: () => void;
    onMoveDown?: () => void;
    isFirst?: boolean;
    isLast?: boolean;
  }) => (
    <div className="section-controls">
      <button
        className="control-btn collapse-btn"
        onClick={() => toggleSection(id)}
        title={collapsedSections.has(id) ? 'Expand' : 'Collapse'}
      >
        {collapsedSections.has(id) ? '▼' : '▲'}
      </button>
      {canMove && (
        <>
          <button
            className="control-btn move-btn"
            onClick={onMoveUp}
            disabled={isFirst}
            title="Move Up"
          >↑</button>
          <button
            className="control-btn move-btn"
            onClick={onMoveDown}
            disabled={isLast}
            title="Move Down"
          >↓</button>
        </>
      )}
    </div>
  );

  const ImagePicker = ({ currentImage, onSelect, pickerId }: { currentImage: string; onSelect: (img: string) => void; pickerId: string }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const base64 = event.target?.result as string;
          onSelect(base64);
          setShowImagePicker(null);
        };
        reader.readAsDataURL(file);
      }
    };

    return (
      <>
        <div className="image-field">
          <img src={currentImage || '/images/gallery1.jpg'} alt="" />
          <div className="image-actions">
            <button className="styled-btn gallery-btn" onClick={() => setShowImagePicker(pickerId)}>
              <span className="btn-icon">🖼</span> Gallery
            </button>
            <button className="styled-btn upload-btn" onClick={() => fileInputRef.current?.click()}>
              <span className="btn-icon">↑</span> Upload
            </button>
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileUpload} style={{ display: 'none' }} />
          </div>
        </div>
        {showImagePicker === pickerId && (
          <div className="modal-overlay" onClick={() => setShowImagePicker(null)}>
            <div className="modal" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <h3>Select Image</h3>
                <button className="close-btn" onClick={() => setShowImagePicker(null)}>×</button>
              </div>
              <div className="modal-body">
                <div className="url-section">
                  <label>Image URL</label>
                  <input
                    type="text"
                    placeholder="Paste image URL here..."
                    value={currentImage}
                    onChange={e => onSelect(e.target.value)}
                    className="url-input"
                  />
                </div>
                <div className="upload-section">
                  <label>Or Upload Image</label>
                  <button className="upload-area" onClick={() => { fileInputRef.current?.click(); }}>
                    <span className="upload-icon">↑</span>
                    <span>Choose File (No Size Limit)</span>
                  </button>
                </div>
                <div className="gallery-section">
                  <label>Or Select from Gallery</label>
                  <div className="image-grid">
                    {availableImages.map((img, i) => (
                      <div key={i} className={`thumb ${currentImage === img ? 'selected' : ''}`} onClick={() => { onSelect(img); setShowImagePicker(null); }}>
                        <img src={img} alt="" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  // Preview Component
  const Preview = ({ type, section }: { type: 'hero' | 'section' | 'page' | 'cards'; section?: string }) => {
    if (type === 'hero') {
      return (
        <div className="preview-box">
          <div className="preview-label">Live Preview</div>
          <div className="preview-hero">
            <img src={data.mainHero.image || '/images/salon.webp'} alt="" />
            <div className="preview-hero-text">
              <span className="preview-tagline">{data.mainHero.tagline}</span>
              <h4>{data.mainHero.title} <em>{data.mainHero.titleAccent}</em></h4>
            </div>
          </div>
        </div>
      );
    }
    if (type === 'section' && section) {
      const intro = data.sectionIntros[section];
      return (
        <div className="preview-box mini">
          <div className="preview-label">Live Preview</div>
          <div className="preview-section">
            <h5>{intro?.title} <em>{intro?.subtitle}</em></h5>
            <p>{intro?.intro?.substring(0, 80)}...</p>
          </div>
        </div>
      );
    }
    if (type === 'page' && section) {
      const hero = data.pageHeros[section];
      return (
        <div className="preview-box">
          <div className="preview-label">Live Preview</div>
          <div className="preview-hero">
            <img src={hero?.image || '/images/salon.webp'} alt="" />
            <div className="preview-hero-text">
              <span className="preview-tagline">{hero?.label}</span>
              <h4>{hero?.title} <em>{hero?.titleAccent}</em></h4>
              <span className="preview-subtitle">{hero?.subtitle}</span>
            </div>
          </div>
        </div>
      );
    }
    if (type === 'cards' && section) {
      const cards = data.pageContents[section]?.cards || [];
      return (
        <div className="preview-box">
          <div className="preview-label">Cards Preview</div>
          <div className="preview-cards">
            {cards.map((card, i) => (
              <div key={i} className="preview-card">
                <img src={card.image || '/images/gallery1.jpg'} alt="" />
                <span>{card.title}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  const Field = ({ label, value, onChange, multiline = false }: { label: string; value: string; onChange: (v: string) => void; multiline?: boolean }) => (
    <div className="field">
      <label>{label}</label>
      {multiline ? (
        <textarea value={value} onChange={e => onChange(e.target.value)} rows={4} />
      ) : (
        <input type="text" value={value} onChange={e => onChange(e.target.value)} />
      )}
    </div>
  );

  return (
    <div className="admin">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <Link href="/blog" className="back-link">
            <span>←</span> Back to Blog
          </Link>
          <h1>Blog Manager</h1>
        </div>
        <div className="header-right">
          <label className="auto-save-toggle">
            <input type="checkbox" checked={autoSave} onChange={e => setAutoSave(e.target.checked)} />
            <span className="toggle-slider"></span>
            <span className="toggle-label">Auto-save</span>
          </label>
          {saveMessage && <span className="save-message">{saveMessage}</span>}
          {hasUnsavedChanges && <span className="unsaved-dot" />}
          <button className="header-btn reset-btn" onClick={() => setShowResetConfirm(true)}>
            Reset
          </button>
          <button className="header-btn save-btn" onClick={handleSave}>
            Save Changes
          </button>
        </div>
      </header>

      {/* Tabs */}
      <nav className="tabs">
        {['main', 'inspiration', 'tips', 'guides', 'insights'].map(tab => (
          <button key={tab} className={`tab-btn ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab as typeof activeTab)}>
            {tab === 'main' ? 'Main Page' : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>

      {/* Content */}
      <main className="content">
        {activeTab === 'main' ? (
          <div className="sections">
            {/* Hero Section */}
            <section className="section">
              <div className="section-header-row">
                <div>
                  <h2>Hero Section</h2>
                  <p className="section-desc">The main banner at the top of the blog page</p>
                </div>
                <SectionControls id="hero" />
              </div>

              {!collapsedSections.has('hero') && (
                <>
                  <Preview type="hero" />
                  <ImagePicker
                    currentImage={data.mainHero.image}
                    onSelect={img => updateMainHero({ ...data.mainHero, image: img })}
                    pickerId="main-hero"
                  />
                  <Field label="Tagline" value={data.mainHero.tagline} onChange={v => updateMainHero({ ...data.mainHero, tagline: v })} />
                  <div className="field-row">
                    <Field label="Title" value={data.mainHero.title} onChange={v => updateMainHero({ ...data.mainHero, title: v })} />
                    <Field label="Title Accent" value={data.mainHero.titleAccent} onChange={v => updateMainHero({ ...data.mainHero, titleAccent: v })} />
                  </div>
                  <Field label="Description" value={data.mainHero.description} onChange={v => updateMainHero({ ...data.mainHero, description: v })} multiline />
                </>
              )}
            </section>

            {/* Section Intros */}
            {(['inspiration', 'tips', 'guides', 'insights'] as const).map((section, i, arr) => (
              <section key={section} className="section">
                <div className="section-header-row">
                  <div>
                    <span className="section-number">{i + 1}</span>
                    <h2>{section.charAt(0).toUpperCase() + section.slice(1)} Section</h2>
                    <p className="section-desc">Content shown on the main blog page</p>
                  </div>
                  <SectionControls
                    id={`section-${section}`}
                    canMove={true}
                    isFirst={i === 0}
                    isLast={i === arr.length - 1}
                  />
                </div>

                {!collapsedSections.has(`section-${section}`) && (
                  <>
                    <Preview type="section" section={section} />
                    <div className="field-row">
                      <Field label="Title" value={data.sectionIntros[section].title} onChange={v => updateSectionIntro(section, { ...data.sectionIntros[section], title: v })} />
                      <Field label="Subtitle" value={data.sectionIntros[section].subtitle} onChange={v => updateSectionIntro(section, { ...data.sectionIntros[section], subtitle: v })} />
                    </div>
                    <Field label="Introduction" value={data.sectionIntros[section].intro} onChange={v => updateSectionIntro(section, { ...data.sectionIntros[section], intro: v })} multiline />
                    <Field label="Secondary Text" value={data.sectionIntros[section].secondaryText} onChange={v => updateSectionIntro(section, { ...data.sectionIntros[section], secondaryText: v })} multiline />
                    <Field label="Button Text" value={data.sectionIntros[section].buttonText} onChange={v => updateSectionIntro(section, { ...data.sectionIntros[section], buttonText: v })} />
                  </>
                )}
              </section>
            ))}
          </div>
        ) : (
          <div className="sections">
            {/* Page Hero */}
            <section className="section">
              <div className="section-header-row">
                <div>
                  <h2>Page Header</h2>
                  <p className="section-desc">Hero banner for the {activeTab} page</p>
                </div>
                <SectionControls id={`${activeTab}-hero`} />
              </div>

              {!collapsedSections.has(`${activeTab}-hero`) && (
                <>
                  <Preview type="page" section={activeTab} />
                  <ImagePicker
                    currentImage={data.pageHeros[activeTab]?.image || ''}
                    onSelect={img => updatePageHero(activeTab, { ...data.pageHeros[activeTab], image: img })}
                    pickerId={`${activeTab}-hero`}
                  />
                  <div className="field-row">
                    <Field label="Title" value={data.pageHeros[activeTab]?.title || ''} onChange={v => updatePageHero(activeTab, { ...data.pageHeros[activeTab], title: v })} />
                    <Field label="Title Accent" value={data.pageHeros[activeTab]?.titleAccent || ''} onChange={v => updatePageHero(activeTab, { ...data.pageHeros[activeTab], titleAccent: v })} />
                  </div>
                  <Field label="Subtitle" value={data.pageHeros[activeTab]?.subtitle || ''} onChange={v => updatePageHero(activeTab, { ...data.pageHeros[activeTab], subtitle: v })} />
                </>
              )}
            </section>

            {/* Page Content */}
            <section className="section">
              <div className="section-header-row">
                <div>
                  <h2>Page Content</h2>
                  <p className="section-desc">Introduction text and cards</p>
                </div>
                <SectionControls id={`${activeTab}-content`} />
              </div>

              {!collapsedSections.has(`${activeTab}-content`) && (
                <>
                  <Field label="Intro Title" value={data.pageContents[activeTab]?.introTitle || ''} onChange={v => updatePageContent(activeTab, { ...data.pageContents[activeTab], introTitle: v })} />
                  <Field label="Intro Text" value={data.pageContents[activeTab]?.introText || ''} onChange={v => updatePageContent(activeTab, { ...data.pageContents[activeTab], introText: v })} multiline />

                  <div className="subsection-header">
                    <h3 className="subsection-title">Content Cards</h3>
                    <button className="add-btn" onClick={handleAddCard}>
                      <span>+</span> Add Card
                    </button>
                  </div>
                  <Preview type="cards" section={activeTab} />
                  <div className="cards-editor">
                    {data.pageContents[activeTab]?.cards?.map((card, index) => (
                      <div key={index} className="card-edit">
                        <div className="card-controls">
                          <div className="card-num">{index + 1}</div>
                          <div className="card-actions">
                            <button
                              className="action-btn move"
                              onClick={() => handleMoveCard(index, 'up')}
                              disabled={index === 0}
                              title="Move Up"
                            >↑</button>
                            <button
                              className="action-btn move"
                              onClick={() => handleMoveCard(index, 'down')}
                              disabled={index === (data.pageContents[activeTab]?.cards?.length || 0) - 1}
                              title="Move Down"
                            >↓</button>
                            <button
                              className="action-btn delete"
                              onClick={() => handleDeleteCard(index)}
                              title="Delete Card"
                            >×</button>
                          </div>
                        </div>
                        <ImagePicker
                          currentImage={card.image}
                          onSelect={img => {
                            const cards = [...data.pageContents[activeTab].cards];
                            cards[index] = { ...cards[index], image: img };
                            updatePageContent(activeTab, { ...data.pageContents[activeTab], cards });
                          }}
                          pickerId={`card-${activeTab}-${index}`}
                        />
                        <Field label="Card Title" value={card.title} onChange={v => {
                          const cards = [...data.pageContents[activeTab].cards];
                          cards[index] = { ...cards[index], title: v };
                          updatePageContent(activeTab, { ...data.pageContents[activeTab], cards });
                        }} />
                        <Field label="Card Description" value={card.description} onChange={v => {
                          const cards = [...data.pageContents[activeTab].cards];
                          cards[index] = { ...cards[index], description: v };
                          updatePageContent(activeTab, { ...data.pageContents[activeTab], cards });
                        }} multiline />
                      </div>
                    ))}
                  </div>

                  <h3 className="subsection-title">Philosophy Section</h3>
                  <Field label="Title" value={data.pageContents[activeTab]?.philosophyTitle || ''} onChange={v => updatePageContent(activeTab, { ...data.pageContents[activeTab], philosophyTitle: v })} />
                  <Field label="Text" value={data.pageContents[activeTab]?.philosophyText || ''} onChange={v => updatePageContent(activeTab, { ...data.pageContents[activeTab], philosophyText: v })} multiline />
                </>
              )}
            </section>

            {/* Articles */}
            <section className="section">
              <div className="section-header-row">
                <div>
                  <h2>Articles</h2>
                  <p className="section-desc">{filteredArticles.length} articles in this category</p>
                </div>
                <div className="section-actions">
                  <button className="add-btn" onClick={() => setShowNewArticle(true)}>
                    <span>+</span> Add Article
                  </button>
                  <SectionControls id={`${activeTab}-articles`} />
                </div>
              </div>

              {!collapsedSections.has(`${activeTab}-articles`) && (
                <>
                  {showNewArticle && (
                    <div className="new-article">
                      <h3>New Article</h3>
                      <ImagePicker currentImage={newArticle.image} onSelect={img => setNewArticle({ ...newArticle, image: img })} pickerId="new-article" />
                      <Field label="Title" value={newArticle.title} onChange={v => setNewArticle({ ...newArticle, title: v })} />
                      <Field label="Excerpt" value={newArticle.excerpt} onChange={v => setNewArticle({ ...newArticle, excerpt: v })} />
                      <Field label="Content" value={newArticle.content} onChange={v => setNewArticle({ ...newArticle, content: v })} multiline />
                      <div className="button-group">
                        <button className="styled-btn primary" onClick={handleAddArticle}>Add Article</button>
                        <button className="styled-btn secondary" onClick={() => setShowNewArticle(false)}>Cancel</button>
                      </div>
                    </div>
                  )}

                  <div className="articles-list">
                    {filteredArticles.map((article, index) => (
                      <div key={article.id} className="article-row">
                        <div className="article-order-controls">
                          <button
                            className="action-btn move small"
                            onClick={() => handleMoveArticle(article.id, 'up')}
                            disabled={index === 0}
                            title="Move Up"
                          >↑</button>
                          <button
                            className="action-btn move small"
                            onClick={() => handleMoveArticle(article.id, 'down')}
                            disabled={index === filteredArticles.length - 1}
                            title="Move Down"
                          >↓</button>
                        </div>
                        <img src={article.image} alt="" className="article-thumb" />
                        <div className="article-info" onClick={() => setEditingArticle(editingArticle === article.id ? null : article.id)}>
                          <strong>{article.title}</strong>
                          <span>{article.excerpt}</span>
                        </div>
                        <button className="action-btn delete" onClick={() => handleDeleteArticle(article.id)}>Delete</button>

                        {editingArticle === article.id && (
                          <div className="article-edit-panel">
                            <ImagePicker
                              currentImage={article.image}
                              onSelect={img => updateArticles(data.articles.map(a => a.id === article.id ? { ...a, image: img } : a))}
                              pickerId={`article-${article.id}`}
                            />
                            <Field label="Title" value={article.title} onChange={v => updateArticles(data.articles.map(a => a.id === article.id ? { ...a, title: v } : a))} />
                            <Field label="Excerpt" value={article.excerpt} onChange={v => updateArticles(data.articles.map(a => a.id === article.id ? { ...a, excerpt: v } : a))} />
                            <Field label="Content" value={article.content} onChange={v => updateArticles(data.articles.map(a => a.id === article.id ? { ...a, content: v } : a))} multiline />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </section>
          </div>
        )}
      </main>

      {/* Reset Confirmation Dialog */}
      {showResetConfirm && (
        <div className="modal-overlay" onClick={() => setShowResetConfirm(false)}>
          <div className="modal confirm-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Reset All Content?</h3>
              <button className="close-btn" onClick={() => setShowResetConfirm(false)}>×</button>
            </div>
            <div className="modal-body">
              <p className="confirm-text">This will restore all content to the original default values. Any changes you made will be lost.</p>
              <div className="button-group right">
                <button className="styled-btn secondary" onClick={() => setShowResetConfirm(false)}>Cancel</button>
                <button className="styled-btn danger" onClick={handleReset}>Reset Everything</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .admin {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Header */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }
        .header-left { display: flex; align-items: center; gap: 2rem; }
        .back-link {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all 0.2s;
        }
        .back-link:hover { background: rgba(255,255,255,0.1); color: #fff; }
        .header h1 {
          font-size: 1.4rem;
          font-weight: 600;
          color: #fff;
          margin: 0;
          letter-spacing: -0.5px;
        }
        .header-right { display: flex; align-items: center; gap: 1rem; }

        /* Toggle Switch */
        .auto-save-toggle {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          position: relative;
        }
        .auto-save-toggle input { display: none; }
        .toggle-slider {
          width: 40px;
          height: 22px;
          background: rgba(255,255,255,0.2);
          border-radius: 11px;
          position: relative;
          transition: all 0.3s;
        }
        .toggle-slider::after {
          content: '';
          position: absolute;
          width: 16px;
          height: 16px;
          background: #fff;
          border-radius: 50%;
          top: 3px;
          left: 3px;
          transition: all 0.3s;
        }
        .auto-save-toggle input:checked + .toggle-slider {
          background: #22c55e;
        }
        .auto-save-toggle input:checked + .toggle-slider::after {
          left: 21px;
        }
        .toggle-label { color: rgba(255,255,255,0.8); font-size: 0.85rem; }

        .save-message {
          color: #22c55e;
          font-size: 0.85rem;
          padding: 0.4rem 0.8rem;
          background: rgba(34,197,94,0.1);
          border-radius: 6px;
        }
        .unsaved-dot {
          width: 10px;
          height: 10px;
          background: #f59e0b;
          border-radius: 50%;
          box-shadow: 0 0 10px #f59e0b;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        /* Header Buttons */
        .header-btn {
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          border: none;
        }
        .reset-btn {
          background: transparent;
          color: rgba(255,255,255,0.7);
          border: 1px solid rgba(255,255,255,0.3);
        }
        .reset-btn:hover { border-color: #f59e0b; color: #f59e0b; }
        .save-btn {
          background: linear-gradient(135deg, #c9a961 0%, #a88a4a 100%);
          color: #fff;
          box-shadow: 0 2px 10px rgba(201,169,97,0.3);
        }
        .save-btn:hover { transform: translateY(-1px); box-shadow: 0 4px 15px rgba(201,169,97,0.4); }

        /* Tabs */
        .tabs {
          display: flex;
          gap: 0.25rem;
          padding: 0 2rem;
          background: #fff;
          border-bottom: 1px solid #e5e5e5;
          overflow-x: auto;
        }
        .tab-btn {
          padding: 1rem 1.5rem;
          background: none;
          border: none;
          border-bottom: 3px solid transparent;
          color: #666;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .tab-btn:hover { color: #1a1a2e; }
        .tab-btn.active {
          color: #1a1a2e;
          border-bottom-color: #c9a961;
        }

        /* Content */
        .content {
          max-width: 950px;
          margin: 0 auto;
          padding: 2rem;
        }
        .sections { display: flex; flex-direction: column; gap: 1.5rem; }

        /* Section */
        .section {
          background: #fff;
          border-radius: 16px;
          padding: 1.5rem 2rem;
          box-shadow: 0 2px 20px rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.05);
        }
        .section-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }
        .section-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          color: #c9a961;
          font-size: 0.8rem;
          font-weight: 600;
          border-radius: 8px;
          margin-right: 0.75rem;
          vertical-align: middle;
        }
        .section h2 {
          display: inline;
          font-size: 1.2rem;
          font-weight: 600;
          color: #1a1a2e;
          margin: 0;
        }
        .section-desc {
          font-size: 0.85rem;
          color: #888;
          margin: 0.25rem 0 0;
        }
        .section-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        /* Section Controls */
        .section-controls {
          display: flex;
          gap: 0.5rem;
        }
        .control-btn {
          width: 32px;
          height: 32px;
          border: 1px solid #e5e5e5;
          background: #fff;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          color: #666;
          transition: all 0.2s;
        }
        .control-btn:hover:not(:disabled) {
          border-color: #c9a961;
          color: #c9a961;
          background: rgba(201,169,97,0.05);
        }
        .control-btn:disabled { opacity: 0.3; cursor: not-allowed; }

        /* Subsection */
        .subsection-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 2rem 0 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid #eee;
        }
        .subsection-title {
          font-size: 1rem;
          font-weight: 600;
          color: #1a1a2e;
          margin: 0;
        }

        /* Styled Buttons */
        .styled-btn {
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        .styled-btn.primary {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          color: #fff;
        }
        .styled-btn.primary:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(26,26,46,0.3); }
        .styled-btn.secondary {
          background: #f5f5f5;
          color: #666;
          border: 1px solid #e5e5e5;
        }
        .styled-btn.secondary:hover { background: #eee; }
        .styled-btn.danger {
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
          color: #fff;
        }
        .styled-btn.danger:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(220,38,38,0.3); }
        .styled-btn.gallery-btn {
          background: #f8f9fa;
          color: #1a1a2e;
          border: 1px solid #e5e5e5;
        }
        .styled-btn.gallery-btn:hover { background: #eee; }
        .styled-btn.upload-btn {
          background: linear-gradient(135deg, #c9a961 0%, #a88a4a 100%);
          color: #fff;
        }
        .styled-btn.upload-btn:hover { transform: translateY(-1px); }
        .btn-icon { font-size: 1rem; }

        /* Add Button */
        .add-btn {
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          transition: all 0.2s;
        }
        .add-btn:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(34,197,94,0.3); }
        .add-btn span { font-size: 1.1rem; }

        /* Action Buttons */
        .action-btn {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          border: 1px solid #e5e5e5;
          background: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          transition: all 0.2s;
        }
        .action-btn.move { color: #666; }
        .action-btn.move:hover:not(:disabled) {
          border-color: #1a1a2e;
          background: #1a1a2e;
          color: #fff;
        }
        .action-btn.delete {
          color: #dc2626;
          border-color: #fecaca;
        }
        .action-btn.delete:hover { background: #fef2f2; }
        .action-btn:disabled { opacity: 0.3; cursor: not-allowed; }
        .action-btn.small { width: 28px; height: 28px; font-size: 0.85rem; }

        .button-group {
          display: flex;
          gap: 0.75rem;
          margin-top: 1rem;
        }
        .button-group.right { justify-content: flex-end; }

        /* Field */
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
          border: 1px solid #e5e5e5;
          border-radius: 10px;
          font-size: 0.95rem;
          font-family: inherit;
          transition: all 0.2s;
          background: #fafafa;
        }
        .field input:focus, .field textarea:focus {
          outline: none;
          border-color: #c9a961;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(201,169,97,0.1);
        }
        .field textarea { resize: vertical; min-height: 100px; }
        .field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        /* Image Field */
        .image-field {
          position: relative;
          width: 100%;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 1.5rem;
          background: #1a1a2e;
        }
        .image-field img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          display: block;
        }
        .image-actions {
          display: flex;
          gap: 0.5rem;
          padding: 0.75rem;
          background: rgba(0,0,0,0.8);
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal {
          background: #fff;
          border-radius: 20px;
          width: 90%;
          max-width: 500px;
          max-height: 80vh;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
        }
        .modal-header h3 { font-size: 1.1rem; font-weight: 600; margin: 0; color: #fff; }
        .close-btn {
          width: 32px;
          height: 32px;
          background: rgba(255,255,255,0.1);
          border: none;
          border-radius: 8px;
          font-size: 1.3rem;
          color: rgba(255,255,255,0.8);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .close-btn:hover { background: rgba(255,255,255,0.2); color: #fff; }
        .modal-body {
          padding: 1.5rem;
          max-height: 60vh;
          overflow-y: auto;
        }
        .url-section, .upload-section, .gallery-section {
          margin-bottom: 1.5rem;
        }
        .url-section label, .upload-section label, .gallery-section label {
          display: block;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #888;
          margin-bottom: 0.5rem;
        }
        .url-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #e5e5e5;
          border-radius: 10px;
          font-size: 0.9rem;
        }
        .url-input:focus { outline: none; border-color: #c9a961; }
        .upload-area {
          width: 100%;
          padding: 1.25rem;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border: 2px dashed #c9a961;
          border-radius: 12px;
          font-size: 0.9rem;
          color: #666;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        .upload-area:hover {
          background: rgba(201,169,97,0.1);
          border-color: #a88a4a;
        }
        .upload-icon {
          font-size: 1.5rem;
          color: #c9a961;
        }
        .image-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          max-height: 200px;
          overflow-y: auto;
        }
        .thumb {
          aspect-ratio: 1;
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          border: 3px solid transparent;
          transition: all 0.2s;
        }
        .thumb:hover { border-color: rgba(201,169,97,0.5); transform: scale(1.02); }
        .thumb.selected { border-color: #c9a961; }
        .thumb img { width: 100%; height: 100%; object-fit: cover; }

        /* Confirm Dialog */
        .confirm-modal { max-width: 400px; }
        .confirm-text {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0 0 1.5rem;
        }

        /* Preview Boxes */
        .preview-box {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border-radius: 14px;
          padding: 1rem;
          margin-bottom: 1.5rem;
          position: relative;
        }
        .preview-box.mini { padding: 0.75rem; }
        .preview-label {
          position: absolute;
          top: 0.5rem;
          right: 0.75rem;
          font-size: 0.6rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #c9a961;
          font-weight: 600;
        }
        .preview-hero {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .preview-hero img {
          width: 120px;
          height: 80px;
          object-fit: cover;
          border-radius: 10px;
        }
        .preview-hero-text { color: #fff; }
        .preview-tagline {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #c9a961;
          display: block;
          margin-bottom: 0.25rem;
        }
        .preview-hero-text h4 {
          font-size: 1rem;
          font-weight: 600;
          margin: 0;
        }
        .preview-hero-text em {
          color: #c9a961;
          font-style: normal;
        }
        .preview-subtitle {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.7);
          display: block;
          margin-top: 0.25rem;
        }
        .preview-section { color: #fff; }
        .preview-section h5 {
          font-size: 0.9rem;
          font-weight: 600;
          margin: 0 0 0.5rem;
        }
        .preview-section h5 em {
          color: #c9a961;
          font-style: normal;
          font-weight: 400;
        }
        .preview-section p {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.7);
          margin: 0;
          line-height: 1.4;
        }
        .preview-cards {
          display: flex;
          gap: 0.75rem;
        }
        .preview-card {
          flex: 1;
          background: rgba(255,255,255,0.08);
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .preview-card img {
          width: 100%;
          height: 50px;
          object-fit: cover;
        }
        .preview-card span {
          display: block;
          padding: 0.5rem;
          font-size: 0.7rem;
          color: #fff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Cards Editor */
        .cards-editor {
          display: grid;
          gap: 1.25rem;
        }
        .card-edit {
          background: linear-gradient(135deg, #f8f9fa 0%, #fff 100%);
          border-radius: 14px;
          padding: 1.5rem;
          border: 1px solid #e5e5e5;
        }
        .card-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .card-num {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          color: #c9a961;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-weight: 600;
        }
        .card-actions {
          display: flex;
          gap: 0.5rem;
        }
        .card-edit .image-field { height: 150px; }

        /* Articles */
        .new-article {
          background: linear-gradient(135deg, #f8f9fa 0%, #fff 100%);
          border-radius: 14px;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          border: 1px solid #e5e5e5;
        }
        .new-article h3 {
          font-size: 1rem;
          font-weight: 600;
          color: #1a1a2e;
          margin: 0 0 1rem;
        }
        .new-article .image-field { height: 150px; }

        .articles-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .article-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: #fff;
          border-radius: 12px;
          transition: all 0.2s;
          border: 1px solid #e5e5e5;
        }
        .article-row:hover {
          border-color: #c9a961;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }
        .article-order-controls {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
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
          font-size: 0.95rem;
          color: #1a1a2e;
          margin-bottom: 0.25rem;
        }
        .article-info span {
          font-size: 0.85rem;
          color: #888;
        }
        .article-edit-panel {
          width: 100%;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #e5e5e5;
        }
        .article-edit-panel .image-field { height: 150px; }

        /* Responsive */
        @media (max-width: 768px) {
          .header { padding: 1rem; flex-wrap: wrap; gap: 1rem; }
          .header-left { width: 100%; }
          .header h1 { font-size: 1.2rem; }
          .tabs { padding: 0 1rem; }
          .tab-btn { padding: 0.75rem 1rem; }
          .content { padding: 1rem; }
          .section { padding: 1.25rem; }
          .field-row { grid-template-columns: 1fr; }
          .image-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </div>
  );
};

export default BlogAdmin;
