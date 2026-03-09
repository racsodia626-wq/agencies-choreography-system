import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Lang = 'es' | 'en';

interface LanguageContextType {
  lang: Lang;
  toggle: () => void;
  t: (es: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('agencias-lang');
    return (saved === 'en' || saved === 'es') ? saved : 'es';
  });

  useEffect(() => {
    localStorage.setItem('agencias-lang', lang);
  }, [lang]);

  const toggle = () => setLang(l => l === 'es' ? 'en' : 'es');
  const t = (es: string, en: string) => lang === 'es' ? es : en;

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
