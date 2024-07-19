import { create } from "zustand"
import { GenreItem, GenreState } from "./types"

const useGenreStore = create<GenreState>((set) => ({
  movieGenres: [] as GenreItem[],
  setMovieGenres: (movieGenres) => set({ movieGenres })
}))

export default useGenreStore
