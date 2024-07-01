import { map } from "lodash-es"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { MovieItem } from "@Modules"
import { formatDate } from "@Utilities"
import styles from "./scss/styles.module.scss"

type Props = {
  data: MovieItem[]
}

function TopRatedComponent(props: Props) {
  const { data } = props

  return (
    <div className={styles.topRatedComponent}>
      <p className={styles.title}>Top Rated</p>
      <Swiper
        breakpoints={{
          768: {
            slidesPerView: 5,
            spaceBetween: 16
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 16
          },
          0: {
            slidesPerView: 2,
            spaceBetween: 8
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
              <img src={item.poster_url} alt={`${item.title} Poster`} />
              <div className={styles.textWrapper}>
                <p>{item.title}</p>
                <p className={styles.date}>
                  {formatDate(item.release_date, "YYYY")}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TopRatedComponent
