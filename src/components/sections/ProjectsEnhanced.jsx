import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: 'Warm Paws',
    category: 'Frontend',
    image: 'https://i.ibb.co.com/mVS4gGn1/Screenshot-2025-12-06-024811.png',
    description:
      'Winter-themed pet care platform offering essential services for pet wellness during cold seasons.',
    techStack: ['React.js', 'Tailwind CSS', 'Firebase', 'AOS'],
    liveLink: 'https://warmpaws-winter.netlify.app/',
    gitHubRepo: 'https://github.com/eistiakahmed/Warm-Paws.git',
  },
  {
    id: 2,
    title: 'Fureverly',
    category: 'Full Stack',
    image: 'https://i.ibb.co.com/v6qDXWXX/Screenshot-2025-12-06-030605.png',
    description:
      'Full-featured pet product management system with order handling and PDF export capabilities.',
    techStack: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    liveLink: 'https://fureverly.netlify.app/',
    gitHubClient: 'https://github.com/eistiakahmed/Fureverly-Client.git',
    gitHubServer: 'https://github.com/eistiakahmed/Fureverly-Server.git',
  },
  {
    id: 3,
    title: 'Hero.IO',
    category: 'Frontend',
    image: 'https://i.ibb.co.com/svcKpBzB/Screenshot-2025-12-06-031256.png',
    description:
      'Modern platform for discovering and managing apps with trending suggestions and seamless navigation.',
    techStack: ['React.js', 'Tailwind CSS', 'Recharts', 'Axios'],
    liveLink: 'https://hero-oi-application.netlify.app/',
    gitHubRepo: 'https://github.com/eistiakahmed/Hero-IO.git',
  },
  {
    id: 4,
    title: 'BongoCart',
    category: 'Full Stack',
    image: 'https://i.ibb.co.com/jkMSVMCM/Screenshot-2025-12-06-032224.png',
    description:
      'Lightweight e-commerce prototype for browsing and managing clothing products with full CRUD operations.',
    techStack: ['Next.js', 'React.js', 'Firebase', 'Tailwind CSS'],
    liveLink: 'https://bongo-cart-bd.vercel.app/',
    gitHubClient: 'https://github.com/eistiakahmed/bongo-cart.git',
    gitHubServer: 'https://github.com/eistiakahmed/bongo-cart-backend.git',
  },
  {
    id: 5,
    title: 'Taxi Kitchen',
    category: 'Frontend',
    image: 'https://i.ibb.co.com/N2cpbTqg/Screenshot-2025-12-06-032938.png',
    description:
      'Interactive kitchen dashboard for marking orders as cooked, improving order visibility and efficiency.',
    techStack: ['React.js', 'Tailwind CSS', 'Axios', 'React Icons'],
    liveLink: 'https://taxi-kitchen-hub.netlify.app/',
    gitHubRepo: 'https://github.com/eistiakahmed/taxi-kitchen.git',
  },
  {
    id: 6,
    title: 'Emergency Service',
    category: 'Frontend',
    image: 'https://i.ibb.co.com/zVdNB1Rk/Screenshot-2025-12-06-035110.png',
    description:
      'Platform providing access to hotline numbers with one-click copy and call history tracking.',
    techStack: ['React.js', 'Tailwind CSS', 'Axios', 'React Toastify'],
    liveLink: 'https://emergency-service-directory-bd.netlify.app/',
    gitHubRepo: 'https://github.com/eistiakahmed/emergency-service.git',
  },
];

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
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
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
              className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-md"
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProjects =
    filter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length
    );
  };

  React.useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  const showGrid = filter !== 'All';

  return (
    <section
      id="projects"
      className="w-full min-h-screen py-16 px-4 sm:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900"
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
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
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
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {showGrid ? (
            /* Grid Layout for Filtered Projects */
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          ) : (
            /* Carousel for All Projects */
            <motion.div
              key="carousel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="flex items-center justify-center gap-8 overflow-hidden min-h-[600px]">
                {/* Prev Button */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
                  <motion.button
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm flex items-center justify-center text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-700 transition-colors shadow-xl border border-gray-200 dark:border-gray-700"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaChevronLeft className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Project Card */}
                <div className="relative w-full max-w-3xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={filteredProjects[currentIndex].id}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
                    >
                      <div className="relative h-96">
                        <img
                          src={filteredProjects[currentIndex].image}
                          alt={filteredProjects[currentIndex].title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 px-4 py-2 bg-blue-600/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
                          {filteredProjects[currentIndex].category}
                        </div>
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                          {filteredProjects[currentIndex].title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                          {filteredProjects[currentIndex].description}
                        </p>
                        
                        <div className="mb-6">
                          <p className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-3 tracking-wider">
                            Tech Stack
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {filteredProjects[currentIndex].techStack.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-sm rounded-lg"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                          {filteredProjects[currentIndex].liveLink && (
                            <motion.a
                              href={filteredProjects[currentIndex].liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FaExternalLinkAlt className="w-4 h-4" />
                              <span>Live Demo</span>
                            </motion.a>
                          )}

                          {filteredProjects[currentIndex].category === 'Full Stack' ? (
                            <>
                              {filteredProjects[currentIndex].gitHubClient && (
                                <motion.a
                                  href={filteredProjects[currentIndex].gitHubClient}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-all"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <FaGithub className="w-4 h-4" />
                                  <span>Client Code</span>
                                </motion.a>
                              )}
                              {filteredProjects[currentIndex].gitHubServer && (
                                <motion.a
                                  href={filteredProjects[currentIndex].gitHubServer}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-all"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <FaGithub className="w-4 h-4" />
                                  <span>Server Code</span>
                                </motion.a>
                              )}
                            </>
                          ) : (
                            filteredProjects[currentIndex].gitHubRepo && (
                              <motion.a
                                href={filteredProjects[currentIndex].gitHubRepo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <FaGithub className="w-4 h-4" />
                                <span>GitHub</span>
                              </motion.a>
                            )
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Next Button */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
                  <motion.button
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm flex items-center justify-center text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-700 transition-colors shadow-xl border border-gray-200 dark:border-gray-700"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Indicators */}
              <div className="flex justify-center items-center gap-2 mt-8">
                {filteredProjects.map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentIndex
                        ? 'w-8 bg-gradient-to-r from-blue-600 to-purple-600'
                        : 'w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsEnhanced;
