import { MovieItem } from "@Store"
import { map } from "lodash-es"
import { getPosterURL } from "./image"

function useCommonMethods() {
  const updateResultsWithPosterUrls = (
    data: MovieItem[],
    displayLength?: number
  ): MovieItem[] => {
    const slicedData = data.slice(0, displayLength)
    const finalData = displayLength ? slicedData : data

    const updatedData = map(finalData, (item) => ({
      ...item,
      backdrop_url: getPosterURL(item.backdrop_path),
      poster_url: getPosterURL(item.poster_path)
    }))

    return updatedData
  }

  return { updateResultsWithPosterUrls }
}

export { useCommonMethods }
