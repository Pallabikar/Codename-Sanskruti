'use client';

import React from 'react';
import { MessageSquareShare } from 'lucide-react';

export default function FloatingWhatsAppButton() {
  const whatsappUrl = "https://wa.me/919437170733?text=Hello!%20I%20am%20interested%20in%20Codename%20Sanskruti.%20Please%20share%20more%20details.";

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE57] text-white px-4 py-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 text-xs font-bold tracking-wider uppercase border border-white/20 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageSquareShare className="w-5 h-5 shrink-0" />
        <span className="hidden sm:inline font-sans">WhatsApp Us</span>
      </a>
    </div>
  );
}
