import { MovieItem } from "@Store"
import { createContext, useContext } from "react"

const MovieListContext = createContext<MovieItem[]>([])

export function useMovieListContext() {
  const context = useContext(MovieListContext)

  if (!context) {
    throw new Error(
      "Please use MovieListComponent.* components as children to MovieListComponent."
    )
  }

  return context
}

export default MovieListContext
