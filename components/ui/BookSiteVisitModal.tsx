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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg z-10 my-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-gray-700 flex items-center justify-center shadow-md transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <BookSiteVisitForm isCompact={true} onSuccessCallback={() => {
              setTimeout(() => {
                onClose();
              }, 3000);
            }} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
