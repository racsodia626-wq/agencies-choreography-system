import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import LanguageToggle from '@/components/LanguageToggle';
import artistPhoto from '@/assets/artist-photo.jpg';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const SectionLabel = ({ children, large = false }: { children: string; large?: boolean }) => (
  <p className={`font-mono tracking-[0.3em] text-primary uppercase mb-5 ${large ? 'text-sm' : 'text-xs'}`}>
    <span className="text-primary mr-2">•</span>{children}
  </p>
);

const Index = () => {
  const { t } = useLanguage();

  const roles = [
    { n: '01', name: t('Controlador', 'Controller'), desc: t('emite los comandos', 'issues the commands') },
    { n: '02', name: t('Intérprete / Cuerpo', 'Performer / Body'), desc: t('ejecuta los comandos', 'executes the commands') },
    { n: '03', name: t('Sistema', 'System'), desc: t('define las reglas y limitaciones', 'defines the rules and constraints') },
  ];

  const mappings = [
    [t('Personaje', 'Character'), t('Intérprete', 'Performer')],
    [t('Comandos', 'Commands'), t('Instrucciones', 'Instructions')],
    ['Tutorial', t('Fase inicial', 'Initial phase')],
    [t('Mecánicas', 'Mechanics'), t('Reglas', 'Rules')],
    ['Multiplayer', t('Control compartido', 'Shared control')],
  ];

  const stages = [
    { label: t('Consolidación conceptual ✓', 'Conceptual consolidation ✓'), status: 'done' },
    { label: t('Prototipos coreográficos [en curso]', 'Choreographic prototypes [in progress]'), status: 'active' },
    { label: t('Sistema técnico mínimo', 'Minimum technical system'), status: 'pending' },
    { label: t('Pruebas escénicas con público', 'Stage tests with audience'), status: 'pending' },
    { label: t('Pieza final 30–60 min', 'Final piece 30–60 min'), status: 'pending' },
  ];

  return (
    <div className="min-h-screen bg-background scanline-overlay">
      <LanguageToggle />

      {/* HERO */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-7xl sm:text-8xl md:text-9xl font-light tracking-tight text-foreground"
        >
          AGENCIAS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 font-mono text-sm md:text-base text-primary tracking-wider"
        >
          {t('Sistema coreográfico experimental', 'Experimental choreographic system')}
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-6 w-24 h-px bg-primary origin-center"
        />
      </section>

      {/* CENTRAL QUESTION */}
      <motion.section {...fadeIn} className="py-14 md:py-20 px-6">
        <div className="max-w-3xl mx-auto border-l-2 border-primary/30 pl-6 space-y-3">
          <p className="text-xl md:text-2xl italic text-foreground/90 leading-relaxed">
            {t(
              '¿Cómo se manifiesta la agencia del cuerpo cuando es guiado, condicionado o controlado por sistemas externos?',
              'How does bodily agency manifest when guided, conditioned or controlled by external systems?'
            )}
          </p>
          <p className="text-sm md:text-base text-muted-foreground">
            {t(
              '¿Qué ocurre con la responsabilidad cuando alguien controla a otro?',
              'What happens to responsibility when someone controls another?'
            )}
          </p>
        </div>
      </motion.section>

      {/* ABOUT */}
      <motion.section {...fadeIn} className="py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>{t('SOBRE EL PROYECTO', 'ABOUT THE PROJECT')}</SectionLabel>
          <p className="text-base md:text-lg leading-relaxed text-foreground/80">
            {t(
              'AGENCIAS investiga la transferencia de agencia corporal usando mecánicas de videojuegos como estructura performativa. No es una obra fija ni improvisación libre — es interacción estructurada mediante comandos, donde el cuerpo actúa como avatar dentro de un sistema.',
              'AGENCIAS investigates the transfer of bodily agency using video game mechanics as a performative structure. It is neither a fixed piece nor free improvisation — it is structured interaction through commands, where the body operates as an avatar within a system.'
            )}
          </p>
        </div>
      </motion.section>

      {/* THREE ROLES */}
      <motion.section {...fadeIn} className="py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>{t('TRES ROLES', 'THREE ROLES')}</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {roles.map((r) => (
              <div key={r.n} className="border border-border p-6 space-y-3 hover:border-primary/50 transition-colors">
                <span className="font-mono text-xs text-primary">{r.n}</span>
                <p className="text-lg text-foreground">{r.name}</p>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground text-center">
            {t(
              'El control no es fijo — puede rotar, compartirse o cruzarse.',
              'Control is not fixed — it can rotate, be shared, or cross between participants.'
            )}
          </p>
        </div>
      </motion.section>

      {/* MOVEMENT & AESTHETICS */}
      <motion.section {...fadeIn} className="py-14 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <SectionLabel>{t('LENGUAJE CORPORAL', 'MOVEMENT LANGUAGE')}</SectionLabel>
            <p className="text-base leading-relaxed text-foreground/80">
              {t(
                'Danza contemporánea como marco de lectura. Integra breaking, acrobacia, gestos cotidianos, caídas, saltos y cambios de nivel.',
                'Contemporary dance as a reading framework. Integrates breaking, acrobatics, everyday gestures, falls, jumps, and level changes.'
              )}
            </p>
          </div>
          <div>
            <SectionLabel>{t('ESTÉTICA', 'AESTHETICS')}</SectionLabel>
            <p className="text-base leading-relaxed text-foreground/80">
              {t(
                'Cyberpunk, retrofuturismo, interfaces digitales, ciencia ficción. Tecnología visible, simple y funcional.',
                'Cyberpunk, retrofuturism, digital interfaces, science fiction. Technology visible, simple and functional.'
              )}
            </p>
          </div>
        </div>
      </motion.section>

      {/* VIDEO GAME LOGIC */}
      <motion.section {...fadeIn} className="py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>{t('LÓGICA DE VIDEOJUEGOS', 'VIDEO GAME LOGIC')}</SectionLabel>
          <div className="flex flex-wrap gap-3 mb-6">
            {mappings.map(([from, to]) => (
              <span
                key={from}
                className="font-mono text-xs border border-primary/40 rounded-full px-4 py-2 text-foreground/80"
              >
                {from} <span className="text-primary mx-1">→</span> {to}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            {t(
              'El proyecto no imita videojuegos — usa su lógica como estructura performativa.',
              'The project does not imitate video games — it uses their logic as a performative structure.'
            )}
          </p>
        </div>
      </motion.section>

      {/* DEVELOPMENT PLAN */}
      <motion.section {...fadeIn} className="py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>{t('PLAN DE DESARROLLO', 'DEVELOPMENT PLAN')}</SectionLabel>
          <div className="space-y-3">
            {stages.map((s, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className={`font-mono text-xs mt-1 w-6 text-right ${
                  s.status === 'done' ? 'text-muted-foreground' :
                  s.status === 'active' ? 'text-primary' : 'text-muted-foreground/50'
                }`}>
                  {i + 1}
                </span>
                <div className={`flex-1 border-l pl-4 py-1 ${
                  s.status === 'done' ? 'border-muted-foreground/30 text-muted-foreground line-through' :
                  s.status === 'active' ? 'border-primary text-primary shadow-[inset_0_0_20px_-10px_hsl(var(--primary)/0.2)]' :
                  'border-border text-foreground/50'
                }`}>
                  <span className="text-sm font-mono">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* COLLABORATION */}
      <motion.section {...fadeIn} className="py-14 px-6">
        <div className="max-w-3xl mx-auto border-l-4 border-primary pl-6 bg-[hsl(220_40%_10%)] rounded-r-lg py-8 pr-6">
          <SectionLabel large>{t('ABIERTO A COLABORACIÓN', 'OPEN FOR COLLABORATION')}</SectionLabel>
          <p className="text-lg leading-relaxed text-foreground/80">
            {t(
              'AGENCIAS está en proceso. La siguiente fase ocurre en Europa — laboratorios, residencias, pruebas escénicas. Los elementos aún abiertos son exactamente los espacios de cocreación: el catálogo de comandos, la forma escénica final, la estructura dramatúrgica. Si algo de esto resuena, hablemos.',
              "AGENCIAS is in process. The next phase happens in Europe — labs, residencies, stage tests. The still-open elements are precisely the spaces for co-creation: the command catalogue, the final scenic form, the dramaturgical structure. If any of this resonates, let's talk."
            )}
          </p>
        </div>
      </motion.section>

      {/* ABOUT THE ARTIST */}
      <motion.section {...fadeIn} className="py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>{t('SOBRE EL ARTISTA', 'ABOUT THE ARTIST')}</SectionLabel>
          <div className="relative w-full max-h-[500px] overflow-hidden mb-2">
            <img
              src={artistPhoto}
              alt={t('Racso Sami Cabrera en escena', 'Racso Sami Cabrera performing')}
              className="w-full max-h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-background/30" />
          </div>
          <p className="text-[11px] text-muted-foreground/60 mb-6">
            Photo: @arnauudbeelenphoto — TicTac Art Center, Brussels, Belgium
          </p>
          <p className="text-base md:text-lg leading-relaxed text-foreground/80">
            {t(
              'Racso Sami Cabrera es bailarín, intérprete y creador escénico mexicano con formación en danza contemporánea, teatro físico y butoh. Estudió en la Escuela Profesional de Danza Contemporánea de Mazatlán y en SEAD — Salzburg Experimental Academy of Dance, Austria, donde obtuvo su licenciatura en 2024. Ha colaborado con Teatro Cuerpo Social, compañía de danza-teatro y butoh en México, y desarrollado obra propia como intérprete-creador. Su pieza unipersonal Sabor Fresa ha sido su trabajo de mayor circulación. Se ha presentado en más de 20 festivales internacionales en México, Ecuador, Costa Rica, Austria, Francia, Bélgica y Reino Unido. AGENCIAS es su proyecto actual.',
              "Racso Sami Cabrera is a Mexican dancer, performer and stage creator with training in contemporary dance, physical theatre and butoh. He studied at the Escuela Profesional de Danza Contemporánea in Mazatlán and at SEAD — Salzburg Experimental Academy of Dance, Austria, where he completed his bachelor's degree in 2024. He has collaborated with Teatro Cuerpo Social, a dance-theatre and butoh company in Mexico, and developed his own work as a performer-creator. His solo piece Sabor Fresa has been his most widely performed work. He has presented at more than 20 international festivals across Mexico, Ecuador, Costa Rica, Austria, France, Belgium and the United Kingdom. AGENCIAS is his current project."
            )}
          </p>
        </div>
      </motion.section>

      {/* CONTACT */}
      <footer className="border-t border-primary/30 py-10 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm italic text-primary text-center mb-6">
            {t(
              'Si este proyecto resuena contigo, escríbenos.',
              'If this project resonates with you, reach out.'
            )}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <span>Racso Sami Cabrera Hernandez</span>
            <span className="font-mono text-primary">racsodia626@gmail.com</span>
            <span>Mexico / Europe</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
