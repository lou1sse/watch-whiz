import { find, map } from "lodash-es"
import { useMemo } from "react"
import type { MovieDetailsResponse } from "../movie"
import useConfigurationStore from "./store"

function useConfigurationUtilities(details: MovieDetailsResponse) {
  const { countries, languages } = useConfigurationStore()

  const countryNames = useMemo(
    () =>
      map(details.origin_country, (item) => {
        const country = find(countries, { iso_3166_1: item })
        return country ? country.english_name : ""
      }),
    [details, countries]
  )

  const originalLanguageName = useMemo(() => {
    const data = find(languages, { iso_639_1: details.original_language })
    return data ? data.english_name : ""
  }, [details, languages])

  return {
    countryNames,
    originalLanguageName
  }
}

export default useConfigurationUtilities
