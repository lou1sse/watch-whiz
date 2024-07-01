import { AxiosRequestConfig, AxiosResponse, Method } from "axios"

export type APIRequestPayload = {
  method: Method,
  endpoint: string,
  params?: Record<string, unknown>,
  config?: AxiosRequestConfig,
  customBaseURL?: string,
  customHeaders?: Record<string, unknown>
}

export type FailResponse = {
  success: false,
  message: string | null,
  data?: unknown,
  error?: boolean
}

export type ErrorResponse = FailResponse | null | undefined

export type APIResponse<T, U = ErrorResponse> = Promise<
  AxiosResponse<T, U>
>
