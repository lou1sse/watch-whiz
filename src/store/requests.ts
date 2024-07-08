import { API } from "@APIService"
import {
  GenreListResponse,
  LanguageItem,
  MovieCreditsResponse,
  MovieDetailsResponse,
  MoviesListResponse
} from "./types"

async function getGenreList() {
  const endpoint = "genre/movie/list"

  try {
    const response = await API.request<GenreListResponse>({
      method: "get",
      endpoint
    })
    const { data } = response
    return data.genres
  } catch (error) {
    throw new Error(`Failed to get data from ${endpoint}.`)
  }
}

async function getNowPlaying() {
  const endpoint = "movie/now_playing"

  try {
    const response = await API.request<MoviesListResponse>({
      method: "get",
      endpoint
    })
    return response.data
  } catch (error) {
    throw new Error(`Failed to get data from ${endpoint}.`)
  }
}

async function getPopular() {
  const endpoint = "movie/popular"

  try {
    const response = await API.request<MoviesListResponse>({
      method: "get",
      endpoint,
      params: {
        page: 2
      }
    })
    return response.data
  } catch (error) {
    throw new Error(`Failed to get data from ${endpoint}.`)
  }
}

async function getTopRated() {
  const endpoint = "movie/top_rated"

  try {
    const response = await API.request<MoviesListResponse>({
      method: "get",
      endpoint
    })
    return response.data
  } catch (error) {
    throw new Error(`Failed to get data from ${endpoint}.`)
  }
}

async function getUpcoming() {
  const endpoint = "movie/upcoming"

  try {
    const response = await API.request<MoviesListResponse>({
      method: "get",
      endpoint
    })
    return response.data
  } catch (error) {
    throw new Error(`Failed to get data from ${endpoint}.`)
  }
}

async function getDetails(id: string | undefined) {
  const endpoint = `movie/${id}`

  try {
    const response = await API.request<MovieDetailsResponse>({
      method: "get",
      endpoint
    })
    return response.data
  } catch (error) {
    throw new Error(`Failed to get data from ${endpoint}.`)
  }
}

async function getCredits(id: string | undefined) {
  const endpoint = `movie/${id}/credits`

  try {
    const response = await API.request<MovieCreditsResponse>({
      method: "get",
      endpoint
    })
    return response.data
  } catch (error) {
    throw new Error(`Failed to get data from ${endpoint}.`)
  }
}

async function getLanguages() {
  const endpoint = "configuration/languages"

  try {
    const response = await API.request<LanguageItem[]>({
      method: "get",
      endpoint
    })
    return response.data
  } catch (error) {
    throw new Error(`Failed to get data from ${endpoint}.`)
  }
}

export {
  getCredits,
  getDetails,
  getGenreList,
  getLanguages,
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming
}
