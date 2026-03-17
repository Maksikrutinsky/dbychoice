'use client';

import { useEffect, useRef } from "react";

export default function ParallaxAbout() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;
      imgRef.current.style.transform = `translate(-50%, calc(-50% + ${window.scrollY * 0.38}px))`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0,
      width: '100vw', height: '100vh',
      zIndex: -1, overflow: 'hidden',
    }}>
      <div
        ref={imgRef}
        style={{
          position: 'absolute',
          top: '50%', left: '50%',
          width: '115vw', height: '135vh',
          transform: 'translate(-50%, -50%)',
          backgroundImage: 'url(/images/service1.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform',
        }}
      />
    </div>
  );
}
