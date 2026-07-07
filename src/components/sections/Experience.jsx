import { motion } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Award,
  CheckCircle2
} from 'lucide-react';
import { experienceData } from '../../data/experienceData';

const Experience = () => {
  const renderAchievementText = (text) => {
    const target = text.includes("Hridoy Bhaiya") ? "Hridoy Bhaiya" : text.includes("Hriday Bhaiya") ? "Hriday Bhaiya" : null;
    if (target) {
      const parts = text.split(target);
      return (
        <>
          {parts[0]}
          <span className="inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-[11px] leading-none shadow-sm">
            {target}
          </span>
          {parts[1]}
        </>
      );
    }
    return text;
  };

  return (
    <section
      id="experience"
      className="w-full py-24 px-4 sm:px-8 bg-black relative border-t border-white/5 overflow-hidden bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"
    >
      {/* Background radial highlight */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-blue-500/5 blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start text-left mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-none">
            Experience & <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Education</span>
          </h2>

          <p className="text-slate-400 text-sm md:text-base max-w-xl font-normal leading-relaxed">
            A journey through learning, building, and growing as a developer.
          </p>

          <div className="w-16 h-[2px] bg-white/10 mt-6" />
        </motion.div>

        {/* Timeline Flow Wrapper */}
        <div className="relative">
          {/* Timeline Items */}
          <div className="space-y-14 relative z-10">
            {experienceData.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="relative overflow-visible"
                >
                  {/* Dynamic Row-based SVG connector that curves directly from Card N (left/right) to Card N+1 (right/left) */}
                  {index < experienceData.length - 1 && (
                    isEven ? (
                      /* Card N is on the Right (75%), Card N+1 is on the Left (25%) */
                      <svg className="hidden lg:block absolute top-8 left-0 w-full h-[calc(100%-3rem)] pointer-events-none z-0 stroke-white/15 fill-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M 75,5 C 65,5 35,95 25,95" strokeWidth="1.5" strokeDasharray="6 6" />
                      </svg>
                    ) : (
                      /* Card N is on the Left (25%), Card N+1 is on the Right (75%) */
                      <svg className="hidden lg:block absolute top-8 left-0 w-full h-[calc(100%-3rem)] pointer-events-none z-0 stroke-white/15 fill-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M 25,5 C 35,5 65,95 75,95" strokeWidth="1.5" strokeDasharray="6 6" />
                      </svg>
                    )
                  )}

                  {/* Content Card: Double-glass frame layout, rivet punch hole, dynamic organic rotations */}
                  <div className={`w-full lg:w-[calc(50%-2rem)] max-w-[520px] mx-auto bg-gradient-to-b from-[#12121a]/90 to-[#0b0b0f]/95 border border-white/[0.08] hover:border-white/[0.15] rounded-3xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 relative ${
                    isEven 
                      ? `lg:ml-auto lg:rotate-1 hover:rotate-0 lg:-translate-x-4 ${index > 0 ? 'lg:-mt-28' : ''}` 
                      : `lg:mr-auto lg:-rotate-1 hover:rotate-0 lg:translate-x-4 ${index > 0 ? 'lg:-mt-28' : ''}`
                  }`}>
                    
                    {/* Hanging Rivet Punch Hole */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-black border border-white/20 flex items-center justify-center shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.9)] z-20">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    </div>

                    {/* Inner Inset Content Box */}
                    <div className="border border-white/[0.04] bg-[#07070a]/40 rounded-2xl p-5 pt-7">
                      {/* Card Header */}
                      <div className="flex flex-col justify-between gap-2 mb-3 relative">
                        {/* Milestone Step Number & Tech Icon Indicator */}
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[11px] font-mono font-bold tracking-wider text-blue-400">
                            0{index + 1}
                          </span>
                          <div className={`p-1 bg-white/5 border border-white/10 rounded text-slate-300`}>
                            <exp.icon className="w-3 h-3" />
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-bold text-white tracking-tight mb-0.5">
                            {exp.title}
                          </h3>
                          <p className="text-sm text-blue-400 font-semibold mb-1.5">
                            {exp.company}
                          </p>
                          
                          {/* Meta details */}
                          <div className="flex flex-wrap gap-3 text-[11px] text-slate-400">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5 text-slate-500" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-slate-500" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        <span className="absolute top-0 right-0 px-2.5 py-0.5 bg-white/5 border border-white/10 text-slate-300 text-[10px] font-medium rounded-full">
                          {exp.type}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs md:text-sm text-slate-400 leading-relaxed mb-3.5">
                        {exp.description}
                      </p>

                      {/* Achievements list */}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div className="mb-3.5">
                          <h4 className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <Award className="w-3.5 h-3.5 text-yellow-500" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-1.5">
                            {exp.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-xs text-slate-400 leading-normal"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span>{renderAchievementText(achievement)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Skills badges */}
                      {exp.skills && exp.skills.length > 0 && (
                        <div>
                          <h4 className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-2">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 bg-white/5 border border-white/5 text-slate-400 text-[9px] font-medium rounded"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Cursive Tagline at bottom matching mockup */}
        <div className="text-center mt-24 select-none relative z-10 flex flex-col items-center">
          {/* Cursive Arrow pointing up */}
          <svg className="w-8 h-8 text-slate-500 mb-2" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20,35 Q10,15 20,5" />
            <path d="M15,10 L20,5 L25,10" />
          </svg>
          <span className="font-serif italic text-slate-400 text-lg md:text-xl font-light">
            Ready to be delivered!
          </span>
        </div>
      </div>
    </section>
  );
};

export default Experience;
