import { generateRequest } from "@APIService"
import {
  MovieCreditsResponse,
  MovieDetailsResponse,
  MoviesListResponse
} from "./types"

const PREFIX = "movie"

const ENDPOINTS = {
  NowPlaying: `${PREFIX}/now_playing`,
  Popular: `${PREFIX}/popular`,
  TopRated: `${PREFIX}/top_rated`,
  Upcoming: `${PREFIX}/upcoming`,
  Details: (id: string) => `${PREFIX}/${id}`,
  Credits: (id: string) => `${PREFIX}/${id}/credits`
}

function getNowPlaying() {
  return generateRequest<MoviesListResponse>({
    method: "get",
    endpoint: ENDPOINTS.NowPlaying
  })
}

function getPopular() {
  return generateRequest<MoviesListResponse>({
    method: "get",
    endpoint: ENDPOINTS.Popular,
    params: {
      page: 2
    }
  })
}

function getTopRated() {
  return generateRequest<MoviesListResponse>({
    method: "get",
    endpoint: ENDPOINTS.TopRated
  })
}

function getUpcoming() {
  return generateRequest<MoviesListResponse>({
    method: "get",
    endpoint: ENDPOINTS.Upcoming
  })
}

function getDetails(id: string) {
  return generateRequest<MovieDetailsResponse>({
    method: "get",
    endpoint: ENDPOINTS.Details(id)
  })
}

function getCredits(id: string) {
  return generateRequest<MovieCreditsResponse>({
    method: "get",
    endpoint: ENDPOINTS.Credits(id)
  })
}

export {
  getCredits,
  getDetails,
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming
}
