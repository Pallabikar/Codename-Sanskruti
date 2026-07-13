import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { constructMetadata } from '@/lib/metadata';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Why Us | Motwani Constructions',
  description: 'Discover why homeowners trust Motwani Constructions in Odisha. Quality engineering, heritage design accents, prime locations, and transparent deals.',
  path: '/why-us',
});

const REASONS = [
  {
    title: 'Heritage-Driven Philosophy',
    description: 'We do not build generic boxes. Our designs are authentic cultural expressions, drawing inspiration from Odisha’s temples, crafts, and geometry.',
  },
  {
    title: 'Uncompromised Build Quality',
    description: 'From premium structural concrete to grade-A fittings, we partner with top-tier material brands to guarantee structural durability for generations.',
  },
  {
    title: 'Strategic Prime Locations',
    description: 'All ongoing projects are located in key growth corridors of Bhubaneswar, ensuring seamless connectivity to airports, schools, and hospitals.',
  },
  {
    title: 'RERA Compliance & Transparency',
    description: 'We follow standard regulatory protocols. Zero hidden fees, clear agreements, and milestone-linked payment schedules ensure complete peace of mind.',
  },
];

export default function WhyUs() {
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
        
        <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-6 leading-tight">
          Why Choose Motwani Constructions
        </h1>
        <div className="w-20 h-[3px] bg-brand-orange mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {REASONS.map((r, idx) => (
            <div key={idx} className="flex gap-4 p-6 bg-white border border-brand-terracotta/5 rounded-sm">
              <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-1" />
              <div>
                <h2 className="font-serif text-base text-brand-charcoal mb-2">{r.title}</h2>
                <p className="text-xs text-gray-500 leading-relaxed">{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
