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

type BlockType = 'title' | 'subtitle' | 'paragraph' | 'image' | 'button';

interface Block {
  id: string;
  type: BlockType;
  content: string;
}

const AddButton = ({ onAdd }: { onAdd: (type: BlockType) => void }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="add-block-wrapper">
      <button className="add-block-btn" onClick={() => setShowMenu(!showMenu)}>+</button>
      {showMenu && (
        <div className="add-menu">
          <button onClick={() => { onAdd('title'); setShowMenu(false); }}>Title</button>
          <button onClick={() => { onAdd('subtitle'); setShowMenu(false); }}>Subtitle</button>
          <button onClick={() => { onAdd('paragraph'); setShowMenu(false); }}>Paragraph</button>
          <button onClick={() => { onAdd('image'); setShowMenu(false); }}>Image</button>
          <button onClick={() => { onAdd('button'); setShowMenu(false); }}>Button</button>
        </div>
      )}
    </div>
  );
};

const EditableBlock = ({
  block, onChange, onDelete, onAddAfter, onMoveUp, onMoveDown, isFirst, isLast
}: {
  block: Block;
  onChange: (content: string) => void;
  onDelete: () => void;
  onAddAfter: (type: BlockType) => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  isFirst: boolean;
  isLast: boolean;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showImagePicker, setShowImagePicker] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const typeLabels: Record<BlockType, string> = {
    title: 'TITLE',
    subtitle: 'SUBTITLE',
    paragraph: 'PARAGRAPH',
    image: 'IMAGE',
    button: 'BUTTON'
  };

  const renderContent = () => {
    if (block.type === 'image') {
      return (
        <div className="image-block" onClick={() => setShowImagePicker(true)}>
          {block.content ? <img src={block.content} alt="" /> : <div className="image-placeholder">Click to select image</div>}
        </div>
      );
    }

    if (isEditing) {
      if (block.type === 'paragraph') {
        return (
          <textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            value={block.content}
            onChange={(e) => onChange(e.target.value)}
            onBlur={() => setIsEditing(false)}
            className="block-input paragraph-input"
            placeholder="Write your paragraph..."
            rows={4}
          />
        );
      }
      return (
        <input
          ref={inputRef as React.RefObject<HTMLInputElement>}
          type="text"
          value={block.content}
          onChange={(e) => onChange(e.target.value)}
          onBlur={() => setIsEditing(false)}
          onKeyDown={(e) => e.key === 'Enter' && setIsEditing(false)}
          className={`block-input ${block.type}-input`}
          placeholder={`Enter ${block.type}...`}
        />
      );
    }

    return (
      <div className={`block-content ${block.type}-content`} onClick={() => setIsEditing(true)}>
        {block.content || `Click to add ${block.type}...`}
      </div>
    );
  };

  return (
    <>
      <div className={`block-wrapper ${block.type}-block`} onMouseEnter={() => setShowActions(true)} onMouseLeave={() => setShowActions(false)}>
        <div className="block-label">{typeLabels[block.type]}</div>
        <div className="block-main">{renderContent()}</div>

        {showActions && (
          <div className="block-actions">
            {!isFirst && <button onClick={onMoveUp} title="Move up">↑</button>}
            {!isLast && <button onClick={onMoveDown} title="Move down">↓</button>}
            <button onClick={onDelete} className="delete-btn" title="Delete">×</button>
          </div>
        )}

        {showImagePicker && (
          <div className="image-picker-overlay" onClick={() => setShowImagePicker(false)}>
            <div className="image-picker-modal" onClick={(e) => e.stopPropagation()}>
              <div className="picker-header">
                <span>Select Image</span>
                <button onClick={() => setShowImagePicker(false)}>×</button>
              </div>
              <div className="picker-url">
                <input type="text" value={block.content} onChange={(e) => onChange(e.target.value)} placeholder="Paste image URL..." />
              </div>
              <div className="picker-grid">
                {availableImages.map((img, i) => (
                  <div key={i} className={`picker-thumb ${block.content === img ? 'selected' : ''}`} onClick={() => { onChange(img); setShowImagePicker(false); }}>
                    <img src={img} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <AddButton onAdd={onAddAfter} />
    </>
  );
};

const BlogAdmin = () => {
  const { data, updateMainHero, updateSectionIntro, updatePageHero, updatePageContent, updateArticles, saveAll, resetToDefault, hasUnsavedChanges } = useBlog();
  const [activeTab, setActiveTab] = useState<'main' | 'inspiration' | 'tips' | 'guides' | 'insights'>('main');
  const [saveMessage, setSaveMessage] = useState('');
  const [autoSave, setAutoSave] = useState(true);
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [editingArticle, setEditingArticle] = useState<string | null>(null);
  const [showNewArticle, setShowNewArticle] = useState(false);
  const [newArticle, setNewArticle] = useState({ title: '', excerpt: '', content: '', image: '/images/gallery1.jpg' });

  useEffect(() => {
    if (activeTab === 'main') {
      setBlocks([
        { id: '1', type: 'image', content: data.mainHero.image },
        { id: '2', type: 'subtitle', content: data.mainHero.tagline },
        { id: '3', type: 'title', content: data.mainHero.title + ' ' + data.mainHero.titleAccent },
        { id: '4', type: 'paragraph', content: data.mainHero.description },
      ]);
    } else {
      const section = data.sectionIntros[activeTab];
      const pageHero = data.pageHeros[activeTab];
      const pageContent = data.pageContents[activeTab];
      setBlocks([
        { id: '1', type: 'image', content: pageHero?.image || '' },
        { id: '2', type: 'title', content: (pageHero?.title || '') + ' ' + (pageHero?.titleAccent || '') },
        { id: '3', type: 'subtitle', content: pageHero?.subtitle || '' },
        { id: '4', type: 'title', content: pageContent?.introTitle || '' },
        { id: '5', type: 'paragraph', content: pageContent?.introText || '' },
        { id: '6', type: 'title', content: section?.title || '' },
        { id: '7', type: 'paragraph', content: section?.intro || '' },
        { id: '8', type: 'paragraph', content: section?.secondaryText || '' },
        { id: '9', type: 'button', content: section?.buttonText || '' },
      ]);
    }
  }, [activeTab, data]);

  useEffect(() => {
    if (activeTab !== 'main') {
      setArticles(data.articles.filter(a => a.category === activeTab));
    }
  }, [activeTab, data.articles]);

  useEffect(() => {
    if (autoSave && hasUnsavedChanges) {
      const timer = setTimeout(() => {
        saveAll();
        setSaveMessage('Saved');
        setTimeout(() => setSaveMessage(''), 2000);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [data, autoSave, hasUnsavedChanges, saveAll]);

  const saveBlocks = () => {
    if (activeTab === 'main') {
      const imageBlock = blocks.find(b => b.type === 'image');
      const taglineBlock = blocks.find(b => b.type === 'subtitle');
      const titleBlock = blocks.find(b => b.type === 'title');
      const descBlock = blocks.find(b => b.type === 'paragraph');
      updateMainHero({
        image: imageBlock?.content || '',
        tagline: taglineBlock?.content || '',
        title: titleBlock?.content?.split(' ')[0] || '',
        titleAccent: titleBlock?.content?.split(' ').slice(1).join(' ') || '',
        description: descBlock?.content || ''
      });
    }
    saveAll();
    setSaveMessage('Saved');
    setTimeout(() => setSaveMessage(''), 2000);
  };

  const updateBlock = (id: string, content: string) => {
    setBlocks(blocks.map(b => b.id === id ? { ...b, content } : b));
  };

  const deleteBlock = (id: string) => {
    setBlocks(blocks.filter(b => b.id !== id));
  };

  const addBlock = (afterId: string | null, type: BlockType) => {
    const newBlock: Block = { id: Date.now().toString(), type, content: '' };
    if (afterId === null) {
      setBlocks([newBlock, ...blocks]);
    } else {
      const index = blocks.findIndex(b => b.id === afterId);
      const newBlocks = [...blocks];
      newBlocks.splice(index + 1, 0, newBlock);
      setBlocks(newBlocks);
    }
  };

  const moveBlock = (id: string, direction: 'up' | 'down') => {
    const index = blocks.findIndex(b => b.id === id);
    if ((direction === 'up' && index === 0) || (direction === 'down' && index === blocks.length - 1)) return;
    const newBlocks = [...blocks];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    [newBlocks[index], newBlocks[targetIndex]] = [newBlocks[targetIndex], newBlocks[index]];
    setBlocks(newBlocks);
  };

  const handleAddArticle = () => {
    if (!newArticle.title || activeTab === 'main') return;
    updateArticles([...data.articles, { id: Date.now().toString(), ...newArticle, category: activeTab as Article['category'] }]);
    setNewArticle({ title: '', excerpt: '', content: '', image: '/images/gallery1.jpg' });
    setShowNewArticle(false);
  };

  const handleUpdateArticle = (id: string, field: keyof Article, value: string) => {
    updateArticles(data.articles.map(a => a.id === id ? { ...a, [field]: value } : a));
  };

  const handleDeleteArticle = (id: string) => {
    if (confirm('Delete this article?')) updateArticles(data.articles.filter(a => a.id !== id));
  };

  return (
    <div className="admin-container">
      <header className="admin-header">
        <div className="header-left">
          <Link href="/blog" className="back-btn">← Back</Link>
          <h1>Blog Editor</h1>
        </div>
        <div className="header-right">
          {saveMessage && <span className="save-msg">{saveMessage}</span>}
          <label className="auto-save"><input type="checkbox" checked={autoSave} onChange={(e) => setAutoSave(e.target.checked)} /> Auto-save</label>
          {hasUnsavedChanges && <span className="unsaved">●</span>}
          <button className="save-btn" onClick={saveBlocks}>Save</button>
          <button className="preview-btn" onClick={() => window.open('/blog', '_blank')}>Preview</button>
          <button className="reset-btn" onClick={resetToDefault}>Reset</button>
        </div>
      </header>

      <nav className="tabs">
        {[{ key: 'main', label: 'Main Page' }, { key: 'inspiration', label: 'Inspirations' }, { key: 'tips', label: 'Tips' }, { key: 'guides', label: 'Guides' }, { key: 'insights', label: 'Insights' }].map(tab => (
          <button key={tab.key} className={activeTab === tab.key ? 'active' : ''} onClick={() => setActiveTab(tab.key as typeof activeTab)}>{tab.label}</button>
        ))}
      </nav>

      <main className="editor">
        <div className="editor-content">
          <h2 className="editor-title">Page Content</h2>
          <p className="editor-hint">Click on any text to edit. Use + to add new elements.</p>

          <AddButton onAdd={(type) => addBlock(null, type)} />

          {blocks.map((block, index) => (
            <EditableBlock
              key={block.id}
              block={block}
              onChange={(content) => updateBlock(block.id, content)}
              onDelete={() => deleteBlock(block.id)}
              onAddAfter={(type) => addBlock(block.id, type)}
              onMoveUp={() => moveBlock(block.id, 'up')}
              onMoveDown={() => moveBlock(block.id, 'down')}
              isFirst={index === 0}
              isLast={index === blocks.length - 1}
            />
          ))}

          {activeTab !== 'main' && (
            <div className="articles-section">
              <div className="articles-header">
                <h2>Articles</h2>
                <button className="add-article-btn" onClick={() => setShowNewArticle(true)}>+ Add Article</button>
              </div>

              {showNewArticle && (
                <div className="article-form">
                  <div className="form-row"><label>TITLE</label><input type="text" value={newArticle.title} onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })} placeholder="Article title..." /></div>
                  <div className="form-row"><label>EXCERPT</label><input type="text" value={newArticle.excerpt} onChange={(e) => setNewArticle({ ...newArticle, excerpt: e.target.value })} placeholder="Short description..." /></div>
                  <div className="form-row"><label>IMAGE URL</label><input type="text" value={newArticle.image} onChange={(e) => setNewArticle({ ...newArticle, image: e.target.value })} placeholder="/images/..." /></div>
                  <div className="form-row"><label>CONTENT</label><textarea value={newArticle.content} onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })} placeholder="Full article content..." rows={5} /></div>
                  <div className="form-actions"><button className="save-btn" onClick={handleAddArticle}>Add</button><button className="cancel-btn" onClick={() => setShowNewArticle(false)}>Cancel</button></div>
                </div>
              )}

              <div className="articles-list">
                {articles.map(article => (
                  <div key={article.id} className="article-item">
                    <div className="article-preview" onClick={() => setEditingArticle(editingArticle === article.id ? null : article.id)}>
                      <img src={article.image} alt="" />
                      <div className="article-info"><h4>{article.title}</h4><p>{article.excerpt}</p></div>
                      <span className="edit-icon">✎</span>
                    </div>
                    {editingArticle === article.id && (
                      <div className="article-edit">
                        <div className="form-row"><label>TITLE</label><input type="text" value={article.title} onChange={(e) => handleUpdateArticle(article.id, 'title', e.target.value)} /></div>
                        <div className="form-row"><label>EXCERPT</label><input type="text" value={article.excerpt} onChange={(e) => handleUpdateArticle(article.id, 'excerpt', e.target.value)} /></div>
                        <div className="form-row"><label>IMAGE URL</label><input type="text" value={article.image} onChange={(e) => handleUpdateArticle(article.id, 'image', e.target.value)} /></div>
                        <div className="form-row"><label>CONTENT</label><textarea value={article.content} onChange={(e) => handleUpdateArticle(article.id, 'content', e.target.value)} rows={5} /></div>
                        <button className="delete-article-btn" onClick={() => handleDeleteArticle(article.id)}>Delete Article</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <style jsx>{`
        .admin-container { min-height: 100vh; background: #fafafa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
        .admin-header { display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem; background: #fff; border-bottom: 1px solid #e5e5e5; position: sticky; top: 0; z-index: 100; }
        .header-left { display: flex; align-items: center; gap: 1.5rem; }
        .back-btn { color: #666; text-decoration: none; font-size: 0.9rem; }
        .back-btn:hover { color: #000; }
        .admin-header h1 { font-size: 1.25rem; font-weight: 600; color: #111; }
        .header-right { display: flex; align-items: center; gap: 1rem; }
        .save-msg { color: #22c55e; font-size: 0.85rem; }
        .auto-save { display: flex; align-items: center; gap: 0.4rem; font-size: 0.85rem; color: #666; cursor: pointer; }
        .unsaved { color: #f59e0b; font-size: 1.2rem; }
        .save-btn, .preview-btn, .reset-btn { padding: 0.5rem 1rem; border-radius: 6px; font-size: 0.85rem; cursor: pointer; transition: all 0.2s; }
        .save-btn { background: #111; color: #fff; border: none; }
        .save-btn:hover { background: #333; }
        .preview-btn { background: #fff; color: #111; border: 1px solid #ddd; }
        .preview-btn:hover { border-color: #111; }
        .reset-btn { background: #fff; color: #dc2626; border: 1px solid #fecaca; }
        .reset-btn:hover { background: #fef2f2; }
        .tabs { display: flex; gap: 0.25rem; padding: 0 2rem; background: #fff; border-bottom: 1px solid #e5e5e5; }
        .tabs button { padding: 1rem 1.5rem; background: none; border: none; border-bottom: 2px solid transparent; color: #666; font-size: 0.9rem; cursor: pointer; transition: all 0.2s; }
        .tabs button:hover { color: #111; }
        .tabs button.active { color: #111; border-bottom-color: #111; font-weight: 500; }
        .editor { max-width: 800px; margin: 0 auto; padding: 2rem; }
        .editor-content { background: #fff; border-radius: 12px; padding: 2rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .editor-title { font-size: 1.1rem; font-weight: 600; color: #111; margin-bottom: 0.5rem; }
        .editor-hint { font-size: 0.85rem; color: #888; margin-bottom: 2rem; }
        .add-block-wrapper { display: flex; justify-content: center; padding: 0.5rem 0; opacity: 0.3; transition: opacity 0.2s; position: relative; }
        .add-block-wrapper:hover { opacity: 1; }
        .add-block-btn { width: 28px; height: 28px; border-radius: 50%; background: #f5f5f5; border: 1px solid #e5e5e5; color: #888; font-size: 1.2rem; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
        .add-block-btn:hover { background: #111; color: #fff; border-color: #111; }
        .add-menu { position: absolute; top: 100%; left: 50%; transform: translateX(-50%); background: #fff; border: 1px solid #e5e5e5; border-radius: 8px; padding: 0.5rem; box-shadow: 0 4px 12px rgba(0,0,0,0.1); z-index: 10; display: flex; flex-direction: column; gap: 0.25rem; min-width: 140px; }
        .add-menu button { padding: 0.6rem 1rem; background: none; border: none; text-align: left; font-size: 0.85rem; color: #333; cursor: pointer; border-radius: 4px; }
        .add-menu button:hover { background: #f5f5f5; }
        .block-wrapper { position: relative; margin: 0.5rem 0; padding: 0.75rem 1rem; border-radius: 8px; border: 1px solid transparent; transition: all 0.2s; }
        .block-wrapper:hover { background: #fafafa; border-color: #e5e5e5; }
        .block-label { font-size: 0.65rem; font-weight: 600; letter-spacing: 1px; color: #999; margin-bottom: 0.4rem; }
        .block-content { cursor: text; min-height: 1.5em; color: #333; }
        .title-content { font-size: 1.5rem; font-weight: 600; color: #111; font-family: 'Playfair Display', Georgia, serif; }
        .subtitle-content { font-size: 1rem; color: #666; font-style: italic; }
        .paragraph-content { font-size: 0.95rem; line-height: 1.7; color: #444; }
        .button-content { display: inline-block; padding: 0.5rem 1rem; background: #f5f5f5; border-radius: 6px; font-size: 0.9rem; color: #333; }
        .block-input { width: 100%; border: none; background: #fff; padding: 0.5rem; border-radius: 4px; box-shadow: 0 0 0 2px #2563eb; font-family: inherit; }
        .block-input:focus { outline: none; }
        .title-input { font-size: 1.5rem; font-weight: 600; font-family: 'Playfair Display', Georgia, serif; }
        .subtitle-input { font-size: 1rem; font-style: italic; color: #666; }
        .paragraph-input { font-size: 0.95rem; line-height: 1.7; resize: vertical; }
        .button-input { font-size: 0.9rem; }
        .image-block { cursor: pointer; border-radius: 8px; overflow: hidden; background: #f5f5f5; }
        .image-block img { width: 100%; max-height: 300px; object-fit: cover; }
        .image-placeholder { padding: 3rem; text-align: center; color: #888; border: 2px dashed #ddd; border-radius: 8px; }
        .block-actions { position: absolute; top: 0.5rem; right: 0.5rem; display: flex; gap: 0.25rem; }
        .block-actions button { width: 24px; height: 24px; border: none; background: #f5f5f5; border-radius: 4px; cursor: pointer; font-size: 0.8rem; color: #666; transition: all 0.2s; }
        .block-actions button:hover { background: #e5e5e5; color: #111; }
        .block-actions .delete-btn:hover { background: #fee2e2; color: #dc2626; }
        .image-picker-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; }
        .image-picker-modal { background: #fff; border-radius: 12px; width: 90%; max-width: 500px; max-height: 80vh; overflow: hidden; }
        .picker-header { display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.25rem; border-bottom: 1px solid #e5e5e5; font-weight: 600; }
        .picker-header button { background: none; border: none; font-size: 1.5rem; color: #888; cursor: pointer; }
        .picker-url { padding: 1rem 1.25rem; border-bottom: 1px solid #e5e5e5; }
        .picker-url input { width: 100%; padding: 0.6rem 0.75rem; border: 1px solid #ddd; border-radius: 6px; font-size: 0.9rem; }
        .picker-url input:focus { outline: none; border-color: #2563eb; }
        .picker-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; padding: 1rem 1.25rem; max-height: 300px; overflow-y: auto; }
        .picker-thumb { aspect-ratio: 1; border-radius: 6px; overflow: hidden; cursor: pointer; border: 2px solid transparent; transition: all 0.2s; }
        .picker-thumb:hover { border-color: #2563eb; }
        .picker-thumb.selected { border-color: #2563eb; }
        .picker-thumb img { width: 100%; height: 100%; object-fit: cover; }
        .articles-section { margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #e5e5e5; }
        .articles-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
        .articles-header h2 { font-size: 1.1rem; font-weight: 600; }
        .add-article-btn { padding: 0.5rem 1rem; background: #fff; border: 1px solid #ddd; border-radius: 6px; font-size: 0.85rem; cursor: pointer; }
        .add-article-btn:hover { border-color: #111; }
        .article-form, .article-edit { background: #fafafa; border-radius: 8px; padding: 1.25rem; margin-bottom: 1rem; }
        .form-row { margin-bottom: 1rem; }
        .form-row label { display: block; font-size: 0.65rem; font-weight: 600; letter-spacing: 1px; color: #999; margin-bottom: 0.4rem; }
        .form-row input, .form-row textarea { width: 100%; padding: 0.6rem 0.75rem; border: 1px solid #ddd; border-radius: 6px; font-size: 0.9rem; font-family: inherit; }
        .form-row input:focus, .form-row textarea:focus { outline: none; border-color: #2563eb; }
        .form-actions { display: flex; gap: 0.5rem; }
        .cancel-btn { padding: 0.5rem 1rem; background: #fff; border: 1px solid #ddd; border-radius: 6px; font-size: 0.85rem; cursor: pointer; }
        .delete-article-btn { padding: 0.5rem 1rem; background: #fff; border: 1px solid #fecaca; color: #dc2626; border-radius: 6px; font-size: 0.85rem; cursor: pointer; margin-top: 1rem; }
        .delete-article-btn:hover { background: #fef2f2; }
        .articles-list { display: flex; flex-direction: column; gap: 0.5rem; }
        .article-item { border: 1px solid #e5e5e5; border-radius: 8px; overflow: hidden; }
        .article-preview { display: flex; align-items: center; gap: 1rem; padding: 0.75rem; cursor: pointer; transition: background 0.2s; }
        .article-preview:hover { background: #fafafa; }
        .article-preview img { width: 60px; height: 45px; object-fit: cover; border-radius: 4px; }
        .article-info { flex: 1; min-width: 0; }
        .article-info h4 { font-size: 0.9rem; font-weight: 500; margin-bottom: 0.25rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .article-info p { font-size: 0.8rem; color: #666; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .edit-icon { color: #888; font-size: 1rem; }
        .article-edit { border-top: 1px solid #e5e5e5; border-radius: 0; }
        @media (max-width: 768px) {
          .admin-header { flex-direction: column; gap: 1rem; padding: 1rem; }
          .header-right { flex-wrap: wrap; justify-content: center; }
          .tabs { padding: 0 1rem; overflow-x: auto; }
          .tabs button { padding: 0.75rem 1rem; white-space: nowrap; }
          .editor { padding: 1rem; }
          .editor-content { padding: 1.5rem; }
        }
      `}</style>
    </div>
  );
};

export default BlogAdmin;
