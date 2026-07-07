import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaShare,
} from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  TelegramIcon,
} from 'react-share';

const NavbarOptimized = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Memoize share URL and title
  const shareUrl = useMemo(() => window.location.href, []);
  const shareTitle = useMemo(
    () => "Check out Eistiak Ahmed's Portfolio - Junior Frontend Developer",
    []
  );

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setScrolled(scrollY > 20);

    if (scrollY < 80) {
      setActiveSection('home');
      return;
    }

    // Optimized section detection
    const sections = [
      'about',
      'skills',
      'experience',
      'projects',
      'certificates',
      'github',
      'contact',
    ];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    let ticking = false;

    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  // Memoized social links
  const socialLinks = useMemo(
    () => [
      {
        name: 'GitHub',
        icon: FaGithub,
        href: 'https://github.com/eistiakahmed',
        color: 'hover:text-gray-900 dark:hover:text-white',
      },
      {
        name: 'LinkedIn',
        icon: FaLinkedin,
        href: 'https://linkedin.com/in/eistiak-ahmed',
        color: 'hover:text-blue-600',
      },
      {
        name: 'Twitter',
        icon: FaTwitter,
        href: 'https://twitter.com/eistiakahmed',
        color: 'hover:text-blue-400',
      },
      {
        name: 'Email',
        icon: FaEnvelope,
        href: 'mailto:eistiakahmedmeraj@gmail.com',
        color: 'hover:text-red-500',
      },
    ],
    []
  );

  const navLinks = useMemo(
    () => [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Experience', href: '#experience' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' },
    ],
    []
  );

  // Close dropdowns when clicking outside
  const closeDropdowns = useCallback(() => {
    setIsSocialOpen(false);
    setIsShareOpen(false);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 px-4 py-3 transition-all duration-300"
    >
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between rounded-full border px-4 py-2.5 sm:px-6 transition-all duration-300 ${
          scrolled
            ? 'border-white/30 bg-white/70 shadow-2xl shadow-black/10 backdrop-blur-xl dark:border-white/10 dark:bg-black/45 dark:shadow-black/40'
            : 'border-transparent bg-transparent shadow-none backdrop-blur-0'
        }`}
      >
        {/* Logo */}
        <motion.div
          className="flex min-w-0 items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          
          <span className="truncate text-base font-bold text-gray-950 dark:text-white sm:text-xl">
            &lt; eistiakahmed /&gt;
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center rounded-full border border-black/5 bg-white/35 p-1 backdrop-blur-md dark:border-white/10 dark:bg-white/5">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <motion.a
                key={link.name}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-gray-950 dark:text-white'
                    : 'text-gray-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <span
                  className={`relative z-10 ${
                    isActive ? 'text-blue-600 dark:text-blue-400' : ''
                  }`}
                >
                  {link.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 rounded-full border border-black/10 bg-white/80 shadow-sm dark:border-white/10 dark:bg-white/12"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-2 border-l border-black/10 pl-3 dark:border-white/10">
          {/* Share Portfolio Button */}
          <div className="relative">
            <motion.button
              onClick={() => setIsShareOpen(!isShareOpen)}
              className="relative rounded-full border border-black/10 bg-white/45 p-2 text-gray-700 shadow-sm transition-all hover:bg-white/80 focus:outline-none dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Share Portfolio"
            >
              <FaShare className="h-4 w-4" />
            </motion.button>

            {/* Share Dropdown */}
            <AnimatePresence>
              {isShareOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-40"
                    onClick={closeDropdowns}
                  />

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-56 bg-[#0b0b0f] rounded-xl shadow-2xl border border-white/10 overflow-hidden z-50"
                  >
                    <div className="p-3">
                      <p className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wider">
                        Share Portfolio
                      </p>
                      <div className="grid grid-cols-5 gap-2">
                        <FacebookShareButton url={shareUrl} quote={shareTitle}>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FacebookIcon size={32} round />
                          </motion.div>
                        </FacebookShareButton>

                        <TwitterShareButton url={shareUrl} title={shareTitle}>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <TwitterIcon size={32} round />
                          </motion.div>
                        </TwitterShareButton>

                        <LinkedinShareButton url={shareUrl} title={shareTitle}>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <LinkedinIcon size={32} round />
                          </motion.div>
                        </LinkedinShareButton>

                        <WhatsappShareButton url={shareUrl} title={shareTitle}>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <WhatsappIcon size={32} round />
                          </motion.div>
                        </WhatsappShareButton>

                        <TelegramShareButton url={shareUrl} title={shareTitle}>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <TelegramIcon size={32} round />
                          </motion.div>
                        </TelegramShareButton>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Social Links Dropdown */}
          <div className="relative">
            <motion.button
              onClick={() => setIsSocialOpen(!isSocialOpen)}
              className="relative rounded-full border border-black/10 bg-white/45 p-2 text-gray-700 shadow-sm transition-all hover:bg-white/80 focus:outline-none dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Social Links"
            >
              <FaEnvelope className="h-4 w-4" />
            </motion.button>

            <AnimatePresence>
              {isSocialOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-40"
                    onClick={closeDropdowns}
                  />

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-[#0b0b0f] rounded-xl shadow-2xl border border-white/10 overflow-hidden z-50"
                  >
                    <div className="p-2">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 ${social.color} transition-all group`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{
                            x: 5,
                            backgroundColor: 'rgba(59, 130, 246, 0.1)',
                          }}
                          onClick={closeDropdowns}
                        >
                          <social.icon className="w-5 h-5" />
                          <span className="font-medium">{social.name}</span>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="rounded-full border border-black/10 bg-white/45 p-2 transition-colors hover:bg-white/80 focus:outline-none dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/20 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiX className="h-6 w-6 text-gray-900 dark:text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiMenu className="h-6 w-6 text-gray-900 dark:text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute left-4 right-4 top-full mt-2 overflow-hidden rounded-3xl border border-white/10 bg-black/70 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block rounded-full px-4 py-3 text-base font-semibold text-gray-600 transition-all hover:bg-white/80 hover:text-gray-950 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default NavbarOptimized;
