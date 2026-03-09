import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const keywords = ['BODY', 'SYSTEM', 'DECISION', 'MOVEMENT', 'CONTROL', 'AGENCY'];

const RotatingKeywords = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % keywords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 md:h-10 overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center font-mono text-sm md:text-base tracking-[0.3em] text-primary animate-glow-pulse"
        >
          {keywords[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default RotatingKeywords;
