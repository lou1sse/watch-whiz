import { generateRequest } from "@APIService"
import { LanguageItem } from "./types"

const PREFIX = "configuration"

const ENDPOINTS = {
  Languages: `${PREFIX}/languages`
}

function getLanguages() {
  return generateRequest<LanguageItem[]>({
    method: "get",
    endpoint: ENDPOINTS.Languages
  })
}

export { getLanguages }
