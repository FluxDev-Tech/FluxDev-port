import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Sun, Moon, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { PERSONAL_INFO } from '../constants';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

export default function Navbar({ isDarkMode, setIsDarkMode }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        isScrolled ? 'py-4' : 'py-8'
      )}
    >
      <div className={cn(
        "max-w-5xl mx-auto rounded-full transition-all duration-500 flex items-center justify-between px-6 py-3",
        isScrolled ? "glass shadow-2xl shadow-black/20" : "bg-transparent"
      )}>
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter text-slate-900 dark:text-white group"
        >
          Flux<span className="text-cyan-500 group-hover:text-indigo-500 transition-colors">Dev</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
          
          <div className="h-4 w-[1px] bg-slate-300 dark:bg-slate-800" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-4"
          >
            <motion.button
              onClick={() => setIsDarkMode(!isDarkMode)}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.8, rotate: -15 }}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all active:scale-90"
              aria-label="Toggle Theme"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isDarkMode ? 'dark' : 'light'}
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
            <motion.a 
              href={PERSONAL_INFO.socials.github} 
              target="_blank" 
              rel="noreferrer" 
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.8 }}
              className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <Github size={18} />
            </motion.a>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.8, rotate: -5 }}
              className="text-slate-900 dark:text-white p-2 transition-all active:scale-90 relative z-[60]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMobileMenuOpen ? 'close' : 'open'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] md:hidden"
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-slate-50/95 dark:bg-[#020617]/95 backdrop-blur-2xl z-[56] md:hidden shadow-2xl flex flex-col p-10 border-l border-black/5 dark:border-white/5"
            >
              <div className="mt-20 flex flex-col gap-6 flex-1 overflow-y-auto custom-scrollbar">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="text-5xl font-display font-bold text-slate-900 dark:text-white hover:text-cyan-500 transition-colors flex items-center justify-between group py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ArrowRight size={32} className="text-cyan-500" />
                    </motion.div>
                  </motion.a>
                ))}
              </div>

              {/* Bottom Actions */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-10 border-t border-black/5 dark:border-white/5 space-y-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono text-slate-500 uppercase tracking-widest">Appearance</span>
                  <motion.button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-black/5 dark:bg-white/5 text-slate-900 dark:text-white font-bold transition-all border border-black/5 dark:border-white/5"
                  >
                    {isDarkMode ? (
                      <><Sun size={20} className="text-yellow-500" /> Light Mode</>
                    ) : (
                      <><Moon size={20} className="text-indigo-500" /> Dark Mode</>
                    )}
                  </motion.button>
                </div>

                <div className="flex items-center gap-6">
                  <motion.a 
                    href={PERSONAL_INFO.socials.github}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 text-slate-900 dark:text-white border border-black/5 dark:border-white/5"
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a 
                    href={PERSONAL_INFO.socials.linkedin}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 text-slate-900 dark:text-white border border-black/5 dark:border-white/5"
                  >
                    <Linkedin size={24} />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
