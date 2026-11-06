import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export default function ProgressIndicator({ activeSection, onNavigate }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: 'opening', name: 'Prologue', subtitle: 'The Discovery' },
    { id: 'universe', name: 'Infinite Cosmos', subtitle: 'Bigger Than The Universe' },
    { id: 'world', name: 'Unshakable', subtitle: 'Against The Entire World' },
    { id: 'forgive', name: 'Tender Heart', subtitle: 'Please Forgive Me' },
    { id: 'souls', name: 'Two Souls', subtitle: 'One Destiny' },
    { id: 'promise', name: 'Forever Promise', subtitle: 'In Every Lifetime' },
    { id: 'final', name: 'Eternal Truth', subtitle: 'I Love You' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside aria-label="Journey progress" className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center">
      {/* Cream & Sage Constellation Spine */}
      <div className="relative flex flex-col items-center py-4">
        {/* Background track line */}
        <div className="absolute top-0 bottom-0 w-[1px] bg-sage-soft/25" />
        
        {/* Dynamic filled line */}
        <div
          className="absolute top-0 w-[2px] bg-gradient-to-b from-cream-milk via-cream-ivory to-sage-soft shadow-cream-glow transition-all duration-150"
          style={{ height: `${scrollProgress}%` }}
        />

        {/* Section Star Nodes */}
        <div className="flex flex-col gap-6 relative z-10">
          {sections.map((sec, idx) => {
            const isActive = activeSection === sec.id;
            return (
              <div key={sec.id} className="group relative flex items-center justify-center">
                <button
                  onClick={() => onNavigate(sec.id)}
                  aria-label={`Jump to ${sec.name} - ${sec.subtitle}`}
                  className={`relative flex items-center justify-center transition-all duration-300 rounded-full ${
                    isActive
                      ? 'w-4 h-4 bg-cream-milk shadow-cream-glow scale-125'
                      : 'w-2.5 h-2.5 bg-forest-velvet border border-sage-soft/60 group-hover:border-cream-milk group-hover:scale-110'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-cream-milk/50 animate-ping" />
                  )}
                </button>

                {/* Elegant Hover / Active Tooltip */}
                <div className="absolute right-7 px-3 py-1.5 rounded-lg bg-forest-velvet/95 backdrop-blur-md border border-sage-soft/40 shadow-forest-deep pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap flex flex-col items-end">
                  <span className="font-cinzel text-xs text-cream-milk font-semibold tracking-wider flex items-center gap-1.5">
                    {idx + 1}. {sec.name}
                  </span>
                  <span className="font-cormorant text-[11px] text-sage-mist italic">
                    {sec.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Numerical percentage display */}
      <div className="mt-2 text-[10px] font-cinzel text-sage-mist/80 tracking-widest flex items-center gap-1">
        <Sparkles className="w-2.5 h-2.5 text-cream-light" />
        {Math.round(scrollProgress)}%
      </div>
    </aside>
  );
}
