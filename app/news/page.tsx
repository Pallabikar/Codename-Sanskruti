import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { constructMetadata } from '@/lib/metadata';
import { ArrowLeft, Calendar, User } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'News & Media | Motwani Constructions',
  description: 'Read the latest updates, announcements, and construction news from Motwani Constructions. Stay updated on Codename Sanskruti in Bhubaneswar.',
  path: '/news',
});

const ARTICLES = [
  {
    title: 'Groundbreaking Ceremony Celebrated at Codename Sanskruti',
    date: 'July 05, 2026',
    author: 'Corporate Relations',
    excerpt: 'Motwani Constructions celebrated the Bhoomi Puja and groundbreaking ceremony of Codename Sanskruti at Patia, Bhubaneswar, marked by rituals honoring local deities.',
  },
  {
    title: 'Recognized for Architecture Heritage Preservation',
    date: 'June 18, 2026',
    author: 'Odia Builders Guild',
    excerpt: 'Motwani Constructions received the Regional Heritage Architecture Award for incorporating traditional Kalinga relief carvings and sandstone styles in residential apartments.',
  },
  {
    title: 'Rising Real Estate Demand in Bhubaneswar Corridors',
    date: 'May 28, 2026',
    author: 'Industry Outlook',
    excerpt: 'An analysis of regional real estate demands in Odisha, highlighting the strong buyer preference for heritage-conscious luxury housing models over generic high-rise blocks.',
  },
];

export default function News() {
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
          News & Announcements
        </h1>
        <div className="w-20 h-[3px] bg-brand-orange mb-12" />

        <div className="flex flex-col gap-10">
          {ARTICLES.map((article, idx) => (
            <article key={idx} className="bg-white p-8 border border-brand-terracotta/5 rounded-sm shadow-sm">
              <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{article.date}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  <span>{article.author}</span>
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-serif text-brand-charcoal hover:text-brand-orange transition-colors mb-3">
                {article.title}
              </h2>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">{article.excerpt}</p>
              <Link 
                href="/news"
                className="text-xs font-bold text-brand-orange hover:text-brand-terracotta tracking-widest uppercase flex items-center gap-1"
              >
                <span>Read Full Article</span>
                <span>→</span>
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
