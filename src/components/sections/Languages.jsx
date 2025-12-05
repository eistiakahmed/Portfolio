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
      className="relative flex min-h-[50vh] w-full flex-col items-center justify-center p-4 bg-white
 dark:bg-black"
    >
      <div className="flex w-full max-w-4xl flex-col">
        <h2 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-tighter px-4 pb-3 pt-5 text-center">
          Languages
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4">
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
