import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { constructMetadata } from '@/lib/metadata';
import { ArrowLeft, Users, Shield, Trophy } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'About Sanskruti | 2, 3 & 4 BHK Apartments for Sale',
  description: 'Choose Sanskruti for premium living in Bhubaneswar. Explore spacious 2, 3 & 4 BHK apartments with world-class amenities. Get pricing, floor plans, and book a free site visit today.',
  path: '/about-us',
});

export default function AboutUs() {
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
          About Motwani Constructions
        </h1>
        <div className="w-20 h-[3px] bg-brand-orange mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-sm shadow-sm border border-brand-terracotta/5">
            <Users className="w-8 h-8 text-brand-orange mb-4" />
            <h2 className="font-serif text-lg text-brand-charcoal mb-2">Our Vision</h2>
            <p className="text-xs text-gray-500 leading-relaxed">
              To be the gold standard in premium real estate, uniting the sacred architecture of Odisha with world-class engineering.
            </p>
          </div>
          <div className="bg-white p-8 rounded-sm shadow-sm border border-brand-terracotta/5">
            <Shield className="w-8 h-8 text-brand-orange mb-4" />
            <h2 className="font-serif text-lg text-brand-charcoal mb-2">Our Values</h2>
            <p className="text-xs text-gray-500 leading-relaxed">
              Uncompromising integrity, transparency, and deep respect for the cultural values of the land we build on.
            </p>
          </div>
          <div className="bg-white p-8 rounded-sm shadow-sm border border-brand-terracotta/5">
            <Trophy className="w-8 h-8 text-brand-orange mb-4" />
            <h2 className="font-serif text-lg text-brand-charcoal mb-2">Our Track Record</h2>
            <p className="text-xs text-gray-500 leading-relaxed">
              Successfully delivering landmarks in Bhubaneswar and Puri, bringing families closer in thoughtfully designed spaces.
            </p>
          </div>
        </div>

        <article className="prose max-w-none text-sm text-gray-600 leading-relaxed space-y-6">
          <p>
            For over a decade, Motwani Constructions has been synonymous with premium residential projects in Bhubaneswar, Odisha. We believe that a home is more than just concrete and steel—it is a sanctuary where families grow, traditions thrive, and legacies are built.
          </p>
          <p>
            With <strong>Codename Sanskruti</strong>, we embark on our most ambitious journey yet: designing a contemporary address that echoes the architectural language, terracotta hues, and spiritual geometry of Odisha's historical temples. We are dedicated to providing residences that offer modern conveniences while remaining deeply anchored in heritage.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
