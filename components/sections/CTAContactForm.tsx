'use client';

import React from 'react';
import { Mail, Phone, MapPin, Calendar, CheckCircle, ShieldCheck } from 'lucide-react';
import BookSiteVisitForm from './BookSiteVisitForm';

export default function CTAContactForm() {
  return (
    <section 
      className="relative w-full py-24 bg-brand-cream border-t border-brand-terracotta/10 scroll-mt-10"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Side: Contact Information & Heritage Banner */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div>
            <span className="text-xs font-sans tracking-[0.3em] text-brand-orange uppercase font-bold mb-3 block">
              Exclusive Enquiries
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-charcoal uppercase tracking-wider mb-4 leading-tight">
              Begin Your Heritage Story
            </h2>
            <div className="w-12 h-[2px] bg-brand-orange mb-6" />
            <p className="font-sans text-xs md:text-sm text-gray-600 leading-relaxed font-light mb-6">
              Connect directly with our relationship manager to request instant brochures, floor plan layouts, price updates, or schedule an exclusive VIP site visit.
            </p>

            {/* Value Highlights */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-xs font-medium text-brand-charcoal">
                <CheckCircle className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Instant Floor Plan & Cost Sheet on WhatsApp</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-medium text-brand-charcoal">
                <ShieldCheck className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Zero Obligation Free Site Transport Pickup & Drop</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-medium text-brand-charcoal">
                <Calendar className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Flexible Site Tour Timing with Relationship Executive</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 text-xs text-gray-600 border-t border-gray-200/80 pt-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-sm text-brand-charcoal font-semibold mb-1">Corporate Headquarters</h4>
                <p className="leading-relaxed">
                  Motwani Towers, Janpath Rd, Saheed Nagar, Bhubaneswar, Odisha 751007
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-sm text-brand-charcoal font-semibold mb-1">Sales Hotline</h4>
                <p className="leading-relaxed">
                  <a href="tel:+919437170733" className="hover:text-brand-orange transition-colors font-medium">
                    +91 94371 70733
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-sm text-brand-charcoal font-semibold mb-1">Email Correspondence</h4>
                <p className="leading-relaxed">
                  <a href="mailto:info@motwaniconstructions.com" className="hover:text-brand-orange transition-colors">
                    info@motwaniconstructions.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Site Visit Form Card */}
        <div className="lg:col-span-7">
          <BookSiteVisitForm />
        </div>
      </div>
    </section>
  );
}
