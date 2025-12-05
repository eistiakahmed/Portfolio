import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';
import SectionWrapper from '../ui/SectionWrapper';

const ProjectsEnhanced = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with cart, checkout, and payment integration.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      category: 'Web App',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/username/project',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task manager with real-time updates and team features.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      category: 'Productivity',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/username/project',
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with forecasts, maps, and location-based alerts.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
      category: 'Utility',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/username/project',
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio with smooth animations and interactive elements.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
      category: 'Portfolio',
      technologies: ['React', 'Framer Motion', 'GSAP'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/username/project',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for tracking social media metrics and engagement.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      category: 'Analytics',
      technologies: ['React', 'D3.js', 'Express'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/username/project',
    },
    {
      title: 'Recipe Finder',
      description: 'Discover and save recipes with ingredient search and meal planning.',
      image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&q=80',
      category: 'Lifestyle',
      technologies: ['React', 'Spoonacular API', 'Redux'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/username/project',
    },
  ];

  return (
    <SectionWrapper id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            My Work
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured{' '}
            <span className="text-gradient">Projects</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in modern web development,
            from concept to deployment.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects on GitHub
            <motion.svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ProjectsEnhanced;
