import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { constructMetadata } from '@/lib/metadata';
import { ArrowLeft, Home, Compass, ShieldCheck, MapPin } from 'lucide-react';

import ApartmentConfigurations from '@/components/sections/ApartmentConfigurations';

export const metadata: Metadata = constructMetadata({
  title: 'Apartments for Sale in Bhubaneswar | Sanskruti 2, 3 & 4 BHK Homes',
  description: "Looking for apartments for sale in Bhubaneswar? Discover Sanskruti's premium 2, 3 & 4 BHK homes with world-class amenities, excellent connectivity, and attractive launch pricing.",
  path: '/ongoing-projects/codename-sanskruti',
});

const CONFIGURATIONS = [
  { type: '2 BHK Heritage Elite', area: '1,424 Sq.Ft.', facing: 'North - South', balcony: '2 Balconies' },
  { type: '3 BHK Heritage Grand', area: '1,883 Sq.Ft.', facing: 'North - South', balcony: '2 Balconies' },
  { type: '4 BHK Sanskruti Royal', area: '2,823 Sq.Ft.', facing: 'North - South', balcony: '4 Balconies' },
];

export default function CodenameSanskrutiProject() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-6 max-w-5xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-orange hover:text-brand-terracotta transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-2 leading-tight">
              Codename Sanskruti
            </h1>
            <p className="text-sm text-brand-terracotta font-medium flex items-start gap-2">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              <span>
                Siula, near Uttara square.<br />
                Beside NH 316
              </span>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 self-start lg:self-auto">
            <span className="bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold px-4 py-2 uppercase tracking-widest rounded-sm">
              Ongoing Project
            </span>
            <span className="bg-emerald-600/10 border border-emerald-600/25 text-emerald-800 text-xs font-bold px-4 py-2 tracking-wider rounded-sm flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>RERA Approved: RP/26/2026/01587</span>
            </span>
            <span className="bg-amber-700/10 border border-amber-700/20 text-amber-900 text-xs font-bold px-4 py-2 uppercase tracking-wider rounded-sm">
              Architecture: Aakar Architect
            </span>
          </div>
        </div>
        
        <div className="w-20 h-[3px] bg-brand-orange mb-10" />

        {/* Project Image Panel */}
        <div className="relative w-full h-[350px] overflow-hidden rounded-sm mb-16 border border-brand-terracotta/5">
          <Image 
            src="/images/og-preview.jpg" 
            alt="Codename Sanskruti Building Exterior Preview" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent flex items-end p-8">
            <p className="text-white text-base font-serif max-w-xl">
              "An address that celebrates the timeless spirit of Odisha, blending ancient stone carving aesthetics with the luxury of modern specifications."
            </p>
          </div>
        </div>

        {/* Configurations */}
        <h2 className="text-2xl font-serif text-brand-charcoal mb-6 border-b border-brand-terracotta/10 pb-2">
          Apartment Configurations
        </h2>
        <ApartmentConfigurations configurations={CONFIGURATIONS} />

        {/* Tech Specs */}
        <h2 className="text-2xl font-serif text-brand-charcoal mb-6 border-b border-brand-terracotta/10 pb-2">
          Premium Specifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-gray-600 leading-relaxed mb-16">
          <div className="bg-white p-6 border border-brand-terracotta/10 rounded-sm shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-base text-brand-charcoal mb-2">Structure & Architecture</h3>
              <p className="text-gray-500 mb-2">
                Designed by <strong>Aakar Architect</strong>. Seismic Zone III compliant RCC framed structure built with high-grade reinforcement steel and precision block masonry.
              </p>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange">Partner: Aakar Architect</span>
          </div>

          <div className="bg-white p-6 border border-brand-terracotta/10 rounded-sm shadow-xs">
            <h3 className="font-serif text-base text-brand-charcoal mb-3">Toilet & Plumbing</h3>
            <ul className="space-y-1.5 text-gray-500">
              <li className="flex items-start gap-1.5">• <span>CP fittings of Jaguar / Hindware collection or similar.</span></li>
              <li className="flex items-start gap-1.5">• <span>CPVC pipes for hot & cold water distribution.</span></li>
              <li className="flex items-start gap-1.5">• <span>Concealed & underslung plumbing work.</span></li>
              <li className="flex items-start gap-1.5">• <span>Provision of exhaust fan & geyser.</span></li>
            </ul>
          </div>

          <div className="bg-white p-6 border border-brand-terracotta/10 rounded-sm shadow-xs">
            <h3 className="font-serif text-base text-brand-charcoal mb-3">Electrical & Power</h3>
            <ul className="space-y-1.5 text-gray-500">
              <li className="flex items-start gap-1.5">• <span>Concealed wiring & modular switches of Legrand / Schindler or similar.</span></li>
              <li className="flex items-start gap-1.5">• <span>Provision of AC point & TV point in all bedrooms & living room.</span></li>
              <li className="flex items-start gap-1.5">• <span>Provision of power back up up to 1 kW.</span></li>
            </ul>
          </div>

          <div className="bg-white p-6 border border-brand-terracotta/10 rounded-sm shadow-xs">
            <h3 className="font-serif text-base text-brand-charcoal mb-3">Colour & Finishes</h3>
            <ul className="space-y-1.5 text-gray-500">
              <li className="flex items-start gap-1.5">• <span><strong>Internal:</strong> Double coat with primer coat wall putty.</span></li>
              <li className="flex items-start gap-1.5">• <span><strong>External:</strong> Weather resistant paint.</span></li>
            </ul>
          </div>

          <div className="bg-white p-6 border border-brand-terracotta/10 rounded-sm shadow-xs">
            <h3 className="font-serif text-base text-brand-charcoal mb-3">Security & Amenities</h3>
            <ul className="space-y-1.5 text-gray-500">
              <li className="flex items-start gap-1.5">• <span>Gated security system.</span></li>
              <li className="flex items-start gap-1.5">• <span>Intercom facilities & CCTV surveillance.</span></li>
              <li className="flex items-start gap-1.5">• <span>ICT room to be provided.</span></li>
            </ul>
          </div>

          <div className="bg-white p-6 border border-brand-terracotta/10 rounded-sm shadow-xs">
            <h3 className="font-serif text-base text-brand-charcoal mb-3">Staircase, Railing & Balcony</h3>
            <ul className="space-y-1.5 text-gray-500">
              <li className="flex items-start gap-1.5">• <span><strong>Staircase:</strong> Kota Stone / Anti-skid Tiles / Epoxy Flooring with MS Railing.</span></li>
              <li className="flex items-start gap-1.5">• <span><strong>Balcony:</strong> MS Railing.</span></li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
