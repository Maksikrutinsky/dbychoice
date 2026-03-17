'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Project, loadProjects, saveProjects, STORAGE_KEY } from '../page';
import './admin.css';

const AUTH_KEY = 'dbc_admin_auth';

const CATEGORIES = ['Residential', 'Commercial', 'Hospitality', 'Consulting', 'Other'];
const MAX_IMAGES = 100;

const emptyForm = (): Omit<Project, 'id' | 'createdAt'> => ({
  title: '',
  description: '',
  fullContent: '',
  category: 'Residential',
  location: '',
  year: new Date().getFullYear().toString(),
  client: '',
  style: '',
  images: [],
});

export default function AdminPage() {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm());
  const [isNew, setIsNew] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [sidebarSearch, setSidebarSearch] = useState('');
  const [authReady, setAuthReady] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (localStorage.getItem(AUTH_KEY) !== 'true') {
      router.replace('/admin');
      return;
    }
    setAuthReady(true);
    setProjects(loadProjects());
  }, [router]);

  const showToast = (msg: string) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2800);
  };

  const selectProject = (p: Project) => {
    setSelectedId(p.id);
    setForm({
      title: p.title,
      description: p.description,
      fullContent: p.fullContent || '',
      category: p.category,
      location: p.location,
      year: p.year,
      client: p.client || '',
      style: p.style || '',
      images: [...p.images],
    });
    setIsNew(false);
  };

  const startNew = () => {
    setSelectedId(null);
    setForm(emptyForm());
    setIsNew(true);
  };

  const handleSave = () => {
    if (!form.title.trim()) return;

    let updated: Project[];
    if (isNew) {
      const newProject: Project = {
        id: Date.now().toString(),
        ...form,
        title: form.title.trim(),
        description: form.description.trim(),
        location: form.location.trim(),
        client: form.client?.trim() || '',
        style: form.style?.trim() || '',
        createdAt: Date.now(),
      };
      updated = [newProject, ...projects];
      setSelectedId(newProject.id);
      setIsNew(false);
    } else {
      updated = projects.map((p) =>
        p.id === selectedId
          ? { ...p, ...form, title: form.title.trim(), description: form.description.trim(), location: form.location.trim(), client: form.client?.trim() || '', style: form.style?.trim() || '' }
          : p
      );
    }
    setProjects(updated);
    saveProjects(updated);
    showToast('Project saved successfully');
  };

  const handleDelete = () => {
    const updated = projects.filter((p) => p.id !== selectedId);
    setProjects(updated);
    saveProjects(updated);
    setSelectedId(null);
    setForm(emptyForm());
    setIsNew(false);
    setConfirmDelete(false);
    showToast('Project deleted');
  };

  // ── Image handling ──
  const readFilesAsBase64 = useCallback((files: File[]) => {
    const remaining = MAX_IMAGES - form.images.length;
    const toProcess = files.filter(f => f.type.startsWith('image/')).slice(0, remaining);

    toProcess.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setForm((f) => {
          if (f.images.length >= MAX_IMAGES) return f;
          return { ...f, images: [...f.images, result] };
        });
      };
      reader.readAsDataURL(file);
    });

    if (files.length > remaining) {
      showToast(`Only ${remaining} more image(s) can be added (max ${MAX_IMAGES})`);
    }
  }, [form.images.length]);

  if (!authReady) return null;

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    readFilesAsBase64(files);
    e.target.value = '';
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    readFilesAsBase64(files);
  };

  const removeImage = (index: number) => {
    setForm((f) => ({ ...f, images: f.images.filter((_, i) => i !== index) }));
  };

  const setCover = (index: number) => {
    setForm((f) => {
      const imgs = [...f.images];
      const [moved] = imgs.splice(index, 1);
      imgs.unshift(moved);
      return { ...f, images: imgs };
    });
  };

  const filteredSidebar = projects.filter((p) =>
    !sidebarSearch || p.title.toLowerCase().includes(sidebarSearch.toLowerCase())
  );

  const currentProject = projects.find((p) => p.id === selectedId);

  return (
    <div className="admin-page">
      {/* Top bar */}
      <div className="admin-topbar">
        <div className="container admin-topbar-inner">
          <div className="admin-topbar-left">
            <Link href="/admin" className="admin-back-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Dashboard
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
            <span className="admin-topbar-title">Portfolio <span>Admin</span></span>
          </div>
          <div className="admin-topbar-right">
            <span className="admin-project-count">{projects.length} project{projects.length !== 1 ? 's' : ''}</span>
            <button className="btn-new-project" onClick={startNew}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 5v14M5 12h14" />
              </svg>
              New Project
            </button>
          </div>
        </div>
      </div>

      {/* Layout */}
      <div className="admin-layout">
        {/* Sidebar */}
        <aside className="admin-sidebar">
          <div className="sidebar-search">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search projects..."
              value={sidebarSearch}
              onChange={(e) => setSidebarSearch(e.target.value)}
            />
          </div>
          <div className="sidebar-list">
            {filteredSidebar.length === 0 ? (
              <div className="sidebar-empty">
                {projects.length === 0 ? 'No projects yet.' : 'No results.'}
              </div>
            ) : (
              filteredSidebar.map((p) => (
                <div
                  key={p.id}
                  className={`sidebar-item ${selectedId === p.id && !isNew ? 'active' : ''}`}
                  onClick={() => selectProject(p)}
                >
                  <div className="sidebar-thumb">
                    {p.images.length > 0 ? (
                      <img src={p.images[0]} alt={p.title} />
                    ) : (
                      <div className="sidebar-thumb-empty">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="M21 15l-5-5L5 21" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="sidebar-info">
                    <div className="sidebar-item-title">{p.title}</div>
                    <div className="sidebar-item-meta">
                      <span>{p.category}</span>
                      {p.images.length > 0 && (
                        <span className="sidebar-badge">
                          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                          </svg>
                          {p.images.length}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </aside>

        {/* Main panel */}
        <main className="admin-main">
          {!isNew && !selectedId ? (
            <div className="admin-welcome">
              <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
              <div>
                <h3>Select a project to edit</h3>
                <p>or create a new one</p>
              </div>
              <button className="btn-new-project" onClick={startNew}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 5v14M5 12h14" />
                </svg>
                New Project
              </button>
            </div>
          ) : (
            <div className="admin-editor">
              <div className="editor-header">
                <h2>{isNew ? 'New Project' : `Edit: ${currentProject?.title || ''}`}</h2>
                <div className="editor-actions">
                  {!isNew && selectedId && (
                    <button className="btn-delete-project" onClick={() => setConfirmDelete(true)}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14H6L5 6" /><path d="M10 11v6M14 11v6" /><path d="M9 6V4h6v2" />
                      </svg>
                      Delete
                    </button>
                  )}
                  <button
                    className="btn-save-project"
                    onClick={handleSave}
                    disabled={!form.title.trim()}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" />
                    </svg>
                    Save Project
                  </button>
                </div>
              </div>

              {/* Project details */}
              <div className="editor-section">
                <div className="editor-section-title">Project Details</div>

                <div className="form-group">
                  <label>Project Title *</label>
                  <input
                    type="text"
                    placeholder="e.g. Modern Living Room – Tel Aviv"
                    value={form.title}
                    onChange={(e) => setForm(f => ({ ...f, title: e.target.value }))}
                  />
                </div>

                <div className="form-group">
                  <label>Short Description <span style={{ fontWeight: 400, color: '#aaa', fontSize: '0.78rem' }}>(shown on card)</span></label>
                  <textarea
                    placeholder="Brief 1–2 sentence summary shown on the project card..."
                    value={form.description}
                    onChange={(e) => setForm(f => ({ ...f, description: e.target.value }))}
                  />
                </div>

                <div className="form-group">
                  <label>Full Project Content <span style={{ fontWeight: 400, color: '#aaa', fontSize: '0.78rem' }}>(shown in modal)</span></label>
                  <textarea
                    className="textarea-tall"
                    placeholder={`Full project story, challenge, strategy, results...\n\nUse ALL CAPS lines for section headings.\nUse • or ✓ at the start of a line for bullet points.`}
                    value={form.fullContent || ''}
                    onChange={(e) => setForm(f => ({ ...f, fullContent: e.target.value }))}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Category</label>
                    <select value={form.category} onChange={(e) => setForm(f => ({ ...f, category: e.target.value }))}>
                      {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Year</label>
                    <input
                      type="number"
                      placeholder="2024"
                      value={form.year}
                      onChange={(e) => setForm(f => ({ ...f, year: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Location</label>
                  <input
                    type="text"
                    placeholder="e.g. Tel Aviv, Israel"
                    value={form.location}
                    onChange={(e) => setForm(f => ({ ...f, location: e.target.value }))}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Client</label>
                    <input
                      type="text"
                      placeholder="e.g. Private Client"
                      value={form.client || ''}
                      onChange={(e) => setForm(f => ({ ...f, client: e.target.value }))}
                    />
                  </div>
                  <div className="form-group">
                    <label>Design Style</label>
                    <input
                      type="text"
                      placeholder="e.g. Modern Minimalist"
                      value={form.style || ''}
                      onChange={(e) => setForm(f => ({ ...f, style: e.target.value }))}
                    />
                  </div>
                </div>
              </div>

              {/* Images */}
              <div className="editor-section">
                <div className="images-header">
                  <div className="editor-section-title" style={{ margin: 0 }}>Project Images</div>
                  <span className="images-count">
                    <strong>{form.images.length}</strong> / {MAX_IMAGES} images
                  </span>
                </div>

                {/* Upload zone */}
                <div
                  className={`upload-zone ${dragOver ? 'drag-over' : ''} ${form.images.length >= MAX_IMAGES ? 'disabled' : ''}`}
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={handleDrop}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileInput}
                    disabled={form.images.length >= MAX_IMAGES}
                  />
                  <div className="upload-icon">
                    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                  </div>
                  {form.images.length >= MAX_IMAGES ? (
                    <p>Maximum {MAX_IMAGES} images reached</p>
                  ) : (
                    <>
                      <p>Drag & drop images here, or click to browse</p>
                      <span>Select multiple files · JPG, PNG, WEBP · up to {MAX_IMAGES} total</span>
                    </>
                  )}
                </div>

                {/* Images grid */}
                {form.images.length > 0 && (
                  <div className="images-grid">
                    {form.images.map((img, index) => (
                      <div key={index} className="image-thumb-item">
                        <img src={img} alt={`Project image ${index + 1}`} />
                        {index === 0 && <span className="cover-badge">Cover</span>}
                        <div className="image-thumb-overlay">
                          {index !== 0 && (
                            <button
                              className="thumb-btn"
                              title="Set as cover"
                              onClick={() => setCover(index)}
                            >
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                            </button>
                          )}
                          <button
                            className="thumb-btn remove"
                            title="Remove image"
                            onClick={() => removeImage(index)}
                          >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Toast */}
      {toast && <div className="admin-toast">{toast}</div>}

      {/* Confirm delete */}
      {confirmDelete && (
        <div className="confirm-backdrop" onClick={() => setConfirmDelete(false)}>
          <div className="confirm-dialog" onClick={(e) => e.stopPropagation()}>
            <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(192,57,43,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px', color: '#c0392b' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/>
              </svg>
            </div>
            <h3>Delete Project?</h3>
            <p>
              &ldquo;{currentProject?.title}&rdquo; and all its images will be permanently removed.
            </p>
            <div className="confirm-actions">
              <button className="btn-confirm-cancel" onClick={() => setConfirmDelete(false)}>Cancel</button>
              <button className="btn-confirm-delete" onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
