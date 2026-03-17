'use client';

import { useEffect, useState } from "react";

export default function ParallaxAbout() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrolled / maxScroll, 1);
      setScrollProgress(progress);
    };
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 200,
        y: (e.clientY / window.innerHeight - 0.5) * 200,
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const blur = scrollProgress * 12;
  const opacity = 1 - scrollProgress * 0.15;
  const brightness = 1 - scrollProgress * 0.15;
  const overlayOpacity = scrollProgress * 0.25;
  const scrollOffset = scrollProgress * -150;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0,
      width: '100vw', height: '100vh',
      zIndex: -1, overflow: 'hidden',
      backgroundColor: '#0a1628',
    }}>
      {/* Animated gold glow blobs */}
      <div style={{
        position: 'absolute', top: '5%', left: '5%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(184,134,11,0.15) 0%, transparent 70%)',
        transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px) scale(${1 + scrollProgress * 0.6})`,
        transition: 'transform 0.1s ease-out',
        pointerEvents: 'none', filter: 'blur(60px)',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '10%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(218,165,32,0.12) 0%, transparent 70%)',
        transform: `translate(${mousePosition.x * -1.8}px, ${mousePosition.y * -1.8}px) scale(${1 + scrollProgress * 0.4})`,
        transition: 'transform 0.1s ease-out',
        pointerEvents: 'none', filter: 'blur(70px)',
      }} />

      {/* Main parallax image */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        width: '200vw', height: '200vh',
        transform: `translate(-50%, -50%) translateY(${scrollOffset}px) translateX(${mousePosition.x * 1.5}px) translateY(${mousePosition.y * 1.5}px)`,
        backgroundImage: 'url(/images/Pre-Purchase%20Design%20Review%20page.webp)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        filter: `blur(${blur}px) brightness(${brightness})`,
        opacity,
        transition: 'filter 0.05s ease-out, opacity 0.05s ease-out',
        willChange: 'transform, filter, opacity',
      }} />

      {/* Dynamic gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(ellipse at ${50 + mousePosition.x * 0.7}% ${50 + mousePosition.y * 0.7}%, rgba(10,22,40,${overlayOpacity * 0.1}) 0%, rgba(10,22,40,${overlayOpacity * 0.3}) 100%)`,
        transition: 'background 0.1s ease-out', pointerEvents: 'none',
      }} />

      {/* Dark base overlay for readability */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(5,13,25,0.55)', pointerEvents: 'none',
      }} />

      {/* Vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.22) 100%)',
        pointerEvents: 'none',
        opacity: 0.2 + scrollProgress * 0.2,
      }} />

      {/* Gold accent lines */}
      <div style={{
        position: 'absolute', top: 0,
        left: `${15 + scrollProgress * 35}%`,
        width: '1px', height: '100%',
        background: 'linear-gradient(to bottom, transparent, rgba(184,134,11,0.4), transparent)',
        transition: 'left 0.3s ease-out', pointerEvents: 'none',
        opacity: (1 - scrollProgress) * 0.8,
      }} />
      <div style={{
        position: 'absolute', top: 0,
        right: `${10 + scrollProgress * 30}%`,
        width: '1px', height: '100%',
        background: 'linear-gradient(to bottom, transparent, rgba(184,134,11,0.3), transparent)',
        transition: 'right 0.3s ease-out', pointerEvents: 'none',
        opacity: (1 - scrollProgress) * 0.6,
      }} />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: `${10 + i * 12}%`, left: `${5 + i * 11}%`,
          width: `${3 + i}px`, height: `${3 + i}px`,
          borderRadius: '50%', background: 'rgba(184,134,11,0.4)',
          transform: `translate(${mousePosition.x * (0.6 + i * 0.12)}px, ${mousePosition.y * (0.6 + i * 0.12)}px)`,
          transition: 'transform 0.2s ease-out', pointerEvents: 'none',
          filter: 'blur(2px)', opacity: (1 - scrollProgress) * 0.6,
        }} />
      ))}
    </div>
  );
}
