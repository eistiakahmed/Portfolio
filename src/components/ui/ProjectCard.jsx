import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
      whileHover={{ y: -8 }}
    >
      {/* Animated Gradient Border */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #667eea 100%)',
          backgroundSize: '300% 300%',
        }}
        animate={isHovered ? {
          opacity: 1,
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        } : { opacity: 0 }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Inner Container */}
      <div className="relative bg-white dark:bg-gray-800 m-0.5 rounded-2xl overflow-hidden">
        {/* Image Container */}
        <div className="relative h-44 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.15 : 1,
            }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          />
          
          {/* Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent"
            animate={{ opacity: isHovered ? 1 : 0.7 }}
            transition={{ duration: 0.3 }}
          />

          {/* Hover Buttons */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center gap-2 px-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {project.liveLink && (
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg text-xs font-bold shadow-xl backdrop-blur-sm min-w-[90px]"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    whileHover={{ scale: 1.08, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live
                  </motion.a>
                )}
                
                {/* Full Stack - Client/Server */}
                {project.category === 'Full Stack' && (
                  <>
                    {project.gitHubClient && (
                      <motion.a
                        href={project.gitHubClient}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1 px-3 py-2 bg-gray-900/90 text-white rounded-lg text-xs font-bold shadow-xl backdrop-blur-sm border border-gray-700 min-w-[90px]"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.15 }}
                        whileHover={{ scale: 1.08, backgroundColor: '#1f2937' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-3.5 h-3.5" />
                        Client
                      </motion.a>
                    )}
                    {project.gitHubServer && (
                      <motion.a
                        href={project.gitHubServer}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1 px-3 py-2 bg-gray-900/90 text-white rounded-lg text-xs font-bold shadow-xl backdrop-blur-sm border border-gray-700 min-w-[90px]"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ scale: 1.08, backgroundColor: '#1f2937' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-3.5 h-3.5" />
                        Server
                      </motion.a>
                    )}
                  </>
                )}

                {/* Frontend - Single Repo */}
                {project.category === 'Frontend' && project.gitHubRepo && (
                  <motion.a
                    href={project.gitHubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-900/90 text-white rounded-lg text-xs font-bold shadow-xl backdrop-blur-sm border border-gray-700 min-w-[90px]"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    whileHover={{ scale: 1.08, backgroundColor: '#1f2937' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-3.5 h-3.5" />
                    Code
                  </motion.a>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Category Badge */}
          <motion.div
            className="absolute top-3 right-3"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
          >
            <motion.span
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-linear-to-r from-blue-600 to-purple-600 text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Sparkles className="w-3 h-3" />
              {project.category}
            </motion.span>
          </motion.div>

          {/* Shine Effect */}
          <motion.div
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: '-100%' }}
            animate={isHovered ? { x: '100%' } : { x: '-100%' }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* Content Section */}
        <div className="p-5">
          {/* Title */}
          <motion.h3
            className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-1 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.4 }}
          >
            {project.title}
          </motion.h3>
          
          {/* Description */}
          <motion.p
            className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.5 }}
          >
            {project.description}
          </motion.p>

          {/* Tech Stack */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            {project.techStack && project.techStack.slice(0, 3).map((tech, i) => (
              <motion.span
                key={i}
                className="px-3 py-1 bg-linear-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-lg font-medium shadow-sm whitespace-nowrap shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.6 + i * 0.05, type: 'spring' }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -2,
                  background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                  color: '#ffffff'
                }}
              >
                {tech}
              </motion.span>
            ))}
            {project.techStack && project.techStack.length > 3 && (
              <motion.span
                className="px-3 py-1 bg-linear-to-r from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 text-blue-700 dark:text-blue-400 text-xs rounded-lg font-bold shadow-sm border border-blue-200 dark:border-blue-800 whitespace-nowrap shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.75, type: 'spring' }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                +{project.techStack.length - 3}
              </motion.span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
