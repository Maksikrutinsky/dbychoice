'use client';

import { useState } from 'react';
import Image from 'next/image';

type LightType = 'ambient' | 'task' | 'decorative';

const LightingShowcase = () => {
  const [activeLight, setActiveLight] = useState<LightType>('ambient');

  return (
    <section id="lighting" className="lighting-showcase">
      <div className="lighting-background">
        <Image
          src="/images/v1.png"
          alt="Ambient Light"
          fill
          className={`lighting-image ${activeLight === 'ambient' ? 'active' : ''}`}
          data-light="ambient"
          priority
        />
        <Image
          src="/images/v2.png"
          alt="Task Light"
          fill
          className={`lighting-image ${activeLight === 'task' ? 'active' : ''}`}
          data-light="task"
        />
        <Image
          src="/images/v3.png"
          alt="Decorative Light"
          fill
          className={`lighting-image ${activeLight === 'decorative' ? 'active' : ''}`}
          data-light="decorative"
        />
        <div className="lighting-overlay"></div>
      </div>

      <div className="lighting-controls">
        <h2 className="lighting-title">Experience Different Lighting Atmospheres</h2>
        <p className="lighting-subtitle">Choose your perfect ambiance</p>

        <div className="lighting-options">
          <button
            className={`light-option ${activeLight === 'ambient' ? 'active' : ''}`}
            onClick={() => setActiveLight('ambient')}
            data-light="ambient"
            aria-label="Ambient light"
          >
            <div className="option-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            </div>
            <span className="option-label">Ambient Light</span>
          </button>

          <button
            className={`light-option ${activeLight === 'task' ? 'active' : ''}`}
            onClick={() => setActiveLight('task')}
            data-light="task"
            aria-label="Task light"
          >
            <div className="option-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 2h6l3 7H6l3-7z"/>
                <path d="M12 9v13"/>
                <path d="M5 22h14"/>
              </svg>
            </div>
            <span className="option-label">Task Light</span>
          </button>

          <button
            className={`light-option ${activeLight === 'decorative' ? 'active' : ''}`}
            onClick={() => setActiveLight('decorative')}
            data-light="decorative"
            aria-label="Decorative light"
          >
            <div className="option-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v2"/>
                <path d="m4.93 4.93 1.41 1.41"/>
                <path d="M20 12h2"/>
                <path d="m19.07 4.93-1.41 1.41"/>
                <path d="M15.947 12.65a4 4 0 0 0-5.925-3.18 4 4 0 0 0-3.183 5.925"/>
                <circle cx="12" cy="17" r="3"/>
                <path d="m8.5 14.5 7 7"/>
                <path d="m15.5 14.5-7 7"/>
              </svg>
            </div>
            <span className="option-label">Decorative Light</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LightingShowcase;

