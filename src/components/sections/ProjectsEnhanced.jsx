import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaProjectDiagram, FaCode } from 'react-icons/fa';
import OptimizedImage from '../ui/OptimizedImage';



const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <OptimizedImage
          src={project.image}
          alt={project.title}
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2">
          {project.liveLink && (
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt className="w-3 h-3" />
              <span>Live</span>
            </motion.a>
          )}

          {project.category === 'Full Stack' ? (
            <>
              {project.gitHubClient && (
                <motion.a
                  href={project.gitHubClient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white text-sm font-semibold rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="w-3 h-3" />
                  <span>Client</span>
                </motion.a>
              )}
              {project.gitHubServer && (
                <motion.a
                  href={project.gitHubServer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white text-sm font-semibold rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="w-3 h-3" />
                  <span>Server</span>
                </motion.a>
              )}
            </>
          ) : (
            project.gitHubRepo && (
              <motion.a
                href={project.gitHubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white text-sm font-semibold rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="w-3 h-3" />
                <span>Code</span>
              </motion.a>
            )
          )}
        </div>
      </div>

      {/* Hover Border Effect */}
      <motion.div
        className="absolute inset-0 border-2 border-blue-500 rounded-2xl opacity-0 pointer-events-none"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const ProjectsEnhanced = () => {
  const [filter, setFilter] = useState('All');

  // Calculate project counts
  const projectCounts = useMemo(() => {
    const totalProjects = projectsData.length;
    const frontendProjects = projectsData.filter(p => p.category === 'Frontend').length;
    const fullStackProjects = projectsData.filter(p => p.category === 'Full Stack').length;
    
    return {
      total: totalProjects,
      frontend: frontendProjects,
      fullStack: fullStackProjects
    };
  }, []);

  const filteredProjects = useMemo(() => {
    return filter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section
      id="projects"
      className="w-full min-h-screen py-16 px-4 sm:px-8 bg-linear-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
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
            Portfolio
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </motion.div>

        {/* Project Statistics */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="w-12 h-12 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <FaProjectDiagram className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {projectCounts.total}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Total Projects
            </p>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="w-12 h-12 bg-linear-to-r from-green-600 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <FaCode className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {projectCounts.frontend}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Frontend Projects
            </p>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="w-12 h-12 bg-linear-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <FaGithub className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {projectCounts.fullStack}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Full Stack Projects
            </p>
          </motion.div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {['All', 'Frontend', 'Full Stack'].map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 text-sm font-semibold rounded-full transition-all ${
                filter === cat
                  ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat} {cat !== 'All' && `(${cat === 'Frontend' ? projectCounts.frontend : projectCounts.fullStack})`}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Showing results count */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-600 dark:text-gray-400">
            Showing {filteredProjects.length} of {projectCounts.total} projects
            {filter !== 'All' && ` in ${filter}`}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsEnhanced;
