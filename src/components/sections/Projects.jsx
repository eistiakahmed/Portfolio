import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: 'Warm Paws - Pet Care in Winter',
    category: 'Frontend',
    image: 'https://i.ibb.co.com/mVS4gGn1/Screenshot-2025-12-06-024811.png',
    description:
      'Warm Paws is a winter-themed pet care platform built to help pet owners provide better care during cold seasons.It offers essential services such as Clothing, Comfort, Grooming, Health, Wellness, and Outdoor Care, ensuring pets stay warm, safe, and healthy.',
    techStack: [
      'React.js',
      'Tailwind CSS',
      'React Router',
      'Axios',
      'Firebase',
      'AOS',
    ],
    liveLink: 'https://warmpaws-winter.netlify.app/',
    gitHubRepo: 'https://github.com/eistiakahmed/Warm-Paws.git',
  },
  {
    id: 2,
    title: 'Fureverly',
    category: 'Full Stack',
    image: 'https://i.ibb.co.com/v6qDXWXX/Screenshot-2025-12-06-030605.png',
    description:
      'Fureverly is a full-featured pet product management system built with the MERN stack.Users and admins can manage products, handle orders, and export order details as PDF.The platform features a clean UI, theme switch, smooth animations, and a responsive experience.',
    techStack: [
      'React.js',
      'Firebase Auth',
      'Tailwind CSS',
      'DaisyUI',
      'Vite',
      'React Router',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Farmer Motion',
    ],
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
      'Hero IO is a modern and intuitive platform designed for discovering, downloading, and managing apps with ease. Built with a sleek UI and smooth user experience, it offers trending app suggestions, app details, installation management, and seamless navigation across pages.',
    techStack: [
      'React.js, React Router, Tailwind CSS',
      'DaisyUI',
      'Recharts',
      'Axios',
      'React Icons',
      'React Toastify',
    ],
    liveLink: 'https://hero-oi-application.netlify.app/',
    gitHubRepo: 'https://github.com/eistiakahmed/Hero-IO.git',
  },
  {
    id: 4,
    title: 'BongoCart',
    category: 'Full Stack',
    image: 'https://i.ibb.co.com/jkMSVMCM/Screenshot-2025-12-06-032224.png',
    description:
      'BongoCart is a lightweight e-commerce prototype built with Next.js, where users can browse a collection of clothing products. After logging in, users can add new products, view detailed information, update or delete their own products, and manage all items they’ve posted.',
    techStack: [
      'Next.js',
      'React.js, Tailwind CSS',
      'DaisyUI',
      'Firebase',
      'Axios',
      'React Icons',
      'React Toastify',
    ],
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
      'Designed an interactive kitchen dashboard where staff can mark orders as Cooked and ready to serve, improving order visibility and efficiency.Designed an interactive kitchen dashboard where staff can mark orders as Cooked and ready to serve, improving order visibility and efficiency',
    techStack: [
      'React.js, Tailwind CSS',
      'DaisyUI',
      'Axios',
      'React Icons',
      'React Spinners',
      'React Toastify',
    ],
    liveLink: 'https://taxi-kitchen-hub.netlify.app/',
    gitHubRepo: 'https://github.com/eistiakahmed/taxi-kitchen.git',
  },
  {
    id: 6,
    title: 'Emergency Service Directory',
    category: 'Frontend',
    image: 'https://i.ibb.co.com/zVdNB1Rk/Screenshot-2025-12-06-035110.png',
    description:
      'Emergency Service Directory is a platform that provides access to a wide range of hotline numbers. With just one click, you can copy any number to your clipboard. The website also keeps track of your call history, showing which numbers you have called.',
    techStack: [
      'React.js, Tailwind CSS',
      'DaisyUI',
      'Axios',
      'React Icons',
      'React Spinners',
      'React Toastify',
    ],
    liveLink: 'https://emergency-service-directory-bd.netlify.app/',
  },
  {
    id: 7,
    title: 'Digital Life Lessons',
    category: 'Full Stack',
    image:
      'https://i.ibb.co/3Y8Z0ZCb/screencapture-digital-life-lessons-netlify-app-dashboard-admin-2025-12-23-19-43-05.png',
    description:
      'Digital Life Lessons is a full-stack (MERN) web application that allows users to share real-life experiences as meaningful lessons. Users can explore content using search, filters, and pagination, and engage through likes, comments, and favorites. The platform includes role-based access (Admin, Free & Premium users) with secure Stripe payment integration, focusing on community learning and personal growth.',
    techStack: [
      'React.js',
      'Vite',
      'Tailwind CSS',
      'DaisyUI',
      'Framer Motion',
      'React Router',
      'Firebase Authentication',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Stripe Payment',
    ],
    liveLink: 'https://digital-life-lessons.netlify.app/',
    gitHubClient:
      'https://github.com/eistiakahmed/Digital_Life_Lessons_Frontend.git',
    gitHubServer:
      'https://github.com/eistiakahmed/Digital_Life_Lessons_Backend.git',
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
          {['All', 'Full Stack', 'Frontend'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                filter === cat
                  ? 'bg-blue-600 text-white'
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
              <motion.button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-sm flex items-center justify-center text-gray-800 dark:text-white hover:bg-white/20 dark:hover:bg-black/30 transition-colors shadow-lg border border-gray-200 dark:border-gray-700"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronLeft className="w-5 h-5" />
              </motion.button>
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
                    <div className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full ">
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
                    <div className="flex flex-wrap gap-2 mb-6">
                      {filteredProjects[currentIndex].techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      {/* Live Demo Button - Always show */}
                      {filteredProjects[currentIndex].liveLink && (
                        <motion.a
                          href={filteredProjects[currentIndex].liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaExternalLinkAlt className="w-4 h-4" />
                          <span>Live Demo</span>
                        </motion.a>
                      )}

                      {/* GitHub Buttons - Show for Full Stack projects */}
                      {filteredProjects[currentIndex].category ===
                        'Full Stack' && (
                        <>
                          {filteredProjects[currentIndex].gitHubClient && (
                            <motion.a
                              href={filteredProjects[currentIndex].gitHubClient}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 dark:bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-all shadow-md hover:shadow-lg"
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
                              className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 dark:bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-all shadow-md hover:shadow-lg"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FaGithub className="w-4 h-4" />
                              <span>Server Code</span>
                            </motion.a>
                          )}
                        </>
                      )}

                      {/* GitHub Button - Show for Frontend projects */}
                      {filteredProjects[currentIndex].category === 'Frontend' &&
                        filteredProjects[currentIndex].gitHubRepo && (
                          <motion.a
                            href={filteredProjects[currentIndex].gitHubRepo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 dark:bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-all shadow-md hover:shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaGithub className="w-4 h-4" />
                            <span>GitHub</span>
                          </motion.a>
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
                className="w-12 h-12 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-sm flex items-center justify-center text-gray-800 dark:text-white hover:bg-white/20 dark:hover:bg-black/30 transition-colors shadow-lg border border-gray-200 dark:border-gray-700"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronRight className="w-5 h-5" />
              </motion.button>
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
