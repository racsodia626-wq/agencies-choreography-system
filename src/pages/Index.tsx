import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimatedGrid from '@/components/AnimatedGrid';
import RotatingKeywords from '@/components/RotatingKeywords';
import InterfaceSection from '@/components/InterfaceSection';

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background scanline-overlay">
      <AnimatedGrid />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* System status indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="font-mono text-xs text-primary/70 tracking-widest uppercase">
              System Active
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-foreground">
              AGENCIES
            </h1>
            
            <p className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-muted-foreground max-w-2xl mx-auto">
              A choreographic research project exploring body, decision-making and systems of control.
            </p>
          </motion.div>

          {/* Rotating keywords */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="py-6"
          >
            <RotatingKeywords />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-8"
          >
            <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-foreground/70">
              Agencies is an experimental performance research project investigating how the body behaves when movement is activated, guided or constrained by external systems such as instructions, signals, and rules.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="pt-8"
          >
            <Button 
              variant="system" 
              onClick={() => scrollToSection('project')}
              className="interface-btn group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:animate-pulse" />
                ENTER THE PROJECT
                <span className="animate-blink">_</span>
              </span>
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent"
            />
          </motion.div>
        </div>
      </section>

      {/* The Project Section */}
      <InterfaceSection id="project" sectionNumber="01" title="The Project">
        <p className="text-lg leading-relaxed text-foreground/80">
          Agencies is a choreographic research project developed by dancer and performer <span className="text-primary">Rakso Sami Cabrera</span>.
        </p>
        
        <p className="text-lg leading-relaxed text-foreground/80">
          The project investigates the relationship between body, autonomy and systems of control in performance.
        </p>

        <blockquote className="py-8 border-l border-primary/50 pl-6 my-8">
          <p className="font-mono text-sm md:text-base text-primary/90 leading-relaxed">
            How does the body express agency when movement is activated or conditioned by external systems?
          </p>
        </blockquote>

        <p className="text-lg leading-relaxed text-foreground/80">
          The research works within an expanded understanding of contemporary dance — not as a specific movement style, but as a performative context where different physical practices coexist.
        </p>

        <div className="py-6">
          <p className="text-sm text-muted-foreground mb-4 font-mono tracking-wider">
            // INTEGRATED PRACTICES
          </p>
          <ul className="grid grid-cols-2 gap-3">
            {['contemporary dance', 'acrobatics', 'physical tasks', 'instruction-based systems'].map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 font-mono text-sm text-foreground/70"
              >
                <span className="w-1 h-1 bg-primary rounded-full" />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        <p className="text-lg leading-relaxed text-foreground/80">
          Conceptually the project connects with ideas from digital culture, interfaces, and videogame structures — imagining the performer as a body navigating a choreographic system.
        </p>
      </InterfaceSection>

      {/* Laboratory Section */}
      <InterfaceSection 
        id="laboratory" 
        sectionNumber="02" 
        title="Laboratory Process"
        className="bg-secondary/30"
      >
        <p className="text-lg leading-relaxed text-foreground/80">
          The project develops through <span className="text-primary">research laboratories</span>.
        </p>
        
        <p className="text-lg leading-relaxed text-foreground/80">
          A laboratory is a collaborative space where artists explore ideas, physical systems, and choreographic structures together without the pressure of producing a finished work immediately.
        </p>

        <div className="py-6">
          <p className="text-sm text-muted-foreground mb-4 font-mono tracking-wider">
            // LAB COMPONENTS
          </p>
          <ul className="space-y-3">
            {[
              'physical exploration',
              'choreographic experiments',
              'instruction-based movement',
              'decision structures',
              'body–system relationships'
            ].map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 font-mono text-sm text-foreground/70 group"
              >
                <span className="w-4 h-px bg-primary/50 group-hover:w-8 transition-all" />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        <p className="text-lg leading-relaxed text-foreground/80">
          The laboratories allow the project to evolve through experimentation and collaboration.
        </p>
      </InterfaceSection>

      {/* European Research Route */}
      <InterfaceSection id="route" sectionNumber="03" title="European Research Route">
        <p className="text-lg leading-relaxed text-foreground/80">
          The project is designed to develop through a series of laboratories across different European cities.
        </p>

        <p className="text-lg leading-relaxed text-foreground/80">
          Each laboratory involves collaboration with local artists, studios, or cultural spaces.
        </p>

        <div className="py-6">
          <p className="text-sm text-muted-foreground mb-4 font-mono tracking-wider">
            // ACTIVITIES
          </p>
          <ul className="space-y-3">
            {[
              'studio research sessions',
              'collaboration with local performers',
              'exchange of practices and methodologies',
              'open studio or informal showing'
            ].map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 font-mono text-sm text-foreground/70 group"
              >
                <span className="text-primary text-xs">{`0${i + 1}`}</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        <p className="text-lg leading-relaxed text-foreground/80">
          This process allows the research to grow through different artistic contexts.
        </p>
      </InterfaceSection>

      {/* Future Performance */}
      <InterfaceSection 
        id="performance" 
        sectionNumber="04" 
        title="Toward a Final Piece"
        className="bg-secondary/30"
      >
        <p className="text-lg leading-relaxed text-foreground/80">
          Although the project is currently in a research phase, the long-term goal is to develop a final performance work emerging from the discoveries of the laboratories.
        </p>

        <p className="text-lg leading-relaxed text-foreground/80">
          The final format remains intentionally open and may become:
        </p>

        <div className="py-6 grid grid-cols-2 gap-4">
          {[
            'choreographic performance',
            'interactive performance',
            'performative installation',
            'hybrid choreography-system'
          ].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-border/50 p-4 hover:border-primary/50 transition-colors"
            >
              <span className="font-mono text-xs text-foreground/70">{item}</span>
            </motion.div>
          ))}
        </div>

        <p className="text-lg leading-relaxed text-foreground/80">
          The material developed during the laboratories will gradually shape the final structure.
        </p>
      </InterfaceSection>

      {/* Artist Section */}
      <InterfaceSection id="artist" sectionNumber="05" title="Artist">
        <p className="text-lg leading-relaxed text-foreground/80">
          <span className="text-primary font-medium">Rakso Sami Cabrera</span> is a contemporary dancer and performer working between choreography, physical research and interdisciplinary performance.
        </p>
        
        <p className="text-lg leading-relaxed text-foreground/80">
          His work explores movement as a system of thinking, combining contemporary dance, acrobatics and experimental performance structures.
        </p>
      </InterfaceSection>

      {/* Collaborate Section */}
      <InterfaceSection 
        id="collaborate" 
        sectionNumber="06" 
        title="Collaborate"
        className="bg-secondary/30"
      >
        <p className="text-lg leading-relaxed text-foreground/80">
          The project is open to collaborations with:
        </p>

        <div className="py-6">
          <ul className="space-y-3">
            {[
              'dance studios',
              'research laboratories',
              'performance venues',
              'cultural centers',
              'independent artists'
            ].map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 font-mono text-sm text-foreground/70"
              >
                <span className="text-primary">→</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        <p className="text-lg leading-relaxed text-foreground/80">
          If you are interested in hosting or collaborating on a laboratory, please get in touch.
        </p>
      </InterfaceSection>

      {/* Contact */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary/50" />
              <span className="font-mono text-xs text-primary tracking-wider">[CONTACT]</span>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/50" />
            </div>

            <div className="space-y-2">
              <p className="font-display text-2xl text-foreground">Rakso Sami Cabrera</p>
              <p className="font-mono text-sm text-primary">
                contact@raksosami.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-border/30">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            AGENCIES — Choreographic Research System
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            © 2024 <span className="animate-blink">_</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
