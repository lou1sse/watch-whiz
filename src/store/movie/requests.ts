import { generateRequest } from "@APIService"
import {
  AlternativeTitlesResponse,
  MovieCreditsResponse,
  MovieDetailsResponse,
  MovieListResponse
} from "./types"

const PREFIX = "movie"

const ENDPOINTS = {
  NowPlaying: `${PREFIX}/now_playing`,
  Popular: `${PREFIX}/popular`,
  TopRated: `${PREFIX}/top_rated`,
  Upcoming: `${PREFIX}/upcoming`,
  Details: (id: string) => `${PREFIX}/${id}`,
  Credits: (id: string) => `${PREFIX}/${id}/credits`,
  AlternativeTitles: (id: string) => `${PREFIX}/${id}/alternative_titles`,
  Similar: (id: string) => `${PREFIX}/${id}/similar`
}

const getNowPlaying = () =>
  generateRequest<MovieListResponse>({
    method: "get",
    endpoint: ENDPOINTS.NowPlaying
  })

const getPopular = () =>
  generateRequest<MovieListResponse>({
    method: "get",
    endpoint: ENDPOINTS.Popular,
    params: { page: 2 }
  })

const getTopRated = () =>
  generateRequest<MovieListResponse>({
    method: "get",
    endpoint: ENDPOINTS.TopRated
  })

const getUpcoming = () =>
  generateRequest<MovieListResponse>({
    method: "get",
    endpoint: ENDPOINTS.Upcoming
  })

const getDetails = (id: string) =>
  generateRequest<MovieDetailsResponse>({
    method: "get",
    endpoint: ENDPOINTS.Details(id)
  })

const getCredits = (id: string) =>
  generateRequest<MovieCreditsResponse>({
    method: "get",
    endpoint: ENDPOINTS.Credits(id)
  })

const getAlternativeTitles = (id: string) =>
  generateRequest<AlternativeTitlesResponse>({
    method: "get",
    endpoint: ENDPOINTS.AlternativeTitles(id)
  })

const getSimilar = (id: string) =>
  generateRequest<MovieListResponse>({
    method: "get",
    endpoint: ENDPOINTS.Similar(id)
  })

export {
  getCredits,
  getDetails,
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming,
  getAlternativeTitles,
  getSimilar
}
