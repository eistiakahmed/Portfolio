import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './skills/SkillCard';
import { skillCategories } from '../../data/skillsData';

// Motion variants for section and cards
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full py-24 px-4 sm:px-8 md:px-16 bg-black border-t border-white/5 relative overflow-hidden bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-blue-500/5 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.header
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-start text-left mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-none">
            Skills & <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl font-normal leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks
            I use to build exceptional web experiences.
          </p>

          <div className="w-16 h-[2px] bg-white/10 mt-6" />
        </motion.header>

        <div className="space-y-16">
          {skillCategories.map((category) => (
            <motion.section
              key={category.title}
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="skill-section"
            >
              <div className="flex items-center mb-8">
                <div
                  className={`w-8 h-1 ${category.color} rounded-full mr-4`}
                ></div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  {category.title}
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    percentage={skill.percentage}
                    color={category.color}
                    index={index}
                  />
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
