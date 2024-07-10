export type CountryItem = {
  iso_3166_1: string,
  english_name: string,
  native_name: string
}

export type LanguageItem = {
  iso_639_1: string,
  english_name: string,
  name: string
}

export type ConfigurationState = {
  countries: CountryItem[],
  languages: LanguageItem[],
  setCountries: (data: CountryItem[]) => void,
  setLanguages: (data: LanguageItem[]) => void
}
