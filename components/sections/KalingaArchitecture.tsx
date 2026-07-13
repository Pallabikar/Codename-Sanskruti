'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';

export default function KalingaArchitecture() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollSectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const scrollSection = scrollSectionRef.current;
    const container = containerRef.current;
    if (!container || !scrollSection) return;
    
    const mm = gsap.matchMedia();

    // Desktop/Tablet: Horizontal scroll pin animation
    mm.add("(min-width: 768px)", () => {
      gsap.to(scrollSection, {
        x: () => -(scrollSection.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${scrollSection.scrollWidth - window.innerWidth}`,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="overflow-hidden bg-brand-charcoal text-white relative">
      <div 
        ref={scrollSectionRef} 
        className="flex flex-col md:flex-row md:h-screen w-full md:w-[300vw]"
      >
        {/* PANEL 1: Title & Description */}
        <div className="w-full md:w-screen min-h-[50vh] md:h-screen shrink-0 flex items-center justify-center px-6 py-16 md:px-24 bg-gradient-to-br from-[#121212] to-[#24130A] relative">
          <div className="max-w-2xl flex flex-col gap-6">
            <span className="text-xs font-sans tracking-[0.3em] text-brand-orange uppercase font-bold">
              Chapter II — The Language
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white uppercase tracking-wider leading-tight">
              Kalinga Architecture
            </h2>
            <div className="w-16 h-[2px] bg-brand-orange" />
            <p className="font-sans text-xs md:text-sm text-gray-300 leading-relaxed font-light">
              Designed with echoes of Odisha's legendary Kalinga architecture, reimagined for modern living.
            </p>
            <p className="font-sans text-xs md:text-sm text-gray-400 leading-relaxed font-light">
              Centuries of spiritual design are woven into the vertical layout, using authentic sandstone cladding and monumental proportions.
            </p>
          </div>
          
          <div className="absolute right-10 bottom-10 text-brand-orange/20 font-serif text-8xl pointer-events-none select-none hidden md:block">
            SANSKRUTI
          </div>
        </div>

        {/* PANEL 2: Main Image Panel */}
        <div className="w-full md:w-screen h-[50vh] md:h-screen shrink-0 relative flex items-center justify-center p-6 md:p-16 bg-[#160B05]">
          <div className="relative w-full h-full max-w-5xl rounded-sm overflow-hidden border border-brand-orange/20">
            <Image
              src="/images/kalinga-architecture.jpg"
              alt="Kalinga architectural details and sandstone reliefs at Codename Sanskruti"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/60 via-transparent to-brand-charcoal/60" />
            <div className="absolute bottom-10 left-10 max-w-sm">
              <span className="bg-brand-orange text-white text-[9px] font-bold tracking-widest px-3 py-1 uppercase rounded-sm mb-2 inline-block">
                Material Authenticity
              </span>
              <p className="text-white font-serif text-sm md:text-base leading-relaxed text-glow">
                Warm sandstone textures handpicked to age gracefully under the Odishan sun.
              </p>
            </div>
          </div>
        </div>

        {/* PANEL 3: Highlights & Details */}
        <div className="w-full md:w-screen min-h-[50vh] md:h-screen shrink-0 flex items-center justify-center px-6 py-16 md:px-24 bg-gradient-to-tr from-[#0F0804] to-[#1C1C1C]">
          <div className="max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex flex-col gap-4">
              <span className="text-brand-orange font-serif text-lg">01 / Sandstone Tones</span>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                Utilizing local, durable red and yellow sandstone panels on major structural facades to evoke the feeling of historic regional temples.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-brand-orange font-serif text-lg">02 / Carved Patterns</span>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                Vertical relief ribs and geometric recesses along the towers cast changing linear shadow profiles throughout the day.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-brand-orange font-serif text-lg">03 / Geometric Relief</span>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                Balanced symmetrical grids inspired by sacred mandalas shape the structure, providing visual stability and aesthetic harmony.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-brand-orange font-serif text-lg">04 / Modern Proportion</span>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                Combining high structural standards with traditional layout philosophy, achieving expansive 3-side open residences.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Chapter Indicator */}
      <div className="absolute bottom-10 right-10 text-white font-serif text-sm tracking-widest z-20 hidden md:block">
        02 / 08
      </div>
    </div>
  );
}
