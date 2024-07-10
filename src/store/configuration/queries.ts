import { useQuery } from "react-query"
import { getCountries, getLanguages } from "./requests"
import useConfigurationStore from "./store"

function useCountries() {
  const { countries, setCountries } = useConfigurationStore()

  const { isLoading: isCountriesLoading, error: countriesError } =
    useQuery("countries", getCountries, {
      onSuccess: (data) => {
        setCountries(data)
      }
    })

  return {
    isCountriesLoading,
    countries,
    countriesError
  }
}

function useLanguages() {
  const { languages, setLanguages } = useConfigurationStore()

  const { isLoading: isLanguagesLoading, error: languagesError } =
    useQuery("languages", getLanguages, {
      onSuccess: (data) => {
        setLanguages(data)
      }
    })

  return {
    isLanguagesLoading,
    languages,
    languagesError
  }
}

export const ConfigurationQueries = { useCountries, useLanguages }
