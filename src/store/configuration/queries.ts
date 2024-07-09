import { find } from "lodash-es"
import { useMemo } from "react"
import { useQuery } from "react-query"
import { getLanguages } from "./requests"
import useConfigurationStore from "./store"

function useLanguages(original_language?: string) {
  const { languages, setLanguages } = useConfigurationStore()

  const { isLoading: isLanguagesLoading, error: languagesError } =
    useQuery("languages", getLanguages, {
      onSuccess: (data) => {
        setLanguages(data)
      }
    })

  const originalLanguageName = useMemo(() => {
    const languageName = find(
      languages,
      (item) => item.iso_639_1 === original_language
    )?.english_name
    return languageName || ""
  }, [languages, original_language])

  return {
    isLanguagesLoading,
    languages,
    languagesError,
    originalLanguageName
  }
}

export const ConfigurationQueries = { useLanguages }
