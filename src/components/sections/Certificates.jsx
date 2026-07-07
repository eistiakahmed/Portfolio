import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, GraduationCap, Trophy } from 'lucide-react';
import { certificatesData, achievementsData } from '../../data/certificatesData';
import CertificateCard from './certificates/CertificateCard';
import AchievementCard from './certificates/AchievementCard';
import DetailModal from './certificates/DetailModal';

const Certificates = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const allItems = [...certificatesData, ...achievementsData];
  const filteredItems =
    activeTab === 'all'
      ? allItems
      : allItems.filter((item) => item.type === activeTab);

  return (
    <section
      id="certificates"
      className="w-full min-h-screen py-24 px-4 sm:px-8 bg-black relative border-t border-white/5 overflow-hidden bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start text-left mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-none">
            Certificates & <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Achievements</span>
          </h2>

          <p className="text-slate-400 text-sm md:text-base max-w-xl font-normal leading-relaxed">
            My journey of continuous learning and recognition.
          </p>

          <div className="w-16 h-[2px] bg-white/10 mt-6" />
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { id: 'all', label: 'All', icon: BookOpen },
            { id: 'certificate', label: 'Certificates', icon: GraduationCap },
            { id: 'achievement', label: 'Achievements', icon: Trophy },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-full transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Items Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className="group relative bg-[#0b0b0f] border border-white/[0.08] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {item.type === 'certificate' ? (
                  <CertificateCard
                    item={item}
                    onClick={() => setSelectedItem(item)}
                  />
                ) : (
                  <AchievementCard
                    item={item}
                    onClick={() => setSelectedItem(item)}
                  />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal for detailed view */}
        <AnimatePresence>
          {selectedItem && (
            <DetailModal
              item={selectedItem}
              onClose={() => setSelectedItem(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificates;
