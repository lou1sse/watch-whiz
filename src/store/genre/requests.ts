import { generateRequest } from "@APIService"
import { GenreListResponse } from "./types"

const PREFIX = "genre"

const ENDPOINTS = {
  Movie: `${PREFIX}/movie/list`
}

function getMovieGenres() {
  return generateRequest<GenreListResponse>({
    method: "get",
    endpoint: ENDPOINTS.Movie
  })
}

export { getMovieGenres }
