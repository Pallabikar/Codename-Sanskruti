import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTAContactForm from '@/components/sections/CTAContactForm';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Contact Sanskruti | Get Price, Brochure & Book a Free Site Visit',
  description: 'Contact the Sanskruti sales team for the latest prices, floor plans, brochure, and exclusive offers on premium 2, 3 & 4 BHK apartments in Bhubaneswar. Book your free site visit today.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24">
        <CTAContactForm />
      </main>
      <Footer />
    </>
  );
}
