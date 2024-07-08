import { GenreItem } from "@Store"
import { map } from "lodash-es"
import styles from "./scss/styles.module.scss"

type Props = {
  data: GenreItem[]
}

function GenreListComponent(props: Props) {
  const { data } = props

  return (
    <div className={styles.genreListComponent}>
      {map(data, (item) => (
        <p key={item.id} className={styles.genreListComponent__item}>
          {item.name}
        </p>
      ))}
    </div>
  )
}

export default GenreListComponent
