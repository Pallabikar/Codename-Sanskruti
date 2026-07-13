import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-charcoal text-brand-sandstone-light pt-20 pb-10 border-t border-brand-terracotta/20 overflow-hidden">
      {/* Decorative Traditional Border Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange via-brand-terracotta to-brand-orange" />
      
      {/* Background Subtle Motif */}
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-brand-orange/[0.015] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 overflow-hidden bg-brand-orange/10 rounded-full flex items-center justify-center p-1 border border-brand-orange/20">
                <Image 
                  src="/logo.jpg" 
                  alt="Motwani Constructions Logo" 
                  width={32} 
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-sm tracking-widest text-brand-orange font-bold uppercase leading-none">
                  Motwani
                </span>
                <span className="font-sans text-[10px] tracking-[0.25em] text-white uppercase font-semibold">
                  Constructions
                </span>
              </div>
            </Link>
            
            <p className="font-sans text-xs text-gray-400 leading-relaxed">
              Crafting architectural masterpieces that honor Odisha's rich heritage and spiritual soul while setting new benchmarks for premium contemporary living.
            </p>

            <div className="flex flex-col gap-1.5 text-xs text-gray-400">
              <span className="font-semibold text-brand-orange">RERA Registration:</span>
              <span>PR/OR/BBS/2026/00912 (Proposed)</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-6">
            <h3 className="font-serif text-sm text-white tracking-widest uppercase border-b border-brand-terracotta/20 pb-2">
              Quick Navigation
            </h3>
            <ul className="flex flex-col gap-3 text-xs text-gray-400">
              <li>
                <Link href="/about-us" className="hover:text-brand-orange transition-colors flex items-center gap-1 group">
                  <span>About Us</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="hover:text-brand-orange transition-colors flex items-center gap-1 group">
                  <span>Why Us</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/ongoing-projects/codename-sanskruti" className="hover:text-brand-orange transition-colors flex items-center gap-1 group">
                  <span>Codename Sanskruti</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-brand-orange transition-colors flex items-center gap-1 group">
                  <span>Careers</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-brand-orange transition-colors flex items-center gap-1 group">
                  <span>News & Updates</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all duration-300" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="flex flex-col gap-6">
            <h3 className="font-serif text-sm text-white tracking-widest uppercase border-b border-brand-terracotta/20 pb-2">
              Corporate Office
            </h3>
            <ul className="flex flex-col gap-4 text-xs text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Motwani Towers, 4th Floor, Janpath Rd, Saheed Nagar, Bhubaneswar, Odisha 751007
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                <Link href="tel:+919999999999" className="hover:text-brand-orange transition-colors">
                  +91 99999 99999
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                <Link href="mailto:info@motwaniconstructions.com" className="hover:text-brand-orange transition-colors">
                  info@motwaniconstructions.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Site Info Column */}
          <div className="flex flex-col gap-6">
            <h3 className="font-serif text-sm text-white tracking-widest uppercase border-b border-brand-terracotta/20 pb-2">
              Disclaimer
            </h3>
            <p className="font-sans text-[10px] text-gray-500 leading-relaxed">
              All representations, artistic renderings, images, animations, layout plans, and specifications in this landing page are conceptual and illustrative of the proposed project "Codename Sanskruti". Actual finishes and features are subject to change as approved by local planning authorities and the RERA regulatory body.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-terracotta/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <p>© {currentYear} Motwani Constructions. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/rera-info" className="hover:text-white transition-colors">RERA Disclosures</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
