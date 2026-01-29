'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: 'inspiration' | 'tips' | 'guides' | 'insights';
}

interface SectionIntro {
  title: string;
  subtitle: string;
  intro: string;
  secondaryText: string;
  buttonText: string;
}

interface HeroSettings {
  image: string;
  tagline: string;
  title: string;
  titleAccent: string;
  description: string;
}

interface PageHeroSettings {
  image: string;
  label: string;
  title: string;
  titleAccent: string;
  subtitle: string;
}

interface PageContentSettings {
  introTitle: string;
  introText: string;
  cards: {
    title: string;
    description: string;
    image: string;
  }[];
  philosophyTitle: string;
  philosophyText: string;
}

const BlogAdmin = () => {
  const [activeTab, setActiveTab] = useState<'main-page' | 'inspiration' | 'tips' | 'guides' | 'insights'>('main-page');
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [showNewArticle, setShowNewArticle] = useState(false);

  // Main Blog Page Hero Settings
  const [mainHero, setMainHero] = useState<HeroSettings>({
    image: '/images/salon.webp',
    tagline: 'From Us to You',
    title: 'Design Stories',
    titleAccent: '& Insights',
    description: 'Inspiration, professional tips, and guides for your design journey'
  });

  // Section introductions for main blog page
  const [sectionIntros, setSectionIntros] = useState<Record<string, SectionIntro>>({
    inspiration: {
      title: 'Design Inspirations',
      subtitle: '& Ideas — Studio Perspective',
      intro: 'The design I create is rooted in a global, multi-layered source of inspiration. It is an eclectic approach that connects nature, art, cultures, and historical eras—not as trends, but as a foundation for original, meaningful creation.',
      secondaryText: 'Nature, the human body, Bauhaus, Japanese minimalism, and the richness of global cultures all come together to create spaces that are not only visually refined, but deeply felt.',
      buttonText: 'Explore Inspirations'
    },
    tips: {
      title: 'Professional Tips',
      subtitle: 'Expert Design Guidance',
      intro: 'This space was created to share insight—not trends. Here, I open the door to the way I truly see design: the decisions that shape a home, the details that change how a space feels, and the questions worth asking.',
      secondaryText: 'These tips are meant to sharpen your perspective, inspire smarter choices, and help you see your home through a deeper, more intentional lens.',
      buttonText: 'Discover Tips'
    },
    guides: {
      title: 'Design Guides',
      subtitle: 'Step by Step Journey',
      intro: 'Planning to design, renovate, or build a home—but not sure where to begin? These guides were created to bring clarity to the process and guide you step by step through each space and phase of the project.',
      secondaryText: 'Grounded in experience, expertise, and a comprehensive understanding of the entire journey—from initial concept to final details.',
      buttonText: 'View Guides'
    },
    insights: {
      title: 'Design Insights',
      subtitle: 'For Homes & Businesses',
      intro: 'Thoughtful design of every space—whether at home or in a business—is key to creating a place that feels right and meaningful. How can you maximize the potential of each room?',
      secondaryText: 'From private rooms to offices, cafés, retail stores, or hotels—learn how to transform the challenge of design into a creative journey that delivers unique, memorable experiences.',
      buttonText: 'Explore Insights'
    }
  });

  // Individual page hero settings
  const [pageHeros, setPageHeros] = useState<Record<string, PageHeroSettings>>({
    inspiration: {
      image: '/images/Design Styles/eclectic/eclectic_07-final.webp',
      label: '01',
      title: 'Design Inspirations',
      titleAccent: '& Ideas',
      subtitle: 'Studio Perspective'
    },
    tips: {
      image: '/images/Dining1.webp',
      label: '02',
      title: 'Professional Tips',
      titleAccent: '& Guidance',
      subtitle: 'Expert Design Advice'
    },
    guides: {
      image: '/images/Kitchens1.webp',
      label: '03',
      title: 'Design Guides',
      titleAccent: '& Tutorials',
      subtitle: 'Step by Step Journey'
    },
    insights: {
      image: '/images/OFFICE SPACES.webp',
      label: '04',
      title: 'Design Insights',
      titleAccent: '& Ideas',
      subtitle: 'For Homes & Businesses'
    }
  });

  // Individual page content settings
  const [pageContents, setPageContents] = useState<Record<string, PageContentSettings>>({
    inspiration: {
      introTitle: 'A Global Source of Inspiration',
      introText: 'The design I create is rooted in a global, multi-layered source of inspiration. It is an eclectic approach that connects nature, art, cultures, and historical eras—not as trends, but as a foundation for original, meaningful creation. In an open, global world, inspiration exists everywhere and is an integral part of my design language.',
      cards: [
        {
          title: 'Nature & Organic Forms',
          description: 'Nature is a central source of inspiration in my work—through organic forms, soft lines, and the balance between material and movement, alongside the human body and its natural harmony.',
          image: '/images/Design Styles/minimal/minimal_07-final.webp'
        },
        {
          title: 'Historical Reinterpretation',
          description: 'The past plays a role in contemporary spaces through refined reinterpretation of styles such as Bauhaus, retro, and the expressive spirit of the 1960s—clean, precise, yet rich in character.',
          image: '/images/Design Styles/industrial/industrial_07-final.webp'
        },
        {
          title: 'Global Cultures',
          description: 'The clarity and restraint of Japanese minimalism, the color and ornamentation of India and Morocco, and the tactile, organic materiality of Africa.',
          image: '/images/Design Styles/traditional/traditional_07-final.webp'
        }
      ],
      philosophyTitle: 'Creating an Experience',
      philosophyText: 'For me, interior design is the creation of an experience—one that tells a story, bridges personal journeys with the idea of home, and gives each space depth, character, and presence. These influences come together to create spaces that are not only visually refined, but deeply felt.'
    },
    tips: {
      introTitle: 'Design with Intention',
      introText: 'Every design decision matters. Here, I share the professional insights that guide my work—principles that can help you see your space with fresh eyes and make choices that truly resonate with your lifestyle.',
      cards: [
        {
          title: 'Space Planning',
          description: 'Understanding flow, proportion, and how to make every square meter work for you.',
          image: '/images/gallery1.jpg'
        },
        {
          title: 'Lighting Design',
          description: 'The secret to creating atmosphere and transforming the feel of any room.',
          image: '/images/gallery2.jpg'
        },
        {
          title: 'Material Selection',
          description: 'Choosing materials that look beautiful and perform well over time.',
          image: '/images/gallery3.jpg'
        }
      ],
      philosophyTitle: 'Beyond Trends',
      philosophyText: 'True design wisdom goes beyond what\'s trending. It\'s about understanding timeless principles that create spaces where you feel truly at home.'
    },
    guides: {
      introTitle: 'Your Design Journey',
      introText: 'Whether you\'re planning a complete renovation or refreshing a single room, these guides will help you navigate the process with confidence and clarity.',
      cards: [
        {
          title: 'Kitchen Planning',
          description: 'Everything you need to know about designing the heart of your home.',
          image: '/images/Kitchens1.webp'
        },
        {
          title: 'Bathroom Design',
          description: 'Creating a functional and beautiful bathroom space.',
          image: '/images/gallery5.jpg'
        },
        {
          title: 'Living Spaces',
          description: 'Maximizing comfort and style in your main living areas.',
          image: '/images/salon.webp'
        }
      ],
      philosophyTitle: 'Step by Step',
      philosophyText: 'Great design doesn\'t happen by accident. It requires planning, patience, and a clear vision. These guides will help you develop all three.'
    },
    insights: {
      introTitle: 'Spaces That Work',
      introText: 'Every type of space—whether residential or commercial—has its own unique requirements. Learn how thoughtful design can transform any environment into something special.',
      cards: [
        {
          title: 'Office Spaces',
          description: 'Design that promotes productivity, creativity, and wellbeing.',
          image: '/images/OFFICE SPACES.webp'
        },
        {
          title: 'Hospitality',
          description: 'Creating memorable experiences for guests and customers.',
          image: '/images/HOSPITALITY.webp'
        },
        {
          title: 'Retail Design',
          description: 'Environments that tell your brand story and engage customers.',
          image: '/images/RETAIL DESIGN.webp'
        }
      ],
      philosophyTitle: 'Design for Life',
      philosophyText: 'Whether at home or at work, thoughtful design shapes how we live, work, and interact. Every space has the potential to be extraordinary.'
    }
  });

  // Sample articles data
  const [articles, setArticles] = useState<Article[]>([
    { id: '1', title: 'Finding Beauty in Organic Forms', excerpt: 'How nature shapes modern interior design...', content: '', image: '/images/gallery1.jpg', category: 'inspiration' },
    { id: '2', title: 'The Art of Bauhaus Revival', excerpt: 'Clean lines meet contemporary living...', content: '', image: '/images/gallery2.jpg', category: 'inspiration' },
    { id: '3', title: 'Japanese Minimalism at Home', excerpt: 'Embracing simplicity and restraint...', content: '', image: '/images/gallery3.jpg', category: 'inspiration' },
    { id: '4', title: 'Color Psychology in Design', excerpt: 'Understanding how colors affect mood...', content: '', image: '/images/gallery4.jpg', category: 'tips' },
    { id: '5', title: 'Lighting That Transforms', excerpt: 'The secret to perfect ambiance...', content: '', image: '/images/gallery5.jpg', category: 'tips' },
    { id: '6', title: 'Texture and Material Balance', excerpt: 'Creating visual interest through touch...', content: '', image: '/images/gallery6.jpg', category: 'tips' },
    { id: '7', title: 'Kitchen Renovation Guide', excerpt: 'Everything you need to know before starting...', content: '', image: '/images/gallery7.jpg', category: 'guides' },
    { id: '8', title: 'Bathroom Design Essentials', excerpt: 'From planning to final touches...', content: '', image: '/images/gallery8.jpg', category: 'guides' },
    { id: '9', title: 'Living Room Layout Tips', excerpt: 'Maximize space and flow...', content: '', image: '/images/gallery1.jpg', category: 'guides' },
    { id: '10', title: 'Office Space That Inspires', excerpt: 'Design for productivity and creativity...', content: '', image: '/images/gallery2.jpg', category: 'insights' },
    { id: '11', title: 'Retail Design Psychology', excerpt: 'Creating customer experiences...', content: '', image: '/images/gallery3.jpg', category: 'insights' },
    { id: '12', title: 'Hospitality Design Trends', excerpt: 'What guests really want...', content: '', image: '/images/gallery4.jpg', category: 'insights' },
  ]);

  const [newArticle, setNewArticle] = useState<Partial<Article>>({
    title: '',
    excerpt: '',
    content: '',
    image: '',
    category: 'inspiration'
  });

  const categoryLabels = {
    'main-page': 'Main Blog Page',
    inspiration: 'Inspirations Page',
    tips: 'Tips Page',
    guides: 'Guides Page',
    insights: 'Insights Page'
  };

  const filteredArticles = activeTab !== 'main-page' ? articles.filter(a => a.category === activeTab) : [];

  const handleSaveArticle = () => {
    if (editingArticle) {
      setArticles(articles.map(a => a.id === editingArticle.id ? editingArticle : a));
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
      setArticles([...articles, article]);
      setNewArticle({ title: '', excerpt: '', content: '', image: '', category: activeTab as Article['category'] });
      setShowNewArticle(false);
    }
  };

  const handleDeleteArticle = (id: string) => {
    if (confirm('Are you sure you want to delete this article?')) {
      setArticles(articles.filter(a => a.id !== id));
    }
  };

  const handleSectionIntroChange = (section: string, field: keyof SectionIntro, value: string) => {
    setSectionIntros({
      ...sectionIntros,
      [section]: {
        ...sectionIntros[section],
        [field]: value
      }
    });
  };

  const handlePageHeroChange = (page: string, field: keyof PageHeroSettings, value: string) => {
    setPageHeros({
      ...pageHeros,
      [page]: {
        ...pageHeros[page],
        [field]: value
      }
    });
  };

  const handlePageContentChange = (page: string, field: keyof PageContentSettings, value: string | typeof pageContents.inspiration.cards) => {
    setPageContents({
      ...pageContents,
      [page]: {
        ...pageContents[page],
        [field]: value
      }
    });
  };

  const handleCardChange = (page: string, cardIndex: number, field: string, value: string) => {
    const updatedCards = [...pageContents[page].cards];
    updatedCards[cardIndex] = { ...updatedCards[cardIndex], [field]: value };
    handlePageContentChange(page, 'cards', updatedCards);
  };

  const renderMainPageEditor = () => (
    <>
      {/* Main Hero Editor */}
      <section className="section-editor">
        <h2>Hero Section</h2>
        <div className="form-group">
          <label>Background Image URL</label>
          <input
            type="text"
            value={mainHero.image}
            onChange={(e) => setMainHero({ ...mainHero, image: e.target.value })}
          />
          {mainHero.image && (
            <div className="image-preview">
              <img src={mainHero.image} alt="Hero preview" />
            </div>
          )}
        </div>
        <div className="form-group">
          <label>Tagline</label>
          <input
            type="text"
            value={mainHero.tagline}
            onChange={(e) => setMainHero({ ...mainHero, tagline: e.target.value })}
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              value={mainHero.title}
              onChange={(e) => setMainHero({ ...mainHero, title: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Title Accent (second line)</label>
            <input
              type="text"
              value={mainHero.titleAccent}
              onChange={(e) => setMainHero({ ...mainHero, titleAccent: e.target.value })}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={mainHero.description}
            onChange={(e) => setMainHero({ ...mainHero, description: e.target.value })}
            rows={2}
          />
        </div>
      </section>

      {/* Section Editors */}
      {(['inspiration', 'tips', 'guides', 'insights'] as const).map((section, index) => (
        <section key={section} className="section-editor">
          <h2>Section {index + 1}: {sectionIntros[section].title}</h2>
          <div className="form-row">
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                value={sectionIntros[section].title}
                onChange={(e) => handleSectionIntroChange(section, 'title', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Subtitle</label>
              <input
                type="text"
                value={sectionIntros[section].subtitle}
                onChange={(e) => handleSectionIntroChange(section, 'subtitle', e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Introduction Text</label>
            <textarea
              value={sectionIntros[section].intro}
              onChange={(e) => handleSectionIntroChange(section, 'intro', e.target.value)}
              rows={3}
            />
          </div>
          <div className="form-group">
            <label>Secondary Text</label>
            <textarea
              value={sectionIntros[section].secondaryText}
              onChange={(e) => handleSectionIntroChange(section, 'secondaryText', e.target.value)}
              rows={2}
            />
          </div>
          <div className="form-group">
            <label>Button Text</label>
            <input
              type="text"
              value={sectionIntros[section].buttonText}
              onChange={(e) => handleSectionIntroChange(section, 'buttonText', e.target.value)}
            />
          </div>
        </section>
      ))}
    </>
  );

  const renderPageEditor = (page: 'inspiration' | 'tips' | 'guides' | 'insights') => (
    <>
      {/* Page Hero Editor */}
      <section className="section-editor">
        <h2>Page Hero</h2>
        <div className="form-group">
          <label>Background Image URL</label>
          <input
            type="text"
            value={pageHeros[page].image}
            onChange={(e) => handlePageHeroChange(page, 'image', e.target.value)}
          />
          {pageHeros[page].image && (
            <div className="image-preview">
              <img src={pageHeros[page].image} alt="Hero preview" />
            </div>
          )}
        </div>
        <div className="form-group">
          <label>Label (e.g., "01")</label>
          <input
            type="text"
            value={pageHeros[page].label}
            onChange={(e) => handlePageHeroChange(page, 'label', e.target.value)}
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              value={pageHeros[page].title}
              onChange={(e) => handlePageHeroChange(page, 'title', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Title Accent</label>
            <input
              type="text"
              value={pageHeros[page].titleAccent}
              onChange={(e) => handlePageHeroChange(page, 'titleAccent', e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Subtitle</label>
          <input
            type="text"
            value={pageHeros[page].subtitle}
            onChange={(e) => handlePageHeroChange(page, 'subtitle', e.target.value)}
          />
        </div>
      </section>

      {/* Page Content Editor */}
      <section className="section-editor">
        <h2>Page Content</h2>
        <div className="form-group">
          <label>Introduction Title</label>
          <input
            type="text"
            value={pageContents[page].introTitle}
            onChange={(e) => handlePageContentChange(page, 'introTitle', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Introduction Text</label>
          <textarea
            value={pageContents[page].introText}
            onChange={(e) => handlePageContentChange(page, 'introText', e.target.value)}
            rows={4}
          />
        </div>

        {/* Cards Editor */}
        <h3 className="sub-section-title">Content Cards</h3>
        {pageContents[page].cards.map((card, index) => (
          <div key={index} className="card-editor">
            <h4>Card {index + 1}</h4>
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
                  <img src={card.image} alt={`Card ${index + 1} preview`} />
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Philosophy Section */}
        <h3 className="sub-section-title">Philosophy Section</h3>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={pageContents[page].philosophyTitle}
            onChange={(e) => handlePageContentChange(page, 'philosophyTitle', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Text</label>
          <textarea
            value={pageContents[page].philosophyText}
            onChange={(e) => handlePageContentChange(page, 'philosophyText', e.target.value)}
            rows={3}
          />
        </div>
      </section>

      {/* Articles Section */}
      <section className="articles-section">
        <div className="articles-header">
          <h2>Articles ({filteredArticles.length})</h2>
          <button className="add-article-btn" onClick={() => setShowNewArticle(true)}>
            + Add Article
          </button>
        </div>

        {/* New Article Form */}
        {showNewArticle && (
          <div className="article-editor new-article">
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
              <button className="save-btn" onClick={handleAddArticle}>Add Article</button>
              <button className="cancel-btn" onClick={() => setShowNewArticle(false)}>Cancel</button>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="articles-grid">
          {filteredArticles.map(article => (
            <div key={article.id} className="article-card-admin">
              {editingArticle?.id === article.id ? (
                <div className="article-editor">
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
                    <button className="save-btn" onClick={handleSaveArticle}>Save</button>
                    <button className="cancel-btn" onClick={() => setEditingArticle(null)}>Cancel</button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="article-image-preview">
                    <img src={article.image} alt={article.title} />
                  </div>
                  <div className="article-info">
                    <h4>{article.title}</h4>
                    <p>{article.excerpt}</p>
                  </div>
                  <div className="article-actions">
                    <button className="edit-btn" onClick={() => setEditingArticle(article)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDeleteArticle(article.id)}>Delete</button>
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
        <div className="admin-header-content">
          <h1>Blog Management</h1>
          <Link href="/blog" className="view-blog-btn">View Blog →</Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="admin-container">
        {/* Sidebar - Page Tabs */}
        <aside className="admin-sidebar">
          <h3>Pages</h3>
          {(Object.keys(categoryLabels) as Array<keyof typeof categoryLabels>).map(cat => (
            <button
              key={cat}
              className={`category-tab ${activeTab === cat ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(cat);
                setEditingArticle(null);
                setShowNewArticle(false);
              }}
            >
              {categoryLabels[cat]}
              {cat !== 'main-page' && (
                <span className="article-count">{articles.filter(a => a.category === cat).length}</span>
              )}
            </button>
          ))}
        </aside>

        {/* Content Area */}
        <main className="admin-content">
          {activeTab === 'main-page' ? renderMainPageEditor() : renderPageEditor(activeTab)}
        </main>
      </div>

      <style jsx>{`
        .admin-page {
          min-height: 100vh;
          background: #f5f5f5;
        }

        .admin-header {
          background: #0b162d;
          color: #fff;
          padding: 1.5rem 2rem;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .admin-header-content {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .admin-header h1 {
          font-size: 1.5rem;
          font-weight: 600;
        }

        .view-blog-btn {
          background: #d4af37;
          color: #0b162d;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 500;
          transition: background 0.3s ease;
        }

        .view-blog-btn:hover {
          background: #f5deb3;
        }

        .admin-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 250px 1fr;
          gap: 2rem;
          padding: 2rem;
        }

        .admin-sidebar {
          background: #fff;
          border-radius: 12px;
          padding: 1.5rem;
          height: fit-content;
          position: sticky;
          top: 100px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .admin-sidebar h3 {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #666;
          margin-bottom: 1rem;
        }

        .category-tab {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1rem;
          border: none;
          background: transparent;
          text-align: left;
          cursor: pointer;
          border-radius: 8px;
          margin-bottom: 0.5rem;
          transition: all 0.3s ease;
          font-size: 0.95rem;
        }

        .category-tab:hover {
          background: #f5f5f5;
        }

        .category-tab.active {
          background: #0b162d;
          color: #fff;
        }

        .article-count {
          background: rgba(212, 175, 55, 0.2);
          color: #d4af37;
          padding: 2px 8px;
          border-radius: 10px;
          font-size: 0.8rem;
        }

        .category-tab.active .article-count {
          background: rgba(255, 255, 255, 0.2);
          color: #fff;
        }

        .admin-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .section-editor,
        .articles-section {
          background: #fff;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .section-editor h2,
        .articles-header h2 {
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          color: #0b162d;
          border-bottom: 2px solid #d4af37;
          padding-bottom: 0.5rem;
        }

        .sub-section-title {
          font-size: 1rem;
          color: #0b162d;
          margin: 2rem 0 1rem;
          padding-top: 1rem;
          border-top: 1px solid #eee;
        }

        .card-editor {
          background: #f9f9f9;
          border-radius: 8px;
          padding: 1rem;
          margin-bottom: 1rem;
          border: 1px solid #eee;
        }

        .card-editor h4 {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 1rem;
        }

        .form-group {
          margin-bottom: 1rem;
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
          color: #666;
          margin-bottom: 0.5rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 0.95rem;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #d4af37;
        }

        .image-preview {
          margin-top: 0.5rem;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #ddd;
        }

        .image-preview img {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }

        .image-preview.small img {
          height: 100px;
        }

        .articles-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .add-article-btn {
          background: #d4af37;
          color: #0b162d;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: background 0.3s ease;
        }

        .add-article-btn:hover {
          background: #c4a030;
        }

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-top: 1.5rem;
        }

        .article-card-admin {
          background: #f9f9f9;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid #eee;
        }

        .article-image-preview {
          height: 150px;
          overflow: hidden;
        }

        .article-image-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .article-info {
          padding: 1rem;
        }

        .article-info h4 {
          font-size: 1rem;
          margin-bottom: 0.5rem;
          color: #0b162d;
        }

        .article-info p {
          font-size: 0.85rem;
          color: #666;
        }

        .article-actions {
          display: flex;
          gap: 0.5rem;
          padding: 0 1rem 1rem;
        }

        .edit-btn,
        .delete-btn,
        .save-btn,
        .cancel-btn {
          padding: 0.4rem 0.8rem;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 0.85rem;
          transition: background 0.3s ease;
        }

        .edit-btn {
          background: #0b162d;
          color: #fff;
        }

        .delete-btn {
          background: #dc3545;
          color: #fff;
        }

        .save-btn {
          background: #28a745;
          color: #fff;
        }

        .cancel-btn {
          background: #6c757d;
          color: #fff;
        }

        .article-editor {
          padding: 1rem;
        }

        .article-editor.new-article {
          background: #f0f8ff;
          border-radius: 10px;
          margin-bottom: 1.5rem;
          border: 2px dashed #d4af37;
        }

        .article-editor h3 {
          margin-bottom: 1rem;
          color: #0b162d;
        }

        .form-actions {
          display: flex;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .admin-container {
            grid-template-columns: 1fr;
          }

          .admin-sidebar {
            position: static;
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .admin-sidebar h3 {
            width: 100%;
          }

          .category-tab {
            width: auto;
            flex: 1;
            min-width: 150px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .admin-container {
            padding: 1rem;
          }

          .admin-header-content {
            flex-direction: column;
            gap: 1rem;
          }

          .articles-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogAdmin;
