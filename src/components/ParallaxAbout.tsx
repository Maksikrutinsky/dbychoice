'use client';

import { useEffect, useState } from "react";

export default function ParallaxAbout() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(Math.min(scrolled / maxScroll, 1));
    };
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 120,
        y: (e.clientY / window.innerHeight - 0.5) * 120,
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const blur = scrollProgress * 8;
  const brightness = 1 - scrollProgress * 0.12;
  const opacity = 1 - scrollProgress * 0.12;
  const scrollOffset = scrollProgress * -120;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0,
      width: '100vw', height: '100vh',
      zIndex: -1, overflow: 'hidden',
      backgroundColor: '#0a1628',
    }}>
      {/* Main parallax image */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        width: '200vw', height: '200vh',
        transform: `translate(-50%, -50%) translateY(${scrollOffset}px) translateX(${mousePosition.x}px)`,
        backgroundImage: 'url(/images/Pre-Purchase%20Design%20Review%20page.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: `blur(${blur}px) brightness(${brightness})`,
        opacity,
        transition: 'filter 0.05s ease-out, opacity 0.05s ease-out',
        willChange: 'transform, filter, opacity',
      }} />

      {/* Dark overlay for readability */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(5, 13, 25, 0.62)',
        pointerEvents: 'none',
      }} />

      {/* Ambient gold glow */}
      <div style={{
        position: 'absolute',
        top: '10%', left: '5%',
        width: '500px', height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(184,134,11,0.12) 0%, transparent 70%)',
        transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px)`,
        transition: 'transform 0.15s ease-out',
        pointerEvents: 'none',
        filter: 'blur(60px)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '15%', right: '5%',
        width: '400px', height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(218,165,32,0.09) 0%, transparent 70%)',
        transform: `translate(${mousePosition.x * -1.2}px, ${mousePosition.y * -1.2}px)`,
        transition: 'transform 0.15s ease-out',
        pointerEvents: 'none',
        filter: 'blur(50px)',
      }} />
    </div>
  );
}
