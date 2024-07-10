import { useConfigurationUtilities, useMovieStore } from "@Store"
import { PaperClipIcon } from "@heroicons/react/24/solid"
import { map } from "lodash-es"
import { useLocation } from "react-router-dom"
import styles from "./scss/styles.module.scss"

function SummaryComponent() {
  const location = useLocation()
  const details = useMovieStore((state) => state.details)
  const { originalLanguageName } = useConfigurationUtilities(details)

  return (
    <div className={styles.summaryComponent}>
      <div className={styles.summaryComponent__content}>
        <div className={styles.item}>
          <p className={styles.label}>Original Language</p>
          <p>{originalLanguageName}</p>
        </div>
        <div className={styles.item}>
          <p className={styles.label}>Genre</p>
          <p>{map(details.genres, "name").join(", ")}</p>
        </div>
        <div className={styles.item}>
          <p className={styles.label}>Share</p>
          <div className={styles.share}>
            <input
              value={window.location.origin + location.pathname}
              readOnly
            />
            <button type="button" aria-label="Share Link Button">
              <PaperClipIcon />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.summaryComponent__tmdb}>
        <p>See more details on</p>
        <span>TMDB</span>
      </div>
    </div>
  )
}

export default SummaryComponent
