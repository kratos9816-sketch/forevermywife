import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

export default function IntroScreen({ onEnterUniverse }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
      className="relative z-30 min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 text-center overflow-hidden"
    >
      {/* Central Emerald & Pine Nebula Glow */}
      <div className="absolute w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-radial from-forest-velvet/60 via-forest-pine/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Cream & Sage Filigree Crest */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="mb-8 flex flex-col items-center"
      >
        <div className="flex items-center gap-3">
          <span className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent via-cream-ivory/60 to-transparent" />
          <Sparkles className="w-4 h-4 text-cream-milk animate-spin-very-slow" />
          <span className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent via-cream-ivory/60 to-transparent" />
        </div>
      </motion.div>

      {/* Opening Intro Line */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="font-cormorant italic text-lg sm:text-2xl md:text-3xl text-sage-mist tracking-wide max-w-xl mx-auto font-light"
      >
        For the girl who became my entire universe...
      </motion.p>

      {/* Grand Name Reveal: Kirthikha ❤️ */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 mb-4 relative"
      >
        <h1 className="font-playfair text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-wider text-cream-shimmer drop-shadow-xl">
          Kirthikha
          <motion.span
            animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
            className="inline-block ml-3 sm:ml-5 text-sage-soft filter drop-shadow-[0_0_18px_rgba(158,184,171,0.7)]"
          >
            💚
          </motion.span>
        </h1>
        {/* Soft Cream aura glow underneath name */}
        <div className="absolute -inset-4 bg-cream-milk/10 blur-2xl rounded-full -z-10" />
      </motion.div>

      {/* Subtitle Message */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.8 }}
        className="font-cormorant text-base sm:text-xl md:text-2xl text-cream-ivory max-w-2xl font-light tracking-wider italic mt-2 mb-10"
      >
        &ldquo;Somewhere between billions of stars, my heart found you.&rdquo;
      </motion.p>

      {/* Cream & Forest Animated "ENTER MY UNIVERSE" Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 2.3 }}
        className="relative group"
      >
        {/* Outer glowing pulsing border */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cream-ivory via-sage-soft to-cream-milk opacity-50 blur-md group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />

        <button
          onClick={onEnterUniverse}
          className="relative px-8 sm:px-12 py-3.5 sm:py-4.5 rounded-full bg-gradient-to-r from-forest-deep via-forest-velvet to-forest-deep text-cream-milk font-cinzel text-xs sm:text-sm tracking-[0.28em] uppercase font-bold border border-cream-ivory/60 shadow-cream-glow hover:shadow-cream-glow-lg transition-all duration-500 flex items-center gap-3 overflow-hidden group-hover:scale-[1.03]"
        >
          {/* Shimmer sweep effect */}
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-cream-milk/30 to-transparent transition-transform ease-in-out pointer-events-none" />

          <Sparkles className="w-4 h-4 text-cream-light animate-spin-very-slow" />
          <span>ENTER MY UNIVERSE</span>
          <Heart className="w-4 h-4 text-sage-mist fill-sage-soft/40 group-hover:scale-125 transition-transform duration-300" />
        </button>
      </motion.div>

      {/* Tender scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-6 flex flex-col items-center gap-1.5 text-[11px] font-cinzel text-sage-mist/80 tracking-widest"
      >
        <span>OUR JOURNEY BEGINS</span>
        <span className="w-1 h-6 bg-gradient-to-b from-cream-ivory/60 to-transparent rounded-full animate-bounce" />
      </motion.div>
    </motion.section>
  );
}
