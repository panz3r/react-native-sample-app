// @flow

import RNLanguages from 'react-native-languages';

import { defaultTo } from 'lodash';
import i18n from 'i18n-js';

import en from './en.json';

i18n.locale = RNLanguages.language;
i18n.fallbacks = true;
i18n.defaultLocale = 'en';
i18n.translations = {
  it
};

export function translate(name: string, params: any = {}): string {
  return i18n.t(name, params);
}

export function translateOrNull(name: string, params: any = {}): ?string {
  return defaultTo(i18n.t(name, { ...params, defaultValue: NaN }), undefined); // eslint-disable-line no-undefined
}

export default i18n;
