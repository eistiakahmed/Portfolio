import React from 'react';
import {
  Trophy,
  Image as ImageIcon,
  CheckCircle,
  Zap
} from 'lucide-react';

export const AchievementDetail = ({ item, onClose }) => {
  const Icon = item.icon;

  return (
    <>
      {/* Header */}
      <div className={`bg-gradient-to-r ${item.color} p-8 relative`}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        >
          ✕
        </button>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div>
            <span className="text-white/80 text-sm font-medium">
              Achievement
            </span>
            <h2 className="text-white text-2xl font-bold">{item.title}</h2>
            <p className="text-white/90 text-sm mt-1">{item.organization}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Award Image */}
        {item.image && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-yellow-600" />
              Award Certificate
            </h3>
            <div className="relative rounded-xl overflow-hidden border-2 border-yellow-200 dark:border-yellow-800 shadow-lg">
              <img
                src={item.image}
                alt={`${item.title} Certificate`}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        )}

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {item.description}
        </p>

        {/* What I Achieved */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-600" />
            What I Achieved
          </h3>
          <ul className="space-y-2">
            {item.achievements.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Strengths Developed */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-600" />
            Key Strengths Developed
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {item.keyStrengths.map((strength, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-lg"
              >
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm font-medium">{strength}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AchievementDetail;
