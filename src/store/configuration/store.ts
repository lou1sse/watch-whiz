import { create } from "zustand"
import { ConfigurationState, CountryItem, LanguageItem } from "./types"

const useConfigurationStore = create<ConfigurationState>((set) => ({
  countries: [] as CountryItem[],
  languages: [] as LanguageItem[],
  setCountries: (countries) => set({ countries }),
  setLanguages: (languages) => set({ languages })
}))

export default useConfigurationStore
