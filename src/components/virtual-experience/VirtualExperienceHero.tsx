'use client';

import { useEffect, useState, useRef } from 'react';

const VirtualExperienceHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRefs = [
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
  ];

  const videos = [
    '/images/video1.1.mp4',
    '/images/video1.2.mp4',
    '/images/video1.3.mp4',
  ];

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Set playback rate for all videos
    videoRefs.forEach((ref) => {
      if (ref.current) {
        ref.current.playbackRate = 0.5;
      }
    });

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Start playing the current video
    const currentRef = videoRefs[currentVideo];
    if (currentRef.current) {
      currentRef.current.currentTime = 0;
      currentRef.current.play();
    }
  }, [currentVideo]);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  return (
    <section id="virtual-experience-hero" className="virtual-hero-wrapper">
      {/* Video Background - 3 Videos cycling */}
      <div className="virtual-video-background">
        {videos.map((video, index) => (
          <video
            key={index}
            ref={videoRefs[index]}
            muted
            playsInline
            className={`virtual-hero-video ${currentVideo === index ? 'video-active' : 'video-hidden'}`}
            onEnded={handleVideoEnd}
            onLoadedMetadata={() => {
              if (videoRefs[index].current) {
                videoRefs[index].current.playbackRate = 0.5;
              }
            }}
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}
        <div className="virtual-video-overlay"></div>
      </div>

      {/* Animated Particles Background */}
      <div className="particles-background">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>

      {/* Text Content Overlay */}
      <div className="virtual-hero-section">
        <div className={`container virtual-hero-content ${isLoaded ? 'loaded' : ''}`}>
          <h1 className="virtual-hero-title">
            <span className="title-word title-word-1">Virtual</span>
            <span className="title-word title-word-2">Experience</span>
          </h1>
          <p className="virtual-hero-description">
            Experience design in immersive 3D reality
          </p>
        </div>
      </div>
    </section>
  );
};

export default VirtualExperienceHero;
