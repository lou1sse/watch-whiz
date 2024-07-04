import { ClickableDivComponent } from "@GlobalComponents"
import { MovieItem } from "@Store"
import { formatDate, useCommonMethods } from "@Utilities"
import { map } from "lodash-es"
import styles from "./scss/styles.module.scss"

type Props = {
  data: MovieItem[]
}

function UpcomingComponent(props: Props) {
  const { data } = props
  const { onClickMovieItem } = useCommonMethods()

  return (
    <div className={styles.upcomingComponent}>
      <p className={styles.title}>Upcoming Movies</p>
      <div className={styles.movies}>
        {map(data, (item) => (
          <ClickableDivComponent
            key={item.id}
            className={styles.movies__item}
            onClick={() => onClickMovieItem(item.id)}
          >
            <img src={item.backdrop_url} alt={`${item.title} Poster`} />
            <div className={styles.textWrapper}>
              <p>{item.title}</p>
              <p className={styles.date}>
                Release date: {formatDate(item.release_date)}
              </p>
            </div>
          </ClickableDivComponent>
        ))}
      </div>
    </div>
  )
}

export default UpcomingComponent
