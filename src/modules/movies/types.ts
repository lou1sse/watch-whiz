export type Pagination = {
  page: number,
  total_pages: number,
  total_results: number
}

export type GenreListItem = {
  id: number,
  name: string
}

export type GenreListResponse = {
  genres: GenreListItem[]
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

export type NowPlayingResponse = Pagination & {
  dates: {
    maximum: string,
    minimum: string
  },
  results: MovieItem[]
}

export type PopularResponse = Pagination & {
  results: MovieItem[]
}

export type UpcomingResponse = Pagination & {
  results: MovieItem[]
}

export type TopRatedResponse = Pagination & {
  results: MovieItem[]
}

export type MoviesState = {
  genreList: GenreListItem[],
  nowPlaying: MovieItem[],
  popular: MovieItem[],
  upcoming: MovieItem[],
  topRated: MovieItem[],
  setGenreList: (data: GenreListItem[]) => void,
  setNowPlaying: (data: MovieItem[]) => void,
  setPopular: (data: MovieItem[]) => void,
  setUpcoming: (data: MovieItem[]) => void,
  setTopRated: (data: MovieItem[]) => void
}
