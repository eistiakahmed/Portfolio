import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  GraduationCap,
  Trophy,
  CheckCircle,
  ExternalLink,
  Calendar,
  BookOpen,
  Target,
  Zap,
  Code,
  Users,
  Clock,
  TrendingUp,
  Download,
  FileText,
  Image as ImageIcon,
} from 'lucide-react';

const certificatesData = [
  {
    id: 1,
    type: 'certificate',
    title: 'Complete Web Development with Programming Hero',
    institution: 'Programming Hero',
    date: 'Completed',
    image: 'https://i.ibb.co.com/G3nQfTzr/certifaicate.png', // Certificate preview image
    certificatePDF: '/certificate_student.pdf', // PDF file in public folder
    credentialUrl: '#', // Add credential URL if available
    description:
      'Comprehensive full-stack web development program covering modern web technologies and best practices.',
    whatLearned: [
      'Full-stack web development using the MERN stack',
      'Frontend development with HTML, CSS, Tailwind CSS, JavaScript, React, and Next.js',
      'Backend development with Node.js, Express.js, and MongoDB',
      'API integration, authentication systems, and responsive design principles',
      'AI development fundamentals and modern web technologies',
    ],
    whatGained: [
      'Strong foundation in frontend and backend development',
      'Practical experience building real-world projects',
      'Ability to write clean, maintainable, and scalable code',
      'Confidence in learning and adapting to new technologies quickly',
    ],
    skills: [
      'HTML',
      'CSS',
      'Tailwind CSS',
      'JavaScript',
      'React',
      'Next.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'AI Development',
    ],
    roleFocus: ['Frontend Developer', 'MERN Stack Developer'],
  },
];

const achievementsData = [
  {
    id: 1,
    type: 'achievement',
    title: 'Black Belt Award',
    organization: 'Programming Hero Job Placement Team',
    date: 'Awarded',
    icon: Trophy,
    color: 'from-yellow-500 to-orange-500',
    image: 'https://i.ibb.co.com/n8rV94Gg/1771582715367.jpg', // Award certificate image
    description:
      'Received the Black Belt Award in recognition of one month of intensive hard work, consistency, and successful completion of all required tasks and challenges.',
    achievements: [
      'Completed all projects within strict deadlines without missing a single step',
      'Built and explored complex, real-world challenge projects',
      'Developed strong soft skills, including communication and teamwork',
      'Demonstrated daily consistency, discipline, and goal-oriented progress',
      'Enhanced time management and productivity under pressure',
      'Explored and adapted to new technologies rapidly',
    ],
    keyStrengths: [
      'Daily consistency',
      'Team spirit',
      'Time management',
      'Problem-solving',
      'Fast learning',
      'Documentation practices',
      'Exploring new technologies',
    ],
  },
];

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
      className="w-full min-h-screen py-16 px-4 sm:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Award className="inline-block w-4 h-4 mr-2" />
            Credentials
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certificates & Achievements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey of continuous learning and recognition
          </p>
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
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
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
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
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

// Certificate Card Component
const CertificateCard = ({ item, onClick }) => {
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
          View Details
          <ExternalLink className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  );
};

// Achievement Card Component
const AchievementCard = ({ item, onClick }) => {
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
          View Details
          <ExternalLink className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  );
};

// Detail Modal Component
const DetailModal = ({ item, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
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

// Certificate Detail Component
const CertificateDetail = ({ item, onClose }) => {
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

// Achievement Detail Component
const AchievementDetail = ({ item, onClose }) => {
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

export default Certificates;
