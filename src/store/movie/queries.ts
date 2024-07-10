import { getPosterURL, useCommonMethods } from "@Utilities"
import { find, isEmpty } from "lodash-es"
import { useQueries, useQuery } from "react-query"
import { useParams } from "react-router-dom"
import {
  getAlternativeTitles,
  getCredits,
  getDetails,
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming
} from "./requests"
import useMovieStore from "./store"
import {
  AlternativeTitlesResponse,
  CrewItem,
  MovieCreditsResponse,
  MovieDetailsResponse
} from "./types"

function useNowPlaying() {
  const { updateResultsWithPosterUrls } = useCommonMethods()
  const { nowPlaying, setNowPlaying } = useMovieStore((state) => ({
    nowPlaying: state.nowPlaying,
    setNowPlaying: state.setNowPlaying
  }))

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
  const { updateResultsWithPosterUrls } = useCommonMethods()
  const { popular, setPopular } = useMovieStore((state) => ({
    popular: state.popular,
    setPopular: state.setPopular
  }))

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
  const { updateResultsWithPosterUrls } = useCommonMethods()
  const { topRated, setTopRated } = useMovieStore((state) => ({
    topRated: state.topRated,
    setTopRated: state.setTopRated
  }))

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
  const { updateResultsWithPosterUrls } = useCommonMethods()
  const { upcoming, setUpcoming } = useMovieStore((state) => ({
    upcoming: state.upcoming,
    setUpcoming: state.setUpcoming
  }))

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
  const { movie_id: movieId } = useParams()
  const {
    details,
    credits,
    alternativeTitles,
    setDetails,
    setCredits,
    setAlternativeTitles
  } = useMovieStore((state) => ({
    details: state.details,
    credits: state.credits,
    alternativeTitles: state.alternativeTitles,
    setDetails: state.setDetails,
    setCredits: state.setCredits,
    setAlternativeTitles: state.setAlternativeTitles
  }))

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
      enabled: !!movieId && isEmpty(details.director),
      onSuccess: (data: MovieCreditsResponse) => {
        const director =
          find(data.crew, { job: "Director" }) || ({} as CrewItem)
        setDetails({ ...details, director })
        setCredits(data)
      }
    },
    {
      queryKey: ["alternative_titles", movieId],
      queryFn: () => getAlternativeTitles(movieId as string),
      enabled: !!movieId,
      refetchOnMount: true,
      onSuccess: (data: AlternativeTitlesResponse) => {
        setAlternativeTitles(data.titles)
      }
    }
  ])

  const { isLoading: isDetailsLoading, error: detailsError } = queries[0]
  const { isLoading: isCreditsLoading, error: creditsError } = queries[1]
  const {
    isLoading: isAlternativeTitlesLoading,
    error: alternativeTitlesError
  } = queries[2]

  return {
    isDetailsLoading,
    details,
    detailsError,
    isCreditsLoading,
    credits,
    creditsError,
    isAlternativeTitlesLoading,
    alternativeTitles,
    alternativeTitlesError
  }
}

export const MovieQueries = {
  useNowPlaying,
  usePopular,
  useTopRated,
  useUpcoming,
  useDetails
}
