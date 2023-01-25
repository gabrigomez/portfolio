import i18n from 'i18next';
import LangageDetector from 'i18next-browser-languagedetector';

import { messages } from './languages';

i18n
  .use(LangageDetector)
  .init({
    debug: false,
    defaultNs: ['translations'],
    fallbackLng: 'pt',
    ns: ['translations'],
    resources: messages,
  });

export { i18n }