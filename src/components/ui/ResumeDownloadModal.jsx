import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, Code, Server, Sparkles, CheckCircle2 } from 'lucide-react';

const ResumeDownloadModal = ({ isOpen, onClose }) => {
  const [selectedResume, setSelectedResume] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const resumes = [
    {
      id: 'frontend',
      title: 'Frontend Developer',
      description: 'Specialized in React, JavaScript, and modern UI/UX',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      iconColor: 'text-blue-600 dark:text-blue-400',
      file: '/resumes/Eistiak_Ahmed_Frontend_Resume.pdf',
      highlights: ['React.js', 'JavaScript', 'Tailwind CSS', 'Responsive Design'],
    },
    {
      id: 'mern',
      title: 'MERN Stack Developer',
      description: 'Full-stack expertise with MongoDB, Express, React, Node.js',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      iconColor: 'text-green-600 dark:text-green-400',
      file: '/resumes/Eistiak_Ahmed_MERN_Resume.pdf',
      highlights: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    },
    {
      id: 'react',
      title: 'React Developer',
      description: 'Expert in React ecosystem and component architecture',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      iconColor: 'text-purple-600 dark:text-purple-400',
      file: '/resumes/Eistiak_Ahmed_React_Resume.pdf',
      highlights: ['React Hooks', 'State Management', 'React Router', 'Performance'],
    },
  ];

  const handleDownload = (resume) => {
    setSelectedResume(resume.id);
    setIsDownloading(true);

    try {
      // Create a temporary link and trigger download
      const link = document.createElement('a');
      link.href = resume.file;
      link.download = resume.file.split('/').pop();
      link.target = '_blank'; // Open in new tab as fallback
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Show success state
      setTimeout(() => {
        setIsDownloading(false);
        setTimeout(() => {
          onClose();
          setSelectedResume(null);
        }, 1000);
      }, 1500);
    } catch (error) {
      console.error('Download error:', error);
      setIsDownloading(false);
      alert('Failed to download resume. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden pointer-events-auto"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-8 text-white">
                <motion.button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <FileText className="w-8 h-8" />
                    </motion.div>
                    <h2 className="text-3xl font-bold">Download Resume</h2>
                  </div>
                  <p className="text-blue-100 text-lg">
                    Choose the resume that best fits your needs
                  </p>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {resumes.map((resume, index) => {
                    const Icon = resume.icon;
                    const isSelected = selectedResume === resume.id;
                    const isDownloaded = isSelected && !isDownloading;

                    return (
                      <motion.div
                        key={resume.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="relative"
                      >
                        <motion.button
                          onClick={() => handleDownload(resume)}
                          disabled={isDownloading}
                          className={`w-full h-full p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                            isSelected
                              ? 'border-blue-500 shadow-lg shadow-blue-500/20'
                              : 'border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600'
                          } ${resume.bgColor} ${
                            isDownloading && isSelected ? 'opacity-75' : ''
                          }`}
                          whileHover={{ scale: 1.02, y: -4 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {/* Icon */}
                          <motion.div
                            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${resume.color} flex items-center justify-center mb-4 shadow-lg`}
                            animate={
                              isSelected && isDownloading
                                ? { rotate: 360 }
                                : {}
                            }
                            transition={{
                              duration: 1,
                              repeat: isDownloading ? Infinity : 0,
                              ease: 'linear',
                            }}
                          >
                            {isDownloaded ? (
                              <CheckCircle2 className="w-7 h-7 text-white" />
                            ) : (
                              <Icon className="w-7 h-7 text-white" />
                            )}
                          </motion.div>

                          {/* Title */}
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {resume.title}
                          </h3>

                          {/* Description */}
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            {resume.description}
                          </p>

                          {/* Highlights */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {resume.highlights.map((highlight, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded-md text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>

                          {/* Download Button */}
                          <div
                            className={`flex items-center justify-center gap-2 py-2 px-4 rounded-lg font-semibold text-sm transition-all ${
                              isDownloaded
                                ? 'bg-green-500 text-white'
                                : `bg-gradient-to-r ${resume.color} text-white`
                            }`}
                          >
                            {isDownloading && isSelected ? (
                              <>
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: 'linear',
                                  }}
                                >
                                  <Download className="w-4 h-4" />
                                </motion.div>
                                Downloading...
                              </>
                            ) : isDownloaded ? (
                              <>
                                <CheckCircle2 className="w-4 h-4" />
                                Downloaded!
                              </>
                            ) : (
                              <>
                                <Download className="w-4 h-4" />
                                Download
                              </>
                            )}
                          </div>

                          {/* Selection indicator */}
                          <AnimatePresence>
                            {isSelected && (
                              <motion.div
                                className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                              >
                                <CheckCircle2 className="w-5 h-5 text-white" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.button>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Footer Note */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800"
                >
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    💡 <span className="font-semibold">Tip:</span> Each resume is
                    tailored to highlight specific skills and experiences relevant
                    to the role.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResumeDownloadModal;
