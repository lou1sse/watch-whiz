import { ChevronRightIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"
import styles from "./scss/styles.module.scss"

type Props = {
  title: string,
  actionRoute?: string,
  actionLabel?: string
}

function MovieListHeaderComponent(props: Props) {
  const { title, actionRoute, actionLabel = "See more" } = props

  return (
    <div className={styles.movieListHeaderComponent}>
      <p className={styles.title}>{title}</p>
      {actionRoute && (
        <Link to={actionRoute} className={styles.action}>
          {actionLabel}
          <ChevronRightIcon />
        </Link>
      )}
    </div>
  )
}

export default MovieListHeaderComponent
