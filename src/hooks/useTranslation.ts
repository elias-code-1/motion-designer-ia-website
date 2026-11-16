import { useState, useCallback } from 'react';
import { translations, type Lang } from '../i18n/translations';

export function useTranslation() {
  const [lang, setLang] = useState<Lang>('fr');

  const t = translations[lang];

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'fr' ? 'en' : 'fr'));
  }, []);

  const switchLang = useCallback((newLang: Lang) => {
    setLang(newLang);
  }, []);

  return { t, lang, toggleLang, switchLang };
}
