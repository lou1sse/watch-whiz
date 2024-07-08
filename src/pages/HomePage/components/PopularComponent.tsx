import { ClickableDivComponent } from "@GlobalComponents"
import { MovieItem } from "@Store"
import { useCommonMethods } from "@Utilities"
import { map } from "lodash-es"
import styles from "./scss/styles.module.scss"

type Props = {
  data: MovieItem[]
}

function PopularComponent(props: Props) {
  const { data } = props
  const { onClickMovieItem } = useCommonMethods()

  return (
    <div className={styles.popularComponent}>
      <p className={styles.title}>Popular Now</p>
      <div className={styles.movies}>
        {map(data, (item) => (
          <ClickableDivComponent
            key={item.id}
            className={styles.movies__item}
            onClick={() => onClickMovieItem(item.id)}
          >
            <img src={item.backdrop_url} alt={`${item.title} Poster`} />
            <p>{item.title}</p>
          </ClickableDivComponent>
        ))}
      </div>
    </div>
  )
}

export default PopularComponent
