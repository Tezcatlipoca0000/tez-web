import 'server-only'

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: (() => import('./messages/en.json').then((module) => module.default))(),
  es: (() => import('./messages/es.json').then((module) => module.default))(),
}

export const getDictionary = async (locale) => dictionaries[locale]