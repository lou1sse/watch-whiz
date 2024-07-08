import { ClickableDivComponent } from "@GlobalComponents"
import { MovieItem } from "@Store"
import { formatDate, useCommonMethods } from "@Utilities"
import { map } from "lodash-es"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import styles from "./scss/styles.module.scss"

type Props = {
  data: MovieItem[]
}

function TopRatedComponent(props: Props) {
  const { data } = props
  const { onClickMovieItem } = useCommonMethods()

  return (
    <div className={styles.topRatedComponent}>
      <p className={styles.title}>Top Rated</p>
      <Swiper
        breakpoints={{
          768: { slidesPerView: 5, spaceBetween: 16 },
          700: { slidesPerView: 3, spaceBetween: 16 },
          0: { slidesPerView: 2, spaceBetween: 8 }
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
              <img src={item.poster_url} alt={`${item.title} Poster`} />
              <div className={styles.textWrapper}>
                <p>{item.title}</p>
                <p className={styles.date}>
                  {formatDate(item.release_date, "YYYY")}
                </p>
              </div>
            </ClickableDivComponent>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TopRatedComponent
