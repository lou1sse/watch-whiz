import { map } from "lodash-es"
import { API } from "@APIService"
import { getPosterURL } from "@Utilities"
import {
  GenreListResponse,
  NowPlayingResponse,
  PopularResponse,
  TopRatedResponse,
  UpcomingResponse
} from "./types"

async function getGenreList() {
  let data = null
  const endpoint = "genre/movie/list"

  try {
    const response = await API.request<GenreListResponse>({
      method: "get",
      endpoint
    })
    data = response.data
  } catch (err) {
    throw new Error(`Failed to get data from ${endpoint}.`)
  }

  return data.genres
}

async function getNowPlaying() {
  let data = null
  const endpoint = "movie/now_playing"

  try {
    const response = await API.request<NowPlayingResponse>({
      method: "get",
      endpoint
    })
    data = response.data
  } catch (error) {
    throw new Error(`Failed to get data from ${endpoint}.`)
  }

  const { results } = data
  const updatedResults = map(results, (item) => ({
    ...item,
    backdrop_url: getPosterURL(item.backdrop_path),
    poster_url: getPosterURL(item.poster_path)
  }))

  return updatedResults
}

async function getPopular() {
  let data = null
  const endpoint = "movie/popular"

  try {
    const response = await API.request<PopularResponse>({
      method: "get",
      endpoint,
      params: {
        page: 2
      }
    })
    data = response.data
  } catch (error) {
    throw new Error(`Failed to get data from ${endpoint}.`)
  }

  const { results } = data
  const slicedResults = results.slice(0, 6)
  const updatedResults = map(slicedResults, (item) => ({
    ...item,
    backdrop_url: getPosterURL(item.backdrop_path),
    poster_url: getPosterURL(item.poster_path)
  }))

  return updatedResults
}

async function getUpcoming() {
  let data = null
  const endpoint = "movie/upcoming"

  try {
    const response = await API.request<UpcomingResponse>({
      method: "get",
      endpoint
    })
    data = response.data
  } catch (error) {
    throw new Error(`Failed to get data from ${endpoint}.`)
  }

  const { results } = data
  const slicedResults = results.slice(0, 4)
  const updatedResults = map(slicedResults, (item) => ({
    ...item,
    backdrop_url: getPosterURL(item.backdrop_path),
    poster_url: getPosterURL(item.poster_path)
  }))

  return updatedResults
}

async function getTopRated() {
  let data = null
  const endpoint = "movie/top_rated"

  try {
    const response = await API.request<TopRatedResponse>({
      method: "get",
      endpoint
    })
    data = response.data
  } catch (error) {
    throw new Error(`Failed to get data from ${endpoint}.`)
  }

  const { results } = data
  const updatedResults = map(results, (item) => ({
    ...item,
    backdrop_url: getPosterURL(item.backdrop_path),
    poster_url: getPosterURL(item.poster_path)
  }))

  return updatedResults
}

export {
  getGenreList,
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming
}
