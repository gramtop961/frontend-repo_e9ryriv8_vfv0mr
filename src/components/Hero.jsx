import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/95" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-10 flex flex-col-reverse lg:flex-row items-center gap-10">
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-widest uppercase text-cyan-500 font-semibold">Full-Stack Ruby on Rails Developer</span>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Hammad Khan
          </h1>
          <p className="mt-4 text-base sm:text-lg max-w-xl text-muted-foreground">
            Building scalable products and delightful experiences for the web. 9 years crafting backend systems with Ruby on Rails & Python, and modern frontends with React & Vue.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-3 text-sm font-semibold transition-colors">
              <Rocket className="size-4" /> View My Work
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-border hover:bg-accent hover:text-accent-foreground px-5 py-3 text-sm font-semibold transition-colors">
              Hire Me
            </a>
          </div>
          <div className="mt-6 flex items-center gap-5">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-cyan-500 transition-colors">
              <Github className="size-5" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-cyan-500 transition-colors">
              <Linkedin className="size-5" />
            </a>
            <a href="#contact" aria-label="Email" className="hover:text-cyan-500 transition-colors">
              <Mail className="size-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 p-1">
            <div className="h-full w-full rounded-2xl bg-background/80 backdrop-blur border border-border flex items-center justify-center">
              <div className="h-24 w-24 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500 opacity-80" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
