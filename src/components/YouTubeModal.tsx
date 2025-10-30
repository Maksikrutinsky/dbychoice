'use client';

import { useState, useEffect } from 'react';

const YouTubeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const youtubeVideoId = 'vpVki4Rs6w0';

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    };

    const handleClose = () => {
      setIsOpen(false);
      document.body.style.overflow = '';
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    window.addEventListener('openYoutubeModal', handleOpen);
    document.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('openYoutubeModal', handleOpen);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  if (!isOpen) return null;

  return (
    <div className={`youtube-modal ${isOpen ? 'active' : ''}`}>
      <div className="modal-overlay" onClick={handleClose}></div>
      <div className="modal-content">
        <button
          className="modal-close"
          onClick={handleClose}
          aria-label="Close video"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div className="video-wrapper">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Design By Choice Introduction"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YouTubeModal;

