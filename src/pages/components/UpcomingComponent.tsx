import { map } from "lodash-es"
import { MovieItem } from "@Modules"
import { formatDate } from "@Utilities"
import styles from "./scss/styles.module.scss"

type Props = {
  data: MovieItem[]
}

function UpcomingComponent(props: Props) {
  const { data } = props

  return (
    <div className={styles.upcomingComponent}>
      <p className={styles.title}>Upcoming Movies</p>
      <div className={styles.movies}>
        {map(data, (item, index) => (
          <div key={index} className={styles.movies__item}>
            <img src={item.backdrop_url} alt={`${item.title} Poster`} />
            <div className={styles.textWrapper}>
              <p>{item.title}</p>
              <p className={styles.date}>
                Release date: {formatDate(item.release_date)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UpcomingComponent
