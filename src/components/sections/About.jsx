import { motion } from 'framer-motion';
import {
  Award,
  Code,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Monitor,
  Smartphone,
  Target,
  Zap,
  FileText,
} from 'lucide-react';
import useProjectStats from '../../hooks/useProjectStats';
import { TECH_BADGES } from '../../data/aboutData';

const About = () => {
  const { totalProjects, loading } = useProjectStats();

  return (
    <section
      id="about"
      className="relative w-full py-16 lg:py-24 bg-black overflow-hidden"
    >
      {/* Background Grid Pattern & Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle Radial Glows for Premium Depth */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-blue-500/10 blur-[100px] sm:blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-purple-500/10 blur-[100px] sm:blur-[120px]" />

        {/* SVG Grid */}
        <svg
          className="absolute inset-0 h-full w-full stroke-white/[0.03] [mask-image:radial-gradient(100%_100%_at_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="about-grid"
              width="44"
              height="44"
              patternUnits="userSpaceOnUse"
              x="50%"
              y="0"
            >
              <path d="M.5 44V.5H44" fill="none" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:gap-8">
          {/* Left Sidebar */}
          <aside className="w-full lg:w-1/3 lg:max-w-xs xl:max-w-sm mb-8 lg:mb-0 lg:sticky lg:top-24 self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex h-full flex-col justify-between bg-white/[0.03] backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-white/15 transition-all duration-300 shadow-2xl relative overflow-hidden group"
            >
              {/* Card Hover Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="flex flex-col justify-center items-center">
                    <div className="relative mb-4 group/avatar">
                      {/* Animated rotating gradient ring using Framer Motion */}
                      <motion.div
                        className="absolute inset-[-3px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-[2px]"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                      />
                      <div className="relative p-[3px] bg-black rounded-full">
                        <img
                          src="https://res.cloudinary.com/dfmkg9tfe/image/upload/v1772649534/InShot_20250528_141708179_bsaeru.jpg"
                          alt="eistiak_ahmed"
                          className="w-[110px] h-[110px] rounded-full object-cover relative z-10 transition-transform duration-500 group-hover/avatar:scale-105"
                        />
                      </div>
                    </div>
                    <h1 className="text-white text-xl font-bold leading-tight">
                      Eistiak Ahmed
                    </h1>
                    <p className="text-slate-400 text-sm font-medium leading-normal mt-1.5">
                      AI Driven Full Stack Web Developer
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-green-500/5 border border-green-500/20 backdrop-blur-md self-center shadow-lg shadow-green-500/5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                  </span>
                  <p className="text-green-400 text-xs font-semibold uppercase tracking-wider">
                    Available for Work
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-2 py-4 border-y border-white/10">
                  {/* Projects Stat */}
                  <motion.div 
                    className="text-center p-2 rounded-xl bg-white/[0.01] border border-white/5 hover:border-blue-500/20 hover:bg-blue-500/[0.02] transition-all duration-300 group/stat"
                    whileHover={{ y: -2 }}
                  >
                    <p className="text-xl font-bold text-blue-400 group-hover/stat:text-blue-300 transition-colors">
                      {loading ? '...' : `${totalProjects}+`}
                    </p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mt-0.5">
                      Projects
                    </p>
                  </motion.div>
                  {/* Techs Stat */}
                  <motion.div 
                    className="text-center p-2 rounded-xl bg-white/[0.01] border border-white/5 hover:border-purple-500/20 hover:bg-purple-500/[0.02] transition-all duration-300 group/stat"
                    whileHover={{ y: -2 }}
                  >
                    <p className="text-xl font-bold text-purple-400 group-hover/stat:text-purple-300 transition-colors">
                      30+
                    </p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mt-0.5">
                      Techs
                    </p>
                  </motion.div>
                  {/* Certs Stat */}
                  <motion.div 
                    className="text-center p-2 rounded-xl bg-white/[0.01] border border-white/5 hover:border-pink-500/20 hover:bg-pink-500/[0.02] transition-all duration-300 group/stat"
                    whileHover={{ y: -2 }}
                  >
                    <p className="text-xl font-bold text-pink-400 group-hover/stat:text-pink-300 transition-colors">
                      2+
                    </p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mt-0.5">
                      Certs
                    </p>
                  </motion.div>
                </div>

                {/* Primary Action Button */}
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-sm border border-white/10 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/10 hover:shadow-purple-500/20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FileText className="w-4 h-4" />
                  <span>View Resume</span>
                </motion.a>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  {/* GitHub */}
                  <motion.a
                    href="https://github.com/eistiakahmed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 text-slate-300 hover:text-black hover:bg-white hover:border-white transition-all duration-300 shadow-md hover:shadow-white/10"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>

                  {/* LinkedIn */}
                  <motion.a
                    href="https://www.linkedin.com/in/eistiak-ahmed/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 text-slate-300 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300 shadow-md hover:shadow-[#0077b5]/20"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>

                  {/* Email */}
                  <motion.a
                    href="mailto:eistiakahmedmeraj@gmail.com"
                    className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 text-slate-300 hover:text-white hover:bg-[#ea4335] hover:border-[#ea4335] transition-all duration-300 shadow-md hover:shadow-[#ea4335]/20"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-5 h-5" />
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
                className="md:col-span-2 bg-white/[0.03] backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-white/15 transition-all duration-300 shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative mb-6 z-10">
                  <h2 className="text-white text-xl font-bold leading-tight tracking-tight mb-2">
                    About Me
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                </div>

                <p className="text-slate-300 text-base font-normal leading-relaxed mb-4 relative z-10">
                  Hi, I'm <span className="text-white font-semibold">Eistiak Ahmed</span> - a
                  passionate web developer with over{' '}
                  <span className="text-white font-semibold">1 year of experience</span>{' '}
                  building modern full-stack applications. I love transforming
                  ideas into scalable, intelligent, and impactful digital
                  products that solve real-world problems.
                </p>
                <p className="text-slate-300 text-base font-normal leading-relaxed relative z-10">
                  I specialize in{' '}
                  <span className="text-white font-semibold">designing</span> and{' '}
                  <span className="text-white font-semibold">building robust full-stack applications</span>.
                  My focus is on <span className="text-white font-semibold">system design</span>,{' '}
                  <span className="text-white font-semibold">backend engineering</span>, and{' '}
                  <span className="text-white font-semibold">DevOps</span>, with a strong
                  emphasis on building scalable, secure, maintainable, and
                  future-ready solutions. Here are some of the key technologies I work with:
                </p>

                <div className="flex flex-wrap gap-2 mt-5 relative z-10">
                  {TECH_BADGES.map((tech) => (
                    <motion.span
                      key={tech.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-slate-300 hover:text-white hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 cursor-default"
                      whileHover={{ scale: 1.05, y: -1 }}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${tech.color} shadow-[0_0_6px_rgba(255,255,255,0.4)]`} />
                      <span className="fira-code text-xs">{tech.name}</span>
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* What I Do Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/[0.03] backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-white/15 transition-all duration-300 shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative mb-6 z-10">
                  <h3 className="text-white text-lg font-bold leading-tight tracking-tight mb-2">
                    What I Do
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                </div>
                <div className="flex flex-col gap-4 relative z-10">
                  {/* Full-Stack Card */}
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 transition-all duration-300 hover:scale-[1.01] group/item">
                    <div className="p-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-lg shrink-0 transition-all duration-300 group-hover/item:bg-blue-500/20 group-hover/item:border-blue-500/40 group-hover/item:text-blue-300 group-hover/item:shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                      <Code className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-white font-semibold text-sm transition-colors group-hover/item:text-blue-300">
                        Full-Stack Architecture
                      </h4>
                      <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                        Designing and building robust full-stack applications
                        with JavaScript, TypeScript, React, Next.js, Node.js,
                        and Express.
                      </p>
                    </div>
                  </div>

                  {/* Scalable Data Card */}
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 transition-all duration-300 hover:scale-[1.01] group/item">
                    <div className="p-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-lg shrink-0 transition-all duration-300 group-hover/item:bg-purple-500/20 group-hover/item:border-purple-500/40 group-hover/item:text-purple-300 group-hover/item:shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                      <Database className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-white font-semibold text-sm transition-colors group-hover/item:text-purple-300">
                        Scalable Data Modeling
                      </h4>
                      <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                        Designing efficient database schemas with Prisma ORM and
                        PostgreSQL, optimizing queries for performance and
                        scalability.
                      </p>
                    </div>
                  </div>

                  {/* System Design Card */}
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 transition-all duration-300 hover:scale-[1.01] group/item">
                    <div className="p-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-lg shrink-0 transition-all duration-300 group-hover/item:bg-cyan-500/20 group-hover/item:border-cyan-500/40 group-hover/item:text-cyan-300 group-hover/item:shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                      <Monitor className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-white font-semibold text-sm transition-colors group-hover/item:text-cyan-300">
                        System Design & DevOps
                      </h4>
                      <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                        Creating future-ready, maintainable solutions with focus
                        on scalability, CI/CD pipelines, and cloud
                        infrastructure.
                      </p>
                    </div>
                  </div>

                  {/* Performance Card */}
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 transition-all duration-300 hover:scale-[1.01] group/item">
                    <div className="p-2 bg-pink-500/10 border border-pink-500/20 text-pink-400 rounded-lg shrink-0 transition-all duration-300 group-hover/item:bg-pink-500/20 group-hover/item:border-pink-500/40 group-hover/item:text-pink-300 group-hover/item:shadow-[0_0_10px_rgba(236,72,153,0.3)]">
                      <Target className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-white font-semibold text-sm transition-colors group-hover/item:text-pink-300">
                        Performance Optimization
                      </h4>
                      <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                        Implementing caching strategies, lazy loading, code
                        splitting, and optimizing bundle sizes for
                        lightning-fast user experiences.
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
                className="bg-white/[0.03] backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-white/15 transition-all duration-300 shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative mb-6 z-10">
                  <h3 className="text-white text-lg font-bold leading-tight tracking-tight mb-2">
                    Key Strengths & Strategies
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 group/strength">
                    <div className="p-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 shrink-0 transition-colors group-hover/strength:bg-green-500/20">
                      <Target className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-slate-300 text-[11px] font-medium leading-tight">
                      Scalable system design
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 group/strength">
                    <div className="p-1.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 shrink-0 transition-colors group-hover/strength:bg-yellow-500/20">
                      <Zap className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-slate-300 text-[11px] font-medium leading-tight">
                      Security-first mindset
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 group/strength">
                    <div className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0 transition-colors group-hover/strength:bg-blue-500/20">
                      <Database className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-slate-300 text-[11px] font-medium leading-tight">
                      Advanced data modeling
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 group/strength">
                    <div className="p-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0 transition-colors group-hover/strength:bg-purple-500/20">
                      <Code className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-slate-300 text-[11px] font-medium leading-tight">
                      Clean code advocate
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 group/strength">
                    <div className="p-1.5 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-400 shrink-0 transition-colors group-hover/strength:bg-pink-500/20">
                      <Monitor className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-slate-300 text-[11px] font-medium leading-tight">
                      Performance tuning
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 group/strength">
                    <div className="p-1.5 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 shrink-0 transition-colors group-hover/strength:bg-orange-500/20">
                      <Award className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-slate-300 text-[11px] font-medium leading-tight">
                      Future-proof architecture
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 group/strength">
                    <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0 transition-colors group-hover/strength:bg-cyan-500/20">
                      <GraduationCap className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-slate-300 text-[11px] font-medium leading-tight">
                      Continuous learning
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 group/strength">
                    <div className="p-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 shrink-0 transition-colors group-hover/strength:bg-red-500/20">
                      <Smartphone className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-slate-300 text-[11px] font-medium leading-tight">
                      User-centric solutions
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
                className="bg-white/[0.03] backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-white/15 transition-all duration-300 shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative mb-6 z-10">
                  <h3 className="text-white text-lg font-bold leading-tight tracking-tight mb-2">
                    Education
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                </div>
                
                <div className="relative pl-6 border-l border-white/10 ml-3 flex flex-col gap-6 z-10">
                  {/* Web Dev Course */}
                  <div className="relative group/timeline">
                    {/* Timeline Node */}
                    <div className="absolute -left-[35px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 transition-all duration-300 group-hover/timeline:bg-blue-500 group-hover/timeline:text-white group-hover/timeline:scale-110 shadow-[0_0_8px_rgba(59,130,246,0.15)]">
                      <GraduationCap className="w-3 h-3" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-white font-semibold text-sm transition-colors group-hover/timeline:text-blue-300">
                        Complete Web Development
                      </h4>
                      <p className="text-slate-300 text-xs mt-0.5">
                        Programming Hero
                      </p>
                      <p className="text-slate-500 text-[10px] uppercase font-semibold mt-1">
                        MERN Stack Specialization
                      </p>
                    </div>
                  </div>

                  {/* University */}
                  <div className="relative group/timeline">
                    {/* Timeline Node with pulsing active dot */}
                    <div className="absolute -left-[35px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 transition-all duration-300 group-hover/timeline:bg-purple-500 group-hover/timeline:text-white group-hover/timeline:scale-110 shadow-[0_0_8px_rgba(168,85,247,0.15)]">
                      {/* Pulsing indicator */}
                      <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                      </span>
                      <GraduationCap className="w-3 h-3" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-white font-semibold text-sm transition-colors group-hover/timeline:text-purple-300">
                        Dhaka Central University
                      </h4>
                      <p className="text-slate-300 text-xs mt-0.5">
                        BA in Islamic History & Culture
                      </p>
                      <p className="text-purple-400 text-[10px] uppercase font-semibold mt-1 flex items-center gap-1.5">
                        <span>2024 - Present</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Achievements Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                className="bg-white/[0.03] backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-white/15 transition-all duration-300 shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative mb-6 z-10">
                  <h3 className="text-white text-lg font-bold leading-tight tracking-tight mb-2">
                    Achievements
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                </div>
                <div className="flex flex-col gap-3 relative z-10">
                  {/* Black Belt */}
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-yellow-500/10 hover:shadow-[0_0_12px_rgba(234,179,8,0.1)] transition-all duration-300 group/achievement">
                    <div className="p-2.5 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 rounded-lg shrink-0 transition-all duration-300 group-hover/achievement:bg-yellow-500/20 group-hover/achievement:border-yellow-500/40 group-hover/achievement:shadow-[0_0_8px_rgba(234,179,8,0.3)]">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm leading-snug transition-colors group-hover/achievement:text-yellow-400">
                        Black Belt Award
                      </h4>
                      <p className="text-slate-400 text-xs mt-0.5">
                        Programming Hero Job Placement
                      </p>
                    </div>
                  </div>

                  {/* Projects Delivered */}
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-green-500/10 hover:shadow-[0_0_12px_rgba(34,197,94,0.1)] transition-all duration-300 group/achievement">
                    <div className="p-2.5 bg-green-500/10 border border-green-500/20 text-green-400 rounded-lg shrink-0 transition-all duration-300 group-hover/achievement:bg-green-500/20 group-hover/achievement:border-green-500/40 group-hover/achievement:shadow-[0_0_8px_rgba(34,197,94,0.3)]">
                      <Target className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm leading-snug transition-colors group-hover/achievement:text-green-400">
                        {loading ? '...' : `${totalProjects}+`} Projects Delivered
                      </h4>
                      <p className="text-slate-400 text-xs mt-0.5">
                        Full-stack & Frontend apps
                      </p>
                    </div>
                  </div>

                  {/* Techs Mastered */}
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-blue-500/10 hover:shadow-[0_0_12px_rgba(59,130,246,0.1)] transition-all duration-300 group/achievement">
                    <div className="p-2.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-lg shrink-0 transition-all duration-300 group-hover/achievement:bg-blue-500/20 group-hover/achievement:border-blue-500/40 group-hover/achievement:shadow-[0_0_8px_rgba(59,130,246,0.3)]">
                      <Code className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm leading-snug transition-colors group-hover/achievement:text-blue-400">
                        30+ Techs Mastered
                      </h4>
                      <p className="text-slate-400 text-xs mt-0.5">
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
                className="md:col-span-2 bg-white/[0.03] backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-white/15 transition-all duration-300 shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative mb-6 z-10">
                  <h3 className="text-white text-lg font-bold leading-tight tracking-tight mb-2">
                    My Goals
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
                </div>
                <p className="text-slate-300 text-base font-normal leading-relaxed mb-6 relative z-10">
                  I'm constantly exploring new technologies, experimenting with
                  innovative solutions, and staying updated with the latest trends.
                  I believe in continuous learning, building boldly, and turning ideas
                  into practical projects.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
                  {/* Master System Card */}
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 transition-all duration-300 hover:scale-[1.01] group/goal">
                    <div className="p-2.5 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 rounded-lg shrink-0 mt-0.5 transition-all duration-300 group-hover/goal:bg-yellow-500/20 group-hover/goal:border-yellow-500/40 group-hover/goal:text-yellow-300 group-hover/goal:shadow-[0_0_10px_rgba(234,179,8,0.3)]">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm transition-colors group-hover/goal:text-yellow-400">
                        Master System Architecture
                      </h4>
                      <p className="text-slate-400 text-xs mt-1 leading-normal">
                        Design scalable, maintainable systems and microservices.
                      </p>
                    </div>
                  </div>

                  {/* Build Prod Ready Apps Card */}
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 transition-all duration-300 hover:scale-[1.01] group/goal">
                    <div className="p-2.5 bg-green-500/10 border border-green-500/20 text-green-400 rounded-lg shrink-0 mt-0.5 transition-all duration-300 group-hover/goal:bg-green-500/20 group-hover/goal:border-green-500/40 group-hover/goal:text-green-300 group-hover/goal:shadow-[0_0_10px_rgba(34,197,94,0.3)]">
                      <Target className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm transition-colors group-hover/goal:text-green-400">
                        Build Production-Ready Apps
                      </h4>
                      <p className="text-slate-400 text-xs mt-1 leading-normal">
                        Deliver high-quality, secure, and robust real-world solutions.
                      </p>
                    </div>
                  </div>

                  {/* Contribute Card */}
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 transition-all duration-300 hover:scale-[1.01] group/goal">
                    <div className="p-2.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-lg shrink-0 mt-0.5 transition-all duration-300 group-hover/goal:bg-blue-500/20 group-hover/goal:border-blue-500/40 group-hover/goal:text-blue-300 group-hover/goal:shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm transition-colors group-hover/goal:text-blue-400">
                        Contribute to Open Source
                      </h4>
                      <p className="text-slate-400 text-xs mt-1 leading-normal">
                        Share knowledge, build utilities, and give back to the dev community.
                      </p>
                    </div>
                  </div>

                  {/* Join Team Card */}
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 transition-all duration-300 hover:scale-[1.01] group/goal">
                    <div className="p-2.5 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-lg shrink-0 mt-0.5 transition-all duration-300 group-hover/goal:bg-purple-500/20 group-hover/goal:border-purple-500/40 group-hover/goal:text-purple-300 group-hover/goal:shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm transition-colors group-hover/goal:text-purple-400">
                        Join a Collaborative Team
                      </h4>
                      <p className="text-slate-400 text-xs mt-1 leading-normal">
                        Work with senior talent and developers on high-impact products.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default About;
