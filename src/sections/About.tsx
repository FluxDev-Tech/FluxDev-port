import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Palette, 
  Terminal, 
  Cpu
} from 'lucide-react';
import { PERSONAL_INFO, SKILLS } from '../constants';
import { getSkillIcon } from '../lib/icons';

const categories = ['Frontend', 'Backend', 'Tools', 'Design'];

import Tilt from '../components/Tilt';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-widest text-cyan-500 uppercase mb-4"
          >
            About Me
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-display font-bold text-black dark:text-white"
          >
            The Architect Behind the Code
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Bio Card */}
          <Tilt className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bento-card flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-[1px] bg-cyan-500" />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-500 font-bold">Philosophy</span>
                </div>
                <h4 className="text-3xl font-display font-bold mb-6 text-neutral-900 dark:text-white leading-tight">
                  Bridging the gap between <span className="text-gradient-indigo">Logic</span> and <span className="text-gradient-purple">Aesthetics</span>.
                </h4>
                <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed max-w-2xl">
                  I believe that great software is the intersection of technical excellence and human-centric design. 
                  With a focus on modern web technologies, I build products that aren't just functional, 
                  but delightful to use. My approach is rooted in clean architecture and a relentless pursuit of aesthetic perfection.
                </p>
              </div>
              <div className="mt-12 flex flex-wrap gap-8">
                <div className="flex flex-col">
                  <span className="text-4xl font-display font-bold text-neutral-900 dark:text-white">5+</span>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-bold mt-1">Years Exp</span>
                </div>
                <div className="w-[1px] h-12 bg-black/10 dark:bg-white/10 hidden sm:block" />
                <div className="flex flex-col">
                  <span className="text-4xl font-display font-bold text-neutral-900 dark:text-white">40+</span>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-bold mt-1">Projects</span>
                </div>
                <div className="w-[1px] h-12 bg-black/10 dark:bg-white/10 hidden sm:block" />
                <div className="flex flex-col">
                  <span className="text-4xl font-display font-bold text-neutral-900 dark:text-white">100%</span>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-bold mt-1">Delivery</span>
                </div>
              </div>
            </motion.div>
          </Tilt>

          {/* Profile Card */}
          <Tilt>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bento-card group h-full flex flex-col"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                <img
                  src="https://picsum.photos/seed/mecha-anime/800/1000"
                  alt="FluxDev-Tech"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="mt-auto">
                <h4 className="text-xl font-display font-bold text-neutral-900 dark:text-white mb-1">{PERSONAL_INFO.name}</h4>
                <p className="text-cyan-500 text-xs font-bold uppercase tracking-widest">{PERSONAL_INFO.title}</p>
              </div>
            </motion.div>
          </Tilt>

          {/* Tech Stack Summary Card - Now full width or adjusted */}
          <Tilt className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bento-card h-full"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="max-w-md">
                  <h4 className="text-xl font-display font-bold text-neutral-900 dark:text-white mb-4">Core Tech Stack</h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    My arsenal consists of the latest technologies to ensure high performance, 
                    scalability, and a seamless user experience across all platforms.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 md:justify-end flex-1">
                  {SKILLS.slice(0, 10).map((skill) => (
                    <div 
                      key={skill.name}
                      className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 text-sm font-medium hover:border-cyan-500/30 transition-colors cursor-default"
                    >
                      <span className="text-cyan-400">{getSkillIcon(skill.name)}</span>
                      {skill.name}
                    </div>
                  ))}
                  <div className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-sm font-bold">
                    + Many More
                  </div>
                </div>
              </div>
            </motion.div>
          </Tilt>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-widest text-cyan-500 uppercase mb-4"
          >
            Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-display font-bold text-black dark:text-white"
          >
            My Technical Arsenal
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, idx) => (
            <div key={category}>
              <Tilt>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 glass rounded-[2rem] border border-black/5 dark:border-white/5 hover:border-cyan-500/30 transition-all group h-full relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="text-4xl font-display font-bold italic">0{idx + 1}</span>
                  </div>
                  
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-500">
                    {category === 'Frontend' && <Palette className="text-cyan-500" size={28} />}
                    {category === 'Backend' && <Terminal className="text-cyan-500" size={28} />}
                    {category === 'Tools' && <Cpu className="text-cyan-500" size={28} />}
                    {category === 'Design' && <Code2 className="text-cyan-500" size={28} />}
                  </div>
                  
                  <h4 className="text-2xl font-display font-bold mb-6 text-black dark:text-white tracking-tight">{category}</h4>
                  
                  <div className="flex flex-wrap gap-2">
                    {SKILLS.filter(s => s.category === category).map(skill => (
                      <span
                        key={skill.name}
                        className="px-4 py-2 bg-black/[0.03] dark:bg-white/[0.03] rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 border border-black/5 dark:border-white/5 flex items-center gap-2 hover:bg-cyan-500/10 hover:border-cyan-500/20 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all cursor-default"
                      >
                        <span className="text-cyan-500">
                          {getSkillIcon(skill.name)}
                        </span>
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
