import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-black/5 dark:border-white/5 bg-transparent transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <a href="#" className="text-2xl font-display font-bold tracking-tighter text-slate-900 dark:text-white">
            Flux<span className="text-cyan-500">Dev</span>
          </a>
          <p className="text-slate-500 text-sm mt-2">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={PERSONAL_INFO.socials.twitter} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
            <Twitter size={20} />
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
