import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { constructMetadata } from '@/lib/metadata';
import { MapPin, ArrowRight, ShieldCheck, Download, Sparkles, Building2 } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Projects Portfolio | Motwani Constructions Bhubaneswar',
  description: 'Explore ongoing and upcoming residential projects by Motwani Constructions in Bhubaneswar, including Codename Sanskruti, Motwani Anantam, and Motwani Anandam.',
  path: '/projects',
});

const PROJECTS_LIST = [
  {
    id: 'codename-sanskruti',
    title: 'Codename Sanskruti',
    badge: 'Ongoing Project',
    badgeColor: 'bg-brand-orange/10 text-brand-orange border-brand-orange/20',
    rera: 'RERA Approved: RP/26/2026/01587',
    architect: 'Aakar Architect',
    location: 'Siula, near Uttara square. Beside NH 316',
    image: '/images/og-preview.jpg',
    href: '/ongoing-projects/codename-sanskruti',
    description: 'A landmark luxury residential development celebrating temple architecture and modern living with 2, 3 & 4 BHK residences.',
    specs: '2, 3 & 4 BHK Homes | Temple Architecture',
  },
  {
    id: 'motwani-anantam',
    title: 'Motwani Anantam',
    badge: 'Ongoing Project',
    badgeColor: 'bg-brand-orange/10 text-brand-orange border-brand-orange/20',
    rera: 'Brochure Available',
    architect: 'Motwani Constructions',
    location: 'Kesora Square (Beside Puribypass NH 316), Jharpada, Bhubaneswar',
    image: '/images/anantam/page_5.jpg',
    href: '/ongoing-projects/motwani-anantam',
    brochurePdf: '/Motwani-ANANTAM-Brochure.pdf',
    description: 'S1+S2+S3+18 Floors opulent high-rise featuring 320 luxury 3 & 4 BHK units spread across 3.34 acres with 60% open space.',
    specs: '3 & 4 BHK Apartments | 60% Open Space',
  },
  {
    id: 'motwani-anandam',
    title: 'Motwani Anandam',
    badge: 'Ongoing Project',
    badgeColor: 'bg-brand-orange/10 text-brand-orange border-brand-orange/20',
    rera: 'RERA Approved',
    architect: 'Motwani Constructions',
    location: 'Just opposite CET College, Near Ghatikia, Bhubaneswar',
    image: '/images/anandam-hero.jpg',
    href: '/ongoing-projects/motwani-anandam',
    description: 'B+G+12 Storied high-rise community across 4 blocks with 165 units featuring premium 3 BHK + Puja luxury homes opposite CET College.',
    specs: '3 BHK + Puja | B+G+12 | 165 Units',
  },
];

export default function ProjectsShowcasePage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-6 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-sans tracking-[0.3em] text-brand-orange uppercase font-bold mb-3 block">
            Our Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-4 leading-tight">
            Motwani Constructions Projects
          </h1>
          <div className="w-20 h-[3px] bg-brand-orange mb-6" />
          <p className="text-xs md:text-sm text-gray-600 max-w-2xl font-light leading-relaxed">
            Crafting architectural landmarks across Bhubaneswar that combine modern structural innovation, spacious living, and timeless aesthetics.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PROJECTS_LIST.map((project) => (
            <div key={project.id} className="bg-white border border-brand-terracotta/10 rounded-sm overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div>
                {/* Project Image */}
                <div className="relative w-full h-56 overflow-hidden bg-brand-charcoal">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className={`text-[10px] font-bold px-3 py-1 uppercase tracking-wider rounded-sm border backdrop-blur-md ${project.badgeColor}`}>
                      {project.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-serif text-brand-charcoal mb-2">
                    {project.title}
                  </h2>
                  <p className="text-xs text-brand-terracotta font-medium flex items-start gap-1.5 mb-4">
                    <MapPin className="w-4 h-4 shrink-0 text-brand-orange mt-0.5" />
                    <span>{project.location}</span>
                  </p>

                  <p className="text-xs text-gray-500 leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>

                  <div className="pt-4 border-t border-gray-100 space-y-2 text-[11px] text-gray-600 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-brand-charcoal">Config:</span>
                      <span>{project.specs}</span>
                    </div>
                    {project.architect && (
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-brand-charcoal">Architecture:</span>
                        <span className="text-brand-orange font-medium">{project.architect}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-2">
                <Link
                  href={project.href}
                  className="w-full bg-brand-charcoal hover:bg-brand-orange text-white text-xs font-bold py-3 px-4 rounded-sm uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                >
                  <span>Explore Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {project.brochurePdf && (
                  <a
                    href={project.brochurePdf}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white text-xs font-bold py-2.5 px-4 rounded-sm uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Brochure</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
