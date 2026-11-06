import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsDesktop(mediaQuery.matches);

    const handleMediaChange = (e) => setIsDesktop(e.matches);
    mediaQuery.addEventListener('change', handleMediaChange);

    if (!mediaQuery.matches) return;

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Check if hovering interactive element
      const target = e.target;
      const isInteractive = target && (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer')
      );
      setIsHovering(Boolean(isInteractive));
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Smooth trail physics
  useEffect(() => {
    if (!isDesktop) return;
    let animId;
    const lerp = (a, b, n) => (1 - n) * a + n * b;

    const updateTrail = () => {
      setTrailPos((prev) => ({
        x: lerp(prev.x, pos.x, 0.22),
        y: lerp(prev.y, pos.y, 0.22),
      }));
      animId = requestAnimationFrame(updateTrail);
    };

    animId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animId);
  }, [pos, isDesktop]);

  if (!isDesktop || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300">
      {/* Outer Ethereal Sage & Cream Ring */}
      <div
        className="fixed rounded-full transition-transform duration-100 ease-out flex items-center justify-center border border-sage-soft/70"
        style={{
          left: `${trailPos.x}px`,
          top: `${trailPos.y}px`,
          width: isHovering ? '52px' : '34px',
          height: isHovering ? '52px' : '34px',
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.75 : 1})`,
          boxShadow: isHovering
            ? '0 0 20px rgba(244, 236, 225, 0.45), inset 0 0 10px rgba(158, 184, 171, 0.3)'
            : '0 0 10px rgba(158, 184, 171, 0.25)',
          backgroundColor: isHovering ? 'rgba(158, 184, 171, 0.15)' : 'transparent',
        }}
      />

      {/* Center Pure Cream Starlight Core */}
      <div
        className="fixed rounded-full bg-cream-milk pointer-events-none transition-transform duration-75"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: isClicking ? '8px' : '5px',
          height: isClicking ? '8px' : '5px',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 12px #FFFFFF, 0 0 24px #9EB8AB',
        }}
      />

      {/* Tiny Sage Spark on Hover */}
      {isHovering && (
        <span
          className="fixed text-[10px] text-cream-light font-serif select-none pointer-events-none animate-pulse"
          style={{
            left: `${trailPos.x + 18}px`,
            top: `${trailPos.y - 18}px`,
          }}
        >
          ✦
        </span>
      )}
    </div>
  );
}
