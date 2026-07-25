'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import BookSiteVisitModal from '@/components/ui/BookSiteVisitModal';
import BackgroundMusicPlayer from '@/components/ui/BackgroundMusicPlayer';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Why Us', href: '/why-us' },
  { label: 'Projects', href: '/ongoing-projects/codename-sanskruti' },
  { label: 'Careers', href: '/careers' },
  { label: 'News', href: '/news' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Auto-open lead capture popup 1.5 seconds after website load
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenAutoSiteVisitPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsModalOpen(true);
        sessionStorage.setItem('hasSeenAutoSiteVisitPopup', 'true');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'glassmorphism py-3 shadow-md' 
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden bg-brand-orange/20 rounded-full flex items-center justify-center p-1 border border-brand-orange/40 shadow-sm">
              <Image 
                src="/logo-icon.png" 
                alt="Motwani Constructions Logo" 
                width={32} 
                height={32}
                className="object-contain transition-transform duration-500 group-hover:rotate-12"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-sm tracking-widest text-brand-orange font-bold uppercase leading-none drop-shadow-sm">
                Motwani
              </span>
              <span className={`font-sans text-[10px] tracking-[0.25em] uppercase font-semibold transition-colors duration-300 ${
                isScrolled ? 'text-brand-terracotta' : 'text-amber-100/90'
              }`}>
                Constructions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-xs tracking-widest font-bold uppercase transition-colors duration-300 py-2 drop-shadow-sm ${
                    isActive 
                      ? 'text-brand-orange' 
                      : isScrolled
                        ? 'text-brand-charcoal hover:text-brand-orange'
                        : 'text-white hover:text-brand-orange'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-orange"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Button & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <BackgroundMusicPlayer />
            <Link 
              href="tel:+919437170733"
              className="hidden lg:flex items-center gap-2 relative overflow-hidden group bg-gradient-to-r from-brand-orange to-brand-terracotta hover:from-brand-terracotta hover:to-brand-orange text-white px-5 py-2.5 rounded-sm text-xs font-bold tracking-widest uppercase transition-transform duration-300 active:scale-95 shadow-lg shadow-brand-orange/20"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 w-1/2 h-full bg-white/25 transform -skew-x-12 -translate-x-full group-hover:animate-shimmer" 
                   style={{ background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)', backgroundSize: '200% 100%' }}
              />
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us Now</span>
            </Link>

            <button 
              onClick={() => setIsModalOpen(true)}
              className={`hidden sm:flex items-center gap-1.5 border px-4 py-2 rounded-sm text-xs font-bold tracking-widest uppercase transition-colors duration-300 cursor-pointer ${
                isScrolled 
                  ? 'border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white'
                  : 'border-white/80 text-white hover:bg-white hover:text-brand-charcoal bg-black/20 backdrop-blur-xs'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Site Visit</span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition-colors ${
                isScrolled ? 'text-brand-charcoal hover:text-brand-orange' : 'text-white hover:text-brand-orange'
              }`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-brand-cream/98 flex flex-col justify-center px-8 md:hidden"
          >
            {/* Background Texture Accents */}
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#8b3a1a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

            <nav className="flex flex-col gap-6 items-start">
              {NAV_LINKS.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08, duration: 0.5, ease: 'easeOut' }}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      className={`block font-serif text-3xl tracking-widest uppercase transition-all duration-300 ${
                        isActive 
                          ? 'text-brand-orange pl-4 border-l-2 border-brand-orange' 
                          : 'text-brand-charcoal hover:text-brand-orange hover:translate-x-2'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.08, duration: 0.5 }}
              className="mt-12 flex flex-col gap-4 w-full max-w-sm"
            >
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="flex items-center justify-center gap-3 bg-brand-orange text-white py-4 rounded-sm text-sm font-bold tracking-widest uppercase shadow-lg shadow-brand-orange/20 hover:bg-brand-terracotta transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Free Site Visit</span>
              </button>
              
              <Link 
                href="tel:+919437170733"
                className="flex items-center justify-center gap-2 border border-brand-charcoal py-4 rounded-sm text-sm font-bold tracking-widest uppercase hover:bg-brand-charcoal hover:text-brand-cream transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us Now</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <BookSiteVisitModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
