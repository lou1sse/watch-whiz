import { create } from "zustand"
import {
  GenreItem,
  MovieDetailsResponse,
  MovieItem,
  MoviesState
} from "./types"

const useMovieStore = create<MoviesState>((set) => ({
  genreList: [] as GenreItem[],
  nowPlaying: [] as MovieItem[],
  popular: [] as MovieItem[],
  upcoming: [] as MovieItem[],
  topRated: [] as MovieItem[],
  details: {} as MovieDetailsResponse,

  /* actions */
  setGenreList: (genreList) => set({ genreList }),
  setNowPlaying: (nowPlaying) => set({ nowPlaying }),
  setPopular: (popular) => set({ popular }),
  setUpcoming: (upcoming) => set({ upcoming }),
  setTopRated: (topRated) => set({ topRated }),
  setDetails: (details) => set({ details })
}))

export default useMovieStore
