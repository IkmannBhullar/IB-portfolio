import React from 'react';
import Hero from './components/Hero';
import ThemeToggle from './components/ThemeToggle';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AnimatedTooltipNav from './components/ui/AnimatedTooltipNav';
import Contact from './components/Contact';
import './index.css'; // Tailwind styles

function App() {
  return (

    <main className="min-h-screen transition-colors duration-300 bg-white text-slate-900 dark:bg-slate-900 dark:text-white">

      <ThemeToggle />

      {/* Sections with matching IDs */}
      <section id="home" className="min-h-screen">
        <Hero />
      </section>

      <section id="about" className="min-h-screen">
        <About />
      </section>

      <section id="projects" className="min-h-screen">
        <Projects />
      </section>

      <section id="skills" className="relative bg-black text-white">
        <Skills />
      </section>
      <section id="contact" className="relative bg-black text-white">
         <Contact />
      </section>
 
      {/* Sticky Tooltip Nav Bar */}
      <AnimatedTooltipNav />
    </main>
  );
}

export default App;
