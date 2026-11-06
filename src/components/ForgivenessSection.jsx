import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Mail, Feather, Smile } from 'lucide-react';

export default function ForgivenessSection() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section
      id="forgive"
      className="relative z-20 min-h-screen py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center justify-center transition-all duration-700"
    >
      {/* Chapter Marker */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-forest-velvet/80 border border-sage-soft/30 text-cream-light text-xs font-cinzel tracking-[0.25em]"
      >
        <Feather className="w-3.5 h-3.5 text-sage-mist" />
        <span>CHAPTER III &bull; FROM THE DEPTH OF MY HEART</span>
      </motion.div>

      {/* Main Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-bold tracking-wider text-center text-cream-shimmer max-w-4xl leading-tight mb-8"
      >
        MY SWEET PANNIYARAM,
        <br />
        <span className="text-sage-mist font-playfair font-normal italic">
          PLEASE DON'T STAY ANGRY WITH ME.
        </span>
      </motion.h2>

      {/* Tender Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-center font-cormorant text-lg sm:text-xl text-cream-ivory/80 max-w-2xl mb-12 italic"
      >
        Click the cream parchment envelope below to read the words I hold closest to my heart.
      </motion.p>

      {/* Royal Parchment Letter & Envelope Container */}
      <div className="w-full max-w-3xl relative">
        {/* Envelope toggle tab */}
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-cream-ivory text-forest-deep font-cinzel text-xs tracking-widest uppercase font-semibold shadow-lg hover:bg-cream-milk transition-all border border-sage-soft/50 hover:scale-105"
          >
            <Mail className="w-3.5 h-3.5 text-forest-deep" />
            {isOpen ? 'Fold Letter Envelope' : 'Open Letter for Panniyaram'}
          </button>
        </div>

        <AnimatePresence mode="wait">
          {isOpen ? (
            /* Open Parchment Letter (Creamy Ivory with Deep Forest Typography) */
            <motion.div
              key="letter-open"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl p-8 sm:p-14 lg:p-16 text-forest-night shadow-2xl overflow-hidden border-2 border-sage-soft/60"
              style={{
                backgroundColor: '#F5EFE0',
                backgroundImage: 'radial-gradient(#E8DEC8 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            >
              {/* Parchment Vintage Vignette & Corner Watermarks */}
              <div className="absolute inset-0 bg-gradient-to-b from-stone-50/40 via-transparent to-stone-100/50 pointer-events-none" />
              
              {/* Corner floral accents */}
              <span className="absolute top-4 left-4 text-sage-deep font-serif text-2xl select-none opacity-50">❧</span>
              <span className="absolute top-4 right-4 text-sage-deep font-serif text-2xl select-none opacity-50 rotate-90">❧</span>
              <span className="absolute bottom-4 left-4 text-sage-deep font-serif text-2xl select-none opacity-50 -rotate-90">❧</span>
              <span className="absolute bottom-4 right-4 text-sage-deep font-serif text-2xl select-none opacity-50 rotate-180">❧</span>

              {/* Emerald Wax Seal Stamp on Top of Letter */}
              <div className="flex items-center justify-between border-b border-forest-deep/15 pb-6 mb-8">
                <div className="flex items-center gap-2">
                  <span className="font-cinzel text-xs tracking-[0.25em] text-forest-deep/70 uppercase">
                    A Letter of Sincerity
                  </span>
                </div>
                {/* Wax Seal Embellishment */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-forest-velvet shadow-md border-2 border-cream-ivory flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform">
                  <Heart className="w-5 h-5 text-cream-milk fill-cream-milk/40" />
                </div>
              </div>

              {/* Letter Salutation */}
              <p className="font-playfair text-xl sm:text-2xl text-forest-deep font-bold mb-6 italic">
                My Dearest Kirthikha,
              </p>

              {/* Letter Body - Intimate & Emotional in Deep Emerald/Forest */}
              <div className="space-y-5 font-cormorant text-lg sm:text-xl text-forest-deep/90 leading-relaxed">
                <p className="font-semibold text-forest-night text-xl sm:text-2xl">
                  I know I'm not perfect.
                </p>

                <div className="pl-4 sm:pl-6 border-l-2 border-forest-deep/30 space-y-1.5 italic text-forest-night/80 text-base sm:text-lg">
                  <p>Sometimes I might make mistakes.</p>
                  <p>Sometimes I might say something wrong.</p>
                  <p>Sometimes I might hurt you without even realizing it.</p>
                </div>

                <p className="font-medium text-forest-deep">
                  But please, my love, never mistake my imperfections for a lack of love.
                </p>

                <p className="text-xl sm:text-2xl font-playfair italic text-forest-night py-2">
                  If you're angry with me, please forgive me.
                </p>

                <p>
                  I never want my ego to become bigger than our relationship.
                </p>

                <p>
                  I never want a temporary misunderstanding to make you question something that means so much to me.
                </p>

                <p className="font-playfair text-xl sm:text-2xl font-bold text-forest-deep">
                  I love you. I really, really do.
                </p>

                <p>
                  And even when things aren't perfect, I still want us to choose each other, understand each other and grow together.
                </p>

                {/* Emotional Highlight */}
                <div className="p-4 rounded-xl bg-cream-light border border-sage-soft/40 my-6 flex items-center gap-3">
                  <Smile className="w-6 h-6 text-sage-deep shrink-0" />
                  <p className="font-playfair font-semibold text-forest-night text-base sm:text-lg italic">
                    &ldquo;Your smile means more to me than winning an argument.&rdquo;
                  </p>
                </div>
              </div>

              {/* Animated Handwritten Signature */}
              <div className="mt-10 pt-6 border-t border-forest-deep/20 flex flex-col items-end">
                <p className="font-cormorant text-sm uppercase tracking-widest text-forest-deep/70 mb-1">
                  Forever Devoted,
                </p>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  className="font-script text-4xl sm:text-6xl text-forest-deep pr-2 font-normal"
                >
                  Always your boy.
                </motion.div>
                <span className="text-sage-deep text-lg mt-1">💚</span>
              </div>
            </motion.div>
          ) : (
            /* Closed Royal Envelope State */
            <motion.div
              key="letter-closed"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              onClick={() => setIsOpen(true)}
              className="cursor-pointer group relative mx-auto w-full max-w-lg aspect-[16/10] rounded-2xl bg-gradient-to-br from-cream-ivory via-cream-warm to-cream-ivory shadow-2xl border-2 border-sage-soft/50 flex flex-col items-center justify-center p-8 transition-transform hover:scale-[1.02]"
            >
              {/* Envelope flap lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <line x1="0" y1="0" x2="50" y2="48" stroke="#7A9A8B" strokeWidth="0.8" opacity="0.6" />
                  <line x1="100" y1="0" x2="50" y2="48" stroke="#7A9A8B" strokeWidth="0.8" opacity="0.6" />
                </svg>
              </div>

              {/* Forest Velvet Wax Seal in Center */}
              <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-forest-velvet shadow-xl border-2 border-cream-ivory flex flex-col items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-cream-milk fill-cream-milk/50" />
                <span className="text-[9px] font-cinzel text-cream-ivory tracking-widest uppercase mt-0.5">
                  OPEN
                </span>
              </div>

              <div className="relative z-10 mt-6 text-center">
                <p className="font-playfair text-xl font-bold text-forest-deep">
                  For My Sweet Panniyaram
                </p>
                <p className="font-script text-lg text-forest-deep/80 mt-1">
                  Touch to unseal my heart
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
