import { create } from "zustand"
import {
  MovieCreditsResponse,
  MovieDetailsResponse,
  MovieItem,
  MoviesState,
  TitleItem
} from "./types"

const useMovieStore = create<MoviesState>((set) => ({
  nowPlaying: [] as MovieItem[],
  popular: [] as MovieItem[],
  upcoming: [] as MovieItem[],
  topRated: [] as MovieItem[],
  details: {} as MovieDetailsResponse,
  credits: {} as MovieCreditsResponse,
  alternativeTitles: [] as TitleItem[],
  similar: [] as MovieItem[],

  /* actions */
  setNowPlaying: (nowPlaying) => set({ nowPlaying }),
  setPopular: (popular) => set({ popular }),
  setUpcoming: (upcoming) => set({ upcoming }),
  setTopRated: (topRated) => set({ topRated }),
  setDetails: (details) => set({ details }),
  setCredits: (credits) => set({ credits }),
  setAlternativeTitles: (alternativeTitles) => set({ alternativeTitles }),
  setSimilar: (similar) => set({ similar })
}))

export default useMovieStore
