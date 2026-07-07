import { motion } from 'framer-motion';
import {
  Code,
  Database,
  Cloud,
  Globe,
  Lightbulb
} from 'lucide-react';

const Services = () => {
  return (
    <section
      id="services"
      className="relative w-full py-20 lg:py-28 bg-black overflow-hidden border-t border-white/5"
    >
      {/* Background Grid & Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Glowing backdrop blobs */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[120px]" />

        {/* SVG Grid */}
        <svg
          className="absolute inset-0 h-full w-full stroke-white/[0.02] [mask-image:radial-gradient(80%_80%_at_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="services-grid"
              width="44"
              height="44"
              patternUnits="userSpaceOnUse"
              x="50%"
              y="0"
            >
              <path d="M.5 44V.5H44" fill="none" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start text-left mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-none">
            My <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Expertise</span>
          </h2>

          <p className="text-slate-400 text-sm md:text-base max-w-xl font-normal leading-relaxed">
            Bridging the gap between complex engineering and seamless user experiences.
          </p>

          <div className="w-16 h-[2px] bg-white/10 mt-6" />
        </motion.div>

        {/* Services Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1: Full-Stack Development (Spans 2 columns and 2 rows on large screens) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 lg:col-span-2 lg:row-span-2 group relative bg-gradient-to-b from-[#12121a]/85 to-[#0b0b0f]/95 backdrop-blur-xl border border-white/[0.07] hover:border-white/[0.15] p-8 rounded-2xl transition-all duration-500 shadow-2xl flex flex-col justify-between overflow-hidden min-h-[300px] lg:min-h-[344px]"
          >
            {/* Accent hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Blueprint Schematic SVG */}
            <div className="absolute -bottom-28 -right-33 w-95 h-95 text-white/[0.03] group-hover:text-white/[0.07] group-hover:scale-105 transition-all duration-700 pointer-events-none select-none">
              <svg className="w-full h-full" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="0.5">
                <text x="10" y="20" fill="currentColor" fontSize="4" letterSpacing="0.5" opacity="0.3" stroke="none">FS_DEV // 01</text>
                <text x="10" y="112" fill="currentColor" fontSize="4" letterSpacing="0.5" opacity="0.3" stroke="none">SYS_COOR [45.18, 92.11]</text>

                {/* User Blocks SVG transformed into blueprint */}
                <g transform="translate(24, 20) scale(3.0)" strokeWidth="0.4">
                  <path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2" />
                  <rect x="14" y="2" width="8" height="8" rx="1" />
                </g>

                <path d="M10 10 H20 M10 10 V20" />
                <path d="M110 10 H100 M110 10 V20" />
                <path d="M10 110 H20 M10 110 V100" />
                <path d="M110 110 H100 M110 110 V100" />
              </svg>
            </div>

            {/* Icon Container at the top */}
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-blue-400 shadow-md group-hover:scale-110 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-all duration-500 self-start">
              <Code className="w-5 h-5" />
            </div>

            {/* Title & Desc at the bottom */}
            <div className="mt-auto pt-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
                Full-Stack Development
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Building scalable web applications from end-to-end.
              </p>
            </div>
          </motion.div>

          {/* Card 2: System Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative bg-gradient-to-b from-[#12121a]/85 to-[#0b0b0f]/95 backdrop-blur-xl border border-white/[0.07] hover:border-white/[0.15] p-8 rounded-2xl transition-all duration-500 shadow-2xl flex flex-col justify-between overflow-hidden min-h-[160px]"
          >
            {/* Accent hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Blueprint Schematic SVG */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 text-white/[0.03] group-hover:text-white/[0.07] group-hover:scale-105 transition-all duration-700 pointer-events-none select-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                <text x="8" y="16" fill="currentColor" fontSize="3.5" letterSpacing="0.5" opacity="0.3" stroke="none">SYS_DSN // 02</text>

                {/* Server SVG transformed into blueprint */}
                <g transform="translate(14, 10) scale(3.0)" strokeWidth="0.3">
                  <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                  <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                  <line x1="6" x2="6.01" y1="6" y2="6" />
                  <line x1="6" x2="6.01" y1="18" y2="18" />
                </g>

                <path d="M8 8 H14 M8 8 V14" />
                <path d="M92 92 H86 M92 92 V86" />
              </svg>
            </div>

            <div>
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-purple-400 shadow-md mb-6 group-hover:scale-110 group-hover:border-purple-500/30 group-hover:bg-purple-500/10 transition-all duration-500">
                <Database className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                System Design
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
                Designing reliable, high-performance backends.
              </p>
            </div>
          </motion.div>

          {/* Card 3: DevOps & Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative bg-gradient-to-b from-[#12121a]/85 to-[#0b0b0f]/95 backdrop-blur-xl border border-white/[0.07] hover:border-white/[0.15] p-8 rounded-2xl transition-all duration-500 shadow-2xl flex flex-col justify-between overflow-hidden min-h-[160px]"
          >
            {/* Accent hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Blueprint Schematic SVG */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 text-white/[0.03] group-hover:text-white/[0.07] group-hover:scale-105 transition-all duration-700 pointer-events-none select-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                <text x="8" y="16" fill="currentColor" fontSize="3.5" letterSpacing="0.5" opacity="0.3" stroke="none">CI_CD // 03</text>

                <g transform="translate(50, 50) scale(1.4) translate(-50, -50)">
                  <path d="M30 50 C30 35, 70 35, 70 50 C70 65, 30 65, 30 50 Z" strokeDasharray="2 2" />
                  <circle cx="30" cy="50" r="2" />
                  <circle cx="50" cy="38" r="2" />
                  <circle cx="70" cy="50" r="2" />
                </g>

                <path d="M8 8 H14 M8 8 V14" />
                <path d="M92 92 H86 M92 92 V86" />
              </svg>
            </div>

            <div>
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-cyan-400 shadow-md mb-6 group-hover:scale-110 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-all duration-500">
                <Cloud className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                DevOps & Cloud
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
                CI/CD pipelines, containerization, and deployments.
              </p>
            </div>

          </motion.div>

          {/* Card 4: Web Development Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group relative bg-gradient-to-b from-[#12121a]/85 to-[#0b0b0f]/95 backdrop-blur-xl border border-white/[0.07] hover:border-white/[0.15] p-8 rounded-2xl transition-all duration-500 shadow-2xl flex flex-col justify-between overflow-hidden min-h-[160px]"
          >
            {/* Accent hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Blueprint Schematic SVG */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 text-white/[0.03] group-hover:text-white/[0.07] group-hover:scale-105 transition-all duration-700 pointer-events-none select-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                <text x="8" y="16" fill="currentColor" fontSize="3.5" letterSpacing="0.5" opacity="0.3" stroke="none">WEB_SRV // 04</text>

                <g transform="translate(50, 50) scale(1.4) translate(-50, -50)">
                  <circle cx="50" cy="50" r="28" strokeDasharray="2 2" />
                  <ellipse cx="50" cy="50" rx="10" ry="28" />
                  <ellipse cx="50" cy="50" rx="28" ry="8" />
                  <line x1="22" y1="50" x2="78" y2="50" />
                </g>

                <path d="M8 8 H14 M8 8 V14" />
                <path d="M92 92 H86 M92 92 V86" />
              </svg>
            </div>

            <div>
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-pink-400 shadow-md mb-6 group-hover:scale-110 group-hover:border-pink-500/30 group-hover:bg-pink-500/10 transition-all duration-500">
                <Globe className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                Web Design
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
                Creating visually stunning and user-friendly web interfaces.
              </p>
            </div>

          </motion.div>

          {/* Card 5: Innovative Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="group relative bg-gradient-to-b from-[#12121a]/85 to-[#0b0b0f]/95 backdrop-blur-xl border border-white/[0.07] hover:border-white/[0.15] p-8 rounded-2xl transition-all duration-500 shadow-2xl flex flex-col justify-between overflow-hidden min-h-[160px]"
          >
            {/* Accent hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Blueprint Schematic SVG */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 text-white/[0.03] group-hover:text-white/[0.07] group-hover:scale-105 transition-all duration-700 pointer-events-none select-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                <text x="8" y="16" fill="currentColor" fontSize="3.5" letterSpacing="0.5" opacity="0.3" stroke="none">INN_SOL // 05</text>

                <g transform="translate(50, 50) scale(1.4) translate(-50, -50)">
                  <rect x="40" y="32" width="20" height="12" rx="2" strokeDasharray="2 2" />
                  <rect x="22" y="60" width="20" height="12" rx="2" />
                  <rect x="58" y="60" width="20" height="12" rx="2" />

                  <path d="M50 44 V52 H32 V60 M50 52 H68 V60" />
                </g>

                <path d="M8 8 H14 M8 8 V14" />
                <path d="M92 92 H86 M92 92 V86" />
              </svg>
            </div>

            <div>
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-yellow-400 shadow-md mb-6 group-hover:scale-110 group-hover:border-yellow-500/30 group-hover:bg-yellow-500/10 transition-all duration-500">
                <Lightbulb className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                Innovative Solutions
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
                Solving complex problems with creative technology.
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Services;
