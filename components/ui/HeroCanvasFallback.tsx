'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  fadeSpeed: number;
  maxOpacity: number;
}

export default function HeroCanvasFallback() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle pool to represent golden dust
    const particles: Particle[] = [];
    const particleCount = Math.min(60, Math.floor((width * height) / 25000)); // Adaptive count

    function createParticle(initY = false): Particle {
      const size = Math.random() * 3 + 1;
      const maxOpacity = Math.random() * 0.5 + 0.15;
      return {
        x: Math.random() * width,
        y: initY ? Math.random() * height : height + 10,
        size,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: -(Math.random() * 0.6 + 0.3),
        opacity: initY ? Math.random() * maxOpacity : 0,
        fadeSpeed: 0.005 + Math.random() * 0.01,
        maxOpacity,
      };
    }

    // Initialize particles across the screen
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle(true));
    }

    function drawRadialGlow() {
      if (!ctx || !canvas) return;
      // Ambient warm radial background glow (terracotta/brick to dark charcoal transition)
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        10,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.8
      );
      gradient.addColorStop(0, '#211007'); // Deep warm amber tint
      gradient.addColorStop(0.5, '#0C0603'); // Near black
      gradient.addColorStop(1, '#050302'); // Pure black
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }

    function updateAndDrawParticles() {
      if (!ctx) return;

      particles.forEach((p, idx) => {
        // Move particle
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.01) * 0.15; // Soft sway

        // Fade in on spawn, fade out near top
        if (p.y > height - 100) {
          if (p.opacity < p.maxOpacity) p.opacity += p.fadeSpeed;
        } else if (p.y < 150) {
          p.opacity -= p.fadeSpeed;
        }

        // Recycle if out of bounds or invisible
        if (p.y < 0 || p.opacity <= 0) {
          particles[idx] = createParticle(false);
          return;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        // Gold dust glow effect
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
        gradient.addColorStop(0, `rgba(232, 92, 13, ${p.opacity})`); // Warm orange center
        gradient.addColorStop(0.4, `rgba(210, 180, 140, ${p.opacity * 0.8})`); // Sandstone
        gradient.addColorStop(1, 'rgba(232, 92, 13, 0)');
        
        ctx.fillStyle = gradient;
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(232, 92, 13, 0.4)';
        ctx.fill();
      });
      ctx.shadowBlur = 0; // Reset shadow for next render
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);
      updateAndDrawParticles();
      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    function handleResize() {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ display: 'block' }}
    />
  );
}
