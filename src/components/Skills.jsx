import React from 'react';
import { Code2, Server, Cloud, Docker, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';

const SkillBadge = ({ label }) => (
  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent text-accent-foreground/90 border border-border">
    {label}
  </span>
);

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto px-6 py-20">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">Skills & Tooling</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Production-grade engineering across backend, frontend, and DevOps with a focus on quality, performance, and maintainability.
          </p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          className="rounded-xl border border-border bg-card p-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md bg-cyan-500/10 text-cyan-500">
              <Server className="size-5" />
            </div>
            <h3 className="font-semibold">Backend</h3>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <SkillBadge label="Ruby on Rails" />
            <SkillBadge label="Ruby" />
            <SkillBadge label="Python" />
            <SkillBadge label="RESTful APIs" />
            <SkillBadge label="PostgreSQL" />
            <SkillBadge label="Redis" />
            <SkillBadge label="RSpec" />
          </div>
        </motion.div>

        <motion.div
          className="rounded-xl border border-border bg-card p-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md bg-cyan-500/10 text-cyan-500">
              <Code2 className="size-5" />
            </div>
            <h3 className="font-semibold">Frontend</h3>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <SkillBadge label="React" />
            <SkillBadge label="Vue.js" />
            <SkillBadge label="TypeScript" />
            <SkillBadge label="Tailwind CSS" />
            <SkillBadge label="Vite" />
            <SkillBadge label="Accessibility" />
          </div>
        </motion.div>

        <motion.div
          className="rounded-xl border border-border bg-card p-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md bg-cyan-500/10 text-cyan-500">
              <Cloud className="size-5" />
            </div>
            <h3 className="font-semibold">DevOps & Tools</h3>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <SkillBadge label="AWS" />
            <SkillBadge label="Docker" />
            <SkillBadge label="Git" />
            <SkillBadge label="CI/CD" />
            <SkillBadge label="Kubernetes" />
            <SkillBadge label="Monitoring" />
          </div>
          <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
            <Docker className="size-4" />
            <GitBranch className="size-4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
