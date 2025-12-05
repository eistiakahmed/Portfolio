import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'Local Food Lovers Network',
    category: 'Full Stack',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCEojOfiktkeGS2EVB5TXJX9ea9sqeKrl4xQf64d-8RbKz4KB3bM-mdYnO7r7HOC-l94BhmdbPY4IkD4H6hPdPMiKgdHxN7EMK6hlqFR9Ml7YTDWVJuY6H7FFl7t0g0CfDc2CKKzUizpJ2jg9wZWsqmA_FGkp8vwH3jUKURE2YqmgXsdgT3qYN_qNvltpBjJscd0DjbPj3-Hm7Pp-dh3M5vQAvGJmWYreQVEkjN5tI6Qmt-ug0zk6xCDV_pwLIl4EgI0i7Juyacsi0',
    description:
      'A full-stack food review platform where users explore dishes, share reviews, and save favorites. Engineered complete CRUD review management system with real-time search and filtering using optimized regex queries.',
    techStack: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    id: 2,
    title: 'GreenNest - Plant Care App',
    category: 'Web App',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDfGeHmsvMjL5ttPPEUh9e1jEkvy1fb2JNTV1MoKYWH8Vug8lwSYvz8WtaHbjezG3-cmadcLTtF9iwl4BX4PJND468Qjkx-dQaso3ADQSVsDIn_CES8rONvADVINcv2iki5lxwIHH_5vhlsgnHvX7QLq3P6g1dGR82QmvB6-2hjaJFAyt1ChZQLVewjDfE4sGBn0w5O_NkolO1flg7zl1zHZnBxpFU67REMfeFpIl1fxOXhhP1o1QVOeo49ok9v_zvxmwJODkyKaiA',
    description:
      'A plant-care and product exploration SPA featuring user authentication, category-based filtering, and smooth interactions.',
    techStack: ['React.js', 'Firebase Auth', 'Tailwind CSS', 'DaisyUI'],
  },
];

const Projects = () => {
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

  // Reset index when filter changes
  React.useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  return (
    <section
      id="projects"
      className="w-full min-h-screen p-4 sm:p-8 flex items-center justify-center bg-white
 dark:bg-black"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
            A showcase of my recent work and side projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {['All', 'Full Stack', 'Web App'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                filter === cat
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="flex items-center justify-center gap-8 overflow-hidden min-h-[500px]">
            {/* Prev Button */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-sm flex items-center justify-center text-gray-800 dark:text-white hover:bg-white/20 dark:hover:bg-black/30 transition-colors shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>

            {/* Project Card */}
            <div className="relative w-full max-w-2xl z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={filteredProjects[currentIndex].id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-[#191d31] backdrop-blur-sm border border-gray-200 dark:border-gray-700/80 rounded-lg shadow-2xl overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={filteredProjects[currentIndex].image}
                      alt={filteredProjects[currentIndex].title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold text-white bg-primary rounded-full">
                      {filteredProjects[currentIndex].category}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {filteredProjects[currentIndex].title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                      {filteredProjects[currentIndex].description}
                    </p>
                    <div className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-500 mb-3 tracking-wider">
                      Tech Stack
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {filteredProjects[currentIndex].techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next Button */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-sm flex items-center justify-center text-gray-800 dark:text-white hover:bg-white/20 dark:hover:bg-black/30 transition-colors shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {filteredProjects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-colors ${
                idx === currentIndex
                  ? 'bg-primary'
                  : 'bg-gray-300 dark:bg-gray-700 hover:bg-primary/70'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
