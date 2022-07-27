import { createContext, useState } from 'react';
import { memo } from 'react';
import EnglishJson from '../languages/english.json';

export const LanguageContext = createContext({
  languageText: EnglishJson,
});

function LanguageProvider({ children }: any) {
  const [languageText] = useState(EnglishJson);

  return (
    <LanguageContext.Provider value={{ languageText }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default memo(LanguageProvider);
