import { useLanguage } from '@/hooks/useLanguage';

const LanguageToggle = () => {
  const { lang, toggle } = useLanguage();

  return (
    <button
      onClick={toggle}
      className="fixed top-6 right-6 z-50 flex items-center border border-border rounded-full overflow-hidden font-mono text-base tracking-wider"
    >
      <span
        className={`px-4 py-2 transition-all duration-200 ${
          lang === 'es' ? 'bg-primary text-primary-foreground shadow-[0_0_12px_hsl(var(--primary)/0.4)]' : 'text-muted-foreground'
        }`}
      >
        ES
      </span>
      <span
        className={`px-4 py-2 transition-all duration-200 ${
          lang === 'en' ? 'bg-primary text-primary-foreground shadow-[0_0_12px_hsl(var(--primary)/0.4)]' : 'text-muted-foreground'
        }`}
      >
        EN
      </span>
    </button>
  );
};

export default LanguageToggle;
