'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';

export default function TempleEntrance() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const contentCardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !bgImageRef.current || !contentCardRef.current) return;

    // Pin the section and scale the background image on scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=100%',
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.fromTo(
      bgImageRef.current,
      { scale: 1.4, filter: 'brightness(0.3)' },
      { scale: 1.0, filter: 'brightness(0.65)', ease: 'none' }
    );

    tl.fromTo(
      contentCardRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, ease: 'power2.out' },
      '-=0.7' // Start slightly before the zoom completes
    );

  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full h-screen overflow-hidden bg-brand-charcoal text-white flex items-center justify-center z-20"
      id="entrance"
    >
      {/* Background Zooming Gate Image */}
      <div 
        ref={bgImageRef} 
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="/images/temple-entrance.jpg"
          alt="Temple-inspired entrance gateway at Codename Sanskruti, Bhubaneswar"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Decorative Traditional Border Overlays */}
      <div className="absolute top-10 left-10 right-10 bottom-10 border border-brand-orange/20 pointer-events-none z-10" />
      <div className="absolute top-12 left-12 right-12 bottom-12 border border-brand-orange/10 pointer-events-none z-10" />

      {/* Text Content Overlay Card */}
      <div 
        ref={contentCardRef}
        className="relative z-20 max-w-xl mx-auto px-6 text-center md:px-8 py-10 dark-glassmorphism rounded-sm shadow-2xl mx-4"
      >
        <span className="text-xs font-sans tracking-[0.3em] text-brand-orange uppercase font-bold mb-3 block">
          Chapter I — The Gateway
        </span>
        <h2 className="text-2xl md:text-4xl font-serif text-white uppercase tracking-wider mb-6 leading-tight">
          Temple-Inspired Entrance
        </h2>
        <div className="w-12 h-[2px] bg-brand-orange mx-auto mb-6" />
        <p className="font-sans text-xs md:text-sm text-gray-300 leading-relaxed font-light mb-4">
          Inspired by the timeless temple traditions of Odisha, every arrival feels like coming home to your roots.
        </p>
        <p className="font-sans text-xs md:text-sm text-brand-sandstone leading-relaxed font-light italic">
          Echoes of Puri, Bhubaneswar, and Konark welcoming you to modern sanctuary living.
        </p>
      </div>

      {/* Chapter Indicator */}
      <div className="absolute bottom-10 right-10 text-white font-serif text-sm tracking-widest z-20 hidden md:block">
        01 / 08
      </div>
    </section>
  );
}
