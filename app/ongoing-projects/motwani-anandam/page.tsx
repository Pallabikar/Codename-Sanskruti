import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { constructMetadata } from '@/lib/metadata';
import { ArrowLeft, MapPin, Sparkles, Building2, ShieldCheck, Layers, CheckCircle2, Phone, Home, Trees, GraduationCap, Hospital } from 'lucide-react';
import ApartmentConfigurations from '@/components/sections/ApartmentConfigurations';
import CTAContactForm from '@/components/sections/CTAContactForm';

export const metadata: Metadata = constructMetadata({
  title: 'Motwani Anandam | Premium Gated 3 BHK + Puja Apartments Opposite CET College, Ghatikia',
  description: 'Discover Motwani Anandam in Ghatikia, Bhubaneswar (Just opposite CET College). B+G+12 Storied RERA Approved gated community with 165 luxury 3 BHK + Puja units across 4 blocks.',
  path: '/ongoing-projects/motwani-anandam',
});

const ANANDAM_CONFIGURATIONS = [
  { 
    type: '3 BHK + Puja Luxury Residence', 
    area: '1,750 - 1,950 Sq.Ft.', 
    facing: 'Vastu Compliant (East / North)', 
    balcony: 'Spacious Balconies' 
  },
];

export default function MotwaniAnandamProject() {
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
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 border border-brand-orange/20 rounded-full text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Experience Elevated Living</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-brand-charcoal mb-3 leading-tight">
              Motwani Anandam
            </h1>
            <p className="text-sm md:text-base text-brand-terracotta font-medium flex items-start gap-2 max-w-2xl">
              <MapPin className="w-5 h-5 shrink-0 text-brand-orange mt-0.5" />
              <span>
                Road side project, Just opposite of CET College, Near Ghatikia, Bhubaneswar, Odisha
              </span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-start lg:self-auto">
            <span className="bg-emerald-600/10 border border-emerald-600/25 text-emerald-800 text-xs font-bold px-4 py-2.5 tracking-wider rounded-sm flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>RERA Approved</span>
            </span>
            <span className="bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold px-4 py-2.5 uppercase tracking-widest rounded-sm">
              Ongoing Project
            </span>
            <span className="bg-amber-700/10 border border-amber-700/20 text-amber-900 text-xs font-bold px-4 py-2.5 uppercase tracking-wider rounded-sm">
              Architecture: Preetech Architect
            </span>
          </div>
        </div>
        
        <div className="w-20 h-[3px] bg-brand-orange mb-12" />

        {/* Hero High-Res Render Image Showcase */}
        <div className="relative w-full h-[450px] md:h-[550px] overflow-hidden rounded-sm mb-16 border border-brand-terracotta/10 shadow-xl group">
          <Image 
            src="/images/anandam-hero.jpg" 
            alt="Motwani Anandam B+G+12 Storied Luxury Tower Night Render Opposite CET College Ghatikia" 
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-black/30 to-transparent flex flex-col justify-end p-8 text-white">
            <span className="text-xs text-amber-300 font-bold uppercase tracking-widest mb-2">Bhubaneswar's Premier City Living Gated Community</span>
            <h2 className="font-serif text-3xl md:text-4xl mb-2 leading-tight">ANANDAM — Prestige & Serenity in Ghatikia</h2>
            <p className="text-xs md:text-sm text-gray-300 max-w-2xl font-light">
              B+G+12 Storied modern high-rise featuring 165 luxury units across 4 blocks with premium 3 BHK + Puja homes.
            </p>
          </div>
        </div>

        {/* Project Highlights Grid */}
        <h2 className="text-2xl font-serif text-brand-charcoal mb-6 border-b border-brand-terracotta/10 pb-2">
          Project Highlights & Key Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 border border-brand-terracotta/10 rounded-sm shadow-xs">
            <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-brand-charcoal mb-2">Prime Ghatikia Location</h3>
            <p className="text-xs text-gray-500 leading-relaxed font-light">
              Roadside project situated <strong>just opposite CET College</strong> near Ghatikia. Extremely well-connected to key corridors of Bhubaneswar.
            </p>
          </div>

          <div className="bg-white p-6 border border-brand-terracotta/10 rounded-sm shadow-xs">
            <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-4">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-brand-charcoal mb-2">B + G + 12 Storied Towers</h3>
            <p className="text-xs text-gray-500 leading-relaxed font-light">
              Spread across <strong>4 Blocks</strong> featuring <strong>165 Exclusive Units</strong> designed with earthquake-resistant structural engineering.
            </p>
          </div>

          <div className="bg-white p-6 border border-brand-terracotta/10 rounded-sm shadow-xs">
            <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-4">
              <Home className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-brand-charcoal mb-2">3 BHK + Puja Luxury Homes</h3>
            <p className="text-xs text-gray-500 leading-relaxed font-light">
              Thoughtfully planned residences with a dedicated <strong>Puja Room</strong>, spacious dining & living areas, and expansive balconies.
            </p>
          </div>
        </div>

        {/* Neighborhood & Amenities Card */}
        <div className="bg-brand-cream/60 p-8 border border-brand-terracotta/15 rounded-sm mb-16">
          <h3 className="font-serif text-2xl text-brand-charcoal mb-4">
            Surrounded by Top Educational Institutions & Social Hubs
          </h3>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-6 font-light">
            Own your piece of Bhubaneswar's premier city living gated project equipped with modern club amenities, 24x7 security, and seamless access to everyday essentials.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-xs font-medium text-brand-charcoal">
            <div className="flex items-center gap-3 bg-white p-4 rounded-sm border border-brand-terracotta/10">
              <GraduationCap className="w-5 h-5 text-brand-orange shrink-0" />
              <span>Opposite CET College</span>
            </div>

            <div className="flex items-center gap-3 bg-white p-4 rounded-sm border border-brand-terracotta/10">
              <Hospital className="w-5 h-5 text-brand-orange shrink-0" />
              <span>Top Hospitals Nearby</span>
            </div>

            <div className="flex items-center gap-3 bg-white p-4 rounded-sm border border-brand-terracotta/10">
              <Building2 className="w-5 h-5 text-brand-orange shrink-0" />
              <span>Shopping Centers & Malls</span>
            </div>

            <div className="flex items-center gap-3 bg-white p-4 rounded-sm border border-brand-terracotta/10">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>RERA Approved Gated Community</span>
            </div>
          </div>
        </div>

        {/* Configurations Section */}
        <h2 className="text-2xl font-serif text-brand-charcoal mb-6 border-b border-brand-terracotta/10 pb-2">
          Apartment Configurations
        </h2>
        <ApartmentConfigurations configurations={ANANDAM_CONFIGURATIONS} />

        {/* Lead Capture Contact Form */}
        <CTAContactForm />
      </main>
      <Footer />
    </>
  );
}
