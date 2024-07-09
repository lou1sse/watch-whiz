export type LanguageItem = {
  iso_639_1: string,
  english_name: string,
  name: string
}

export type ConfigurationState = {
  languages: LanguageItem[],
  setLanguages: (data: LanguageItem[]) => void
}
