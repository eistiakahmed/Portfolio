import React, { useEffect, useRef } from 'react';
import { ArrowRight, Download, Zap, Palette, Sparkles } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import Typewriter from '../ui/Typewriter';

const Hero = () => {
  const titleRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (titleRef.current) {
      const text = titleRef.current;
      const letters = text.textContent.split('');
      text.textContent = '';
      
      letters.forEach((letter, i) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.display = 'inline-block';
        text.appendChild(span);
        
        gsap.from(span, {
          opacity: 0,
          y: 50,
          rotation: 10,
          duration: 0.8,
          delay: i * 0.03,
          ease: 'back.out(1.7)',
        });
      });
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section ref={sectionRef} className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Animated linear background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <motion.span 
                className="relative flex h-3 w-3"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </motion.span>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Available for work
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mb-6"
            >
              <Typewriter 
                roles={[
                  'Junior Frontend Developer',
                  'Junior MERN Stack Developer',
                  'Junior React Developer'
                ]}
                speed={100}
                deleteSpeed={50}
                pauseTime={2000}
              />
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="max-w-xl mx-auto lg:mx-0 text-base md:text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed"
            >
              Skilled in React.js and modern JavaScript, passionate about building
              clean, responsive, and user-friendly web interfaces. Turning ideas
              into smooth, interactive experiences.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-8 items-center mb-12"
            >
              <motion.div 
                className="text-center sm:text-left"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.p 
                  className="text-4xl font-bold bg-linear-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, type: 'spring' }}
                >
                  10+
                </motion.p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Projects</p>
              </motion.div>
              <motion.div 
                className="text-center sm:text-left"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.p 
                  className="text-4xl font-bold bg-linear-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, type: 'spring' }}
                >
                  5+
                </motion.p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Technologies</p>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* View Work Button */}
              <motion.a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg relative overflow-hidden"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View My Work</span>
                <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              {/* Download Resume Button */}
              <motion.a
                href="/EistiakAhmed_Resume.pdf"
                download="EistiakAhmed_Resume.pdf"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-300 font-semibold rounded-lg shadow-md relative overflow-hidden"
                whileHover={{ scale: 1.05, borderColor: '#3b82f6' }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              <div className="absolute inset-0 rounded-full border-2 border-blue-600 animate-pulse"></div>

              {/* Floating Icons */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 -left-4 sm:top-12 sm:-left-8 z-10"
              >
                <div className="flex items-center gap-2 bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <svg
                    className="w-5 h-5 text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                      fill="currentColor"
                      opacity="0.2"
                    />
                    <ellipse cx="12" cy="12" rx="2" ry="5" transform="rotate(-60 12 12)" stroke="currentColor" strokeWidth="1.5" />
                    <ellipse cx="12" cy="12" rx="2" ry="5" transform="rotate(60 12 12)" stroke="currentColor" strokeWidth="1.5" />
                    <ellipse cx="12" cy="12" rx="2" ry="5" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                  </svg>
                  <span className="font-semibold text-sm text-gray-900 dark:text-white">React</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-16 -right-2 sm:bottom-24 sm:-right-6 z-10"
              >
                <div className="flex items-center gap-2 bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <Zap className="w-5 h-5 text-orange-400" fill="currentColor" />
                  <span className="font-semibold text-sm text-gray-900 dark:text-white">Fast</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-8 -left-2 sm:bottom-12 sm:-left-8 z-10"
              >
                <div className="flex items-center gap-2 bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <Palette className="w-5 h-5 text-pink-400" />
                  <span className="font-semibold text-sm text-gray-900 dark:text-white">Design</span>
                </div>
              </motion.div>

              {/* Profile Image */}
              <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-gray-300/50 dark:border-gray-700/50">
                <img
                  src="https://i.ibb.co/wF1xjPg9/1763497093402.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
