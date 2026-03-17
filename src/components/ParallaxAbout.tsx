'use client';

import { useEffect, useRef } from "react";

export default function ParallaxAbout() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imgRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      imgRef.current.style.transform = `translate(calc(-50% + ${x}px), -50%)`;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
          width: '115vw', height: '115vh',
          transform: 'translate(-50%, -50%)',
          backgroundImage: 'url(/images/Pre-Purchase%20page.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform',
        }}
      />
    </div>
  );
}
