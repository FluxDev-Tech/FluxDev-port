import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Globe, Code2, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Project } from '../types';
import { getSkillIcon } from '../lib/icons';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentGalleryIdx, setCurrentGalleryIdx] = useState<number>(0);

  if (!project) return null;

  const allImages = [project.image, ...(project.gallery || [])];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentGalleryIdx((prev) => (prev + 1) % allImages.length);
    setSelectedImage(allImages[(currentGalleryIdx + 1) % allImages.length]);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentGalleryIdx((prev) => (prev - 1 + allImages.length) % allImages.length);
    setSelectedImage(allImages[(currentGalleryIdx - 1 + allImages.length) % allImages.length]);
  };

  const openLightbox = (img: string, idx: number) => {
    setSelectedImage(img);
    setCurrentGalleryIdx(idx);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 z-[101] overflow-hidden flex items-center justify-center pointer-events-none"
          >
            <div className="w-full max-w-6xl max-h-full bg-slate-50 dark:bg-[#020617] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col pointer-events-auto border border-white/10">
              {/* Header */}
              <div className="p-6 md:p-8 flex items-center justify-between border-b border-black/5 dark:border-white/5">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">{project.title}</h2>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-cyan-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Left: Media Gallery */}
                  <div className="space-y-8">
                    <div 
                      className="group relative aspect-video rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 shadow-lg cursor-zoom-in"
                      onClick={() => openLightbox(project.image, 0)}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Maximize2 className="text-white" size={32} />
                      </div>
                    </div>
                    
                    {project.gallery && (
                      <div className="columns-1 md:columns-2 gap-4 space-y-4">
                        {project.gallery.map((img, idx) => (
                          <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative rounded-2xl overflow-hidden border border-black/5 dark:border-white/5 shadow-sm cursor-zoom-in break-inside-avoid"
                            onClick={() => openLightbox(img, idx + 1)}
                          >
                            <img
                              src={img}
                              alt={`${project.title} gallery ${idx}`}
                              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <Maximize2 className="text-white" size={24} />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right: Info */}
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Globe size={20} className="text-cyan-500" />
                        Project Overview
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                        {project.fullDescription || project.description}
                      </p>
                    </div>

                    {project.technologies && (
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                          <Code2 size={20} className="text-cyan-500" />
                          Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map(tech => (
                            <span
                              key={tech}
                              className="px-4 py-2 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2"
                            >
                              <span className="text-cyan-500">{getSkillIcon(tech, 16)}</span>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-8 flex flex-wrap gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
                      >
                        Live Demo <ExternalLink size={18} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-8 py-4 glass rounded-2xl font-bold flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/5 transition-all border border-black/10 dark:border-white/10 text-slate-900 dark:text-white"
                      >
                        View Source <Github size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Lightbox */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-xl"
                onClick={() => setSelectedImage(null)}
              >
                <button
                  className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[210]"
                  onClick={() => setSelectedImage(null)}
                >
                  <X size={40} />
                </button>

                <div className="relative w-full h-full flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute left-4 md:left-8 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all z-[210]"
                    onClick={handlePrev}
                  >
                    <ChevronLeft size={32} />
                  </motion.button>

                  <motion.img
                    key={selectedImage}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    src={selectedImage}
                    alt="Full view"
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                    referrerPolicy="no-referrer"
                  />

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute right-4 md:right-8 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all z-[210]"
                    onClick={handleNext}
                  >
                    <ChevronRight size={32} />
                  </motion.button>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                  {allImages.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentGalleryIdx ? 'w-8 bg-cyan-500' : 'bg-white/20'}`}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}
