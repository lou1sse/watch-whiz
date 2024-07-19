import { generateRequest } from "@APIService"
import { GenreListResponse } from "./types"

const PREFIX = "genre"

const ENDPOINTS = {
  Movie: `${PREFIX}/movie/list`
}

const getMovieGenres = () =>
  generateRequest<GenreListResponse>({
    method: "get",
    endpoint: ENDPOINTS.Movie
  })

export { getMovieGenres }
