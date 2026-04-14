import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 1;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[200] bg-slate-50 dark:bg-[#020617] flex flex-col items-center justify-center overflow-hidden transition-colors duration-1000"
    >
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: ["-10%", "10%", "-10%"],
            y: ["-10%", "10%", "-10%"]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.15, 0.05],
            x: ["10%", "-10%", "10%"],
            y: ["10%", "-10%", "10%"]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] rounded-full" 
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Animation */}
        <div className="relative mb-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-7xl md:text-8xl font-display font-bold tracking-tighter text-slate-900 dark:text-white"
          >
            Flux<span className="text-cyan-500">Dev</span>
          </motion.div>
          
          {/* Glitch Effect Elements */}
          <motion.div
            animate={{ 
              opacity: [0, 1, 0],
              x: [-2, 2, -2]
            }}
            transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
            className="absolute inset-0 text-7xl md:text-8xl font-display font-bold tracking-tighter text-cyan-500/30 blur-[2px] pointer-events-none"
          >
            FluxDev
          </motion.div>
        </div>
        
        {/* Progress Bar Container */}
        <div className="relative w-80">
          <div className="h-[2px] w-full bg-black/5 dark:bg-white/5 relative overflow-hidden rounded-full">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-indigo-500 shadow-[0_0_20px_rgba(6,182,212,0.6)]"
            />
          </div>

          {/* Progress Markers */}
          <div className="mt-6 flex items-end justify-between">
            <div className="flex flex-col gap-1">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[10px] uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500 font-mono font-bold"
              >
                Initializing Core
              </motion.span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      opacity: progress > (i + 1) * 20 ? 1 : 0.2,
                      scale: progress > (i + 1) * 20 ? [1, 1.2, 1] : 1
                    }}
                    className="w-1.5 h-1.5 rounded-full bg-cyan-500"
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-2xl font-mono font-bold text-slate-900 dark:text-white tabular-nums">
                {Math.min(progress, 100)}<span className="text-xs text-cyan-500 ml-0.5">%</span>
              </span>
              <span className="text-[8px] uppercase tracking-widest text-slate-400 font-mono">
                Syncing Assets
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Background Effect */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* Scanning Line Effect */}
      <motion.div 
        animate={{ 
          top: ["-10%", "110%"] 
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent z-20"
      />
    </motion.div>
  );
}
