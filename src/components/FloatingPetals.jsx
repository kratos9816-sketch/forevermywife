import React, { useEffect, useRef } from 'react';

export default function FloatingPetals({ count = 28 }) {
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
    };
    window.addEventListener('resize', handleResize);

    // Elegant Botanicals: Cream Jasmine Petals & Soft Sage Eucalyptus Leaves
    const petals = [];
    const colors = [
      { fill: '#F4ECE1', shadow: '#0E241B' }, // Warm Cream
      { fill: '#FAF6EE', shadow: '#143327' }, // Light Milk Cream
      { fill: '#9EB8AB', shadow: '#081711' }, // Soft Sage
      { fill: '#7A9A8B', shadow: '#040B08' }, // Eucalyptus Green
    ];

    for (let i = 0; i < count; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        w: Math.random() * 12 + 10,
        h: Math.random() * 16 + 12,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.35,
        speedY: Math.random() * 0.7 + 0.4,
        speedX: Math.random() * 0.5 - 0.25,
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        flip: Math.random() * Math.PI,
        flipSpeed: Math.random() * 0.03 + 0.01,
      });
    }

    const drawPetal = (p) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.scale(Math.cos(p.flip), 1);

      ctx.fillStyle = p.color.fill;
      ctx.globalAlpha = p.opacity;
      ctx.shadowColor = p.color.shadow;
      ctx.shadowBlur = 8;

      ctx.beginPath();
      ctx.moveTo(0, -p.h / 2);
      ctx.bezierCurveTo(p.w / 2, -p.h / 3, p.w / 1.5, p.h / 4, 0, p.h / 2);
      ctx.bezierCurveTo(-p.w / 1.5, p.h / 4, -p.w / 2, -p.h / 3, 0, -p.h / 2);
      ctx.fill();

      // Subtle center vein highlight
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(0, -p.h / 2.5);
      ctx.lineTo(0, p.h / 3);
      ctx.stroke();

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(p.flip) * 0.8 + p.speedX;
        p.rot += p.rotSpeed;
        p.flip += p.flipSpeed;

        if (p.y > height + 30) {
          p.y = -30;
          p.x = Math.random() * width;
        }
        if (p.x < -30) p.x = width + 20;
        if (p.x > width + 30) p.x = -20;

        drawPetal(p);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ opacity: 0.85 }}
    />
  );
}
