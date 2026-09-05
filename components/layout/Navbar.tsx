'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar, ChevronDown } from 'lucide-react';
import BookSiteVisitModal from '@/components/ui/BookSiteVisitModal';
import BackgroundMusicPlayer from '@/components/ui/BackgroundMusicPlayer';

const PROJECT_ITEMS = [
  { label: 'All Projects', href: '/projects', desc: 'Explore Complete Portfolio' },
  { label: 'Codename Sanskruti', href: '/ongoing-projects/codename-sanskruti', desc: 'Siula, near Uttara square. Beside NH 316' },
  { label: 'Motwani Anantam', href: '/ongoing-projects/motwani-anantam', desc: 'Kesora Square (Beside Puribypass NH 316)' },
  { label: 'Motwani Anandam', href: '/ongoing-projects/motwani-anandam', desc: 'Upcoming Landmark, Bhubaneswar' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
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

  // Close mobile menu & dropdown when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProjectsDropdownOpen(false);
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
            <Link
              href="/"
              className={`relative text-xs tracking-widest font-bold uppercase transition-colors duration-300 py-2 drop-shadow-sm ${
                pathname === '/' ? 'text-brand-orange' : isScrolled ? 'text-brand-charcoal hover:text-brand-orange' : 'text-white hover:text-brand-orange'
              }`}
            >
              Home
            </Link>

            <Link
              href="/about-us"
              className={`relative text-xs tracking-widest font-bold uppercase transition-colors duration-300 py-2 drop-shadow-sm ${
                pathname === '/about-us' ? 'text-brand-orange' : isScrolled ? 'text-brand-charcoal hover:text-brand-orange' : 'text-white hover:text-brand-orange'
              }`}
            >
              About Us
            </Link>

            <Link
              href="/why-us"
              className={`relative text-xs tracking-widest font-bold uppercase transition-colors duration-300 py-2 drop-shadow-sm ${
                pathname === '/why-us' ? 'text-brand-orange' : isScrolled ? 'text-brand-charcoal hover:text-brand-orange' : 'text-white hover:text-brand-orange'
              }`}
            >
              Why Us
            </Link>

            {/* Projects Dropdown Container */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setIsProjectsDropdownOpen(true)}
              onMouseLeave={() => setIsProjectsDropdownOpen(false)}
            >
              <Link
                href="/projects"
                className={`flex items-center gap-1 text-xs tracking-widest font-bold uppercase transition-colors duration-300 drop-shadow-sm ${
                  pathname.includes('project') ? 'text-brand-orange' : isScrolled ? 'text-brand-charcoal hover:text-brand-orange' : 'text-white hover:text-brand-orange'
                }`}
              >
                <span>Projects</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
              </Link>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isProjectsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-72 bg-brand-charcoal text-white rounded-sm shadow-2xl border border-brand-terracotta/20 p-2 overflow-hidden z-50"
                  >
                    {PROJECT_ITEMS.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="block p-3 rounded-xs hover:bg-brand-orange/20 transition-colors group/item"
                      >
                        <span className="font-serif text-sm text-brand-orange font-bold uppercase tracking-wider block group-hover/item:text-white transition-colors">
                          {item.label}
                        </span>
                        <span className="text-[10px] text-gray-400 font-light block leading-tight">
                          {item.desc}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/news"
              className={`relative text-xs tracking-widest font-bold uppercase transition-colors duration-300 py-2 drop-shadow-sm ${
                pathname === '/news' ? 'text-brand-orange' : isScrolled ? 'text-brand-charcoal hover:text-brand-orange' : 'text-white hover:text-brand-orange'
              }`}
            >
              News
            </Link>
          </nav>

          {/* Action Button & Mobile Trigger */}
          <div className="flex items-center gap-4">
            <Link 
              href="tel:+919777979501"
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

            <nav className="flex flex-col gap-4 items-start w-full max-w-sm">
              <Link
                href="/"
                className={`block font-serif text-2xl tracking-widest uppercase transition-all duration-300 ${
                  pathname === '/' ? 'text-brand-orange pl-3 border-l-2 border-brand-orange' : 'text-brand-charcoal hover:text-brand-orange'
                }`}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className={`block font-serif text-2xl tracking-widest uppercase transition-all duration-300 ${
                  pathname === '/about-us' ? 'text-brand-orange pl-3 border-l-2 border-brand-orange' : 'text-brand-charcoal hover:text-brand-orange'
                }`}
              >
                About Us
              </Link>
              <Link
                href="/why-us"
                className={`block font-serif text-2xl tracking-widest uppercase transition-all duration-300 ${
                  pathname === '/why-us' ? 'text-brand-orange pl-3 border-l-2 border-brand-orange' : 'text-brand-charcoal hover:text-brand-orange'
                }`}
              >
                Why Us
              </Link>

              {/* Projects Submenu */}
              <div className="w-full pl-2 border-l-2 border-brand-terracotta/20 py-1">
                <Link
                  href="/projects"
                  className="font-serif text-xl tracking-widest uppercase text-brand-orange font-bold block mb-2"
                >
                  Projects
                </Link>
                <div className="flex flex-col gap-2 pl-3">
                  <Link href="/ongoing-projects/codename-sanskruti" className="text-xs font-semibold text-brand-charcoal hover:text-brand-orange">
                    • Codename Sanskruti
                  </Link>
                  <Link href="/ongoing-projects/motwani-anantam" className="text-xs font-semibold text-brand-charcoal hover:text-brand-orange">
                    • Motwani Anantam (Kesora Sq.)
                  </Link>
                  <Link href="/ongoing-projects/motwani-anandam" className="text-xs font-semibold text-brand-charcoal hover:text-brand-orange">
                    • Motwani Anandam (Upcoming)
                  </Link>
                </div>
              </div>

              <Link
                href="/news"
                className={`block font-serif text-2xl tracking-widest uppercase transition-all duration-300 ${
                  pathname === '/news' ? 'text-brand-orange pl-3 border-l-2 border-brand-orange' : 'text-brand-charcoal hover:text-brand-orange'
                }`}
              >
                News
              </Link>
            </nav>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
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
                href="tel:+919777979501"
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
