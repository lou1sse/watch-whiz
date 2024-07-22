import { create } from "zustand"
import { MovieItem, Pagination } from "../movie/types"
import { DiscoverMoviesPayload, DiscoverState } from "./types"

const useDiscoverStore = create<DiscoverState>((set) => ({
  firstMovieYear: "",
  latestMovieYear: "",
  moviesPayload: {} as DiscoverMoviesPayload,
  movies: [] as MovieItem[],
  moviesPagination: {} as Pagination,
  setFirstMovieYear: (firstMovieYear) => set({ firstMovieYear }),
  setLatestMovieYear: (latestMovieYear) => set({ latestMovieYear }),
  setMoviesPayload: (moviesPayload) => set({ moviesPayload }),
  setMovies: (movies) => set({ movies }),
  setMoviesPagination: (moviesPagination) => set({ moviesPagination })
}))

export default useDiscoverStore
