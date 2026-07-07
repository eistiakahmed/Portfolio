import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Image as ImageIcon, Download, BookOpen, ExternalLink } from 'lucide-react';

export const CertificateCard = ({ item, onClick }) => {
  const handleDownload = (e) => {
    e.stopPropagation(); // Prevent card click
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
    <div className="cursor-pointer" onClick={onClick}>
      {/* Header with Icon */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-white/80 text-xs font-medium">
                Certificate
              </span>
              <h3 className="text-white text-lg font-bold">{item.title}</h3>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {item.image && (
              <motion.div
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white"
                whileHover={{ scale: 1.1 }}
                title="View Certificate Image"
              >
                <ImageIcon className="w-5 h-5" />
              </motion.div>
            )}
            {item.certificatePDF && (
              <motion.button
                onClick={handleDownload}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg flex items-center justify-center text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Download Certificate"
              >
                <Download className="w-5 h-5" />
              </motion.button>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {item.institution}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>

        {/* Skills Preview */}
        <div className="flex flex-wrap gap-2 mb-4">
          {item.skills.slice(0, 5).map((skill, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-md"
            >
              {skill}
            </span>
          ))}
          {item.skills.length > 5 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-md">
              +{item.skills.length - 5} more
            </span>
          )}
        </div>

        {/* View Details Button */}
        <motion.button
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-3 transition-all"
          whileHover={{ x: 5 }}
        >
          View Credential
          <ExternalLink className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  );
};

export default CertificateCard;
