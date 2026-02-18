import { create } from 'zustand'

export type Locale = 'en' | 'de'

interface LanguageState {
  locale: Locale
  setLocale: (locale: Locale) => void
}

export const useLanguageStore = create<LanguageState>((set) => ({
  locale: 'en',
  setLocale: (locale) => set({ locale }),
}))
