import { useLanguage } from '@/hooks/useLanguage';

const LanguageToggle = () => {
  const { lang, toggle } = useLanguage();

  return (
    <button
      onClick={toggle}
      className="fixed top-6 right-6 z-50 flex items-center border border-border rounded-full overflow-hidden font-mono text-xs tracking-wider"
    >
      <span
        className={`px-3 py-1.5 transition-colors duration-200 ${
          lang === 'es' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
        }`}
      >
        ES
      </span>
      <span
        className={`px-3 py-1.5 transition-colors duration-200 ${
          lang === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
        }`}
      >
        EN
      </span>
    </button>
  );
};

export default LanguageToggle;
