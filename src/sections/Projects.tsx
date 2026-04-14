import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS, EXPERIENCES } from '../constants';
import { Project } from '../types';
import ProjectModal from '../components/ProjectModal';

import Tilt from '../components/Tilt';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-32 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold tracking-widest text-cyan-500 uppercase mb-4"
            >
              Portfolio
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-display font-bold text-black dark:text-white"
            >
              Featured Case Studies
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md text-neutral-500 text-lg"
          >
            A selection of my most challenging and impactful projects, 
            where technical complexity meets exceptional user experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="relative group cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <Tilt>
                <div className="relative rounded-[2.5rem] overflow-hidden glass-dark border border-white/[0.05] shadow-2xl aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                  
                  <div className="absolute inset-0 p-10 flex flex-col justify-end">
                    <div className="flex gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-end justify-between gap-6">
                      <div className="flex-1">
                        <h4 className="text-4xl font-bold text-white mb-3 tracking-tight">{project.title}</h4>
                        <p className="text-slate-300 text-base max-w-md line-clamp-2 leading-relaxed">{project.description}</p>
                      </div>
                      
                      <div className="flex gap-4">
                        <motion.button
                          whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                          whileTap={{ scale: 0.8, rotate: -5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          className="w-14 h-14 rounded-full glass flex items-center justify-center text-white hover:bg-cyan-500/20 transition-all border border-white/10"
                          title="View Details"
                        >
                          <ExternalLink size={24} />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
}

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="experience" className="py-32 px-6 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-widest text-cyan-500 uppercase mb-4"
          >
            Journey
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-display font-bold text-black dark:text-white"
          >
            Professional Experience
          </motion.h3>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.company}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative pl-12 border-l border-black/10 dark:border-white/10 group"
            >
              <motion.div 
                variants={itemVariants}
                className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-cyan-500 group-hover:scale-150 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.5)]" 
              />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <motion.div variants={itemVariants}>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white">{exp.role}</h4>
                  <p className="text-cyan-500 font-medium">{exp.company}</p>
                </motion.div>
                <motion.span 
                  variants={itemVariants}
                  className="px-4 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-mono text-slate-500"
                >
                  {exp.period}
                </motion.span>
              </div>
              
              <motion.ul 
                variants={containerVariants}
                className="space-y-3"
              >
                {exp.description.map((item, i) => (
                  <motion.li 
                    key={i} 
                    variants={itemVariants}
                    className="text-slate-500 dark:text-slate-400 flex items-start gap-3"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500/30 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
