import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import ProjectsEnhanced from './components/sections/ProjectsEnhanced';
import Languages from './components/sections/Languages';
import ContactEnhanced from './components/sections/ContactEnhanced';
import CustomCursor from './components/ui/CustomCursor';
import ParticlesBackground from './components/ui/ParticlesBackground';
import ScrollProgress from './components/ui/ScrollProgress';
import useDarkMode from './hooks/useDarkMode';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useDarkMode();

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-900 transition-colors duration-500 relative overflow-hidden">
        {/* Custom Cursor */}
        <CustomCursor />
        
        {/* Scroll Progress Bar */}
        <ScrollProgress />
        
        {/* Particles Background */}
        <ParticlesBackground />
        
        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <ProjectsEnhanced />
            <Languages />
            <ContactEnhanced />
          </main>
          <Footer />
        </div>
      </div>
    </AnimatePresence>
  );
}

export default App;
