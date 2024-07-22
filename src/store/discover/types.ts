import { SortBy } from "@Config"
import { MovieItem, Pagination } from "../movie/types"
import { GenreItem } from "../genre/types"

export type DiscoverMoviesPayload = Partial<{
  sort_by: SortBy | string,
  primary_release_year: string,
  primary_release_date_gte: string,
  primary_release_date_lte: string,
  release_date_gte: string,
  release_date_lte: string,
  with_genres: GenreItem[],
  page: number
}>

export type DiscoverState = {
  firstMovieYear: string,
  latestMovieYear: string,
  moviesPayload: DiscoverMoviesPayload,
  movies: MovieItem[],
  moviesPagination: Pagination,
  setFirstMovieYear: (data: string) => void,
  setLatestMovieYear: (data: string) => void,
  setMoviesPayload: (data: DiscoverMoviesPayload) => void,
  setMovies: (data: MovieItem[]) => void,
  setMoviesPagination: (data: Pagination) => void
}
