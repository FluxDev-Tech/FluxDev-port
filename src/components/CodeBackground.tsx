import React, { useEffect, useRef } from 'react';

export default function CodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const characters = '01<>{}[]()/\\=+*-!?;:';
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const draw = () => {
      const isDark = document.documentElement.classList.contains('dark');
      
      // Subtle trail effect matching Cyber palette
      ctx.fillStyle = isDark ? 'rgba(2, 6, 23, 0.1)' : 'rgba(248, 250, 252, 0.1)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px "JetBrains Mono"`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        
        // Use cyber colors with varying opacity for depth
        const opacity = Math.random() * (isDark ? 0.25 : 0.15) + 0.05;
        const color = i % 2 === 0 ? '14, 165, 233' : '129, 140, 248'; // Cyber Blue or Indigo 400
        ctx.fillStyle = `rgba(${color}, ${opacity})`;
        
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    let animationId: number;
    let lastTime = 0;
    const fps = 30; // Slightly higher FPS for smoother visuals
    const interval = 1000 / fps;

    const animate = (time: number) => {
      const delta = time - lastTime;
      if (delta > interval) {
        draw();
        lastTime = time - (delta % interval);
      }
      animationId = requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const newColumns = Math.floor(width / fontSize);
      if (newColumns > drops.length) {
        for (let i = drops.length; i < newColumns; i++) {
          drops[i] = Math.random() * -100;
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-20 pointer-events-none opacity-100 transition-opacity duration-1000"
    />
  );
}
