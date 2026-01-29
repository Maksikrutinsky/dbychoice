'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useBlog, Article, SectionIntro, HeroSettings, PageHeroSettings, PageContentSettings } from '@/context/BlogContext';

const BlogAdmin = () => {
  const { data, updateMainHero, updateSectionIntro, updatePageHero, updatePageContent, updateArticles, saveAll, hasUnsavedChanges } = useBlog();
  const [activeTab, setActiveTab] = useState<'main-page' | 'inspiration' | 'tips' | 'guides' | 'insights'>('main-page');
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [showNewArticle, setShowNewArticle] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const [newArticle, setNewArticle] = useState<Partial<Article>>({
    title: '',
    excerpt: '',
    content: '',
    image: '',
    category: 'inspiration'
  });

  const categoryLabels = {
    'main-page': 'Main Blog Page',
    inspiration: 'Inspirations',
    tips: 'Tips',
    guides: 'Guides',
    insights: 'Insights'
  };

  const filteredArticles = activeTab !== 'main-page' ? data.articles.filter(a => a.category === activeTab) : [];

  const handleSaveArticle = () => {
    if (editingArticle) {
      const updatedArticles = data.articles.map(a => a.id === editingArticle.id ? editingArticle : a);
      updateArticles(updatedArticles);
      setEditingArticle(null);
    }
  };

  const handleAddArticle = () => {
    if (newArticle.title && newArticle.excerpt && activeTab !== 'main-page') {
      const article: Article = {
        id: Date.now().toString(),
        title: newArticle.title || '',
        excerpt: newArticle.excerpt || '',
        content: newArticle.content || '',
        image: newArticle.image || '/images/gallery1.jpg',
        category: activeTab as Article['category']
      };
      updateArticles([...data.articles, article]);
      setNewArticle({ title: '', excerpt: '', content: '', image: '', category: activeTab as Article['category'] });
      setShowNewArticle(false);
    }
  };

  const handleDeleteArticle = (id: string) => {
    if (confirm('Are you sure you want to delete this article?')) {
      updateArticles(data.articles.filter(a => a.id !== id));
    }
  };

  const handleSectionIntroChange = (section: string, field: keyof SectionIntro, value: string) => {
    updateSectionIntro(section, {
      ...data.sectionIntros[section],
      [field]: value
    });
  };

  const handleMainHeroChange = (field: keyof HeroSettings, value: string) => {
    updateMainHero({
      ...data.mainHero,
      [field]: value
    });
  };

  const handlePageHeroChange = (page: string, field: keyof PageHeroSettings, value: string) => {
    updatePageHero(page, {
      ...data.pageHeros[page],
      [field]: value
    });
  };

  const handlePageContentChange = (page: string, field: keyof PageContentSettings, value: string | PageContentSettings['cards']) => {
    updatePageContent(page, {
      ...data.pageContents[page],
      [field]: value
    });
  };

  const handleCardChange = (page: string, cardIndex: number, field: string, value: string) => {
    const updatedCards = [...data.pageContents[page].cards];
    updatedCards[cardIndex] = { ...updatedCards[cardIndex], [field]: value };
    handlePageContentChange(page, 'cards', updatedCards);
  };

  const handleSave = () => {
    saveAll();
    setSaveMessage('Changes saved successfully!');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  const renderMainPageEditor = () => (
    <>
      {/* Main Hero Editor */}
      <section className="editor-section">
        <div className="section-header">
          <div className="section-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2>Hero Section</h2>
        </div>
        <div className="editor-content">
          <div className="form-group">
            <label>Background Image URL</label>
            <input
              type="text"
              value={data.mainHero.image}
              onChange={(e) => handleMainHeroChange('image', e.target.value)}
              placeholder="/images/hero.webp"
            />
            {data.mainHero.image && (
              <div className="image-preview">
                <img src={data.mainHero.image} alt="Hero preview" />
              </div>
            )}
          </div>
          <div className="form-group">
            <label>Tagline</label>
            <input
              type="text"
              value={data.mainHero.tagline}
              onChange={(e) => handleMainHeroChange('tagline', e.target.value)}
              placeholder="From Us to You"
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Title (Line 1)</label>
              <input
                type="text"
                value={data.mainHero.title}
                onChange={(e) => handleMainHeroChange('title', e.target.value)}
                placeholder="Design Stories"
              />
            </div>
            <div className="form-group">
              <label>Title (Line 2 - Accent)</label>
              <input
                type="text"
                value={data.mainHero.titleAccent}
                onChange={(e) => handleMainHeroChange('titleAccent', e.target.value)}
                placeholder="& Insights"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              value={data.mainHero.description}
              onChange={(e) => handleMainHeroChange('description', e.target.value)}
              rows={2}
              placeholder="Inspiration, professional tips, and guides..."
            />
          </div>
        </div>
      </section>

      {/* Section Editors */}
      {(['inspiration', 'tips', 'guides', 'insights'] as const).map((section, index) => (
        <section key={section} className="editor-section">
          <div className="section-header">
            <div className="section-number">0{index + 1}</div>
            <h2>{data.sectionIntros[section].title}</h2>
          </div>
          <div className="editor-content">
            <div className="form-row">
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  value={data.sectionIntros[section].title}
                  onChange={(e) => handleSectionIntroChange(section, 'title', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Subtitle</label>
                <input
                  type="text"
                  value={data.sectionIntros[section].subtitle}
                  onChange={(e) => handleSectionIntroChange(section, 'subtitle', e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Introduction Text</label>
              <textarea
                value={data.sectionIntros[section].intro}
                onChange={(e) => handleSectionIntroChange(section, 'intro', e.target.value)}
                rows={3}
              />
            </div>
            <div className="form-group">
              <label>Secondary Text</label>
              <textarea
                value={data.sectionIntros[section].secondaryText}
                onChange={(e) => handleSectionIntroChange(section, 'secondaryText', e.target.value)}
                rows={2}
              />
            </div>
            <div className="form-group">
              <label>Button Text</label>
              <input
                type="text"
                value={data.sectionIntros[section].buttonText}
                onChange={(e) => handleSectionIntroChange(section, 'buttonText', e.target.value)}
              />
            </div>
          </div>
        </section>
      ))}
    </>
  );

  const renderPageEditor = (page: 'inspiration' | 'tips' | 'guides' | 'insights') => (
    <>
      {/* Page Hero Editor */}
      <section className="editor-section">
        <div className="section-header">
          <div className="section-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2>Page Hero</h2>
        </div>
        <div className="editor-content">
          <div className="form-group">
            <label>Background Image URL</label>
            <input
              type="text"
              value={data.pageHeros[page].image}
              onChange={(e) => handlePageHeroChange(page, 'image', e.target.value)}
            />
            {data.pageHeros[page].image && (
              <div className="image-preview">
                <img src={data.pageHeros[page].image} alt="Hero preview" />
              </div>
            )}
          </div>
          <div className="form-group">
            <label>Label (e.g., "01")</label>
            <input
              type="text"
              value={data.pageHeros[page].label}
              onChange={(e) => handlePageHeroChange(page, 'label', e.target.value)}
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                value={data.pageHeros[page].title}
                onChange={(e) => handlePageHeroChange(page, 'title', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Title Accent</label>
              <input
                type="text"
                value={data.pageHeros[page].titleAccent}
                onChange={(e) => handlePageHeroChange(page, 'titleAccent', e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Subtitle</label>
            <input
              type="text"
              value={data.pageHeros[page].subtitle}
              onChange={(e) => handlePageHeroChange(page, 'subtitle', e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Page Content Editor */}
      <section className="editor-section">
        <div className="section-header">
          <div className="section-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2>Page Content</h2>
        </div>
        <div className="editor-content">
          <div className="form-group">
            <label>Introduction Title</label>
            <input
              type="text"
              value={data.pageContents[page].introTitle}
              onChange={(e) => handlePageContentChange(page, 'introTitle', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Introduction Text</label>
            <textarea
              value={data.pageContents[page].introText}
              onChange={(e) => handlePageContentChange(page, 'introText', e.target.value)}
              rows={4}
            />
          </div>

          {/* Cards Editor */}
          <div className="cards-section">
            <h3>Content Cards</h3>
            <div className="cards-grid">
              {data.pageContents[page].cards.map((card, index) => (
                <div key={index} className="card-editor">
                  <div className="card-number">Card {index + 1}</div>
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      value={card.title}
                      onChange={(e) => handleCardChange(page, index, 'title', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      value={card.description}
                      onChange={(e) => handleCardChange(page, index, 'description', e.target.value)}
                      rows={2}
                    />
                  </div>
                  <div className="form-group">
                    <label>Image URL</label>
                    <input
                      type="text"
                      value={card.image}
                      onChange={(e) => handleCardChange(page, index, 'image', e.target.value)}
                    />
                    {card.image && (
                      <div className="image-preview small">
                        <img src={card.image} alt={`Card ${index + 1}`} />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="philosophy-section">
            <h3>Philosophy Section</h3>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                value={data.pageContents[page].philosophyTitle}
                onChange={(e) => handlePageContentChange(page, 'philosophyTitle', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Text</label>
              <textarea
                value={data.pageContents[page].philosophyText}
                onChange={(e) => handlePageContentChange(page, 'philosophyText', e.target.value)}
                rows={3}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="editor-section articles-section">
        <div className="section-header">
          <div className="section-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2>Articles</h2>
          <span className="article-count">{filteredArticles.length}</span>
          <button className="btn-add" onClick={() => setShowNewArticle(true)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 4v16m8-8H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Add Article
          </button>
        </div>

        {/* New Article Form */}
        {showNewArticle && (
          <div className="new-article-form">
            <h3>New Article</h3>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                value={newArticle.title}
                onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
                placeholder="Article title..."
              />
            </div>
            <div className="form-group">
              <label>Excerpt</label>
              <input
                type="text"
                value={newArticle.excerpt}
                onChange={(e) => setNewArticle({ ...newArticle, excerpt: e.target.value })}
                placeholder="Short description..."
              />
            </div>
            <div className="form-group">
              <label>Image URL</label>
              <input
                type="text"
                value={newArticle.image}
                onChange={(e) => setNewArticle({ ...newArticle, image: e.target.value })}
                placeholder="/images/gallery1.jpg"
              />
            </div>
            <div className="form-group">
              <label>Content</label>
              <textarea
                value={newArticle.content}
                onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
                rows={6}
                placeholder="Full article content..."
              />
            </div>
            <div className="form-actions">
              <button className="btn-primary" onClick={handleAddArticle}>Add Article</button>
              <button className="btn-secondary" onClick={() => setShowNewArticle(false)}>Cancel</button>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="articles-grid">
          {filteredArticles.map(article => (
            <div key={article.id} className="article-card">
              {editingArticle?.id === article.id ? (
                <div className="article-edit-form">
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      value={editingArticle.title}
                      onChange={(e) => setEditingArticle({ ...editingArticle, title: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Excerpt</label>
                    <input
                      type="text"
                      value={editingArticle.excerpt}
                      onChange={(e) => setEditingArticle({ ...editingArticle, excerpt: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Image URL</label>
                    <input
                      type="text"
                      value={editingArticle.image}
                      onChange={(e) => setEditingArticle({ ...editingArticle, image: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Content</label>
                    <textarea
                      value={editingArticle.content}
                      onChange={(e) => setEditingArticle({ ...editingArticle, content: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <div className="form-actions">
                    <button className="btn-primary" onClick={handleSaveArticle}>Save</button>
                    <button className="btn-secondary" onClick={() => setEditingArticle(null)}>Cancel</button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="article-image">
                    <img src={article.image} alt={article.title} />
                  </div>
                  <div className="article-info">
                    <h4>{article.title}</h4>
                    <p>{article.excerpt}</p>
                  </div>
                  <div className="article-actions">
                    <button className="btn-edit" onClick={() => setEditingArticle(article)}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Edit
                    </button>
                    <button className="btn-delete" onClick={() => handleDeleteArticle(article.id)}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );

  return (
    <div className="admin-page">
      {/* Header */}
      <header className="admin-header">
        <div className="header-content">
          <div className="header-left">
            <Link href="/blog" className="back-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Blog
            </Link>
            <h1>Blog Management</h1>
          </div>
          <div className="header-right">
            {saveMessage && <span className="save-message">{saveMessage}</span>}
            {hasUnsavedChanges && <span className="unsaved-badge">Unsaved changes</span>}
            <button className="btn-save" onClick={handleSave}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 21v-8H7v8M7 3v5h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Save Changes
            </button>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="admin-layout">
        {/* Sidebar */}
        <aside className="admin-sidebar">
          <nav className="sidebar-nav">
            <div className="nav-label">Pages</div>
            {(Object.keys(categoryLabels) as Array<keyof typeof categoryLabels>).map(cat => (
              <button
                key={cat}
                className={`nav-item ${activeTab === cat ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(cat);
                  setEditingArticle(null);
                  setShowNewArticle(false);
                }}
              >
                <span className="nav-item-label">{categoryLabels[cat]}</span>
                {cat !== 'main-page' && (
                  <span className="nav-item-count">{data.articles.filter(a => a.category === cat).length}</span>
                )}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="admin-main">
          <div className="page-title">
            <h2>{categoryLabels[activeTab]}</h2>
            <p>Edit content for this section</p>
          </div>
          {activeTab === 'main-page' ? renderMainPageEditor() : renderPageEditor(activeTab)}
        </main>
      </div>

      <style jsx>{`
        .admin-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0f1a 0%, #141e30 100%);
          color: #fff;
        }

        /* Header */
        .admin-header {
          background: rgba(11, 22, 45, 0.95);
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
          padding: 1rem 2rem;
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(10px);
        }

        .header-content {
          max-width: 1600px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .back-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #d4af37;
          text-decoration: none;
          font-size: 0.9rem;
          transition: opacity 0.3s;
        }

        .back-link:hover {
          opacity: 0.8;
        }

        .admin-header h1 {
          font-size: 1.5rem;
          font-weight: 600;
          font-family: 'Playfair Display', serif;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .save-message {
          color: #4ade80;
          font-size: 0.9rem;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .unsaved-badge {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .btn-save {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #d4af37, #c4a030);
          color: #0b162d;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-save:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(212, 175, 55, 0.4);
        }

        /* Layout */
        .admin-layout {
          display: grid;
          grid-template-columns: 260px 1fr;
          max-width: 1600px;
          margin: 0 auto;
          min-height: calc(100vh - 72px);
        }

        /* Sidebar */
        .admin-sidebar {
          background: rgba(11, 22, 45, 0.5);
          border-right: 1px solid rgba(212, 175, 55, 0.1);
          padding: 2rem 1rem;
        }

        .nav-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.4);
          padding: 0 1rem;
          margin-bottom: 1rem;
        }

        .nav-item {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.875rem 1rem;
          border: none;
          background: transparent;
          color: rgba(255, 255, 255, 0.7);
          text-align: left;
          cursor: pointer;
          border-radius: 8px;
          margin-bottom: 0.25rem;
          transition: all 0.3s ease;
        }

        .nav-item:hover {
          background: rgba(212, 175, 55, 0.1);
          color: #fff;
        }

        .nav-item.active {
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.1));
          color: #d4af37;
          border: 1px solid rgba(212, 175, 55, 0.3);
        }

        .nav-item-label {
          font-size: 0.95rem;
        }

        .nav-item-count {
          background: rgba(212, 175, 55, 0.2);
          color: #d4af37;
          padding: 0.15rem 0.5rem;
          border-radius: 10px;
          font-size: 0.75rem;
        }

        /* Main Content */
        .admin-main {
          padding: 2rem;
          overflow-y: auto;
        }

        .page-title {
          margin-bottom: 2rem;
        }

        .page-title h2 {
          font-size: 2rem;
          font-family: 'Playfair Display', serif;
          color: #f5deb3;
          margin-bottom: 0.5rem;
        }

        .page-title p {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.95rem;
        }

        /* Editor Sections */
        .editor-section {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(212, 175, 55, 0.15);
          border-radius: 16px;
          margin-bottom: 1.5rem;
          overflow: hidden;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem 1.5rem;
          background: rgba(212, 175, 55, 0.05);
          border-bottom: 1px solid rgba(212, 175, 55, 0.1);
        }

        .section-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #d4af37, #c4a030);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0b162d;
        }

        .section-number {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.1));
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #d4af37;
          font-weight: 700;
          font-size: 0.9rem;
        }

        .section-header h2 {
          font-size: 1.1rem;
          font-weight: 600;
          flex: 1;
        }

        .article-count {
          background: rgba(212, 175, 55, 0.2);
          color: #d4af37;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .btn-add {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: 1px solid #d4af37;
          color: #d4af37;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          cursor: pointer;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .btn-add:hover {
          background: #d4af37;
          color: #0b162d;
        }

        .editor-content {
          padding: 1.5rem;
        }

        /* Form Styles */
        .form-group {
          margin-bottom: 1.25rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group label {
          display: block;
          font-size: 0.85rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 0.5rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.875rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: #fff;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #d4af37;
          background: rgba(212, 175, 55, 0.05);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }

        .image-preview {
          margin-top: 0.75rem;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid rgba(212, 175, 55, 0.2);
        }

        .image-preview img {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }

        .image-preview.small img {
          height: 100px;
        }

        /* Cards Section */
        .cards-section,
        .philosophy-section {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(212, 175, 55, 0.1);
        }

        .cards-section h3,
        .philosophy-section h3 {
          font-size: 1rem;
          color: #d4af37;
          margin-bottom: 1.25rem;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1rem;
        }

        .card-editor {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 1.25rem;
        }

        .card-number {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #d4af37;
          margin-bottom: 1rem;
        }

        /* Articles */
        .articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.25rem;
          padding: 1.5rem;
        }

        .article-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .article-card:hover {
          border-color: rgba(212, 175, 55, 0.3);
          transform: translateY(-2px);
        }

        .article-image {
          height: 150px;
          overflow: hidden;
        }

        .article-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .article-card:hover .article-image img {
          transform: scale(1.05);
        }

        .article-info {
          padding: 1rem;
        }

        .article-info h4 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #f5deb3;
        }

        .article-info p {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.4;
        }

        .article-actions {
          display: flex;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.02);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .btn-edit,
        .btn-delete {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 0.75rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.85rem;
          transition: all 0.3s ease;
        }

        .btn-edit {
          background: rgba(212, 175, 55, 0.15);
          color: #d4af37;
        }

        .btn-edit:hover {
          background: rgba(212, 175, 55, 0.25);
        }

        .btn-delete {
          background: rgba(239, 68, 68, 0.15);
          color: #ef4444;
        }

        .btn-delete:hover {
          background: rgba(239, 68, 68, 0.25);
        }

        /* New Article Form */
        .new-article-form {
          background: rgba(212, 175, 55, 0.05);
          border: 1px dashed rgba(212, 175, 55, 0.3);
          border-radius: 12px;
          padding: 1.5rem;
          margin: 1.5rem;
        }

        .new-article-form h3 {
          font-size: 1.1rem;
          color: #d4af37;
          margin-bottom: 1.25rem;
        }

        .article-edit-form {
          padding: 1rem;
        }

        .form-actions {
          display: flex;
          gap: 0.75rem;
          margin-top: 1rem;
        }

        .btn-primary,
        .btn-secondary {
          padding: 0.6rem 1.25rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: linear-gradient(135deg, #d4af37, #c4a030);
          color: #0b162d;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.7);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .admin-layout {
            grid-template-columns: 1fr;
          }

          .admin-sidebar {
            display: none;
          }

          .form-row {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .admin-header {
            padding: 1rem;
          }

          .header-content {
            flex-direction: column;
            gap: 1rem;
          }

          .header-left {
            width: 100%;
            justify-content: space-between;
          }

          .header-right {
            width: 100%;
            justify-content: flex-end;
          }

          .admin-main {
            padding: 1rem;
          }

          .cards-grid,
          .articles-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogAdmin;
