'use client';

import { useEffect, useRef } from "react";

export default function ParallaxAbout() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;
      const offset = window.scrollY * 0.35;
      imgRef.current.style.transform = `translate(-50%, calc(-50% + ${offset}px))`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0,
      width: '100vw', height: '100vh',
      zIndex: -1, overflow: 'hidden',
      backgroundColor: '#06101e',
    }}>
      {/* Parallax image */}
      <div
        ref={imgRef}
        style={{
          position: 'absolute',
          top: '50%', left: '50%',
          width: '110vw', height: '130vh',
          transform: 'translate(-50%, -50%)',
          backgroundImage: 'url(/images/FullDesign1.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform',
        }}
      />
      {/* Heavy dark overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(4, 10, 22, 0.78)',
      }} />
      {/* Subtle vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.55) 100%)',
        pointerEvents: 'none',
      }} />
    </div>
  );
}
