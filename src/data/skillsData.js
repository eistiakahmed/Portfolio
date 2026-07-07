import { Layers, Shield, Zap } from 'lucide-react';

// Import logos
import javascriptLogo from '../assets/javascript-48.png';
import reactRouterLogo from '../assets/react-router-svgrepo-com.svg';
import reactLogo from '../assets/react.png';
import nextjsLogo from '../assets/next.js.png';
import vscodeLogo from '../assets/vscode.png';
import vercelLogo from '../assets/vercel.png';
import teamworkLogo from '../assets/teamwork.png';
import tailwindcssLogo from '../assets/tailwindCSS.png';
import problemSolvingLog from '../assets/problem.png';
import postManLogo from '../assets/postman.png';
import notionLogo from '../assets/notion.png';
import nodejsLogo from '../assets/nodejs.png';
import netlifyLogo from '../assets/netlify.png';
import mongodbLogo from '../assets/mongodb.png';
import JWTLogo from '../assets/jwt-48.png';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import motionLogo from '../assets/motion.png';
import firebaseLogo from '../assets/firebase.png';
import gitLogo from '../assets/git.png';
import expressJsLogo from '../assets/expressjs.png';
import tanStackLogo from '../assets/tanStack.png';
import communicationLogo from '../assets/communication.png';
import timeManagementLogo from '../assets/clock-48.png';

export const skillCategories = [
  {
    title: 'Frontend Development',
    color: 'bg-purple-400',
    skills: [
      { name: 'TypeScript', percentage: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'JavaScript (ES6+)', percentage: 90, icon: javascriptLogo },
      { name: 'React.js', percentage: 86, icon: reactLogo },
      { name: 'Next.js', percentage: 90, icon: nextjsLogo },
      { name: 'Redux Toolkit', percentage: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg' },
      { name: 'React Router', percentage: 87, icon: reactRouterLogo },
      { name: 'Tailwind CSS', percentage: 76, icon: tailwindcssLogo },
      { name: 'HTML5', percentage: 80, icon: htmlLogo },
      { name: 'CSS3', percentage: 78, icon: cssLogo },
      { name: 'TanStack Query', percentage: 65, icon: tanStackLogo },
    ],
  },
  {
    title: 'Backend & Databases',
    color: 'bg-green-400',
    skills: [
      { name: 'Node.js', percentage: 72, icon: nodejsLogo },
      { name: 'Express.js', percentage: 78, icon: expressJsLogo },
      { name: 'MongoDB', percentage: 74, icon: mongodbLogo },
      { name: 'Mongoose ORM', percentage: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg' },
      { name: 'Prisma ORM', percentage: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg' },
      { name: 'Redis Caching', percentage: 65, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
      { name: 'MySQL', percentage: 68, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL', percentage: 68, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
      { name: 'JWT Auth', percentage: 70, icon: JWTLogo },
      { name: 'Firebase Auth', percentage: 60, icon: firebaseLogo },
      { name: 'RESTful API', percentage: 78, icon: postManLogo },
    ],
  },
  {
    title: 'DevOps & Tooling',
    color: 'bg-orange-500',
    skills: [
      { name: 'Linux OS', percentage: 74, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
      { name: 'Nginx Server', percentage: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg' },
      { name: 'Docker', percentage: 65, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      { name: 'AWS Cloud', percentage: 55, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Zod Validation', percentage: 78, icon: 'https://raw.githubusercontent.com/colinhacks/zod/master/logo.svg' },
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
    title: 'System & Architecture',
    color: 'bg-purple-500',
    skills: [
      { name: 'System Design', percentage: 80, icon: Layers },
      { name: 'Security', percentage: 75, icon: Shield },
      { name: 'Performance', percentage: 78, icon: Zap }
    ]
  },
  {
    title: 'Soft Skills & Focus',
    color: 'bg-pink-500',
    skills: [
      { name: 'Problem Solving', percentage: 75, icon: problemSolvingLog },
      { name: 'Teamwork & GitFlow', percentage: 90, icon: teamworkLogo },
      { name: 'Time Management', percentage: 88, icon: timeManagementLogo },
      { name: 'Communication', percentage: 91, icon: communicationLogo },
    ],
  },
];
