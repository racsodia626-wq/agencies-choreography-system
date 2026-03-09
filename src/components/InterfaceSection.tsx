import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface InterfaceSectionProps {
  id: string;
  sectionNumber: string;
  title: string;
  children: ReactNode;
  className?: string;
}

const InterfaceSection = ({ id, sectionNumber, title, children, className = '' }: InterfaceSectionProps) => {
  return (
    <section id={id} className={`relative z-10 py-24 md:py-32 px-6 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-xs text-primary tracking-wider">
              [{sectionNumber}]
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <h2 className="font-display text-xl font-light text-foreground tracking-wide">
                {title}
              </h2>
            </div>
            <div className="lg:col-span-3 space-y-6">
              {children}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InterfaceSection;
