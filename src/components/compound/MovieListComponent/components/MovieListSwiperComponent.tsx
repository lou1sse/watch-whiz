import { MovieItem } from "@Store"
import { map } from "lodash-es"
import { ReactNode } from "react"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react"
import { useMovieListContext } from "../MovieListContext"
import MovieListItemComponent from "./MovieListItemComponent"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/scrollbar"

type Props = {
  children?: (props: { movie: MovieItem }) => ReactNode
} & Pick<SwiperProps, "breakpoints">

const DEFAULT_BREAKPOINTS = {
  950: { slidesPerView: 5, spaceBetween: 12 },
  750: { slidesPerView: 4, spaceBetween: 12 },
  600: { slidesPerView: 3, spaceBetween: 12 },
  0: { slidesPerView: 2, spaceBetween: 12 }
}

function MovieListSwiperComponent(props: Props) {
  const data = useMovieListContext()
  const { children, breakpoints = DEFAULT_BREAKPOINTS } = props

  const renderChildren = () =>
    children &&
    map(data, (item) => (
      <SwiperSlide key={item.id}>{children({ movie: item })}</SwiperSlide>
    ))

  const renderDefaultChildren = () =>
    map(data, (item) => (
      <SwiperSlide key={item.id}>
        <MovieListItemComponent data={item} />
      </SwiperSlide>
    ))

  return (
    <Swiper
      autoplay={{ delay: 3000 }}
      modules={[Autoplay]}
      breakpoints={breakpoints}
    >
      {renderChildren() || renderDefaultChildren()}
    </Swiper>
  )
}

export default MovieListSwiperComponent
