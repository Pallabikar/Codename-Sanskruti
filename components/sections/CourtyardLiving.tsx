'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Coffee, Heart } from 'lucide-react';

const bentoContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const bentoItemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function CourtyardLiving() {
  return (
    <section 
      className="relative w-full py-24 bg-brand-cream border-b border-brand-terracotta/5"
      id="courtyard"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="max-w-xl mb-16">
          <span className="text-xs font-sans tracking-[0.3em] text-brand-orange uppercase font-bold mb-3 block">
            Chapter VI — The Courtyard
          </span>
          <h2 className="text-2xl md:text-4xl font-serif text-brand-charcoal uppercase tracking-wider mb-4">
            Courtyard-Based Community Living
          </h2>
          <div className="w-12 h-[2px] bg-brand-orange mb-4" />
          <p className="font-sans text-xs md:text-sm text-gray-500 leading-relaxed font-light">
            Spaces designed to bring families and communities together, just as Odisha's traditional neighborhoods always have.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div 
          variants={bentoContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10%' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Item 1: Large Image & Feature Card */}
          <motion.div 
            variants={bentoItemVariants}
            className="md:col-span-2 md:row-span-2 relative min-h-[350px] md:min-h-[450px] bg-brand-charcoal rounded-sm overflow-hidden border border-brand-terracotta/5 flex flex-col justify-end p-8 group"
          >
            <Image
              src="/images/courtyard-living.jpg"
              alt="Odia-inspired residential courtyard at Codename Sanskruti"
              fill
              className="object-cover opacity-75 group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/30 to-transparent pointer-events-none" />
            <div className="relative z-10 max-w-lg">
              <span className="text-brand-orange font-serif text-xs uppercase tracking-widest block mb-2">Central Feature</span>
              <h3 className="font-serif text-lg md:text-2xl text-white uppercase tracking-wider mb-3">
                The Heritage central courtyard
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed font-light">
                Modeled after the classic Odia "Angana", this open-to-sky courtyard sits at the geometric center of the enclave. It features carved sandstone columns, clean pathways, a sacred Tulsi plinth, and seating bays.
              </p>
            </div>
          </motion.div>

          {/* Item 2: Water Plinth card */}
          <motion.div 
            variants={bentoItemVariants}
            className="bg-white p-8 rounded-sm border border-brand-terracotta/5 flex flex-col justify-between"
          >
            <div>
              <Sparkles className="w-6 h-6 text-brand-orange mb-4" />
              <h4 className="font-serif text-base text-brand-charcoal mb-2 uppercase tracking-wide">
                Reflective Water bodies
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                Quiet stone ponds flanking the walkways, reflecting the sky and cooling the courtyard micro-climate naturally.
              </p>
            </div>
            <span className="text-[10px] text-gray-400 font-sans tracking-widest mt-6 uppercase">Aesthetic Harmony</span>
          </motion.div>

          {/* Item 3: Social Mandap card */}
          <motion.div 
            variants={bentoItemVariants}
            className="bg-white p-8 rounded-sm border border-brand-terracotta/5 flex flex-col justify-between"
          >
            <div>
              <Coffee className="w-6 h-6 text-brand-orange mb-4" />
              <h4 className="font-serif text-base text-brand-charcoal mb-2 uppercase tracking-wide">
                Gathering Mandap
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                An open pavilion for evening storytelling, social celebrations, and classical music events under the stars.
              </p>
            </div>
            <span className="text-[10px] text-gray-400 font-sans tracking-widest mt-6 uppercase">Cultural Bond</span>
          </motion.div>

          {/* Item 4: Yoga Plinth card */}
          <motion.div 
            variants={bentoItemVariants}
            className="bg-white p-8 rounded-sm border border-brand-terracotta/5 flex flex-col justify-between"
          >
            <div>
              <Heart className="w-6 h-6 text-brand-orange mb-4" />
              <h4 className="font-serif text-base text-brand-charcoal mb-2 uppercase tracking-wide">
                Meditation Deck
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                Elevated stone plinth situated under shade trees, designed specifically for early morning yoga and meditation.
              </p>
            </div>
            <span className="text-[10px] text-gray-400 font-sans tracking-widest mt-6 uppercase">Inner Peace</span>
          </motion.div>

          {/* Item 5: Security / Safe Zone card */}
          <motion.div 
            variants={bentoItemVariants}
            className="bg-white p-8 rounded-sm border border-brand-terracotta/5 flex flex-col justify-between"
          >
            <div>
              <Shield className="w-6 h-6 text-brand-orange mb-4" />
              <h4 className="font-serif text-base text-brand-charcoal mb-2 uppercase tracking-wide">
                Traffic-Free Angana
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                Complete vehicular parking moved underground, keeping the entire courtyard deck completely safe for children and senior citizens.
              </p>
            </div>
            <span className="text-[10px] text-gray-400 font-sans tracking-widest mt-6 uppercase">Safe Sanctuary</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Chapter Indicator */}
      <div className="absolute bottom-10 right-10 text-brand-charcoal/40 font-serif text-sm tracking-widest z-10 hidden md:block">
        06 / 08
      </div>
    </section>
  );
}
