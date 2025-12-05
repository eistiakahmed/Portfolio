import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const SectionWrapper = ({ 
  children, 
  id, 
  className = '', 
  delay = 0,
  animationType = 'fadeUp' 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const animations = {
    fadeUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, delay, ease: 'easeOut' }
      }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration: 0.8, delay }
      }
    },
    slideLeft: {
      hidden: { opacity: 0, x: -100 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.6, delay, ease: 'easeOut' }
      }
    },
    slideRight: {
      hidden: { opacity: 0, x: 100 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.6, delay, ease: 'easeOut' }
      }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.6, delay, type: 'spring' }
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`relative ${className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animations[animationType]}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
