import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { constructMetadata } from '@/lib/metadata';
import { ArrowLeft, FileCheck, Scale, AlertTriangle, Building2, ShieldAlert, Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Terms & Conditions | Motwani Constructions & Codename Sanskruti',
  description: 'Read the Terms and Conditions of Motwani Constructions for Codename Sanskruti. Review project disclaimers, RERA compliance details, and usage policies.',
  path: '/terms-and-conditions',
});

export default function TermsAndConditions() {
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
        
        <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-4 leading-tight">
          Terms &amp; Conditions
        </h1>
        <p className="text-xs text-gray-500 font-mono mb-6">
          Last Updated: September 2026 | Motwani Constructions (RERA Reg. No: RP/26/2026/01587)
        </p>
        <div className="w-20 h-[3px] bg-brand-orange mb-12" />

        {/* Overview Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-sm shadow-sm border border-brand-terracotta/10 flex items-start gap-4">
            <Building2 className="w-6 h-6 text-brand-orange shrink-0 mt-1" />
            <div>
              <h3 className="font-serif text-sm font-semibold text-brand-charcoal mb-1">RERA Approved</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Project details match RERA Registration No: RP/26/2026/01587.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-sm shadow-sm border border-brand-terracotta/10 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-brand-orange shrink-0 mt-1" />
            <div>
              <h3 className="font-serif text-sm font-semibold text-brand-charcoal mb-1">Illustrative Renderings</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Images and architectural renders are artistic concepts subject to minor revisions.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-sm shadow-sm border border-brand-terracotta/10 flex items-start gap-4">
            <Scale className="w-6 h-6 text-brand-orange shrink-0 mt-1" />
            <div>
              <h3 className="font-serif text-sm font-semibold text-brand-charcoal mb-1">Odisha Jurisdiction</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                All legal matters are subject to courts located in Bhubaneswar, Odisha.
              </p>
            </div>
          </div>
        </div>

        <article className="prose max-w-none text-sm text-gray-600 leading-relaxed space-y-8 bg-white p-8 md:p-12 rounded-sm shadow-sm border border-brand-terracotta/10">
          <section>
            <h2 className="text-xl font-serif text-brand-charcoal mb-3 pb-2 border-b border-brand-terracotta/10 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-brand-orange" />
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and browsing the website of <strong>Motwani Constructions</strong> (https://www.sanskruti.ind.in), you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions. If you do not agree to these terms, please refrain from using our site or submitting information through our portal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-brand-charcoal mb-3 pb-2 border-b border-brand-terracotta/10 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-brand-orange" />
              2. Real Estate &amp; RERA Project Disclaimer
            </h2>
            <p className="mb-3">
              The website presents information regarding our flagship development, <strong>Codename Sanskruti</strong>, registered under Odisha RERA Reg. No. <strong>RP/26/2026/01587</strong>.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-xs md:text-sm">
              <li><strong>Artistic Impressions:</strong> All images, floor plans, 3D renders, walkthrough videos, and landscape graphics displayed are artistic impressions intended for illustrative purposes only and do not constitute a legal offer or contract.</li>
              <li><strong>Specifications:</strong> Final construction specifications, unit dimensions, materials, and amenities are subject to approval by relevant statutory planning authorities and formal agreements for sale.</li>
              <li><strong>Pricing &amp; Availability:</strong> Property prices, payment schedules, and inventory availability are subject to change without prior notice.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif text-brand-charcoal mb-3 pb-2 border-b border-brand-terracotta/10 flex items-center gap-2">
              <Scale className="w-5 h-5 text-brand-orange" />
              3. Intellectual Property Rights
            </h2>
            <p>
              All content on this website—including logos, trademarks, text, graphics, design elements, videos, icons, and software—is the exclusive property of Motwani Constructions or its licensors and is protected by copyright and intellectual property laws of India. Unauthorized reproduction, modification, or distribution is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-brand-charcoal mb-3 pb-2 border-b border-brand-terracotta/10 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-brand-orange" />
              4. Limitation of Liability
            </h2>
            <p>
              Motwani Constructions, its directors, employees, and agents shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website, including any reliance placed on information contained herein prior to entering into a registered sales agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-brand-charcoal mb-3 pb-2 border-b border-brand-terracotta/10 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-brand-orange" />
              5. User Conduct &amp; Submissions
            </h2>
            <p>
              Users agree to provide accurate and truthful contact information when making inquiries. Submitting fraudulent inquiries, spam messages, or attempting to compromise website security is strictly forbidden and may be subject to legal action.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-brand-charcoal mb-3 pb-2 border-b border-brand-terracotta/10 flex items-center gap-2">
              <Scale className="w-5 h-5 text-brand-orange" />
              6. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes or legal proceedings arising out of or related to the website shall be subject to the exclusive jurisdiction of the competent courts in Bhubaneswar, Odisha, India.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-brand-charcoal mb-3 pb-2 border-b border-brand-terracotta/10 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-brand-orange" />
              7. Amendments
            </h2>
            <p>
              We reserve the right to revise or update these Terms &amp; Conditions at any time. Your continued use of the website following any changes signifies your acceptance of the revised terms.
            </p>
          </section>

          <section className="pt-4 border-t border-brand-terracotta/10">
            <h2 className="text-xl font-serif text-brand-charcoal mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5 text-brand-orange" />
              8. Contact Details
            </h2>
            <p className="mb-4">
              For any legal or contractual inquiries concerning our terms, please contact:
            </p>
            <div className="bg-brand-sandstone-light/50 p-6 rounded-sm border border-brand-terracotta/15 space-y-3 text-xs md:text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
                <span><strong>Motwani Constructions</strong>, Bhubaneswar, Odisha, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                <a href="tel:+919777979501" className="hover:text-brand-orange font-medium transition-colors">
                  +91 97779 79501
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Building2 className="w-4 h-4 text-brand-orange shrink-0" />
                <span>RERA Reg. No: <strong>RP/26/2026/01587</strong></span>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
