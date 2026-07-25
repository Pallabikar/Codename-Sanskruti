'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import BookSiteVisitForm from '@/components/sections/BookSiteVisitForm';

interface BookSiteVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookSiteVisitModal({ isOpen, onClose }: BookSiteVisitModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg z-10 my-auto"
          >
            {/* High-Visibility Cross / Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-brand-charcoal text-white hover:bg-brand-orange shadow-xl flex items-center justify-center transition-all duration-300 border border-white/20 cursor-pointer group hover:scale-110"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
            </button>

            <BookSiteVisitForm isCompact={true} onSuccessCallback={() => {
              setTimeout(() => {
                onClose();
              }, 4000);
            }} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
