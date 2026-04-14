import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

import Tilt from '../components/Tilt';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
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
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-cyan-500 dark:text-cyan-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-black dark:text-white">Email</h4>
                  <p className="text-slate-600 dark:text-slate-500">{PERSONAL_INFO.email}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-cyan-500 dark:text-cyan-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-black dark:text-white">Location</h4>
                  <p className="text-slate-600 dark:text-slate-500">{PERSONAL_INFO.location}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-cyan-500 dark:text-cyan-400">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-black dark:text-white">Availability</h4>
                  <p className="text-slate-600 dark:text-slate-500">{PERSONAL_INFO.availability}</p>
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={e => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-black dark:text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Email</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-black dark:text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-black dark:text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    placeholder="How can I help you?"
                  />
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
