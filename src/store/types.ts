export type GenreItem = {
  id: number,
  name: string
}

export type GenreListResponse = {
  genres: GenreItem[]
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
  spoken_languages: Array<{
    english_name: string,
    iso_639_1: string,
    name: string
  }>,
  status: string,
  tagline: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

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

export type MoviesState = {
  genreList: GenreItem[],
  nowPlaying: MovieItem[],
  popular: MovieItem[],
  upcoming: MovieItem[],
  topRated: MovieItem[],
  details: MovieDetailsResponse,
  setGenreList: (data: GenreItem[]) => void,
  setNowPlaying: (data: MovieItem[]) => void,
  setPopular: (data: MovieItem[]) => void,
  setUpcoming: (data: MovieItem[]) => void,
  setTopRated: (data: MovieItem[]) => void,
  setDetails: (data: MovieDetailsResponse) => void
}
