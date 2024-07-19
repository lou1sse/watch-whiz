import axios from "axios"
import { capitalize } from "lodash-es"
import { API } from "./service"
import { APIRequestPayload, FailResponse } from "./types"

function isFailResponse(data: unknown): data is FailResponse {
  const failResponse = data as FailResponse
  return failResponse?.success === false || !!failResponse?.status_message
}

async function generateRequest<T>(payload: APIRequestPayload): Promise<T> {
  try {
    const response = await API.request<T>(payload)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data
    }

    throw new Error(
      `${capitalize(payload.method)} request failed on ${payload.endpoint}`
    )
  }
}

export { isFailResponse, generateRequest }
