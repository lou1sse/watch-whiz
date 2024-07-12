import { MovieImageDisplayComponent } from "@GlobalComponents"
import { useMovieStore } from "@Store"
import { formatDate } from "@Utilities"
import { useWindowSize } from "@uidotdev/usehooks"
import { useMemo } from "react"
import CreditsComponent from "./CreditsComponent"
import styles from "./scss/styles.module.scss"

function TitleComponent() {
  const { width } = useWindowSize()
  const details = useMovieStore((state) => state.details)

  const posterSize = useMemo(() => {
    const isSmallScreen = (width || 0) <= 550
    const posterWidth = isSmallScreen ? "180px" : "15rem"
    const posterHeight =
      (details.poster_path && "max-content") ||
      (isSmallScreen ? "280px" : "20rem")

    return {
      width: posterWidth,
      height: posterHeight
    }
  }, [width, details])

  return (
    <div className={styles.titleComponent}>
      <MovieImageDisplayComponent
        imageSource={details.poster_url}
        title={details.title}
        releaseDate={formatDate(details.release_date, "YYYY")}
        showPlaceholder={!details.poster_path}
        {...posterSize}
      />
      <div className={styles.titleComponent__details}>
        <div className={styles.text}>
          <div className={styles.text__heading}>
            <span className={styles.title}>{details.title}</span>
            <span className={styles.date}>
              {formatDate(details.release_date, "YYYY")}
            </span>
          </div>
          {details.original_language !== "en" && (
            <p>“{details.original_title}”</p>
          )}
          <div className={styles.text__director}>
            <span>Directed by</span>
            <p>{details.director?.name}</p>
          </div>
        </div>
        {(width || 0) > 850 && <CreditsComponent />}
      </div>
    </div>
  )
}

export default TitleComponent
