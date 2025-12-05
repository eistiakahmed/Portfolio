import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from '../ui/SkillCard';
import SectionWrapper from '../ui/SectionWrapper';

const SkillsEnhanced = () => {
  const skills = [
    { name: 'React', icon: '/src/assets/react.png', level: 90 },
    { name: 'JavaScript', icon: '/src/assets/javascript-48.png', level: 85 },
    { name: 'HTML5', icon: '/src/assets/html.png', level: 95 },
    { name: 'CSS3', icon: '/src/assets/css.png', level: 90 },
    { name: 'Tailwind CSS', icon: '/src/assets/tailwindCSS.png', level: 88 },
    { name: 'Node.js', icon: '/src/assets/nodejs.png', level: 75 },
    { name: 'Express.js', icon: '/src/assets/expressjs.png', level: 70 },
    { name: 'MongoDB', icon: '/src/assets/mongodb.png', level: 72 },
    { name: 'Firebase', icon: '/src/assets/firebase.png', level: 80 },
    { name: 'Git', icon: '/src/assets/git.png', level: 85 },
    { name: 'GitHub', icon: '/src/assets/github.png', level: 85 },
    { name: 'VS Code', icon: '/src/assets/vscode.png', level: 90 },
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: '/src/assets/problem.png' },
    { name: 'Communication', icon: '/src/assets/communication.png' },
    { name: 'Teamwork', icon: '/src/assets/teamwork.png' },
  ];

  return (
    <SectionWrapper id="skills" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            What I Know
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills &{' '}
            <span className="text-gradient">Technologies</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
            I use to build exceptional web experiences.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <motion.h3
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Soft Skills
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className="w-20 h-20 mx-auto mb-4 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-md"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 object-contain"
                  />
                </motion.div>
                
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  {skill.name}
                </h4>

                {/* Decorative elements */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {[
            { label: 'Technologies', value: '12+' },
            { label: 'Projects', value: '10+' },
            { label: 'Experience', value: '1+ Year' },
            { label: 'Certifications', value: '5+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.p
                className="text-4xl font-bold text-gradient mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring' }}
              >
                {stat.value}
              </motion.p>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsEnhanced;
