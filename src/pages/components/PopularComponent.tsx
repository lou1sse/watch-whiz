import { map } from "lodash-es"
import { MovieItem } from "@Modules"
import styles from "./scss/styles.module.scss"

type Props = {
  data: MovieItem[]
}

function PopularComponent(props: Props) {
  const { data } = props

  return (
    <div className={styles.popularComponent}>
      <p className={styles.title}>Popular Now</p>
      <div className={styles.movies}>
        {map(data, (item, index) => (
          <div key={index} className={styles.movies__item}>
            <img src={item.backdrop_url} alt={`${item.title} Poster`} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PopularComponent
