import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Star, Compass } from 'lucide-react';

export default function SoulmatesSection() {
  const canvasRef = useRef(null);

  // Two glowing stars connected by a cream & sage thread of destiny
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight || 420);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight || 420;
    };
    window.addEventListener('resize', handleResize);

    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      angle += 0.015;

      const cx = width / 2;
      const cy = height / 2;
      const distance = Math.min(width * 0.3, 160) + Math.sin(angle * 0.8) * 20;

      // Star 1: Kirthikha (Soft Sage Star)
      const x1 = cx - distance * Math.cos(angle * 0.5);
      const y1 = cy - 20 * Math.sin(angle * 0.5);

      // Star 2: Her Boy (Warm Cream Star)
      const x2 = cx + distance * Math.cos(angle * 0.5);
      const y2 = cy + 20 * Math.sin(angle * 0.5);

      // Draw Shimmering Cream-Sage Thread of Destiny
      ctx.save();
      const threadGrad = ctx.createLinearGradient(x1, y1, x2, y2);
      threadGrad.addColorStop(0, '#9EB8AB');
      threadGrad.addColorStop(0.5, '#FFFDF9');
      threadGrad.addColorStop(1, '#F4ECE1');

      ctx.strokeStyle = threadGrad;
      ctx.lineWidth = 2.5;
      ctx.shadowColor = '#C4D6CD';
      ctx.shadowBlur = 15;

      // Curved wavy thread
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      const midX = (x1 + x2) / 2;
      const midY = (y1 + y2) / 2 + Math.sin(angle * 2) * 25;
      ctx.quadraticCurveTo(midX, midY, x2, y2);
      ctx.stroke();

      // Traveling light sparks along the thread
      for (let i = 0; i < 4; i++) {
        const t = ((angle * 0.5 + i * 0.25) % 1);
        const sparkX = Math.pow(1 - t, 2) * x1 + 2 * (1 - t) * t * midX + Math.pow(t, 2) * x2;
        const sparkY = Math.pow(1 - t, 2) * y1 + 2 * (1 - t) * t * midY + Math.pow(t, 2) * y2;

        ctx.fillStyle = '#FFFFFF';
        ctx.shadowColor = '#FFFDF9';
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(sparkX, sparkY, 3, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      const drawSoulStar = (x, y, colorInner, colorGlow, label) => {
        ctx.save();
        const radGlow = ctx.createRadialGradient(x, y, 2, x, y, 40);
        radGlow.addColorStop(0, colorInner);
        radGlow.addColorStop(0.4, colorGlow);
        radGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = radGlow;
        ctx.beginPath();
        ctx.arc(x, y, 40, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#FFFFFF';
        ctx.shadowColor = colorGlow;
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.arc(x, y, 7, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(x - 16, y);
        ctx.lineTo(x + 16, y);
        ctx.moveTo(x, y - 16);
        ctx.lineTo(x, y + 16);
        ctx.stroke();

        ctx.fillStyle = '#F4ECE1';
        ctx.font = '12px "Cinzel", serif';
        ctx.textAlign = 'center';
        ctx.fillText(label, x, y + 26);
        ctx.restore();
      };

      drawSoulStar(x1, y1, '#C4D6CD', 'rgba(158, 184, 171, 0.75)', 'Kirthikha');
      drawSoulStar(x2, y2, '#FFFDF9', 'rgba(244, 236, 225, 0.75)', 'Your Boy');

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const soulPillars = [
    { title: 'My favourite person', desc: 'The one my soul longs for every single day' },
    { title: 'My safe place', desc: 'Where all fears dissolve and silence is peaceful' },
    { title: 'My happiness', desc: 'The reason behind my most genuine smiles' },
    { title: 'My today', desc: 'The joy of every waking hour in this present moment' },
    { title: 'My tomorrow', desc: 'The beautiful future I can never wait to live' },
  ];

  return (
    <section
      id="souls"
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
        <Star className="w-3.5 h-3.5 text-sage-mist" />
        <span>CHAPTER IV &bull; COSMIC ALIGNMENT</span>
      </motion.div>

      {/* Main Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="font-cinzel text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-center text-cream-gradient max-w-4xl leading-tight sm:leading-snug mb-8"
      >
        YOU AND ME.
        <br />
        <span className="text-cream-light font-playfair font-normal italic">
          THAT'S WHAT WAS MEANT TO BE.
        </span>
      </motion.h2>

      {/* Cream filigree divider */}
      <div className="cream-filigree-divider max-w-md mx-auto mb-10">
        <Heart className="w-4 h-4 text-cream-ivory fill-cream-ivory/30 shrink-0" />
      </div>

      {/* Interactive Two Stars & Cream-Sage Thread Canvas */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative w-full max-w-3xl h-64 sm:h-80 rounded-2xl glass-forest-card overflow-hidden mb-16 flex items-center justify-center border border-sage-soft/40 shadow-cream-glow"
      >
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <div className="absolute bottom-3 text-center text-[11px] font-cinzel text-sage-mist tracking-widest uppercase pointer-events-none">
          Two Souls Bound By The Eternal Thread of Destiny
        </div>
      </motion.div>

      {/* Story Narrative Box */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full mb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass-forest-card rounded-2xl p-8 sm:p-10 space-y-6 flex flex-col justify-center"
        >
          <p className="font-cormorant text-xl sm:text-2xl text-cream-ivory leading-relaxed font-light">
            Out of all the people in this world, somehow we found each other.
          </p>

          <p className="font-cormorant text-xl sm:text-2xl text-sage-mist italic leading-relaxed">
            Out of all the possible paths, our paths crossed.
            <br />
            Maybe that's what makes our story so special.
          </p>

          <div className="border-t border-sage-soft/20 pt-4 space-y-3 font-cormorant text-lg sm:text-xl text-cream-ivory/80">
            <p>
              I don't believe we're perfect because we never make mistakes.
            </p>
            <p className="font-playfair text-cream-light italic text-xl sm:text-2xl">
              &ldquo;I believe we're perfect for each other because there's something about us that makes me want to keep choosing you.&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Pillars of Devotion */}
        <div className="flex flex-col gap-3 justify-center">
          {soulPillars.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-forest-card rounded-xl p-4 sm:p-5 flex items-center justify-between group hover:border-cream-ivory/50 transition-all duration-300"
            >
              <div>
                <h4 className="font-playfair text-lg sm:text-xl text-cream-shimmer font-bold">
                  {item.title}
                </h4>
                <p className="font-cormorant text-sm sm:text-base text-sage-mist italic mt-0.5">
                  {item.desc}
                </p>
              </div>
              <Sparkles className="w-4 h-4 text-cream-ivory/40 group-hover:text-cream-light group-hover:rotate-45 transition-all shrink-0 ml-3" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Climax Narrative Cadence */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full max-w-4xl text-center space-y-6"
      >
        <p className="font-cormorant text-xl sm:text-2xl text-cream-ivory font-light italic">
          I don't just want beautiful memories with you.
          <br />
          <span className="font-playfair text-2xl sm:text-3xl text-cream-light font-semibold not-italic">
            I want an entire lifetime of them.
          </span>
        </p>

        <div className="py-6 px-8 rounded-2xl bg-forest-velvet/80 border border-sage-soft/40 inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 shadow-cream-glow">
          <span className="font-cinzel text-lg sm:text-xl text-cream-light font-bold tracking-wider">
            You and me.
          </span>
          <span className="hidden sm:inline text-sage-mist">&bull;</span>
          <span className="font-playfair text-lg sm:text-xl text-cream-ivory italic">
            Two hearts.
          </span>
          <span className="hidden sm:inline text-sage-mist">&bull;</span>
          <span className="font-cinzel text-lg sm:text-xl text-cream-shimmer font-bold">
            One beautiful story.
          </span>
        </div>

        <p className="font-script text-3xl sm:text-4xl text-sage-mist">
          A thousand memories yet to be made.
        </p>
      </motion.div>
    </section>
  );
}
