import { useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavbarOptimized from './components/layout/NavbarOptimized';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ErrorBoundary from './components/ui/ErrorBoundary';
import HydrationLoader from './components/ui/HydrationLoader';
import useDarkMode from './hooks/useDarkMode';

// Lazy load components for better performance
const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Services = lazy(() => import('./components/sections/Services'));
const ProjectsEnhanced = lazy(() => import('./components/sections/ProjectsEnhanced'));
const Certificates = lazy(() => import('./components/sections/Certificates'));
const Languages = lazy(() => import('./components/sections/Languages'));
const ContactEnhanced = lazy(() => import('./components/sections/ContactEnhanced'));
const CustomCursor = lazy(() => import('./components/ui/CustomCursor'));
const ParticlesBackground = lazy(() => import('./components/ui/ParticlesBackground'));
const ScrollProgress = lazy(() => import('./components/ui/ScrollProgress'));
import './index.css';

// Loading component for lazy-loaded sections
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <motion.div
      className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    />
  </div>
);

function App() {
  // Remove unused darkMode variable
  useDarkMode();

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <ErrorBoundary>
      {/* Hydration Loader - Shows on first visit */}
      <HydrationLoader />
      
      <AnimatePresence mode="wait">
      <div className="site-grid-bg min-h-screen transition-colors duration-500 relative overflow-hidden">
        {/* Lazy load non-critical UI components */}
        <Suspense fallback={null}>
          <CustomCursor />
          <ScrollProgress />
          <ParticlesBackground />
        </Suspense>
        
        {/* Main Content */}
        <div className="relative z-10">
          <NavbarOptimized />
          <main>
            <Hero />
            
            {/* Lazy load sections with loading states */}
            <Suspense fallback={<SectionLoader />}>
              <About />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
              <Skills />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
              <Experience />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
              <Services />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
              <ProjectsEnhanced />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
              <Certificates />
            </Suspense>
            
            
            
            <Suspense fallback={<SectionLoader />}>
              <Languages />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
              <ContactEnhanced />
            </Suspense>
          </main>
          <Footer />
        </div>
      </div>
    </AnimatePresence>
    </ErrorBoundary>
  );
}

export default App;
