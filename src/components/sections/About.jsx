import React from 'react';
import { Smartphone, Monitor, Database, GraduationCap, Code, Zap, Award, Target, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full py-16 lg:py-24 bg-white dark:bg-black"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-8">
          {/* Left Sidebar */}
          <aside className="w-full lg:w-1/3 lg:max-w-xs xl:max-w-sm mb-8 lg:mb-0 lg:sticky lg:top-24 self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex h-full flex-col justify-between bg-white dark:bg-[#191d31] p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="flex flex-col justify-center items-center">
                    <div className="mb-2 border-5 rounded-full">
                      <img
                        src="https://i.ibb.co.com/BMx6Q9c/eistiak-ahmed.png"
                        alt="eistiak_ahmed"
                        className="w-[120px] h-[120px] rounded-full"
                      />
                    </div>
                    <h1 className="text-gray-900 dark:text-white text-xl font-bold leading-tight">
                      Eistiak Ahmed
                    </h1>
                    <p className="text-gray-500 dark:text-slate-400 text-base font-normal leading-normal">
                      Junior Frontend Developer
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <p className="text-green-500 text-sm font-medium leading-normal">
                    Available for Work
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-2 py-4 border-y border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">8+</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Projects</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">20+</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Technologies</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-pink-600 dark:text-pink-400">2+</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Certificates</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-2">
                  {/* GitHub */}
                  <motion.a
                    href="https://github.com/eistiakahmed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>

                  {/* LinkedIn */}
                  <motion.a
                    href="https://www.linkedin.com/in/eistiak-ahmed/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.a>

                  {/* Email */}
                  <motion.a
                    href="mailto:eistiakahmedmeraj@gmail.com"
                    className="flex items-center justify-center w-12 h-12 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-600 hover:text-white dark:hover:bg-red-500 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </aside>

          {/* Right Content Area */}
          <main className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Introduction Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="md:col-span-2 bg-white dark:bg-[#191d31] p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800"
              >
                <h2 className="text-gray-900 dark:text-white text-xl font-bold leading-tight tracking-tight mb-4">
                  About Me
                </h2>
                <p className="text-gray-600 dark:text-slate-300 text-base font-normal leading-relaxed mb-4">
                  Hi, I'm Eistiak Ahmed, a passionate Junior Frontend Developer specializing in building modern, responsive web applications. With expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js), I transform complex ideas into elegant, user-friendly digital experiences.
                </p>
                <p className="text-gray-600 dark:text-slate-300 text-base font-normal leading-relaxed">
                  I've successfully delivered 8+ full-stack and frontend projects, mastered 20+ technologies, and earned certifications including Complete Web Development and the prestigious Black Belt Award. I thrive on solving challenging problems, writing clean and maintainable code, and continuously learning new technologies to stay at the forefront of web development.
                </p>
              </motion.div>

              {/* What I Do Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-[#191d31] p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800"
              >
                <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight mb-4">
                  What I Do
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <Smartphone className="w-5 h-5 text-primary mt-1" />
                    <div className="flex flex-col">
                      <h4 className="text-gray-900 dark:text-white font-medium">
                        Responsive Web Design
                      </h4>
                      <p className="text-gray-500 dark:text-slate-400 text-sm">
                        Crafting pixel-perfect, mobile-first layouts that work seamlessly across all devices.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Monitor className="w-5 h-5 text-primary mt-1" />
                    <div className="flex flex-col">
                      <h4 className="text-gray-900 dark:text-white font-medium">
                        React & Next.js Development
                      </h4>
                      <p className="text-gray-500 dark:text-slate-400 text-sm">
                        Building dynamic, high-performance SPAs with modern JavaScript frameworks.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Database className="w-5 h-5 text-primary mt-1" />
                    <div className="flex flex-col">
                      <h4 className="text-gray-900 dark:text-white font-medium">
                        Full-Stack Development
                      </h4>
                      <p className="text-gray-500 dark:text-slate-400 text-sm">
                        Creating end-to-end solutions with Node.js, Express.js, and MongoDB.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Code className="w-5 h-5 text-primary mt-1" />
                    <div className="flex flex-col">
                      <h4 className="text-gray-900 dark:text-white font-medium">
                        API Integration
                      </h4>
                      <p className="text-gray-500 dark:text-slate-400 text-sm">
                        Seamlessly connecting frontends with RESTful APIs and authentication systems.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Key Strengths Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="bg-white dark:bg-[#191d31] p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800"
              >
                <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight mb-4">
                  Key Strengths
                </h3>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span className="text-gray-600 dark:text-slate-300 text-sm">
                      Fast learner & problem solver
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-600 dark:text-slate-300 text-sm">
                      Daily consistency & discipline
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600 dark:text-slate-300 text-sm">
                      Goal-oriented & detail-focused
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Monitor className="w-4 h-4 text-purple-500" />
                    <span className="text-gray-600 dark:text-slate-300 text-sm">
                      Strong communication skills
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-pink-500" />
                    <span className="text-gray-600 dark:text-slate-300 text-sm">
                      Clean code advocate
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Education Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white dark:bg-[#191d31] p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800"
              >
                <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight mb-4">
                  Education
                </h3>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg mt-1">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-gray-900 dark:text-white font-semibold">
                      Complete Web Development
                    </h4>
                    <p className="text-gray-600 dark:text-slate-300">
                      Programming Hero
                    </p>
                    <p className="text-gray-500 dark:text-slate-400 text-sm">
                      MERN Stack Specialization
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mt-1">
                    <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-gray-900 dark:text-white font-semibold">
                      Kabi Nazrul Govt. College
                    </h4>
                    <p className="text-gray-600 dark:text-slate-300">
                      BA in Islamic History and Culture
                    </p>
                    <p className="text-gray-500 dark:text-slate-400 text-sm">
                      2024 - Present
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Achievements Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                className="bg-white dark:bg-[#191d31] p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800"
              >
                <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight mb-4">
                  Achievements
                </h3>
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-yellow-500 mt-0.5" />
                    <div>
                      <h4 className="text-gray-900 dark:text-white font-medium text-sm">
                        Black Belt Award
                      </h4>
                      <p className="text-gray-500 dark:text-slate-400 text-xs">
                        Programming Hero Job Placement Team
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="text-gray-900 dark:text-white font-medium text-sm">
                        8+ Projects Delivered
                      </h4>
                      <p className="text-gray-500 dark:text-slate-400 text-xs">
                        Full-stack & Frontend applications
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Code className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="text-gray-900 dark:text-white font-medium text-sm">
                        20+ Technologies Mastered
                      </h4>
                      <p className="text-gray-500 dark:text-slate-400 text-xs">
                        Frontend, Backend & Tools
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Goals Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="md:col-span-2 bg-white dark:bg-[#191d31] p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800"
              >
                <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight mb-4">
                  My Goals
                </h3>
                <p className="text-gray-600 dark:text-slate-300 text-base font-normal leading-relaxed mb-3">
                  My primary goal is to contribute to a collaborative team in building meaningful, impactful products that solve real-world problems. I'm eager to:
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Deepen my expertise in full-stack development and modern JavaScript frameworks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Explore advanced technologies like TypeScript, GraphQL, and cloud services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Master best practices in performance optimization, accessibility, and security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Build web applications that are functional, efficient, and delightful for every user</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default About;
