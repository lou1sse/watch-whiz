import { generateRequest } from "@APIService"
import { CountryItem, LanguageItem } from "./types"

const PREFIX = "configuration"

const ENDPOINTS = {
  Countries: `${PREFIX}/countries`,
  Languages: `${PREFIX}/languages`
}

function getCountries() {
  return generateRequest<CountryItem[]>({
    method: "get",
    endpoint: ENDPOINTS.Countries
  })
}

function getLanguages() {
  return generateRequest<LanguageItem[]>({
    method: "get",
    endpoint: ENDPOINTS.Languages
  })
}

export { getCountries, getLanguages }
