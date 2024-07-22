import { generateRequest } from "@APIService"
import { identity, map, pickBy } from "lodash-es"
import { MovieListResponse } from "../movie/types"
import { DiscoverMoviesPayload } from "./types"

const PREFIX = "discover"

const ENDPOINTS = {
  Movies: `${PREFIX}/movie`
}

const getMovies = (payload?: DiscoverMoviesPayload) => {
  const transformedPayload = {
    ...payload,
    sort_by:
      typeof payload?.sort_by === "string"
        ? payload.sort_by
        : payload?.sort_by?.payload,
    with_genres: map(payload?.with_genres, "id").join(","),
    "primary_release_date.gte": payload?.primary_release_date_gte,
    "primary_release_date.lte": payload?.primary_release_date_lte,
    "release_date.gte": payload?.release_date_gte,
    "release_date.lte": payload?.release_date_lte
  }

  delete transformedPayload.primary_release_date_gte
  delete transformedPayload.primary_release_date_lte
  delete transformedPayload.release_date_gte
  delete transformedPayload.release_date_lte

  const params = pickBy(transformedPayload, identity)

  return generateRequest<MovieListResponse>({
    method: "get",
    endpoint: ENDPOINTS.Movies,
    params
  })
}

export { getMovies }
