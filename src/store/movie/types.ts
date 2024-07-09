import { GenreItem } from "store/genre"
import { LanguageItem } from "../configuration"

export type Pagination = {
  page: number,
  total_pages: number,
  total_results: number
}

export type MovieItem = {
  adult: boolean,
  backdrop_path: string,
  backdrop_url: string,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  poster_url: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

export type MoviesListResponse = Pagination & {
  dates?: {
    maximum: string,
    minimum: string
  },
  results: MovieItem[]
}

export type MovieDetailsResponse = {
  adult: boolean,
  backdrop_path: string,
  backdrop_url: string,
  belongs_to_collection: string | null,
  budget: number,
  genres: GenreItem[],
  homepage: string,
  id: number,
  imdb_id: string,
  origin_country: string[],
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  poster_url: string,
  production_companies: Array<{
    id: number,
    logo_path: string | null,
    name: string,
    origin_country: string
  }>,
  production_countries: Array<{
    iso_3166_1: string,
    name: string
  }>,
  release_date: string,
  revenue: number,
  runtime: number,
  spoken_languages: LanguageItem[],
  status: string,
  tagline: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
  director: CrewItem
}

export type CastItem = {
  adult: boolean,
  gender: number,
  id: number,
  known_for_department: string,
  name: string,
  original_name: string,
  popularity: number,
  profile_path?: string,
  cast_id: number,
  character: string,
  credit_id: string,
  order: number
}

export type CrewItem = {
  adult: boolean,
  gender: number,
  id: number,
  known_for_department: string,
  name: string,
  original_name: string,
  popularity: number,
  profile_path?: string,
  credit_id: string,
  department: string,
  job: string
}

export type MovieCreditsResponse = {
  id: number,
  cast: CastItem[],
  crew: CrewItem[]
}

export type MoviesState = {
  nowPlaying: MovieItem[],
  popular: MovieItem[],
  upcoming: MovieItem[],
  topRated: MovieItem[],
  details: MovieDetailsResponse,
  credits: MovieCreditsResponse,
  setNowPlaying: (data: MovieItem[]) => void,
  setPopular: (data: MovieItem[]) => void,
  setUpcoming: (data: MovieItem[]) => void,
  setTopRated: (data: MovieItem[]) => void,
  setDetails: (data: MovieDetailsResponse) => void,
  setCredits: (data: MovieCreditsResponse) => void
}
