import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Download, Sparkles, Code, Cpu, Globe, Github, FileText } from 'lucide-react';
import { cn } from '../lib/utils';
import { PERSONAL_INFO } from '../constants';

const FloatingElement = ({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [-10, 10, -10] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }}
    className={cn("will-change-transform", className)}
  >
    {children}
  </motion.div>
);

const FloatingCode = ({ code, delay = 0, className }: { code: string, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ 
      opacity: [0.1, 0.3, 0.1],
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      scale: [0.9, 1.1, 0.9]
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }}
    className={cn("absolute font-mono text-[10px] pointer-events-none select-none whitespace-pre will-change-transform", className)}
  >
    {code}
  </motion.div>
);

const DynamicBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const spotlightY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Mouse Spotlight - Hidden on desktop as per user request */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-60 md:hidden"
        style={{
          background: useTransform(
            [spotlightX, spotlightY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.15), transparent 80%)`
          ),
        }}
      />

      {/* Mesh Gradient / Aurora Effect */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-20%] left-[-10%] w-[100%] h-[100%] bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent rounded-full blur-[150px] will-change-transform"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-20%] right-[-10%] w-[100%] h-[100%] bg-gradient-to-tl from-indigo-500/10 via-transparent to-transparent rounded-full blur-[150px] will-change-transform"
      />

      {/* Floating Icons & Code */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingElement delay={0} className="absolute top-[20%] left-[15%] text-indigo-500/20">
          <Code size={120} />
        </FloatingElement>
        <FloatingElement delay={1} className="absolute bottom-[20%] right-[15%] text-purple-500/20">
          <Cpu size={100} />
        </FloatingElement>
        <FloatingElement delay={2} className="absolute top-[60%] left-[10%] text-blue-500/20 md:hidden">
          <Globe size={80} />
        </FloatingElement>
        <FloatingElement delay={0.5} className="absolute top-[15%] right-[20%] text-indigo-500/20">
          <Sparkles size={60} />
        </FloatingElement>

        {/* Floating Code Snippets */}
        <FloatingCode 
          code={`function FluxDev() {\n  return <Innovation />;\n}`} 
          className="top-[30%] right-[25%] text-indigo-400" 
          delay={0} 
        />
        <FloatingCode 
          code={`const future = async () => {\n  await build(dream);\n}`} 
          className="bottom-[35%] left-[20%] text-purple-400" 
          delay={2} 
        />
        <FloatingCode 
          code={`import { Success } from 'flux';`} 
          className="top-[50%] right-[15%] text-blue-400" 
          delay={4} 
        />
      </div>

      {/* Subtle Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
        style={{ 
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '100px 100px' 
        }} 
      />
    </div>
  );
};

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <DynamicBackground />
      
      <motion.div 
        style={{ y: y1, opacity }}
        className="max-w-7xl mx-auto px-6 relative z-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-neutral-400 text-xs font-medium tracking-wider uppercase mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            {PERSONAL_INFO.availability}
          </motion.div>
          
          <h1 className="text-6xl md:text-9xl font-display font-bold tracking-tighter mb-8 leading-[0.9] drop-shadow-sm">
            <span className="block text-neutral-900 dark:text-white opacity-90">Building the</span>
            <span className="text-gradient-indigo filter drop-shadow-[0_0_30px_rgba(99,102,241,0.3)]">Future of Web</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            <TypeAnimation
              sequence={[
                'Full Stack Developer & UI Designer',
                2000,
                'Architecting Scalable Digital Solutions',
                2000,
                'Crafting Immersive User Experiences',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.9, rotate: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="group relative px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold flex items-center gap-3 overflow-hidden transition-all shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
            >
              <span className="relative z-10">Learn More</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <Github size={20} className="relative z-10" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity" />
            </motion.a>
            
            <motion.a
              href={(PERSONAL_INFO.socials as any).resume}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.9, rotate: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="px-10 py-5 glass rounded-full font-bold flex items-center gap-3 hover:bg-black/5 dark:hover:bg-white/[0.05] transition-all border border-black/10 dark:border-white/10 text-slate-900 dark:text-white"
            >
              Resume
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <FileText size={20} />
              </motion.span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* 3D Floating Decorative Elements - Hidden on desktop as per user request */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute inset-0 pointer-events-none z-0 md:hidden"
      >
        <div className="absolute top-[10%] right-[10%] w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] left-[10%] w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-6 h-10 rounded-full border-2 border-neutral-800 flex justify-center p-1">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-2 bg-indigo-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
