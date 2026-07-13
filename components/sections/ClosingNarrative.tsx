'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';

export default function ClosingNarrative() {
  const containerRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const colorOverlayRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !quoteRef.current || !ctaRef.current || !colorOverlayRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=150%',
        pin: true,
        scrub: true,
        anticipatePin: 1,
      },
    });

    // 1. Show the quote, hold it, and fade it out
    tl.fromTo(quoteRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.5 });
    tl.to(quoteRef.current, { opacity: 0, scale: 1.05, duration: 0.5, delay: 0.4 });

    // 2. Animate the color transition: shift from dark charcoal to rich brand-terracotta
    tl.fromTo(
      colorOverlayRef.current,
      { backgroundColor: '#121212' },
      { backgroundColor: '#8B3A1A', duration: 0.6 },
      '-=0.2'
    );

    // 3. Stagger reveal the final CTA tagline and button
    tl.fromTo(
      ctaRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5 }
    );

  }, { scope: containerRef });

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-screen overflow-hidden text-white flex items-center justify-center"
      id="narrative"
    >
      {/* Background Color Morph Overlay */}
      <div 
        ref={colorOverlayRef}
        className="absolute inset-0 w-full h-full -z-10 bg-brand-charcoal" 
      />

      {/* Traditional Frame borders */}
      <div className="absolute top-10 left-10 right-10 bottom-10 border border-white/5 pointer-events-none z-10" />

      {/* STATE 1: Pinned Quote */}
      <div 
        ref={quoteRef}
        className="absolute inset-0 flex items-center justify-center px-6 text-center z-20 max-w-3xl mx-auto opacity-0"
      >
        <div className="flex flex-col items-center">
          <span className="text-brand-orange text-5xl font-serif mb-6 leading-none select-none">“</span>
          <p className="font-serif text-xl md:text-3xl tracking-wide leading-relaxed mb-6">
            Codename Sanskruti is not merely inspired by Odisha — it is a contemporary expression of Odisha's soul.
          </p>
          <div className="w-12 h-[1px] bg-brand-orange" />
        </div>
      </div>

      {/* STATE 2: Brand Tagline and CTA Button */}
      <div 
        ref={ctaRef}
        className="absolute inset-0 flex items-center justify-center px-6 text-center z-20 max-w-xl mx-auto opacity-0"
      >
        <div className="flex flex-col items-center gap-8">
          <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-wider leading-tight text-white">
            Where the Soul Meets Modernity
          </h2>
          <p className="font-sans text-xs md:text-sm text-brand-sandstone-light leading-relaxed font-light">
            Step into a sanctuary where every stone tells a story, and every modern comfort is built on cultural foundations. Discover Codename Sanskruti.
          </p>
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="inline-block bg-brand-orange hover:bg-white hover:text-brand-terracotta text-white text-xs font-bold tracking-widest uppercase px-10 py-4 rounded-sm transition-all duration-300 shadow-lg shadow-black/20"
          >
            Begin Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}
