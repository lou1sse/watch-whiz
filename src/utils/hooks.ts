import { isEmpty } from "lodash-es"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function useRequestOnEmpty<T>(data: T[], request: () => void) {
  useEffect(() => {
    if (isEmpty(data)) {
      request()
    }
  }, [data, request])
}

function useCommonMethods() {
  const navigate = useNavigate()

  const onClickMovieItem = (id: number) => {
    navigate(`/movie/${id}`)
  }

  return {
    onClickMovieItem
  }
}

export { useRequestOnEmpty, useCommonMethods }
