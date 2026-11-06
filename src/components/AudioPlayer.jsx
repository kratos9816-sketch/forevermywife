import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Sparkles } from 'lucide-react';

export default function AudioPlayer({ isPlaying, setIsPlaying, hasInteracted }) {
  const [volume, setVolume] = useState(0.5);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const audioCtxRef = useRef(null);
  const isPlayingRef = useRef(isPlaying);
  const timeoutIdsRef = useRef([]);

  isPlayingRef.current = isPlaying;

  // Initialize Web Audio API romantic melodic engine
  useEffect(() => {
    if (!isPlaying) {
      if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
        audioCtxRef.current.suspend();
      }
      return;
    }

    // Start or resume audio
    const startAudioEngine = async () => {
      try {
        if (!audioCtxRef.current) {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          audioCtxRef.current = new AudioContext();
        }

        if (audioCtxRef.current.state === 'suspended') {
          await audioCtxRef.current.resume();
        }

        playRomanticSymphony();
      } catch (e) {
        console.error('Audio initialization error:', e);
      }
    };

    startAudioEngine();

    return () => {
      timeoutIdsRef.current.forEach(clearTimeout);
      timeoutIdsRef.current = [];
    };
  }, [isPlaying]);

  const playRomanticSymphony = () => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;

    // Master Gain
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(volume * 0.28, ctx.currentTime);
    masterGain.connect(ctx.destination);

    // Convolver-like warmth delay & feedback
    const delay = ctx.createDelay();
    delay.delayTime.setValueAtTime(0.48, ctx.currentTime);

    const delayFeedback = ctx.createGain();
    delayFeedback.gain.setValueAtTime(0.38, ctx.currentTime);

    const delayFilter = ctx.createBiquadFilter();
    delayFilter.type = 'lowpass';
    delayFilter.frequency.setValueAtTime(1400, ctx.currentTime);

    delay.connect(delayFilter);
    delayFilter.connect(delayFeedback);
    delayFeedback.connect(delay);
    delayFilter.connect(masterGain);

    // Warm filter for cozy, velvety piano sound
    const warmFilter = ctx.createBiquadFilter();
    warmFilter.type = 'lowpass';
    warmFilter.frequency.setValueAtTime(2200, ctx.currentTime);
    warmFilter.connect(masterGain);
    warmFilter.connect(delay);

    // Warm Romantic Cello / Pad Chord Drones
    const playWarmPad = (freq, duration, gainLevel = 0.08) => {
      if (!isPlayingRef.current || ctx.state !== 'running') return;
      const osc = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const padGain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(freq * 1.002, ctx.currentTime);

      const now = ctx.currentTime;
      padGain.gain.setValueAtTime(0.0001, now);
      padGain.gain.exponentialRampToValueAtTime(gainLevel, now + 1.8);
      padGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(padGain);
      osc2.connect(padGain);
      padGain.connect(warmFilter);

      osc.start(now);
      osc2.start(now);
      osc.stop(now + duration + 0.1);
      osc2.stop(now + duration + 0.1);
    };

    // Piano Note Synthesizer with crystal bell harmonics
    const playPianoNote = (freq, timeOffset, noteDuration = 2.2, velocity = 0.14) => {
      const timer = setTimeout(() => {
        if (!isPlayingRef.current || !audioCtxRef.current || audioCtxRef.current.state !== 'running') return;
        const now = ctx.currentTime;

        const osc = ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        const harmonic = ctx.createOscillator();
        harmonic.type = 'sine';
        harmonic.frequency.setValueAtTime(freq * 2, now);

        const chime = ctx.createOscillator();
        chime.type = 'sine';
        chime.frequency.setValueAtTime(freq * 3, now);

        const noteGain = ctx.createGain();
        const chimeGain = ctx.createGain();

        noteGain.gain.setValueAtTime(0.0001, now);
        noteGain.gain.linearRampToValueAtTime(velocity, now + 0.035);
        noteGain.gain.exponentialRampToValueAtTime(velocity * 0.45, now + 0.35);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, now + noteDuration);

        chimeGain.gain.setValueAtTime(0.0001, now);
        chimeGain.gain.linearRampToValueAtTime(velocity * 0.2, now + 0.02);
        chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + (noteDuration * 0.6));

        osc.connect(noteGain);
        harmonic.connect(noteGain);
        chime.connect(chimeGain);

        noteGain.connect(warmFilter);
        chimeGain.connect(warmFilter);

        osc.start(now);
        harmonic.start(now);
        chime.start(now);

        osc.stop(now + noteDuration + 0.1);
        harmonic.stop(now + noteDuration + 0.1);
        chime.stop(now + noteDuration + 0.1);
      }, timeOffset);

      timeoutIdsRef.current.push(timer);
    };

    const notes = {
      Eb2: 77.78,
      G2: 98.00,
      Ab2: 103.83,
      Bb2: 116.54,
      C3: 130.81,
      Eb3: 155.56,
      F3: 174.61,
      G3: 196.00,
      Ab3: 207.65,
      Bb3: 233.08,
      C4: 261.63,
      D4: 293.66,
      Eb4: 311.13,
      F4: 349.23,
      G4: 392.00,
      Ab4: 415.30,
      Bb4: 466.16,
      C5: 523.25,
      D5: 587.33,
      Eb5: 622.25,
      F5: 698.46,
      G5: 783.99,
      Bb5: 932.33,
    };

    const playProgression = () => {
      if (!isPlayingRef.current) return;

      const measures = [
        {
          bass: notes.Eb2,
          pad: [notes.Eb3, notes.Bb3, notes.G4],
          arpeggio: [
            { f: notes.Eb3, t: 0 },
            { f: notes.Bb3, t: 400 },
            { f: notes.G4, t: 800 },
            { f: notes.Bb4, t: 1200 },
            { f: notes.Eb5, t: 1600 },
            { f: notes.D5, t: 2100 },
            { f: notes.Bb4, t: 2600 },
            { f: notes.G4, t: 3000 },
          ],
          duration: 3600
        },
        {
          bass: notes.C3,
          pad: [notes.C3, notes.G3, notes.Eb4],
          arpeggio: [
            { f: notes.C3, t: 0 },
            { f: notes.G3, t: 400 },
            { f: notes.Eb4, t: 800 },
            { f: notes.G4, t: 1200 },
            { f: notes.C5, t: 1600 },
            { f: notes.Bb4, t: 2100 },
            { f: notes.G4, t: 2600 },
            { f: notes.Eb4, t: 3000 },
          ],
          duration: 3600
        },
        {
          bass: notes.Ab2,
          pad: [notes.Ab2, notes.Eb3, notes.C4],
          arpeggio: [
            { f: notes.Ab2, t: 0 },
            { f: notes.Eb3, t: 400 },
            { f: notes.C4, t: 800 },
            { f: notes.G4, t: 1200 },
            { f: notes.Ab4, t: 1600 },
            { f: notes.C5, t: 2100 },
            { f: notes.Eb5, t: 2600 },
            { f: notes.C5, t: 3000 },
          ],
          duration: 3600
        },
        {
          bass: notes.Bb2,
          pad: [notes.Bb2, notes.F3, notes.D4],
          arpeggio: [
            { f: notes.Bb2, t: 0 },
            { f: notes.F3, t: 400 },
            { f: notes.D4, t: 800 },
            { f: notes.F4, t: 1200 },
            { f: notes.Bb4, t: 1600 },
            { f: notes.D5, t: 2100 },
            { f: notes.F5, t: 2600 },
            { f: notes.Eb5, t: 3000 },
          ],
          duration: 3600
        }
      ];

      let elapsed = 0;
      measures.forEach((m) => {
        const padTimer = setTimeout(() => {
          if (!isPlayingRef.current) return;
          m.pad.forEach((freq) => playWarmPad(freq, 3.8, 0.05));
          playWarmPad(m.bass, 3.8, 0.08);
        }, elapsed);
        timeoutIdsRef.current.push(padTimer);

        m.arpeggio.forEach((note) => {
          playPianoNote(note.f, elapsed + note.t, 2.5, 0.12);
        });

        elapsed += m.duration;
      });

      const loopTimer = setTimeout(() => {
        if (isPlayingRef.current) {
          playProgression();
        }
      }, elapsed);
      timeoutIdsRef.current.push(loopTimer);
    };

    playProgression();
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <aside aria-label="Audio controls" className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
      <div 
        className="relative group"
        onMouseEnter={() => setShowVolumeSlider(true)}
        onMouseLeave={() => setShowVolumeSlider(false)}
      >
        <button
          onClick={togglePlay}
          className={`flex items-center gap-3 px-4 py-2.5 rounded-full transition-all duration-500 backdrop-blur-md border ${
            isPlaying
              ? 'bg-forest-velvet/90 border-cream-ivory/60 text-cream-milk shadow-cream-glow'
              : 'bg-forest-night/80 border-sage-soft/30 text-sage-mist/70 hover:border-sage-mist/60 hover:text-cream-light'
          }`}
          title={isPlaying ? 'Pause romantic soundtrack' : 'Play romantic soundtrack'}
          aria-label={isPlaying ? 'Pause romantic soundtrack' : 'Play romantic soundtrack'}
        >
          {isPlaying ? (
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-3.5 bg-sage-soft rounded-full animate-bounce [animation-delay:0ms]" />
              <span className="w-1 h-5 bg-cream-milk rounded-full animate-bounce [animation-delay:150ms]" />
              <span className="w-1 h-2.5 bg-sage-mist rounded-full animate-bounce [animation-delay:300ms]" />
            </div>
          ) : (
            <VolumeX className="w-4 h-4 text-sage-soft/60" />
          )}

          <span className="font-cormorant text-sm tracking-widest uppercase font-medium">
            {isPlaying ? 'Melody Playing' : 'Play Music'}
          </span>

          <Music className={`w-3.5 h-3.5 ${isPlaying ? 'text-cream-light animate-spin-very-slow' : 'opacity-40'}`} />
        </button>

        {/* Volume Popup */}
        {showVolumeSlider && (
          <div className="absolute bottom-full left-0 mb-2 p-3 bg-forest-velvet/95 backdrop-blur-md border border-sage-soft/40 rounded-xl shadow-forest-deep flex flex-col items-center gap-2 animate-fadeIn">
            <span className="text-[11px] font-cinzel text-cream-ivory tracking-wider">
              {Math.round(volume * 100)}%
            </span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-24 h-1 bg-forest-night rounded-lg appearance-none cursor-pointer accent-cream-ivory"
              aria-label="Volume level"
            />
          </div>
        )}
      </div>

      {/* Gentle Floating helper tooltip */}
      {!isPlaying && hasInteracted && (
        <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-cream-ivory/80 font-cormorant italic tracking-wide animate-pulse">
          <Sparkles className="w-3 h-3 text-sage-mist" /> Listen to our universe's song
        </span>
      )}
    </aside>
  );
}
