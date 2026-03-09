import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Grid overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-0">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-grid-line h-full" />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="font-display text-6xl md:text-8xl font-light tracking-tight">
              AGENCIES
            </h1>
            <p className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
              Choreographic Research Project
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="font-display text-xl md:text-2xl font-light italic text-muted-foreground max-w-3xl mx-auto">
              A choreographic research project exploring body, decision-making, and systems of control.
            </h2>
            
            <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-foreground/80">
              Agencies is an experimental research project that investigates how the body behaves when movement is activated, guided, or constrained by external systems such as instructions, rules, or signals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-4"
          >
            <Button 
              variant="system" 
              onClick={() => scrollToSection('about')}
              className="group"
            >
              Learn about the project
              <ChevronDown className="w-3 h-3 ml-2 transition-transform group-hover:translate-y-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                01 — About the Project
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg leading-relaxed">
                Agencies is a performance research project developed by dancer and performer Rakso Sami Cabrera.
              </p>
              
              <p className="text-lg leading-relaxed">
                The project explores the relationship between body, autonomy, and systems of control within a performative context. The central question of the research is:
              </p>

              <blockquote className="font-display text-xl md:text-2xl italic text-center py-8 border-l-2 border-grid-line pl-6">
                How does the body express agency when movement is guided or conditioned by external systems?
              </blockquote>

              <p className="text-lg leading-relaxed">
                The project works within an expanded understanding of contemporary dance — not as a fixed movement style, but as a context where different physical practices can coexist. The research integrates elements from contemporary dance, acrobatics, physical tasks, and instruction-based movement systems.
              </p>

              <p className="text-lg leading-relaxed">
                Conceptually, the project also connects to ideas from digital culture, such as interfaces, decision systems, and videogame structures, imagining the performer as a body navigating a choreographic system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Section */}
      <section className="relative z-10 py-24 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                02 — The Laboratory
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg leading-relaxed">
                The project is developed through a series of research laboratories.
              </p>
              
              <p className="text-lg leading-relaxed">
                A laboratory in this context is a collaborative space for exploration where artists work together to test ideas, physical structures, and performative systems without the immediate pressure of producing a finished piece.
              </p>

              <div className="py-6">
                <p className="text-lg leading-relaxed mb-4">During these laboratories we explore:</p>
                <ul className="space-y-3 font-mono text-sm">
                  <li>• physical and choreographic material</li>
                  <li>• instruction-based movement systems</li>
                  <li>• relationships between body, space, and decision structures</li>
                  <li>• simple technological or performative systems</li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed">
                The laboratories are meant to be flexible, experimental, and collaborative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* European Research Route */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                03 — European Research Route
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg leading-relaxed">
                The research is designed to take place across several European cities through small laboratories in collaboration with local artists, studios, and cultural spaces.
              </p>

              <div className="py-6">
                <p className="text-lg leading-relaxed mb-4">Each laboratory may include:</p>
                <ul className="space-y-3 font-mono text-sm">
                  <li>• studio research sessions</li>
                  <li>• collaboration with local artists</li>
                  <li>• exchange of practices and methodologies</li>
                  <li>• optional open studio or informal showing</li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed">
                The goal is to allow the project to evolve through different contexts and artistic communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Performance */}
      <section className="relative z-10 py-24 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                04 — Toward a Final Performance
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg leading-relaxed">
                Although the project is currently in a research phase, the long-term goal is to develop a final performance work emerging from the discoveries of the laboratories.
              </p>

              <div className="py-6">
                <p className="text-lg leading-relaxed mb-4">The final format is intentionally open and could take different forms, such as:</p>
                <ul className="space-y-3 font-mono text-sm">
                  <li>• choreographic performance</li>
                  <li>• interactive performance</li>
                  <li>• performative installation</li>
                  <li>• hybrid choreography-system format</li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed">
                The materials developed in the laboratories will gradually shape the structure of the final piece.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Artist */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                05 — About the Artist
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg leading-relaxed">
                Rakso Sami Cabrera is a contemporary dancer and performer working between choreography, physical research, and interdisciplinary performance.
              </p>
              
              <p className="text-lg leading-relaxed">
                His practice explores movement as a system of thinking, combining contemporary dance, acrobatics, and experimental structures of performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborate */}
      <section className="relative z-10 py-24 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                06 — Collaborate
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg leading-relaxed">
                This project is open to collaborations with:
              </p>

              <ul className="space-y-3 font-mono text-sm">
                <li>• dance studios</li>
                <li>• performance research spaces</li>
                <li>• cultural centers</li>
                <li>• independent artists</li>
                <li>• residencies or laboratories</li>
              </ul>

              <p className="text-lg leading-relaxed pt-4">
                If you are interested in hosting or collaborating in a laboratory, please get in touch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                Contact
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-4">
              <div className="space-y-2">
                <p className="font-display text-xl">Rakso Sami Cabrera</p>
                <p className="font-mono text-sm text-muted-foreground">
                  Email: [contact@example.com]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono text-xs text-muted-foreground">
            AGENCIES — Choreographic Research © 2024
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;