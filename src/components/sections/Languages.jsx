import React from 'react';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const LanguageCircle = ({
  percentage,
  language,
  level,
  color = 'text-primary',
}) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group relative flex flex-col items-center gap-4"
    >
      <div className="relative h-48 w-48">
        <svg className="h-full w-full" viewBox="0 0 100 100">
          <circle
            className="stroke-current text-gray-200 dark:text-gray-700"
            cx="50"
            cy="50"
            fill="transparent"
            r={radius}
            strokeWidth="8"
          ></circle>
          <motion.circle
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className={`stroke-current ${color}`}
            cx="50"
            cy="50"
            fill="transparent"
            r={radius}
            strokeDasharray={circumference}
            strokeLinecap="round"
            strokeWidth="8"
            transform="rotate(-90 50 50)"
          ></motion.circle>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-slate-900 dark:text-white">
            {percentage}%
          </span>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            {level}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Globe className="w-5 h-5 text-slate-700 dark:text-slate-300" />
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          {language}
        </h3>
      </div>
      <div className="absolute bottom-full mb-2 hidden w-auto scale-95 transform-gpu rounded-md bg-slate-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-all duration-200 group-hover:block group-hover:scale-100 group-hover:opacity-100">
        {level} Proficiency
      </div>
    </motion.div>
  );
};

const Languages = () => {
  return (
    <section
      id="languages"
      className="relative w-full py-16 lg:py-24 bg-white dark:bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start text-left mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-none">
            Language <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Proficiency</span>
          </h2>

          <p className="text-slate-400 text-sm md:text-base max-w-xl font-normal leading-relaxed">
            Communication skills across multiple languages for global collaboration.
          </p>

          <div className="w-16 h-[2px] bg-white/10 mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <LanguageCircle percentage={95} language="Bangla" level="Native" />
          <LanguageCircle
            percentage={65}
            language="English"
            level="Intermediate"
          />
          <LanguageCircle
            percentage={50}
            language="Hindi"
            level="Elementary"
          />
        </div>
      </div>
    </section>
  );
};

export default Languages;
