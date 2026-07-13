'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian phone number (starting with 6-9)'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(5, 'Message must be at least 5 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function CTAContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
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
        setSubmitSuccess(true);
        reset();
      } else {
        setSubmitError(result.message || 'Submission failed. Please verify inputs.');
      }
    } catch {
      setSubmitError('Connection error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      className="relative w-full py-24 bg-brand-cream border-t border-brand-terracotta/10 scroll-mt-10"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Contact Information & Heritage Banner */}
        <div className="flex flex-col gap-8">
          <div>
            <span className="text-xs font-sans tracking-[0.3em] text-brand-orange uppercase font-bold mb-3 block">
              Enquire Now
            </span>
            <h2 className="text-2xl md:text-4xl font-serif text-brand-charcoal uppercase tracking-wider mb-4 leading-tight">
              Begin Your Heritage Story
            </h2>
            <div className="w-12 h-[2px] bg-brand-orange mb-6" />
            <p className="font-sans text-xs md:text-sm text-gray-500 leading-relaxed font-light">
              Connect with our relationship manager to request brochure PDFs, floor layout files, site visits, or customized payment structures.
            </p>
          </div>

          <div className="flex flex-col gap-6 text-xs text-gray-600">
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
                  <a href="tel:+919999999999" className="hover:text-brand-orange transition-colors">
                    +91 99999 99999
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

        {/* Right Side: Lead Capture Form Card */}
        <div className="bg-white p-8 md:p-10 border border-brand-terracotta/5 rounded-sm shadow-xl">
          {submitSuccess ? (
            <div className="text-center py-10 flex flex-col items-center">
              <CheckCircle2 className="w-12 h-12 text-brand-orange mb-4 animate-bounce" />
              <h3 className="font-serif text-xl text-brand-charcoal mb-3 uppercase tracking-wide">
                Enquiry Registered
              </h3>
              <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed mb-6">
                Thank you for your interest in Codename Sanskruti. Our executive will reach out to you within the next 2 hours with brochures and plans.
              </p>
              <button
                onClick={() => setSubmitSuccess(false)}
                className="text-xs font-bold tracking-widest text-brand-orange hover:text-brand-terracotta uppercase transition-colors"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {submitError && (
                <div className="bg-red-50 border-l-2 border-red-500 text-red-700 p-4 rounded-sm text-xs">
                  {submitError}
                </div>
              )}

              {/* Name */}
              <div className="flex flex-col">
                <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-brand-charcoal mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  {...register('name')}
                  placeholder="e.g. Priyabrata Mohanty"
                  className={`w-full text-xs px-4 py-3 rounded-sm border bg-brand-cream/30 focus:outline-none focus:ring-1 focus:bg-white transition-all ${
                    errors.name 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-brand-terracotta/10 focus:ring-brand-orange focus:border-brand-orange'
                  }`}
                />
                {errors.name && (
                  <span className="text-[10px] text-red-500 mt-1 font-medium">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-brand-charcoal mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  {...register('phone')}
                  placeholder="e.g. 9876543210"
                  className={`w-full text-xs px-4 py-3 rounded-sm border bg-brand-cream/30 focus:outline-none focus:ring-1 focus:bg-white transition-all ${
                    errors.phone 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-brand-terracotta/10 focus:ring-brand-orange focus:border-brand-orange'
                  }`}
                />
                {errors.phone && (
                  <span className="text-[10px] text-red-500 mt-1 font-medium">
                    {errors.phone.message}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-brand-charcoal mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  {...register('email')}
                  placeholder="e.g. priyabrata@gmail.com"
                  className={`w-full text-xs px-4 py-3 rounded-sm border bg-brand-cream/30 focus:outline-none focus:ring-1 focus:bg-white transition-all ${
                    errors.email 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-brand-terracotta/10 focus:ring-brand-orange focus:border-brand-orange'
                  }`}
                />
                {errors.email && (
                  <span className="text-[10px] text-red-500 mt-1 font-medium">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-brand-charcoal mb-2">
                  Enquiry Message
                </label>
                <textarea
                  rows={4}
                  {...register('message')}
                  placeholder="Tell us about your requirements (e.g. Interested in 3 BHK, looking for east-facing flat...)"
                  className={`w-full text-xs px-4 py-3 rounded-sm border bg-brand-cream/30 focus:outline-none focus:ring-1 focus:bg-white transition-all resize-none ${
                    errors.message 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-brand-terracotta/10 focus:ring-brand-orange focus:border-brand-orange'
                  }`}
                />
                {errors.message && (
                  <span className="text-[10px] text-red-500 mt-1 font-medium">
                    {errors.message.message}
                  </span>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-orange to-brand-terracotta text-white py-4 rounded-sm text-xs font-bold tracking-widest uppercase transition-transform active:scale-[0.98] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting Enquiry...</span>
                  </>
                ) : (
                  <span>Send Enquiry</span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
