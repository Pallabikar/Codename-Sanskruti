import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { constructMetadata } from '@/lib/metadata';
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText, Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Privacy Policy | Motwani Constructions & Codename Sanskruti',
  description: 'Read the Privacy Policy of Motwani Constructions for Codename Sanskruti. Learn how we collect, use, protect, and handle your personal information.',
  path: '/privacy-policy',
});

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="text-xs text-gray-500 font-mono mb-6">
          Last Updated: September 2026 | Motwani Constructions (RERA Reg. No: RP/26/2026/01587)
        </p>
        <div className="w-20 h-[3px] bg-brand-orange mb-12" />

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-sm shadow-sm border border-brand-terracotta/10 flex items-start gap-4">
            <Lock className="w-6 h-6 text-brand-orange shrink-0 mt-1" />
            <div>
              <h3 className="font-serif text-sm font-semibold text-brand-charcoal mb-1">Data Protection</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Your personal details are stored securely and never sold to unauthorized third parties.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-sm shadow-sm border border-brand-terracotta/10 flex items-start gap-4">
            <Eye className="w-6 h-6 text-brand-orange shrink-0 mt-1" />
            <div>
              <h3 className="font-serif text-sm font-semibold text-brand-charcoal mb-1">Transparent Usage</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Information is strictly used to facilitate project inquiries, updates, and site visits.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-sm shadow-sm border border-brand-terracotta/10 flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-brand-orange shrink-0 mt-1" />
            <div>
              <h3 className="font-serif text-sm font-semibold text-brand-charcoal mb-1">RERA Compliant</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Operations adhere strictly to Real Estate Regulatory Authority standards.
              </p>
            </div>
          </div>
        </div>

        <article className="prose max-w-none text-sm text-gray-600 leading-relaxed space-y-8 bg-white p-8 md:p-12 rounded-sm shadow-sm border border-brand-terracotta/10">
          <section>
            <h2 className="text-xl font-serif text-brand-charcoal mb-3 pb-2 border-b border-brand-terracotta/10 flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-orange" />
              1. Introduction
            </h2>
            <p>
              Motwani Constructions (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting the personal information you share with us through our website for <strong>Codename Sanskruti</strong> (https://www.sanskruti.ind.in). This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website or submit an inquiry regarding our residential projects.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-brand-charcoal mb-3 pb-2 border-b border-brand-terracotta/10 flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-orange" />
              2. Information We Collect
            </h2>
            <p className="mb-3">
              We may collect personal details that you voluntarily provide when filling out inquiry forms, requesting brochures, or scheduling site visits:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-xs md:text-sm">
              <li><strong>Contact Information:</strong> Full name, phone number, email address, and preferred location.</li>
              <li><strong>Inquiry Details:</strong> Specific property configurations (2 BHK, 3 BHK, 4 BHK), budget preferences, and comments.</li>
              <li><strong>Technical &amp; Usage Data:</strong> IP address, browser type, device information, pages viewed, and referral URLs collected automatically via standard analytics tools.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif text-brand-charcoal mb-3 pb-2 border-b border-brand-terracotta/10 flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-orange" />
              3. How We Use Your Information
            </h2>
            <p className="mb-3">The information collected is used for legitimate business purposes, including:</p>
            <ul className="list-disc pl-6 space-y-2 text-xs md:text-sm">
              <li>Responding to property inquiries and providing floor plans, pricing, and project updates.</li>
              <li>Coordinating and confirming site visits with our relationship managers.</li>
              <li>Sending important project updates, RERA regulatory announcements, and promotional offers (you may opt out at any time).</li>
              <li>Improving site navigation, performance, and overall user experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif text-brand-charcoal mb-3 pb-2 border-b border-brand-terracotta/10 flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-orange" />
              4. Data Sharing and Confidentiality
            </h2>
            <p>
              We do not sell, rent, or trade your personal information to third parties. We may share information with trusted service providers, sales partners, or authorized representatives solely to assist in serving your property request. We may also disclose data when required by law or judicial authorities under Indian legislation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-brand-charcoal mb-3 pb-2 border-b border-brand-terracotta/10 flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-orange" />
              5. Data Security
            </h2>
            <p>
              We implement reasonable administrative, technical, and physical security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure, and users are encouraged to take precautions when sharing personal details online.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-brand-charcoal mb-3 pb-2 border-b border-brand-terracotta/10 flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-orange" />
              6. Cookies &amp; Tracking Technologies
            </h2>
            <p>
              Our website may use cookies and similar session tracking mechanisms to enhance user experience, analyze web traffic, and optimize site performance. You can choose to disable cookies through your browser settings, though some website features may function with limited capability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-brand-charcoal mb-3 pb-2 border-b border-brand-terracotta/10 flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-orange" />
              7. Policy Updates
            </h2>
            <p>
              Motwani Constructions reserves the right to modify or update this Privacy Policy at any time. Any changes will be posted directly on this page with an updated modification date.
            </p>
          </section>

          <section className="pt-4 border-t border-brand-terracotta/10">
            <h2 className="text-xl font-serif text-brand-charcoal mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5 text-brand-orange" />
              8. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions regarding this Privacy Policy or your personal information, please reach out to us:
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
                <ShieldCheck className="w-4 h-4 text-brand-orange shrink-0" />
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
