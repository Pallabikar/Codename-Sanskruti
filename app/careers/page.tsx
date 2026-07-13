import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { constructMetadata } from '@/lib/metadata';
import { ArrowLeft, Briefcase, Mail } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Careers | Motwani Constructions',
  description: 'Join the team at Motwani Constructions in Bhubaneswar, Odisha. Explore job opportunities in civil engineering, sales, marketing, and architecture.',
  path: '/careers',
});

const JOBS = [
  { title: 'Senior Project Architect', dept: 'Design & Concepts', loc: 'Bhubaneswar', type: 'Full-time' },
  { title: 'Site Civil Engineer', dept: 'Projects & Construction', loc: 'Bhubaneswar', type: 'Full-time' },
  { title: 'Real Estate Sales Associate', dept: 'Sales & Marketing', loc: 'Bhubaneswar', type: 'Full-time' },
];

export default function Careers() {
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
          Join Our Team
        </h1>
        <p className="text-sm text-gray-500 max-w-2xl leading-relaxed mb-8">
          At Motwani Constructions, we cultivate an environment where creativity, quality, and heritage pride drive our architectural output. We are always looking for passionate builders, designers, and managers who want to make a difference in Odisha's skylines.
        </p>
        <div className="w-20 h-[3px] bg-brand-orange mb-12" />

        <h2 className="text-2xl font-serif text-brand-charcoal mb-6">Open Opportunities</h2>
        <div className="flex flex-col gap-4 mb-16">
          {JOBS.map((job, idx) => (
            <div key={idx} className="bg-white p-6 border border-brand-terracotta/5 rounded-sm shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex gap-4 items-start">
                <Briefcase className="w-5 h-5 text-brand-orange shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-base text-brand-charcoal mb-1">{job.title}</h3>
                  <p className="text-xs text-gray-400">{job.dept} • {job.loc}</p>
                </div>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                <span className="bg-brand-sandstone-light text-brand-terracotta text-[10px] font-bold px-2.5 py-1 uppercase rounded-sm">
                  {job.type}
                </span>
                <Link 
                  href="mailto:careers@motwaniconstructions.com"
                  className="bg-brand-charcoal hover:bg-brand-orange text-white text-xs font-bold px-4 py-2 uppercase tracking-widest transition-colors duration-300 rounded-sm"
                >
                  Apply
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-brand-sandstone-light p-8 rounded-sm text-center border border-brand-terracotta/10">
          <Mail className="w-8 h-8 text-brand-orange mx-auto mb-4" />
          <h3 className="font-serif text-lg text-brand-charcoal mb-2">Spontaneous Application</h3>
          <p className="text-xs text-gray-500 max-w-md mx-auto leading-relaxed mb-4">
            Don't see a matching position? Send your resume and cover letter directly to our recruitment team, and we will get back to you if a fit arises.
          </p>
          <Link 
            href="mailto:careers@motwaniconstructions.com" 
            className="text-xs font-bold text-brand-orange hover:text-brand-terracotta transition-colors tracking-widest uppercase"
          >
            careers@motwaniconstructions.com
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
