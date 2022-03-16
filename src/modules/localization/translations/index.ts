import de from './de.json';
import en from './en.json';

import type { TranslationGetters } from '../types';

const translations: TranslationGetters = {
  en: () => en,
  de: () => de,
};

export { translations };
