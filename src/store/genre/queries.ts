import { useQuery } from "react-query"
import useGenreStore from "./store"
import { getMovieGenres } from "./requests"

function useMovieGenres() {
  const { movieGenres, setMovieGenres } = useGenreStore((state) => ({
    movieGenres: state.movieGenres,
    setMovieGenres: state.setMovieGenres
  }))

  const { isLoading: isMovieGenresLoading, error: movieGenresError } =
    useQuery("movie_genres", getMovieGenres, {
      onSuccess: (data) => {
        setMovieGenres(data.genres)
      }
    })

  return {
    isMovieGenresLoading,
    movieGenres,
    movieGenresError
  }
}

export const GenreQueries = {
  useMovieGenres
}
