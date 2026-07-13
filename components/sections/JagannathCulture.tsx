'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function JagannathCulture() {
  return (
    <section 
      className="relative w-full min-h-screen bg-brand-cream py-24 flex items-center justify-center overflow-hidden border-b border-brand-terracotta/5"
      id="culture"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        {/* Left Side: Symmetric Wheel Graphic / Motif (Slides in from Left) */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-square max-w-md mx-auto rounded-sm overflow-hidden border border-brand-terracotta/10 shadow-lg bg-white p-4"
        >
          <div className="relative w-full h-full rounded-sm overflow-hidden">
            <Image
              src="/images/jagannath-culture.jpg"
              alt="Motif inspired by Jagannath culture at Codename Sanskruti"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Subtle shadow overlay to frame the brass lamps */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/30 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Right Side: Text & Concept (Slides in from Right) */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <span className="text-xs font-sans tracking-[0.3em] text-brand-orange uppercase font-bold">
            Chapter V — The Spirit
          </span>
          <h2 className="text-2xl md:text-4xl font-serif text-brand-charcoal uppercase tracking-wider leading-tight">
            Jagannath Culture
          </h2>
          <div className="w-16 h-[2px] bg-brand-orange" />
          <p className="font-sans text-xs md:text-sm text-gray-700 leading-relaxed font-light">
            Rooted in the values, traditions, and timeless spirit of Jagannath culture.
          </p>
          <p className="font-sans text-xs md:text-sm text-gray-500 leading-relaxed font-light">
            Codename Sanskruti is designed around the principles of hospitality (Atithi Devo Bhava), community inclusion, and symmetrical spiritual geometry. Each residential unit is aligned to receive natural ventilation, mimicking the coastal breeze systems of Puri.
          </p>
          
          {/* Subpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <div className="border-l border-brand-orange/40 pl-4">
              <span className="font-serif text-sm text-brand-charcoal block mb-1">Symmetrical Layouts</span>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Balanced layout configuration centered around sacred mandala geometries, creating mental clarity and spatial peace.
              </p>
            </div>
            <div className="border-l border-brand-orange/40 pl-4">
              <span className="font-serif text-sm text-brand-charcoal block mb-1">Puri Breeze Pathing</span>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Unique structural positioning designed to channel coastal currents throughout the residential spaces.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Chapter Indicator */}
      <div className="absolute bottom-10 right-10 text-brand-charcoal/40 font-serif text-sm tracking-widest z-10 hidden md:block">
        05 / 08
      </div>
    </section>
  );
}
