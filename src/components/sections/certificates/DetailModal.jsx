import React from 'react';
import { motion } from 'framer-motion';
import CertificateDetail from './CertificateDetail';
import AchievementDetail from './AchievementDetail';

export const DetailModal = ({ item, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-[#0b0b0f] border border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === 'certificate' ? (
          <CertificateDetail item={item} onClose={onClose} />
        ) : (
          <AchievementDetail item={item} onClose={onClose} />
        )}
      </motion.div>
    </motion.div>
  );
};

export default DetailModal;
