import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useProjects from '../../hooks/useProjects';
import ProjectCard from '../ui/ProjectCard';
import ProjectDetailsPage from './projects/ProjectDetailsPage';

const ProjectsEnhanced = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
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
        className="w-full min-h-screen py-20 px-4 sm:px-8 bg-linear-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900 flex items-center justify-center"
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
        className="w-full min-h-screen py-20 px-4 sm:px-8 bg-linear-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900 flex items-center justify-center"
      >
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">⚠️</div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Unable to Load Projects
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{error}</p>
          <button
            onClick={() => refetch(true)}
            className="px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
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
      className="w-full min-h-screen py-24 px-4 sm:px-8 bg-black relative border-t border-white/5 overflow-hidden bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.15, 1, 1.15],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatePresence mode="wait">
          {selectedProject ? (
            <ProjectDetailsPage
              key="details"
              project={selectedProject}
              onBack={() => setSelectedProject(null)}
            />
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-start text-left mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-none">
                  Featured <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
                </h2>

                <p className="text-slate-400 text-sm md:text-base max-w-xl font-normal leading-relaxed">
                  A showcase of my recent work and side projects.
                </p>

                <div className="w-16 h-[2px] bg-white/10 mt-6" />

                {/* API Status Indicator */}
                {isFromAPI && (
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-green-950/30 border border-green-800/20 text-green-400 rounded-full text-xs font-semibold">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Live from API
                  </div>
                )}
              </motion.div>

              {/* Enhanced Filter Buttons (Sleek Glass Bar) */}
              <div className="flex flex-wrap justify-center gap-2.5 mb-16 p-2 bg-[#0c0c14]/40 border border-white/[0.06] backdrop-blur-md rounded-2xl max-w-fit mx-auto">
                {['All', 'Frontend', 'Full Stack'].map((cat, index) => {
                  const count = cat === 'All' 
                    ? projectCounts.total 
                    : cat === 'Frontend' 
                      ? projectCounts.frontend 
                      : projectCounts.fullStack;

                  const isActive = filter === cat;

                  return (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all flex items-center gap-2 cursor-pointer ${
                        isActive
                          ? 'bg-white/10 border border-white/15 text-white shadow-inner scale-102'
                          : 'bg-transparent border border-transparent text-slate-400 hover:text-white'
                      }`}
                    >
                      <span>{cat}</span>
                      <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-bold ${
                        isActive 
                          ? 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-400' 
                          : 'bg-white/5 border border-white/5 text-slate-400'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Projects Grid with Stagger Animation */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={`${filter}-${project.id}`}
                    project={project}
                    index={index}
                    onViewDetails={(p) => setSelectedProject(p)}
                  />
                ))}
              </div>

              {/* Results Count with Animation */}
              <div className="text-center mt-16">
                <p className="text-slate-400 text-sm">
                  Showing <span className="font-bold text-cyan-400">{filteredProjects.length}</span> of{' '}
                  <span className="font-bold text-purple-400">{projectCounts.total}</span> projects
                  {filter !== 'All' && (
                    <span className="text-indigo-400 font-semibold"> in {filter}</span>
                  )}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsEnhanced;
