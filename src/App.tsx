/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About, { Skills } from './sections/About';
import Projects, { Experience } from './sections/Projects';
import Contact from './sections/Contact';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Skeleton from './components/Skeleton';
import CodeBackground from './components/CodeBackground';
import Resume from './components/Resume';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      // Default to dark mode if no preference is saved
      return true;
    }
    return true;
  });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowSkeleton(true);
      
      // Show skeleton for a brief moment for that "premium app" feel
      setTimeout(() => {
        setShowSkeleton(false);
      }, 1200);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-slate-900 dark:text-slate-50 selection:bg-cyan-500/30 overflow-x-hidden">
      <div className="noise" />
      <CodeBackground />
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {showSkeleton && (
        <div className="max-w-7xl mx-auto px-6 pt-32 space-y-12">
          <div className="space-y-4">
            <Skeleton className="h-12 w-1/3" />
            <Skeleton className="h-24 w-2/3" />
            <div className="flex gap-4">
              <Skeleton className="h-12 w-32 rounded-full" />
              <Skeleton className="h-12 w-32 rounded-full" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Skeleton className="aspect-video rounded-3xl" />
            <Skeleton className="aspect-video rounded-3xl" />
            <Skeleton className="aspect-video rounded-3xl" />
          </div>
        </div>
      )}

      {!isLoading && !showSkeleton && (
        <AnimatePresence mode="wait">
          <motion.div
            key={isDarkMode ? 'dark' : 'light'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <main>
              <Hero onViewResume={() => setIsResumeOpen(true)} />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </main>
            <Footer />
            <Chatbot />
            <Resume isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
