import React from 'react';
import { motion } from 'framer-motion';
import { Award, Image as ImageIcon, ExternalLink } from 'lucide-react';

export const AchievementCard = ({ item, onClick }) => {
  const Icon = item.icon;

  return (
    <div className="cursor-pointer" onClick={onClick}>
      {/* Header with Icon */}
      <div className={`bg-gradient-to-r ${item.color} p-6`}>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-white/80 text-xs font-medium">
                Achievement
              </span>
              <h3 className="text-white text-lg font-bold">{item.title}</h3>
            </div>
          </div>
          {item.image && (
            <motion.div
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white"
              whileHover={{ scale: 1.1 }}
              title="View Certificate Image"
            >
              <ImageIcon className="w-5 h-5" />
            </motion.div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {item.organization}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>

        {/* Key Strengths Preview */}
        <div className="flex flex-wrap gap-2 mb-4">
          {item.keyStrengths.slice(0, 4).map((strength, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-xs rounded-md"
            >
              {strength}
            </span>
          ))}
          {item.keyStrengths.length > 4 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-md">
              +{item.keyStrengths.length - 4} more
            </span>
          )}
        </div>

        {/* View Details Button */}
        <motion.button
          className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 text-sm font-semibold hover:gap-3 transition-all"
          whileHover={{ x: 5 }}
        >
          View Credential
          <ExternalLink className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  );
};

export default AchievementCard;
