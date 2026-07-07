import React from 'react';
import { motion } from 'framer-motion';

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.6, ease: 'easeOut' },
  }),
};

export const SkillCard = ({ name, icon, percentage, color, index }) => {
  const isLucideIcon = typeof icon === 'function' || (typeof icon === 'object' && icon !== null);
  const IconComponent = icon;
  const isInvertedInDark = !isLucideIcon && ['Express.js', 'Notion', 'Git & GitHub'].some(term => name.includes(term));

  return (
    <motion.div
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-[#0c0c14]/80 border border-gray-200 dark:border-white/[0.08] backdrop-blur-md rounded-xl p-5 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all"
    >
      <div className="w-16 h-16 flex items-center justify-center bg-white/[0.04] border border-white/10 rounded-2xl p-3 mb-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]">
        {isLucideIcon ? (
          <IconComponent className="w-6 h-6 text-purple-400" />
        ) : (
          <img
            src={icon}
            alt={`${name} logo`}
            className={`h-full w-full object-contain transition-all duration-300 filter drop-shadow-[0_2px_6px_rgba(255,255,255,0.05)] ${
              isInvertedInDark ? 'dark:invert brightness-125' : ''
            }`}
            onError={(e) => {
              e.target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg';
            }}
          />
        )}
      </div>
      <h3 className="font-semibold text-xs text-gray-800 dark:text-gray-200 mb-4 tracking-tight leading-tight">
        {name}
      </h3>
      <div className="w-full mt-auto">
        <div className="w-full bg-gray-200 dark:bg-white/5 rounded-full h-1.5 mb-1.5">
          <div
            className={`h-1.5 rounded-full ${color}`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p className="text-[10px] font-mono text-gray-500 dark:text-slate-400">{percentage}%</p>
      </div>
    </motion.div>
  );
};

export default SkillCard;
