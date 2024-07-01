import { POSTER_URL } from "@Config"

function getPosterURL(path: string, size = "original") {
  return `${POSTER_URL}${size}/${path}`
}

export { getPosterURL }
