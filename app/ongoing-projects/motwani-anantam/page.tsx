import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { constructMetadata } from '@/lib/metadata';
import { ArrowLeft, MapPin, Download, Building2, Sparkles, ShieldCheck, TreePine, Waves, Compass, Home } from 'lucide-react';
import ApartmentConfigurations from '@/components/sections/ApartmentConfigurations';

export const metadata: Metadata = constructMetadata({
  title: 'Motwani Anantam | 3 & 4 BHK Luxury Apartments at Kesora Square, Bhubaneswar',
  description: 'Discover Motwani Anantam at Kesora Square (Beside Puribypass NH 316), Bhubaneswar. Premium 3 & 4 BHK luxury residences spread across 3.34 acres with 60% open space and world-class amenities.',
  path: '/ongoing-projects/motwani-anantam',
});

const ANANTAM_CONFIGURATIONS = [
  { 
    type: '3 BHK', 
    sba: '2,190 Sq.Ft.', 
    flatArea: '1,470 Sq.Ft.', 
    ca: '1,145 Sq.Ft.', 
    layout: '3 Bedrooms, 3 Toilets, 3 Balconies (including 1 Dry Balcony), Kitchen, Living & Dining Area' 
  },
  { 
    type: '3 BHK Type 2 (Larger)', 
    sba: '2,430 Sq.Ft.', 
    flatArea: '1,638 Sq.Ft.', 
    ca: '1,245 Sq.Ft.', 
    layout: '3 Bedrooms, 3 Toilets, 4 Balconies (including 1 Dry Balcony), Kitchen, Living & Dining Area' 
  },
  { 
    type: '4 BHK', 
    sba: '3,190 Sq.Ft.', 
    flatArea: '1,940 Sq.Ft.', 
    ca: '1,517 Sq.Ft.', 
    layout: '4 Bedrooms, 4 Toilets, 4 Balconies (including 1 Dry Balcony), Kitchen, Store Room, Living & Dining Area' 
  },
];

const GALLERY_IMAGES = [
  {
    src: '/images/anantam/page_5.jpg',
    title: '18-Storey Opulent Elevation',
    subtitle: 'S1+S2+S3+18 Floors | 320 Exclusive Units across 3.34 Acres',
  },
  {
    src: '/images/anantam/page_7.jpg',
    title: 'Entryway to Grandeur',
    subtitle: 'A grand entrance welcoming you to a life of tranquil prosperity',
  },
  {
    src: '/images/anantam/page_8.jpg',
    title: 'A Glance at Opulence',
    subtitle: 'Reflecting the highest standards of architectural excellence',
  },
  {
    src: '/images/anantam/page_13.jpg',
    title: 'Palm Grove & Water Feature',
    subtitle: 'Serene water cascades and lush palm avenues for peaceful evenings',
  },
  {
    src: '/images/anantam/page_14.jpg',
    title: 'Lily Pool & Garden of Reflection',
    subtitle: 'Tranquil retreat overlooking pristine water lilies and green lawns',
  },
  {
    src: '/images/anantam/page_26.jpg',
    title: 'Luxury Swimming Pool',
    subtitle: 'Resort-style pool for weekend relaxation and leisure swims',
  },
];

export default function MotwaniAnantamProject() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-6 max-w-6xl mx-auto">
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-orange hover:text-brand-terracotta transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>
        
        {/* Header Title Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 border border-brand-orange/20 rounded-full text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Motwani Constructions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-brand-charcoal mb-3 leading-tight">
              Motwani Anantam
            </h1>
            <p className="text-sm md:text-base text-brand-terracotta font-medium flex items-start gap-2 max-w-2xl">
              <MapPin className="w-5 h-5 shrink-0 text-brand-orange mt-0.5" />
              <span>
                Kesora Square (Beside Puribypass NH 316), Jharpada, Bhubaneswar, Odisha
              </span>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 self-start lg:self-auto">
            <span className="bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold px-4 py-2.5 uppercase tracking-widest rounded-sm">
              Ongoing Project
            </span>
            <span className="bg-amber-700/10 border border-amber-700/20 text-amber-900 text-xs font-bold px-4 py-2.5 uppercase tracking-wider rounded-sm">
              Architecture: Aakar Architect
            </span>
            <a
              href="/Motwani-ANANTAM-Brochure.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-orange to-brand-terracotta hover:from-brand-terracotta hover:to-brand-orange text-white text-xs font-bold px-5 py-2.5 uppercase tracking-widest rounded-sm shadow-md transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              <span>Download Brochure PDF</span>
            </a>
          </div>
        </div>
        
        <div className="w-20 h-[3px] bg-brand-orange mb-12" />

        {/* Hero Renders Carousel / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="relative w-full h-[420px] overflow-hidden rounded-sm border border-brand-terracotta/10 group shadow-md">
            <Image 
              src="/images/anantam/page_5.jpg" 
              alt="Motwani Anantam 18-Storey Tower Elevation Renders" 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs text-amber-300 font-bold uppercase tracking-widest mb-1">Architectural Landmark</span>
              <h3 className="font-serif text-2xl mb-1">18-Storey Opulent Elevation</h3>
              <p className="text-xs text-gray-300">S1+S2+S3+18 Floors | 320 Units across 3.34 Acres with 60% Open Space</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {GALLERY_IMAGES.slice(1, 5).map((img, idx) => (
              <div key={idx} className="relative w-full h-[200px] overflow-hidden rounded-sm border border-brand-terracotta/10 group shadow-xs">
                <Image 
                  src={img.src} 
                  alt={img.title} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 text-white">
                  <div>
                    <h4 className="font-serif text-sm font-bold text-white mb-0.5">{img.title}</h4>
                    <p className="text-[10px] text-gray-300 line-clamp-1">{img.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Key Overview Grid */}
        <h2 className="text-2xl font-serif text-brand-charcoal mb-6 border-b border-brand-terracotta/10 pb-2">
          Project Highlights & Overview
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-brand-cream/60 p-6 border border-brand-terracotta/15 rounded-sm text-center">
            <Building2 className="w-8 h-8 text-brand-orange mx-auto mb-3" />
            <span className="text-2xl font-serif font-bold text-brand-charcoal block mb-1">320 Units</span>
            <span className="text-xs text-gray-500 uppercase tracking-wider">3 & 4 BHK Luxury Apartments</span>
          </div>

          <div className="bg-brand-cream/60 p-6 border border-brand-terracotta/15 rounded-sm text-center">
            <TreePine className="w-8 h-8 text-brand-orange mx-auto mb-3" />
            <span className="text-2xl font-serif font-bold text-brand-charcoal block mb-1">60% Open</span>
            <span className="text-xs text-gray-500 uppercase tracking-wider">Soulful Greenery & Parks</span>
          </div>

          <div className="bg-brand-cream/60 p-6 border border-brand-terracotta/15 rounded-sm text-center">
            <ShieldCheck className="w-8 h-8 text-brand-orange mx-auto mb-3" />
            <span className="text-2xl font-serif font-bold text-brand-charcoal block mb-1">3.34 Acres</span>
            <span className="text-xs text-gray-500 uppercase tracking-wider">Gated Luxury Community</span>
          </div>

          <div className="bg-brand-cream/60 p-6 border border-brand-terracotta/15 rounded-sm text-center">
            <Waves className="w-8 h-8 text-brand-orange mx-auto mb-3" />
            <span className="text-2xl font-serif font-bold text-brand-charcoal block mb-1">Club & Gym</span>
            <span className="text-xs text-gray-500 uppercase tracking-wider">Dedicated 1st Floor Clubhouse</span>
          </div>
        </div>

        {/* Configurations */}
        <h2 className="text-2xl font-serif text-brand-charcoal mb-6 border-b border-brand-terracotta/10 pb-2">
          Apartment Configurations
        </h2>
        <ApartmentConfigurations configurations={ANANTAM_CONFIGURATIONS} />

        {/* Full Brochure Renders Gallery */}
        <h2 className="text-2xl font-serif text-brand-charcoal mb-6 border-b border-brand-terracotta/10 pb-2">
          High-Resolution Brochure Renders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {GALLERY_IMAGES.map((img, idx) => (
            <div key={idx} className="bg-white border border-brand-terracotta/10 rounded-sm overflow-hidden shadow-sm">
              <div className="relative w-full h-60">
                <Image 
                  src={img.src} 
                  alt={img.title} 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg text-brand-charcoal mb-1">{img.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">{img.subtitle}</p>
                <a
                  href="/Motwani-ANANTAM-Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:text-brand-terracotta uppercase tracking-wider"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>View in Brochure</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Location Advantage Box */}
        <div className="bg-brand-charcoal text-white p-8 md:p-12 rounded-sm relative overflow-hidden mb-16">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-sans tracking-[0.3em] text-brand-orange uppercase font-bold mb-3 block">Strategic Location</span>
            <h2 className="text-3xl font-serif mb-4 leading-tight">Connected with the World at Kesora Square</h2>
            <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-light mb-6">
              Located at the much-coveted Kesora Square (Beside Puribypass NH 316), Jharpada, Motwani Anantam positions you at the nexus of rapid urban growth in Bhubaneswar with smooth connectivity to major schools, hospitals, and transit corridors.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/Motwani-ANANTAM-Brochure.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-orange hover:bg-brand-orange-light text-white text-xs font-bold py-3.5 px-6 rounded-sm uppercase tracking-widest transition-colors shadow-lg shadow-brand-orange/20"
              >
                Download Full Brochure PDF
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
