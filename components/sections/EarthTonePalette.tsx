'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SWATCHES = [
  {
    name: 'Laterite & Clay Terracotta',
    hex: '#8B3A1A',
    description: 'Natural clay screen modules representing the traditional earthen pots (Kudua) of Jagannath temple, providing thermal cooling.',
    image: '/images/jaali-facade.jpg',
  },
  {
    name: 'Kalinga Sandstone',
    hex: '#D2B48C',
    description: 'Genuine hand-chipped red and yellow sandstone cladding reflecting the natural tones of Bhubaneswar’s historic monuments.',
    image: '/images/kalinga-architecture.jpg',
  },
  {
    name: 'Odishan Brick Red',
    hex: '#B22222',
    description: 'Deep brick accents framing windows and highlights, grounding the modern residential towers in warm earthy colors.',
    image: '/images/og-preview.jpg',
  },
  {
    name: 'Sacred Cream Plaster',
    hex: '#FAF9F6',
    description: 'Soft warm cream wall rendering inspired by the mineral paste applied to regional shrines, reflecting light softly.',
    image: '/images/courtyard-living.jpg',
  },
];

export default function EarthTonePalette() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section 
      className="relative w-full py-24 bg-brand-charcoal text-white overflow-hidden"
      id="palette"
    >
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        {/* Section Header */}
        <div className="max-w-xl mb-16 text-center md:text-left">
          <span className="text-xs font-sans tracking-[0.3em] text-brand-orange uppercase font-bold mb-3 block">
            Chapter VII — The Colors
          </span>
          <h2 className="text-2xl md:text-4xl font-serif text-white uppercase tracking-wider mb-4">
            Earth-Toned Material Palette
          </h2>
          <div className="w-12 h-[2px] bg-brand-orange mx-auto md:mx-0 mb-4" />
          <p className="font-sans text-xs md:text-sm text-gray-400 leading-relaxed font-light">
            Inspired by the colors of Odisha's earth, temples, and craftsmanship. Move your cursor over the swatches to see the materials.
          </p>
        </div>

        {/* Dynamic Expanding Swatches Grid */}
        <div className="flex flex-col lg:flex-row gap-4 h-[600px] lg:h-[400px]">
          {SWATCHES.map((swatch, idx) => {
            const isHovered = hoveredIdx === idx;
            const isAnyHovered = hoveredIdx !== null;
            
            // Width allocation: expand the hovered one, contract others
            let flexWidth = '1';
            if (isHovered) flexWidth = '2.2';
            else if (isAnyHovered) flexWidth = '0.7';

            return (
              <motion.div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{ flex: flexWidth }}
                className="relative rounded-sm overflow-hidden border border-white/5 cursor-pointer flex flex-col justify-end p-6 md:p-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] bg-brand-charcoal-light h-full"
              >
                {/* Background Swatch Color Fill (defaults when not hovered) */}
                <div 
                  className="absolute inset-0 transition-opacity duration-700 z-0"
                  style={{ 
                    backgroundColor: swatch.hex,
                    opacity: isHovered ? 0.05 : 0.85 
                  }}
                />

                {/* Background Material Image (Fades and scales in on hover) */}
                <div 
                  className="absolute inset-0 w-full h-full z-0 transition-opacity duration-700 pointer-events-none"
                  style={{ opacity: isHovered ? 0.35 : 0 }}
                >
                  <Image
                    src={swatch.image}
                    alt={swatch.name}
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>

                {/* Content Panel */}
                <div className="relative z-10 flex flex-col items-start w-full">
                  {/* Hex Tag */}
                  <span 
                    className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-sm mb-3 select-all"
                    style={{ 
                      backgroundColor: swatch.hex === '#FAF9F6' ? '#E85C0D' : '#ffffff',
                      color: swatch.hex === '#FAF9F6' ? '#ffffff' : '#121212'
                    }}
                  >
                    {swatch.hex}
                  </span>

                  <h3 className={`font-serif tracking-wider uppercase transition-all duration-500 ${
                    swatch.hex === '#FAF9F6' && !isHovered ? 'text-brand-charcoal' : 'text-white'
                  } ${isHovered ? 'text-lg md:text-2xl mb-2' : 'text-sm'}`}>
                    {swatch.name}
                  </h3>

                  {/* Expandable description block */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: isHovered ? 'auto' : 0, 
                      opacity: isHovered ? 1 : 0 
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <p className="text-xs text-gray-300 leading-relaxed font-light mt-2 max-w-md">
                      {swatch.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Chapter Indicator */}
      <div className="absolute bottom-10 right-10 text-white/40 font-serif text-sm tracking-widest z-10 hidden md:block">
        07 / 08
      </div>
    </section>
  );
}
