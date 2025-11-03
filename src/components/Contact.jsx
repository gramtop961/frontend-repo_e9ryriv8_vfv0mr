import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! Your message has been noted.');
  };

  return (
    <section id="contact" className="container mx-auto px-6 py-20">
      <div className="max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold">Contact</h2>
        <p className="mt-2 text-muted-foreground">Interested in working together? Drop a line and I’ll get back to you.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <form onSubmit={onSubmit} className="lg:col-span-2 rounded-xl border border-border bg-card p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-muted-foreground">Name</label>
              <input required className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Email</label>
              <input type="email" required className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm text-muted-foreground">Message</label>
            <textarea rows="5" required className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500" />
          </div>
          <button type="submit" className="mt-6 rounded-md bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 font-semibold">
            Send Message
          </button>
          {status && <div className="mt-3 text-sm text-cyan-500">{status}</div>}
        </form>

        <div className="rounded-xl border border-border bg-card p-6 h-max">
          <h3 className="font-semibold">Connect</h3>
          <div className="mt-4 space-y-3 text-sm">
            <a href="mailto:hammad@example.com" className="flex items-center gap-2 hover:text-cyan-500"><Mail className="size-4" /> hammad@example.com</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cyan-500"><Github className="size-4" /> github.com/hammad</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cyan-500"><Linkedin className="size-4" /> linkedin.com/in/hammad</a>
          </div>
          <div className="mt-6 rounded-lg border border-border p-4 text-xs text-muted-foreground">
            Available for freelance and full‑time opportunities.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
