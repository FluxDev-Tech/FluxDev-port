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
                <h4 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-white/90">My Philosophy</h4>
                <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
                  I believe that great software is the intersection of technical excellence and human-centric design. 
                  With over 5 years in the industry, I've focused on building products that aren't just functional, 
                  but delightful to use. My approach is rooted in clean architecture, performance optimization, 
                  and a relentless pursuit of aesthetic perfection.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-neutral-900 dark:text-white">5+</span>
                  <span className="text-xs text-neutral-500 uppercase tracking-widest">Years Exp</span>
                </div>
                <div className="w-[1px] h-12 bg-black/10 dark:bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-neutral-900 dark:text-white">40+</span>
                  <span className="text-xs text-neutral-500 uppercase tracking-widest">Projects</span>
                </div>
                <div className="w-[1px] h-12 bg-black/10 dark:bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-neutral-900 dark:text-white">100%</span>
                  <span className="text-xs text-neutral-500 uppercase tracking-widest">Delivery</span>
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
              className="bento-card group h-full"
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-6">
                <img
                  src="https://picsum.photos/seed/mecha-anime/800/800"
                  alt="FluxDev-Tech"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">{PERSONAL_INFO.name}</h4>
              <p className="text-neutral-500 text-sm">{PERSONAL_INFO.title}</p>
            </motion.div>
          </Tilt>

          {/* Location Card */}
          <Tilt>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bento-card flex flex-col items-center justify-center text-center h-full"
            >
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4 text-cyan-400">
                <Terminal size={24} />
              </div>
              <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">Based In</h4>
              <p className="text-neutral-600 dark:text-neutral-400">{PERSONAL_INFO.location}</p>
            </motion.div>
          </Tilt>

          {/* Tech Stack Summary Card */}
          <Tilt className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bento-card h-full"
            >
              <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">Core Tech Stack</h4>
              <div className="flex flex-wrap gap-3">
                {SKILLS.slice(0, 8).map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 text-sm"
                  >
                    <span className="text-cyan-400">{getSkillIcon(skill.name)}</span>
                    {skill.name}
                  </div>
                ))}
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-sm font-medium">
                  + Many More
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, idx) => (
            <div key={category}>
              <Tilt>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 glass rounded-3xl hover:border-cyan-500/30 transition-colors group h-full"
                >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {category === 'Frontend' && <Palette className="text-cyan-400" />}
                  {category === 'Backend' && <Terminal className="text-cyan-400" />}
                  {category === 'Tools' && <Cpu className="text-cyan-400" />}
                  {category === 'Design' && <Code2 className="text-cyan-400" />}
                </div>
                <h4 className="text-xl font-bold mb-4 text-black dark:text-white">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.filter(s => s.category === category).map(skill => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 bg-black/5 dark:bg-white/5 rounded-full text-xs text-slate-600 dark:text-slate-400 border border-black/5 dark:border-white/5 flex items-center gap-2 hover:bg-cyan-500/10 hover:border-cyan-500/20 transition-all cursor-default"
                    >
                      <span className="text-cyan-500 dark:text-cyan-400">
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
