import React, { useState, useEffect } from 'react';
import { Sparkles, Heart, Menu, X } from 'lucide-react';

export default function Navbar({ onNavigate, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'universe', label: 'Cosmos' },
    { id: 'world', label: 'Devotion' },
    { id: 'forgive', label: 'My Heart' },
    { id: 'souls', label: 'Destiny' },
    { id: 'promise', label: 'Promises' },
    { id: 'final', label: 'Forever' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-500 py-3 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Monogram Brand */}
        <button
          onClick={() => onNavigate('opening')}
          className="flex items-center gap-2 group text-left"
          aria-label="Back to Opening"
        >
          <div className="w-8 h-8 rounded-full bg-forest-velvet/90 border border-sage-soft/50 flex items-center justify-center shadow-cream-glow group-hover:border-cream-ivory transition-colors">
            <Heart className="w-4 h-4 text-cream-milk fill-sage-soft/40 group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel text-xs sm:text-sm font-bold tracking-widest text-cream-light group-hover:text-cream-shimmer">
              KIRTHIKHA
            </span>
            <span className="font-cormorant text-[10px] text-sage-mist italic -mt-1">
              & My Universe
            </span>
          </div>
        </button>

        {/* Desktop Navigation Pill */}
        <nav aria-label="Main chapters" className="hidden md:flex items-center gap-1 px-5 py-2 rounded-full bg-forest-velvet/80 backdrop-blur-md border border-sage-soft/30 shadow-forest-deep">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-cinzel tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-cream-ivory/20 text-cream-milk font-bold border border-cream-ivory/50 shadow-cream-glow'
                    : 'text-cream-ivory/70 hover:text-cream-light hover:bg-forest-deep/50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-9 h-9 rounded-full bg-forest-velvet/90 border border-sage-soft/40 text-cream-light flex items-center justify-center shadow-md"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 rounded-2xl bg-forest-velvet/95 backdrop-blur-lg border border-sage-soft/40 shadow-forest-deep flex flex-col gap-2 animate-fadeIn">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-left py-2 px-3 rounded-lg text-sm font-cinzel text-cream-ivory/90 hover:text-cream-light hover:bg-forest-deep/50 tracking-wider flex items-center justify-between"
            >
              <span>{link.label}</span>
              <Sparkles className="w-3 h-3 text-sage-mist" />
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
