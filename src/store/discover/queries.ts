import { formatDate, useCommonMethods } from "@Utilities"
import { useQueries, useQuery } from "react-query"
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

function useMovies() {
  const { updateResultsWithPosterUrls } = useCommonMethods()
  const {
    moviesPayload,
    movies,
    moviesPagination,
    setMovies,
    setMoviesPagination
  } = useDiscoverStore((state) => ({
    moviesPayload: state.moviesPayload,
    movies: state.movies,
    moviesPagination: state.moviesPagination,
    setMovies: state.setMovies,
    setMoviesPagination: state.setMoviesPagination
  }))

  const {
    isLoading: isMoviesLoading,
    error: moviesError,
    refetch: discoverMoviesRequest
  } = useQuery(
    ["discover_movies", moviesPayload],
    () => getMovies(moviesPayload),
    {
      onSuccess: (data) => {
        const { results, page, total_pages, total_results } = data
        const updatedResults = updateResultsWithPosterUrls(results)
        setMoviesPagination({ page, total_pages, total_results })
        setMovies(updatedResults)
      }
    }
  )

  return {
    isMoviesLoading,
    movies,
    moviesPagination,
    moviesError,
    discoverMoviesRequest
  }
}

export const DiscoverQueries = {
  useFirstAndLatestMovieYear,
  useMovies
}
