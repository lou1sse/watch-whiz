import { useQuery } from "react-query"
import {
  getGenreList,
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming
} from "./requests"
import useStore from "./state"

function useMovies() {
  const {
    genreList,
    nowPlaying,
    popular,
    upcoming,
    topRated,
    setGenreList,
    setNowPlaying,
    setPopular,
    setUpcoming,
    setTopRated
  } = useStore()

  const {
    isLoading: isGenreListLoading,
    error: genreListError,
    refetch: genreListRequest
  } = useQuery("genre_list", getGenreList, {
    enabled: false,
    onSuccess: (data) => {
      setGenreList(data)
    }
  })

  const {
    isLoading: isNowPlayingLoading,
    error: nowPlayingError,
    refetch: nowPlayingRequest
  } = useQuery("now_playing", getNowPlaying, {
    enabled: false,
    onSuccess: (data) => {
      setNowPlaying(data)
    }
  })

  const {
    isLoading: isPopularLoading,
    error: popularError,
    refetch: popularRequest
  } = useQuery("popular", getPopular, {
    enabled: false,
    onSuccess: (data) => {
      setPopular(data)
    }
  })

  const {
    isLoading: isUpcomingLoading,
    error: upcomingError,
    refetch: upcomingRequest
  } = useQuery("upcoming", getUpcoming, {
    enabled: false,
    onSuccess: (data) => {
      setUpcoming(data)
    }
  })

  const {
    isLoading: isTopRatedLoading,
    error: topRatedError,
    refetch: topRatedRequest
  } = useQuery("top_rated", getTopRated, {
    enabled: false,
    onSuccess: (data) => {
      setTopRated(data)
    }
  })

  return {
    /* genre list */
    isGenreListLoading,
    genreList,
    genreListError,
    genreListRequest,

    /* now playing */
    isNowPlayingLoading,
    nowPlaying,
    nowPlayingError,
    nowPlayingRequest,

    /* popular */
    isPopularLoading,
    popularError,
    popular,
    popularRequest,

    /* upcoming */
    isUpcomingLoading,
    upcoming,
    upcomingError,
    upcomingRequest,

    /* top rated */
    isTopRatedLoading,
    topRated,
    topRatedError,
    topRatedRequest
  }
}

export default useMovies
