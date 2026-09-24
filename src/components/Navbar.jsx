import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Price List', href: '#price-list' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active section detection
      const sections = navLinks.map((link) => link.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      }
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[var(--color-primary)]/95 backdrop-blur-md shadow-sm border-b border-[var(--color-gold)]/20 py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-5 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full border-2 border-[var(--color-gold)] scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500"></div>
              <img src="/logo.jpeg" alt="MFK Studio" className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border border-[var(--color-gold)]/50 shadow-md relative z-10" />
            </div>
            <div className="flex flex-col">
              <span className={`font-cinzel font-bold text-lg leading-none tracking-widest transition-colors duration-300 ${isScrolled ? 'text-[var(--color-dark-brown)]' : 'text-white'}`}>
                MFK
              </span>
              <span className={`text-[9px] uppercase tracking-[0.3em] font-medium transition-colors duration-300 ${isScrolled ? 'text-[var(--color-gold)]' : 'text-white/80'}`}>
                Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'text-[var(--color-gold)] border-b border-[var(--color-gold)]'
                    : isScrolled
                      ? 'text-[var(--color-dark-brown)] hover:text-[var(--color-gold)]'
                      : 'text-white hover:text-[var(--color-gold)]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => window.dispatchEvent(new Event('openBookingModal'))}
              className="bg-[var(--color-gold)] text-white px-6 py-2.5 rounded hover:bg-[#a67b2c] transition-colors font-medium text-sm"
            >
              Book Appointment
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden focus:outline-none ${isScrolled ? 'text-[var(--color-dark-brown)]' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

    {/* Mobile Menu Card */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-[95] md:hidden"
            />
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:hidden pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="w-full max-w-sm bg-[var(--color-primary)] rounded-3xl p-8 shadow-2xl flex flex-col border border-[var(--color-gold)]/20 pointer-events-auto"
              >
                {/* Top bar with Logo and Close */}
                <div className="flex justify-between items-center mb-10">
                  <img src="/logo.jpeg" alt="MFK Studio" className="h-12 w-12 rounded-full object-cover border border-[var(--color-gold)]/40 shadow-sm" />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[var(--color-dark-brown)] hover:text-[var(--color-gold)] transition-colors p-2 bg-black/5 rounded-full"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className={`text-lg font-serif tracking-widest transition-all duration-300 flex items-center gap-4 ${
                        activeSection === link.href.substring(1)
                          ? 'text-[var(--color-gold)] translate-x-2'
                          : 'text-[var(--color-dark-brown)] hover:text-[var(--color-gold)] hover:translate-x-2'
                      }`}
                    >
                      {activeSection === link.href.substring(1) && (
                        <span className="w-6 h-px bg-[var(--color-gold)]" />
                      )}
                      {link.name.toUpperCase()}
                    </a>
                  ))}
                </nav>

                {/* Bottom Section */}
                <div className="mt-8 border-t border-[var(--color-gold)]/20 pt-8">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.dispatchEvent(new Event('openBookingModal'));
                    }}
                    className="w-full text-center bg-[var(--color-gold)] text-white hover:bg-[#a67b2c] px-6 py-4 rounded-xl font-medium tracking-widest uppercase text-sm transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Book Appointment
                  </button>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
