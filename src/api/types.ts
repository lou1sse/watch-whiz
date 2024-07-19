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
  status_code: number,
  status_message: string
}

export type ErrorResponse = FailResponse | null | undefined

export type APIResponse<T, U = ErrorResponse> = Promise<
  AxiosResponse<T, U>
>
