import React from 'react';
import {
  Code,
  Briefcase,
  Mail,
  Smartphone,
  Monitor,
  Database,
  GraduationCap,
} from 'lucide-react';
import { motion } from 'framer-motion';
import githubLogo from '../../assets/github.png';
import linkedinLogo from '../../assets/linkedin.png';
import gmailLogo from '../../assets/gmail.png';

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
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-32 border-4 border-primary shadow-md"
                    style={{
                      backgroundImage:
                        'url("https://i.ibb.co.com/wF1xjPg9/1763497093402.jpg")',
                    }}
                  ></div>
                  <div className="flex flex-col">
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
                    Available
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex  justify-center">
                  {/* GitHub */}
                  <a
                    href="https://github.com/eistiakahmed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    <img src={githubLogo} alt="github" className="w-10 h-10" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/eistiak-ahmed/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <img
                      src={linkedinLogo}
                      alt="linkedin"
                      className="w-10 h-10"
                    />
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:eistiakahmedmeraj@gmail.com"
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <img src={gmailLogo} alt="gmail" className="w-10 h-10" />
                  </a>
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
                <p className="text-gray-600 dark:text-slate-300 text-base font-normal leading-relaxed">
                  Hi, I’m Eistiak Ahmed, a Junior Frontend Developer who loves
                  transforming ideas into interactive, user-friendly web
                  experiences. I thrive on turning complex challenges into
                  clean, responsive designs that delight users. With experience
                  building React.js, Next.js, Node.js, and MongoDB applications,
                  I enjoy every step of the process—from brainstorming and
                  designing to coding and deploying. I believe in creativity,
                  precision, and continuous learning, and I’m always excited to
                  craft web experiences that are as functional as they are
                  beautiful.
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
                        Responsive UIs
                      </h4>
                      <p className="text-gray-500 dark:text-slate-400 text-sm">
                        Crafting layouts that work seamlessly on any device.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Monitor className="w-5 h-5 text-primary mt-1" />
                    <div className="flex flex-col">
                      <h4 className="text-gray-900 dark:text-white font-medium">
                        React Development
                      </h4>
                      <p className="text-gray-500 dark:text-slate-400 text-sm">
                        Building dynamic interfaces with modern JavaScript
                        frameworks.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Database className="w-5 h-5 text-primary mt-1" />
                    <div className="flex flex-col">
                      <h4 className="text-gray-900 dark:text-white font-medium">
                        State Management
                      </h4>
                      <p className="text-gray-500 dark:text-slate-400 text-sm">
                        Managing complex application state for predictable
                        behavior.
                      </p>
                    </div>
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
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg mt-1">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-gray-900 dark:text-white font-semibold">
                      Kabi Nazrul Govt. College
                    </h4>
                    <p className="text-gray-600 dark:text-slate-300">
                      BA in Islamic History and Culture
                    </p>
                    <p className="text-gray-500 dark:text-slate-400 text-sm">
                      2024 -Present
                    </p>
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
                <p className="text-gray-600 dark:text-slate-300 text-base font-normal leading-relaxed">
                  My primary goal is to contribute to a collaborative team in
                  building meaningful, impactful products. I’m eager to deepen
                  my expertise in full-stack development, explore WebGL and
                  other advanced technologies to create richer, more interactive
                  user experiences, and continuously adopt best practices in
                  performance, accessibility, and design. I aim to craft web
                  applications that are not only functional and efficient but
                  also delightful and inclusive for every user.
                </p>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default About;
