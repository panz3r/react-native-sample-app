import RNLanguages from 'react-native-languages';

import { defaultTo } from 'lodash';
import i18n from 'i18n-js';

import en from './locales/en.json';

i18n.locale = RNLanguages.language;
i18n.fallbacks = true;
i18n.defaultLocale = 'en';
i18n.translations = {
  en
};

export function translate(name, params) {
  return i18n.t(name, params);
}

export function translateOrNull(name, params) {
  return defaultTo(i18n.t(name, { ...params, defaultValue: NaN }), undefined); // eslint-disable-line no-undefined
}
