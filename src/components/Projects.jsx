import React from 'react';
import { motion } from 'framer-motion';

const Tag = ({ label }) => (
  <span className="px-2 py-1 text-[11px] rounded-md bg-muted text-foreground/80 border border-border">
    {label}
  </span>
);

const ProjectCard = ({ title, desc, tags, link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="group rounded-xl border border-border bg-card p-5 hover:border-cyan-500/60 transition-colors flex flex-col"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-cyan-500/20 to-indigo-500/10 mb-4" />
    <h3 className="font-semibold text-lg group-hover:text-cyan-500 transition-colors">{title}</h3>
    <p className="mt-1 text-sm text-muted-foreground flex-1">{desc}</p>
    <div className="mt-3 flex flex-wrap gap-2">
      {tags.map((t) => (
        <Tag key={t} label={t} />
      ))}
    </div>
  </motion.a>
);

const TimelineItem = ({ period, role, company, points }) => (
  <div className="relative pl-6">
    <div className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-cyan-500" />
    <div className="text-xs text-muted-foreground">{period}</div>
    <div className="font-semibold">{role} · {company}</div>
    <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground space-y-1">
      {points.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
  </div>
);

const Testimonial = ({ quote, name, title }) => (
  <div className="rounded-xl border border-border p-5 bg-card">
    <p className="italic">“{quote}”</p>
    <div className="mt-3 text-sm text-muted-foreground">— {name}, {title}</div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-6 py-20">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">Projects & Experience</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            A selection of platforms, services, and user interfaces I've built or led.
          </p>
        </div>
        <a href="#contact" className="text-cyan-500 hover:text-cyan-400 font-semibold">Start a project →</a>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="SaaS Analytics Dashboard"
          desc="Real‑time metrics, billing integrations, role-based access, and custom report builder."
          tags={["Rails", "React", "PostgreSQL", "Redis", "AWS"]}
          link="#"
        />
        <ProjectCard
          title="E‑commerce Platform"
          desc="Headless storefront with order orchestration, promotions engine, and CI/CD pipelines."
          tags={["Rails API", "Vue.js", "Stripe", "Docker", "K8s"]}
          link="#"
        />
        <ProjectCard
          title="Workflow Automation"
          desc="Microservices to process asynchronous jobs, webhooks, and third‑party integrations."
          tags={["Python", "FastAPI", "Celery", "RabbitMQ", "Grafana"]}
          link="#"
        />
      </div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Experience</h3>
            <div className="relative pl-4">
              <div className="absolute left-1 top-0 bottom-0 w-px bg-border" />
              <div className="space-y-6">
                <TimelineItem
                  period="2021 — Present"
                  role="Senior Full‑Stack Engineer"
                  company="TechNova"
                  points={[
                    "Led migration of monolith to modular Rails architecture with improved performance by 35%.",
                    "Introduced CI/CD with Docker and GitHub Actions, reducing release time from hours to minutes.",
                    "Mentored a team of 5 engineers, establishing coding standards and review practices.",
                  ]}
                />
                <TimelineItem
                  period="2018 — 2021"
                  role="Full‑Stack Engineer"
                  company="Growthly"
                  points={[
                    "Built a multi-tenant analytics platform with role-based permissions.",
                    "Scaled background job processing with Redis and Sidekiq, cutting latency by 50%.",
                  ]}
                />
                <TimelineItem
                  period="2015 — 2018"
                  role="Software Engineer"
                  company="DevWorks"
                  points={[
                    "Developed RESTful APIs consumed by mobile and web clients.",
                    "Improved test coverage to 92% with RSpec and integration tests.",
                  ]}
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Testimonials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Testimonial
                quote="Hammad consistently delivers high‑quality code and thoughtful architecture decisions."
                name="Sarah M."
                title="Head of Engineering"
              />
              <Testimonial
                quote="A proactive leader who elevates the entire team. Our releases have never been smoother."
                name="James K."
                title="Product Manager"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-xl border border-border p-6 bg-card">
            <h3 className="text-xl font-semibold">What I Bring</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>• System architecture for scale and reliability</li>
              <li>• Agile delivery and stakeholder alignment</li>
              <li>• Clear documentation and testing culture</li>
              <li>• Hands-on mentoring and team leadership</li>
            </ul>
            <a href="#contact" className="mt-6 inline-block rounded-md bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 text-sm font-semibold">Let’s talk</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
