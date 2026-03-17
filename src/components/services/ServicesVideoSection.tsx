"use client";

import { useEffect, useRef, useState } from "react";

const VIDEOS = [
  "/videos/video1.1.mp4",
  "/videos/video1.2.mp4",
  "/videos/video1.3.mp4",
];

const ServicesVideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reload + play whenever the active video changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.load();

    const onCanPlay = () => {
      video.playbackRate = 0.4;
      video.play().catch(() => {
        const resume = () => {
          video.playbackRate = 0.4;
          video.play().catch(() => {});
        };
        window.addEventListener("click", resume, { once: true });
        window.addEventListener("touchstart", resume, { once: true });
      });
    };

    video.addEventListener("canplay", onCanPlay, { once: true });
    return () => video.removeEventListener("canplay", onCanPlay);
  }, [currentIndex]);

  // Intersection observer for entrance animation
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) section.classList.add("svs-visible");
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleEnded = () => {
    setCurrentIndex((i) => (i + 1) % VIDEOS.length);
  };

  return (
    <section ref={sectionRef} className="svs-section">

      {/* Background ambient layers */}
      <div className="svs-bg-layer" />
      <div className="svs-noise" />

      {/* Floating geometric accents */}
      <div className="svs-shapes" aria-hidden="true">
        <span className="svs-shape svs-shape-1" />
        <span className="svs-shape svs-shape-2" />
        <span className="svs-shape svs-shape-3" />
      </div>

      {/* Horizontal gold line top */}
      <div className="svs-rule svs-rule-top" />

      <div className="svs-inner">

        {/* Label */}
        <span className="svs-eyebrow">Design By Choice · Technology &amp; Process</span>

        {/* Headline */}
        <h2 className="svs-heading">
          <span className="svs-heading-line">Where Vision</span>
          <span className="svs-heading-line svs-heading-accent">Becomes Reality</span>
        </h2>

        {/* Wide cinematic video */}
        <div className="svs-video-stage">
          <div className="svs-glow-ring" />

          <div className="svs-phone-frame">
            <video
              ref={videoRef}
              src={VIDEOS[currentIndex]}
              muted
              playsInline
              onEnded={handleEnded}
              className="svs-video"
            />

            {/* Cinematic letterbox overlay */}
            <div className="svs-letterbox" />

            {/* Subtle inner vignette */}
            <div className="svs-vignette" />

            {/* Corner accents */}
            <span className="svs-corner svs-tl" />
            <span className="svs-corner svs-tr" />
            <span className="svs-corner svs-bl" />
            <span className="svs-corner svs-br" />

          </div>

        </div>

        {/* Bottom tagline */}
        <p className="svs-tagline">
          From first sketch to final reveal — captured in motion.
        </p>
      </div>

      {/* Horizontal gold line bottom */}
      <div className="svs-rule svs-rule-bottom" />
    </section>
  );
};

export default ServicesVideoSection;
