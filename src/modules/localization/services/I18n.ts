import I18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import { LOCALIZATION_FALLBACK_LANGUAGE } from '../config';
import * as translations from '../translations';

I18n.use(initReactI18next).init({
  debug: __DEV__,
  resources: translations,
  lng: RNLocalize.findBestAvailableLanguage(Object.keys(translations))?.languageTag,
  fallbackLng: LOCALIZATION_FALLBACK_LANGUAGE,

  interpolation: {
    escapeValue: false,
  },
});

export default I18n;
