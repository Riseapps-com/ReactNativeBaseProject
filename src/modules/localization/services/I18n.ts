import I18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import { LOCALIZATION_FALLBACK_LANGUAGE } from '../config';
import { translations } from '../translations';

const fallback = { languageTag: 'en', isRTL: false };
const { languageTag } = RNLocalize.findBestAvailableLanguage(Object.keys(translations)) || fallback;

I18n.use(initReactI18next).init({
  debug: __DEV__,
  resources: {
    [languageTag]: {
      translation: translations[languageTag](),
    },
  },
  lng: languageTag,
  fallbackLng: LOCALIZATION_FALLBACK_LANGUAGE,

  interpolation: {
    escapeValue: false,
  },

  compatibilityJSON: 'v3',

  returnObjects: true,
});

export default I18n;
