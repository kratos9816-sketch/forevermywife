import React, { useEffect, useRef } from 'react';

export default function CosmicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', handleResize);

    // Mouse coordinates for gentle interaction
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Stars definition - Cream, Ivory, and Sage stars
    const STAR_COUNT = Math.min(Math.floor((width * height) / 3800), 280);
    let stars = [];

    const initStars = () => {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.8 + 0.3,
          color: Math.random() > 0.4 ? '#F4ECE1' : Math.random() > 0.5 ? '#FFFDF9' : '#C4D6CD',
          alpha: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.15 + 0.05,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
          driftX: (Math.random() - 0.5) * 0.1,
          driftY: -Math.random() * 0.15 - 0.05,
        });
      }
    };

    initStars();

    // Emerald & Sage Nebulae with warm cream aura
    const nebulae = [
      { xRatio: 0.2, yRatio: 0.3, radius: 460, color: 'rgba(14, 36, 27, 0.52)' },
      { xRatio: 0.8, yRatio: 0.6, radius: 550, color: 'rgba(20, 51, 39, 0.48)' },
      { xRatio: 0.5, yRatio: 0.85, radius: 420, color: 'rgba(244, 236, 225, 0.06)' },
      { xRatio: 0.3, yRatio: 0.15, radius: 340, color: 'rgba(158, 184, 171, 0.08)' },
    ];

    let time = 0;

    const render = () => {
      time += 0.008;
      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Base Deep Forest Velvet Void
      ctx.fillStyle = '#040B08';
      ctx.fillRect(0, 0, width, height);

      // Radial Deep Emerald & Sage Nebulae Glows
      nebulae.forEach((neb, idx) => {
        const driftOffsetX = Math.sin(time + idx) * 35;
        const driftOffsetY = Math.cos(time * 0.8 + idx) * 35;
        const nx = neb.xRatio * width + driftOffsetX;
        const ny = neb.yRatio * height + driftOffsetY;

        const grad = ctx.createRadialGradient(nx, ny, 10, nx, ny, neb.radius);
        grad.addColorStop(0, neb.color);
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(nx, ny, neb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Subtle mouse gentle cream illumination
      const mouseGrad = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        320
      );
      mouseGrad.addColorStop(0, 'rgba(244, 236, 225, 0.07)');
      mouseGrad.addColorStop(0.5, 'rgba(20, 51, 39, 0.09)');
      mouseGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = mouseGrad;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 320, 0, Math.PI * 2);
      ctx.fill();

      // Render & Animate Stars
      stars.forEach((star) => {
        star.y += star.driftY;
        star.x += star.driftX;
        star.twinklePhase += star.twinkleSpeed;

        // Wrap around bounds
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;

        const currentAlpha =
          star.alpha * (0.6 + 0.4 * Math.sin(star.twinklePhase));

        ctx.save();
        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.max(0, Math.min(1, currentAlpha));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Extra twinkle cross on larger cream stars
        if (star.size > 1.3 && currentAlpha > 0.6) {
          ctx.strokeStyle = '#FFFFFF';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(star.x - star.size * 2.2, star.y);
          ctx.lineTo(star.x + star.size * 2.2, star.y);
          ctx.moveTo(star.x, star.y - star.size * 2.2);
          ctx.lineTo(star.x, star.y + star.size * 2.2);
          ctx.stroke();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.95 }}
    />
  );
}
