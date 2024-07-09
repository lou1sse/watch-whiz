import { getPosterURL, useCommonMethods } from "@Utilities"
import { find } from "lodash-es"
import { useQueries, useQuery } from "react-query"
import { useParams } from "react-router-dom"
import {
  getCredits,
  getDetails,
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming
} from "./requests"
import useMovieStore from "./store"
import {
  CrewItem,
  MovieCreditsResponse,
  MovieDetailsResponse
} from "./types"

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
  const { details, credits, setDetails, setCredits } = useMovieStore()
  const { movie_id: movieId } = useParams()

  const queries = useQueries([
    {
      queryKey: ["details", movieId],
      queryFn: () => getDetails(movieId as string),
      enabled: !!movieId,
      refetchOnMount: true,
      onSuccess: (data: MovieDetailsResponse) => {
        const updatedData = {
          ...data,
          backdrop_url: getPosterURL(data.backdrop_path),
          poster_url: getPosterURL(data.poster_path)
        }
        setDetails(updatedData)
      }
    },
    {
      queryKey: ["credits", movieId],
      queryFn: () => getCredits(movieId as string),
      enabled: !!movieId,
      refetchOnMount: true,
      onSuccess: (data: MovieCreditsResponse) => {
        const director =
          find(data.crew, { job: "Director" }) || ({} as CrewItem)
        setDetails({ ...details, director })
        setCredits(data)
      }
    }
  ])

  const { isLoading: isDetailsLoading, error: detailsError } = queries[0]
  const { isLoading: isCreditsLoading, error: creditsError } = queries[1]

  return {
    isDetailsLoading,
    details,
    detailsError,
    isCreditsLoading,
    credits,
    creditsError
  }
}

export const MovieQueries = {
  useNowPlaying,
  usePopular,
  useTopRated,
  useUpcoming,
  useDetails
}
