import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { constructMetadata } from '@/lib/metadata';
import { ArrowLeft, Home, Compass, ShieldCheck, MapPin } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Codename Sanskruti Residences | Specifications & Layout',
  description: 'View technical specifications, sizes, and layout plans for Codename Sanskruti 2 & 3 BHK luxury residences in Bhubaneswar, Odisha.',
  path: '/ongoing-projects/codename-sanskruti',
});

const CONFIGURATIONS = [
  { type: '2 BHK Heritage Elite', area: '1,350 Sq.Ft.', facing: 'East / West', balcony: '2 Spacious Balconies' },
  { type: '3 BHK Heritage Grand', area: '1,850 Sq.Ft.', facing: 'East / North', balcony: '3 Spacious Balconies' },
  { type: '3 BHK Sanskruti Royal', area: '2,200 Sq.Ft.', facing: 'Corner Plot / 3 Side Open', balcony: 'Wrap-around Balcony' },
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
            <p className="text-sm text-brand-terracotta font-medium flex items-center gap-2">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>Patia, Bhubaneswar, Odisha</span>
            </p>
          </div>
          <span className="self-start lg:self-auto bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold px-4 py-2 uppercase tracking-widest rounded-sm">
            Ongoing Project
          </span>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {CONFIGURATIONS.map((c, idx) => (
            <div key={idx} className="bg-white p-6 border border-brand-terracotta/5 shadow-sm rounded-sm flex flex-col justify-between">
              <div>
                <span className="text-xs text-brand-orange font-bold uppercase tracking-widest block mb-2">Signature Suite</span>
                <h3 className="font-serif text-lg text-brand-charcoal mb-4">{c.type}</h3>
                
                <ul className="space-y-2.5 text-xs text-gray-500 mb-6">
                  <li className="flex items-center gap-2">
                    <Home className="w-4 h-4 text-brand-terracotta shrink-0" />
                    <span>Area: {c.area}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-brand-terracotta shrink-0" />
                    <span>Vastu Facing: {c.facing}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-terracotta shrink-0" />
                    <span>Balconies: {c.balcony}</span>
                  </li>
                </ul>
              </div>

              <Link 
                href="/#contact"
                className="w-full text-center border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white py-2.5 rounded-sm text-xs font-bold tracking-widest uppercase transition-colors duration-300"
              >
                Request Floor Plan
              </Link>
            </div>
          ))}
        </div>

        {/* Tech Specs */}
        <h2 className="text-2xl font-serif text-brand-charcoal mb-6 border-b border-brand-terracotta/10 pb-2">
          Premium Specifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-gray-600 leading-relaxed mb-12">
          <div>
            <h3 className="font-serif text-base text-brand-charcoal mb-3">Structure & Architecture</h3>
            <p className="mb-4">
              Seismic Zone III compliant RCC framed shear wall structure built with grade-A steel reinforcement and concrete. Aerated autoclave block masonry for superior thermal insulation.
            </p>
            <h3 className="font-serif text-base text-brand-charcoal mb-3">Heritage Finishes</h3>
            <p>
              Selected building segments finished in natural red sandstone cladding, inspired by temple architectural lines, treated with weatherproof protective sealants.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-base text-brand-charcoal mb-3">Flooring & Fittings</h3>
            <p className="mb-4">
              Premium vitrified double-charge tiles in living room, dining, and bedrooms. Anti-skid ceramic tiles in balconies. High-end CP fittings by Jaquar/Kohler, and sanitaryware by Hindware/TOTO.
            </p>
            <h3 className="font-serif text-base text-brand-charcoal mb-3">Smart Features</h3>
            <p>
              Video door phones, provision for smart home automation, high-speed fiber connectivity, automatic elevator systems with power backup, and 3-tier security round the clock.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
