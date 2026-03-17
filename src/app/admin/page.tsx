'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import './admin.css';

const ADMIN_PASSWORD = 'DBC@2024';
const AUTH_KEY = 'dbc_admin_auth';

export default function AdminPage() {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    setIsAuth(localStorage.getItem(AUTH_KEY) === 'true');
    setLoading(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem(AUTH_KEY, 'true');
      setIsAuth(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(AUTH_KEY);
    setIsAuth(false);
  };

  if (loading) return null;

  if (!isAuth) {
    return (
      <div className="admin-login-page">
        <div className="admin-login-card">
          <div className="admin-login-logo">
            <div className="admin-login-logo-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="admin-login-brand">Design By Choice</span>
            <span className="admin-login-subtitle">Admin Panel</span>
          </div>

          <form className="admin-login-form" onSubmit={handleLogin}>
            <div>
              <label className="login-field-label" htmlFor="password">Password</label>
              <div className="login-input-wrap">
                <input
                  id="password"
                  type={showPass ? 'text' : 'password'}
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(''); }}
                  autoFocus
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="login-toggle-pass"
                  onClick={() => setShowPass(v => !v)}
                  tabIndex={-1}
                  aria-label={showPass ? 'Hide password' : 'Show password'}
                >
                  {showPass ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {error && <div className="login-error">{error}</div>}

            <button type="submit" className="login-submit-btn">
              Sign In
            </button>
          </form>

          <Link href="/" className="login-back-link">
            ← Back to website
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dash-page">
      <div className="admin-dash-topbar">
        <div className="admin-dash-topbar-inner">
          <span className="admin-dash-title">
            Admin <span>Dashboard</span>
          </span>
          <div className="admin-dash-topbar-right">
            <Link href="/" className="admin-dash-site-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Website
            </Link>
            <button className="admin-dash-logout-btn" onClick={handleLogout}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="admin-dash-body">
        <div className="admin-dash-welcome">
          <h1>Welcome back</h1>
          <p>Select a section to manage content</p>
        </div>

        <div className="admin-dash-cards">
          <Link href="/portfolio/admin" className="admin-dash-card">
            <div className="admin-dash-card-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
            </div>
            <div>
              <div className="admin-dash-card-title">Portfolio</div>
              <div className="admin-dash-card-desc">
                Manage projects, upload images, set covers, and organise by category.
              </div>
            </div>
            <div className="admin-dash-card-arrow">
              Edit Portfolio
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <Link href="/blog/admin" className="admin-dash-card">
            <div className="admin-dash-card-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <div>
              <div className="admin-dash-card-title">From Us to You</div>
              <div className="admin-dash-card-desc">
                Write and edit blog articles across all categories: Inspirations, Tips, Guides and Insights.
              </div>
            </div>
            <div className="admin-dash-card-arrow">
              Edit Blog
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
