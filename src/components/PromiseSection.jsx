import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Sun, CloudRain, CheckCircle, Infinity as InfinityIcon } from 'lucide-react';

export default function PromiseSection() {
  const vows = [
    {
      icon: Sun,
      situation: "On the happiest days",
      vow: "To laugh with you until our cheeks hurt and celebrate every victory together.",
      accent: "from-cream-ivory/15 to-transparent",
    },
    {
      icon: CloudRain,
      situation: "On the difficult days",
      vow: "To be your safe anchor, hold your hand tight, and weather any storm with you.",
      accent: "from-sage-soft/20 to-transparent",
    },
    {
      icon: Sparkles,
      situation: "When everything feels easy",
      vow: "To never take a single second of your sweetness and laughter for granted.",
      accent: "from-cream-milk/20 to-transparent",
    },
    {
      icon: CheckCircle,
      situation: "When we have to work through things",
      vow: "To always listen, apologize with humility, and choose understanding over pride.",
      accent: "from-forest-velvet/40 to-transparent",
    },
  ];

  return (
    <section
      id="promise"
      className="relative z-20 min-h-screen py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Chapter Marker */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-forest-velvet/80 border border-sage-soft/30 text-cream-light text-xs font-cinzel tracking-[0.25em]"
      >
        <InfinityIcon className="w-3.5 h-3.5 text-sage-mist" />
        <span>CHAPTER V &bull; THE SACRED VOW</span>
      </motion.div>

      {/* Main Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="font-cinzel text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-center text-cream-gradient max-w-4xl leading-tight sm:leading-snug mb-8"
      >
        IN EVERY LIFETIME,
        <br />
        <span className="text-cream-light font-playfair font-normal italic">
          I'LL FIND YOU.
        </span>
      </motion.h2>

      {/* Cream filigree divider */}
      <div className="cream-filigree-divider max-w-md mx-auto mb-16">
        <Sparkles className="w-4 h-4 text-cream-ivory shrink-0" />
      </div>

      {/* Introductory Vow Declaration */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="glass-forest-card rounded-2xl p-8 sm:p-12 max-w-3xl w-full text-center mb-16 relative overflow-hidden"
      >
        <div className="space-y-4 font-cormorant text-xl sm:text-2xl text-cream-ivory leading-relaxed font-light">
          <p className="italic text-cream-light font-playfair text-2xl sm:text-3xl">
            &ldquo;If there are a million lifetimes, I'll find you in every one.
            <br />
            If there are a million universes, I'll search for you in every one.&rdquo;
          </p>

          <p className="pt-2 text-sage-mist">
            If I could choose again and again, my answer would never change.
          </p>
        </div>
      </motion.div>

      {/* The Four Sacred Promises Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-16">
        {vows.map((vow, idx) => {
          const Icon = vow.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="glass-forest-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group hover:border-cream-ivory/50 transition-all duration-300 relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${vow.accent} opacity-30 pointer-events-none`}
              />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-forest-night/80 border border-sage-soft/40 flex items-center justify-center text-cream-light group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-cream-light" />
                  </div>
                  <span className="text-xs font-cinzel text-sage-mist tracking-widest uppercase">
                    Promise {idx + 1}
                  </span>
                </div>

                <h4 className="font-playfair text-xl sm:text-2xl text-cream-shimmer font-bold mb-3">
                  I'll choose you {vow.situation.toLowerCase()}
                </h4>

                <p className="font-cormorant text-lg text-cream-ivory/80 italic leading-relaxed">
                  {vow.vow}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-sage-soft/15 flex items-center gap-2 text-xs font-cinzel text-sage-mist tracking-wider">
                <Heart className="w-3.5 h-3.5 text-sage-mist fill-sage-soft/30" />
                <span>My solemn promise to Panniyaram</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Climax Building Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full max-w-3xl text-center space-y-6 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-forest-velvet/90 to-forest-deep border border-sage-soft/40 shadow-cream-glow"
      >
        <p className="font-cormorant text-xl sm:text-2xl text-cream-ivory leading-relaxed font-light">
          I don't promise that every day will be perfect.
          <br />
          <span className="font-playfair text-2xl sm:text-3xl text-cream-light font-semibold">
            I promise that I want to keep building something beautiful with you.
          </span>
        </p>

        <div className="py-4 px-6 rounded-xl bg-forest-night/80 border border-sage-soft/30 inline-block">
          <p className="font-script text-3xl sm:text-5xl text-cream-shimmer">
            &ldquo;My favourite chapter will always be the one where you're beside me.&rdquo;
          </p>
        </div>
      </motion.div>
    </section>
  );
}
