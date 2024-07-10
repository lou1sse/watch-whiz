import { useMovieStore } from "@Store"
import { formatDate } from "@Utilities"
import { useWindowSize } from "@uidotdev/usehooks"
import CreditsComponent from "./CreditsComponent"
import styles from "./scss/styles.module.scss"

function TitleComponent() {
  const { width } = useWindowSize()
  const details = useMovieStore((state) => state.details)

  return (
    <div className={styles.titleComponent}>
      <div className={styles.titleComponent__poster}>
        <img src={details.poster_url} alt={`${details.title} Poster`} />
      </div>
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
        {(width as number) > 850 && <CreditsComponent />}
      </div>
    </div>
  )
}

export default TitleComponent
