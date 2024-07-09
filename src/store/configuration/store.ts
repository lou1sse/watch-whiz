import { create } from "zustand"
import { ConfigurationState, LanguageItem } from "./types"

const useConfigurationStore = create<ConfigurationState>((set) => ({
  languages: [] as LanguageItem[],
  setLanguages: (languages) => set({ languages })
}))

export default useConfigurationStore
