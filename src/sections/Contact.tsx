import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Send, MessageSquare, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { cn } from '../lib/utils';

import Tilt from '../components/Tilt';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formState.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formState.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
      setErrors({});
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-semibold tracking-widest text-cyan-500 uppercase mb-4">Get in Touch</h2>
            <h3 className="text-4xl font-display font-bold mb-8 text-black dark:text-white">Let's build something extraordinary together.</h3>
            
            <div className="space-y-12">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-500">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">Email</h4>
                  <p className="text-xl font-display font-bold text-black dark:text-white">{PERSONAL_INFO.email}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-500">
                  <MessageSquare size={28} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">Availability</h4>
                  <p className="text-xl font-display font-bold text-black dark:text-white">{PERSONAL_INFO.availability}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <Tilt>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-8 md:p-12 rounded-[2rem] h-full"
            >
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        className={cn(
                          "w-full bg-black/5 dark:bg-white/5 border rounded-xl px-4 py-3 text-black dark:text-white focus:outline-none transition-all",
                          errors.name 
                            ? "border-red-500/50 focus:border-red-500" 
                            : "border-black/10 dark:border-white/10 focus:border-cyan-500"
                        )}
                        placeholder="John Doe"
                      />
                      <AnimatePresence>
                        {errors.name && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-1 mt-1 text-red-500 text-[10px] font-medium"
                          >
                            <AlertCircle size={12} />
                            {errors.name}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Email</label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        className={cn(
                          "w-full bg-black/5 dark:bg-white/5 border rounded-xl px-4 py-3 text-black dark:text-white focus:outline-none transition-all",
                          errors.email 
                            ? "border-red-500/50 focus:border-red-500" 
                            : "border-black/10 dark:border-white/10 focus:border-cyan-500"
                        )}
                        placeholder="john@example.com"
                      />
                      <AnimatePresence>
                        {errors.email && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-1 mt-1 text-red-500 text-[10px] font-medium"
                          >
                            <AlertCircle size={12} />
                            {errors.email}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Message</label>
                  <div className="relative">
                    <textarea
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleInputChange}
                      className={cn(
                        "w-full bg-black/5 dark:bg-white/5 border rounded-xl px-4 py-3 text-black dark:text-white focus:outline-none transition-all resize-none",
                        errors.message 
                          ? "border-red-500/50 focus:border-red-500" 
                          : "border-black/10 dark:border-white/10 focus:border-cyan-500"
                      )}
                      placeholder="How can I help you?"
                    />
                    <AnimatePresence>
                      {errors.message && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-1 mt-1 text-red-500 text-[10px] font-medium"
                        >
                          <AlertCircle size={12} />
                          {errors.message}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting || isSent}
                  className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 disabled:bg-cyan-800 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : isSent ? (
                    "Message Sent!"
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
              </form>
            </motion.div>
          </Tilt>
        </div>
      </div>
    </section>
  );
}
