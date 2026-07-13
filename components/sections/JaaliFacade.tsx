'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';

export default function JaaliFacade() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const patternRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !imageRef.current || !textRef.current || !patternRef.current) return;

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

    // Background image shifts up slowly on scroll
    tl.fromTo(
      imageRef.current,
      { yPercent: -15 },
      { yPercent: 15, ease: 'none' },
      0
    );

    // Foreground jaali vector pattern moves faster in opposite direction
    tl.fromTo(
      patternRef.current,
      { yPercent: 20 },
      { yPercent: -20, ease: 'none' },
      0
    );

    // Text card enters with subtle slide
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, ease: 'power2.out' },
      0.1
    );

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-screen overflow-hidden bg-brand-charcoal flex items-center justify-center z-10"
      id="facade"
    >
      {/* Background Image Layer (Parallaxing) */}
      <div 
        ref={imageRef} 
        className="absolute inset-0 w-full h-[130%]"
      >
        <Image
          src="/images/jaali-facade.jpg"
          alt="Jaali and craft inspired facade pattern design at Codename Sanskruti"
          fill
          className="object-cover opacity-60"
          sizes="100vw"
        />
      </div>

      {/* Decorative Jaali Grid Vector Overlay (Parallaxing) */}
      <div 
        ref={patternRef}
        className="absolute inset-0 w-full h-[130%] opacity-15 pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z M30 10 L50 30 L30 50 L10 30 Z' fill='%23E85C0D' fill-opacity='0.6' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Ambient Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-brand-charcoal z-10 pointer-events-none" />

      {/* Foreground Content Card */}
      <div 
        ref={textRef}
        className="relative z-20 max-w-xl mx-4 px-6 md:px-12 py-12 glassmorphism rounded-sm border border-brand-orange/10 text-center"
      >
        <span className="text-xs font-sans tracking-[0.3em] text-brand-orange uppercase font-bold mb-3 block">
          Chapter III — The Lattice
        </span>
        <h2 className="text-2xl md:text-4xl font-serif text-brand-charcoal uppercase tracking-wider mb-6 leading-tight">
          Jaali & Craft Facade
        </h2>
        <div className="w-12 h-[2px] bg-brand-orange mx-auto mb-6" />
        <p className="font-sans text-xs md:text-sm text-gray-700 leading-relaxed font-light mb-4">
          Every pattern tells a story inspired by Odisha's centuries-old craftsmanship.
        </p>
        <p className="font-sans text-xs md:text-sm text-brand-terracotta leading-relaxed font-normal">
          The facade features perforated stone screens that filter the harsh noon sun, casting intricate geometric shadows into your living space, keeping it naturally cool and private.
        </p>
      </div>

      {/* Chapter Indicator */}
      <div className="absolute bottom-10 right-10 text-white font-serif text-sm tracking-widest z-20 hidden md:block">
        03 / 08
      </div>
    </section>
  );
}
