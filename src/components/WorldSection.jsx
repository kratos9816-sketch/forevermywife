import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Leaf, Heart, Compass } from 'lucide-react';

export default function WorldSection() {
  const corePrinciples = [
    {
      title: 'Not the world.',
      description: 'Its size, its noise, its fleeting millions mean nothing beside you.',
    },
    {
      title: 'Not the opinions.',
      description: 'Let them speak or doubt. My loyalty to you is carved in stone.',
    },
    {
      title: 'Not the circumstances.',
      description: 'Through quiet peaceful valleys or through towering wild mountains.',
    },
  ];

  return (
    <section
      id="world"
      className="relative z-20 min-h-screen py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Dramatic Emerald Forest Lighting Accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-forest-velvet/60 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sage-soft/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Chapter Marker */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-forest-velvet/80 border border-sage-soft/30 text-cream-light text-xs font-cinzel tracking-[0.25em]"
      >
        <Shield className="w-3.5 h-3.5 text-sage-mist" />
        <span>CHAPTER II &bull; UNSHAKABLE DEVOTION</span>
      </motion.div>

      {/* Main Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="font-cinzel text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-center text-cream-gradient max-w-5xl leading-tight sm:leading-snug mb-8"
      >
        LET THE ENTIRE WORLD STAND AGAINST US.
        <br />
        <span className="text-cream-light font-playfair font-normal italic">
          I'LL STILL CHOOSE YOU.
        </span>
      </motion.h2>

      {/* Cream filigree divider */}
      <div className="cream-filigree-divider max-w-md mx-auto mb-16">
        <Leaf className="w-4 h-4 text-cream-ivory shrink-0" />
      </div>

      {/* Core Narrative Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full mb-16">
        {/* Left Column: Bold Stance */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-7 glass-forest-card rounded-2xl p-8 sm:p-12 space-y-6"
        >
          <div className="space-y-3 font-cormorant text-xl sm:text-2xl text-cream-ivory font-light leading-relaxed">
            <p className="text-cream-milk font-medium text-2xl sm:text-3xl font-playfair">
              I don't care how big the world is.
            </p>
            <p>I don't care how many people disagree.</p>
            <p>I don't care how difficult the journey becomes.</p>
          </div>

          <div className="p-6 rounded-xl bg-forest-velvet/70 border-l-4 border-sage-soft my-6">
            <p className="font-cormorant text-lg sm:text-2xl text-cream-light italic leading-relaxed">
              &ldquo;If one day the entire world stands against us, I will still stand beside you.
              I would rather face a thousand storms holding your hand than experience a thousand beautiful days without you.&rdquo;
            </p>
          </div>

          <p className="font-cinzel text-sm sm:text-base text-sage-mist tracking-widest uppercase">
            Nothing is more important to me than you.
          </p>
        </motion.div>

        {/* Right Column: Three Pillars */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {corePrinciples.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="glass-forest-card rounded-xl p-5 border border-sage-soft/25 hover:border-cream-ivory/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-6 rounded-full bg-forest-deep flex items-center justify-center text-xs font-cinzel text-cream-light border border-sage-soft/40">
                  {idx + 1}
                </span>
                <h4 className="font-cinzel text-base sm:text-lg text-cream-light font-bold tracking-wider group-hover:text-cream-shimmer">
                  {pillar.title}
                </h4>
              </div>
              <p className="font-cormorant text-sm sm:text-base text-sage-mist italic pl-9">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dramatic "YOU. ALWAYS YOU." Monolith Reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative w-full max-w-3xl text-center py-12 px-6 rounded-2xl bg-gradient-to-r from-forest-night via-forest-deep to-forest-night border border-cream-ivory/40 shadow-cream-glow"
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-cream-light" />
          <span className="font-cinzel text-xs text-cream-ivory tracking-[0.3em] uppercase">
            My Only Choice
          </span>
          <Sparkles className="w-4 h-4 text-cream-light" />
        </div>

        <h3 className="font-playfair text-4xl sm:text-6xl md:text-7xl font-black text-cream-shimmer tracking-wider drop-shadow-md">
          YOU. ALWAYS YOU.
        </h3>

        <p className="mt-4 font-script text-2xl sm:text-3xl text-sage-mist">
          My hand in yours, through every storm.
        </p>
      </motion.div>
    </section>
  );
}
