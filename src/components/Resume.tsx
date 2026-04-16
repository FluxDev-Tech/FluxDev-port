import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Mail, MapPin, Globe, Github, Linkedin, Phone, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, SKILLS, EXPERIENCES, PROJECTS } from '../constants';
import { getSkillIcon } from '../lib/icons';

interface ResumeProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Resume({ isOpen, onClose }: ResumeProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[150] cursor-pointer print:hidden"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 z-[151] overflow-hidden flex items-center justify-center pointer-events-none print:inset-0 print:relative print:z-0"
          >
            <div className="w-full max-w-5xl max-h-full bg-white dark:bg-slate-950 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col pointer-events-auto border border-black/5 dark:border-white/10 print:rounded-none print:border-none print:shadow-none print:max-w-none print:h-auto">
              
              {/* Toolbar */}
              <div className="p-4 md:p-6 border-b border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between bg-slate-50 dark:bg-slate-900/50 print:hidden gap-4">
                <div className="flex items-center gap-4">
                  <div className="hidden sm:flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">resume_v1.pdf</span>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePrint}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full text-sm font-bold transition-all shadow-lg shadow-cyan-500/20"
                  >
                    <Download size={16} /> Print / Save PDF
                  </motion.button>
                  <button
                    onClick={onClose}
                    className="p-2.5 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* Resume Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-16 custom-scrollbar bg-white text-slate-900 print:overflow-visible print:p-0">
                <div className="max-w-4xl mx-auto space-y-12">
                  
                  {/* Header */}
                  <header className="flex flex-col lg:flex-row justify-between items-start gap-8 border-b-2 border-slate-100 pb-12">
                    <div className="w-full lg:w-auto">
                      <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-2 text-center lg:text-left">{PERSONAL_INFO.name}</h1>
                      <p className="text-lg md:text-xl text-cyan-600 font-bold uppercase tracking-widest text-center lg:text-left">{PERSONAL_INFO.title}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm font-medium text-slate-500 w-full lg:w-auto">
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 hover:text-cyan-600 transition-colors">
                        <Mail size={16} className="text-cyan-500" /> {PERSONAL_INFO.email}
                      </a>
                      <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cyan-600 transition-colors">
                        <Github size={16} className="text-cyan-500" /> GitHub
                      </a>
                      <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cyan-600 transition-colors">
                        <Linkedin size={16} className="text-cyan-500" /> LinkedIn
                      </a>
                    </div>
                  </header>

                  {/* Summary */}
                  <section>
                    <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-6 flex items-center gap-4">
                      Professional Summary <div className="flex-1 h-[1px] bg-slate-100" />
                    </h2>
                    <p className="text-lg leading-relaxed text-slate-700">
                      {PERSONAL_INFO.bio}
                    </p>
                  </section>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Experience */}
                    <div className="lg:col-span-2 space-y-12">
                      <section>
                        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-8 flex items-center gap-4">
                          Experience <div className="flex-1 h-[1px] bg-slate-100" />
                        </h2>
                        <div className="space-y-10">
                          {EXPERIENCES.map((exp, i) => (
                            <div key={i} className="relative pl-8 border-l-2 border-slate-100">
                              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-cyan-500" />
                              <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                                <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                                <span className="text-sm font-bold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full whitespace-nowrap">{exp.period}</span>
                              </div>
                              <h4 className="text-lg font-medium text-slate-600 mb-4">{exp.company}</h4>
                              <ul className="space-y-2">
                                {exp.description.map((item, j) => (
                                  <li key={j} className="text-slate-600 flex gap-2">
                                    <span className="text-cyan-500 mt-1.5">•</span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </section>

                      <section>
                        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-8 flex items-center gap-4">
                          Featured Projects <div className="flex-1 h-[1px] bg-slate-100" />
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-6">
                          {PROJECTS.slice(0, 4).map((project) => (
                            <div key={project.id} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                              <h3 className="font-bold text-slate-900 mb-2">{project.title}</h3>
                              <p className="text-sm text-slate-600 mb-4 line-clamp-2">{project.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {project.tags.slice(0, 3).map(tag => (
                                  <span key={tag} className="text-[10px] font-bold text-slate-500 uppercase">{tag}</span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </section>
                    </div>

                    {/* Right Column: Skills & Education */}
                    <div className="space-y-12">
                      <section>
                        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-8 flex items-center gap-4">
                          Technical Skills <div className="flex-1 h-[1px] bg-slate-100" />
                        </h2>
                        <div className="space-y-6">
                          {['Frontend', 'Backend', 'Tools'].map(cat => (
                            <div key={cat}>
                              <h4 className="text-sm font-bold text-slate-900 mb-3">{cat}</h4>
                              <div className="flex flex-wrap gap-2">
                                {SKILLS.filter(s => s.category === cat).map(skill => (
                                  <div key={skill.name} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-100 text-xs font-medium text-slate-600">
                                    <span className="text-cyan-500">{getSkillIcon(skill.name, 12)}</span>
                                    {skill.name}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </section>

                      <section>
                        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-8 flex items-center gap-4">
                          Education <div className="flex-1 h-[1px] bg-slate-100" />
                        </h2>
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-bold text-slate-900">{(PERSONAL_INFO as any).education.degree}</h4>
                            <p className="text-sm text-slate-600">{(PERSONAL_INFO as any).education.institution}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs text-cyan-600 font-bold">{(PERSONAL_INFO as any).education.period}</span>
                              <span className="text-[10px] px-2 py-0.5 bg-cyan-50 text-cyan-700 rounded-full font-bold uppercase tracking-tighter">{(PERSONAL_INFO as any).education.status}</span>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section>
                        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-8 flex items-center gap-4">
                          Languages <div className="flex-1 h-[1px] bg-slate-100" />
                        </h2>
                        <div className="space-y-2 text-sm font-medium text-slate-600">
                          <div className="flex justify-between">
                            <span>English</span>
                            <span className="text-cyan-600">Fluent</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Filipino</span>
                            <span className="text-cyan-600">Native</span>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>

                  {/* Footer */}
                  <footer className="pt-12 border-t border-slate-100 text-center">
                    <p className="text-xs text-slate-400 font-mono">
                      Generated via JohnDev Portfolio • {new Date().getFullYear()}
                    </p>
                  </footer>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
