import { MovieItem } from "@Store"
import { useNavigate } from "react-router-dom"
import { map } from "lodash-es"
import { getPosterURL } from "./image"

function useCommonMethods() {
  const navigate = useNavigate()

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

  const onClickMovieItem = (id: number) => {
    navigate(`/movie/${id}`)
  }

  return {
    updateResultsWithPosterUrls,
    onClickMovieItem
  }
}

export { useCommonMethods }
