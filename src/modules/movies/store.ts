import { create } from "zustand"
import { MoviesState } from "./types"

const useMoviesStore = create<MoviesState>((set) => ({
  genreList: [],
  nowPlaying: [],
  popular: [],
  upcoming: [],
  topRated: [],

  /* actions */
  setGenreList: (genreList) => set({ genreList }),
  setNowPlaying: (nowPlaying) => set({ nowPlaying }),
  setPopular: (popular) => set({ popular }),
  setUpcoming: (upcoming) => set({ upcoming }),
  setTopRated: (topRated) => set({ topRated })
}))

export default useMoviesStore
