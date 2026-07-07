import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Code2, Zap } from 'lucide-react';

const HydrationLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing');

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Update loading text based on progress
    const textInterval = setInterval(() => {
      setProgress((currentProgress) => {
        if (currentProgress < 30) {
          setLoadingText('Loading Assets');
        } else if (currentProgress < 60) {
          setLoadingText('Building Experience');
        } else if (currentProgress < 90) {
          setLoadingText('Almost Ready');
        } else {
          setLoadingText('Welcome');
        }
        return currentProgress;
      });
    }, 500);

    // Hide loader after animation completes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Animated Background Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400/30 dark:bg-blue-500/30 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: Math.random() * 0.5 + 0.5,
                }}
                animate={{
                  y: [null, Math.random() * window.innerHeight],
                  x: [null, Math.random() * window.innerWidth],
                  scale: [null, Math.random() * 1 + 0.5],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* Main Content Container */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-4">
            {/* Profile Image with Animations */}
            <motion.div
              className="relative"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 20,
                duration: 1,
              }}
            >
              {/* Outer Rotating Ring */}
              <motion.div
                className="absolute inset-0 -m-4 rounded-full"
                style={{
                  background:
                    'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b)',
                  backgroundSize: '400% 400%',
                }}
                animate={{
                  rotate: 360,
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
                  backgroundPosition: {
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                }}
              />

              {/* Pulsing Glow Effect */}
              <motion.div
                className="absolute inset-0 -m-2 rounded-full bg-gradient-to-r from-blue-500/50 to-purple-500/50 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Profile Image */}
              <motion.div
                className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl bg-white dark:bg-gray-800"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(59, 130, 246, 0.5)',
                    '0 0 40px rgba(139, 92, 246, 0.5)',
                    '0 0 20px rgba(59, 130, 246, 0.5)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <img
                  src="https://res.cloudinary.com/dfmkg9tfe/image/upload/v1772649534/InShot_20250528_141708179_bsaeru.jpg"
                  alt="Eistiak Ahmed"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Icons Around Image */}
              {[
                { Icon: Code2, delay: 0, color: 'text-blue-500' },
                { Icon: Zap, delay: 0.2, color: 'text-pink-500' },
              ].map(({ Icon, delay, color }, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${color} bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg`}
                  style={{
                    top: `${20 + index * 40}%`,
                    right: index === 0 ? '-10%' : 'auto',
                    left: index === 1 ? '-10%' : 'auto',
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1.2, 1],
                    opacity: [0, 1, 1],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    delay: delay + 0.5,
                    duration: 0.6,
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                >
                  <Icon className="w-5 h-5" />
                </motion.div>
              ))}
            </motion.div>

            {/* Name and Title */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.h1
                className="text-3xl sm:text-4xl font-bold mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Eistiak Ahmed
                </span>
              </motion.h1>
              <motion.p
                className="text-gray-600 dark:text-gray-400 text-sm sm:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                Junior Full Stack Developer
              </motion.p>
            </motion.div>

            {/* Loading Progress Bar */}
            <motion.div
              className="w-64 sm:w-80"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              {/* Progress Text */}
              <div className="flex items-center justify-between mb-2">
                <motion.span
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  key={loadingText}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {loadingText}
                </motion.span>
                <motion.span
                  className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  key={progress}
                >
                  {progress}%
                </motion.span>
              </div>

              {/* Progress Bar Container */}
              <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                {/* Progress Fill */}
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    background:
                      'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
                    backgroundSize: '200% 100%',
                  }}
                  initial={{ width: '0%' }}
                  animate={{
                    width: `${progress}%`,
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    width: { duration: 0.3, ease: 'easeOut' },
                    backgroundPosition: {
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                  }}
                />

                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
            </motion.div>

            {/* Loading Dots */}
            <motion.div
              className="flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.5 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Bottom Decorative Elements */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            <p className="text-xs text-gray-500 dark:text-gray-500 text-center">
              Crafting amazing experiences...
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HydrationLoader;
