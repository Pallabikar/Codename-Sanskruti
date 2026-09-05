import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { constructMetadata } from '@/lib/metadata';
import { ArrowLeft, MapPin, Sparkles, Building2, Calendar, Phone } from 'lucide-react';
import CTAContactForm from '@/components/sections/CTAContactForm';

export const metadata: Metadata = constructMetadata({
  title: 'Motwani Anandam | Premium Upcoming Residential Landmark in Bhubaneswar',
  description: 'Explore Motwani Anandam, an upcoming luxury residential landmark by Motwani Constructions in Bhubaneswar, Odisha.',
  path: '/ongoing-projects/motwani-anandam',
});

export default function MotwaniAnandamProject() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-6 max-w-5xl mx-auto">
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-orange hover:text-brand-terracotta transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 border border-brand-orange/20 rounded-full text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Motwani Constructions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-2 leading-tight">
              Motwani Anandam
            </h1>
            <p className="text-sm text-brand-terracotta font-medium flex items-center gap-2">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>Key Growth Corridor, Bhubaneswar, Odisha</span>
            </p>
          </div>
          <span className="self-start lg:self-auto bg-amber-600/10 border border-amber-600/20 text-amber-800 text-xs font-bold px-4 py-2 uppercase tracking-widest rounded-sm">
            Upcoming Project
          </span>
        </div>
        
        <div className="w-20 h-[3px] bg-brand-orange mb-10" />

        {/* Banner Card */}
        <div className="relative w-full h-[360px] overflow-hidden rounded-sm mb-16 border border-brand-terracotta/10 bg-brand-charcoal">
          <Image 
            src="/images/og-preview.jpg" 
            alt="Motwani Anandam Upcoming Landmark Preview" 
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/40 to-transparent flex items-end p-8">
            <div>
              <span className="text-xs text-brand-orange font-bold uppercase tracking-widest block mb-2">Coming Soon</span>
              <p className="text-white text-xl md:text-2xl font-serif max-w-xl">
                "An upcoming expression of serene architecture, designed to bring eternal joy and elevated living to modern families in Bhubaneswar."
              </p>
            </div>
          </div>
        </div>

        {/* Project Announcement Details */}
        <div className="bg-white p-8 border border-brand-terracotta/10 rounded-sm shadow-xs mb-16">
          <h2 className="text-2xl font-serif text-brand-charcoal mb-4">
            About Motwani Anandam
          </h2>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-light mb-6">
            Motwani Anandam is Motwani Constructions' upcoming flagship residential development in Bhubaneswar. Designed with thoughtful green courtyards, spacious floor layouts, and ultra-modern amenities, Anandam offers homebuyers an opportunity to express interest for early priority allotment.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <Building2 className="w-5 h-5 text-brand-orange shrink-0" />
              <div>
                <span className="text-[10px] text-gray-400 uppercase font-bold block">Development</span>
                <span className="text-xs font-semibold text-brand-charcoal">Luxury Apartments</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-brand-orange shrink-0" />
              <div>
                <span className="text-[10px] text-gray-400 uppercase font-bold block">Status</span>
                <span className="text-xs font-semibold text-brand-charcoal">Pre-Launch / Expression of Interest</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-brand-orange shrink-0" />
              <div>
                <span className="text-[10px] text-gray-400 uppercase font-bold block">Priority Helpline</span>
                <span className="text-xs font-semibold text-brand-charcoal">+91 97779 79501</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enquiry Section */}
        <CTAContactForm />
      </main>
      <Footer />
    </>
  );
}
