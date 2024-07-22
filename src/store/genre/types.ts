export type GenreItem = {
  id: number,
  name: string
}

export type GenreListResponse = {
  genres: GenreItem[]
}

export type GenreState = {
  movieGenres: GenreItem[],
  setMovieGenres: (data: GenreItem[]) => void
}
