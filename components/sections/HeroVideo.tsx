'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroCanvasFallback from '../ui/HeroCanvasFallback';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';

export default function HeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Start at 3.24s to skip the black slide-up intro
    const handleLoadedMetadata = () => {
      if (video.currentTime < 3.24) {
        video.currentTime = 3.24;
      }
    };

    // If the video loops, return to 3.24s instead of 0s
    const handleTimeUpdate = () => {
      if (video.currentTime < 3.24) {
        video.currentTime = 3.24;
      }
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);

    // If video is already loaded
    if (video.readyState >= 1) {
      handleLoadedMetadata();
    }

    // Defer loading and playing video until after initial page load
    const playVideo = () => {
      video.preload = "auto";
      video.play().catch((err) => {
        console.log("Autoplay was prevented:", err);
      });
    };

    if (document.readyState === 'complete') {
      playVideo();
    } else {
      window.addEventListener('load', playVideo);
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      window.removeEventListener('load', playVideo);
    };
  }, []);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=100%',
        pin: true,
        pinSpacing: false,
        scrub: true,
        anticipatePin: 1,
      },
    });

    // Fade out text elements and slide them up slightly on scroll
    tl.to('.hero-content', {
      opacity: 0,
      y: -80,
      ease: 'none',
    }, 0);

    // Fade out scroll indicator quickly
    tl.to('.hero-indicator', {
      opacity: 0,
      y: -30,
      ease: 'none',
    }, 0);

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-brand-charcoal text-white z-10"
    >
      <link rel="preload" as="image" href="/images/hero-poster.webp" fetchPriority="high" />

      {/* Background Autoplay Video */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover -z-20 opacity-80"
        poster="/images/hero-poster.webp"
      >
        <source src="/videos/hero.mp4#t=3.24" type="video/mp4" />
      </video>

      {/* Cinematic Golden Particles Canvas */}
      <HeroCanvasFallback />

      {/* Radial Gradient overlay to ensure text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/50 via-transparent to-brand-charcoal/80 z-0 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center select-none hero-content">
        
        {/* Subtitle */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xs md:text-sm font-sans tracking-[0.4em] text-brand-orange uppercase font-bold mb-4"
        >
          Motwani Constructions Presents
        </motion.span>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="font-serif text-5xl md:text-8xl tracking-[0.1em] text-glow uppercase leading-none mb-6"
        >
          Codename <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-sandstone font-bold">
            Sanskruti
          </span>
        </motion.h1>

        {/* Short description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="max-w-xl text-sm md:text-base text-gray-300 font-light leading-relaxed mb-10 tracking-wider"
        >
          A cinematic residential landmark in Bhubaneswar. A contemporary expression of Odisha's temple architecture, craftsmanship, and soul.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <Link
            href="#contact"
            className="w-48 bg-brand-orange hover:bg-brand-orange-light text-white text-xs font-bold tracking-widest uppercase py-4 rounded-sm transition-all duration-300 shadow-lg shadow-brand-orange/25"
          >
            Explore Residences
          </Link>
          <Link
            href="/ongoing-projects/codename-sanskruti"
            className="w-48 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold tracking-widest uppercase py-4 rounded-sm transition-all duration-300 backdrop-blur-sm"
          >
            Specifications
          </Link>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 z-10 select-none hero-indicator">
        <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-brand-orange">
          Scroll to Discover
        </span>
        <div className="w-6 h-10 border-2 border-brand-orange/40 rounded-full flex justify-center p-1.5">
          <div className="w-1 h-2 bg-brand-orange rounded-full animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
