import React from 'react';
import { motion } from 'framer-motion';

// Import logos
import javascriptLogo from '../../assets/javascript-48.png';
import reactRouterLogo from '../../assets/react-router-svgrepo-com.svg';
import reactLogo from '../../assets/react.png';
import nextjsLogo from '../../assets/next.js.png';
import vscodeLogo from '../../assets/vscode.png';
import vercelLogo from '../../assets/vercel.png';
import teamworkLogo from '../../assets/teamwork.png';
import tailwindcssLogo from '../../assets/tailwindCSS.png';
import problemSolvingLog from '../../assets/problem.png';
import postManLogo from '../../assets/postman.png';
import notionLogo from '../../assets/notion.png';
import nodejsLogo from '../../assets/nodejs.png';
import netlifyLogo from '../../assets/netlify.png';
import mongodbLogo from '../../assets/mongodb.png';
import JWTLogo from '../../assets/jwt-48.png';
import htmlLogo from '../../assets/html.png';
import cssLogo from '../../assets/css.png';
import motionLogo from '../../assets/motion.png'
import firebaseLogo from '../../assets/firebase.png';
import gitLogo from '../../assets/git.png';
import expressJsLogo from '../../assets/expressjs.png';
import tanStackLogo from '../../assets/tanStack.png';
import communicationLogo from '../../assets/communication.png';
import timeManagementLogo from '../../assets/clock-48.png';



// Motion variants for section and cards
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

// SkillCard component
const SkillCard = ({ name, icon, percentage, color, index }) => (
  <motion.div
    variants={cardVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    custom={index}
    whileHover={{ scale: 1.05 }}
    className="bg-white dark:bg-[#191d31] border border-gray-200 dark:border-gray-800 rounded-lg p-4 flex flex-col items-center text-center shadow-sm transition-all"
  >
    <img
      src={icon}
      alt={`${name} logo`}
      className="h-16 w-16 object-contain mb-4"
    />
    <h3 className="font-medium text-sm text-gray-800 dark:text-gray-200 mb-4">
      {name}
    </h3>
    <div className="w-full mt-auto">
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-1">
        <div
          className={`h-1.5 rounded-full ${color}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400">{percentage}%</p>
    </div>
  </motion.div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'bg-cyan-400',
      skills: [
        { name: 'JavaScript (ES6+)', percentage: 86, icon: javascriptLogo },
        { name: 'React.js', percentage: 86, icon: reactLogo },
        { name: 'Next.js', percentage: 57, icon: nextjsLogo },
        { name: 'React Router', percentage: 87, icon: reactRouterLogo },
        { name: 'Tailwind CSS', percentage: 76, icon: tailwindcssLogo },
        { name: 'HTML5', percentage: 80, icon: htmlLogo },
        { name: 'CSS3', percentage: 78, icon: cssLogo },
        { name: 'TanStack Query', percentage: 50, icon: tanStackLogo },
      ],
    },
    {
      title: 'Backend',
      color: 'bg-green-400',
      skills: [
        { name: 'Node.js', percentage: 54, icon: nodejsLogo },
        { name: 'Express.js', percentage: 67, icon: expressJsLogo },
        { name: 'MongoDB', percentage: 56, icon: mongodbLogo },
        { name: 'JWT', percentage: 65, icon: JWTLogo },
        { name: 'Firebase Auth', percentage: 60, icon: firebaseLogo },
        { name: 'REST API', percentage: 67, icon: postManLogo },
      ],
    },
    {
      title: 'Tools',
      color: 'bg-orange-500',
      skills: [
        { name: 'Git & GitHub', percentage: 90, icon: gitLogo },
        { name: 'VS Code', percentage: 96, icon: vscodeLogo },
        { name: 'Postman', percentage: 88, icon: postManLogo },
        { name: 'Notion', percentage: 50, icon: notionLogo },
        { name: 'Netlify', percentage: 88, icon: netlifyLogo },
        { name: 'Vercel', percentage: 87, icon: vercelLogo },
        { name: 'Framer Motion', percentage: 87, icon: motionLogo },
      ],
    },
    {
      title: 'Soft Skills',
      color: 'bg-purple-500',
      skills: [
        { name: 'Problem Solving', percentage: 63, icon: problemSolvingLog },
        { name: 'Teamwork', percentage: 90, icon: teamworkLogo },
        { name: 'Time Management', percentage: 88, icon: timeManagementLogo },
        { name: 'Communication', percentage: 91, icon: communicationLogo },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="w-full min-h-screen p-4 sm:p-8 md:p-16 bg-white dark:bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <motion.header
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h1
            variants={sectionVariant}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
          >
            Skills & Technologies
          </motion.h1>
          <motion.p
            variants={sectionVariant}
            className="text-gray-600 dark:text-gray-400"
          >
            Technologies and skills I use to build amazing products
          </motion.p>
        </motion.header>

        <div className="space-y-12 md:space-y-16">
          {skillCategories.map((category) => (
            <motion.section
              key={category.title}
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="skill-section"
            >
              <div className="flex items-center mb-8">
                <div
                  className={`w-8 h-1 ${category.color} rounded-full mr-4`}
                ></div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
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
