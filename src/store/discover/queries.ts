import { formatDate } from "@Utilities"
import { useQueries } from "react-query"
import { MovieListResponse } from "../movie/types"
import { getMovies } from "./requests"
import useDiscoverStore from "./store"

function useFirstAndLatestMovieYear() {
  const {
    firstMovieYear,
    latestMovieYear,
    setFirstMovieYear,
    setLatestMovieYear
  } = useDiscoverStore((state) => ({
    firstMovieYear: state.firstMovieYear,
    latestMovieYear: state.latestMovieYear,
    setFirstMovieYear: state.setFirstMovieYear,
    setLatestMovieYear: state.setLatestMovieYear
  }))

  const queries = useQueries([
    {
      queryKey: ["first_movie_year"],
      queryFn: () => getMovies({ sort_by: "release_date.asc" }),
      onSuccess: (data: MovieListResponse) => {
        const firstMovie = data.results[0]
        setFirstMovieYear(formatDate(firstMovie.release_date, "YYYY"))
      }
    },
    {
      queryKey: ["latest_movie_year"],
      queryFn: () => getMovies({ sort_by: "release_date.desc" }),
      onSuccess: (data: MovieListResponse) => {
        const latestMovie = data.results[0]
        setLatestMovieYear(formatDate(latestMovie.release_date, "YYYY"))
      }
    }
  ])

  const {
    isLoading: isFirstMovieYearLoading,
    error: firstMovieYearError
  } = queries[0]
  const { isLoading: isLatesMovieYearLoading, error: latestMovieError } =
    queries[1]

  return {
    isFirstMovieYearLoading,
    firstMovieYear,
    firstMovieYearError,
    isLatesMovieYearLoading,
    latestMovieYear,
    latestMovieError
  }
}

export const DiscoverQueries = {
  useFirstAndLatestMovieYear
}
