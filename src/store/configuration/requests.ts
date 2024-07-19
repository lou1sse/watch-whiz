import { generateRequest } from "@APIService"
import { CountryItem, LanguageItem } from "./types"

const PREFIX = "configuration"

const ENDPOINTS = {
  Countries: `${PREFIX}/countries`,
  Languages: `${PREFIX}/languages`
}

const getCountries = () =>
  generateRequest<CountryItem[]>({
    method: "get",
    endpoint: ENDPOINTS.Countries
  })

const getLanguages = () =>
  generateRequest<LanguageItem[]>({
    method: "get",
    endpoint: ENDPOINTS.Languages
  })

export { getCountries, getLanguages }
