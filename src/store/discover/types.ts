import { MovieItem } from "../movie/types"

export type DiscoverMoviesPayload = Partial<{
  sort_by: string,
  primary_release_year: string,
  primary_release_date_gte: string,
  primary_release_date_lte: string,
  release_date_gte: string,
  release_date_lte: string,
  with_genres: number | string
}>

export type DiscoverState = {
  firstMovieYear: string,
  latestMovieYear: string,
  movies: MovieItem[],
  setFirstMovieYear: (data: string) => void,
  setLatestMovieYear: (data: string) => void,
  setMovies: (data: MovieItem[]) => void
}
