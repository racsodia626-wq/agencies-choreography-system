import { motion } from 'framer-motion';

const AnimatedGrid = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated grid */}
      <div className="absolute inset-0 animate-grid-pulse">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="hsl(var(--grid-line))"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating nodes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{
            left: `${15 + (i * 12)}%`,
            top: `${20 + (i * 8) % 60}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.line
          x1="10%"
          y1="30%"
          x2="30%"
          y2="50%"
          stroke="hsl(var(--primary) / 0.1)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.line
          x1="70%"
          y1="20%"
          x2="90%"
          y2="40%"
          stroke="hsl(var(--primary) / 0.1)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <motion.line
          x1="50%"
          y1="60%"
          x2="80%"
          y2="80%"
          stroke="hsl(var(--primary) / 0.1)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        />
      </svg>

      {/* Scanline effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          animate={{
            top: ["-10%", "110%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedGrid;
