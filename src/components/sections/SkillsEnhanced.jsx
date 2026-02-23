import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SkillCard from '../ui/SkillCard';
import SectionWrapper from '../ui/SectionWrapper';
import { Code2, Server, Wrench, Users, Sparkles } from 'lucide-react';

const SkillsEnhanced = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const skillCategories = [
    {
      name: 'Frontend',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', icon: '/src/assets/react.png', level: 90, category: 'Frontend' },
        { name: 'JavaScript', icon: '/src/assets/javascript-48.png', level: 85, category: 'Frontend' },
        { name: 'HTML5', icon: '/src/assets/html.png', level: 95, category: 'Frontend' },
        { name: 'CSS3', icon: '/src/assets/css.png', level: 90, category: 'Frontend' },
        { name: 'Tailwind CSS', icon: '/src/assets/tailwindCSS.png', level: 88, category: 'Frontend' },
      ]
    },
    {
      name: 'Backend',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', icon: '/src/assets/nodejs.png', level: 75, category: 'Backend' },
        { name: 'Express.js', icon: '/src/assets/expressjs.png', level: 70, category: 'Backend' },
        { name: 'MongoDB', icon: '/src/assets/mongodb.png', level: 72, category: 'Backend' },
        { name: 'Firebase', icon: '/src/assets/firebase.png', level: 80, category: 'Backend' },
      ]
    },
    {
      name: 'Tools',
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git', icon: '/src/assets/git.png', level: 85, category: 'Tools' },
        { name: 'GitHub', icon: '/src/assets/github.png', level: 85, category: 'Tools' },
        { name: 'VS Code', icon: '/src/assets/vscode.png', level: 90, category: 'Tools' },
      ]
    }
  ];

  const allSkills = skillCategories.flatMap(cat => cat.skills);

  const softSkills = [
    { name: 'Problem Solving', icon: '/src/assets/problem.png', description: 'Analytical thinking & debugging' },
    { name: 'Communication', icon: '/src/assets/communication.png', description: 'Clear & effective collaboration' },
    { name: 'Teamwork', icon: '/src/assets/teamwork.png', description: 'Collaborative project delivery' },
  ];

  const filteredSkills = activeCategory === 'All' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeCategory);

  // Add a key to force re-render when data changes
  const componentKey = `skills-${activeCategory}-${filteredSkills.length}`;

  return (
    <SectionWrapper id="skills" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-full text-sm font-semibold mb-4 border border-purple-200 dark:border-purple-800"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-purple-600 dark:text-purple-400">My Expertise</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills &{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
            I use to build exceptional web experiences.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <motion.button
            onClick={() => setActiveCategory('All')}
            className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
              activeCategory === 'All'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md border border-gray-200 dark:border-gray-700'
            }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            All Skills
          </motion.button>
          
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  activeCategory === category.name
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md border border-gray-200 dark:border-gray-700'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Technical Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={componentKey}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {filteredSkills.map((skill, index) => (
              <SkillCard key={`${skill.name}-${skill.category}-${index}`} skill={skill} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Soft Skills Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-center mb-10">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 rounded-full text-sm font-semibold mb-4 border border-pink-200 dark:border-pink-800"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
            >
              <Users className="w-4 h-4 text-pink-600 dark:text-pink-400" />
              <span className="text-pink-600 dark:text-pink-400">Beyond Code</span>
            </motion.div>
            
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Soft Skills
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Gradient Background on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                <div className="relative z-10">
                  <motion.div
                    className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center shadow-md"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-12 h-12 object-contain"
                    />
                  </motion.div>
                  
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {skill.name}
                  </h4>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.description}
                  </p>
                </div>

                {/* Corner Accent */}
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {[
            { label: 'Technologies', value: '12+', color: 'from-blue-500 to-cyan-500' },
            { label: 'Projects', value: '10+', color: 'from-purple-500 to-pink-500' },
            { label: 'Experience', value: '1+ Year', color: 'from-orange-500 to-red-500' },
            { label: 'Certifications', value: '5+', color: 'from-green-500 to-emerald-500' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="relative group text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1, type: 'spring' }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              {/* Gradient Background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
              
              <div className="relative z-10">
                <motion.p
                  className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1, type: 'spring', stiffness: 200 }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsEnhanced;
