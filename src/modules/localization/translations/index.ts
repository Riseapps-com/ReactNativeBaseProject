import { TranslationGetters } from '../types';
import de from './de.json';
import en from './en.json';

const translations: TranslationGetters = {
  en: () => en,
  de: () => de,
};

export { translations };
