'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';

export default function PattachitraReception() {
  const containerRef = useRef<HTMLDivElement>(null);
  const zoomWrapperRef = useRef<HTMLDivElement>(null);
  const textGroupRef = useRef<HTMLDivElement>(null);
  const imageOverlayRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !zoomWrapperRef.current || !textGroupRef.current || !imageOverlayRef.current) return;

    // Pin viewport and trigger zooming and sliding overlays
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

    // 1. Zoom into the Pattachitra Reception wall
    tl.fromTo(
      zoomWrapperRef.current,
      { scale: 1.0 },
      { scale: 1.45, ease: 'power1.inOut' }
    );

    // 2. Dim the overlay slightly more to highlight the text reveal
    tl.fromTo(
      imageOverlayRef.current,
      { opacity: 0.4 },
      { opacity: 0.65, ease: 'none' },
      0 // Sync with zoom
    );

    // 3. Stagger reveal text cards
    tl.fromTo(
      textGroupRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 0.5 },
      0.3 // Trigger in the middle of zoom
    );

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-screen overflow-hidden bg-brand-charcoal z-20"
      id="reception"
    >
      {/* Zoomable Image Wrapper */}
      <div 
        ref={zoomWrapperRef}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="/images/pattachitra-reception.jpg"
          alt="Pattachitra artwork at the luxury reception lobby of Codename Sanskruti"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        
        {/* Dynamic Overlay Dimmer */}
        <div 
          ref={imageOverlayRef}
          className="absolute inset-0 bg-brand-charcoal opacity-40 z-10 transition-opacity" 
        />
      </div>

      {/* Decorative Traditional Border Overlays */}
      <div className="absolute top-10 left-10 right-10 bottom-10 border border-brand-orange/10 pointer-events-none z-20" />

      {/* Centered Scroll Story Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-25 px-6">
        <div 
          ref={textGroupRef}
          className="max-w-2xl text-center flex flex-col items-center opacity-0 transform translate-y-20"
        >
          <span className="text-xs font-sans tracking-[0.4em] text-brand-orange uppercase font-bold mb-4">
            Chapter IV — The Masterpiece
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white uppercase tracking-wider leading-tight mb-6">
            Pattachitra Reception
          </h2>
          <div className="w-16 h-[2px] bg-brand-orange mb-6" />
          <p className="font-sans text-sm md:text-base text-gray-200 leading-relaxed font-light mb-6">
            Welcomed by the vibrant storytelling traditions of Pattachitra, where art becomes part of everyday living.
          </p>
          <p className="font-sans text-xs md:text-sm text-brand-sandstone leading-relaxed font-light max-w-lg">
            Our double-height lobby features a signature hand-painted wall custom-commissioned from local master artists of Raghurajpur, depicting sacred legends in rich natural mineral pigments.
          </p>
        </div>
      </div>

      {/* Chapter Indicator */}
      <div className="absolute bottom-10 right-10 text-white font-serif text-sm tracking-widest z-25 hidden md:block">
        04 / 08
      </div>
    </section>
  );
}
