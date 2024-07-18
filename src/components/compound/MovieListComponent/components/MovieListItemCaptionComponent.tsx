import { MovieItem } from "@Store"
import { formatDate } from "@Utilities"
import classNames from "classnames"
import { PropsWithChildren } from "react"
import styles from "./scss/styles.module.scss"

type Props = PropsWithChildren<{
  data?: MovieItem,
  isOverlay?: boolean,
  showReleaseDate?: boolean
}>

function MovieListItemCaptionComponent(props: Props) {
  const { children, data, isOverlay, showReleaseDate } = props

  return (
    <div
      className={classNames(styles.movieListItemCaptionComponent, {
        [styles.overlay]: isOverlay
      })}
    >
      <div className={styles.caption}>
        {children || (
          <>
            <p>{data?.title}</p>
            {showReleaseDate && (
              <p>{formatDate(data?.release_date || "", "YYYY")}</p>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default MovieListItemCaptionComponent
