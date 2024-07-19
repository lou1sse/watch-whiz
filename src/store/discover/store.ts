import { create } from "zustand"
import { DiscoverState } from "./types"
import { MovieItem } from "../movie/types"

const useDiscoverStore = create<DiscoverState>((set) => ({
  firstMovieYear: "",
  latestMovieYear: "",
  movies: [] as MovieItem[],
  setFirstMovieYear: (firstMovieYear) => set({ firstMovieYear }),
  setLatestMovieYear: (latestMovieYear) => set({ latestMovieYear }),
  setMovies: (movies) => set({ movies })
}))

export default useDiscoverStore
