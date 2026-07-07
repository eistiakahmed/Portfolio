import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Download,
  Image as ImageIcon,
  BookOpen,
  CheckCircle,
  Target,
  Zap,
  Code,
  TrendingUp
} from 'lucide-react';

export const CertificateDetail = ({ item, onClose }) => {
  const handleDownload = () => {
    if (item.certificatePDF) {
      const link = document.createElement('a');
      link.href = item.certificatePDF;
      link.download = `${item.title.replace(/\s+/g, '_')}_Certificate.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        >
          ✕
        </button>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <div>
            <span className="text-white/80 text-sm font-medium">
              Certificate
            </span>
            <h2 className="text-white text-2xl font-bold">{item.title}</h2>
            <p className="text-white/90 text-sm mt-1">{item.institution}</p>
          </div>
        </div>
        
        {/* Download Button */}
        {item.certificatePDF && (
          <motion.button
            onClick={handleDownload}
            className="mt-4 flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold rounded-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" />
            Download Certificate (PDF)
          </motion.button>
        )}
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Certificate Image */}
        {item.image && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-blue-600" />
              Certificate
            </h3>
            <div className="relative rounded-xl overflow-hidden border-2 border-blue-200 dark:border-blue-800 shadow-lg">
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

        {/* What I Learned */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            What I Learned
          </h3>
          <ul className="space-y-2">
            {item.whatLearned.map((point, i) => (
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

        {/* What I Gained */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-purple-600" />
            What I Gained
          </h3>
          <ul className="space-y-2">
            {item.whatGained.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
              >
                <Zap className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Skills */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Code className="w-5 h-5 text-blue-600" />
            Technical Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-lg font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Role Focus */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            Role Focus
          </h3>
          <div className="flex flex-wrap gap-2">
            {item.roleFocus.map((role, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-lg font-semibold"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificateDetail;
