import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section fade up
      gsap.from('.footer-section', {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // Social icons pop animation
      gsap.from('.social-icon', {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        delay: 0.4,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* About */}
          <div className="footer-section md:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Junior Developer
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Passionate about building clean, modern, and user-focused web
              experiences with a strong emphasis on performance and design.
            </p>
          </div>

          <div className="hidden md:block md:col-span-1 footer-section"></div>

          {/* Navigation */}
          <div className="footer-section md:col-span-2">
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="footer-section md:col-span-4">
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">
              Connect with Me
            </h4>
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/eistiakahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-gray-600 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer"
                aria-label="GitHub"
              >
                <FaGithub size={20} color='white'/>
              </a>

              <a
                href="https://www.linkedin.com/in/eistiak-ahmed/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-gray-600 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} color='white'/>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8 text-center footer-section">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Junior Developer — All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
