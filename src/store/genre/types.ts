export type GenreItem = {
  id: number,
  name: string,
  checked: boolean
}

export type GenreListResponse = {
  genres: GenreItem[]
}

export type GenreState = {
  movieGenres: GenreItem[],
  setMovieGenres: (data: GenreItem[]) => void
}
