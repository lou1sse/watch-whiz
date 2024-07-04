import { ClickableDivComponent } from "@GlobalComponents"
import { MovieItem } from "@Store"
import { useCommonMethods } from "@Utilities"
import { map } from "lodash-es"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import styles from "./scss/styles.module.scss"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/scrollbar"

type Props = {
  data: MovieItem[]
}

function NowPlayingComponent(props: Props) {
  const { data } = props
  const { onClickMovieItem } = useCommonMethods()

  return (
    <div className={styles.nowPlayingComponent}>
      <p className={styles.title}>Now Playing in Cinemas</p>
      <Swiper
        breakpoints={{
          700: { slidesPerView: 2, spaceBetween: 16 },
          600: { slidesPerView: 2, spaceBetween: 8 },
          0: { slidesPerView: 1 }
        }}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
        className={styles.swiper}
      >
        {map(data, (item) => (
          <SwiperSlide key={item.id}>
            <ClickableDivComponent
              className={styles.swiper__item}
              onClick={() => onClickMovieItem(item.id)}
            >
              <img src={item.backdrop_url} alt={`${item.title} Poster`} />
              <div className={styles.textWrapper}>
                <p>{item.title}</p>
              </div>
            </ClickableDivComponent>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default NowPlayingComponent
