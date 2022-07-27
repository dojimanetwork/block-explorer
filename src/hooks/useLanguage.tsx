import { useContext } from 'react';
import { LanguageContext } from '../providers/LanguageProvider';

export default function useLanguage() {
  const { languageText } = useContext(LanguageContext);
  return { languageText };
}
