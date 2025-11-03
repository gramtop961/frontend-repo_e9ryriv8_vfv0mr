import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const NavLink = ({ href, children }) => (
  <a href={href} className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-md">
    {children}
  </a>
);

function App() {
  return (
    <div className="scroll-smooth min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 backdrop-blur bg-background/70">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-extrabold tracking-tight text-lg">Hammad Khan</a>
          <nav className="hidden sm:flex items-center">
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          <a href="#contact" className="inline-flex items-center rounded-md bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1.5 text-sm font-semibold">
            Hire Me
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-border/60">
        <div className="container mx-auto px-6 py-8 text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Hammad Khan. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span>Ruby on Rails · React · AWS</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
