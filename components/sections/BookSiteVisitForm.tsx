'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { User, Phone, Mail, ChevronDown, Star, Loader2, CheckCircle2, Sparkles, Download, MessageSquareShare } from 'lucide-react';

const siteVisitSchema = z.object({
  name: z.string().min(2, 'Full Name is required (at least 2 characters)'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number'),
  email: z.string().min(1, 'Email address is required for brochure delivery').email('Enter a valid email address'),
  configuration: z.string().optional(),
  timeline: z.string().optional(),
  agreeWhatsapp: z.boolean(),
});

export type SiteVisitFormData = z.infer<typeof siteVisitSchema>;

interface BookSiteVisitFormProps {
  className?: string;
  isCompact?: boolean;
  onSuccessCallback?: () => void;
}

export default function BookSiteVisitForm({
  className = '',
  isCompact = false,
  onSuccessCallback,
}: BookSiteVisitFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [deliveryDetails, setDeliveryDetails] = useState<{
    email: string;
    phone: string;
    whatsappUrl?: string;
    brochureUrl?: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SiteVisitFormData>({
    resolver: zodResolver(siteVisitSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      configuration: '',
      timeline: '',
      agreeWhatsapp: true,
    },
  });

  const triggerDownload = (url: string) => {
    const pdfUrl = url.startsWith('http') ? url : `${window.location.origin}${url.startsWith('/') ? '' : '/'}${url}`;
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'Codename-Cascade-Mini-Brochure.pdf';
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      if (document.body.contains(a)) {
        document.body.removeChild(a);
      }
    }, 100);
  };

  const onSubmit = async (data: SiteVisitFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setDeliveryDetails({
          email: data.email,
          phone: data.phone,
          whatsappUrl: result.whatsappUrl,
          brochureUrl: result.brochureUrl || '/Codename-Cascade-Mini-Brochure.pdf',
        });

        // 1. Trigger direct browser download of brochure
        triggerDownload(result.brochureUrl || '/Codename-Cascade-Mini-Brochure.pdf');

        // 2. Trigger WhatsApp redirect window
        if (result.whatsappUrl && data.agreeWhatsapp) {
          setTimeout(() => {
            window.open(result.whatsappUrl, '_blank');
          }, 800);
        }

        setSubmitSuccess(true);
        reset();
        if (onSuccessCallback) {
          onSuccessCallback();
        }
      } else {
        setSubmitError(result.message || 'Submission failed. Please check your inputs.');
      }
    } catch {
      setSubmitError('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`bg-white border border-brand-terracotta/15 rounded-md shadow-2xl overflow-hidden relative ${className}`}>
      {/* Top Heritage Accent Bar */}
      <div className="h-1.5 bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-terracotta" />

      <div className={`${isCompact ? 'p-6' : 'p-6 md:p-8'}`}>
        {/* Header Section */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 border border-brand-orange/20 rounded-full text-brand-orange font-bold text-xs uppercase tracking-wider mb-2">
            <span className="text-base leading-none">🏡</span>
            <span>BOOK A FREE SITE VISIT</span>
          </div>

          <p className="font-sans text-xs md:text-sm text-gray-600 leading-relaxed font-medium mt-1">
            Get instant brochure delivery on Email & WhatsApp,<br />
            plus latest price & floor plans.
          </p>
        </div>

        {submitSuccess ? (
          <div className="text-center py-6 px-3 flex flex-col items-center">
            <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mb-3 border border-emerald-200 shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 animate-bounce" />
            </div>

            <h3 className="font-serif text-xl text-brand-charcoal mb-1 uppercase tracking-wide">
              Brochure Dispatched!
            </h3>

            <p className="text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full font-medium mb-4">
              ✨ Sent to WhatsApp & Registered Email
            </p>

            {/* Delivery Details Summary Card */}
            {deliveryDetails && (
              <div className="w-full bg-brand-cream/40 border border-brand-terracotta/15 rounded-md p-3.5 mb-5 text-left space-y-2 text-xs">
                <div className="flex items-center justify-between text-gray-700">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <Mail className="w-3.5 h-3.5 text-brand-orange shrink-0" /> Email Sent:
                  </span>
                  <span className="font-mono text-[11px] text-brand-charcoal truncate max-w-[180px]">
                    {deliveryDetails.email}
                  </span>
                </div>

                <div className="flex items-center justify-between text-gray-700 border-t border-gray-200/60 pt-2">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <MessageSquareShare className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> WhatsApp Dispatched:
                  </span>
                  <span className="font-mono text-[11px] text-brand-charcoal">
                    +91 {deliveryDetails.phone}
                  </span>
                </div>
              </div>
            )}

            {/* Direct Actions */}
            <div className="w-full space-y-2.5 mb-5">
              <button
                type="button"
                onClick={() => triggerDownload(deliveryDetails?.brochureUrl || '/Codename-Cascade-Mini-Brochure.pdf')}
                className="w-full bg-brand-orange hover:bg-brand-terracotta text-white font-bold text-xs py-3 px-4 rounded-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Brochure PDF</span>
              </button>

              {deliveryDetails?.whatsappUrl && (
                <a
                  href={deliveryDetails.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-4 rounded-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm block text-center cursor-pointer"
                >
                  <MessageSquareShare className="w-4 h-4" />
                  <span>Open in WhatsApp</span>
                </a>
              )}
            </div>

            <button
              onClick={() => setSubmitSuccess(false)}
              className="text-xs font-bold tracking-widest text-brand-orange hover:text-brand-terracotta uppercase transition-colors underline underline-offset-4 cursor-pointer"
            >
              Book Another Visit / Submit Form Again
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {submitError && (
              <div className="bg-red-50 border-l-2 border-red-500 text-red-700 p-3 rounded-sm text-xs">
                {submitError}
              </div>
            )}

            {/* Full Name * */}
            <div className="flex flex-col">
              <label className="text-[11px] font-sans font-bold uppercase tracking-wider text-brand-charcoal mb-1.5 flex items-center justify-between">
                <span>Full Name <span className="text-brand-orange">*</span></span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  {...register('name')}
                  placeholder="Enter your full name"
                  className={`w-full text-xs pl-10 pr-4 py-3 rounded-sm border bg-brand-cream/30 focus:outline-none focus:ring-1 focus:bg-white transition-all text-brand-charcoal placeholder:text-gray-400 ${
                    errors.name
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-200 focus:ring-brand-orange focus:border-brand-orange'
                  }`}
                />
                <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
              {errors.name && (
                <span className="text-[10px] text-red-500 mt-1 font-medium">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Mobile Number * */}
            <div className="flex flex-col">
              <label className="text-[11px] font-sans font-bold uppercase tracking-wider text-brand-charcoal mb-1.5">
                Mobile Number (for WhatsApp Delivery) <span className="text-brand-orange">*</span>
              </label>
              <div className="relative">
                <input
                  type="tel"
                  {...register('phone')}
                  placeholder="Enter 10-digit mobile number"
                  className={`w-full text-xs pl-10 pr-4 py-3 rounded-sm border bg-brand-cream/30 focus:outline-none focus:ring-1 focus:bg-white transition-all text-brand-charcoal placeholder:text-gray-400 ${
                    errors.phone
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-200 focus:ring-brand-orange focus:border-brand-orange'
                  }`}
                />
                <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
              {errors.phone && (
                <span className="text-[10px] text-red-500 mt-1 font-medium">
                  {errors.phone.message}
                </span>
              )}
            </div>

            {/* Email Address * */}
            <div className="flex flex-col">
              <label className="text-[11px] font-sans font-bold uppercase tracking-wider text-brand-charcoal mb-1.5">
                Email Address (for Email Delivery) <span className="text-brand-orange">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  {...register('email')}
                  placeholder="Enter your email address"
                  className={`w-full text-xs pl-10 pr-4 py-3 rounded-sm border bg-brand-cream/30 focus:outline-none focus:ring-1 focus:bg-white transition-all text-brand-charcoal placeholder:text-gray-400 ${
                    errors.email
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-200 focus:ring-brand-orange focus:border-brand-orange'
                  }`}
                />
                <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
              {errors.email && (
                <span className="text-[10px] text-red-500 mt-1 font-medium">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Dropdowns row or stacked */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Configuration dropdown */}
              <div className="flex flex-col">
                <label className="text-[11px] font-sans font-bold uppercase tracking-wider text-brand-charcoal mb-1.5">
                  Configuration ▼
                </label>
                <div className="relative">
                  <select
                    {...register('configuration')}
                    className="w-full text-xs px-3 py-3 rounded-sm border border-gray-200 bg-brand-cream/30 focus:outline-none focus:ring-1 focus:ring-brand-orange focus:border-brand-orange focus:bg-white transition-all appearance-none text-brand-charcoal font-medium cursor-pointer"
                  >
                    <option value="">Select Config</option>
                    <option value="2 BHK">2 BHK</option>
                    <option value="3 BHK">3 BHK</option>
                    <option value="4 BHK">4 BHK</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Purchase Timeline dropdown */}
              <div className="flex flex-col">
                <label className="text-[11px] font-sans font-bold uppercase tracking-wider text-brand-charcoal mb-1.5">
                  Purchase Timeline ▼
                </label>
                <div className="relative">
                  <select
                    {...register('timeline')}
                    className="w-full text-xs px-3 py-3 rounded-sm border border-gray-200 bg-brand-cream/30 focus:outline-none focus:ring-1 focus:ring-brand-orange focus:border-brand-orange focus:bg-white transition-all appearance-none text-brand-charcoal font-medium cursor-pointer"
                  >
                    <option value="">Select Timeline</option>
                    <option value="This Week">This Week</option>
                    <option value="This Month">This Month</option>
                    <option value="Need a Call">Need a Call</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Checkbox: I agree to receive calls and WhatsApp updates */}
            <div className="pt-1">
              <label className="flex items-start gap-2.5 cursor-pointer group">
                <input
                  type="checkbox"
                  {...register('agreeWhatsapp')}
                  className="mt-0.5 h-4 w-4 rounded border-gray-300 text-brand-orange focus:ring-brand-orange accent-brand-orange cursor-pointer"
                />
                <span className="text-[11px] text-gray-600 leading-tight group-hover:text-brand-charcoal transition-colors">
                  Send e-brochure to my WhatsApp & Email.
                </span>
              </label>
            </div>

            {/* Submit Button: GET PRICE & BROCHURE */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full relative overflow-hidden group bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-terracotta hover:from-brand-terracotta hover:to-brand-orange text-white py-3.5 px-6 rounded-sm text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-lg shadow-brand-orange/20 active:scale-[0.98] disabled:opacity-50 mt-2 flex items-center justify-center gap-2 cursor-pointer"
            >
              {/* Shimmer Effect */}
              <div 
                className="absolute inset-0 w-1/2 h-full transform -skew-x-12 -translate-x-full group-hover:animate-shimmer"
                style={{
                  background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)',
                }}
              />

              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Delivering Brochure...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  <span>GET PRICE & BROCHURE</span>
                </>
              )}
            </button>

            {/* Trust Banner / Social Proof */}
            <div className="pt-3 border-t border-gray-100 text-center">
              <div className="inline-flex items-center justify-center gap-1.5 text-xs text-gray-700 font-semibold">
                <span className="flex text-amber-400 tracking-tighter">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                </span>
                <span className="text-[11px] text-gray-600 font-medium">
                  Trusted by Hundreds of Homebuyers
                </span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
