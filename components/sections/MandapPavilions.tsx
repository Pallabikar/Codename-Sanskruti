'use client';

import React from 'react';
import Image from 'next/image';

const MARQUEE_IMAGES = [
  { src: '/images/mandap-pavilions.jpg', label: 'Mandap Pavilion Gazebos' },
  { src: '/images/temple-entrance.jpg', label: 'Temple-Inspired Main Gate' },
  { src: '/images/kalinga-architecture.jpg', label: 'Kalinga Stone Carvings' },
  { src: '/images/courtyard-living.jpg', label: 'Angana Central Courtyard' },
  { src: '/images/jaali-facade.jpg', label: 'Lattice Facade Patterns' },
  { src: '/images/og-preview.jpg', label: 'Residences Tower Silhouette' },
];

export default function MandapPavilions() {
  // Duplicate array to enable seamless infinite scroll loop
  const doubleImages = [...MARQUEE_IMAGES, ...MARQUEE_IMAGES];

  return (
    <section 
      className="relative w-full py-24 bg-brand-cream overflow-hidden border-b border-brand-terracotta/5"
      id="pavilions"
    >
      <div className="max-w-7xl mx-auto px-6 w-full mb-12">
        {/* Section Header */}
        <div className="max-w-xl">
          <span className="text-xs font-sans tracking-[0.3em] text-brand-orange uppercase font-bold mb-3 block">
            Chapter VIII — The Pavilions
          </span>
          <h2 className="text-2xl md:text-4xl font-serif text-brand-charcoal uppercase tracking-wider mb-4">
            Traditional Mandap Pavilions
          </h2>
          <div className="w-12 h-[2px] bg-brand-orange mb-4" />
          <p className="font-sans text-xs md:text-sm text-gray-500 leading-relaxed font-light">
            Celebrating the spirit of togetherness that defines Odisha's cultural life, with outdoor gazebos and pavilions modeled after historical stone mandaps.
          </p>
        </div>
      </div>

      {/* Infinite Marquee Strip */}
      <div className="relative w-full flex overflow-x-hidden py-4 select-none">
        {/* Left and Right Fade overlays for premium frame blending */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-cream to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-cream to-transparent z-10 pointer-events-none" />

        {/* Inner Marquee track */}
        <div className="flex gap-6 animate-marquee whitespace-nowrap min-w-full">
          {doubleImages.map((img, idx) => (
            <div 
              key={idx} 
              className="relative w-[300px] h-[200px] md:w-[400px] md:h-[260px] shrink-0 rounded-sm overflow-hidden border border-brand-terracotta/5 shadow-md group"
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 300px, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent opacity-85" />
              <div className="absolute bottom-4 left-4">
                <span className="text-white font-serif text-xs md:text-sm tracking-wider uppercase">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chapter Indicator */}
      <div className="absolute bottom-10 right-10 text-brand-charcoal/40 font-serif text-sm tracking-widest z-10 hidden md:block">
        08 / 08
      </div>
    </section>
  );
}
