import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        type: 'spring',
        stiffness: 100,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div
        className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
        whileHover={{
          y: -10,
          transition: { duration: 0.3, ease: 'easeOut' },
        }}
      >
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Glow Effect */}
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-0 blur-xl"
          animate={{
            opacity: isHovered ? 0.3 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Icon Container */}
          <motion.div
            className="relative w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center shadow-md"
            animate={{
              rotate: isHovered ? [0, -5, 5, -5, 0] : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
            }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-12 h-12 object-contain"
            />
            
            {/* Pulse Ring on Hover */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-blue-500"
              initial={{ scale: 1, opacity: 0 }}
              animate={isHovered ? {
                scale: [1, 1.2, 1.4],
                opacity: [0.5, 0.3, 0],
              } : { scale: 1, opacity: 0 }}
              transition={{
                duration: 1.5,
                repeat: isHovered ? Infinity : 0,
                ease: 'easeOut',
              }}
            />
          </motion.div>

          {/* Skill Name */}
          <motion.h3
            className="text-lg font-bold text-gray-900 dark:text-white mb-2"
            animate={{
              color: isHovered ? '#3b82f6' : undefined,
            }}
          >
            {skill.name}
          </motion.h3>

          {/* Proficiency Level */}
          {skill.level && (
            <motion.div 
              className="w-full mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05 + 0.2 }}
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-gray-500 dark:text-gray-400" />
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    Proficiency
                  </span>
                </div>
                <motion.span 
                  className="text-xs font-bold text-blue-600 dark:text-blue-400"
                  animate={{
                    scale: isHovered ? [1, 1.2, 1] : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {skill.level}%
                </motion.span>
              </div>
              
              {/* Progress Bar */}
              <div className="relative w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                {/* Background shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={isHovered ? {
                    x: ['-100%', '100%'],
                  } : {}}
                  transition={{
                    duration: 1.5,
                    repeat: isHovered ? Infinity : 0,
                    ease: 'linear',
                  }}
                />
                
                {/* Progress fill */}
                <motion.div
                  className="relative h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.05 + 0.3,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  {/* Glow effect on progress bar */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-sm"
                    animate={{
                      opacity: isHovered ? 0.6 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
          animate={{
            translateX: isHovered ? '200%' : '-100%',
          }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
          }}
        />

        {/* Corner Accent */}
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-transparent rounded-bl-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Bottom accent line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: 'left' }}
        />
      </motion.div>

      {/* Floating Particles on Hover */}
      {isHovered && (
        <>
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full"
              style={{
                background: `linear-gradient(135deg, ${
                  i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#8b5cf6' : '#ec4899'
                })`,
              }}
              initial={{
                x: '50%',
                y: '50%',
                opacity: 1,
                scale: 0,
              }}
              animate={{
                x: `${50 + (Math.cos((i * Math.PI) / 2) * 80)}%`,
                y: `${50 + (Math.sin((i * Math.PI) / 2) * 80)}%`,
                opacity: 0,
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
          ))}
        </>
      )}
    </motion.div>
  );
};

export default SkillCard;
