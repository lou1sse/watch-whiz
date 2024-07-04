import { getPosterURL, useCommonMethods } from "@Utilities"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import {
  getDetails,
  getGenreList,
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming
} from "./requests"
import useMovieStore from "./state"
import { MovieDetailsResponse } from "./types"

function useGenre() {
  const { genreList, setGenreList } = useMovieStore()

  const { isLoading: isGenreListLoading, error: genreListError } =
    useQuery("genre_list", getGenreList, {
      onSuccess: (data) => {
        setGenreList(data)
      }
    })

  return {
    isGenreListLoading,
    genreList,
    genreListError
  }
}

function useNowPlaying() {
  const { nowPlaying, setNowPlaying } = useMovieStore()
  const { updateResultsWithPosterUrls } = useCommonMethods()

  const { isLoading: isNowPlayingLoading, error: nowPlayingError } =
    useQuery("now_playing", getNowPlaying, {
      onSuccess: (data) => {
        const updatedResults = updateResultsWithPosterUrls(data.results)
        setNowPlaying(updatedResults)
      }
    })

  return {
    isNowPlayingLoading,
    nowPlaying,
    nowPlayingError
  }
}

function usePopular() {
  const { popular, setPopular } = useMovieStore()
  const { updateResultsWithPosterUrls } = useCommonMethods()

  const { isLoading: isPopularLoading, error: popularError } = useQuery(
    "popular",
    getPopular,
    {
      onSuccess: (data) => {
        const updatedResults = updateResultsWithPosterUrls(data.results, 6)
        setPopular(updatedResults)
      }
    }
  )

  return {
    isPopularLoading,
    popular,
    popularError
  }
}

function useTopRated() {
  const { topRated, setTopRated } = useMovieStore()
  const { updateResultsWithPosterUrls } = useCommonMethods()

  const { isLoading: isTopRatedLoading, error: topRatedError } = useQuery(
    "top_rated",
    getTopRated,
    {
      onSuccess: (data) => {
        const updatedResults = updateResultsWithPosterUrls(data.results)
        setTopRated(updatedResults)
      }
    }
  )

  return {
    isTopRatedLoading,
    topRated,
    topRatedError
  }
}

function useUpcoming() {
  const { upcoming, setUpcoming } = useMovieStore()
  const { updateResultsWithPosterUrls } = useCommonMethods()

  const { isLoading: isUpcomingLoading, error: upcomingError } = useQuery(
    "upcoming",
    getUpcoming,
    {
      onSuccess: (data) => {
        const updatedResults = updateResultsWithPosterUrls(data.results, 4)
        setUpcoming(updatedResults)
      }
    }
  )

  return {
    isUpcomingLoading,
    upcoming,
    upcomingError
  }
}

function useDetails() {
  const { details, setDetails } = useMovieStore()
  const { movie_id: movieId } = useParams()

  const { isLoading: isDetailsLoading, error: detailsError } = useQuery(
    ["details", movieId],
    () => getDetails(movieId),
    {
      enabled: !!movieId,
      refetchOnMount: true,
      onSuccess: (data) => {
        const updatedData: MovieDetailsResponse = {
          ...data,
          backdrop_url: getPosterURL(data.backdrop_path),
          poster_url: getPosterURL(data.poster_path)
        }
        setDetails(updatedData)
      }
    }
  )

  return {
    isDetailsLoading,
    details,
    detailsError
  }
}

export const MovieQueries = {
  useGenre,
  useNowPlaying,
  usePopular,
  useTopRated,
  useUpcoming,
  useDetails
}
