import { create } from "zustand"
import {
  MovieCreditsResponse,
  MovieDetailsResponse,
  MovieItem,
  MoviesState
} from "./types"

const useMovieStore = create<MoviesState>((set) => ({
  nowPlaying: [] as MovieItem[],
  popular: [] as MovieItem[],
  upcoming: [] as MovieItem[],
  topRated: [] as MovieItem[],
  details: {} as MovieDetailsResponse,
  credits: {} as MovieCreditsResponse,

  /* actions */
  setNowPlaying: (nowPlaying) => set({ nowPlaying }),
  setPopular: (popular) => set({ popular }),
  setUpcoming: (upcoming) => set({ upcoming }),
  setTopRated: (topRated) => set({ topRated }),
  setDetails: (details) => set({ details }),
  setCredits: (credits) => set({ credits })
}))

export default useMovieStore
