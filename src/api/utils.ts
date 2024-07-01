import { FailResponse } from "./types"

function isFailResponse(data: unknown): data is FailResponse {
  const failResponse = data as FailResponse

  return failResponse?.success === false || !!failResponse?.error
}

export { isFailResponse }
