import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CosmicBackground from './components/CosmicBackground.jsx';
import FloatingPetals from './components/FloatingPetals.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import AudioPlayer from './components/AudioPlayer.jsx';
import Navbar from './components/Navbar.jsx';
import ProgressIndicator from './components/ProgressIndicator.jsx';
import BackToTop from './components/BackToTop.jsx';
import IntroScreen from './components/IntroScreen.jsx';
import UniverseSection from './components/UniverseSection.jsx';
import WorldSection from './components/WorldSection.jsx';
import ForgivenessSection from './components/ForgivenessSection.jsx';
import SoulmatesSection from './components/SoulmatesSection.jsx';
import PromiseSection from './components/PromiseSection.jsx';
import FinalSection from './components/FinalSection.jsx';
import { Heart, Sparkles } from 'lucide-react';

export default function App() {
  const [hasEnteredUniverse, setHasEnteredUniverse] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [activeSection, setActiveSection] = useState('opening');

  // Handle Enter Universe interaction
  const handleEnterUniverse = () => {
    setHasEnteredUniverse(true);
    setHasInteracted(true);
    // Smoothly initiate romantic symphony
    setIsPlayingMusic(true);

    // Smooth scroll down to first chapter
    setTimeout(() => {
      const target = document.getElementById('universe');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400);
  };

  // Section observer to track active section for nav and progress
  useEffect(() => {
    const sectionIds = ['opening', 'universe', 'world', 'forgive', 'souls', 'promise', 'final'];
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          },
          { threshold: 0.3 }
        );
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [hasEnteredUniverse]);

  const handleNavigate = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="relative min-h-screen bg-forest-night text-cream-ivory selection:bg-sage-eucalyptus selection:text-cream-milk overflow-x-hidden font-cormorant">
      {/* 1. Desktop Interactive Starlight Cursor */}
      <CustomCursor />

      {/* 2. Deep Emerald Forest Cosmic Universe Background with Twinkling Stars & Nebulae */}
      <CosmicBackground />

      {/* 3. Subtle Floating Cream Jasmine Petals & Sage Eucalyptus Leaves */}
      <FloatingPetals count={26} />

      {/* 4. Floating Ambient Romantic Music Toggle */}
      <AudioPlayer
        isPlaying={isPlayingMusic}
        setIsPlaying={setIsPlayingMusic}
        hasInteracted={hasInteracted}
      />

      {/* 5. Navigation Bar (Visible once entered or on scroll) */}
      {hasEnteredUniverse && (
        <Navbar onNavigate={handleNavigate} activeSection={activeSection} />
      )}

      {/* 6. Constellation Journey Progress Indicator */}
      {hasEnteredUniverse && (
        <ProgressIndicator activeSection={activeSection} onNavigate={handleNavigate} />
      )}

      {/* 7. Back To Top Action */}
      {hasEnteredUniverse && <BackToTop />}

      {/* 8. Main Cinematic Journey Container */}
      <main className="relative z-20">
        {/* Section 0: Full-Screen Opening Experience */}
        <div id="opening">
          <IntroScreen onEnterUniverse={handleEnterUniverse} />
        </div>

        {/* Subsequent Love Story Chapters */}
        <AnimatePresence>
          {hasEnteredUniverse && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="space-y-12 sm:space-y-24"
            >
              {/* Section 1: My Love Is Bigger Than The Universe */}
              <UniverseSection />

              {/* Section 2: Against The Entire World */}
              <WorldSection />

              {/* Section 3: Please Forgive Me, My Love */}
              <ForgivenessSection />

              {/* Section 4: Two Souls, One Destiny */}
              <SoulmatesSection />

              {/* Section 5: My Forever Promise */}
              <PromiseSection />

              {/* Section 6: Final Section - The Most Important Message */}
              <FinalSection />

              {/* Royal Green & Cream Footer */}
              <footer className="relative py-16 px-4 text-center border-t border-sage-soft/20 bg-forest-night/95">
                <div className="max-w-2xl mx-auto space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-sage-mist" />
                    <Heart className="w-4 h-4 text-cream-light fill-sage-soft/40" />
                    <Sparkles className="w-3.5 h-3.5 text-sage-mist" />
                  </div>
                  <p className="font-playfair text-lg sm:text-xl text-cream-light italic">
                    &ldquo;Even if the universe never ends, my love for you will always be greater. Against the entire world, I will choose you. In every lifetime, it will always be you and me.&rdquo;
                  </p>
                  <p className="font-cormorant text-xs sm:text-sm tracking-widest text-sage-mist/70 uppercase">
                    Dedicated eternally to Kirthikha &bull; Loved forever by her boy
                  </p>
                </div>
              </footer>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
