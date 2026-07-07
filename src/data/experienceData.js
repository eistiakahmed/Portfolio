import {
  Briefcase,
  Code,
  Rocket
} from 'lucide-react';

export const experienceData = [
  {
    id: 1,
    title: 'Web Development Student',
    company: 'Programming Hero',
    location: 'Remote',
    period: '2025 - 2026',
    type: 'Training Program',
    description:
      'Completed an intensive full-stack web development program focusing on the MERN stack and modern web technologies.',
    achievements: [
      'Earned Black Belt Award for exceptional performance and consistency',
      'Built 20+ full-stack and frontend projects with real-world applications',
      'Mastered 20+ technologies including React, Node.js, MongoDB, and Next.js',
      'Completed all assignments and challenges within strict deadlines',
      'Developed strong problem-solving and teamwork skills'
    ],
    skills: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Next.js', 'Tailwind CSS'],
    color: 'from-blue-600 to-purple-600',
    icon: Code
  },
  {
    id: 2,
    title: 'Full Stack Web Developer Intern',
    company: 'NTechEdge',
    location: 'Remote/Onsite',
    period: 'April 2026 - June 2026',
    type: 'Internship',
    description:
      'Joined NTechEdge as an intern, gaining hands-on commercial experience building and optimizing full-stack products.',
    achievements: [
      'Built 5 frontend projects from scratch and 4 full-stack projects',
      'Personally managed site deployments and integrated custom email services',
      'Designed and prepared highly scalable, robust, and high-performance backend systems',
      'Gained valuable system design, project approach, and code architecture support from Hridoy Bhaiya'
    ],
    skills: ['TypeScript', 'Next.js', 'Redis', 'Mongoose', 'Redux', 'Zod'],
    color: 'from-purple-600 to-pink-600',
    icon: Briefcase
  },
  {
    id: 3,
    title: 'Next Level AI-Driven Software Engineering',
    company: 'Programming Hero',
    location: 'Remote',
    period: '2026 - 2027',
    type: 'Specialized Course',
    description:
      'Advanced software engineering program focused on cloud systems, AI integrations, and advanced backend architectures (ongoing).',
    achievements: [
      'Studying Node.js Core, Express.js fundamentals, TypeScript, Next.js, and Prisma ORM',
      'Mastering MySQL, PostgreSQL, Redis caching, Docker containers, AWS configurations, and AI/ML concepts',
      'Hands-on interactive learning path projected to be completed in 2027'
    ],
    skills: ['Node.js', 'Express.js', 'TypeScript', 'Next.js', 'Prisma', 'MySQL', 'PostgreSQL', 'AI/ML', 'AWS', 'Docker', 'Redis'],
    color: 'from-cyan-600 to-blue-600',
    icon: Rocket
  },
  {
    id: 4,
    title: 'Full-Time Web Developer',
    company: 'NTechEdge',
    location: 'Onsite',
    period: 'July 2026 - Present',
    type: 'Full-Time',
    description:
      'Joined as a full-time Web Developer, taking ownership of core software systems, backend architectures, and production deployments.',
    achievements: [
      'Architected scalable server modules and secure RESTful/GraphQL APIs',
      'Configured robust cloud hosting setups and container deployments',
      'Optimized application loading speeds and database index queries'
    ],
    skills: ['Node.js', 'React.js', 'AWS', 'Docker', 'Systems Architecture'],
    color: 'from-pink-600 to-blue-600',
    icon: Briefcase
  },
  {
    id: 5,
    title: 'Continuous Innovation & Learning',
    company: 'Ongoing Studies',
    location: 'Self-Directed',
    period: 'Ongoing',
    type: 'Professional Development',
    description:
      'Actively mastering modern cloud networking, DevOps automation pipelines, and high-performance server structures.',
    achievements: [
      'Building and managing CI/CD automated test & deployment pipelines',
      'Learning Docker containerization and AWS ecosystem solutions',
      'Solving complex system design questions and architectural problems daily'
    ],
    skills: ['CI/CD', 'DevOps', 'AWS Services', 'System Design', 'Algorithms'],
    color: 'from-yellow-600 to-orange-600',
    icon: Rocket
  }
];
