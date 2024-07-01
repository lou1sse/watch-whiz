import { map } from "lodash-es"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { MovieItem } from "@Modules"
import styles from "./scss/styles.module.scss"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/scrollbar"

type Props = {
  data: MovieItem[]
}

function NowPlayingComponent(props: Props) {
  const { data } = props

  return (
    <div className={styles.nowPlayingComponent}>
      <p className={styles.title}>Now Playing in Cinemas</p>
      <Swiper
        breakpoints={{
          700: {
            slidesPerView: 2,
            spaceBetween: 16
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 8
          },
          0: {
            slidesPerView: 1
          }
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        modules={[Autoplay]}
        className={styles.swiper}
      >
        {map(data, (item) => (
          <SwiperSlide key={item.id}>
            <div className={styles.swiper__item}>
              <img src={item.backdrop_url} alt={`${item.title} Poster`} />
              <div className={styles.textWrapper}>
                <p>{item.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default NowPlayingComponent
