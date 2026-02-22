import { useLanguageStore } from '@/store/language-store'
import en from './en'
import de from './de'
import pl from './pl'
import type { TranslationKey } from './en'

const dictionaries = { en, de, pl } as const

export function useTranslation() {
  const locale = useLanguageStore((state) => state.locale)
  const dictionary = dictionaries[locale]

  function t(key: TranslationKey): string {
    return dictionary[key] ?? en[key] ?? key
  }

  return { t, locale }
}

export type { TranslationKey }
