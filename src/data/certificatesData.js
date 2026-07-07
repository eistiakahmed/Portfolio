import { Trophy } from 'lucide-react';

export const certificatesData = [
  {
    id: 1,
    type: 'certificate',
    title: 'Complete Web Development with Programming Hero',
    institution: 'Programming Hero',
    date: 'Completed',
    image: 'https://i.ibb.co.com/G3nQfTzr/certifaicate.png', // Certificate preview image
    certificatePDF: '/certificate_student.pdf', // PDF file in public folder
    credentialUrl: '#', // Add credential URL if available
    description:
      'Comprehensive full-stack web development program covering modern web technologies and best practices.',
    whatLearned: [
      'Full-stack web development using the MERN stack',
      'Frontend development with HTML, CSS, Tailwind CSS, JavaScript, React, and Next.js',
      'Backend development with Node.js, Express.js, and MongoDB',
      'API integration, authentication systems, and responsive design principles',
      'AI development fundamentals and modern web technologies',
    ],
    whatGained: [
      'Strong foundation in frontend and backend development',
      'Practical experience building real-world projects',
      'Ability to write clean, maintainable, and scalable code',
      'Confidence in learning and adapting to new technologies quickly',
    ],
    skills: [
      'HTML',
      'CSS',
      'Tailwind CSS',
      'JavaScript',
      'React',
      'Next.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'AI Development',
    ],
    roleFocus: ['Frontend Developer', 'MERN Stack Developer'],
  },
];

export const achievementsData = [
  {
    id: 1,
    type: 'achievement',
    title: 'Black Belt Award',
    organization: 'Programming Hero Job Placement Team',
    date: 'Awarded',
    icon: Trophy,
    color: 'from-yellow-500 to-orange-500',
    image: 'https://i.ibb.co.com/n8rV94Gg/1771582715367.jpg', // Award certificate image
    description:
      'Received the Black Belt Award in recognition of one month of intensive hard work, consistency, and successful completion of all required tasks and challenges.',
    achievements: [
      'Completed all projects within strict deadlines without missing a single step',
      'Built and explored complex, real-world challenge projects',
      'Developed strong soft skills, including communication and teamwork',
      'Demonstrated daily consistency, discipline, and goal-oriented progress',
      'Enhanced time management and productivity under pressure',
      'Explored and adapted to new technologies rapidly',
    ],
    keyStrengths: [
      'Daily consistency',
      'Team spirit',
      'Time management',
      'Problem-solving',
      'Fast learning',
      'Documentation practices',
      'Exploring new technologies',
    ],
  },
];
