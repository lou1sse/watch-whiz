import axios, { AxiosInstance } from "axios"
import { API_KEY, API_URL, DEFAULT_HEADERS } from "@Config"
import { APIRequestPayload, APIResponse } from "./types"

function createClient(
  baseURL: string,
  headers: Record<string, unknown>
): AxiosInstance {
  return axios.create({
    baseURL,
    timeout: 1000,
    headers
  })
}

function request<T>(payload: APIRequestPayload): APIResponse<T> {
  const {
    method,
    endpoint,
    params,
    config,
    customBaseURL,
    customHeaders
  } = payload
  const baseURL = customBaseURL || API_URL
  const headers = customHeaders || DEFAULT_HEADERS
  const client = createClient(baseURL, headers)
  const finalPayload = {
    url: endpoint,
    method,
    params: {
      api_key: API_KEY,
      ...(params || {})
    },
    ...(config || {})
  }

  return client.request<T>(finalPayload)
}

export const API = {
  request
}
