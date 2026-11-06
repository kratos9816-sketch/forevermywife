import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, X, Star } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function FinalSection() {
  const [showSecretModal, setShowSecretModal] = useState(false);
  const heartRef = useRef(null);

  const triggerConfetti = () => {
    // Beautiful cream, ivory and sage starlight burst (no gold, no burgundy)
    const end = Date.now() + 3.5 * 1000;
    const colors = ['#FFFFFF', '#FAF6EE', '#F4ECE1', '#9EB8AB', '#C4D6CD', '#7A9A8B'];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const handleOneLastThing = () => {
    setShowSecretModal(true);
    triggerConfetti();
  };

  return (
    <section
      id="final"
      className="relative z-20 min-h-screen py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-b from-transparent via-forest-night to-forest-night"
    >
      {/* Central Tiny Glowing Cream Heart */}
      <motion.div
        ref={heartRef}
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative mb-12 flex items-center justify-center"
      >
        {/* Pulsing light rings around heart */}
        <div className="absolute w-24 h-24 rounded-full bg-cream-ivory/20 blur-xl animate-pulse-glow" />
        <div className="absolute w-40 h-40 rounded-full bg-sage-soft/10 blur-2xl animate-pulse" />

        <motion.div
          animate={{
            scale: [1, 1.25, 1, 1.15, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: 'easeInOut',
          }}
          className="relative z-10 w-12 h-12 rounded-full bg-forest-velvet/90 border border-cream-ivory/50 flex items-center justify-center shadow-cream-glow"
        >
          <Heart className="w-6 h-6 text-cream-milk fill-cream-ivory" />
        </motion.div>
      </motion.div>

      {/* Narrative Staggered Reveal */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="font-cinzel text-xs sm:text-sm tracking-[0.4em] text-cream-ivory uppercase mb-6"
      >
        AND AFTER EVERYTHING...
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="font-cormorant text-lg sm:text-2xl md:text-3xl text-cream-ivory/90 max-w-2xl leading-relaxed italic mb-12 font-light space-y-2"
      >
        <p>AFTER ALL THE STARS,</p>
        <p>ALL THE GALAXIES,</p>
        <p>ALL THE WORDS,</p>
        <p>ALL THE PROMISES...</p>
        <p className="font-playfair text-xl sm:text-3xl text-cream-light font-normal not-italic pt-4 tracking-wider">
          IT STILL COMES DOWN TO ONE THING.
        </p>
      </motion.div>

      {/* Cream filigree divider */}
      <div className="cream-filigree-divider max-w-xs mx-auto mb-12">
        <Sparkles className="w-4 h-4 text-cream-ivory shrink-0" />
      </div>

      {/* The Grand Emotional Climax Typography: "I LOVE YOU, KIRTHIKHA." */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="my-6 relative"
      >
        <h2 className="font-playfair text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-wider text-cream-shimmer drop-shadow-2xl leading-tight">
          I LOVE YOU,
          <br />
          KIRTHIKHA.
        </h2>
        {/* Soft Cream aura glow */}
        <div className="absolute -inset-8 bg-cream-ivory/15 blur-3xl rounded-full -z-10" />
      </motion.div>

      {/* Cadence of Love */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.2 }}
        className="mt-8 mb-16 space-y-2 font-cormorant text-lg sm:text-2xl text-sage-mist italic"
      >
        <p>More than the universe.</p>
        <p>More than words.</p>
        <p>More than yesterday.</p>
        <p className="font-semibold text-cream-milk text-xl sm:text-3xl font-playfair not-italic pt-1">
          And I'll keep loving you tomorrow.
        </p>
      </motion.div>

      {/* Final Handwritten Signature */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 1.5 }}
        className="mb-16 flex flex-col items-center"
      >
        <p className="font-cormorant text-xs sm:text-sm tracking-[0.3em] uppercase text-cream-ivory/80 mb-2">
          Forever Yours,
        </p>
        <p className="font-script text-5xl sm:text-7xl text-sage-mist font-normal flex items-center gap-2">
          Your boy
          <span className="text-3xl sm:text-4xl text-sage-deep">💚</span>
        </p>
      </motion.div>

      {/* Final Animated Button: "ONE LAST THING..." */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.8 }}
        className="relative group"
      >
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cream-ivory via-sage-soft to-cream-milk opacity-50 blur-md group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />

        <button
          onClick={handleOneLastThing}
          className="relative px-8 sm:px-12 py-3.5 sm:py-4.5 rounded-full bg-gradient-to-r from-forest-deep via-forest-velvet to-forest-deep text-cream-milk font-cinzel text-xs sm:text-sm tracking-[0.28em] uppercase font-bold border border-cream-ivory/60 shadow-cream-glow hover:shadow-cream-glow-lg transition-all duration-300 flex items-center gap-3 group-hover:scale-105"
        >
          <Sparkles className="w-4 h-4 text-cream-light animate-spin-very-slow" />
          <span>ONE LAST THING...</span>
          <Heart className="w-4 h-4 text-sage-mist fill-sage-soft/50 group-hover:scale-125 transition-transform duration-300" />
        </button>
      </motion.div>

      {/* Secret Emotional Modal */}
      <AnimatePresence>
        {showSecretModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-xl w-full p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-forest-velvet via-forest-deep to-forest-night border-2 border-cream-ivory/60 shadow-cream-glow-lg text-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowSecretModal(false)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-forest-night border border-sage-soft/40 text-cream-light hover:text-white flex items-center justify-center transition-colors"
                aria-label="Close message"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-forest-deep border-2 border-cream-ivory flex items-center justify-center shadow-cream-glow animate-bounce">
                  <Heart className="w-8 h-8 text-cream-milk fill-cream-milk" />
                </div>
              </div>

              <span className="font-cinzel text-xs tracking-[0.3em] uppercase text-sage-mist mb-4 block">
                The Secret of My Heart
              </span>

              <h3 className="font-playfair text-2xl sm:text-4xl font-bold text-cream-shimmer leading-snug mb-6">
                Thank you for being my favourite person, Panniyaram. 💚
              </h3>

              <p className="font-cormorant text-lg sm:text-xl text-cream-ivory/90 italic leading-relaxed mb-8">
                Every smile of yours brightens up every star in my sky. Whatever comes, I will always be right here, loving you more with every passing second.
              </p>

              <div className="flex justify-center">
                <button
                  onClick={() => {
                    setShowSecretModal(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-2.5 rounded-full bg-forest-night border border-sage-soft/50 font-cinzel text-xs text-cream-light tracking-widest uppercase hover:bg-cream-ivory hover:text-forest-night transition-all"
                >
                  Relive Our Universe From The Beginning ✨
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
