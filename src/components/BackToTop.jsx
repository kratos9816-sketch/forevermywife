import React, { useState, useEffect } from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      <button
        onClick={scrollToTop}
        className="w-11 h-11 rounded-full bg-forest-velvet/90 backdrop-blur-md border border-sage-soft/50 text-cream-light hover:text-white flex items-center justify-center shadow-cream-glow hover:border-cream-ivory hover:scale-110 transition-all duration-300"
        title="Return to the Stars"
        aria-label="Return to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
      </button>

      {/* Hover tooltip */}
      <div className="absolute right-14 px-3 py-1 rounded-md bg-forest-night/90 border border-sage-soft/30 text-[11px] font-cinzel text-cream-light tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
        Return to the Stars ✦
      </div>
    </div>
  );
}
