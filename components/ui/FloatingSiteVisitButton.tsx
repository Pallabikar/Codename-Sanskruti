'use client';

import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import BookSiteVisitModal from './BookSiteVisitModal';

export default function FloatingSiteVisitButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsModalOpen(true)}
          className="group relative flex items-center gap-2.5 bg-gradient-to-r from-brand-orange to-brand-terracotta text-white px-5 py-3.5 rounded-full shadow-2xl hover:shadow-brand-orange/40 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 text-xs font-bold tracking-wider uppercase border border-white/20"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400"></span>
          </span>
          <Calendar className="w-4 h-4" />
          <span>Book Free Site Visit</span>
        </button>
      </div>

      <BookSiteVisitModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
