import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaProjectDiagram, FaCode } from 'react-icons/fa';
import { Sparkles, Layers, Zap, ExternalLink, Code2, Rocket, TrendingUp } from 'lucide-react';
import OptimizedImage from '../ui/OptimizedImage';
import useProjects from '../../hooks/useProjects';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700"
      whileHover={{ y: -12 }}
    >
      {/* Animated Gradient Border */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b, #3b82f6)',
          backgroundSize: '400% 400%',
        }}
        animate={isHovered ? {
          opacity: 1,
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        } : { opacity: 0 }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      {/* Inner Content Container */}
      <div className="relative bg-white dark:bg-gray-800 m-[2px] rounded-3xl overflow-hidden z-10">
        {/* Image Container with Enhanced Parallax */}
        <div className="relative h-64 overflow-hidden">
          <motion.div
            animate={isHovered ? { scale: 1.15 } : { scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full h-full"
          >
            <OptimizedImage
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Dynamic Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
            animate={isHovered ? { opacity: 0.95 } : { opacity: 0.7 }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Category Badge with Enhanced Animation */}
          <motion.div
            className="absolute top-5 right-5"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.15 + 0.3, type: 'spring', stiffness: 200 }}
          >
            <motion.span
              className="px-4 py-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 backdrop-blur-md text-white text-xs font-bold rounded-full shadow-2xl flex items-center gap-2 border border-white/20"
              whileHover={{ scale: 1.1, rotate: 5 }}
              animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              {project.category}
            </motion.span>
          </motion.div>

          {/* Floating Tech Stack Pills */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2"
              >
                {project.techStack.slice(0, 5).map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: i * 0.08, type: 'spring', stiffness: 300 }}
                    className="px-3 py-1.5 bg-white/25 backdrop-blur-lg text-white text-xs font-bold rounded-lg border border-white/40 shadow-lg"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
                {project.techStack.length > 5 && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.4, type: 'spring', stiffness: 300 }}
                    className="px-3 py-1.5 bg-gradient-to-r from-orange-500 to-red-500 backdrop-blur-lg text-white text-xs font-bold rounded-lg shadow-lg"
                  >
                    +{project.techStack.length - 5}
                  </motion.span>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Hover Shine Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: '-100%' }}
            animate={isHovered ? { x: '100%' } : { x: '-100%' }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* Content Section with Enhanced Spacing */}
        <div className="p-7">
          {/* Title with Gradient Animation */}
          <motion.h3
            className="text-2xl font-bold mb-3 transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.4 }}
          >
            <motion.span
              className={isHovered 
                ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text' 
                : 'text-gray-900 dark:text-white'}
              animate={isHovered ? { backgroundPosition: ['0%', '100%', '0%'] } : {}}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {project.title}
            </motion.span>
          </motion.h3>
          
          {/* Description with Better Typography */}
          <motion.p
            className="text-gray-600 dark:text-gray-400 text-sm mb-5 line-clamp-2 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.5 }}
          >
            {project.description}
          </motion.p>

          {/* Tech Stack Pills - Visible by Default */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.slice(0, 3).map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.6 + i * 0.05, type: 'spring' }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-lg shadow-sm"
              >
                {tech}
              </motion.span>
            ))}
            {project.techStack.length > 3 && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.75, type: 'spring' }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 text-blue-700 dark:text-blue-400 text-xs font-bold rounded-lg shadow-sm border border-blue-200 dark:border-blue-800"
              >
                +{project.techStack.length - 3} more
              </motion.span>
            )}
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {project.liveLink && (
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-sm font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group/btn"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.8 }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                <Rocket className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5 relative z-10" />
              </motion.a>
            )}

            {project.category === 'Full Stack' ? (
              <>
                {project.gitHubClient && (
                  <motion.a
                    href={project.gitHubClient}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 dark:bg-gray-700 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-all shadow-md hover:shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.85 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>Client</span>
                  </motion.a>
                )}
                {project.gitHubServer && (
                  <motion.a
                    href={project.gitHubServer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 dark:bg-gray-700 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-all shadow-md hover:shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.9 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="w-4 h-4" />
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
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-gray-900 dark:bg-gray-700 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-all shadow-md hover:shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.85 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="w-4 h-4" />
                  <span>View Code</span>
                </motion.a>
              )
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsEnhanced = () => {
  const [filter, setFilter] = useState('All');
  const { projects: projectsData, counts, loading, error, isFromAPI, refetch } = useProjects();

  // Use counts from API response
  const projectCounts = useMemo(() => {
    return {
      total: counts.all || projectsData.length,
      frontend: counts.frontend || projectsData.filter(p => p.category === 'Frontend').length,
      fullStack: counts.fullstack || projectsData.filter(p => p.category === 'Full Stack').length,
    };
  }, [counts, projectsData]);

  const filteredProjects = useMemo(() => {
    return filter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === filter);
  }, [filter, projectsData]);

  // Loading state
  if (loading) {
    return (
      <section
        id="projects"
        className="w-full min-h-screen py-20 px-4 sm:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900 flex items-center justify-center"
      >
        <div className="text-center">
          <motion.div
            className="w-20 h-20 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
          <p className="text-gray-600 dark:text-gray-400 text-lg">Loading amazing projects...</p>
        </div>
      </section>
    );
  }

  // Error state
  if (error && !isFromAPI && projectsData.length === 0) {
    return (
      <section
        id="projects"
        className="w-full min-h-screen py-20 px-4 sm:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900 flex items-center justify-center"
      >
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">⚠️</div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Unable to Load Projects
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{error}</p>
          <button
            onClick={() => refetch(true)}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="w-full min-h-screen py-20 px-4 sm:px-8 bg-gradient-to-br from-gray-50 via-blue-50/20 to-purple-50/20 dark:from-gray-900 dark:via-blue-950/10 dark:to-purple-950/10 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-80 h-80 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold mb-6 shadow-lg"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Layers className="w-4 h-4" />
            <span>Portfolio</span>
            <Zap className="w-4 h-4" />
          </motion.div>
          
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
              My Projects
            </span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A showcase of my recent work, side projects, and creative experiments
          </motion.p>
          
          {/* API Status Indicator */}
          {isFromAPI && (
            <motion.div
              className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-semibold"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Live from API
            </motion.div>
          )}
        </motion.div>

        {/* Enhanced Project Statistics */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            { 
              icon: FaProjectDiagram, 
              value: projectCounts.total, 
              label: 'Total Projects',
              gradient: 'from-blue-600 to-purple-600',
              bg: 'bg-blue-50 dark:bg-blue-900/20'
            },
            { 
              icon: FaCode, 
              value: projectCounts.frontend, 
              label: 'Frontend Projects',
              gradient: 'from-green-600 to-teal-600',
              bg: 'bg-green-50 dark:bg-green-900/20'
            },
            { 
              icon: Code2, 
              value: projectCounts.fullStack, 
              label: 'Full Stack Projects',
              gradient: 'from-orange-600 to-red-600',
              bg: 'bg-orange-50 dark:bg-orange-900/20'
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className={`${stat.bg} rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700 relative overflow-hidden group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
              
              <motion.div
                className={`w-14 h-14 bg-gradient-to-r ${stat.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-7 h-7 text-white" />
              </motion.div>
              
              <motion.h3
                className="text-4xl font-bold text-gray-900 dark:text-white mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
              >
                {stat.value}
              </motion.h3>
              
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
              
              <TrendingUp className="absolute top-4 right-4 w-5 h-5 text-gray-400 dark:text-gray-600" />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {['All', 'Frontend', 'Full Stack'].map((cat, index) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 text-sm font-bold rounded-xl transition-all shadow-md ${
                filter === cat
                  ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat} {cat !== 'All' && `(${cat === 'Frontend' ? projectCounts.frontend : projectCounts.fullStack})`}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid with Stagger Animation */}
        <motion.div
          key={filter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={`${filter}-${project.id}`} project={project} index={index} />
          ))}
        </motion.div>

        {/* Results Count with Animation */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.p
            className="text-gray-600 dark:text-gray-400 text-lg"
            whileHover={{ scale: 1.05 }}
          >
            Showing <span className="font-bold text-blue-600 dark:text-blue-400">{filteredProjects.length}</span> of{' '}
            <span className="font-bold text-purple-600 dark:text-purple-400">{projectCounts.total}</span> projects
            {filter !== 'All' && (
              <span className="text-pink-600 dark:text-pink-400 font-semibold"> in {filter}</span>
            )}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsEnhanced;
