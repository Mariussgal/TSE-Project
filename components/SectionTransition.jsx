import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './SectionTransition.css';

const SectionTransition = () => {
  const { scrollYProgress } = useScroll();
  
  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0.25, 0.3],
    [0, 1]
  );

  const textOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.32, 0.50],
    [0, 1, 0]
  );

  const textY = useTransform(
    scrollYProgress,
    [0.27, 0.32, 0.37],
    [50, 0, -50] 
  );

  const badgeRotation = useTransform(
    scrollYProgress,
    [0.27, 0.37],
    [0, 360] 
  );

  return (
    <div className="section-transition">
      <motion.div 
        className="transition-background"
        style={{ opacity: backgroundOpacity }}
      />
      <motion.div 
        className="transition-content"
        style={{ 
          opacity: textOpacity,
          y: textY
        }}
      >
        <motion.div 
          className="safety-badge"
          style={{ rotate: badgeRotation }}
        >
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="#ff6b35" />
            <path d="M50 20 L60 35 L80 40 L65 55 L70 75 L50 65 L30 75 L35 55 L20 40 L40 35 Z" fill="#0a1f12" />
            <text x="50" y="53" textAnchor="middle" fill="#ff6b35" fontWeight="bold" fontSize="8">SAFETY</text>
          </svg>
        </motion.div>
        <h2>LOGWEAR</h2>
        <p>Advanced Protection for Professional Lumberjacks</p>
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionTransition;