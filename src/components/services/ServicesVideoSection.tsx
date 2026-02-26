"use client";

import { useEffect, useRef } from "react";

const ServicesVideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const startVideo = () => {
      video.playbackRate = 0.55;
      video.play().catch(() => {
        // autoplay blocked — try again on first user interaction
        const resume = () => {
          video.play().catch(() => {});
          window.removeEventListener("click", resume);
          window.removeEventListener("touchstart", resume);
        };
        window.addEventListener("click", resume, { once: true });
        window.addEventListener("touchstart", resume, { once: true });
      });
    };

    if (video.readyState >= 3) {
      startVideo();
    } else {
      video.addEventListener("canplay", startVideo, { once: true });
    }

    return () => video.removeEventListener("canplay", startVideo);
  }, []);

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

        {/* Headline — large, centered, minimal */}
        <h2 className="svs-heading">
          <span className="svs-heading-line">Where Vision</span>
          <span className="svs-heading-line svs-heading-accent">Becomes Reality</span>
        </h2>

        {/* Portrait video — the hero of the section */}
        <div className="svs-video-stage">

          {/* Glow ring behind the phone frame */}
          <div className="svs-glow-ring" />

          <div className="svs-phone-frame">
            {/* Video */}
            <video
              ref={videoRef}
              src="/videos/process.mp4"
              autoPlay
              loop
              muted
              playsInline
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

          {/* Floating side labels */}
          <div className="svs-side-label svs-side-left">
            <span className="svs-side-line" />
            <span className="svs-side-text">Live Process</span>
          </div>
          <div className="svs-side-label svs-side-right">
            <span className="svs-side-text">Real Projects</span>
            <span className="svs-side-line" />
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
