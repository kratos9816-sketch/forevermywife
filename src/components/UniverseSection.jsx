import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe2, Sparkles, Orbit, Compass, Heart } from 'lucide-react';

export default function UniverseSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: '-100px' });
  const revealRef = useRef(null);
  const isRevealInView = useInView(revealRef, { once: false, margin: '-80px' });

  const cosmicFacts = [
    {
      icon: Orbit,
      number: '2,000,000,000,000+',
      label: 'Known Galaxies',
      sub: 'Yet in all of them, only you hold my soul',
    },
    {
      icon: Sparkles,
      number: '100,000,000,000,000,000,000,000+',
      label: 'Shining Stars',
      sub: 'Not one shines as brightly as your eyes',
    },
    {
      icon: Globe2,
      number: '93 Billion Light Years',
      label: 'Observable Cosmos',
      sub: 'Smaller than the depth of my love for you',
    },
    {
      icon: Heart,
      number: '1 in Infinity',
      label: 'My Destiny',
      sub: 'My one and only Panniyaram',
    },
  ];

  return (
    <section
      id="universe"
      ref={containerRef}
      className="relative z-20 min-h-screen py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col items-center justify-center"
    >
      {/* Decorative Galaxy Core Visual Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[650px] h-[300px] sm:h-[650px] pointer-events-none -z-10">
        <div className="absolute inset-0 rounded-full border border-sage-soft/20 animate-spin-very-slow" />
        <div className="absolute inset-12 rounded-full border border-cream-ivory/15 [animation-direction:reverse] animate-spin-very-slow" />
        <div className="absolute inset-28 rounded-full border border-cream-milk/25 animate-spin-very-slow" />
        <div className="absolute inset-20 bg-gradient-radial from-forest-velvet/70 via-sage-soft/10 to-transparent rounded-full blur-2xl" />
      </div>

      {/* Chapter Marker */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-forest-velvet/80 border border-sage-soft/30 text-cream-light text-xs font-cinzel tracking-[0.25em]"
      >
        <Compass className="w-3.5 h-3.5 text-sage-mist" />
        <span>CHAPTER I &bull; THE INFINITE HORIZON</span>
      </motion.div>

      {/* Main Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="font-cinzel text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-center text-cream-gradient max-w-4xl leading-tight sm:leading-snug mb-10"
      >
        THE UNIVERSE MAY HAVE NO END.
        <br />
        <span className="text-cream-light font-playfair font-normal italic">
          BUT MY LOVE FOR YOU IS GREATER.
        </span>
      </motion.h2>

      {/* Cream filigree divider */}
      <div className="cream-filigree-divider max-w-md mx-auto mb-16">
        <Sparkles className="w-4 h-4 text-cream-ivory shrink-0" />
      </div>

      {/* Narrative Section Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full items-stretch mb-20">
        {/* Left Narrative Prose */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass-forest-card rounded-2xl p-8 sm:p-10 flex flex-col justify-center space-y-6"
        >
          <p className="font-cormorant text-xl sm:text-2xl text-cream-ivory leading-relaxed font-light">
            Just imagine how enormous this universe is.
          </p>

          <div className="pl-4 border-l-2 border-sage-soft/40 space-y-2 text-sage-mist font-cormorant text-lg sm:text-xl italic">
            <p>Billions of galaxies.</p>
            <p>Trillions of stars.</p>
            <p>Endless possibilities.</p>
            <p>Worlds we haven't even discovered.</p>
          </div>

          <p className="font-cormorant text-lg sm:text-xl text-cream-ivory/80 leading-relaxed">
            And still, somehow, all of that feels smaller than what I feel for you.
          </p>

          <p className="font-cormorant text-lg sm:text-xl text-cream-light italic leading-relaxed">
            If the universe keeps expanding forever, let it.
            <br />
            My love will always go beyond it.
          </p>
        </motion.div>

        {/* Right Cosmic Metrics / Comparison Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {cosmicFacts.map((fact, idx) => {
            const Icon = fact.icon;
            return (
              <div
                key={idx}
                className="glass-forest-card rounded-xl p-5 flex flex-col justify-between group hover:border-cream-ivory/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-cinzel text-sage-mist tracking-widest uppercase">
                    Scale
                  </span>
                  <Icon className="w-5 h-5 text-cream-light group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="text-cream-shimmer font-cinzel text-sm sm:text-base font-bold mb-1 break-all">
                    {fact.number}
                  </div>
                  <div className="text-cream-ivory font-playfair text-sm font-semibold mb-1">
                    {fact.label}
                  </div>
                  <div className="text-xs font-cormorant text-sage-mist/90 italic">
                    {fact.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Prose continuation */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="font-cormorant text-lg sm:text-2xl text-center text-cream-ivory/90 max-w-3xl leading-relaxed mb-16 italic font-light"
      >
        &ldquo;There is no measurement, no distance, no number and no language that can ever explain how much I love you. You're not just a part of my universe, Panniyaram...&rdquo;
      </motion.p>

      {/* Powerful Cinematic Climax Reveal */}
      <div ref={revealRef} className="w-full flex justify-center my-6">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={isRevealInView ? { scale: 1, opacity: 1 } : { scale: 0.85, opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative px-8 sm:px-16 py-10 sm:py-14 rounded-3xl overflow-hidden text-center max-w-4xl w-full border border-cream-ivory/40 bg-gradient-to-b from-forest-velvet/90 via-forest-deep/95 to-forest-night shadow-cream-glow-lg"
        >
          {/* Radial shockwave backdrop */}
          <div className="absolute inset-0 bg-radial-gradient from-cream-ivory/10 via-transparent to-transparent pointer-events-none" />

          {/* Ornamental corner motifs */}
          <span className="absolute top-4 left-4 text-cream-ivory/50 text-lg">✦</span>
          <span className="absolute top-4 right-4 text-cream-ivory/50 text-lg">✦</span>
          <span className="absolute bottom-4 left-4 text-cream-ivory/50 text-lg">✦</span>
          <span className="absolute bottom-4 right-4 text-cream-ivory/50 text-lg">✦</span>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isRevealInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="flex items-center justify-center gap-2 text-xs font-cinzel text-cream-ivory tracking-[0.3em] uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-cream-light" />
            <span>The Eternal Truth</span>
            <Sparkles className="w-3.5 h-3.5 text-cream-light" />
          </motion.div>

          <motion.h3
            initial={{ letterSpacing: '0.05em' }}
            animate={isRevealInView ? { letterSpacing: '0.15em' } : {}}
            transition={{ duration: 1.8 }}
            className="font-playfair text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-cream-shimmer drop-shadow-2xl leading-tight"
          >
            YOU ARE MY ENTIRE UNIVERSE.
          </motion.h3>

          <p className="mt-4 font-script text-2xl sm:text-3xl text-sage-mist">
            In this world, and in every cosmos that ever exists.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
